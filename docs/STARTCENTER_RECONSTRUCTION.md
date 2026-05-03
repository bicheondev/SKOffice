# STARTCENTER RECONSTRUCTION

Status: Initial scaffold. This document is evidence-first and tied to manifests/*.tsv.

## Source of truth
- Raw RPM files at repository root.
- Generated inventories in manifests/source-inventory.tsv and manifests/package-inventory.tsv.

## Current reconstruction state
- Placeholder SGOffice-classic shell and fixed geometry start center scaffold in web/index.html.
- All unknowns tracked in manifests/evidence-gaps.tsv.

## Next actions
1. Extract RPM payload trees.
2. Parse soffice.cfg module/menu/toolbar/statusbar XML.
3. Populate corresponding manifests with concrete source file references.
