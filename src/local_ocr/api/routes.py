"""Initial API routes for service and capability discovery."""
from pathlib import Path
import os
from fastapi import APIRouter
from local_ocr import __version__
from local_ocr.api.schemas import EngineDescriptor, HealthResponse, LanguageProfile, ModelDescriptor

router = APIRouter()

@router.get("/health", response_model=HealthResponse, tags=["system"])
async def health() -> HealthResponse:
    """Liveness endpoint; does not access the network or download anything."""
    return HealthResponse(status="ok", service="local-ocr", version=__version__,
                          mode=os.getenv("LOCAL_OCR_ENV", "local"), network_access="disabled")

@router.get("/languages", response_model=list[LanguageProfile], tags=["discovery"])
async def list_languages() -> list[LanguageProfile]:
    """List language profiles known to this installation."""
    return [
        LanguageProfile(code="fas", name="Persian", native_name="فارسی", script="Arabic",
                        direction="rtl", status="available"),
        LanguageProfile(code="ara", name="Arabic", native_name="العربية", script="Arabic",
                        direction="rtl", status="planned"),
        LanguageProfile(code="urd", name="Urdu", native_name="اردو", script="Arabic",
                        direction="rtl", status="planned"),
        LanguageProfile(code="eng", name="English", native_name="English", script="Latin",
                        direction="ltr", status="planned"),
    ]

@router.get("/engines", response_model=list[EngineDescriptor], tags=["discovery"])
async def list_engines() -> list[EngineDescriptor]:
    """Report candidate adapters without implying their model assets are installed."""
    return [
        EngineDescriptor(id="tesseract", name="Tesseract OCR", languages=["fas", "ara", "eng"],
                         installed=False, status="not-installed",
                         notes="Native binary and language data are separate installs."),
        EngineDescriptor(id="bina", name="Bina Persian OCR", languages=["fas"], installed=False,
                         status="planned",
                         notes="Candidate; license and Apple Silicon runtime are being verified."),
    ]

@router.get("/models", response_model=list[ModelDescriptor], tags=["discovery"])
async def list_models() -> list[ModelDescriptor]:
    """List local model directories only; never trigger downloads."""
    model_dir = Path(os.getenv("LOCAL_OCR_MODEL_DIR",
                               "~/.cache/local-ocr/models")).expanduser()
    if not model_dir.exists():
        return []
    return [ModelDescriptor(id=entry.name, display_name=entry.name, engine="unknown",
                            languages=[], installed=True)
            for entry in sorted(model_dir.iterdir())
            if entry.is_dir() and not entry.name.startswith(".")]
