from local_ocr.core.schemas import OCRLine, OCRResult


def test_engine_neutral_result_keeps_raw_text():
    result = OCRResult(
        raw_text="متن خام",
        engine="test-engine",
        language="fas",
        page_number=1,
    )
    assert result.raw_text == "متن خام"
    assert result.engine == "test-engine"
    assert result.lines == []


def test_line_can_carry_confidence_and_bounding_box():
    line = OCRLine(
        text="نمونه",
        confidence=0.98,
        bbox=(1.0, 2.0, 30.0, 12.0),
    )
    assert line.confidence == 0.98
    assert line.bbox == (1.0, 2.0, 30.0, 12.0)
