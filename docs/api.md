# API v1 contract

Base path: `/api/v1`. The API is the stable boundary for the dashboard, CLI, and future external clients. It is generated from typed FastAPI/Pydantic schemas and exposed as OpenAPI at `/openapi.json`.

## Available endpoints in the bootstrap milestone

| Method | Path | Purpose |
|---|---|---|
| GET | `/health` | Service health and local/offline mode |
| GET | `/languages` | Language profile discovery |
| GET | `/engines` | Engine adapter discovery |
| GET | `/models` | Installed local model directory discovery |

The interactive Swagger UI is at `/docs`.

## Planned document and job lifecycle

| Method | Path | Purpose |
|---|---|---|
| POST | `/documents` | Stream-upload a PDF to configured storage |
| GET | `/documents` | List documents |
| GET | `/documents/{document_id}` | Document metadata |
| POST | `/jobs` | Create an OCR job |
| GET | `/jobs` | List/filter jobs |
| GET | `/jobs/{job_id}` | Job state and aggregate progress |
| POST | `/jobs/{job_id}/pause` | Request pause |
| POST | `/jobs/{job_id}/resume` | Resume a paused/interrupted job |
| POST | `/jobs/{job_id}/cancel` | Request cancellation |
| GET | `/jobs/{job_id}/pages` | Page-level status and results |
| GET | `/jobs/{job_id}/results` | Ordered normalized OCR result |
| POST | `/jobs/{job_id}/exports` | Create DOCX/RTF export |
| GET | `/exports/{export_id}` | Export status and metadata |
| GET | `/exports/{export_id}/download` | Download generated file |
| GET | `/jobs/{job_id}/events` | Server-Sent Events progress stream |

These endpoints are design targets, not implemented endpoints in the current bootstrap.

## Proposed job creation request

```json
{
  "document_ids": ["doc_..."],
  "language": "fas",
  "engine": "auto",
  "profile": "books",
  "options": {
    "workers": 3,
    "pages_per_batch": 5,
    "normalize_text": true
  }
}
```

The server validates options against deployment policy. A client cannot bypass configured memory and concurrency limits.

## Normalized result envelope

```json
{
  "document_id": "doc_...",
  "language": "fas",
  "engine": {
    "id": "provider.model",
    "version": "pinned-revision"
  },
  "pages": [
    {
      "page_number": 1,
      "status": "completed",
      "raw_text": "...",
      "normalized_text": "...",
      "blocks": [],
      "confidence": null,
      "warnings": []
    }
  ]
}
```

Raw text is immutable. Normalization is explicit and separately stored. Preserve page numbers, block geometry when available, confidence when supplied, and warnings when layout or reading order is uncertain.

## Contract rules

- Stable opaque IDs; never expose server filesystem paths.
- Idempotency keys for document/job creation.
- Structured errors with stable error codes.
- Pagination for document/job/page collections.
- Explicit job state transitions and timestamps.
- SSE events include event ID and job ID; reconnect with last-event ID.
- API versioning and OpenAPI contract tests.
- Authentication disabled only for loopback local mode; mandatory for remote deployment.
- Do not change existing response semantics within `/api/v1`; introduce a new API version for breaking changes.
