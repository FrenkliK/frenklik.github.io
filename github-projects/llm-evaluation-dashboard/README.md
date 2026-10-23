# Evalboard — LLM Evaluation Dashboard

A static dashboard for comparing two LLM evaluation runs. The bundled examples are synthetic. The dashboard makes no model API calls and treats scores and flags as supplied evaluation data, not as objective truth.

## Run

Serve this folder over HTTP so the dashboard can fetch `evaluation.json`:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`. The built-in fallback dataset also makes the HTML usable when opened directly, though export depends on browser download support.

## Included

- Comparison of baseline and candidate runs
- Overall score delta and per-category means
- Per-case scores and supplied safety flags
- JSON export of the selected comparison
- Sample data in `evaluation.json`

## Extending

Keep a stable case ID across runs to compare like with like. Record prompt, expected behavior, model output, evaluator rubric/version, score, flags, and run metadata. For a real evaluation system, add blinded human review, inter-rater agreement, confidence intervals, dataset versioning, privacy controls, and explicit checks for regressions. Avoid entering confidential prompts or outputs into a public dashboard.
