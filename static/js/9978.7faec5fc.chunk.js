"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9978],{21016:(e,t,n)=>{n.d(t,{K:()=>f});var l=n(87485),o=n(46879);function f(e,t,n,f,c,r,s){t.fillStyle=function(e,t){const n=e.length;let o=0,f=0,c=0,r=0;for(const n of e)n===t?o++:"0"===n?r++:"."===n?f++:c++;if(r===n)return"#ccc";{let e=(0,l.M)(`hsl(200,50%,${80-o/n*50}%)`);return c&&(e=e.mix(`hsla(0,100%,20%,${c/n})`)),f&&(e=e.mix(`hsla(50,50%,50%,${f/n/2})`)),e.toHex()}}(e,s),t.fillRect(n-o.f2,f-o.f2,c+o.f2,r+o.f2)}},40171:(e,t,n)=>{n.d(t,{E:()=>c});var l=n(40898),o=n(46879),f=n(42268);function c(e,t,n,c,r,s,i,a){t.fillStyle=void 0!==a?function(e,t,n){return+e[t]?(0,f.qH)(+n)||"black":"#ccc"}(e,i,a):function(e,t){const n=+e[t];return n?l.set1[n-1]||"black":"#ccc"}(e,i),t.fillRect(n-o.f2,c-o.f2,r+o.f2,s+o.f2)}},42268:(e,t,n)=>{function l(e){let t=0;for(let n=0;n<e.length;n++)t+=e.charCodeAt(n);return o(10*t)}function o(e){return`hsl(${e%255}, 50%, 50%)`}n.d(t,{XL:()=>l,qH:()=>o})},46879:(e,t,n)=>{n.d(t,{f2:()=>l});const l=.3},99978:(e,t,n)=>{n.d(t,{makeImageData:()=>a});var l=n(99546),o=n(22593),f=n.n(o),c=n(46879),r=n(21016),s=n(40171),i=n(85497);async function a(e,t){const{scrollTop:n,minorAlleleFrequencyFilter:o,sources:a,rowHeight:u,features:h,regions:b,bpPerPx:g,renderingMode:m}=t,d=b[0],p=(0,i.Cg)(h.values(),o),x=new(f());for(const{mostFrequentAlt:t,feature:o}of p){const[f,i]=(0,l.featureSpanPx)(o,d,g),h=Math.max(Math.round(i-f),2),b=o.get("genotypes");let p=-n;const k=a.length;for(let n=0;n<k;n++){const{name:l,HP:o}=a[n],i=b[l],g=Math.floor(f),d=Math.max(u,1);if(i){x.insert({minX:g-c.f2,maxX:g+h+c.f2,minY:p-c.f2,maxY:p+d+c.f2,genotype:i});const n=i.includes("|");if("phased"===m)if(n){const t=i.split("|");(0,s.E)(t,e,g,p,h,d,o)}else e.fillStyle="black",e.fillRect(g-c.f2,p-c.f2,h+c.f2,d+c.f2);else{const n=i.split(/[/|]/);(0,r.K)(n,e,g,p,h,d,t)}}p+=u}}return{rbush:x.toJSON()}}}}]);
//# sourceMappingURL=9978.7faec5fc.chunk.js.map