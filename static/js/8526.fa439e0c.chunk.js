"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8526],{8526:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(7552),l=n(20529),o=n(68446),a=n(26842);const i=(0,o.observer)((function(e){const{model:t}=e;return r.createElement("div",null,r.createElement(l.GQ,e),r.createElement(a.A,{model:t}))}))},26842:(e,t,n)=>{n.d(t,{A:()=>h});var r=n(7552),l=n(99546),o=n(68446);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(null,arguments)}const i=e=>{const{color:t="rgb(255,255,255,0.8)"}=e;return r.createElement("rect",a({},e,(0,l.getFillProps)(t)))},c=(0,o.observer)((function({model:e,rowHeight:t,labelWidth:n,exportSVG:l}){const{needsCustomLegend:o,needsScalebar:a,needsFullHeightScalebar:c,rowHeightTooSmallForScalebar:s,renderColorBoxes:m,sources:u}=e,g=Math.min(t,12),h=t>11,d=m?15:0,f=n+d+5,p=(l?10:0)||(a&&!s?50:0);return u?r.createElement(r.Fragment,null,c?r.createElement(i,{y:0,x:p,width:f,height:(u.length+.25)*t}):null,u.map(((e,n)=>{const l=Math.min(20,t);return r.createElement(r.Fragment,{key:`${e.name}-${n}`},c?null:r.createElement(i,{y:n*t+1,x:p,width:f,height:l}),e.color?r.createElement(i,{y:n*t+1,x:p,width:d,height:o?t:l,color:e.color}):null,h?r.createElement("text",{y:n*t+13,x:p+d+2,fontSize:g},e.name):null)}))):null})),s=(0,o.observer)((({model:e})=>{const{ticks:t,scaleType:n}=e,{width:o}=(0,l.getContainingView)(e),a=`[${t?.values[0]}-${t?.values[1]}]${"log"===n?" (log scale)":""}`,c=(0,l.measureText)(a,14),s=o-c-25;return r.createElement(r.Fragment,null,r.createElement(i,{y:0,x:s,width:c+6,height:16}),r.createElement("text",{y:13,x:s},a))}));var m=n(58474),u=n(90461);const g=(0,o.observer)((function({children:e,model:t,exportSVG:n}){const{height:o}=t;return n?e:r.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none",height:o,width:(0,l.getContainingView)(t).width}},e)})),h=(0,o.observer)((function(e){const{model:t,orientation:n,exportSVG:o}=e,{stats:a,needsCustomLegend:i,needsFullHeightScalebar:h,rowHeightTooSmallForScalebar:d,rowHeight:f,sources:p,ticks:b}=t,w=Math.min(f,12),E=f>11,{width:x}=(0,l.getContainingView)(t);if(!a||!p)return null;const v=Math.max(...p.map((e=>(0,l.measureText)(e.name,w))).map((e=>E?e:20)));return r.createElement(g,e,h?r.createElement(r.Fragment,null,r.createElement("g",{transform:`translate(${o?0:(0,m.A3)(t)},0)`},r.createElement(u.A,{model:t,orientation:n})),r.createElement("g",{transform:`translate(${x-v-100},0)`},r.createElement(c,{exportSVG:o,model:t,rowHeight:12,labelWidth:v}))):r.createElement(r.Fragment,null,r.createElement(c,{exportSVG:o,model:t,rowHeight:t.rowHeight,labelWidth:v}),d||i?r.createElement(s,e):p.map(((e,l)=>r.createElement("g",{transform:`translate(0 ${f*l})`,key:`${JSON.stringify(b)}-${l}`},r.createElement(u.A,{model:t,orientation:n}))))))}))},58474:(e,t,n)=>{n.d(t,{A3:()=>c,BO:()=>o,oJ:()=>a});var r=n(68584),l=n(99546);function o(e,t,n=1){const r=t.map((t=>e.findIndex((e=>e.name===t)))).sort(((e,t)=>e-t));let l=0;for(const t of r){const r=Math.max(l,t-n);r>=l&&e.splice(r,0,e.splice(t,1)[0]),l+=1}return e}function a(e,t,n=1){const r=t.map((t=>e.findIndex((e=>e.name===t)))).sort(((e,t)=>t-e));let l=e.length-1;for(const t of r){const r=Math.min(l,t+n);r<=l&&e.splice(r,0,e.splice(t,1)[0]),l-=1}return e}const i=12.8;function c(e){const{prefersOffset:t}=e,{trackLabels:n}=(0,l.getContainingView)(e),o=(0,l.getContainingTrack)(e),a=(0,r.getConf)(o,"name");return"overlapping"!==n||t?10:(0,l.measureText)(a,i)+100}}}]);
//# sourceMappingURL=8526.fa439e0c.chunk.js.map