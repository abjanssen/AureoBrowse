"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5369],{55369:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(7552),i=a(49823),s=a(29499),r=a(36715),o=a(1343),c=a(33371),h=a(32808),l=a(58507),u=a(5401),d=a(68446),g=a(69500);const b=(0,d.observer)((function(e){const{model:t,handleClose:a}=e,{featureHeightSetting:d,noSpacing:b}=t,[p,j]=(0,n.useState)(`${d}`),[m,v]=(0,n.useState)(b),x=""!==p&&!Number.isNaN(+p);return(0,g.jsx)(i.Dialog,{open:!0,onClose:a,title:"Set feature height",children:(0,g.jsxs)(s.A,{children:[(0,g.jsx)(r.A,{children:"Adjust the feature height and whether there is any spacing between features. Setting feature height to 1 and removing spacing makes the display very compact."}),(0,g.jsx)(o.A,{value:p,helperText:"Feature height",onChange:e=>{j(e.target.value)}}),(0,g.jsx)(c.A,{control:(0,g.jsx)(h.A,{checked:!!m,onChange:()=>{v((e=>!e))}}),label:"Remove spacing between features in y-direction?"}),(0,g.jsxs)(l.A,{children:[(0,g.jsx)(u.A,{variant:"contained",color:"primary",type:"submit",autoFocus:!0,disabled:!x,onClick:()=>{t.setFeatureHeight(""===p||Number.isNaN(+p)?void 0:+p),t.setNoSpacing(m),a()},children:"Submit"}),(0,g.jsx)(u.A,{variant:"contained",color:"secondary",onClick:()=>{a()},children:"Cancel"})]})]})})}))}}]);
//# sourceMappingURL=5369.d1eedf13.chunk.js.map