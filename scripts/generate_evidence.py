#!/usr/bin/env python3
from pathlib import Path
import argparse
import csv
import re

ROOT = Path(__file__).resolve().parents[1]
MAN = ROOT / 'manifests'
ASSETS = ROOT / 'web' / 'public' / 'assets'

HEADERS = {
    'ui-assets.tsv': ['id', 'kind', 'source_path', 'target_path', 'evidence_note'],
    'font-assets.tsv': ['font_name', 'source_path', 'target_path', 'status'],
    'startcenter-map.tsv': ['slot', 'label_ko', 'label_en', 'icon_id', 'source_evidence', 'status'],
    'module-map.tsv': ['module_id', 'label_ko', 'package_hint', 'menu_source', 'toolbar_source', 'statusbar_source', 'status'],
    'menu-map.tsv': ['module_id', 'menu_path', 'command', 'label', 'source_file', 'status'],
    'toolbar-map.tsv': ['module_id', 'toolbar_id', 'item_command', 'icon_id', 'source_file', 'status'],
    'statusbar-map.tsv': ['module_id', 'status_item', 'source_file', 'status'],
    'command-map.tsv': ['command', 'module_id', 'label', 'source_file', 'status'],
    'string-map.tsv': ['string_id', 'locale', 'value', 'source_file', 'status'],
    'icon-map.tsv': ['icon_id', 'module_id', 'source_path', 'target_path', 'size', 'status'],
    'dialog-map.tsv': ['dialog_id', 'module_id', 'trigger_command', 'source_file', 'status'],
    'behavior-map.tsv': ['behavior_id', 'module_id', 'description', 'source_evidence', 'implementation_status'],
    'evidence-gaps.tsv': ['gap_id', 'area', 'hypothesis', 'todo', 'fallback', 'evidence_needed'],
    'fidelity-checklist.tsv': ['check_id', 'category', 'requirement', 'status', 'evidence'],
}

SEED_ROWS = {
    'startcenter-map.tsv': [
        [f'btn{i}', label, '', f'icon_{i}', 'rpm package assets pending extraction', 'hypothesis']
        for i, label in enumerate(['본문문서', '자료표', '연시물', '그림', '수학식', '자료기지', '형판', '열기'], 1)
    ],
    'module-map.tsv': [
        ['startcenter', '시작센터', 'sgoffice3.0', 'pending extraction', 'pending extraction', 'pending extraction', 'hypothesis'],
        ['writer', '본문문서', 'sgoffice3.0-writer', 'pending extraction', 'pending extraction', 'pending extraction', 'hypothesis'],
        ['calc', '자료표', 'sgoffice3.0-calc', 'pending extraction', 'pending extraction', 'pending extraction', 'hypothesis'],
        ['impress', '연시물', 'sgoffice3.0-impress', 'pending extraction', 'pending extraction', 'pending extraction', 'hypothesis'],
        ['draw', '그림', 'sgoffice3.0-draw', 'pending extraction', 'pending extraction', 'pending extraction', 'hypothesis'],
        ['math', '수학식', 'sgoffice3.0-math', 'pending extraction', 'pending extraction', 'pending extraction', 'hypothesis'],
        ['base', '자료기지', 'sgoffice3.0-base', 'pending extraction', 'pending extraction', 'pending extraction', 'hypothesis'],
        ['templates', '형판', 'sgoffice3.0', 'pending extraction', 'pending extraction', 'pending extraction', 'hypothesis'],
    ],
    'evidence-gaps.tsv': [
        ['GAP-001', 'RPM extraction', 'Use python rpmfile tool to enumerate payloads', 'Implement extractor script with path metadata', 'Use placeholder shell with Korean terminology', 'Install extraction dependency and map icons/menus'],
        ['GAP-002', 'Menu/toolbar', 'Expected in soffice.cfg xml trees', 'Parse actual xml into menu/toolbar manifests', 'Fallback static minimal menus', 'Need extracted share/config/soffice.cfg/modules/*'],
        ['GAP-003', 'Start center geometry', 'Likely in backing_*.png and config', 'Measure coordinates from original assets', 'Use fixed 1024x768 legacy layout', 'Need backing images + ui descriptions'],
    ],
}


