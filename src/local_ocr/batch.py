"""Reliable local batch OCR for PDFs using PyMuPDF and Tesseract.

Raw page text and rejected embedded PDF text are checkpointed locally. A separate
cleaned document is generated without modifying the raw OCR output.
"""
from __future__ import annotations

import hashlib
import json
import re
import unicodedata
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from pathlib import Path
from typing import Callable, Iterable

import pymupdf
import pytesseract
from PIL import Image

from local_ocr.persian.normalization import normalize_persian


@dataclass(frozen=True)
class PDFInfo:
    path: Path
    page_count: int
    digest: str
    work_dir: Path
    output_path: Path

    @property
    def cleaned_output_path(self) -> Path:
        return self.output_path.with_name(f"{self.output_path.stem}.clean.txt")


@dataclass(frozen=True)
class PageResult:
    pdf_path: Path
    page_number: int
    text: str
    source: str
    error: str | None = None
    rejected_native_text: str | None = None


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
    with pymupdf.open(path) as document:
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
        "checkpoint_version": 2,\n        "input_sha256": info.digest,
        "page_number": result.page_number,
        "source": result.source,
        "text": result.text,
        "error": result.error,
        "rejected_native_text": result.rejected_native_text,
    }
    temporary.write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")
    temporary.replace(target)


def _read_checkpoint(info: PDFInfo, page_number: int) -> PageResult | None:
    target = _checkpoint_path(info, page_number)
    if not target.exists():
        return None
    try:
        payload = json.loads(target.read_text(encoding="utf-8"))
        if payload.get("checkpoint_version") != 2:\n            return None\n        if payload.get("input_sha256") != info.digest:
            return None
        return PageResult(
            info.path,
            page_number,
            payload.get("text", ""),
            payload.get("source", "checkpoint"),
            payload.get("error"),
            payload.get("rejected_native_text"),
        )
    except (OSError, ValueError, TypeError):
        return None


def has_suspicious_embedded_text(text: str, *, language: str = "fas") -> bool:
    """Detect obvious extraction corruption before trusting a PDF text layer.

    The first pass is deliberately conservative: control bytes and replacement
    characters are strong evidence of broken ToUnicode mappings. More subtle
    visual/text mismatches require page-image evaluation and are not guessed here.
    """
    if not text.strip():
        return True
    for char in text:
        category = unicodedata.category(char)
        if char == "\ufffd":
            return True
        if category == "Cc" and char not in "\n\r\t":
            return True
    return False


def clean_extracted_text(text: str, *, language: str = "fas") -> str:
    """Remove invalid control characters and apply conservative language cleanup.

    Keep line breaks, tabs, ZWNJ/ZWJ, bidi marks, Arabic diacritics and punctuation.
    """
    kept = []
    for char in text:
        category = unicodedata.category(char)
        if char == "\ufffd":
            continue
        if category == "Cc" and char not in "\n\r\t":
            continue
        kept.append(char)

    cleaned = "".join(kept).replace("\r\n", "\n").replace("\r", "\n")
    if language == "fas":
        cleaned = normalize_persian(cleaned)
    cleaned = re.sub(r"[ \t]+(?=\n)", "", cleaned)
    cleaned = re.sub(r"\n{3,}", "\n\n", cleaned)
    return cleaned.strip()


def _recognize_page(
    info: PDFInfo,
    page_number: int,
    language: str,
    dpi: int,
    tesseract_config: str,
) -> PageResult:
    """Open a separate PyMuPDF document per task; safe for threaded page work."""
    try:
        with pymupdf.open(info.path) as document:
            page = document.load_page(page_number - 1)
            native_text = page.get_text("text").strip()
            if len(native_text) >= 20 and not has_suspicious_embedded_text(
                native_text, language=language
            ):
                return PageResult(info.path, page_number, native_text, "pdf-text")

            rejected_native = native_text if native_text else None
            scale = dpi / 72.0
            pixmap = page.get_pixmap(
                matrix=pymupdf.Matrix(scale, scale),
                colorspace=pymupdf.csRGB,
                alpha=False,
            )
            image = Image.frombytes("RGB", (pixmap.width, pixmap.height), pixmap.samples)
            text = pytesseract.image_to_string(
                image,
                lang=language,
                config=tesseract_config,
            ).strip()
            source = "tesseract-fallback" if rejected_native else "tesseract"
            return PageResult(
                info.path, page_number, text, source,
                rejected_native_text=rejected_native,
            )
    except Exception as exc:  # noqa: BLE001 - persist per-page failure and continue batch
        return PageResult(info.path, page_number, "", "error", f"{type(exc).__name__}: {exc}")


def _write_document_output(info: PDFInfo) -> None:
    raw_temp = info.output_path.with_suffix(".txt.tmp")
    clean_temp = info.cleaned_output_path.with_suffix(".txt.tmp")
    with raw_temp.open("w", encoding="utf-8", newline="\n") as raw_stream, clean_temp.open(
        "w", encoding="utf-8", newline="\n"
    ) as clean_stream:
        for page_number in range(1, info.page_count + 1):
            checkpoint = _read_checkpoint(info, page_number)
            header = f"========== PAGE {page_number} =========="
            raw_stream.write(f"\n\n{header}\n\n")
            clean_stream.write(f"\n\n{header}\n\n")
            if checkpoint is None:
                marker = "[PAGE NOT PROCESSED]\n"
                raw_stream.write(marker)
                clean_stream.write(marker)
            elif checkpoint.error:
                marker = f"[OCR ERROR: {checkpoint.error}]\n"
                raw_stream.write(marker)
                clean_stream.write(marker)
            else:
                raw_stream.write(checkpoint.text + "\n")
                clean_stream.write(
                    clean_extracted_text(checkpoint.text) + "\n"
                )
    raw_temp.replace(info.output_path)
    clean_temp.replace(info.cleaned_output_path)


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
    progress_callback: Callable[[int, int, PageResult], None] | None = None,
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
    processed = 0

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
                        processed += 1
                        if progress_callback:
                            progress_callback(processed, summary.pages_total, existing)
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
                processed += 1
                if progress_callback:
                    progress_callback(processed, summary.pages_total, result)

    for info in infos:
        _write_document_output(info)
        summary.outputs.append(info.output_path)
        summary.outputs.append(info.cleaned_output_path)
    return summary
