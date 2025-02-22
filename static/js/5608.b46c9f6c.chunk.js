"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5608],{15608:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j,drawerClasses:()=>$,getDrawerUtilityClass:()=>D});var n=r(7552),o=r(93878),a=r(70799),i=r(23456),s=r(31694),p=r(16157),l=r(87995),c=r(987),d=r(51584),h=r(48231),u=r(46302),f=r(46689),m=r(69500);function g(e,t,r){var n;const o=function(e,t,r){const n=t.getBoundingClientRect(),o=r&&r.getBoundingClientRect(),a=(0,f.A)(t);let i;if(t.fakeTransform)i=t.fakeTransform;else{const e=a.getComputedStyle(t);i=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("transform")}let s=0,p=0;if(i&&"none"!==i&&"string"==typeof i){const e=i.split("(")[1].split(")")[0].split(",");s=parseInt(e[4],10),p=parseInt(e[5],10)}return"left"===e?o?`translateX(${o.right+s-n.left}px)`:`translateX(${a.innerWidth+s-n.left}px)`:"right"===e?o?`translateX(-${n.right-o.left-s}px)`:`translateX(-${n.left+n.width-s}px)`:"up"===e?o?`translateY(${o.bottom+p-n.top}px)`:`translateY(${a.innerHeight+p-n.top}px)`:o?`translateY(-${n.top-o.top+n.height-p}px)`:`translateY(-${n.top+n.height-p}px)`}(e,t,"function"==typeof(n=r)?n():n);o&&(t.style.webkitTransform=o,t.style.transform=o)}const v=n.forwardRef((function(e,t){const r=(0,h.A)(),o={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},a={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:s=!0,children:v,container:w,direction:y="down",easing:x=o,in:A,onEnter:k,onEntered:b,onEntering:E,onExit:S,onExited:D,onExiting:$,style:R,timeout:T=a,TransitionComponent:C=p.Ay,...B}=e,P=n.useRef(null),j=(0,d.A)((0,l.A)(v),P,t),L=e=>t=>{e&&(void 0===t?e(P.current):e(P.current,t))},I=L(((e,t)=>{g(y,e,w),(0,u.q)(e),k&&k(e,t)})),M=L(((e,t)=>{const n=(0,u.c)({timeout:T,style:R,easing:x},{mode:"enter"});e.style.webkitTransition=r.transitions.create("-webkit-transform",{...n}),e.style.transition=r.transitions.create("transform",{...n}),e.style.webkitTransform="none",e.style.transform="none",E&&E(e,t)})),z=L(b),N=L($),Y=L((e=>{const t=(0,u.c)({timeout:T,style:R,easing:x},{mode:"exit"});e.style.webkitTransition=r.transitions.create("-webkit-transform",t),e.style.transition=r.transitions.create("transform",t),g(y,e,w),S&&S(e)})),X=L((e=>{e.style.webkitTransition="",e.style.transition="",D&&D(e)})),_=n.useCallback((()=>{P.current&&g(y,P.current,w)}),[y,w]);return n.useEffect((()=>{if(A||"down"===y||"right"===y)return;const e=(0,c.A)((()=>{P.current&&g(y,P.current,w)})),t=(0,f.A)(P.current);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[y,A,w]),n.useEffect((()=>{A||_()}),[A,_]),(0,m.jsx)(C,{nodeRef:P,onEnter:I,onEntered:z,onEntering:M,onExit:Y,onExited:X,onExiting:N,addEndListener:e=>{i&&i(P.current,e)},appear:s,in:A,timeout:T,...B,children:(e,{ownerState:t,...r})=>n.cloneElement(v,{ref:j,style:{visibility:"exited"!==e||A?void 0:"hidden",...R,...v.props.style},...r})})}));var w=r(943),y=r(15622),x=r(55270),A=r(51148),k=r(84893),b=r(4785),E=r(33761),S=r(85693);function D(e){return(0,S.Ay)("MuiDrawer",e)}const $=(0,E.A)("MuiDrawer",["root","docked","paper","anchorLeft","anchorRight","anchorTop","anchorBottom","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]),R=(e,t)=>{const{ownerState:r}=e;return[t.root,("permanent"===r.variant||"persistent"===r.variant)&&t.docked,t.modal]},T=(0,A.Ay)(s.A,{name:"MuiDrawer",slot:"Root",overridesResolver:R})((0,k.A)((({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer})))),C=(0,A.Ay)("div",{shouldForwardProp:x.A,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:R})({flex:"0 0 auto"}),B=(0,A.Ay)(w.A,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.paper,t[`paperAnchor${(0,y.A)(r.anchor)}`],"temporary"!==r.variant&&t[`paperAnchorDocked${(0,y.A)(r.anchor)}`]]}})((0,k.A)((({theme:e})=>({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:({ownerState:e})=>"left"===e.anchor&&"temporary"!==e.variant,style:{borderRight:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:e})=>"top"===e.anchor&&"temporary"!==e.variant,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:e})=>"right"===e.anchor&&"temporary"!==e.variant,style:{borderLeft:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:e})=>"bottom"===e.anchor&&"temporary"!==e.variant,style:{borderTop:`1px solid ${(e.vars||e).palette.divider}`}}]})))),P={left:"right",right:"left",top:"down",bottom:"up"},j=n.forwardRef((function(e,t){const r=(0,b.b)({props:e,name:"MuiDrawer"}),s=(0,h.A)(),p=(0,i.I)(),l={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:c="left",BackdropProps:d,children:u,className:f,elevation:g=16,hideBackdrop:w=!1,ModalProps:{BackdropProps:x,...A}={},onClose:k,open:E=!1,PaperProps:S={},SlideProps:$,TransitionComponent:R=v,transitionDuration:j=l,variant:L="temporary",...I}=r,M=n.useRef(!1);n.useEffect((()=>{M.current=!0}),[]);const z=function({direction:e},t){return"rtl"===e&&function(e){return["left","right"].includes(e)}(t)?P[t]:t}({direction:p?"rtl":"ltr"},c),N=c,Y={...r,anchor:N,elevation:g,open:E,variant:L,...I},X=(e=>{const{classes:t,anchor:r,variant:n}=e,o={root:["root",`anchor${(0,y.A)(r)}`],docked:[("permanent"===n||"persistent"===n)&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${(0,y.A)(r)}`,"temporary"!==n&&`paperAnchorDocked${(0,y.A)(r)}`]};return(0,a.A)(o,D,t)})(Y),_=(0,m.jsx)(B,{elevation:"temporary"===L?g:0,square:!0,...S,className:(0,o.A)(X.paper,S.className),ownerState:Y,children:u});if("permanent"===L)return(0,m.jsx)(C,{className:(0,o.A)(X.root,X.docked,f),ownerState:Y,ref:t,...I,children:_});const H=(0,m.jsx)(R,{in:E,direction:P[z],timeout:j,appear:M.current,...$,children:_});return"persistent"===L?(0,m.jsx)(C,{className:(0,o.A)(X.root,X.docked,f),ownerState:Y,ref:t,...I,children:H}):(0,m.jsx)(T,{BackdropProps:{...d,...x,transitionDuration:j},className:(0,o.A)(X.root,X.modal,f),open:E,ownerState:Y,onClose:k,hideBackdrop:w,ref:t,...I,...A,children:H})}))}}]);
//# sourceMappingURL=5608.b46c9f6c.chunk.js.map