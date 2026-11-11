# Persian Dars Learning Website

The GitHub Pages homepage is `website/index.html`. The standalone trainer is also kept as `website/persian-trainer.html`.

## Term 03

- `index.html` — deployed study interface
- `persian-trainer.html` — editable source HTML
- `term03-data.js` — local Term 03 vocabulary, grammar labels, examples and FA-based cross-book links

Term 03 is Book 3 in the application. Its units are presented from Unit 20 down to Unit 1. Book 2 and its browser-local memorisation keys remain separate and unchanged.

The Term 03 data file is loaded locally from this directory. No external font, OCR, API or runtime service is required. The page can be used offline after the website files have been downloaded together into the same folder.

## Deployment

The workflow `.github/workflows/deploy-pages.yml` deploys the contents of this directory to GitHub Pages when `main` is updated.

In the repository settings, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** if it is not already selected.

Expected site address: https://mahashemi.github.io/local-ocr/

## Content and privacy

The repository is public. Vocabulary, examples and any committed OCR text are publicly accessible. Keep private PDFs, OCR checkpoints, and any source material that you do not have permission to publish out of the repository.
