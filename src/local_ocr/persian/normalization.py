"""Conservative Persian text normalization.

This module is intentionally opt-in. Never overwrite the engine's raw text.
"""

_TRANSLATION = str.maketrans({"ي": "ی", "ك": "ک"})


def normalize_persian(text: str, *, normalize_arabic_letters: bool = True) -> str:
    """Normalize common Arabic codepoints to Persian equivalents.

    This does not insert/remove ZWNJ, alter diacritics, or change numerals.
    Those transformations need separate explicit policies and tests.
    """
    if not normalize_arabic_letters:
        return text
    return text.translate(_TRANSLATION)
