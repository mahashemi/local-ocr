"""Abstract contract implemented by local OCR engines."""

from abc import ABC, abstractmethod
from pathlib import Path
from typing import Any

from local_ocr.core.schemas import OCRResult


class OCREngine(ABC):
    name: str

    @abstractmethod
    def is_available(self) -> bool:
        """Return whether the engine and its local assets are ready."""

    @abstractmethod
    def recognize(
        self,
        image_path: Path,
        *,
        language: str,
        options: dict[str, Any] | None = None,
        page_number: int | None = None,
    ) -> OCRResult:
        """Recognize one page image without making network requests."""
