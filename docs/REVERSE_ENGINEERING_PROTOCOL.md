# REVERSE ENGINEERING PROTOCOL

## Evidence generation policy (non-destructive)

`python3 scripts/generate_evidence.py` has three output classes:

1. **Regenerated each run (non-curated inventories):**
   - `manifests/source-inventory.tsv`
   - `manifests/package-inventory.tsv`

2. **Curated manifests (seed once, preserve thereafter):**
   - `manifests/startcenter-map.tsv`
   - `manifests/module-map.tsv`
   - `manifests/ui-assets.tsv`
   - `manifests/font-assets.tsv`
   - `manifests/menu-map.tsv`
   - `manifests/toolbar-map.tsv`
   - `manifests/statusbar-map.tsv`
   - `manifests/command-map.tsv`
   - `manifests/string-map.tsv`
   - `manifests/icon-map.tsv`
   - `manifests/dialog-map.tsv`
   - `manifests/behavior-map.tsv`
   - `manifests/evidence-gaps.tsv`
   - `manifests/fidelity-checklist.tsv`

   These are **created only if missing** and otherwise preserved byte-for-byte by default.

3. **Web scaffold files (never touched by default inventory):**
   - `web/index.html`
   - `web/src/app.json`

## Explicit destructive operations

- `--force-seed` allows reseeding curated manifests and will overwrite existing curated content. The script prints an explicit destructive warning when this flag is used.
- `--init-web-scaffold` creates `web/index.html` and `web/src/app.json` only if missing.
- `--init-web-scaffold --force-init-web-scaffold` explicitly overwrites existing web scaffold files.

## Regression safety check

Run `make regression-preserve` to verify a manually inserted row in `manifests/startcenter-map.tsv` survives `make inventory`.
