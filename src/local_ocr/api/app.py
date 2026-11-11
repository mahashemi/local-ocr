"""FastAPI application entry point."""
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from local_ocr import __version__
from local_ocr.api.routes import router

app = FastAPI(
    title="Local OCR API",
    summary="Local-first, offline-capable, multi-language OCR platform",
    description=("API-first OCR workbench. Documents and models are processed locally; "
                 "runtime network access and cloud OCR are disabled by design."),
    version=__version__, docs_url="/docs", redoc_url="/redoc", openapi_url="/openapi.json",
)
app.include_router(router, prefix="/api/v1")

@app.get("/", response_class=HTMLResponse, include_in_schema=False)
async def home() -> str:
    """Lightweight local landing page linking to interactive API documentation."""
    return """<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Local OCR</title><style>
:root{color-scheme:dark}body{margin:0;background:#101820;color:#edf2f4;font:16px system-ui,sans-serif;display:grid;min-height:100vh;place-items:center}
main{max-width:680px;padding:40px}h1{font-size:2.5rem;margin:0 0 8px}p{color:#b8c4cc;line-height:1.6}.tag{display:inline-block;border:1px solid #3c806b;color:#8fe0bd;border-radius:20px;padding:5px 12px;font-size:.85rem}
a{color:#8fe0bd}li{margin:9px 0}.muted{color:#91a0aa;font-size:.9rem}
</style></head><body><main><span class="tag">LOCAL · OFFLINE-FIRST</span><h1>Local OCR</h1>
<p>Your local, multi-language OCR service. Persian is the first language profile. No cloud OCR, telemetry, or automatic model downloads.</p>
<ul><li><a href="/docs">Interactive API documentation</a></li><li><a href="/api/v1/health">Service health</a></li><li><a href="/api/v1/languages">Language profiles</a></li><li><a href="/api/v1/engines">OCR engines</a></li></ul>
<p class="muted">Foundation milestone · API v1 · Application version __VERSION__</p></main></body></html>""".replace("__VERSION__", __version__)
