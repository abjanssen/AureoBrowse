"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[130],{40130:(e,a,t)=>{t.r(a),t.d(a,{default:()=>f});var l=t(7552),r=t(49823),n=t(1343),s=t(29499),i=t(36715),d=t(87731),o=t(943),c=t(58507),p=t(5401),h=t(68446),u=t(75785),g=t(69500);const m=(0,u.n9)()((e=>({paper:{padding:e.spacing(2),margin:e.spacing(2)},field:{margin:e.spacing(2)}}))),x=["read paired","read mapped in proper pair","read unmapped","mate unmapped","read reverse strand","mate reverse strand","first in pair","second in pair","not primary alignment","read fails platform/vendor quality checks","read is PCR or optical duplicate","supplementary alignment"];function v(e){const{flag:a=0,setFlag:t}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.A,{type:"number",value:a,onChange:e=>{t(+e.target.value)}}),x.map(((e,l)=>{const r=a&1<<l,n=`${e}_${r}`;return(0,g.jsxs)("div",{children:[(0,g.jsx)("input",{type:"checkbox",checked:Boolean(r),onChange:e=>{e.target.checked?t(a|1<<l):t(a&~(1<<l))}}),(0,g.jsx)("label",{htmlFor:n,children:e})]},n)}))]})}const f=(0,h.observer)((function(e){const{model:a,handleClose:t}=e,{classes:h}=m(),{filterBy:u}=a,[x,f]=(0,l.useState)(u.flagInclude),[j,A]=(0,l.useState)(u.flagExclude),[b,y]=(0,l.useState)(u.tagFilter?.tag||""),[C,F]=(0,l.useState)(u.tagFilter?.value||""),[k,N]=(0,l.useState)(u.readName||""),S=/^[A-Za-z][A-Za-z0-9]$/.exec(b),w="https://broadinstitute.github.io/picard/explain-flags.html";return(0,g.jsx)(r.Dialog,{open:!0,onClose:t,title:"Filter options",children:(0,g.jsxs)(s.A,{children:[(0,g.jsxs)(i.A,{children:["Set filter bitmask options. Refer to ",(0,g.jsx)(d.A,{href:w,children:w})," ","for details"]}),(0,g.jsx)(o.A,{className:h.paper,variant:"outlined",children:(0,g.jsxs)("div",{style:{display:"flex"},children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(i.A,{children:"Read must have ALL these flags"}),(0,g.jsx)(v,{flag:x,setFlag:f})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(i.A,{children:"Read must have NONE of these flags"}),(0,g.jsx)(v,{flag:j,setFlag:A})]})]})}),(0,g.jsxs)(o.A,{className:h.paper,variant:"outlined",children:[(0,g.jsx)(i.A,{children:"Filter by tag name and value. Use * in the value field to get all reads containing any value for that tag. Example: filter tag name SA with value * to get all split/supplementary reads. Other examples include HP for haplotype, or RG for read group"}),(0,g.jsx)(n.A,{className:h.field,value:b,onChange:e=>{y(e.target.value)},placeholder:"Enter tag name",error:2===b.length&&!S,helperText:2!==b.length||S?"":"Not a valid tag",slotProps:{htmlInput:{maxLength:2}}}),(0,g.jsx)(n.A,{className:h.field,value:C,onChange:e=>{F(e.target.value)},placeholder:"Enter tag value"})]}),(0,g.jsxs)(o.A,{className:h.paper,variant:"outlined",children:[(0,g.jsx)(i.A,{children:"Filter by read name"}),(0,g.jsx)(n.A,{className:h.field,value:k,onChange:e=>{N(e.target.value)},placeholder:"Enter read name"})]}),(0,g.jsxs)(c.A,{children:[(0,g.jsx)(p.A,{variant:"contained",color:"primary",autoFocus:!0,type:"submit",onClick:()=>{a.setFilterBy({flagInclude:x,flagExclude:j,readName:k,tagFilter:""!==b?{tag:b,value:C}:void 0}),t()},children:"Submit"}),(0,g.jsx)(p.A,{variant:"contained",color:"secondary",onClick:()=>{t()},children:"Cancel"})]})]})})}))}}]);
//# sourceMappingURL=130.6334c9b6.chunk.js.map