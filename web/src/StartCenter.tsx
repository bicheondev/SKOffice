const A = 'https://raw.githubusercontent.com/bicheondev/SKOffice/assets';

const APPS: [string, string, string][] = [
  ['본문문서', `${A}/icons/res/odt_32.png`,   'writer'],
  ['수학식',   `${A}/icons/res/odf_32.png`,   'math'],
  ['자료표',   `${A}/icons/res/ods_32.png`,   'calc'],
  ['형판...',  `${A}/icons/res/ott_32_8.png`, 'template'],
  ['연시물',   `${A}/icons/res/odp_32.png`,   'impress'],
];

const SPRITE = `url(${A}/theme/macstyle/Windows_qt.png)`;

// OOo source values:
// backing_left=229px, backing_right=203px, height=582px
// nShadowLeft/Right/Top/Bottom=32px
// mnBtnPos=229+40=269px, mnBtnTop=150px
// Window min width = height*3/2 = 873px
// Metacity XP-Grassy: border=4px, titlebar gradient #808080->#c0c0c0
// Metacity compositor: shadow radius=6, offset=(-9,-7.5), opacity=0.66
// VCL: workspace bg=#868f97 (solid), label text=#263542

const W = 873;
const H = 582;

export default function StartCenter() {
  return (
    // Desktop background
    <div style={{
      width:'100vw', height:'100vh',
      background:`url(${A}/wallpaper/default.jpg) center/cover no-repeat`,
      display:'flex', alignItems:'center', justifyContent:'center',
      fontFamily:"'천리마', 'Lucida Grande', sans-serif"
    }}>
      {/* Metacity window frame: outer border + shadow */}
      <div style={{
        display:'flex', flexDirection:'column',
        // metacity shadow: offset(-9,-7.5), radius=6→blur=12, opacity=0.66
        filter:'drop-shadow(9px 8px 12px rgba(0,0,0,0.66))',
      }}>
        {/* Metacity titlebar */}
        <div style={{
          height:'22px', flexShrink:0,
          backgroundImage:`url(${A}/theme/titlebar.png)`,
          backgroundSize:'100% 100%',
          display:'flex', alignItems:'center',
          paddingLeft:'6px', gap:'5px',
          // metacity border: left/right=4px
          border:'1px solid #888',
          borderBottom:'none',
        }}>
          {([['닫기','0px'],['최소화','-14px'],['최대화','-28px']] as [string,string][]).map(([label,pos]) => (
            <span key={label} aria-label={label} style={{
              backgroundImage:SPRITE, backgroundPosition:`${pos} 0px`,
              width:'14px', height:'14px', display:'inline-block', flexShrink:0 }} />
          ))}
          <span style={{ flex:1, textAlign:'center', fontSize:'13px', color:'#444', marginRight:'50px' }}>서광사무처리</span>
        </div>

        {/* Window body with backing images */}
        <div style={{
          width:`${W}px`, height:`${H}px`,
          display:'flex', position:'relative', overflow:'hidden',
          border:'1px solid #888',
        }}>
          {/* backing_left */}
          <div style={{
            width:'229px', flexShrink:0, height:`${H}px`,
            backgroundImage:`url(${A}/shell/backing_left.png)`,
            backgroundSize:'229px 582px', backgroundRepeat:'no-repeat'
          }} />
          {/* backing_space tiled */}
          <div style={{
            flex:1, height:`${H}px`,
            backgroundImage:`url(${A}/shell/backing_space.png)`,
            backgroundRepeat:'repeat-x', backgroundSize:`5px ${H}px`
          }} />
          {/* backing_right */}
          <div style={{
            width:'203px', flexShrink:0, height:`${H}px`,
            backgroundImage:`url(${A}/shell/backing_right.png)`,
            backgroundSize:'203px 582px', backgroundRepeat:'no-repeat'
          }} />

          {/* Content overlay */}
          {/* left=269(mnBtnPos), top=32(shadow), right/bottom=32(shadow) */}
          <div style={{
            position:'absolute', left:'269px', top:'32px',
            right:'32px', bottom:'32px',
            display:'flex', flexDirection:'column'
          }}>
            <div style={{ marginTop:'20px' }}>
              <h2 style={{
                fontSize:'28px', fontWeight:'normal',
                marginBottom:'24px', marginTop:0,
                color:'#263542', letterSpacing:'0.1em'
              }}>새 문서 만들기</h2>

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px 16px' }}>
                {APPS.map(([label, icon, key]) => (
                  <button key={key} style={{
                    display:'flex', alignItems:'center', gap:'8px',
                    background:'none', border:'none', cursor:'pointer',
                    padding:'4px', textAlign:'left', color:'#263542'
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background='rgba(255,255,255,0.6)')}
                    onMouseLeave={e => (e.currentTarget.style.background='none')}>
                    <img src={icon} alt="" style={{ width:'32px', height:'32px', flexShrink:0 }} />
                    <span style={{ fontSize:'13px' }}>{label}</span>
                  </button>
                ))}
              </div>

              <div style={{ marginTop:'24px' }}>
                <button style={{
                  display:'flex', alignItems:'center', gap:'6px',
                  background:'none', border:'none', cursor:'pointer',
                  padding:'4px', color:'#263542', fontSize:'13px'
                }}
                  onMouseEnter={e => (e.currentTarget.style.background='rgba(255,255,255,0.6)')}
                  onMouseLeave={e => (e.currentTarget.style.background='none')}>
                  <img src={`${A}/icons/folder_32.png`} alt="" style={{ width:'28px', height:'28px' }} />
                  <span>열기...</span><span style={{ fontSize:'9px' }}>▼</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
