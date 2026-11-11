from local_ocr.batch import clean_extracted_text, has_suspicious_embedded_text


def test_detects_control_character_corruption_in_embedded_text():
    assert has_suspicious_embedded_text("Persian text \x02 with control bytes", language="fas")


def test_accepts_normal_embedded_text():
    assert not has_suspicious_embedded_text("This is a normal embedded text layer.")


def test_cleaner_removes_controls_but_preserves_persian_marks_and_zwnj():
    value = "می\u200cروم\x02  ي كَ\n\n\nمتن"
    cleaned = clean_extracted_text(value)
    assert "\x02" not in cleaned
    assert "می\u200cروم" in cleaned
    assert "ی کَ" in cleaned
    assert "\n\n\n" not in cleaned
