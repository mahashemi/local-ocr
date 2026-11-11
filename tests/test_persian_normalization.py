from local_ocr.persian.normalization import normalize_persian


def test_normalizes_arabic_yeh_and_kaf():
    assert normalize_persian("علي كتاب") == "علی کتاب"


def test_preserves_zwnj_and_numerals():
    value = "می‌روم ۱۲۳"
    assert normalize_persian(value) == value


def test_can_disable_letter_normalization():
    value = "علي كتاب"
    assert normalize_persian(value, normalize_arabic_letters=False) == value
