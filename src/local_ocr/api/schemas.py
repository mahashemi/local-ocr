"""Public API response schemas, independent of OCR engine internals."""
from typing import Literal
from pydantic import BaseModel, ConfigDict

class APIModel(BaseModel):
    model_config = ConfigDict(extra="forbid")

class HealthResponse(APIModel):
    status: Literal["ok", "degraded"]
    service: str
    version: str
    mode: str
    network_access: Literal["disabled", "setup-only", "enabled"]

class LanguageProfile(APIModel):
    code: str
    name: str
    native_name: str
    script: str
    direction: Literal["ltr", "rtl"]
    status: Literal["available", "planned"]

class EngineDescriptor(APIModel):
    id: str
    name: str
    languages: list[str]
    installed: bool
    status: Literal["available", "not-installed", "planned"]
    notes: str | None = None

class ModelDescriptor(APIModel):
    id: str
    display_name: str
    engine: str
    languages: list[str]
    installed: bool
    license: str | None = None
    revision: str | None = None
