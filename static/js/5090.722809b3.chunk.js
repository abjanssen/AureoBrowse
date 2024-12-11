"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5090],{88215:(e,t,n)=>{n.d(t,{x:()=>l});var r=n(7552),o=n(29527),a=n(89887),i=n(99305),s=n(87995);function c(e){return e.substring(2).toLowerCase()}function l(e){const{children:t,disableReactTree:n=!1,mouseEvent:l="onClick",onClickAway:u,touchEvent:d="onTouchEnd"}=e,p=r.useRef(!1),m=r.useRef(null),f=r.useRef(!1),v=r.useRef(!1);r.useEffect((()=>(setTimeout((()=>{f.current=!0}),0),()=>{f.current=!1})),[]);const g=(0,o.A)((0,s.A)(t),m),h=(0,a.A)((e=>{const t=v.current;v.current=!1;const r=(0,i.A)(m.current);if(!f.current||!m.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,r))return;if(p.current)return void(p.current=!1);let o;o=e.composedPath?e.composedPath().includes(m.current):!r.documentElement.contains(e.target)||m.current.contains(e.target),o||!n&&t||u(e)})),b=e=>n=>{v.current=!0;const r=t.props[e];r&&r(n)},A={ref:g};return!1!==d&&(A[d]=b(d)),r.useEffect((()=>{if(!1!==d){const e=c(d),t=(0,i.A)(m.current),n=()=>{p.current=!0};return t.addEventListener(e,h),t.addEventListener("touchmove",n),()=>{t.removeEventListener(e,h),t.removeEventListener("touchmove",n)}}}),[h,d]),!1!==l&&(A[l]=b(l)),r.useEffect((()=>{if(!1!==l){const e=c(l),t=(0,i.A)(m.current);return t.addEventListener(e,h),()=>{t.removeEventListener(e,h)}}}),[h,l]),r.cloneElement(t,A)}},42418:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(7552),o=n(70799),a=n(1045),i=n(85659),s=n(89887),c=n(29091);var l=n(88215),u=n(51148),d=n(48231),p=n(84893),m=n(4785),f=n(15622),v=n(4407),g=n(85283),h=n(58763),b=n(69500);const A=(0,u.Ay)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`anchorOrigin${(0,f.A)(n.anchorOrigin.vertical)}${(0,f.A)(n.anchorOrigin.horizontal)}`]]}})((0,p.A)((({theme:e})=>({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:e})=>"top"===e.anchorOrigin.vertical,style:{top:8,[e.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:e})=>"top"!==e.anchorOrigin.vertical,style:{bottom:8,[e.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:e})=>"left"===e.anchorOrigin.horizontal,style:{justifyContent:"flex-start",[e.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:e})=>"right"===e.anchorOrigin.horizontal,style:{justifyContent:"flex-end",[e.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:e})=>"center"===e.anchorOrigin.horizontal,style:{[e.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]})))),w=r.forwardRef((function(e,t){const n=(0,m.b)({props:e,name:"MuiSnackbar"}),u=(0,d.A)(),p={enter:u.transitions.duration.enteringScreen,exit:u.transitions.duration.leavingScreen},{action:w,anchorOrigin:{vertical:k,horizontal:E}={vertical:"bottom",horizontal:"left"},autoHideDuration:y=null,children:C,className:x,ClickAwayListenerProps:S,ContentProps:L,disableWindowBlurListener:R=!1,message:O,onBlur:M,onClose:T,onFocus:j,onMouseEnter:P,onMouseLeave:z,open:B,resumeHideDuration:W,TransitionComponent:D=v.A,transitionDuration:H=p,TransitionProps:{onEnter:N,onExited:I,...F}={},...$}=n,_={...n,anchorOrigin:{vertical:k,horizontal:E},autoHideDuration:y,disableWindowBlurListener:R,TransitionComponent:D,transitionDuration:H},X=(e=>{const{classes:t,anchorOrigin:n}=e,r={root:["root",`anchorOrigin${(0,f.A)(n.vertical)}${(0,f.A)(n.horizontal)}`]};return(0,o.A)(r,h.W,t)})(_),{getRootProps:G,onClickAway:q}=function(e={}){const{autoHideDuration:t=null,disableWindowBlurListener:n=!1,onClose:o,open:a,resumeHideDuration:l}=e,u=(0,i.A)();r.useEffect((()=>{if(a)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){e.defaultPrevented||"Escape"===e.key&&o?.(e,"escapeKeyDown")}}),[a,o]);const d=(0,s.A)(((e,t)=>{o?.(e,t)})),p=(0,s.A)((e=>{o&&null!=e&&u.start(e,(()=>{d(null,"timeout")}))}));r.useEffect((()=>(a&&p(t),u.clear)),[a,t,p,u]);const m=u.clear,f=r.useCallback((()=>{null!=t&&p(null!=l?l:.5*t)}),[t,l,p]),v=e=>t=>{const n=e.onFocus;n?.(t),m()},g=e=>t=>{const n=e.onMouseEnter;n?.(t),m()},h=e=>t=>{const n=e.onMouseLeave;n?.(t),f()};return r.useEffect((()=>{if(!n&&a)return window.addEventListener("focus",f),window.addEventListener("blur",m),()=>{window.removeEventListener("focus",f),window.removeEventListener("blur",m)}}),[n,a,f,m]),{getRootProps:(t={})=>{const n={...(0,c.A)(e),...(0,c.A)(t)};return{role:"presentation",...t,...n,onBlur:(r=n,e=>{const t=r.onBlur;t?.(e),f()}),onFocus:v(n),onMouseEnter:g(n),onMouseLeave:h(n)};var r},onClickAway:e=>{o?.(e,"clickaway")}}}({..._}),[K,U]=r.useState(!0),Y=(0,a.A)({elementType:A,getSlotProps:G,externalForwardedProps:$,ownerState:_,additionalProps:{ref:t},className:[X.root,x]});return!B&&K?null:(0,b.jsx)(l.x,{onClickAway:q,...S,children:(0,b.jsx)(A,{...Y,children:(0,b.jsx)(D,{appear:!0,in:B,timeout:H,direction:"top"===k?"down":"up",onEnter:(e,t)=>{U(!1),N&&N(e,t)},onExited:e=>{U(!0),I&&I(e)},...F,children:C||(0,b.jsx)(g.A,{message:O,action:w,...L})})})})}))},5090:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r.A,getSnackbarUtilityClass:()=>o.W,snackbarClasses:()=>o.A});var r=n(42418),o=n(58763)},58763:(e,t,n)=>{n.d(t,{A:()=>i,W:()=>a});var r=n(33761),o=n(85693);function a(e){return(0,o.Ay)("MuiSnackbar",e)}const i=(0,r.A)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"])},85283:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(7552),o=n(93878),a=n(70799),i=n(963),s=n(51148),c=n(84893),l=n(4785),u=n(943),d=n(27799),p=n(69500);const m=(0,s.Ay)(u.A,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})((0,c.A)((({theme:e})=>{const t="light"===e.palette.mode?.8:.98,n=(0,i.tL)(e.palette.background.default,t);return{...e.typography.body2,color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(n),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}}))),f=(0,s.Ay)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),v=(0,s.Ay)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),g=r.forwardRef((function(e,t){const n=(0,l.b)({props:e,name:"MuiSnackbarContent"}),{action:r,className:i,message:s,role:c="alert",...u}=n,g=n,h=(e=>{const{classes:t}=e;return(0,a.A)({root:["root"],action:["action"],message:["message"]},d.d,t)})(g);return(0,p.jsxs)(m,{role:c,square:!0,elevation:6,className:(0,o.A)(h.root,i),ownerState:g,ref:t,...u,children:[(0,p.jsx)(f,{className:h.message,ownerState:g,children:s}),r?(0,p.jsx)(v,{className:h.action,ownerState:g,children:r}):null]})}))},27799:(e,t,n)=>{n.d(t,{A:()=>i,d:()=>a});var r=n(33761),o=n(85693);function a(e){return(0,o.Ay)("MuiSnackbarContent",e)}const i=(0,r.A)("MuiSnackbarContent",["root","message","action"])}}]);
//# sourceMappingURL=5090.722809b3.chunk.js.map