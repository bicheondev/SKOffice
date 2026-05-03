#!/usr/bin/env python3
from pathlib import Path
import hashlib
import subprocess


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()

startcenter = Path('manifests/startcenter-map.tsv')
web_index = Path('web/index.html')
app_json = Path('web/src/app.json')

orig = startcenter.read_text(encoding='utf-8')
dummy = 'dummy-slot\t더미\t\tdummy_icon\tmanual-test\tmanual\n'
if dummy not in orig:
    startcenter.write_text(orig + dummy, encoding='utf-8')

before_web = {
    'web/index.html': sha256(web_index),
    'web/src/app.json': sha256(app_json),
}

subprocess.run(['make', 'inventory'], check=True)

now = startcenter.read_text(encoding='utf-8')
if dummy not in now:
    raise SystemExit('dummy row was removed by inventory run')

after_web = {
    'web/index.html': sha256(web_index),
    'web/src/app.json': sha256(app_json),
}
if before_web != after_web:
    raise SystemExit('web scaffold files changed during inventory run')

print('preservation check passed (curated row + web scaffold unchanged)')
