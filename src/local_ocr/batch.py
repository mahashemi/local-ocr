"""Reliable local batch OCR for PDFs using PyMuPDF and Tesseract.

The module deliberately keeps checkpoints and outputs on local disk. Each page is
checkpointed atomically so an interrupted batch can be resumed.
"""
from __future__ import annotations

import hashlib
import json
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

import fitz
import pytesseract
from PIL import Image


@dataclass(frozen=True)
class PDFInfo:
    path: Path
    page_count: int
    digest: str
    work_dir: Path
    output_path: Path


@dataclass(frozen=True)
class PageResult:
    pdf_path: Path
    page_number: int
    text: str
    source: str
    error: str | None = None


@dataclass
class BatchSummary:
    documents: int = 0
    pages_total: int = 0
    pages_completed: int = 0
    pages_failed: int = 0
    outputs: list[Path] | None = None

    def __post_init__(self) -> None:
        if self.outputs is None:
            self.outputs = []


def _sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def _safe_stem(path: Path) -> str:
    value = re.sub(r"[^A-Za-z0-9._-]+", "-", path.stem).strip("-._")
    return value[:80] or "document"


def _inspect_pdf(path: Path, working_dir: Path, output_dir: Path) -> PDFInfo:
    digest = _sha256(path)
    with fitz.open(path) as document:
        page_count = document.page_count
    identity = f"{_safe_stem(path)}-{digest[:10]}"
    work_dir = working_dir / identity
    work_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / f"{identity}.txt"
    return PDFInfo(path, page_count, digest, work_dir, output_path)


def _checkpoint_path(info: PDFInfo, page_number: int) -> Path:
    return info.work_dir / f"page-{page_number:06d}.json"


def _write_checkpoint(info: PDFInfo, result: PageResult) -> None:
    target = _checkpoint_path(info, result.page_number)
    temporary = target.with_suffix(".json.tmp")
    payload = {
        "input_sha256": info.digest,
        "page_number": result.page_number,
        "source": result.source,
        "text": result.text,
        "error": result.error,
    }
    temporary.write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")
    temporary.replace(target)


def _read_checkpoint(info: PDFInfo, page_number: int) -> PageResult | None:
    target = _checkpoint_path(info, page_number)
    if not target.exists():
        return None
    try:
        payload = json.loads(target.read_text(encoding="utf-8"))
        if payload.get("input_sha256") != info.digest:
            return None
        return PageResult(
            info.path,
            page_number,
            payload.get("text", ""),
            payload.get("source", "checkpoint"),
            payload.get("error"),
        )
    except (OSError, ValueError, TypeError):
        return None


def _recognize_page(
    info: PDFInfo,
    page_number: int,
    language: str,
    dpi: int,
    tesseract_config: str,
) -> PageResult:
    """Open a separate PyMuPDF document per task; safe for threaded page work."""
    try:
        with fitz.open(info.path) as document:
            page = document.load_page(page_number - 1)
            native_text = page.get_text("text").strip()
            # Prefer the embedded text layer when it contains meaningful text.
            if len(native_text) >= 20:
                return PageResult(info.path, page_number, native_text, "pdf-text")

            scale = dpi / 72.0
            pixmap = page.get_pixmap(
                matrix=fitz.Matrix(scale, scale),
                colorspace=fitz.csRGB,
                alpha=False,
            )
            image = Image.frombytes("RGB", (pixmap.width, pixmap.height), pixmap.samples)
            text = pytesseract.image_to_string(
                image,
                lang=language,
                config=tesseract_config,
            ).strip()
            return PageResult(info.path, page_number, text, "tesseract")
    except Exception as exc:  # noqa: BLE001 - persist per-page failure and continue batch
        return PageResult(info.path, page_number, "", "error", f"{type(exc).__name__}: {exc}")


def _write_document_output(info: PDFInfo) -> None:
    temporary = info.output_path.with_suffix(".txt.tmp")
    with temporary.open("w", encoding="utf-8", newline="\n") as stream:
        for page_number in range(1, info.page_count + 1):
            checkpoint = _read_checkpoint(info, page_number)
            stream.write(f"\n\n========== PAGE {page_number} ==========\n\n")
            if checkpoint is None:
                stream.write("[PAGE NOT PROCESSED]\n")
            elif checkpoint.error:
                stream.write(f"[OCR ERROR: {checkpoint.error}]\n")
            else:
                stream.write(checkpoint.text)
                stream.write("\n")
    temporary.replace(info.output_path)


def process_directory(
    input_dir: Path,
    output_dir: Path,
    working_dir: Path,
    *,
    language: str = "fas",
    dpi: int = 300,
    workers: int = 3,
    pages_per_batch: int = 5,
    resume: bool = True,
    recursive: bool = True,
) -> BatchSummary:
    """Process every PDF in a directory; page checkpoints allow safe resumption."""
    if workers < 1 or pages_per_batch < 1:
        raise ValueError("workers and pages_per_batch must both be at least 1")
    if not input_dir.is_dir():
        raise NotADirectoryError(input_dir)

    output_dir.mkdir(parents=True, exist_ok=True)
    working_dir.mkdir(parents=True, exist_ok=True)
    candidates: Iterable[Path] = input_dir.rglob("*") if recursive else input_dir.iterdir()
    pdf_paths = sorted(
        (path for path in candidates if path.is_file() and path.suffix.lower() == ".pdf"),
        key=lambda path: str(path).casefold(),
    )
    summary = BatchSummary(documents=len(pdf_paths))
    if not pdf_paths:
        return summary

    infos = [_inspect_pdf(path, working_dir, output_dir) for path in pdf_paths]
    summary.pages_total = sum(info.page_count for info in infos)
    config = "--oem 1 --psm 3"

    # One bounded worker pool is shared by all documents: pages from different
    # PDFs and pages within each PDF can run concurrently without nested pools.
    max_batches = max(
        ((info.page_count + pages_per_batch - 1) // pages_per_batch for info in infos),
        default=0,
    )
    with ThreadPoolExecutor(max_workers=workers, thread_name_prefix="local-ocr") as pool:
        for batch_index in range(max_batches):
            futures = {}
            for info in infos:
                first = batch_index * pages_per_batch + 1
                last = min(first + pages_per_batch - 1, info.page_count)
                for page_number in range(first, last + 1):
                    existing = _read_checkpoint(info, page_number) if resume else None
                    if existing is not None and existing.error is None:
                        summary.pages_completed += 1
                        continue
                    future = pool.submit(
                        _recognize_page, info, page_number, language, dpi, config
                    )
                    futures[future] = info

            for future in as_completed(futures):
                info = futures[future]
                result = future.result()
                _write_checkpoint(info, result)
                if result.error:
                    summary.pages_failed += 1
                else:
                    summary.pages_completed += 1

    for info in infos:
        _write_document_output(info)
        summary.outputs.append(info.output_path)
    return summary
