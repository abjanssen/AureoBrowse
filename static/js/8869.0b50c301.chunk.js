"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8869],{78869:(e,n,a)=>{a.r(n),a.d(n,{default:()=>m});var l=a(7552),s=a(49823),r=a(99546),t=a(59705),i=a(36715),o=a(1343),c=a(29499),h=a(29629),d=a(33371),u=a(32808),j=a(58507),x=a(5401),v=a(69500);function f(){return(0,v.jsxs)("div",{children:[(0,v.jsx)(t.A,{size:20,style:{marginRight:20}}),(0,v.jsx)(i.A,{display:"inline",children:"Creating SVG"})]})}function b(e,n){return(0,r.useLocalStorage)(`svg-${e}`,n)}function g({children:e,...n}){return(0,v.jsx)("div",{children:(0,v.jsx)(o.A,{...n,children:e})})}function m({model:e,handleClose:n}){const a=(0,r.getSession)(e),t="undefined"!=typeof OffscreenCanvas,[o,m]=(0,l.useState)(t),[y,p]=(0,l.useState)(!1),[A,C]=b("file","jbrowse.svg"),[k,w]=b("tracklabels","offset"),[S,T]=b("theme",a.themeName||"default"),[z,L]=(0,l.useState)();return(0,v.jsxs)(s.Dialog,{open:!0,onClose:n,title:"Export SVG",children:[(0,v.jsxs)(c.A,{children:[z?(0,v.jsx)(s.ErrorMessage,{error:z}):y?(0,v.jsx)(f,{}):null,(0,v.jsx)(g,{helperText:"filename",value:A,onChange:e=>{C(e.target.value)}}),(0,v.jsxs)(g,{select:!0,label:"Track label positioning",variant:"outlined",value:k,style:{width:150},onChange:e=>{w(e.target.value)},children:[(0,v.jsx)(h.A,{value:"offset",children:"Offset"}),(0,v.jsx)(h.A,{value:"overlay",children:"Overlay"}),(0,v.jsx)(h.A,{value:"left",children:"Left"}),(0,v.jsx)(h.A,{value:"none",children:"None"})]}),(0,v.jsx)("br",{}),a.allThemes?(0,v.jsx)(g,{select:!0,label:"Theme",variant:"outlined",value:S,onChange:e=>{T(e.target.value)},children:Object.entries(a.allThemes()).map((([e,n])=>(0,v.jsx)(h.A,{value:e,children:n.name||"(Unknown name)"},e)))}):null,t?(0,v.jsx)(d.A,{control:(0,v.jsx)(u.A,{checked:o,onChange:()=>{m((e=>!e))}}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):(0,v.jsx)(i.A,{children:"Note: rasterizing layers not yet supported in this browser, so SVG size may be large"})]}),(0,v.jsxs)(j.A,{children:[(0,v.jsx)(x.A,{variant:"contained",color:"secondary",onClick:()=>{n()},children:"Cancel"}),(0,v.jsx)(x.A,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{p(!0),L(void 0);try{await e.exportSvg({rasterizeLayers:o,filename:A,themeName:S,trackLabels:k}),n()}catch(e){console.error(e),L(e)}finally{p(!1)}},children:"Submit"})]})]})}}}]);
//# sourceMappingURL=8869.0b50c301.chunk.js.map