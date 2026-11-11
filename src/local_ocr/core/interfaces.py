"""Ports (interfaces) for infrastructure and OCR providers.

Application services depend on these protocols, never on a concrete local/cloud
implementation. Keep method contracts small and vendor-neutral.
"""
from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Any, BinaryIO, Protocol, runtime_checkable

from local_ocr.core.schemas import OCRResult


@dataclass(frozen=True)
class StoredObject:
    key: str
    size_bytes: int
    checksum_sha256: str


@runtime_checkable
class BlobStorage(Protocol):
    """Document and result storage; local filesystem and object-store adapters."""

    def put_stream(self, key: str, source: BinaryIO) -> StoredObject: ...
    def open_read(self, key: str) -> BinaryIO: ...
    def delete(self, key: str) -> None: ...


@runtime_checkable
class OCREngineProvider(Protocol):
    """A local OCR engine adapter with no implicit network behavior."""

    @property
    def engine_id(self) -> str: ...

    def is_available(self) -> bool: ...

    def recognize(
        self,
        image_path: Path,
        *,
        language: str,
        options: dict[str, Any] | None = None,
        page_number: int | None = None,
    ) -> OCRResult: ...


@runtime_checkable
class TaskQueue(Protocol):
    """Durable queue abstraction; implementation controls local/distributed delivery."""

    def enqueue(self, job_id: str, payload: dict[str, Any]) -> str: ...
    def acknowledge(self, message_id: str) -> None: ...


@runtime_checkable
class EventPublisher(Protocol):
    """Publish job lifecycle events for SSE or a future distributed event adapter."""

    def publish(self, topic: str, event: dict[str, Any]) -> None: ...


@runtime_checkable
class JobRepository(Protocol):
    """Persistence contract for job state; implementations may use SQLite/PostgreSQL."""

    def create(self, job: dict[str, Any]) -> str: ...
    def get(self, job_id: str) -> dict[str, Any] | None: ...
    def update(self, job_id: str, changes: dict[str, Any]) -> None: ...
