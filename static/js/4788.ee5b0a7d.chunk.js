"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4788,7083],{7720:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(74893),r=n(69500);const s=(0,a.A)((0,r.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},25877:(e,t,n)=>{n.d(t,{A:()=>o,T:()=>s});var a=n(33761),r=n(85693);function s(e){return(0,r.Ay)("MuiAccordionSummary",e)}const o=(0,a.A)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"])},28055:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(7552),r=n(87731),s=n(75785),o=n(49823),i=n(99546),d=n(69500);const l=(0,s.n9)()((e=>({fieldValue:{wordBreak:"break-word",maxHeight:300,fontSize:12,padding:e.spacing(.5),overflow:"auto"}})));function c({value:e}){const{classes:t}=l(),n=/^https?:\/\//.exec(`${e}`);return(0,d.jsx)("div",{className:t.fieldValue,children:(0,a.isValidElement)(e)?e:n?(0,d.jsx)(r.A,{href:`${e}`,children:`${e}`}):(0,d.jsx)(o.SanitizedHTML,{html:(0,i.isObject)(e)?JSON.stringify(e):String(e)})})}},32106:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(75785),r=n(28055),s=n(36441),o=n(69500);const i=(0,a.n9)()({field:{display:"flex",flexWrap:"wrap"}});function d({name:e,value:t,description:n,prefix:a,width:d}){const{classes:l}=i();return null!=t?(0,o.jsxs)("div",{className:l.field,children:[(0,o.jsx)(s.A,{prefix:a,description:n,name:e,width:d}),(0,o.jsx)(r.A,{value:t})]}):null}},36441:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(89003),r=n(75785),s=n(69500);const o=(0,r.n9)()((e=>({fieldDescription:{"&:hover":{background:"dark"===e.palette.mode?"#e65100":"yellow"}},fieldName:{wordBreak:"break-all",minWidth:90,borderBottom:"1px solid #0003",fontSize:12,background:e.palette.action.disabledBackground,marginRight:e.spacing(1),padding:e.spacing(.5)}})));function i({description:e,name:t,width:n,prefix:r=[]}){const{classes:i,cx:d}=o(),l=[...r,t].join(".");return e?(0,s.jsx)(a.A,{title:e,placement:"left",children:(0,s.jsx)("div",{className:d(i.fieldDescription,i.fieldName),children:l})}):(0,s.jsx)("div",{className:i.fieldName,style:{width:n},children:l})}},48253:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(7552),r=n(93878),s=n(70799),o=n(51148),i=n(84893),d=n(4785),l=n(48054),c=n(51132),p=n(25877),u=n(43045),m=n(69500);const x=(0,o.Ay)(l.A,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((0,i.A)((({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{display:"flex",width:"100%",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${p.A.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${p.A.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${p.A.disabled})`]:{cursor:"pointer"},variants:[{props:e=>!e.disableGutters,style:{[`&.${p.A.expanded}`]:{minHeight:64}}}]}}))),f=(0,o.Ay)("span",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((0,i.A)((({theme:e})=>({display:"flex",textAlign:"start",flexGrow:1,margin:"12px 0",variants:[{props:e=>!e.disableGutters,style:{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${p.A.expanded}`]:{margin:"20px 0"}}}]})))),A=(0,o.Ay)("span",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((0,i.A)((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${p.A.expanded}`]:{transform:"rotate(180deg)"}})))),h=a.forwardRef((function(e,t){const n=(0,d.b)({props:e,name:"MuiAccordionSummary"}),{children:o,className:i,expandIcon:l,focusVisibleClassName:h,onClick:b,slots:g,slotProps:v,...j}=n,{disabled:y=!1,disableGutters:w,expanded:N,toggle:k}=a.useContext(c.A),S={...n,expanded:N,disabled:y,disableGutters:w},M=(e=>{const{classes:t,expanded:n,disabled:a,disableGutters:r}=e,o={root:["root",n&&"expanded",a&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,s.A)(o,p.T,t)})(S),P={slots:g,slotProps:v},[$,C]=(0,u.A)("root",{ref:t,shouldForwardComponentProp:!0,className:(0,r.A)(M.root,i),elementType:x,externalForwardedProps:{...P,...j},ownerState:S,additionalProps:{focusRipple:!1,disableRipple:!0,disabled:y,"aria-expanded":N,focusVisibleClassName:(0,r.A)(M.focusVisible,h)},getSlotProps:e=>({...e,onClick:t=>{e.onClick?.(t),(e=>{k&&k(e),b&&b(e)})(t)}})}),[R,T]=(0,u.A)("content",{className:M.content,elementType:f,externalForwardedProps:P,ownerState:S}),[V,D]=(0,u.A)("expandIconWrapper",{className:M.expandIconWrapper,elementType:A,externalForwardedProps:P,ownerState:S});return(0,m.jsxs)($,{...C,children:[(0,m.jsx)(R,{...T,children:o}),l&&(0,m.jsx)(V,{...D,children:l})]})}))},62568:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(99546),r=n(69500);function s(e){const{feature:t}=e,n=t.strand,s={"-1":"-",0:"",1:"+"},o=s[n]?`(${s[n]})`:"",i=(0,a.assembleLocString)(t);return(0,r.jsx)(r.Fragment,{children:`${i} ${o}`})}var o=n(32106);function i(e){const{feature:t}=e,n=t,i={...n,...n.__jbrowsefmt},{start:d,end:l}=i,c={...i,length:(0,a.toLocale)(l-d)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{name:"Position",value:(0,r.jsx)(s,{...e,feature:i})}),Object.entries({description:"Description",name:"Name",length:"Length",type:"Type"}).map((([e,t])=>[t,c[e]])).filter((([,e])=>null!=e)).map((([e,t])=>(0,r.jsx)(o.A,{name:e,value:t},e)))]})}},63165:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(7552),r=n(93878),s=n(70799),o=n(51148),i=n(84893),d=n(4785),l=n(79509),c=n(69500);const p=(0,o.Ay)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((0,i.A)((({theme:e})=>({padding:e.spacing(1,2,2)})))),u=a.forwardRef((function(e,t){const n=(0,d.b)({props:e,name:"MuiAccordionDetails"}),{className:a,...o}=n,i=n,u=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},l.n,t)})(i);return(0,c.jsx)(p,{className:(0,r.A)(u.root,a),ref:t,ownerState:i,...o})}))},79509:(e,t,n)=>{n.d(t,{A:()=>o,n:()=>s});var a=n(33761),r=n(85693);function s(e){return(0,r.Ay)("MuiAccordionDetails",e)}const o=(0,a.A)("MuiAccordionDetails",["root"])},87083:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(7720),r=n(63011),s=n(48253),o=n(36715),i=n(63165),d=n(75785),l=n(69500);const c=(0,d.n9)()((e=>({expansionPanelDetails:{display:"block",padding:e.spacing(1)},icon:{color:e.palette.tertiary.contrastText||"#fff"}})));function p({children:e,title:t,defaultExpanded:n=!0}){const{classes:d}=c();return(0,l.jsxs)(r.A,{defaultExpanded:n,children:[(0,l.jsx)(s.A,{expandIcon:(0,l.jsx)(a.A,{className:d.icon}),children:(0,l.jsx)(o.A,{variant:"button",children:t})}),(0,l.jsx)(i.A,{className:d.expansionPanelDetails,children:e})]})}},94788:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(87083),r=n(62568),s=n(69500);function o(e){const{title:t="Primary data"}=e;return(0,s.jsx)(a.default,{...e,title:t,children:(0,s.jsx)(r.A,{...e})})}}}]);
//# sourceMappingURL=4788.ee5b0a7d.chunk.js.map