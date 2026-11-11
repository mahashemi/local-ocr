# Architecture

## Objective

One application with multiple deployment profiles. The API, domain models, and application services must not know whether the process runs on a personal Mac or a cloud host. Moving deployment environments should require configuration and adapter changes, not a rewrite of OCR workflows or API clients.

## Layered architecture

1. **Clients:** browser dashboard, CLI, and future API clients.
2. **HTTP API:** versioned FastAPI routes, validation, auth hooks, response schemas, and generated OpenAPI.
3. **Application services:** document ingestion, job orchestration, pause/resume/cancel, retries, results, and exports.
4. **Domain contracts:** document/job state, language profiles, OCR engine contract, and normalized page results.
5. **Ports and adapters:** database repositories, blob storage, task queue, event publisher, and OCR engine adapters.
6. **Workers:** independent processes that consume jobs, process bounded page batches, and checkpoint results.

Dependencies point inward. Domain and application code must not import FastAPI, SQLite, a cloud vendor SDK, or a specific OCR library.

## Replaceable infrastructure ports

The application will depend on interfaces for:

- **Repositories:** document, job, page-result, and export metadata.
- **Blob storage:** local filesystem now; S3-compatible/object storage later.
- **Task queue:** durable local queue now; Redis or managed queue adapter later.
- **Event publisher:** local event broker/SSE now; distributed pub/sub later.
- **OCR engine:** engine-neutral input/output contract.
- **Language profile:** script direction, normalization rules, and language-specific processing.

Implementations are selected at startup from validated configuration. Do not scatter `if cloud:` or `if local:` branches through business logic.

## Deployment profiles

| Concern | Local profile (now) | Cloud profile (future) |
|---|---|---|
| API | FastAPI bound to 127.0.0.1 | Same FastAPI app behind TLS/reverse proxy |
| Database | SQLite | PostgreSQL |
| Blob storage | Local filesystem | S3-compatible object storage |
| Queue | Durable local queue | Redis/managed queue adapter |
| Workers | Local worker processes | Independently scalable worker processes |
| Progress events | Local event source + SSE | Distributed event source + SSE |
| Model assets | Explicit local model cache | Explicitly provisioned model storage |
| Security | Loopback-only, no remote exposure | Authentication, authorization, TLS, quotas, secret management |

Cloud services are not required for local operation. Do not add a cloud dependency merely to preserve future portability.

## API contract

All public endpoints live under `/api/v1`. The API is the stable boundary for the dashboard and CLI. Generate OpenAPI from the same typed request/response models used at runtime. Keep IDs opaque and never expose local filesystem paths.

## Document and page lifecycle

1. Stream the uploaded PDF to configured blob storage.
2. Inspect metadata, checksum, page count, and whether pages already contain usable digital text.
3. Create a durable job and page records.
4. Scheduler dispatches bounded batches to workers.
5. Worker extracts digital text where appropriate or renders a page and invokes the selected engine.
6. Persist raw output and diagnostics as a page checkpoint.
7. Apply optional, versioned language normalization without mutating raw output.
8. Reconstruct output in original page order and generate requested exports.

Workers continue if the browser closes. Job state and completed page checkpoints survive application restarts.

## Parallel processing defaults

Initial defaults: 3 workers, 5 pages per batch, parallelism across independent PDFs and within large PDFs. These are configurable starting points, not universal optimums. Benchmark worker counts and batch sizes on the target Mac. Use bounded queues, memory safeguards, retries, and controlled model concurrency. Avoid loading multiple heavyweight model copies; a shared inference process may be preferable.

## Language and engine strategy

Language is a profile, not a separate application. Persian is the first available profile. Arabic, Urdu, English, and additional languages can be registered without changing job management or API response envelopes.

OCR engines are adapters. The scheduler and API consume a normalized result schema regardless of whether recognition came from Bina, Tesseract, or another local engine. Record engine ID, pinned version/revision, license, supported languages, and benchmark metadata.

## Offline and security guarantees

- No hosted OCR, paid APIs, telemetry, or runtime model downloads.
- Bind local server to loopback by default.
- Model downloads are explicit setup operations.
- Missing local model assets produce an actionable error; never fall back to a remote endpoint.
- Local documents, results, database, logs, and models are excluded from Git.
- Remote deployment must explicitly enable authentication and authorization before listening on a non-loopback interface.
