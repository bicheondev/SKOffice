# SOURCE EVIDENCE MAP

## File ownership model

- **Automated inventory outputs:** `source-inventory.tsv`, `package-inventory.tsv`.
- **Curated reverse-engineering maps:** all other `manifests/*.tsv` files.
- **UI implementation files:** `web/index.html`, `web/src/app.json`, and future module shells.

## Overwrite rules

- Automated inventory outputs are regenerated each run.
- Curated maps are seeded only when missing (or reseeded via `--force-seed`).
- Web scaffold files are never modified during routine inventory/fidelity commands.
