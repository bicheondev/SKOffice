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
// OOo source: backing_left=229px, backing_right=203px, height=582px
// nShadow=32px, mnBtnPos=269px(229+40), mnBtnTop=150px
// Window min width=873px (582*3/2)
// Metacity XP-Grassy: border left/right/bottom=4px, radius=3px (macstyle gtkrc)
// Metacity shadow: radius=6, offset=(-9,-7.5), opacity=0.66
// VCL: workspace=#868f97, text=#263542
const W = 873;
const H = 582;
export default function StartCenter() {
    return (_jsx("div", { style: {
            width: '100vw', height: '100vh',
            backgroundImage: `url(${A}/wallpaper/default.jpg)`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            backgroundColor: '#868f97',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'천리마', 'Lucida Grande', sans-serif",
        }, children: _jsx("div", { style: {
                filter: 'drop-shadow(9px 8px 12px rgba(0,0,0,0.66))',
            }, children: _jsxs("div", { style: {
                    borderTopLeftRadius: '5px', borderTopRightRadius: '5px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#868f97',
                }, children: [_jsxs("div", { style: {
                            height: '22px',
                            flexShrink: 0,
                            backgroundImage: `url(${A}/theme/titlebar.png)`,
                            backgroundSize: '100% 100%',
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '6px',
                            gap: '5px',
                        }, children: [[['닫기', '0px'], ['최소화', '-14px'], ['최대화', '-28px']].map(([label, pos]) => (_jsx("span", { "aria-label": label, style: {
                                    backgroundImage: SPRITE,
                                    backgroundPosition: `${pos} 0px`,
                                    width: '14px', height: '14px',
                                    display: 'inline-block', flexShrink: 0,
                                } }, label))), _jsx("span", { style: {
                                    flex: 1, textAlign: 'center',
                                    fontSize: '13px', color: '#444',
                                    marginRight: '50px',
                                }, children: "\uC11C\uAD11\uC0AC\uBB34\uCC98\uB9AC" })] }), _jsxs("div", { style: {
                            width: `${W}px`, height: `${H}px`,
                            display: 'flex', position: 'relative', overflow: 'hidden',
                        }, children: [_jsx("div", { style: {
                                    width: '229px', flexShrink: 0, height: `${H}px`,
                                    backgroundImage: `url(${A}/shell/backing_left.png)`,
                                    backgroundSize: '229px 582px', backgroundRepeat: 'no-repeat',
                                } }), _jsx("div", { style: {
                                    flex: 1, height: `${H}px`,
                                    backgroundImage: `url(${A}/shell/backing_space.png)`,
                                    backgroundRepeat: 'repeat-x', backgroundSize: `5px ${H}px`,
                                } }), _jsx("div", { style: {
                                    width: '203px', flexShrink: 0, height: `${H}px`,
                                    backgroundImage: `url(${A}/shell/backing_right.png)`,
                                    backgroundSize: '203px 582px', backgroundRepeat: 'no-repeat',
                                } }), _jsxs("div", { style: {
                                    position: 'absolute',
                                    left: '269px', top: '32px',
                                    right: '32px', bottom: '32px',
                                    display: 'flex', flexDirection: 'column',
                                }, children: [_jsx("h2", { style: {
                                            fontSize: '28px', fontWeight: 'normal',
                                            marginBottom: '24px', marginTop: 0,
                                            color: '#263542', letterSpacing: '0.1em',
                                        }, children: "\uC0C8 \uBB38\uC11C \uB9CC\uB4E4\uAE30" }), _jsx("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px' }, children: APPS.map(([label, icon, key]) => (_jsxs("button", { style: {
                                                display: 'flex', alignItems: 'center', gap: '8px',
                                                background: 'none', border: 'none', cursor: 'pointer',
                                                padding: '4px', textAlign: 'left', color: '#263542',
                                            }, onMouseEnter: e => (e.currentTarget.style.background = 'rgba(255,255,255,0.6)'), onMouseLeave: e => (e.currentTarget.style.background = 'none'), children: [_jsx("img", { src: icon, alt: "", style: { width: '32px', height: '32px', flexShrink: 0 } }), _jsx("span", { style: { fontSize: '13px' }, children: label })] }, key))) }), _jsx("div", { style: { marginTop: '24px' }, children: _jsxs("button", { style: {
                                                display: 'flex', alignItems: 'center', gap: '6px',
                                                background: 'none', border: 'none', cursor: 'pointer',
                                                padding: '4px', color: '#263542', fontSize: '13px',
                                            }, onMouseEnter: e => (e.currentTarget.style.background = 'rgba(255,255,255,0.6)'), onMouseLeave: e => (e.currentTarget.style.background = 'none'), children: [_jsx("img", { src: `${A}/icons/folder_32.png`, alt: "", style: { width: '28px', height: '28px' } }), _jsx("span", { children: "\uC5F4\uAE30..." }), _jsx("span", { style: { fontSize: '9px' }, children: "\u25BC" })] }) })] })] })] }) }) }));
}
