const A = 'https://raw.githubusercontent.com/bicheondev/SKOffice/assets';

const APPS = [
  { label: '본문문서', icon: `${A}/icons/res/odt_32.png`, key: 'writer' },
  { label: '수학식',   icon: `${A}/icons/res/odf_32.png`, key: 'math' },
  { label: '자료표',   icon: `${A}/icons/res/ods_32.png`, key: 'calc' },
  { label: '형판...',  icon: `${A}/icons/res/ott_32_8.png`, key: 'template' },
  { label: '연시물',   icon: `${A}/icons/res/odp_32.png`, key: 'impress' },
];

const SPRITE = `url(${A}/theme/macstyle/Windows_qt.png)`;

export default function StartCenter() {
  return (
    <div style={{ width:'100vw', height:'100vh', background:'#7a7a7a', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'천리마', sans-serif" }}>
      <div style={{ width:'600px', boxShadow:'2px 2px 8px rgba(0,0,0,0.5)', display:'flex', flexDirection:'column' }}>

        {/* Titlebar */}
        <div style={{ height:'22px', flexShrink:0, backgroundImage:`url(${A}/theme/titlebar.png)`, backgroundSize:'100% 100%', display:'flex', alignItems:'center', paddingLeft:'6px', gap:'5px' }}>
          {([['닫기','0px'],['최소화','-14px'],['최대화','-28px']] as [string,string][]).map(([label,pos]) => (
            <span key={label} aria-label={label} style={{ backgroundImage:SPRITE, backgroundPosition:`${pos} 0px`, width:'14px', height:'14px', display:'inline-block', flexShrink:0 }} />
          ))}
          <span style={{ flex:1, textAlign:'center', fontSize:'13px', color:'#444', marginRight:'50px' }}>서광사무처리</span>
        </div>

        {/* Body */}
        <div style={{ display:'flex', height:'382px' }}>

          {/* Left panel */}
          <div style={{ width:'180px', flexShrink:0, backgroundImage:`url(${A}/shell/backing_left.png)`, backgroundSize:'180px 100%', backgroundRepeat:'no-repeat', backgroundColor:'#e8e8e8' }} />

          {/* Right panel */}
          <div style={{ flex:1, background:'white', display:'flex', flexDirection:'column', padding:'20px 24px' }}>
            <h2 style={{ fontSize:'16px', fontWeight:'bold', marginBottom:'16px', marginTop:0, color:'#222' }}>새 문서 만들기</h2>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px 24px' }}>
              {APPS.map(app => (
                <button key={app.key}
                  style={{ display:'flex', alignItems:'center', gap:'8px', background:'none', border:'none', cursor:'pointer', padding:'4px 6px', textAlign:'left', borderRadius:'3px' }}
                  onMouseEnter={e => (e.currentTarget.style.background='#dce8f8')}
                  onMouseLeave={e => (e.currentTarget.style.background='none')}>
                  <img src={app.icon} alt="" style={{ width:'32px', height:'32px', flexShrink:0 }} />
                  <span style={{ fontSize:'13px', color:'#222' }}>{app.label}</span>
                </button>
              ))}
            </div>

            <div style={{ marginTop:'auto' }}>
              <button style={{ display:'flex', alignItems:'center', gap:'6px', border:'1px solid #aaa', background:'#f0f0f0', padding:'3px 10px', fontSize:'12px', cursor:'pointer' }}>
                <span>열기...</span><span style={{ fontSize:'9px' }}>▼</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
