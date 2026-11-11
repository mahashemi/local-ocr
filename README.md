# Local OCR

A free, local-first OCR workbench for scanned books and documents. Designed to run on your own computer, with an offline operating mode and pluggable OCR engines.

**First language:** Persian (Farsi, `fas`). The core pipeline is language-independent so additional languages can be added without changing document processing, job management, or export code.

## Non-negotiable design principles

- OCR and document processing run locally. No cloud OCR or paid APIs.
- Input PDFs, page images, intermediate results, database, logs, and exports remain on local storage.
- Model downloads are explicit setup actions. No automatic model downloads during normal processing.
- Offline mode must work without network access after setup; missing local assets produce a clear error.
- No telemetry or analytics.
- OCR engines are replaceable adapters behind a stable interface.
- Raw engine output is preserved separately from language-specific normalization.

## Project status

Early foundation. The initial implementation will establish the engine contract, language normalization boundary, local configuration, and tests before adding the queue, workers, API, and browser dashboard.

## Planned capabilities

- Batch processing of many PDFs with persistent queue and resumable page-level progress.
- Parallel processing across documents and page batches, with bounded resource usage.
- Digital-text detection to avoid unnecessary OCR.
- Side-by-side PDF and OCR review.
- Persian-aware RTL and ZWNJ handling, with raw text preserved.
- DOCX and RTF exports with RTL formatting.
- Benchmarking for character error rate (CER), word error rate (WER), layout quality, speed, and memory.
- Localhost-only dashboard and CLI.

## Development setup

Requires macOS (Apple Silicon supported) and Python 3.12+.

```bash
# Install uv if it is not already installed:
brew install uv

# Create and activate the project environment:
uv sync --extra dev

# Run tests:
uv run pytest
```

The OCR engine and model assets are installed separately from the application. See [docs/architecture.md](docs/architecture.md) and [docs/offline-first.md](docs/offline-first.md).

## Local data

Runtime data belongs under the configured data directory (default: `./data`) and is excluded from Git. Do not commit PDFs, page images, OCR outputs, model weights, caches, or personal documents.

## License

Application source code is MIT licensed. Third-party OCR engines, model weights, and datasets retain their own licenses; check each before downloading or using them.
