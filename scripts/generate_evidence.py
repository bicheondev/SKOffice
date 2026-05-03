#!/usr/bin/env python3
from pathlib import Path
import csv, re, json

ROOT = Path(__file__).resolve().parents[1]
MAN = ROOT / 'manifests'
ASSETS = ROOT / 'web' / 'public' / 'assets'
MAN.mkdir(exist_ok=True, parents=True)
ASSETS.mkdir(exist_ok=True, parents=True)

rpms = sorted(ROOT.glob('*.rpm'))

# source inventory
with (MAN/'source-inventory.tsv').open('w', newline='', encoding='utf-8') as f:
    w=csv.writer(f, delimiter='\t')
    w.writerow(['path','type','notes'])
    for rpm in rpms:
        w.writerow([rpm.name,'rpm','raw package source evidence'])

# package inventory
with (MAN/'package-inventory.tsv').open('w', newline='', encoding='utf-8') as f:
    w=csv.writer(f, delimiter='\t')
    w.writerow(['package','version','arch','role'])
    for rpm in rpms:
        m=re.match(r'(.+)-(\d+\.\d+-\d+)\.([^.]+)\.rpm$', rpm.name)
        if m:
            pkg, ver, arch = m.groups()
        else:
            pkg, ver, arch = rpm.stem, 'unknown', 'unknown'
        role='module' if any(k in pkg for k in ['writer','calc','impress','draw','math','base']) else 'core'
        w.writerow([pkg,ver,arch,role])

# template manifests
headers={
'ui-assets.tsv':['id','kind','source_path','target_path','evidence_note'],
'font-assets.tsv':['font_name','source_path','target_path','status'],
'startcenter-map.tsv':['slot','label_ko','label_en','icon_id','source_evidence','status'],
'module-map.tsv':['module_id','label_ko','package_hint','menu_source','toolbar_source','statusbar_source','status'],
'menu-map.tsv':['module_id','menu_path','command','label','source_file','status'],
'toolbar-map.tsv':['module_id','toolbar_id','item_command','icon_id','source_file','status'],
'statusbar-map.tsv':['module_id','status_item','source_file','status'],
'command-map.tsv':['command','module_id','label','source_file','status'],
'string-map.tsv':['string_id','locale','value','source_file','status'],
'icon-map.tsv':['icon_id','module_id','source_path','target_path','size','status'],
'dialog-map.tsv':['dialog_id','module_id','trigger_command','source_file','status'],
'behavior-map.tsv':['behavior_id','module_id','description','source_evidence','implementation_status'],
'evidence-gaps.tsv':['gap_id','area','hypothesis','todo','fallback','evidence_needed'],
'fidelity-checklist.tsv':['check_id','category','requirement','status','evidence']
}
for fn, cols in headers.items():
    p=MAN/fn
    if not p.exists():
        with p.open('w', newline='', encoding='utf-8') as f:
            w=csv.writer(f, delimiter='\t'); w.writerow(cols)

# seed maps
with (MAN/'startcenter-map.tsv').open('w', newline='', encoding='utf-8') as f:
    w=csv.writer(f, delimiter='\t')
    w.writerow(headers['startcenter-map.tsv'])
    for i,label in enumerate(['본문문서','자료표','연시물','그림','수학식','자료기지','형판','열기'],1):
        w.writerow([f'btn{i}',label,'',f'icon_{i}','rpm package assets pending extraction','hypothesis'])

with (MAN/'module-map.tsv').open('w', newline='', encoding='utf-8') as f:
    w=csv.writer(f, delimiter='\t')
    w.writerow(headers['module-map.tsv'])
    modules=[('startcenter','시작센터','sgoffice3.0'),('writer','본문문서','sgoffice3.0-writer'),('calc','자료표','sgoffice3.0-calc'),('impress','연시물','sgoffice3.0-impress'),('draw','그림','sgoffice3.0-draw'),('math','수학식','sgoffice3.0-math'),('base','자료기지','sgoffice3.0-base'),('templates','형판','sgoffice3.0')]
    for m in modules:
        w.writerow([m[0],m[1],m[2],'pending extraction','pending extraction','pending extraction','hypothesis'])

with (MAN/'evidence-gaps.tsv').open('w', newline='', encoding='utf-8') as f:
    w=csv.writer(f, delimiter='\t')
    w.writerow(headers['evidence-gaps.tsv'])
    gaps=[
      ('GAP-001','RPM extraction','Use python rpmfile tool to enumerate payloads','Implement extractor script with path metadata','Use placeholder shell with Korean terminology','Install extraction dependency and map icons/menus'),
      ('GAP-002','Menu/toolbar','Expected in soffice.cfg xml trees','Parse actual xml into menu/toolbar manifests','Fallback static minimal menus','Need extracted share/config/soffice.cfg/modules/*'),
      ('GAP-003','Start center geometry','Likely in backing_*.png and config','Measure coordinates from original assets','Use fixed 1024x768 legacy layout','Need backing images + ui descriptions')]
    for g in gaps: w.writerow(g)

# minimal web shell
app = {
  'title':'SGOffice 3.0 / 서광사무처리 3.0',
  'modules':['본문문서','자료표','연시물','그림','수학식','자료기지','형판','열기']
}
(ROOT/'web/src/app.json').write_text(json.dumps(app,ensure_ascii=False,indent=2), encoding='utf-8')

index='''<!doctype html><html lang="ko"><head><meta charset="utf-8"/><title>SGOffice 3.0</title><style>body{margin:0;background:#6f6f6f;font-family:Arial,sans-serif}#shell{width:1024px;height:768px;margin:0 auto;background:#d4d0c8;box-shadow:inset 0 0 0 1px #fff,inset 0 0 0 2px #808080}#title{height:24px;background:#0a246a;color:#fff;line-height:24px;padding:0 8px;font-size:13px}#content{padding:16px}button{width:96px;height:88px;margin:4px;border:1px solid #808080;background:#d4d0c8}</style></head><body><div id="shell"><div id="title">SGOffice 3.0 시작센터</div><div id="content"></div></div><script type="module">import app from './src/app.json' assert {type:'json'}; const c=document.getElementById('content'); app.modules.forEach(m=>{const b=document.createElement('button'); b.textContent=m; c.appendChild(b);});</script></body></html>'''
(ROOT/'web/index.html').write_text(index, encoding='utf-8')
print(f'Generated manifests for {len(rpms)} RPM sources.')
