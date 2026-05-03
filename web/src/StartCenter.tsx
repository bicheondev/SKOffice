const A = 'https://raw.githubusercontent.com/bicheondev/SKOffice/assets';

const APPS = [
  { label: '본문문서', icon: `${A}/icons/res/odt_32.png`,  key: 'writer' },
  { label: '수학식',   icon: `${A}/icons/res/odf_32.png`,    key: 'math' },
  { label: '자료표',   icon: `${A}/icons/res/ods_32.png`,    key: 'calc' },
  { label: '형판...',  icon: `${A}/icons/res/ott_32_8.png`,          key: 'template' },
  { label: '연시물',   icon: `${A}/icons/res/odp_32.png`, key: 'impress' },
];

const SPRITE = `url(${A}/theme/macstyle/Windows_qt.png)`;

export default function StartCenter() {
  return (
    <div style={{ width:'100vw', height:'100vh', background:'#808080', display:'flex', flexDirection:'column', fontFamily:"'천리마', sans-serif" }}>

      {/* Titlebar */}
      <div style={{ height:'22px', flexShrink:0, backgroundImage:`url(${A}/theme/titlebar.png)`, backgroundSize:'100% 100%', display:'flex', alignItems:'center', paddingLeft:'6px', gap:'5px' }}>
        {([['닫기','0px'],['최소화','-14px'],['최대화','-28px']] as [string,string][]).map(([label,pos]) => (
          <span key={label} aria-label={label} style={{ backgroundImage:SPRITE, backgroundPosition:`${pos} 0px`, width:'14px', height:'14px', display:'inline-block', flexShrink:0 }} />
        ))}
        <span style={{ flex:1, textAlign:'center', fontSize:'13px', color:'#444', marginRight:'50px' }}>서광사무처리</span>
      </div>

      {/* Body */}
      <div style={{ flex:1, display:'flex', overflow:'hidden' }}>

        {/* Left panel */}
        <div style={{ width:'229px', flexShrink:0, backgroundImage:`url(${A}/shell/backing_left.png)`, backgroundSize:'229px 582px', backgroundRepeat:'no-repeat', backgroundColor:'#d8d8d8' }} />

        {/* Right panel */}
        <div style={{ flex:1, background:'white', display:'flex', flexDirection:'column', padding:'28px 32px', overflow:'auto' }}>
          <h2 style={{ fontSize:'18px', fontWeight:'bold', marginBottom:'20px', marginTop:0, color:'#222' }}>새 문서 만들기</h2>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px 32px' }}>
            {APPS.map(app => (
              <button key={app.key} style={{ display:'flex', alignItems:'center', gap:'10px', background:'none', border:'none', cursor:'pointer', padding:'4px', textAlign:'left', borderRadius:'4px' }}
                onMouseEnter={e => (e.currentTarget.style.background='#e8f0fe')}
                onMouseLeave={e => (e.currentTarget.style.background='none')}>
                <img src={app.icon} alt="" style={{ width:'32px', height:'32px', flexShrink:0 }} />
                <span style={{ fontSize:'14px', color:'#222' }}>{app.label}</span>
              </button>
            ))}
          </div>

          <div style={{ marginTop:'auto', paddingTop:'20px' }}>
            <button style={{ display:'flex', alignItems:'center', gap:'6px', border:'1px solid #aaa', background:'#f0f0f0', padding:'3px 12px', fontSize:'13px', cursor:'pointer', borderRadius:'2px' }}>
              <span>열기...</span><span style={{ fontSize:'10px' }}>▼</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
