# Frenkli Koleci — Software Engineer Portfolio

A static portfolio website with professional project demos and small interactive games. It uses plain HTML, CSS, and JavaScript and requires no build step, runtime, or API key.

## Preview locally

Open `index.html` in a browser, or start a local static server from this folder:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploy with GitHub Pages

This repository is intended to be the user site for `FrenkliK`. Rename the repository to **`frenklik.github.io`** (GitHub requires the username portion to be lowercase). In **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/(root)**, then save. The site will be available at <https://frenklik.github.io> after Pages finishes its first deployment.

The entry point is the root `index.html`. `.nojekyll` disables Jekyll processing so Pages serves the static files as-is. All demo iframe paths are relative to the site root.

## Included demos

- `github-projects/job-tracker/` — local-first job tracker
- `github-projects/deployed-api/` — API source, tests, and deployment starter
- `github-projects/testing-project/` — Playwright test suite and its sample app
- `github-projects/secure-file-sharing/` — sharing-flow UI prototype and threat-model notes
- `github-projects/llm-evaluation-dashboard/` — run comparison dashboard and synthetic sample data
- `neon-survivor.html` — playable arcade demo

The API service itself needs a Node.js host; GitHub Pages only serves the static portfolio and browser demos. The portfolio uses a small local API simulation for its interactive explorer.
