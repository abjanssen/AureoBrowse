"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4863],{97464:(r,e,t)=>{t.r(e),t.d(e,{default:()=>u});var n=t(7552),a=t(68584),o=t(49823),i=t(99546),s=t(29499),l=t(99123),c=t(28237),d=t(68446);const g=(0,t(75785).n9)()({content:{minWidth:600}}),u=(0,d.observer)((function({trackWarnings:r,handleClose:e}){const{classes:t}=g(),d=function({trackWarnings:r}){const e=[];for(let t=0;t<r.length;t++){const n=r[t],o=(0,a.getConf)(n,"name"),i=n.displays[0];for(let r=0;r<i.warnings.length;r++){const n=i.warnings[r];e.push({name:o,...n,id:`${t}_${r}`})}}return e}({trackWarnings:r}),u=[{field:"name"},{field:"message",width:(0,i.measureGridWidth)(d.map((r=>r.message)))},{field:"effect",width:(0,i.measureGridWidth)(d.map((r=>r.effect)))}];return n.createElement(o.Dialog,{open:!0,onClose:e,maxWidth:"xl",title:"Dotplot rendered with warnings"},n.createElement(s.A,{className:t.content},n.createElement(l.A,null,"Found warnings while rendering the dotplot. This is often due to out-of-bound features that may indicate the wrong assemblies are being used. Check that the query and target are configured correctly, and that the right assemblies are being compared."),n.createElement("div",{style:{height:600,width:"100%",overflow:"auto"}},n.createElement(c.z,{rows:d,columns:u,disableRowSelectionOnClick:!0,rowHeight:25,disableColumnMenu:!0}))))}))},84885:(r,e,t)=>{t.d(e,{A:()=>b});var n=t(7552),a=t(93878),o=t(43583),i=t(70799),s=t(1045);var l=t(51148),c=t(84893),d=t(58520),g=t(4785),u=t(15622),p=t(47839),h=t(69500);const m=(0,l.Ay)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,e)=>e.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),f=(0,l.Ay)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.badge,e[t.variant],e[`anchorOrigin${(0,u.A)(t.anchorOrigin.vertical)}${(0,u.A)(t.anchorOrigin.horizontal)}${(0,u.A)(t.overlap)}`],"default"!==t.color&&e[`color${(0,u.A)(t.color)}`],t.invisible&&e.invisible]}})((0,c.A)((({theme:r})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen}),variants:[...Object.entries(r.palette).filter((0,d.A)(["contrastText"])).map((([e])=>({props:{color:e},style:{backgroundColor:(r.vars||r).palette[e].main,color:(r.vars||r).palette[e].contrastText}}))),{props:{variant:"dot"},style:{borderRadius:4,height:8,minWidth:8,padding:0}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${p.A.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})}}]}))));function v(r){return{vertical:r?.vertical??"top",horizontal:r?.horizontal??"right"}}const b=n.forwardRef((function(r,e){const t=(0,g.b)({props:r,name:"MuiBadge"}),{anchorOrigin:n,className:l,classes:c,component:d,components:b={},componentsProps:y={},children:A,overlap:w="rectangular",color:O="default",invisible:x=!1,max:S=99,badgeContent:k,slots:C,slotProps:R,showZero:$=!1,variant:E="standard",...T}=t,{badgeContent:z,invisible:M,max:P,displayValue:L}=function(r){const{badgeContent:e,invisible:t=!1,max:n=99,showZero:a=!1}=r,i=(0,o.A)({badgeContent:e,max:n});let s=t;!1!==t||0!==e||a||(s=!0);const{badgeContent:l,max:c=n}=s?i:r;return{badgeContent:l,invisible:s,max:c,displayValue:l&&Number(l)>c?`${c}+`:l}}({max:S,invisible:x,badgeContent:k,showZero:$}),W=(0,o.A)({anchorOrigin:v(n),color:O,overlap:w,variant:E,badgeContent:k}),B=M||null==z&&"dot"!==E,{color:N=O,overlap:j=w,anchorOrigin:D,variant:I=E}=B?W:t,G=v(D),F="dot"!==I?L:void 0,H={...t,badgeContent:z,invisible:B,max:P,displayValue:F,showZero:$,anchorOrigin:G,color:N,overlap:j,variant:I},_=(r=>{const{color:e,anchorOrigin:t,invisible:n,overlap:a,variant:o,classes:s={}}=r,l={root:["root"],badge:["badge",o,n&&"invisible",`anchorOrigin${(0,u.A)(t.vertical)}${(0,u.A)(t.horizontal)}`,`anchorOrigin${(0,u.A)(t.vertical)}${(0,u.A)(t.horizontal)}${(0,u.A)(a)}`,`overlap${(0,u.A)(a)}`,"default"!==e&&`color${(0,u.A)(e)}`]};return(0,i.A)(l,p.w,s)})(H),Z=C?.root??b.Root??m,V=C?.badge??b.Badge??f,U=R?.root??y.root,X=R?.badge??y.badge,q=(0,s.A)({elementType:Z,externalSlotProps:U,externalForwardedProps:T,additionalProps:{ref:e,as:d},ownerState:H,className:(0,a.A)(U?.className,_.root,l)}),Y=(0,s.A)({elementType:V,externalSlotProps:X,ownerState:H,className:(0,a.A)(_.badge,X?.className)});return(0,h.jsxs)(Z,{...q,children:[A,(0,h.jsx)(V,{...Y,children:F})]})}))},47839:(r,e,t)=>{t.d(e,{A:()=>i,w:()=>o});var n=t(33761),a=t(85693);function o(r){return(0,a.Ay)("MuiBadge",r)}const i=(0,n.A)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])},59705:(r,e,t)=>{t.d(e,{A:()=>w});var n=t(7552),a=t(93878),o=t(70799),i=t(64761),s=t(51148),l=t(84893),c=t(4785),d=t(15622),g=t(58520),u=t(72489),p=t(69500);const h=i.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,m=i.i7`
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
`,f="string"!=typeof h?i.AH`
        animation: ${h} 1.4s linear infinite;
      `:null,v="string"!=typeof m?i.AH`
        animation: ${m} 1.4s ease-in-out infinite;
      `:null,b=(0,s.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${(0,d.A)(t.color)}`]]}})((0,l.A)((({theme:r})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("transform")}},{props:{variant:"indeterminate"},style:f||{animation:`${h} 1.4s linear infinite`}},...Object.entries(r.palette).filter((0,g.A)()).map((([e])=>({props:{color:e},style:{color:(r.vars||r).palette[e].main}})))]})))),y=(0,s.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),A=(0,s.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${(0,d.A)(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})((0,l.A)((({theme:r})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink,style:v||{animation:`${m} 1.4s ease-in-out infinite`}}]})))),w=n.forwardRef((function(r,e){const t=(0,c.b)({props:r,name:"MuiCircularProgress"}),{className:n,color:i="primary",disableShrink:s=!1,size:l=40,style:g,thickness:h=3.6,value:m=0,variant:f="indeterminate",...v}=t,w={...t,color:i,disableShrink:s,size:l,thickness:h,value:m,variant:f},O=(r=>{const{classes:e,variant:t,color:n,disableShrink:a}=r,i={root:["root",t,`color${(0,d.A)(n)}`],svg:["svg"],circle:["circle",`circle${(0,d.A)(t)}`,a&&"circleDisableShrink"]};return(0,o.A)(i,u.b,e)})(w),x={},S={},k={};if("determinate"===f){const r=2*Math.PI*((44-h)/2);x.strokeDasharray=r.toFixed(3),k["aria-valuenow"]=Math.round(m),x.strokeDashoffset=`${((100-m)/100*r).toFixed(3)}px`,S.transform="rotate(-90deg)"}return(0,p.jsx)(b,{className:(0,a.A)(O.root,n),style:{width:l,height:l,...S,...g},ownerState:w,ref:e,role:"progressbar",...k,...v,children:(0,p.jsx)(y,{className:O.svg,ownerState:w,viewBox:"22 22 44 44",children:(0,p.jsx)(A,{className:O.circle,style:x,ownerState:w,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h})})})}))},72489:(r,e,t)=>{t.d(e,{A:()=>i,b:()=>o});var n=t(33761),a=t(85693);function o(r){return(0,a.Ay)("MuiCircularProgress",r)}const i=(0,n.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},88215:(r,e,t)=>{t.d(e,{x:()=>c});var n=t(7552),a=t(29527),o=t(89887),i=t(99305),s=t(87995);function l(r){return r.substring(2).toLowerCase()}function c(r){const{children:e,disableReactTree:t=!1,mouseEvent:c="onClick",onClickAway:d,touchEvent:g="onTouchEnd"}=r,u=n.useRef(!1),p=n.useRef(null),h=n.useRef(!1),m=n.useRef(!1);n.useEffect((()=>(setTimeout((()=>{h.current=!0}),0),()=>{h.current=!1})),[]);const f=(0,a.A)((0,s.A)(e),p),v=(0,o.A)((r=>{const e=m.current;m.current=!1;const n=(0,i.A)(p.current);if(!h.current||!p.current||"clientX"in r&&function(r,e){return e.documentElement.clientWidth<r.clientX||e.documentElement.clientHeight<r.clientY}(r,n))return;if(u.current)return void(u.current=!1);let a;a=r.composedPath?r.composedPath().includes(p.current):!n.documentElement.contains(r.target)||p.current.contains(r.target),a||!t&&e||d(r)})),b=r=>t=>{m.current=!0;const n=e.props[r];n&&n(t)},y={ref:f};return!1!==g&&(y[g]=b(g)),n.useEffect((()=>{if(!1!==g){const r=l(g),e=(0,i.A)(p.current),t=()=>{u.current=!0};return e.addEventListener(r,v),e.addEventListener("touchmove",t),()=>{e.removeEventListener(r,v),e.removeEventListener("touchmove",t)}}}),[v,g]),!1!==c&&(y[c]=b(c)),n.useEffect((()=>{if(!1!==c){const r=l(c),e=(0,i.A)(p.current);return e.addEventListener(r,v),()=>{e.removeEventListener(r,v)}}}),[v,c]),n.cloneElement(e,y)}},17515:(r,e,t)=>{t.d(e,{A:()=>u});var n=t(7552),a=t(93878),o=t(70799),i=t(51148),s=t(84893),l=t(4785),c=t(89663),d=t(69500);const g=(0,i.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,!t.disableGutters&&e.gutters,e[t.variant]]}})((0,s.A)((({theme:r})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:r})=>!r.disableGutters,style:{paddingLeft:r.spacing(2),paddingRight:r.spacing(2),[r.breakpoints.up("sm")]:{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:r.mixins.toolbar}]})))),u=n.forwardRef((function(r,e){const t=(0,l.b)({props:r,name:"MuiToolbar"}),{className:n,component:i="div",disableGutters:s=!1,variant:u="regular",...p}=t,h={...t,component:i,disableGutters:s,variant:u},m=(r=>{const{classes:e,disableGutters:t,variant:n}=r,a={root:["root",!t&&"gutters",n]};return(0,o.A)(a,c.U,e)})(h);return(0,d.jsx)(g,{as:i,className:(0,a.A)(m.root,n),ref:e,ownerState:h,...p})}))},89663:(r,e,t)=>{t.d(e,{A:()=>i,U:()=>o});var n=t(33761),a=t(85693);function o(r){return(0,a.Ay)("MuiToolbar",r)}const i=(0,n.A)("MuiToolbar",["root","gutters","regular","dense"])}}]);
//# sourceMappingURL=4863.2693bd10.chunk.js.map