# Persian Dars Learning Website

The GitHub Pages homepage is `website/index.html`. The standalone trainer is also kept as `website/persian-trainer.html`.

## Three-term learning portal

The homepage opens with three term entry cards and a shared progress dashboard showing total vocabulary and memorised words. Each term has its own study tools. Term 03 additionally has Newestan essay-writing and five-minute Sukhanrani workspaces.

## Term 03 source coverage

Term 03 combines four Dars sources, with Farsi Umumi as the chapter backbone:

| Source | Current unique vocabulary entries |
|---|---:|
| Farsi Umumi (FA) | 293 |
| Khwandan (KH) | 132 |
| Newestan (N) | 66 |
| Shunidan (SH) | 106 |
| **Total** | **588** |

The source-tagged lexicon contains 276 verb entries. Verb records include part of speech, masdar, an imperative form (or an explicit non-applicability note), and example sentences using the masdar and imperative. Repeated headwords are deduplicated while retaining source references.

- `term03-data.js` — original curated Term 03 vocabulary, FA chapter metadata, chapter summaries and cross-book mapping
- `term03-lexicon-additions.js` — expanded vocabulary from the new-word lists and opening lesson vocabulary across FA, KH, N and SH
- `term03-matn-verbs.js` — additional complex verbs and expressions selected from lesson body texts
- `term03-writing.js` — Newestan writing prompts, chapter insights, essay outlines, assessment rubric and 20 chapter-linked speech plans
- `term03-khulasa.js` — five-line Persian summaries for each of the 20 Farsi Umumi chapters, with a printable writing exercise
- `term-portal.js` — three-term landing page, term navigation and global progress dashboard
- `../tools/audit-term03.cjs` — automated source, summary, transliteration and verb-field audit

The dedicated **Khulasa** tab contains a five-line summary for each Farsi Umumi chapter and a printable space to write a summary in your own words. The summaries are based on the chapter learning objectives and the OCR text; OCR ambiguities should be checked against the original lesson pages when refining details. Their linked vocabulary is grouped under the FA chapter backbone, while source labels preserve the originating Dars book and chapter. The obsolete “My words” navigation tab has been removed.

Term 03 is Book 3 in the application. Its units are presented from Unit 20 down to Unit 1. Book 2 and its browser-local memorisation keys remain separate and unchanged.

The data files are loaded locally from this directory. No external font, OCR, API or runtime service is required. The page can be used offline after the website files have been downloaded together into the same folder.

## Deployment

The workflow `.github/workflows/deploy-pages.yml` validates the JavaScript and runs the Term 03 content audit before deploying the contents of this directory to GitHub Pages.

In the repository settings, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** if it is not already selected.

Expected site address: https://mahashemi.github.io/local-ocr/

## Content and privacy

The repository is public. Vocabulary, examples and any committed OCR text are publicly accessible. Keep private PDFs, OCR checkpoints, and any source material that you do not have permission to publish out of the repository.
