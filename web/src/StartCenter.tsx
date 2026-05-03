const ASSET_BASE = 'https://raw.githubusercontent.com/bicheondev/SKOffice/assets';

const createItems = [
  { label: '본문문서', icon: `${ASSET_BASE}/icons/res/odt_32.png` },
  { label: '수학식',   icon: `${ASSET_BASE}/icons/res/odf_32.png` },
  { label: '자료표',  icon: `${ASSET_BASE}/icons/res/ods_32.png` },
  { label: '형판...', icon: `${ASSET_BASE}/icons/res/ott_32_8.png` },
  { label: '연시물',  icon: `${ASSET_BASE}/icons/res/odp_32.png` },
];

const SPRITE = `url(${ASSET_BASE}/theme/macstyle/Windows_qt.png)`;

export default function StartCenter() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#808080', display: 'flex', flexDirection: 'column' }}>
      {/* Titlebar */}
      <div style={{
        height: '22px',
        backgroundImage: `url(${ASSET_BASE}/theme/titlebar.png)`,
        backgroundSize: '100% 100%',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '6px',
        gap: '5px',
        flexShrink: 0,
      }}>
        {[['닫기','0px'],['최소화','-14px'],['최대화','-28px']].map(([label, pos]) => (
          <span key={label} aria-label={label} style={{
            backgroundImage: SPRITE,
            backgroundPosition: `${pos} 0px`,
            width: '14px', height: '14px', display: 'inline-block', flexShrink: 0,
          }} />
        ))}
        <span style={{ flex: 1, textAlign: 'center', fontSize: '13px', color: '#444', marginRight: '50px' }}>서광사무처리</span>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Left panel */}
        <div style={{
          width: '229px', flexShrink: 0,
          backgroundImage: `url(${ASSET_BASE}/shell/backing_left.png)`,
          backgroundSize: '229px 100%',
          backgroundRepeat: 'no-repeat',
        }} />

        {/* Right panel */}
        <div style={{ flex: 1, background: 'white', display: 'flex', flexDirection: 'column', padding: '32px', overflow: 'auto' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', marginTop: 0 }}>새 문서 만들기</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 48px' }}>
            {createItems.map(item => (
              <button key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
                <img src={item.icon} alt="" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '16px' }}>{item.label}</span>
              </button>
            ))}
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #b5b5b5', background: '#f7f7f7', padding: '4px 16px', fontSize: '14px', cursor: 'pointer' }}>
              <span>열기...</span><span>▼</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
