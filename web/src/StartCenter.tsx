const ASSET_BASE = 'https://raw.githubusercontent.com/bicheondev/SKOffice/assets';

const apps = [
  { label: '글편집기', icon: `${ASSET_BASE}/icons/res/odt_32.png` },
  { label: '표편집기', icon: `${ASSET_BASE}/icons/res/ods_32.png` },
  { label: '연시물', icon: `${ASSET_BASE}/icons/res/odp_32.png` },
  { label: '그림', icon: `${ASSET_BASE}/icons/res/odg_32.png` },
  { label: '수학식', icon: `${ASSET_BASE}/icons/res/odf_32.png` },
  { label: '자료표', icon: `${ASSET_BASE}/icons/res/odb_32.png` },
];

export default function StartCenter() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#6f6f6f] p-4">
      <div className="w-[980px] border border-black bg-[#d4d0c8] shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#808080]">
        <div className="flex h-7 items-center justify-between bg-[#0a246a] px-2 text-sm text-white">
          <span className="select-none">서광사무처리 3.0</span>
          <div className="flex gap-1">
            {['—', '□', '×'].map((symbol) => (
              <button
                key={symbol}
                type="button"
                aria-label={symbol}
                className="flex h-5 w-5 items-center justify-center border border-[#d4d0c8] bg-[#c0c0c0] p-0 text-xs font-bold leading-none text-black"
              >
                {symbol}
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex h-[582px] overflow-hidden">
          <img
            src={`${ASSET_BASE}/shell/backing_left.png`}
            alt=""
            className="h-[582px] w-[229px] shrink-0"
          />
          <div
            className="h-[582px] flex-1"
            style={{
              backgroundImage: `url(${ASSET_BASE}/shell/backing_space.png)`,
              backgroundRepeat: 'repeat-x',
              backgroundSize: '5px 582px',
            }}
          />
          <img
            src={`${ASSET_BASE}/shell/backing_right.png`}
            alt=""
            className="h-[582px] w-[203px] shrink-0"
          />

          <div className="absolute left-5 top-8 flex w-[170px] flex-col gap-3">
            {apps.map((app) => (
              <button
                key={app.label}
                type="button"
                className="flex items-center gap-3 rounded-sm border border-transparent px-2 py-1 text-left hover:border-[#0a246a]"
              >
                <img src={app.icon} alt="" className="h-8 w-8 shrink-0" />
                <span className="text-[18px] leading-none text-white [text-shadow:1px_1px_1px_#1a1a1a]">
                  {app.label}
                </span>
              </button>
            ))}
          </div>

          <div className="absolute right-10 top-20 flex h-[420px] w-[360px] flex-col border border-[#a6a6a6] bg-white/70 p-4">
            <h2 className="mb-3 border-b border-[#c5c5c5] pb-2 text-base text-[#333333]">최근 문서</h2>
            <div className="flex flex-1 items-center justify-center text-base text-[#666666]">최근 문서 없음</div>
          </div>
        </div>
      </div>
    </div>
  );
}
