"""Stable OCR result schemas shared by every engine adapter."""

from pydantic import BaseModel, Field


class OCRLine(BaseModel):
    text: str
    confidence: float | None = None
    bbox: tuple[float, float, float, float] | None = None


class OCRResult(BaseModel):
    """Engine-neutral output for one page.

    Keep raw_text unchanged. Language normalization belongs in a later,
    separately versioned pipeline stage.
    """

    raw_text: str
    lines: list[OCRLine] = Field(default_factory=list)
    engine: str
    engine_version: str | None = None
    language: str
    page_number: int | None = None
    diagnostics: dict[str, str | int | float | bool | None] = Field(default_factory=dict)
