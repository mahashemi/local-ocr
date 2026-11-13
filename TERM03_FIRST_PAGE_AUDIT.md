# Term 03 — first-page vocabulary audit

**Audit date:** 2026-11-13  
**Repository:** `mahashemi/local-ocr`  
**Scope:** the vocabulary/word-list block on page 1 of every Term 03 Dars source file.

## Result

All **60/60 first-page vocabulary lists** have been reconciled against the website lexicon. All identifiable headwords, multi-word expressions, and listed variants are now searchable in the Term 03 vocabulary data.

| Series | Source files checked | Result |
|---|---:|---|
| Farsi Umumi (FA3) | 20/20 | First-page list items represented |
| Khulasa (KH3) | 20/20 | First-page list items represented |
| Newestan (N3) | 10/10 | First-page list items represented |
| Sukhanrani (SH3) | 10/10 | First-page list items represented |
| **Total** | **60/60** | **Vocabulary reconciliation complete** |

The review covered these source IDs:

- FA3-01 through FA3-20
- KH3-01 through KH3-20
- N3-01 through N3-10
- SH3-01 through SH3-10

## Important page-boundary detail

The first 100 lines are **not always page 1**. For example, FA3-05 reaches its PAGE 2 marker at line 42, and FA3-20 reaches PAGE 2 at line 92. Therefore, the review used the explicit page markers and the first-page vocabulary block rather than blindly treating every line up to line 100 as page 1.

## Corrections and additions

- Added missing first-page vocabulary across all four series, including multi-word phrases and verb entries.
- Added source-linked terms and variants where the same headword already existed elsewhere in the lexicon.
- Preserved the existing vocabulary helper/schema conventions; no new data fields were introduced.
- Added or completed Persian examples, English meanings, transliterations, and part-of-speech labels for new entries.
- Kept masdar and amr separate. Where a natural direct imperative does not exist, the entry uses the existing no-imperative convention and an explanation.
- Resolved FA3-05 OCR `یکعامله` as `یک عالمه` from context.
- Confirmed `روزکی` is a genuine literary Persian word meaning a short while / a few days, rather than an OCR typo.
- Corrected clear OCR errors in the source text for FA3-05 and FA3-20, including `هوای کسی را داشنت` → `هوای کسی را داشتن`, `به هیچوجه` → `به هیچ وجه`, `آویخنت` → `آویختن`, `کوزهگر` → `کوزه‌گر`, `رسشار` → `سرشار`, `افسانهای` → `افسانه‌ای`, `نربد` → `نبرد`, `رسمایهگذاری` → `سرمایه‌گذاری`, `خوشنوا` → `خوش‌نوا`, `نبشنت` → `نبشتن`, and `کَل` → `گل`.

## Validation performed

- JavaScript syntax check passed for all six Term 03 data modules:
  - `term03-data.js`
  - `term03-lexicon-additions.js`
  - `term03-matn-verbs.js`
  - `term03-source-audit.js`
  - `term03-khulasa.js`
  - `term03-writing.js`
- Checked 1,610 vocabulary helper-call rows in `term03-lexicon-additions.js`; the validated Term 03 lexicon contains 1,844 entries.
- No Persian- or Cyrillic-script characters were found in the transliteration fields checked.
- No masdar/amr example mismatches or identical masdar/amr pairs were found by the custom validation pass.

## OCR layout and connector-line qualification

Standalone `--` lines around the vocabulary blocks were retained because they act as separators in the OCR text; they were not treated as accidental word connectors. The repository contains OCR text files, not the original scanned page images. Consequently, visual column order, exact printed line breaks, and whether a separator is present in the scan cannot be certified from these text files alone. No unsupported visual-layout corrections were made.

## Writing, speaking and Khulasa linkage

- Added 35 supplementary `WR3-01` flashcards for vocabulary used across Term 03 writing, speaking and summary materials.
- Added a source-based Newestan model paragraph from `N3-01`, explicitly demonstrating a topic sentence, supporting sentences, a concluding sentence and punctuation.
- The model also displays all 21 Dars 01 vocabulary headwords as clickable flashcard terms.
- Improved Persian reading typography for Newestan, Sukhanrani and Khulasa with responsive sizing, line spacing and platform-safe Vazirmatn / Noto Naskh / Geeza Pro fallbacks.
- The shared vocabulary linker now supports common plural forms and links meaningful words that occur in the Persian examples on existing flashcards. Khulasa uses the same lookup helper.
- The automated Term 03 audit checks the Newestan example structure, its 21 flashcard mappings, the shared writing-link helper and the typography rules.

## Deployment status

The earlier Term 01 deployment blocker has been corrected. The latest Pages validation and Term 03 content audit should be checked against the current `main` commit and deployment run before treating this report as the latest live-site confirmation.
