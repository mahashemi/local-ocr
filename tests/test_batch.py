from pathlib import Path

import fitz

from local_ocr.batch import process_directory


def test_process_directory_extracts_embedded_pdf_text_and_resumes(tmp_path: Path) -> None:
    input_dir = tmp_path / "input"
    output_dir = tmp_path / "output"
    working_dir = tmp_path / "working"
    input_dir.mkdir()

    source = input_dir / "sample.pdf"
    document = fitz.open()
    page = document.new_page()
    page.insert_text((72, 72), "This is embedded PDF text for a local OCR test.")
    document.save(source)
    document.close()

    first = process_directory(
        input_dir, output_dir, working_dir, language="eng", workers=2, pages_per_batch=1
    )
    assert first.documents == 1
    assert first.pages_total == 1
    assert first.pages_completed == 1
    assert first.pages_failed == 0
    assert first.outputs and first.outputs[0].exists()
    assert "embedded PDF text" in first.outputs[0].read_text(encoding="utf-8")

    second = process_directory(
        input_dir, output_dir, working_dir, language="eng", workers=2, pages_per_batch=1
    )
    assert second.pages_completed == 1
    assert second.pages_failed == 0
