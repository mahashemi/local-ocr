# Architecture

## Main boundaries

1. **Ingestion** inspects PDFs, calculates checksums, counts pages, and detects pages that already contain usable text.
2. **Scheduler** owns document and page-batch state, bounded queues, retries, and recovery.
3. **Engine adapters** implement a stable OCR interface. A new model should not require changes to scheduling, storage, API, or export.
4. **Language processing** performs optional language-specific normalization after raw recognition. Raw OCR is immutable.
5. **Storage** persists jobs, page status, raw output, normalized output, and errors locally.
6. **Export** reconstructs pages in source order and writes formats such as DOCX and RTF.
7. **API and dashboard** expose local job controls and progress; workers continue if the browser closes.

## Engine contract

An engine receives a page image plus an explicit language/options configuration and returns a normalized result containing text, optional regions/lines, confidence where available, engine identity/version, and diagnostics. Engine-specific details remain inside the adapter.

## Parallel processing

Initial defaults: three workers, five pages per batch, parallelism across documents and within large documents. These are configurable starting points, not universal optimums. Benchmark worker counts and batch sizes on the target Mac. Avoid loading multiple heavyweight model copies; a shared inference process may be preferable.

## Persian support

Persian normalization is a separate, opt-in stage. Preserve the raw output and record normalization version/options. Tests must cover Persian/Arabic Yeh and Kaf, ZWNJ, punctuation, numerals, RTL text, and mixed Arabic/Persian passages.
