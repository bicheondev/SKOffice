const A = 'https://raw.githubusercontent.com/bicheondev/SKOffice/assets';

const APPS: [string, string, string][] = [
  ['본문문서', `${A}/icons/res/odt_32.png`,   'writer'],
  ['수학식',   `${A}/icons/res/odf_32.png`,   'math'],
  ['자료표',   `${A}/icons/res/ods_32.png`,   'calc'],
  ['형판...',  `${A}/icons/res/ott_32_8.png`, 'template'],
  ['연시물',   `${A}/icons/res/odp_32.png`,   'impress'],
];

const SPRITE = `url(${A}/theme/macstyle/Windows_qt.png)`;

// === Reverse-engineered constants ===
// OOo backingwindow.cxx: backing_left=229px H=582px, mnBtnPos=229+40=269, mnBtnTop=150, nShadow=32
// Metacity XP-Grassy: left/right/bottom border=4px, title gradient #808080→#c0c0c0
// Metacity compositor: shadow radius=6, offset=(-9,-7.5), opacity=0.66
// macstyle gtkrc: radius=3.0 (engine), border-radius top = 4px (Windows.png pixel analysis)
// VCL settings.cxx: workspace=#868f97, labelText=#263542, dialog=COL_LIGHTGRAY=#c0c0c0
// VCL settings.cxx: mnTitleHeight=18, button font size=11 normal, product=28 bold, welcome=18 bold
// Window min width = 582 * 3/2 = 873px

const W = 873;
const H = 582;
const SHADOW = 32;
const BTN_POS = 269;  // 229 + 40
const BTN_TOP = 150;

export default function StartCenter() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${A}/wallpaper/default.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#868f97',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'천리마', 'Lucida Grande', sans-serif",
    }}>
      {/* Metacity compositor shadow wrapper */}
      <div style={{
        filter: 'drop-shadow(9px 8px 12px rgba(0,0,0,0.66))',
      }}>
        {/* Metacity window frame: borderRadius top=4px, overflow hidden to clip */}
        <div style={{
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          border: '4px solid #b8b8b8',
          borderBottom: '4px solid #888',
        }}>

          {/* Titlebar: height=18px, gradient #808080→#c0c0c0 */}
          <div style={{
            height: '18px',
            flexShrink: 0,
            background: 'linear-gradient(to right, #808080, #c0c0c0)',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '4px',
            gap: '4px',
          }}>
            {([['닫기','0px'],['최소화','-14px'],['최대화','-28px']] as [string,string][]).map(([label,pos]) => (
              <span key={label} aria-label={label} style={{
                backgroundImage: SPRITE,
                backgroundPosition: `${pos} 0px`,
                width: '14px', height: '14px',
                display: 'inline-block', flexShrink: 0,
              }} />
            ))}
            <span style={{
              flex: 1,
              textAlign: 'center',
              fontSize: '11px',
              fontWeight: 'normal',
              color: '#263542',
              marginRight: '50px',
            }}>서광사무처리</span>
          </div>

          {/* Window body */}
          <div style={{
            width: `${W}px`,
            height: `${H}px`,
            display: 'flex',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* backing_left 229px */}
            <div style={{
              width: '229px', flexShrink: 0, height: `${H}px`,
              backgroundImage: `url(${A}/shell/backing_left.png)`,
              backgroundSize: '229px 582px', backgroundRepeat: 'no-repeat',
            }} />
            {/* backing_space tiled */}
            <div style={{
              flex: 1, height: `${H}px`,
              backgroundImage: `url(${A}/shell/backing_space.png)`,
              backgroundRepeat: 'repeat-x',
              backgroundSize: `5px ${H}px`,
            }} />
            {/* backing_right 203px */}
            <div style={{
              width: '203px', flexShrink: 0, height: `${H}px`,
              backgroundImage: `url(${A}/shell/backing_right.png)`,
              backgroundSize: '203px 582px', backgroundRepeat: 'no-repeat',
            }} />

            {/* Content: left=mnBtnPos(269), top=mnBtnTop(150) from window origin */}
            {/* shadow(32) already included in backing image */}
            <div style={{
              position: 'absolute',
              left: `${BTN_POS}px`,
              top: `${BTN_TOP}px`,
              right: `${SHADOW}px`,
              bottom: `${SHADOW}px`,
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Welcome string: size=18, bold, color=#263542 */}
              <div style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#263542',
                letterSpacing: '0.08em',
                marginBottom: '20px',
              }}>새 문서 만들기</div>

              {/* Buttons: font size=11, normal weight */}
              {/* Layout: col0=writer/calc/impress, col1=math/template */}
              {/* row spacing from source: nBDelta = imageHeight+10 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
                {APPS.map(([label, icon, key]) => (
                  <button key={key} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '0', textAlign: 'left', color: '#263542',
                    fontSize: '11px', fontWeight: 'normal',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.5)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'none')}>
                    <img src={icon} alt="" style={{ width: '32px', height: '32px', flexShrink: 0 }} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {/* Open button: nB2Delta = 3*imageHeight/2 below last row */}
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
