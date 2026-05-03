const A = 'https://raw.githubusercontent.com/bicheondev/SKOffice/assets';

const APPS: [string, string, string][] = [
  ['본문문서', `${A}/icons/res/odt_32.png`,   'writer'],
  ['수학식',   `${A}/icons/res/odf_32.png`,   'math'],
  ['자료표',   `${A}/icons/res/ods_32.png`,   'calc'],
  ['형판...',  `${A}/icons/res/ott_32_8.png`, 'template'],
  ['연시물',   `${A}/icons/res/odp_32.png`,   'impress'],
];

const SPRITE = `url(${A}/theme/macstyle/Windows_qt.png)`;

// OOo source: backing_left=229px, backing_right=203px, height=582px
// shadow=32px each side, mnBtnPos=120, mnBtnTop=150
const W = 873; // 229 + space + 203, space≈168
const H = 582;
const SHADOW = 32;
const BTN_POS = 269; // 229+40 from source // button X start from content left
const BTN_TOP = 150; // button Y start from content top

export default function StartCenter() {
  return (
    <div style={{ width:'100vw', height:'100vh', background:'#868f97',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontFamily:"'천리마', 'Lucida Grande', sans-serif" }}>
      <div style={{ width:`${W}px`, boxShadow:'2px 2px 8px rgba(0,0,0,0.5)',
                    display:'flex', flexDirection:'column' }}>

        {/* Titlebar */}
        <div style={{ height:'22px', flexShrink:0,
                      backgroundImage:`url(${A}/theme/titlebar.png)`,
                      backgroundSize:'100% 100%',
                      display:'flex', alignItems:'center',
                      paddingLeft:'6px', gap:'5px' }}>
          {([['닫기','0px'],['최소화','-14px'],['최대화','-28px']] as [string,string][]).map(([label,pos]) => (
            <span key={label} aria-label={label} style={{
              backgroundImage:SPRITE, backgroundPosition:`${pos} 0px`,
              width:'14px', height:'14px', display:'inline-block', flexShrink:0 }} />
          ))}
          <span style={{ flex:1, textAlign:'center', fontSize:'13px',
                         color:'#444', marginRight:'50px' }}>서광사무처리</span>
        </div>

        {/* Background: left + space + right */}
        <div style={{ height:`${H}px`, display:'flex', position:'relative', overflow:'hidden' }}>

          {/* backing_left */}
          <div style={{ width:'229px', flexShrink:0, height:`${H}px`,
                        backgroundImage:`url(${A}/shell/backing_left.png)`,
                        backgroundSize:'229px 582px', backgroundRepeat:'no-repeat' }} />

          {/* backing_space (tiled) */}
          <div style={{ flex:1, height:`${H}px`,
                        backgroundImage:`url(${A}/shell/backing_space.png)`,
                        backgroundRepeat:'repeat-x',
                        backgroundSize:`5px ${H}px` }} />

          {/* backing_right */}
          <div style={{ width:'203px', flexShrink:0, height:`${H}px`,
                        backgroundImage:`url(${A}/shell/backing_right.png)`,
                        backgroundSize:'203px 582px', backgroundRepeat:'no-repeat' }} />

          {/* Content overlay: positioned over the background */}
          <div style={{ position:'absolute', left:'269px', top:`${SHADOW}px`,
                        right:`${SHADOW}px`, bottom:`${SHADOW}px`,
                        display:'flex', flexDirection:'column' }}>

            {/* Buttons: 3 rows x 2 cols, starting at mnBtnTop=150 from content top */}
            <div style={{ marginTop:'20px' }}>
              <h2 style={{ fontSize:'28px', fontWeight:'normal', marginBottom:'24px', marginTop:0, color:'#222', letterSpacing:'0.1em' }}>새 문서 만들기</h2>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px 16px' }}>
                {APPS.map(([label, icon, key]) => (
                  <button key={key} style={{ display:'flex', alignItems:'center', gap:'8px',
                    background:'none', border:'none', cursor:'pointer', padding:'4px',
                    textAlign:'left', borderRadius:'3px', color:'#1a1a1a' }}
                    onMouseEnter={e => (e.currentTarget.style.background='rgba(255,255,255,0.6)')}
                    onMouseLeave={e => (e.currentTarget.style.background='none')}>
                    <img src={icon} alt="" style={{ width:'32px', height:'32px', flexShrink:0 }} />
                    <span style={{ fontSize:'13px' }}>{label}</span>
                  </button>
                ))}
              </div>

              {/* Open button */}
              <div style={{ marginTop:'24px' }}>
                <button style={{ display:'flex', alignItems:'center', gap:'6px',
                  background:'none', border:'none', cursor:'pointer', padding:'4px',
                  color:'#1a1a1a', fontSize:'13px', borderRadius:'3px' }}
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
