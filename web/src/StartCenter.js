import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const A = 'https://raw.githubusercontent.com/bicheondev/SKOffice/assets';
const APPS = [
    ['본문문서', `${A}/icons/res/odt_32.png`, 'writer'],
    ['수학식', `${A}/icons/res/odf_32.png`, 'math'],
    ['자료표', `${A}/icons/res/ods_32.png`, 'calc'],
    ['형판...', `${A}/icons/res/ott_32_8.png`, 'template'],
    ['연시물', `${A}/icons/res/odp_32.png`, 'impress'],
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
const BTN_POS = 269; // 229 + 40
const BTN_TOP = 150;
export default function StartCenter() {
    return (_jsx("div", { style: {
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
        }, children: _jsx("div", { style: {
                filter: 'drop-shadow(9px 8px 12px rgba(0,0,0,0.66))',
            }, children: _jsxs("div", { style: {
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '4px solid #b8b8b8',
                    borderBottom: '4px solid #888',
                }, children: [_jsxs("div", { style: {
                            height: '18px',
                            flexShrink: 0,
                            background: 'linear-gradient(to right, #808080, #c0c0c0)',
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '4px',
                            gap: '4px',
                        }, children: [[['닫기', '0px'], ['최소화', '-14px'], ['최대화', '-28px']].map(([label, pos]) => (_jsx("span", { "aria-label": label, style: {
                                    backgroundImage: SPRITE,
                                    backgroundPosition: `${pos} 0px`,
                                    width: '14px', height: '14px',
                                    display: 'inline-block', flexShrink: 0,
                                } }, label))), _jsx("span", { style: {
                                    flex: 1,
                                    textAlign: 'center',
                                    fontSize: '11px',
                                    fontWeight: 'normal',
                                    color: '#263542',
                                    marginRight: '50px',
                                }, children: "\uC11C\uAD11\uC0AC\uBB34\uCC98\uB9AC" })] }), _jsxs("div", { style: {
                            width: `${W}px`,
                            height: `${H}px`,
                            display: 'flex',
                            position: 'relative',
                            overflow: 'hidden',
                        }, children: [_jsx("div", { style: {
                                    width: '229px', flexShrink: 0, height: `${H}px`,
                                    backgroundImage: `url(${A}/shell/backing_left.png)`,
                                    backgroundSize: '229px 582px', backgroundRepeat: 'no-repeat',
                                } }), _jsx("div", { style: {
                                    flex: 1, height: `${H}px`,
                                    backgroundImage: `url(${A}/shell/backing_space.png)`,
                                    backgroundRepeat: 'repeat-x',
                                    backgroundSize: `5px ${H}px`,
                                } }), _jsx("div", { style: {
                                    width: '203px', flexShrink: 0, height: `${H}px`,
                                    backgroundImage: `url(${A}/shell/backing_right.png)`,
                                    backgroundSize: '203px 582px', backgroundRepeat: 'no-repeat',
                                } }), _jsxs("div", { style: {
                                    position: 'absolute',
                                    left: `${BTN_POS}px`,
                                    top: `${BTN_TOP}px`,
                                    right: `${SHADOW}px`,
                                    bottom: `${SHADOW}px`,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }, children: [_jsx("div", { style: {
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            color: '#263542',
                                            letterSpacing: '0.08em',
                                            marginBottom: '20px',
                                        }, children: "\uC0C8 \uBB38\uC11C \uB9CC\uB4E4\uAE30" }), _jsx("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }, children: APPS.map(([label, icon, key]) => (_jsxs("button", { style: {
                                                display: 'flex', alignItems: 'center', gap: '8px',
                                                background: 'none', border: 'none', cursor: 'pointer',
                                                padding: '0', textAlign: 'left', color: '#263542',
                                                fontSize: '11px', fontWeight: 'normal',
                                            }, onMouseEnter: e => (e.currentTarget.style.background = 'rgba(255,255,255,0.5)'), onMouseLeave: e => (e.currentTarget.style.background = 'none'), children: [_jsx("img", { src: icon, alt: "", style: { width: '32px', height: '32px', flexShrink: 0 } }), _jsx("span", { children: label })] }, key))) }), _jsx("div", { style: { marginTop: '24px' }, children: _jsxs("button", { style: {
                                                display: 'flex', alignItems: 'center', gap: '6px',
                                                background: 'none', border: 'none', cursor: 'pointer',
                                                padding: '0', color: '#263542', fontSize: '11px',
                                            }, onMouseEnter: e => (e.currentTarget.style.background = 'rgba(255,255,255,0.5)'), onMouseLeave: e => (e.currentTarget.style.background = 'none'), children: [_jsx("img", { src: `${A}/icons/folder_32.png`, alt: "", style: { width: '32px', height: '32px' } }), _jsx("span", { children: "\uC5F4\uAE30..." }), _jsx("span", { style: { fontSize: '8px' }, children: "\u25BC" })] }) })] })] })] }) }) }));
}
