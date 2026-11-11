#!/usr/bin/env bash
set -euo pipefail
export LOCAL_OCR_ENV="local"
export LOCAL_OCR_ALLOW_NETWORK="false"
HOST="127.0.0.1"
PORT="${LOCAL_OCR_PORT:-8000}"
if [[ ! -d .venv ]]; then
  echo "Python environment not found. Create it and install requirements first."
  exit 1
fi
source .venv/bin/activate
exec python -m uvicorn local_ocr.api.app:app --app-dir src --host "$HOST" --port "$PORT" --reload
