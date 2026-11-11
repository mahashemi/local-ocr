# Offline-first operation

## Network policy

The application is designed to process documents without network access. Model and dependency downloads are explicit setup operations only.

- No hosted OCR endpoints, paid APIs, telemetry, or analytics.
- No automatic model downloads, remote fallbacks, or update checks during processing.
- Bind the web server to `127.0.0.1` by default.
- Store all documents, page images, OCR results, database files, logs, and exports locally.
- If an engine or model is missing in offline mode, stop with an actionable local error. Never silently use a remote service.

## Verification checklist

1. Install dependencies and explicitly download approved model assets.
2. Start the application and process a small test PDF.
3. Disconnect Wi-Fi (or otherwise block network access).
4. Restart the application and process another PDF.
5. Confirm the queue, OCR, review, and exports still work.
6. Inspect network activity during the disconnected run and confirm no remote dependency is required.

## Data hygiene

The `data/`, `logs/`, model cache, and local environment are excluded from Git. Keep personal documents and generated outputs out of issue reports and commits.
