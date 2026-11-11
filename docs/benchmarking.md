# OCR benchmarking

Do not select an OCR engine from a model-card score alone. Benchmarks must reflect the books and scan conditions this application will process.

## Evaluation corpus

Build a small, manually checked local corpus (roughly 20–30 representative pages to start) covering clean modern print, older print, low-resolution scans, footnotes, multi-column pages, tables, and mixed Persian/Arabic passages. Add Nastaliq only if it appears in the target collection.

Keep source images and transcriptions local. Store a manifest with stable sample IDs and page categories; do not commit copyrighted book pages or private documents.

## Metrics

- Character error rate (CER) and word error rate (WER).
- Persian letter variants and ZWNJ preservation.
- Reading order, paragraph boundaries, footnotes, tables, and page numbers.
- Pages per minute and per-page latency.
- Peak memory and CPU/GPU utilization.
- Failure rate and reproducibility across repeated runs.

Compare engines on identical rendered pages and normalization settings. Record engine/model version, license, runtime, configuration, hardware, and dataset version with every result. Never compare scores from different datasets as if they were directly equivalent.
