# Term 03 — final quality audit

This document records the completion criteria for the Term 03 study set. The goal is to make Term 03 study-ready without repeated vocabulary-only maintenance passes.

## Source inventory

| Source family | Original files | Lexicon source IDs |
|---|---:|---:|
| Farsi Umumi (FA3) | 20 | 20 |
| Khwandan (KH3) | 20 | 20 |
| Newestan (N3) | 10 | 10 |
| Shunidan (SH3) | 10 | 10 |
| **Total** | **60** | **60** |

The original source files are kept in `study-materials/dars/term-03/`. The N3-04 file is included there; it is not missing or outside the Term 03 collection.

## Content inventory

| Measure | Final inventory |
|---|---:|
| Runtime vocabulary rows | 939 |
| Distinct Persian headwords (normalised for spaces and ZWNJ) | 938 |
| Raw verb records across the source modules | 528 |
| Distinct verb headwords | 398 |
| Verbs with a direct imperative | 453 |
| Verbs without a natural direct imperative, with an explanation | 75 |
| FA chapter summaries in the unit metadata | 20 |
| Khulasa summaries | 20 |
| Writing prompts | 20 |
| Five-minute speech prompts | 20 |

The 939 runtime rows intentionally include a repeated headword where it belongs to two separate core learning units. Shared supplementary terms are deduplicated globally while retaining their full source and unit references.

## Grammar and example checks

- Masdar and imperative are stored separately.
- No curated verb has an identical masdar and imperative.
- Each listed masdar appears in its own Persian example sentence.
- Each direct imperative appears in a separate imperative example sentence.
- Verbs without a natural direct imperative use `—`, have no misleading imperative example, and include a Persian explanation.
- Transliteration fields are checked for accidental Persian-script characters.
- Noun and adjective entries have a complete Persian / transliteration / English example triple.

## Chapter and source mapping

- N3-04 is mapped to Unit 02 for social relationships and family context.
- Its emotional-needs verb `اهمیت دادن` is also linked to Unit 09 as supporting vocabulary.
- Shared vocabulary can appear in every mapped unit's chapter list, flashcards and quizzes without creating duplicate global entries or separate memorisation progress.
- The Verb Treasury groups repeated verb headwords and preserves their source references.

## Study materials

- All 20 FA units have a chapter summary in the unit metadata.
- All 20 Khulasa summaries contain five or six concise lines.
- All 20 chapters have a writing prompt and a five-minute speech prompt.
- Newestan and Shunidan vocabulary is integrated into the main chapter vocabulary as well as the exclusive Verb Treasury where the entry is a verb.

## Regression protection

`tools/audit-term03.cjs` is the deployment audit. It checks the 60 original source files, all 60 source IDs, vocabulary fields, transliterations, masdar / imperative examples, no-imperative explanations, all 20 chapter summaries, Khulasa coverage, writing prompts, speech prompts and shared-unit filtering.

`tests/test_term03_content.py` provides additional focused regression checks for source coverage, chapter counts and the grammar examples.

**Completion rule:** Term 03 is considered study-ready when the repository's deployment audit passes. Further changes should be limited to a demonstrated source correction, a genuine app defect, or newly supplied study material—not another routine pass over already-audited vocabulary.
