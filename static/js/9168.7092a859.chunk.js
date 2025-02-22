"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9168],{1773:(e,r,t)=>{t.d(r,{A:()=>u});var a=t(7552),n=t(93878),o=t(70799),s=t(51148),i=t(4785),l=t(943),d=t(50885),c=t(69500);const p=(0,s.Ay)(l.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})({overflow:"hidden"}),u=a.forwardRef((function(e,r){const t=(0,i.b)({props:e,name:"MuiCard"}),{className:a,raised:s=!1,...l}=t,u={...t,raised:s},b=(e=>{const{classes:r}=e;return(0,o.A)({root:["root"]},d.T,r)})(u);return(0,c.jsx)(p,{className:(0,n.A)(b.root,a),elevation:s?8:void 0,ref:r,ownerState:u,...l})}))},7720:(e,r,t)=>{t.d(r,{A:()=>o});var a=t(74893),n=t(69500);const o=(0,a.A)((0,n.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},25355:(e,r,t)=>{t.d(r,{A:()=>p});var a=t(7552),n=t(93878),o=t(70799),s=t(51148),i=t(4785),l=t(61823),d=t(69500);const c=(0,s.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,r)=>r.root})({padding:16,"&:last-child":{paddingBottom:24}}),p=a.forwardRef((function(e,r){const t=(0,i.b)({props:e,name:"MuiCardContent"}),{className:a,component:s="div",...p}=t,u={...t,component:s},b=(e=>{const{classes:r}=e;return(0,o.A)({root:["root"]},l.h,r)})(u);return(0,d.jsx)(c,{as:s,className:(0,n.A)(b.root,a),ownerState:u,ref:r,...p})}))},25877:(e,r,t)=>{t.d(r,{A:()=>s,T:()=>o});var a=t(33761),n=t(85693);function o(e){return(0,n.Ay)("MuiAccordionSummary",e)}const s=(0,a.A)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"])},29168:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});var a=t(7720),n=t(63011),o=t(48253),s=t(36715),i=t(1773),l=t(25355),d=t(68446),c=t(75785),p=t(7552),u=t(6024),b=t(84421),m=t(71379),f=t(5401),A=t(69500);const h=(0,d.observer)((function({job:e}){const[r,t]=(0,p.useState)(!1);return(0,A.jsxs)(i.A,{variant:"outlined",children:[(0,A.jsxs)(l.A,{children:[(0,A.jsxs)(s.A,{variant:"body1",children:[(0,A.jsx)("strong",{children:"Name: "}),e.name]}),(0,A.jsxs)(s.A,{variant:"body1",children:[(0,A.jsx)("strong",{children:"Message: "}),e.statusMessage||"No message provided"]}),(0,A.jsx)(u.A,{sx:{display:"flex",alignItems:"center",marginTop:10,marginBottom:10,marginLeft:10},children:0===e.progressPct||100===e.progressPct?(0,A.jsx)(u.A,{sx:{width:"100%"},children:(0,A.jsx)(b.A,{variant:"indeterminate"})}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(u.A,{sx:{width:"100%"},children:(0,A.jsx)(b.A,{variant:"determinate",value:e.progressPct})}),(0,A.jsx)(u.A,{sx:{m:1},children:(0,A.jsx)(s.A,{children:`${Math.round(e.progressPct||0)}%`})})]})})]}),(0,A.jsx)(m.A,{children:(0,A.jsx)(f.A,{variant:"contained",color:"inherit",disabled:r||0===e.progressPct,onClick:()=>{e.setStatusMessage("Aborted via cancel button"),e.cancelCallback(),t(!0)},children:"Cancel"})})]})})),x=(0,d.observer)((function({job:e}){return(0,A.jsx)(i.A,{variant:"outlined",children:(0,A.jsxs)(l.A,{children:[(0,A.jsxs)(s.A,{variant:"body1",children:[(0,A.jsx)("strong",{children:"Name: "}),e.name]}),e.statusMessage?(0,A.jsxs)(s.A,{variant:"body1",children:[(0,A.jsx)("strong",{children:"Message: "}),e.statusMessage]}):null]})})})),v=(0,c.n9)()((e=>({root:{margin:e.spacing(1)},expandIcon:{color:e.palette.tertiary.contrastText}}))),g=(0,d.observer)((function({model:e}){const{classes:r}=v(),{jobs:t,finished:d,queued:c,aborted:p}=e;return(0,A.jsxs)("div",{className:r.root,children:[(0,A.jsxs)(n.A,{defaultExpanded:!0,children:[(0,A.jsx)(o.A,{expandIcon:(0,A.jsx)(a.A,{className:r.expandIcon}),children:(0,A.jsx)(s.A,{variant:"h5",children:"Running jobs"})}),t.length?t.map(((e,r)=>(0,A.jsx)(h,{job:e},`${JSON.stringify(e)}-${r}`))):(0,A.jsx)(i.A,{variant:"outlined",children:(0,A.jsx)(l.A,{children:(0,A.jsx)(s.A,{variant:"body1",children:"No running jobs"})})})]}),(0,A.jsxs)(n.A,{defaultExpanded:!0,children:[(0,A.jsx)(o.A,{expandIcon:(0,A.jsx)(a.A,{className:r.expandIcon}),children:(0,A.jsx)(s.A,{variant:"h5",children:"Queued jobs"})}),c.length?c.map(((e,r)=>(0,A.jsx)(x,{job:e},`${JSON.stringify(e)}-${r}`))):(0,A.jsx)(i.A,{variant:"outlined",children:(0,A.jsx)(l.A,{children:(0,A.jsx)(s.A,{variant:"body1",children:"No queued jobs"})})})]}),(0,A.jsxs)(n.A,{defaultExpanded:!0,children:[(0,A.jsx)(o.A,{expandIcon:(0,A.jsx)(a.A,{className:r.expandIcon}),children:(0,A.jsx)(s.A,{variant:"h5",children:"Completed jobs"})}),d.length?d.map(((e,r)=>(0,A.jsx)(x,{job:e},`${JSON.stringify(e)}-${r}`))):(0,A.jsx)(i.A,{variant:"outlined",children:(0,A.jsx)(l.A,{children:(0,A.jsx)(s.A,{variant:"body1",children:"No completed jobs"})})})]}),(0,A.jsxs)(n.A,{defaultExpanded:!0,children:[(0,A.jsx)(o.A,{expandIcon:(0,A.jsx)(a.A,{className:r.expandIcon}),children:(0,A.jsx)(s.A,{variant:"h5",children:"Aborted jobs"})}),p.length?p.map(((e,r)=>(0,A.jsx)(x,{job:e},`${JSON.stringify(e)}-${r}`))):(0,A.jsx)(i.A,{variant:"outlined",children:(0,A.jsx)(l.A,{children:(0,A.jsx)(s.A,{variant:"body1",children:"No aborted jobs"})})})]})]})}))},48253:(e,r,t)=>{t.d(r,{A:()=>A});var a=t(7552),n=t(93878),o=t(70799),s=t(51148),i=t(84893),l=t(4785),d=t(48054),c=t(51132),p=t(25877),u=t(69500);const b=(0,s.Ay)(d.A,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,r)=>r.root})((0,i.A)((({theme:e})=>{const r={duration:e.transitions.duration.shortest};return{display:"flex",width:"100%",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],r),[`&.${p.A.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${p.A.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${p.A.disabled})`]:{cursor:"pointer"},variants:[{props:e=>!e.disableGutters,style:{[`&.${p.A.expanded}`]:{minHeight:64}}}]}}))),m=(0,s.Ay)("span",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,r)=>r.content})((0,i.A)((({theme:e})=>({display:"flex",textAlign:"start",flexGrow:1,margin:"12px 0",variants:[{props:e=>!e.disableGutters,style:{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${p.A.expanded}`]:{margin:"20px 0"}}}]})))),f=(0,s.Ay)("span",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,r)=>r.expandIconWrapper})((0,i.A)((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${p.A.expanded}`]:{transform:"rotate(180deg)"}})))),A=a.forwardRef((function(e,r){const t=(0,l.b)({props:e,name:"MuiAccordionSummary"}),{children:s,className:i,expandIcon:d,focusVisibleClassName:A,onClick:h,...x}=t,{disabled:v=!1,disableGutters:g,expanded:y,toggle:j}=a.useContext(c.A),C={...t,expanded:y,disabled:v,disableGutters:g},w=(e=>{const{classes:r,expanded:t,disabled:a,disableGutters:n}=e,s={root:["root",t&&"expanded",a&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]};return(0,o.A)(s,p.T,r)})(C);return(0,u.jsxs)(b,{focusRipple:!1,disableRipple:!0,disabled:v,"aria-expanded":y,className:(0,n.A)(w.root,i),focusVisibleClassName:(0,n.A)(w.focusVisible,A),onClick:e=>{j&&j(e),h&&h(e)},ref:r,ownerState:C,...x,children:[(0,u.jsx)(m,{className:w.content,ownerState:C,children:s}),d&&(0,u.jsx)(f,{className:w.expandIconWrapper,ownerState:C,children:d})]})}))},50077:(e,r,t)=>{t.d(r,{A:()=>s,l:()=>o});var a=t(33761),n=t(85693);function o(e){return(0,n.Ay)("MuiLinearProgress",e)}const s=(0,a.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"])},50885:(e,r,t)=>{t.d(r,{A:()=>s,T:()=>o});var a=t(33761),n=t(85693);function o(e){return(0,n.Ay)("MuiCard",e)}const s=(0,a.A)("MuiCard",["root"])},61823:(e,r,t)=>{t.d(r,{A:()=>s,h:()=>o});var a=t(33761),n=t(85693);function o(e){return(0,n.Ay)("MuiCardContent",e)}const s=(0,a.A)("MuiCardContent",["root"])},71379:(e,r,t)=>{t.d(r,{A:()=>p});var a=t(7552),n=t(93878),o=t(70799),s=t(51148),i=t(4785),l=t(93863),d=t(69500);const c=(0,s.Ay)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,!t.disableSpacing&&r.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),p=a.forwardRef((function(e,r){const t=(0,i.b)({props:e,name:"MuiCardActions"}),{disableSpacing:a=!1,className:s,...p}=t,u={...t,disableSpacing:a},b=(e=>{const{classes:r,disableSpacing:t}=e,a={root:["root",!t&&"spacing"]};return(0,o.A)(a,l.E,r)})(u);return(0,d.jsx)(c,{className:(0,n.A)(b.root,s),ownerState:u,ref:r,...p})}))},84421:(e,r,t)=>{t.d(r,{A:()=>M});var a=t(7552),n=t(93878),o=t(70799),s=t(963),i=t(23456),l=t(64761),d=t(51148),c=t(84893),p=t(58520),u=t(4785),b=t(15622),m=t(50077),f=t(69500);const A=l.i7`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,h="string"!=typeof A?l.AH`
        animation: ${A} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,x=l.i7`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,v="string"!=typeof x?l.AH`
        animation: ${x} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,g=l.i7`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,y="string"!=typeof g?l.AH`
        animation: ${g} 3s infinite linear;
      `:null,j=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?(0,s.a)(e.palette[r].main,.62):(0,s.e$)(e.palette[r].main,.5),C=(0,d.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${(0,b.A)(t.color)}`],r[t.variant]]}})((0,c.A)((({theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter((0,p.A)()).map((([r])=>({props:{color:r},style:{backgroundColor:j(e,r)}}))),{props:({ownerState:e})=>"inherit"===e.color&&"buffer"!==e.variant,style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]})))),w=(0,d.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${(0,b.A)(t.color)}`]]}})((0,c.A)((({theme:e})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter((0,p.A)()).map((([r])=>{const t=j(e,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}}))]}))),y||{animation:`${g} 3s infinite linear`}),S=(0,d.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar1,r[`barColor${(0,b.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})((0,c.A)((({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter((0,p.A)()).map((([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main}}))),{props:{variant:"determinate"},style:{transition:"transform .4s linear"}},{props:{variant:"buffer"},style:{zIndex:1,transition:"transform .4s linear"}},{props:({ownerState:e})=>"indeterminate"===e.variant||"query"===e.variant,style:{width:"auto"}},{props:({ownerState:e})=>"indeterminate"===e.variant||"query"===e.variant,style:h||{animation:`${A} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]})))),$=(0,d.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar2,r[`barColor${(0,b.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})((0,c.A)((({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter((0,p.A)()).map((([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[r].main}}))),{props:({ownerState:e})=>"buffer"!==e.variant&&"inherit"!==e.color,style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:e})=>"buffer"!==e.variant&&"inherit"===e.color,style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter((0,p.A)()).map((([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:j(e,r),transition:"transform .4s linear"}}))),{props:({ownerState:e})=>"indeterminate"===e.variant||"query"===e.variant,style:{width:"auto"}},{props:({ownerState:e})=>"indeterminate"===e.variant||"query"===e.variant,style:v||{animation:`${x} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]})))),M=a.forwardRef((function(e,r){const t=(0,u.b)({props:e,name:"MuiLinearProgress"}),{className:a,color:s="primary",value:l,valueBuffer:d,variant:c="indeterminate",...p}=t,A={...t,color:s,variant:c},h=(e=>{const{classes:r,variant:t,color:a}=e,n={root:["root",`color${(0,b.A)(a)}`,t],dashed:["dashed",`dashedColor${(0,b.A)(a)}`],bar1:["bar","bar1",`barColor${(0,b.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","bar2","buffer"!==t&&`barColor${(0,b.A)(a)}`,"buffer"===t&&`color${(0,b.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,o.A)(n,m.l,r)})(A),x=(0,i.I)(),v={},g={bar1:{},bar2:{}};if(("determinate"===c||"buffer"===c)&&void 0!==l){v["aria-valuenow"]=Math.round(l),v["aria-valuemin"]=0,v["aria-valuemax"]=100;let e=l-100;x&&(e=-e),g.bar1.transform=`translateX(${e}%)`}if("buffer"===c&&void 0!==d){let e=(d||0)-100;x&&(e=-e),g.bar2.transform=`translateX(${e}%)`}return(0,f.jsxs)(C,{className:(0,n.A)(h.root,a),ownerState:A,role:"progressbar",...v,ref:r,...p,children:["buffer"===c?(0,f.jsx)(w,{className:h.dashed,ownerState:A}):null,(0,f.jsx)(S,{className:h.bar1,ownerState:A,style:g.bar1}),"determinate"===c?null:(0,f.jsx)($,{className:h.bar2,ownerState:A,style:g.bar2})]})}))},93863:(e,r,t)=>{t.d(r,{A:()=>s,E:()=>o});var a=t(33761),n=t(85693);function o(e){return(0,n.Ay)("MuiCardActions",e)}const s=(0,a.A)("MuiCardActions",["root","spacing"])}}]);
//# sourceMappingURL=9168.7092a859.chunk.js.map