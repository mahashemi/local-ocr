# Term 02 — Final Quality Audit

**Branch:** `term02-quality-pass-and-learning-ui`  
**Scope:** FA2, KH2, N2 (Newestan), SH2 (Shunidan)  
**Source directory:** `study-materials/dars/term-02/`

## Source inventory

| Source family | Chapters/files |
|---|---:|
| Farsi Umumi 2 (FA2) | 20 |
| Khwandan 2 (KH2) | 20 |
| Newestan 2 (N2) | 10 |
| Shunidan 2 (SH2) | 10 |
| **Total** | **60** |

All 60 source IDs are represented in the Term 02 lexicon. Supplementary vocabulary keeps its source ID and can be linked to more than one relevant FA2 unit. Duplicate headwords are merged in the application while preserving all source references and unit mappings.

## Content inventory

| Area | Completed inventory |
|---|---:|
| Source-linked vocabulary records | 391 |
| Distinct Persian headwords after normalisation | 387 |
| Verb records with grammar data | 185 |
| Verbs with a direct imperative | 170 |
| Verbs without a natural direct imperative | 15 |
| Khulasa summaries | 20 |
| Khulasa lines | 100 |
| Neveshtan writing prompts | 20 |
| Sukhanrani prompts | 20 |

### Verb grammar safeguards

Every verb record has a masdar example that contains the exact masdar. Every verb with a direct imperative has an imperative example containing the exact imperative form. The 15 verbs for which a direct imperative would be unnatural or misleading use `amr: "—"`, no imperative example, and a Persian explanation. Static validation found no masdar/imperative collisions and no mixed Persian-script transliterations.

### Khulasa vocabulary linking

- Every one of the 100 summary lines has at least one vocabulary match.
- Matching searches the complete term vocabulary, not only the current chapter.
- Term 02 vocabulary is prioritised when the same headword appears in more than one term.
- Persian punctuation is ignored during matching.
- Clicking a linked word opens a flashcard modal with flip/reveal, meaning and example.
- The close button, backdrop and Escape key close the modal.

### Quran references

Quran references in Khulasa and Sukhanrani open the QuranMemorizer deep link in a new tab using:

`https://mahashemi.github.io/QuranMemorizer/#/surah/{surah}/ayah/{ayah}`

The Surah and ayah values are taken from each reference, not guessed from display text.

### Reading and writing presentation

Khulasa, Neveshtan and Sukhanrani use larger Persian type, improved line spacing, clearer panels and more comfortable mobile sizing. Drafting and speech prompts remain term-specific.

## Automated regression checks

`tools/audit-term02.cjs` checks:

1. The 60 original source files and all 60 source IDs.
2. At least 380 vocabulary records and 180 grammar-checked verbs.
3. Complete trilingual examples and Latin-only transliteration fields.
4. Masdar and imperative example integrity, including explanations for no-amr verbs.
5. All 20 Khulasa summaries, each 5–6 lines, with vocabulary links on every line.
6. All 20 writing prompts and 20 speech prompts with explicit Quran references.
7. N2/KH2 cross-unit links, modal/keyboard handling and new-tab Quran links.

The deployment workflow runs the Term 02 audit and JavaScript syntax checks before publishing.

## Freeze criteria

Term 02 is ready to freeze once the automated audit and GitHub Pages deployment both pass. After that, reopen it only for a concrete source correction, a reproducible app defect, or newly supplied source material—not for another routine vocabulary sweep.
