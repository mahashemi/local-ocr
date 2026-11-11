# Local OCR

A free, local-first, API-first OCR platform for scanned books and documents. Persian (Farsi, `fas`) is the first language profile; the application architecture is language-independent and designed for future Arabic, Urdu, English, and other language support.

## Non-negotiable principles

- OCR and document processing run on your machine. No cloud OCR or paid APIs.
- PDFs, page images, intermediate results, databases, logs, and exports stay in local storage.
- Model downloads are explicit setup actions. No automatic downloads or remote fallbacks during processing.
- Normal operation must work without internet after setup.
- No telemetry or analytics.
- The dashboard and CLI are API clients; they do not contain OCR business logic.
- OCR engines are replaceable adapters behind stable contracts.
- Raw engine output is preserved separately from language-specific normalization.

## Current milestone: API foundation

The first local API is available under `/api/v1`:

| Endpoint | Purpose |
|---|---|
| `GET /api/v1/health` | Local service health and operating mode |
| `GET /api/v1/languages` | Language profile discovery |
| `GET /api/v1/engines` | OCR engine adapter discovery |
| `GET /api/v1/models` | Locally installed model directory discovery |
| `GET /docs` | Interactive OpenAPI documentation |

The initial server is a foundation milestone, not yet the complete OCR workbench. PDF upload, durable jobs, worker scheduling, page-level progress, OCR execution, review UI, and exports are the next implementation stages.

## Run on macOS (Apple Silicon)

Requires Python 3.12 or newer.

```bash
git clone https://github.com/mahashemi/local-ocr.git
cd local-ocr

python3 -m venv .venv
source .venv/bin/activate

python -m pip install --upgrade pip
python -m pip install -r requirements.txt

bash start.sh
```

Open:

- Local home: http://127.0.0.1:8000
- Interactive API docs: http://127.0.0.1:8000/docs
- Health check: http://127.0.0.1:8000/api/v1/health

Stop the server with `Ctrl+C`.

The server binds to `127.0.0.1` only. Do not change this to `0.0.0.0` for personal document processing.

## Tests

```bash
source .venv/bin/activate
python -m pytest
```

## Architecture

See [architecture](docs/architecture.md), [API contract](docs/api.md), [offline-first policy](docs/offline-first.md), and [benchmarking plan](docs/benchmarking.md).

The same API and application services are intended to run in both local and future cloud deployments. Local and cloud deployments will select different database, storage, queue, event, and worker adapters. Cloud infrastructure is not required for local use.

## Initial processing defaults

- 3 concurrent workers
- 5 pages per batch
- Parallel processing across independent PDFs and page batches within large PDFs
- Page order preserved during reconstruction
- Bounded queues, memory safeguards, checkpointing, and retries

These are starting defaults and will be benchmarked on the target Mac before tuning.

## Data and models

Runtime data belongs under the local data directory and is excluded from Git. Model weights are also excluded from Git; see [models/README.md](models/README.md). Every engine/model must have its license, runtime requirements, supported languages, revision, and checksum recorded before use.

## License

Application source code is MIT licensed. Third-party engines, model weights, and datasets retain their own licenses and terms.


## Bulk PDF processing (first working pipeline)

Install Tesseract 5 and its Persian `fas` language data, then place PDFs in
`data/input/`. From the repository root with `.venv` active:

```bash
python -m local_ocr.cli process --input data/input --output data/output
```

The command recursively scans for PDFs, extracts embedded text where available,
and uses local Tesseract for scanned pages. It writes one UTF-8 text file per PDF
under `data/output/` and atomic per-page checkpoints under `data/working/`.
Completed pages are skipped on rerun; failed pages are retried. Defaults are
3 shared worker threads, 5 pages per batch, and 300 DPI. No network access is
performed by the processing command.
