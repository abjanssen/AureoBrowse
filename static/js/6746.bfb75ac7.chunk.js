"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5669,6746],{45669:(e,r,t)=>{t.r(r),t.d(r,{default:()=>C});var n=t(7552),s=t(68446),o=t(99546),a=t(373);const l="rgb(220,220,180)",c="rgba(250,200,200)";function d({str:e,charactersPerRow:r,showCoordinates:t,currRemainder:n=0,splitSize:s=10}){const o=Math.ceil(e.length/r),a=new Array(o);let l=n%10,c=0,d=0;for(;c<o+1;++c){const o=0===c?r-n:r,i=e.slice(d,d+o);if(!i)break;if(t){let e="";for(let r=0,t=l;r<i.length;r++,t++)t%s==0&&(e+=" ",t=0),e+=i[r];e&&(a[c]=e)}else a[c]=i;l=0,d+=o}return{segments:a,remainder:((a.at(-1)?.replaceAll(" ","").length||0)+(c<2?n:0))%r}}var i=t(69500);const u=(0,s.observer)((function({chunks:e,start:r,color:t,strand:s=1,coordStart:o=r,model:a}){const{charactersPerRow:l,showCoordinates:c}=a;return e.map(((a,d)=>{const u=0===d&&r%l==0||d>0?`${(""+(o-r%l+d*s*l)).padStart(4)}   `:"",h=d===e.length-1&&(e.at(-1)?.replaceAll(" ","").length||0)+(0===d?r%l:0)!==l?null:c?" \n":"";return(0,i.jsxs)(n.Fragment,{children:[c?u:null,(0,i.jsx)("span",{style:{background:t},children:a}),h]},`${a}-${d}`)}))})),h=(0,s.observer)((function({utr:e,cds:r,exons:t,sequence:n,upstream:s,downstream:o,feature:a,includeIntrons:h,collapseIntron:m,model:g}){const{upperCaseCDS:f,intronBp:w,charactersPerRow:p,showCoordinates:x,showCoordinatesSetting:j}=g,C=r.length>0,b=(r.length?[...r,...e].sort(((e,r)=>e.start-r.start)):t).filter((e=>e.start!==e.end)),q=e=>f?e.toLowerCase():e,v=e=>f?e.toUpperCase():e,k=-1===a.strand?-1:1,S="genomic"===j&&h&&!m,R=S?k:1;let y=S?k>0?a.start+1-(s?.length||0):a.end+(s?.length||0):0,P=0,$=0,_=null;if(s){const{segments:e,remainder:r}=d({str:q(s),charactersPerRow:p,showCoordinates:x});_=(0,i.jsx)(u,{model:g,color:c,strand:R,start:P,coordStart:y,chunks:e}),$=r,P+=s.length*R,y+=s.length*R}const A=[];for(let e=0;e<b.length;e++){const r=b[e],t=n.slice(r.end,b[e+1]?.start),s=n.slice(r.start,r.end),{segments:o,remainder:a}=d({str:C?"CDS"===r.type?v(s):q(s):v(s),charactersPerRow:p,currRemainder:$,showCoordinates:x});if(A.push((0,i.jsx)(u,{model:g,color:"CDS"===r.type?l:"rgb(200,240,240)",strand:R,start:P,coordStart:y,chunks:o},`${JSON.stringify(r)}-mid`)),$=a,P+=s.length*R,y+=s.length*R,t&&h&&e<b.length-1){const e=q(m&&t.length>2*w?`${t.slice(0,w)}...${t.slice(-w)}`:t),{segments:n,remainder:s}=d({str:e,charactersPerRow:p,currRemainder:$,showCoordinates:x});n.length&&(A.push((0,i.jsx)(u,{model:g,strand:R,coordStart:y,start:P,chunks:n},`${JSON.stringify(r)}-intron`)),$=s,P+=e.length*R,y+=e.length*R)}}let D=null;if(o){const{segments:e}=d({str:q(o),charactersPerRow:p,currRemainder:$,showCoordinates:x});D=(0,i.jsx)(u,{start:P,model:g,strand:R,chunks:e,coordStart:y,color:c})}return(0,i.jsxs)(i.Fragment,{children:[_,A,D]})})),m=(0,s.observer)((function({cds:e,sequence:r,model:t}){const{charactersPerRow:n,showCoordinates:s}=t,{segments:o}=d({str:(0,a.o9)(e,r),charactersPerRow:n,showCoordinates:s});return(0,i.jsx)(u,{model:t,color:l,chunks:o,start:0})})),g=(0,s.observer)((function({sequence:e,upstream:r,feature:t,downstream:n,model:s}){const{charactersPerRow:o,showCoordinatesSetting:a,showCoordinates:l}=s;let h=0,m=null,g=0;const f=-1===t.strand?-1:1,w="genomic"===a,p=w?f:1;let x=w?f>0?t.start+1-(r?.length||0):t.end+(r?.length||0):0;if(r){const{segments:e,remainder:t}=d({str:r,charactersPerRow:o,showCoordinates:l});m=(0,i.jsx)(u,{model:s,color:c,start:h,coordStart:x,chunks:e}),g=t,h+=r.length*p,x+=r.length*p}const{segments:j,remainder:C}=d({str:e,charactersPerRow:o,showCoordinates:l,currRemainder:g}),b=(0,i.jsx)(u,{model:s,color:"rgb(200,280,200)",start:h,coordStart:x,chunks:j});g=C,h+=e.length*p,x+=e.length*p;let q=null;if(n){const{segments:e}=d({str:n,charactersPerRow:o,currRemainder:g,showCoordinates:l});q=(0,i.jsx)(u,{start:h,model:s,chunks:e,coordStart:x,color:c})}return(0,i.jsxs)(i.Fragment,{children:[m,b,q]})})),f=(0,s.observer)((function({cds:e,sequence:r,codonTable:t,model:n}){const{charactersPerRow:s,showCoordinates:o}=n,l=(0,a.o9)(e,r);let c="";for(let e=0;e<l.length;e+=3)c+=t[l.slice(e,e+3)]||"&";const{segments:h}=d({str:c,charactersPerRow:s,showCoordinates:o});return(0,i.jsx)(u,{model:n,color:"rgb(220,160,220)",chunks:h,start:0})})),w=(0,s.observer)((function({mode:e,feature:r,sequence:t,model:n}){let{seq:s,upstream:l="",downstream:c=""}=t;const d=r.subfeatures?.sort(((e,r)=>e.start-r.start)).map((e=>({...e,start:e.start-r.start,end:e.end-r.start})))||[];let u=(0,a.Qq)(d.filter((e=>"CDS"===e.type))),w=(0,a.Qq)(d.filter((e=>e.type?.match(/utr/i)))),p=(0,a.Qq)(d.filter((e=>"exon"===e.type)));return!w.length&&u.length&&p.length&&(w=(0,a.h8)(u,p)),w.length||!u.length||p.length||(w=(0,a.V4)(u,{start:0,end:r.end-r.start,type:"gene"})),-1===r.strand&&([s,l,c]=[(0,o.revcom)(s),(0,o.revcom)(c),(0,o.revcom)(l)],u=(0,a.YC)(u,s.length),p=(0,a.YC)(p,s.length),w=(0,a.YC)(w,s.length)),(0,i.jsx)(i.Fragment,{children:"genomic"===e?(0,i.jsx)(g,{feature:r,model:n,sequence:s}):"genomic_sequence_updownstream"===e?(0,i.jsx)(g,{model:n,feature:r,sequence:s,upstream:l,downstream:c}):"cds"===e?(0,i.jsx)(m,{model:n,cds:u,sequence:s}):"cdna"===e?(0,i.jsx)(h,{model:n,exons:p,feature:r,cds:u,utr:w,sequence:s}):"protein"===e?(0,i.jsx)(f,{model:n,cds:u,codonTable:(0,o.generateCodonTable)(o.defaultCodonTable),sequence:s}):"gene"===e?(0,i.jsx)(h,{model:n,exons:p,feature:r,cds:u,utr:w,sequence:s,includeIntrons:!0}):"gene_collapsed_intron"===e?(0,i.jsx)(h,{model:n,exons:p,feature:r,cds:u,sequence:s,utr:w,includeIntrons:!0,collapseIntron:!0}):"gene_updownstream"===e?(0,i.jsx)(h,{model:n,exons:p,feature:r,cds:u,sequence:s,utr:w,upstream:l,downstream:c,includeIntrons:!0}):"gene_updownstream_collapsed_intron"===e?(0,i.jsx)(h,{model:n,exons:p,feature:r,cds:u,sequence:s,utr:w,upstream:l,downstream:c,includeIntrons:!0,collapseIntron:!0}):(0,i.jsx)("div",{children:"Unknown type"})})})),p=(0,s.observer)((function({mode:e,model:r,feature:t}){return(0,i.jsx)("div",{style:{background:"white"},children:`>${[[t.name||t.id,e].filter((e=>!!e)).join("-"),`${t.refName}:${(0,o.toLocale)(t.start+1)}-${(0,o.toLocale)(t.end)}${n=t.strand,-1===n?"(-)":1===n?"(+)":""}`,e.endsWith("updownstream")?`+/- ${(0,o.toLocale)(r.upDownBp)} up/downstream bp`:""].filter((e=>!!e)).join(" ")}\n`});var n}));function x({children:e}){return(0,i.jsx)("pre",{style:{fontFamily:"monospace",color:"black",fontSize:11},children:e})}function j({children:e}){return(0,i.jsx)("div",{style:{fontFamily:"monospace",color:"black",fontSize:11,maxWidth:600,whiteSpace:"wrap",wordBreak:"break-all"},children:e})}const C=(0,s.observer)((0,n.forwardRef)((function(e,r){const{sequence:t,model:n,feature:s}=e,{showCoordinates:o,mode:a}=n,l=o?x:j;return(0,i.jsx)("div",{"data-testid":"sequence_panel",ref:r,style:{maxHeight:300,overflow:"auto"},children:(0,i.jsxs)(l,{children:[(0,i.jsx)(p,{model:n,mode:a,feature:s}),(0,i.jsx)(w,{model:n,mode:a,feature:s,sequence:t})]})})})))},76746:(e,r,t)=>{t.r(r),t.d(r,{default:()=>p});var n=t(7552),s=t(49823),o=t(29499),a=t(36715),l=t(5401),c=t(58507),d=t(68446),i=t(75785),u=t(45669),h=t(78781),m=t(54579),g=t(14465),f=t(69500);const w=(0,i.n9)()({dialogContent:{width:"80em"},formControl:{margin:0,marginLeft:4}}),p=(0,d.observer)((function({handleClose:e,model:r,feature:t}){const{sequenceFeatureDetails:d}=r,{upDownBp:i}=d,{classes:p}=w(),x=(0,n.useRef)(null),[j,C]=(0,n.useState)(!1),{sequence:b,error:q}=(0,h.p)(r,t,i,j);return(0,f.jsxs)(s.Dialog,{maxWidth:"xl",open:!0,onClose:()=>{e()},title:"Sequence view",children:[(0,f.jsxs)(o.A,{className:p.dialogContent,children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(g.A,{model:d}),(0,f.jsx)(m.A,{ref:x,model:d})]}),(0,f.jsxs)("div",{children:["gene"===t.type?(0,f.jsx)(a.A,{children:"Note: inspect subfeature sequences for protein/CDS computations"}):null,q?(0,f.jsx)(s.ErrorMessage,{error:q}):b?"error"in b?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.A,{color:"error",children:b.error}),(0,f.jsx)(l.A,{variant:"contained",color:"inherit",onClick:()=>{C(!0)},children:"Force load"})]}):(0,f.jsx)(n.Suspense,{fallback:(0,f.jsx)(s.LoadingEllipses,{}),children:(0,f.jsx)(u.default,{ref:x,feature:t,sequence:b,model:d})}):(0,f.jsx)(s.LoadingEllipses,{})]})]}),(0,f.jsx)(c.A,{children:(0,f.jsx)(l.A,{onClick:()=>{e()},variant:"contained",children:"Close"})})]})}))}}]);
//# sourceMappingURL=6746.bfb75ac7.chunk.js.map