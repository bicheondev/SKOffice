.PHONY: inventory manifests build fidelity gaps preview regression-preserve

inventory:
	python3 scripts/generate_evidence.py

manifests: inventory

build:
	python3 -m py_compile scripts/generate_evidence.py scripts/regression_check.py

fidelity:
	python3 scripts/generate_evidence.py
	wc -l manifests/*.tsv

gaps:
	cat manifests/evidence-gaps.tsv

preview:
	python3 -m http.server 8000 -d web

regression-preserve:
	python3 scripts/regression_check.py
