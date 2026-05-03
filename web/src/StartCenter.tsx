const ASSET_BASE = 'https://raw.githubusercontent.com/bicheondev/SKOffice/assets';

const createItems = [
  { label: '본문문서', icon: `${ASSET_BASE}/icons/res/odt_32.png` },
  { label: '수학식', icon: `${ASSET_BASE}/icons/res/odf_32.png` },
  { label: '자료표', icon: `${ASSET_BASE}/icons/res/ods_32.png` },
  { label: '형판...', icon: `${ASSET_BASE}/icons/res/ott_32.png` },
  { label: '연시물', icon: `${ASSET_BASE}/icons/res/odp_32.png` },
];

export default function StartCenter() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#808080] p-6">
      <div className="w-[600px] border border-[#8f8f8f] bg-[#f4f4f4] shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
        <div className="relative flex h-8 items-center justify-center border-b border-[#c8c8c8] bg-[#e6e6e6]">
          <div className="absolute left-3 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[14px] font-medium text-[#666666]">서광사무처리</span>
        </div>

        <div className="flex h-[582px]">
          <div
            className="h-full w-[229px] shrink-0"
            style={{
              backgroundImage: `url(${ASSET_BASE}/shell/backing_left.png)`,
              backgroundSize: '229px 582px',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <div className="flex flex-1 flex-col bg-white px-8 py-8">
            <h2 className="mb-8 text-[30px] font-bold tracking-[-0.02em] text-[#222222]">새 문서 만들기</h2>

            <div className="grid grid-cols-2 gap-x-12 gap-y-7">
              {createItems.map((item) => (
                <button key={item.label} type="button" className="flex items-center gap-4 text-left">
                  <img src={item.icon} alt="" className="h-8 w-8 shrink-0" />
                  <span className="text-[22px] leading-none text-[#222222]">{item.label}</span>
                </button>
              ))}
              <div />
            </div>

            <div className="mt-auto">
              <button
                type="button"
                className="inline-flex items-center gap-5 border border-[#b5b5b5] bg-[#f7f7f7] px-6 py-2 text-[22px] text-[#222222]"
              >
                <span>열기...</span>
                <span className="text-[14px]">▼</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