def write_tsv(path: Path, header: list[str], rows: list[list[str]]) -> None:
    with path.open('w', newline='', encoding='utf-8') as f:
        w = csv.writer(f, delimiter='\t')
        w.writerow(header)
        w.writerows(rows)


def inventory_rpms() -> list[Path]:
    return sorted(ROOT.glob('*.rpm'))


def regenerate_inventory_files(rpms: list[Path]) -> None:
    write_tsv(
        MAN / 'source-inventory.tsv',
        ['path', 'type', 'notes'],
        [[rpm.name, 'rpm', 'raw package source evidence'] for rpm in rpms],
    )

    package_rows: list[list[str]] = []
    for rpm in rpms:
        match = re.match(r'(.+)-(\d+\.\d+-\d+)\.([^.]+)\.rpm$', rpm.name)
        if match:
            pkg, ver, arch = match.groups()
        else:
            pkg, ver, arch = rpm.stem, 'unknown', 'unknown'
        role = 'module' if any(k in pkg for k in ['writer', 'calc', 'impress', 'draw', 'math', 'base']) else 'core'
        package_rows.append([pkg, ver, arch, role])
    write_tsv(MAN / 'package-inventory.tsv', ['package', 'version', 'arch', 'role'], package_rows)


def ensure_curated_seeds(force_seed: bool) -> tuple[int, int]:
    created = 0
    reseeded = 0
    for file_name, header in HEADERS.items():
        path = MAN / file_name
        existed_before = path.exists()
        should_seed = (not existed_before) or force_seed
        if not should_seed:
            continue
        rows = SEED_ROWS.get(file_name, [])
        write_tsv(path, header, rows)
        if existed_before and force_seed:
            reseeded += 1
        else:
            created += 1
    return created, reseeded


def init_web_scaffold(force: bool) -> str:
    web_index = ROOT / 'web' / 'index.html'
    app_json = ROOT / 'web' / 'src' / 'app.json'
    app_json.parent.mkdir(parents=True, exist_ok=True)

    if (web_index.exists() or app_json.exists()) and not force:
        return 'skipped'

    web_index.write_text(
        '<!doctype html><html lang="ko"><head><meta charset="utf-8"/><title>SGOffice 3.0</title></head><body><div id="app">SGOffice scaffold initialized.</div></body></html>',
        encoding='utf-8',
    )
    app_json.write_text('{\n  "title": "SGOffice 3.0 / 서광사무처리 3.0"\n}\n', encoding='utf-8')
    return 'written'


def main() -> None:
    parser = argparse.ArgumentParser(description='Generate SGOffice evidence inventory and seed manifests safely.')
    parser.add_argument('--force-seed', action='store_true', help='Reseed curated manifest files even if they already exist (destructive).')
    parser.add_argument('--init-web-scaffold', action='store_true', help='Create web/index.html and web/src/app.json if missing.')
    parser.add_argument('--force-init-web-scaffold', action='store_true', help='Overwrite existing web scaffold files when used with --init-web-scaffold.')
    args = parser.parse_args()


    if args.force_seed:
        print('WARNING: --force-seed is destructive and will overwrite curated manifest files.', flush=True)

    MAN.mkdir(exist_ok=True, parents=True)
    ASSETS.mkdir(exist_ok=True, parents=True)

    rpms = inventory_rpms()
    regenerate_inventory_files(rpms)
    created, reseeded = ensure_curated_seeds(force_seed=args.force_seed)

    scaffold_status = 'not-requested'
    if args.init_web_scaffold:
        scaffold_status = init_web_scaffold(force=args.force_init_web_scaffold)

    print(f'Generated inventories for {len(rpms)} RPM sources.')
    print(f'Curated manifest seeds created: {created}, reseeded: {reseeded}.')
    print(f'Web scaffold: {scaffold_status}.')


if __name__ == '__main__':
    main()
