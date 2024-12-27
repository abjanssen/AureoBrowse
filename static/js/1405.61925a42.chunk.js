"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1081,1405],{7720:(r,e,t)=>{t.d(e,{A:()=>a});var n=t(74893),o=t(69500);const a=(0,n.A)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},63165:(r,e,t)=>{t.d(e,{A:()=>u});var n=t(7552),o=t(93878),a=t(70799),i=t(51148),s=t(84893),l=t(4785),c=t(79509),d=t(69500);const p=(0,i.Ay)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(r,e)=>e.root})((0,s.A)((({theme:r})=>({padding:r.spacing(1,2,2)})))),u=n.forwardRef((function(r,e){const t=(0,l.b)({props:r,name:"MuiAccordionDetails"}),{className:n,...i}=t,s=t,u=(r=>{const{classes:e}=r;return(0,a.A)({root:["root"]},c.n,e)})(s);return(0,d.jsx)(p,{className:(0,o.A)(u.root,n),ref:e,ownerState:s,...i})}))},79509:(r,e,t)=>{t.d(e,{A:()=>i,n:()=>a});var n=t(33761),o=t(85693);function a(r){return(0,o.Ay)("MuiAccordionDetails",r)}const i=(0,n.A)("MuiAccordionDetails",["root"])},41578:(r,e,t)=>{t.d(e,{A:()=>A});var n=t(7552),o=t(93878),a=t(70799),i=t(51148),s=t(84893),l=t(4785),c=t(48054),d=t(51132),p=t(33761),u=t(85693);function g(r){return(0,u.Ay)("MuiAccordionSummary",r)}const m=(0,p.A)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var v=t(69500);const h=(0,i.Ay)(c.A,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(r,e)=>e.root})((0,s.A)((({theme:r})=>{const e={duration:r.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:r.spacing(0,2),transition:r.transitions.create(["min-height","background-color"],e),[`&.${m.focusVisible}`]:{backgroundColor:(r.vars||r).palette.action.focus},[`&.${m.disabled}`]:{opacity:(r.vars||r).palette.action.disabledOpacity},[`&:hover:not(.${m.disabled})`]:{cursor:"pointer"},variants:[{props:r=>!r.disableGutters,style:{[`&.${m.expanded}`]:{minHeight:64}}}]}}))),f=(0,i.Ay)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(r,e)=>e.content})((0,s.A)((({theme:r})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:r=>!r.disableGutters,style:{transition:r.transitions.create(["margin"],{duration:r.transitions.duration.shortest}),[`&.${m.expanded}`]:{margin:"20px 0"}}}]})))),b=(0,i.Ay)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(r,e)=>e.expandIconWrapper})((0,s.A)((({theme:r})=>({display:"flex",color:(r.vars||r).palette.action.active,transform:"rotate(0deg)",transition:r.transitions.create("transform",{duration:r.transitions.duration.shortest}),[`&.${m.expanded}`]:{transform:"rotate(180deg)"}})))),A=n.forwardRef((function(r,e){const t=(0,l.b)({props:r,name:"MuiAccordionSummary"}),{children:i,className:s,expandIcon:c,focusVisibleClassName:p,onClick:u,...m}=t,{disabled:A=!1,disableGutters:y,expanded:x,toggle:O}=n.useContext(d.A),w={...t,expanded:x,disabled:A,disableGutters:y},S=(r=>{const{classes:e,expanded:t,disabled:n,disableGutters:o}=r,i={root:["root",t&&"expanded",n&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]};return(0,a.A)(i,g,e)})(w);return(0,v.jsxs)(h,{focusRipple:!1,disableRipple:!0,disabled:A,component:"div","aria-expanded":x,className:(0,o.A)(S.root,s),focusVisibleClassName:(0,o.A)(S.focusVisible,p),onClick:r=>{O&&O(r),u&&u(r)},ref:e,ownerState:w,...m,children:[(0,v.jsx)(f,{className:S.content,ownerState:w,children:i}),c&&(0,v.jsx)(b,{className:S.expandIconWrapper,ownerState:w,children:c})]})}))},84885:(r,e,t)=>{t.d(e,{A:()=>b});var n=t(7552),o=t(93878),a=t(43583),i=t(70799),s=t(1045);var l=t(51148),c=t(84893),d=t(58520),p=t(4785),u=t(15622),g=t(47839),m=t(69500);const v=(0,l.Ay)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,e)=>e.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),h=(0,l.Ay)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.badge,e[t.variant],e[`anchorOrigin${(0,u.A)(t.anchorOrigin.vertical)}${(0,u.A)(t.anchorOrigin.horizontal)}${(0,u.A)(t.overlap)}`],"default"!==t.color&&e[`color${(0,u.A)(t.color)}`],t.invisible&&e.invisible]}})((0,c.A)((({theme:r})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen}),variants:[...Object.entries(r.palette).filter((0,d.A)(["contrastText"])).map((([e])=>({props:{color:e},style:{backgroundColor:(r.vars||r).palette[e].main,color:(r.vars||r).palette[e].contrastText}}))),{props:{variant:"dot"},style:{borderRadius:4,height:8,minWidth:8,padding:0}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.A.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.A.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.A.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.A.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.A.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.A.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.A.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.A.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})}}]}))));function f(r){return{vertical:r?.vertical??"top",horizontal:r?.horizontal??"right"}}const b=n.forwardRef((function(r,e){const t=(0,p.b)({props:r,name:"MuiBadge"}),{anchorOrigin:n,className:l,classes:c,component:d,components:b={},componentsProps:A={},children:y,overlap:x="rectangular",color:O="default",invisible:w=!1,max:S=99,badgeContent:R,slots:k,slotProps:C,showZero:$=!1,variant:M="standard",...N}=t,{badgeContent:T,invisible:z,max:E,displayValue:P}=function(r){const{badgeContent:e,invisible:t=!1,max:n=99,showZero:o=!1}=r,i=(0,a.A)({badgeContent:e,max:n});let s=t;!1!==t||0!==e||o||(s=!0);const{badgeContent:l,max:c=n}=s?i:r;return{badgeContent:l,invisible:s,max:c,displayValue:l&&Number(l)>c?`${c}+`:l}}({max:S,invisible:w,badgeContent:R,showZero:$}),j=(0,a.A)({anchorOrigin:f(n),color:O,overlap:x,variant:M,badgeContent:R}),I=z||null==T&&"dot"!==M,{color:L=O,overlap:B=x,anchorOrigin:W,variant:D=M}=I?j:t,G=f(W),V="dot"!==D?P:void 0,H={...t,badgeContent:T,invisible:I,max:E,displayValue:V,showZero:$,anchorOrigin:G,color:L,overlap:B,variant:D},F=(r=>{const{color:e,anchorOrigin:t,invisible:n,overlap:o,variant:a,classes:s={}}=r,l={root:["root"],badge:["badge",a,n&&"invisible",`anchorOrigin${(0,u.A)(t.vertical)}${(0,u.A)(t.horizontal)}`,`anchorOrigin${(0,u.A)(t.vertical)}${(0,u.A)(t.horizontal)}${(0,u.A)(o)}`,`overlap${(0,u.A)(o)}`,"default"!==e&&`color${(0,u.A)(e)}`]};return(0,i.A)(l,g.w,s)})(H),Z=k?.root??b.Root??v,_=k?.badge??b.Badge??h,U=C?.root??A.root,X=C?.badge??A.badge,Y=(0,s.A)({elementType:Z,externalSlotProps:U,externalForwardedProps:N,additionalProps:{ref:e,as:d},ownerState:H,className:(0,o.A)(U?.className,F.root,l)}),q=(0,s.A)({elementType:_,externalSlotProps:X,ownerState:H,className:(0,o.A)(F.badge,X?.className)});return(0,m.jsxs)(Z,{...Y,children:[y,(0,m.jsx)(_,{...q,children:V})]})}))},47839:(r,e,t)=>{t.d(e,{A:()=>i,w:()=>a});var n=t(33761),o=t(85693);function a(r){return(0,o.Ay)("MuiBadge",r)}const i=(0,n.A)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])},59705:(r,e,t)=>{t.d(e,{A:()=>x});var n=t(7552),o=t(93878),a=t(70799),i=t(64761),s=t(51148),l=t(84893),c=t(4785),d=t(15622),p=t(58520),u=t(72489),g=t(69500);const m=i.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,v=i.i7`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,h="string"!=typeof m?i.AH`
        animation: ${m} 1.4s linear infinite;
      `:null,f="string"!=typeof v?i.AH`
        animation: ${v} 1.4s ease-in-out infinite;
      `:null,b=(0,s.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${(0,d.A)(t.color)}`]]}})((0,l.A)((({theme:r})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("transform")}},{props:{variant:"indeterminate"},style:h||{animation:`${m} 1.4s linear infinite`}},...Object.entries(r.palette).filter((0,p.A)()).map((([e])=>({props:{color:e},style:{color:(r.vars||r).palette[e].main}})))]})))),A=(0,s.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),y=(0,s.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${(0,d.A)(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})((0,l.A)((({theme:r})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink,style:f||{animation:`${v} 1.4s ease-in-out infinite`}}]})))),x=n.forwardRef((function(r,e){const t=(0,c.b)({props:r,name:"MuiCircularProgress"}),{className:n,color:i="primary",disableShrink:s=!1,size:l=40,style:p,thickness:m=3.6,value:v=0,variant:h="indeterminate",...f}=t,x={...t,color:i,disableShrink:s,size:l,thickness:m,value:v,variant:h},O=(r=>{const{classes:e,variant:t,color:n,disableShrink:o}=r,i={root:["root",t,`color${(0,d.A)(n)}`],svg:["svg"],circle:["circle",`circle${(0,d.A)(t)}`,o&&"circleDisableShrink"]};return(0,a.A)(i,u.b,e)})(x),w={},S={},R={};if("determinate"===h){const r=2*Math.PI*((44-m)/2);w.strokeDasharray=r.toFixed(3),R["aria-valuenow"]=Math.round(v),w.strokeDashoffset=`${((100-v)/100*r).toFixed(3)}px`,S.transform="rotate(-90deg)"}return(0,g.jsx)(b,{className:(0,o.A)(O.root,n),style:{width:l,height:l,...S,...p},ownerState:x,ref:e,role:"progressbar",...R,...f,children:(0,g.jsx)(A,{className:O.svg,ownerState:x,viewBox:"22 22 44 44",children:(0,g.jsx)(y,{className:O.circle,style:w,ownerState:x,cx:44,cy:44,r:(44-m)/2,fill:"none",strokeWidth:m})})})}))},72489:(r,e,t)=>{t.d(e,{A:()=>i,b:()=>a});var n=t(33761),o=t(85693);function a(r){return(0,o.Ay)("MuiCircularProgress",r)}const i=(0,n.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},88215:(r,e,t)=>{t.d(e,{x:()=>c});var n=t(7552),o=t(29527),a=t(89887),i=t(99305),s=t(87995);function l(r){return r.substring(2).toLowerCase()}function c(r){const{children:e,disableReactTree:t=!1,mouseEvent:c="onClick",onClickAway:d,touchEvent:p="onTouchEnd"}=r,u=n.useRef(!1),g=n.useRef(null),m=n.useRef(!1),v=n.useRef(!1);n.useEffect((()=>(setTimeout((()=>{m.current=!0}),0),()=>{m.current=!1})),[]);const h=(0,o.A)((0,s.A)(e),g),f=(0,a.A)((r=>{const e=v.current;v.current=!1;const n=(0,i.A)(g.current);if(!m.current||!g.current||"clientX"in r&&function(r,e){return e.documentElement.clientWidth<r.clientX||e.documentElement.clientHeight<r.clientY}(r,n))return;if(u.current)return void(u.current=!1);let o;o=r.composedPath?r.composedPath().includes(g.current):!n.documentElement.contains(r.target)||g.current.contains(r.target),o||!t&&e||d(r)})),b=r=>t=>{v.current=!0;const n=e.props[r];n&&n(t)},A={ref:h};return!1!==p&&(A[p]=b(p)),n.useEffect((()=>{if(!1!==p){const r=l(p),e=(0,i.A)(g.current),t=()=>{u.current=!0};return e.addEventListener(r,f),e.addEventListener("touchmove",t),()=>{e.removeEventListener(r,f),e.removeEventListener("touchmove",t)}}}),[f,p]),!1!==c&&(A[c]=b(c)),n.useEffect((()=>{if(!1!==c){const r=l(c),e=(0,i.A)(g.current);return e.addEventListener(r,f),()=>{e.removeEventListener(r,f)}}}),[f,c]),n.cloneElement(e,A)}},17515:(r,e,t)=>{t.d(e,{A:()=>u});var n=t(7552),o=t(93878),a=t(70799),i=t(51148),s=t(84893),l=t(4785),c=t(89663),d=t(69500);const p=(0,i.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,!t.disableGutters&&e.gutters,e[t.variant]]}})((0,s.A)((({theme:r})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:r})=>!r.disableGutters,style:{paddingLeft:r.spacing(2),paddingRight:r.spacing(2),[r.breakpoints.up("sm")]:{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:r.mixins.toolbar}]})))),u=n.forwardRef((function(r,e){const t=(0,l.b)({props:r,name:"MuiToolbar"}),{className:n,component:i="div",disableGutters:s=!1,variant:u="regular",...g}=t,m={...t,component:i,disableGutters:s,variant:u},v=(r=>{const{classes:e,disableGutters:t,variant:n}=r,o={root:["root",!t&&"gutters",n]};return(0,a.A)(o,c.U,e)})(m);return(0,d.jsx)(p,{as:i,className:(0,o.A)(v.root,n),ref:e,ownerState:m,...g})}))},89663:(r,e,t)=>{t.d(e,{A:()=>i,U:()=>a});var n=t(33761),o=t(85693);function a(r){return(0,o.Ay)("MuiToolbar",r)}const i=(0,n.A)("MuiToolbar",["root","gutters","regular","dense"])}}]);
//# sourceMappingURL=1405.61925a42.chunk.js.map