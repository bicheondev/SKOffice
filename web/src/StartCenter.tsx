const A = 'https://raw.githubusercontent.com/bicheondev/SKOffice/assets';

const APPS: [string, string, string][] = [
  ['본문문서', `${A}/icons/res/odt_32.png`,   'writer'],
  ['수학식',   `${A}/icons/res/odf_32.png`,   'math'],
  ['자료표',   `${A}/icons/res/ods_32.png`,   'calc'],
  ['형판...',  `${A}/icons/res/ott_32_8.png`, 'template'],
  ['연시물',   `${A}/icons/res/odp_32.png`,   'impress'],
];

const SPRITE = `url(${A}/theme/macstyle/Windows_qt.png)`;

// mnTitleHeight=18, btnPos=269, btnTop=150, shadow=32
// W=873, H=582
// workspace=#868f97, text=#263542
// shadow: 9px 8px 12px 0.66
// border: 1px #999, radius top=4px

const W = 873;
const H = 582;
const BTN_POS = 269;
const BTN_TOP = 150;
const SHADOW = 32;

export default function StartCenter() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      backgroundImage: `url(${A}/wallpaper/default.jpg)`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      backgroundColor: '#868f97',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'천리마', 'Lucida Grande', sans-serif",
    }}>
      {/* Shadow */}
      <div style={{ filter: 'drop-shadow(9px 8px 12px rgba(0,0,0,0.66))' }}>
        {/* Window frame */}
        <div style={{
          borderTopLeftRadius: '4px', borderTopRightRadius: '4px',
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          border: '1px solid #999',
        }}>
          {/* Titlebar */}
          <div style={{
            height: '22px', flexShrink: 0,
            backgroundImage: `url(${A}/theme/titlebar.png)`,
            backgroundSize: '100% 100%',
            display: 'flex', alignItems: 'center',
            paddingLeft: '6px', gap: '5px',
          }}>
            {([['닫기','0px'],['최소화','-14px'],['최대화','-28px']] as [string,string][]).map(([label,pos]) => (
              <span key={label} aria-label={label} style={{
                backgroundImage: SPRITE, backgroundPosition: `${pos} 0px`,
                width: '14px', height: '14px', display: 'inline-block', flexShrink: 0,
              }} />
            ))}
            <span style={{
              flex: 1, textAlign: 'center',
              fontSize: '11px', color: '#444',
              marginRight: '50px',
            }}>서광사무처리</span>
          </div>

          {/* Body */}
          <div style={{
            width: `${W}px`, height: `${H}px`,
            display: 'flex', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              width: '229px', flexShrink: 0, height: `${H}px`,
              backgroundImage: `url(${A}/shell/backing_left.png)`,
              backgroundSize: '229px 582px', backgroundRepeat: 'no-repeat',
            }} />
            <div style={{
              flex: 1, height: `${H}px`,
              backgroundImage: `url(${A}/shell/backing_space.png)`,
              backgroundRepeat: 'repeat-x', backgroundSize: `5px ${H}px`,
            }} />
            <div style={{
              width: '203px', flexShrink: 0, height: `${H}px`,
              backgroundImage: `url(${A}/shell/backing_right.png)`,
              backgroundSize: '203px 582px', backgroundRepeat: 'no-repeat',
            }} />

            {/* Content */}
            <div style={{
              position: 'absolute',
              left: `${BTN_POS}px`, top: `${BTN_TOP}px`,
              right: `${SHADOW}px`, bottom: `${SHADOW}px`,
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                fontSize: '18px', fontWeight: 'bold',
                color: '#263542', letterSpacing: '0.08em',
                marginBottom: '20px',
              }}>새 문서 만들기</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
                {APPS.map(([label, icon, key]) => (
                  <button key={key} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '0', textAlign: 'left',
                    color: '#263542', fontSize: '11px', fontWeight: 'normal',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.5)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'none')}>
                    <img src={icon} alt="" style={{ width: '32px', height: '32px', flexShrink: 0 }} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              <div style={{ marginTop: '24px' }}>
                <button style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '0', color: '#263542', fontSize: '11px',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.5)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'none')}>
                  <img src={`${A}/icons/folder_32.png`} alt="" style={{ width: '32px', height: '32px' }} />
                  <span>열기...</span>
                  <span style={{ fontSize: '8px' }}>▼</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
