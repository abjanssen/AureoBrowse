"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4060],{24060:(e,t,r)=>{r.d(t,{makeImageData:()=>C});var o=r(68584),n=r(49823),a=r(37347),i=r(36917),c=r(86576);function s({colorType:e,tag:t,feature:r,config:n,defaultColor:a,colorTagMap:s}){switch(e){case"insertSize":return function(e){return e.get("is_paired")&&e.get("refName")!==e.get("next_ref")?"#555":`hsl(${Math.abs(e.get("template_length"))/10},50%,50%)`}(r);case"strand":return function(e){return-1===e.get("strand")?"#8F8FD8":"#EC8B8B"}(r);case"mappingQuality":return function(e){return`hsl(${e.get("score")},50%,50%)`}(r);case"pairOrientation":return function(e,t){return i.pf[function(e,t){const r=(0,o.readConfObject)(t,"orientationType");return{LR:"color_pair_lr",RR:"color_pair_rr",RL:"color_pair_rl",LL:"color_pair_ll"}[c.il[r][e.get("pair_orientation")]]}(e,t)||"color_nostrand"]}(r,n);case"stranded":return function(e){return i.pf[function(e){const t=e.get("flags"),r=e.get("strand");if(1&t){const o=64&t?-1:1;return 2&t?r*o==1?"color_rev_strand":"color_fwd_strand":8&t?r*o==1?"color_rev_missing_mate":"color_fwd_missing_mate":e.get("refName")===e.get("next_ref")?r*o==1?"color_rev_strand_not_proper":"color_fwd_strand_not_proper":1===r?"color_fwd_diff_chr":"color_rev_diff_chr"}return"color_unknown"}(e)]}(r);case"xs":case"tag":{const e=r.get("tags"),o=e?e[t]:r.get(t);return"XS"===t||"TS"===t?"-"===o?i.pf.color_rev_strand:"+"===o?i.pf.color_fwd_strand:i.pf.color_nostrand:"ts"===t?"-"===o?-1===r.get("strand")?i.pf.color_fwd_strand:i.pf.color_rev_strand:"+"===o?-1===r.get("strand")?i.pf.color_rev_strand:i.pf.color_fwd_strand:i.pf.color_nostrand:s[o]||i.pf.color_nostrand}case"insertSizeAndPairOrientation":break;case"modifications":case"methylation":return 16&r.get("flags")?"#c8dcc8":"#c8c8c8";default:return a?"lightgrey":(0,o.readConfObject)(n,"color",{feature:r})}}var l=r(99546),f=r(95805);function p(e,t,r,o,n,a,i){t+o<0||t>a||(i&&(e.fillStyle=i),e.fillRect(t,r,o,n))}function h(e){const{skip:t,deletion:r,insertion:o,hardclip:n,softclip:a,bases:i}=e.palette;return{A:i.A.main,C:i.C.main,G:i.G.main,T:i.T.main,deletion:r,insertion:o,hardclip:n,softclip:a,skip:t}}function d(){return{charWidth:(0,l.measureText)("A"),charHeight:(0,l.measureText)("M")-2}}var g=r(59509),_=r(91476),u=r(87485),m=r(93092);function b({ctx:e,feat:t,renderArgs:r,colorMap:o,colorContrastMap:n,charWidth:a,charHeight:i,defaultColor:c,canvasWidth:h}){const{config:d,bpPerPx:b,regions:x,colorBy:P,colorTagMap:C={}}=r,{tag:M="",type:v=""}=P||{},{feature:y}=t,S=x[0];switch(e.fillStyle=s({feature:y,config:d,tag:M,defaultColor:c,colorType:v,colorTagMap:C}),function({ctx:e,feat:t,renderArgs:r}){const{regions:o,bpPerPx:n}=r,{heightPx:a,topPx:i,feature:c}=t,s=o[0],p=c.get("start"),h=c.get("end"),d=c.get("CIGAR"),g=s.reversed?-1:1,_=c.get("strand")*g,u=n<10&&a>5;if(d?.includes("N")){const t=(0,f.parseCigar)(d);if(1===_){let r=0,o=p;for(let c=0;c<t.length;c+=2){const f=+t[c],p=t[c+1];if("M"===p||"X"===p||"="===p||"D"===p)r+=f;else if("N"===p){if(o!==r){const[t,c]=(0,l.bpSpanPx)(o,o+r,s,n),f=c-t;e.fillRect(t,i,f,a)}o+=r+f,r=0}}if(o!==r){const[t,c]=(0,l.bpSpanPx)(o,o+r,s,n),f=c-t;u?(e.beginPath(),e.moveTo(t,i),e.lineTo(t,i+a),e.lineTo(c,i+a),e.lineTo(c+5,i+a/2),e.lineTo(c,i),e.closePath(),e.fill()):e.fillRect(t,i,f,a)}}else if(-1===_){let r=0,o=h;for(let c=t.length-2;c>=0;c-=2){const f=+t[c],p=t[c+1];if("M"===p||"X"===p||"="===p||"D"===p)r+=f;else if("N"===p){if(0!==r){const[t,c]=(0,l.bpSpanPx)(o-r,o,s,n);e.fillRect(t,i,c-t,a)}o-=r+f,r=0}}if(0!==r){const[t,c]=(0,l.bpSpanPx)(o-r,o,s,n),f=c-t;u?(e.beginPath(),e.moveTo(t-5,i+a/2),e.lineTo(t,i+a),e.lineTo(c,i+a),e.lineTo(c,i),e.lineTo(t,i),e.closePath(),e.fill()):e.fillRect(t,i,f,a)}}}else{const[t,r]=(0,l.bpSpanPx)(p,h,s,n);n<10&&a>5?-1===_?(e.beginPath(),e.moveTo(t-5,i+a/2),e.lineTo(t,i+a),e.lineTo(r,i+a),e.lineTo(r,i),e.lineTo(t,i),e.closePath(),e.fill()):(e.beginPath(),e.moveTo(t,i),e.lineTo(t,i+a),e.lineTo(r,i+a),e.lineTo(r+5,i+a/2),e.lineTo(r,i),e.closePath(),e.fill()):e.fillRect(t,i,r-t,a)}}({ctx:e,feat:t,renderArgs:r}),v){case"perBaseQuality":!function({ctx:e,feat:t,region:r,bpPerPx:o,canvasWidth:n,cigarOps:a}){const{feature:i,topPx:c,heightPx:s}=t,f=(i.get("qual")||"").split(" ").map((e=>+e)),h=1/o,d=i.get("start");let g=0,_=0;for(let t=0;t<a.length;t+=2){const i=+a[t],u=a[t+1];if("S"===u||"I"===u)g+=i;else if("D"===u||"N"===u)_+=i;else if("M"===u||"X"===u||"="===u){for(let t=0;t<i;t++){const a=f[g+t],i=d+_+t;p(e,(0,l.bpSpanPx)(i,i+1,r,o)[0],c,h+.5,s,n,`hsl(${255===a?150:1.5*a},55%,50%)`)}g+=i,_+=i}}}({ctx:e,feat:t,region:S,bpPerPx:b,canvasWidth:h,cigarOps:(0,f.parseCigar)(y.get("CIGAR"))});break;case"perBaseLettering":!function({ctx:e,feat:t,region:r,bpPerPx:o,colorMap:n,colorContrastMap:a,charWidth:i,charHeight:c,canvasWidth:s,cigarOps:f}){const h=c-2,{feature:d,topPx:g,heightPx:_}=t,u=d.get("seq"),m=1/o,b=d.get("start");let x=0,P=0;if(u)for(let t=0;t<f.length;t+=2){const c=+f[t],d=f[t+1];if("S"===d||"I"===d)x+=c;else if("D"===d||"N"===d)P+=c;else if("M"===d||"X"===d||"="===d){for(let t=0;t<c;t++){const c=u[x+t],f=b+P+t,[d]=(0,l.bpSpanPx)(f,f+1,r,o);p(e,d,g,m+.5,_,s,n[c]),m>=i&&_>=h&&(e.fillStyle=a[c],e.fillText(c,d+(m-i)/2+1,g+_))}x+=c,P+=c}}}({ctx:e,feat:t,region:S,bpPerPx:b,colorMap:o,colorContrastMap:n,charWidth:a,charHeight:i,canvasWidth:h,cigarOps:(0,f.parseCigar)(y.get("CIGAR"))});break;case"modifications":!function({ctx:e,feat:t,region:r,bpPerPx:o,renderArgs:n,canvasWidth:a,cigarOps:i}){const{feature:c,topPx:s,heightPx:f}=t,{colorBy:h,visibleModifications:d={}}=n;if(!c.get("seq"))return;const u=c.get("start"),m=h?.modifications?.isolatedModification,b=h?.modifications?.twoColor,x=(0,g.r)(c,i);if(x){let t=0;for(const{allProbs:n,prob:i,type:c}of x){const h=u+t,[g,x]=(0,l.bpSpanPx)(h,h+1,r,o),P=d[c];if(!P)return void console.warn(`${c} not known yet`);if(m&&P.type!==m)return;const C=P.color||"black",M=1-(0,l.sum)(n);b&&M>(0,l.max)(n)?p(e,g,s,x-g+.5,f,a,(0,_.yr)("blue",M)):p(e,g,s,x-g+.5,f,a,(0,_.yr)(C,i)),t++}}}({ctx:e,feat:t,region:S,bpPerPx:b,renderArgs:r,canvasWidth:h,cigarOps:(0,f.parseCigar)(y.get("CIGAR"))});break;case"methylation":!function({ctx:e,feat:t,region:r,bpPerPx:o,renderArgs:n,canvasWidth:a,cigarOps:i}){const{regionSequence:c}=n,{feature:s,topPx:f,heightPx:h}=t;if(!c)throw new Error("region sequence required for methylation");if(!s.get("seq"))return;const d=s.get("start"),g=s.get("end"),{methBins:_,methProbs:b,hydroxyMethBins:x,hydroxyMethProbs:P}=(0,m.Ps)(s,i);function C(e){if(_[e]){const t=b[e]||0;return(t>.5?(0,u.M)("red").alpha(2*(t-.5)):(0,u.M)("blue").alpha(1-2*t)).toHslString()}if(x[e]){const t=P[e]||0;return(t>.5?(0,u.M)("pink").alpha(2*(t-.5)):(0,u.M)("purple").alpha(1-2*t)).toHslString()}}const M=c.toLowerCase();for(let t=0;t<g-d;t++){const n=t+d,i=M[n-r.start+1],c=M[n-r.start+2];if("c"===i&&"g"===c)if(o>2){const[i,c]=(0,l.bpSpanPx)(n,n+2,r,o);p(e,i,f,c-i+.5,h,a,C(t)||C(t+1)||"blue")}else{const[i,c]=(0,l.bpSpanPx)(n,n+1,r,o);p(e,i,f,c-i+.5,h,a,C(t)||"blue");const[s,d]=(0,l.bpSpanPx)(n+1,n+2,r,o);p(e,s,f,d-s+.5,h,a,C(t+1)||"blue")}}}({ctx:e,feat:t,region:S,bpPerPx:b,renderArgs:r,canvasWidth:h,cigarOps:(0,f.parseCigar)(y.get("CIGAR"))})}}function x({ctx:e,feat:t,renderArgs:r,minSubfeatureWidth:o,largeInsertionIndicatorScale:n,mismatchAlpha:a,charWidth:i,charHeight:c,colorMap:s,colorContrastMap:f,hideSmallIndels:h,canvasWidth:d,drawSNPsMuted:g,drawIndels:_=!0}){const{bpPerPx:m,regions:b}=r,{heightPx:x,topPx:P,feature:C}=t,M=b[0],v=C.get("start"),y=Math.min(1/m,2),S=C.get("mismatches"),w=c-2,T=M.reversed?1/m+1:-1;if(S){for(const t of S){const r=v+t.start,n=t.length,c=t.base,[b,C]=(0,l.bpSpanPx)(r,r+n,M,m),S=Math.max(o,C-b);if("mismatch"===t.type){if(!g){const r=s[t.base]||"#888",o=a&&void 0!==t.qual?(0,u.M)(r).alpha(Math.min(1,t.qual/50)).toHslString():r;p(e,Math.round(b),P,S,x,d,o)}if(S>=i&&x>=w){const r=g?"black":f[t.base]||"black";e.fillStyle=a&&void 0!==t.qual?(0,u.M)(r).alpha(Math.min(1,t.qual/50)).toHslString():r,e.fillText(c,b+(S-i)/2+1,P+x)}}else if("deletion"===t.type&&_){const r=t.length;if(!h||r>=10){p(e,b,P,Math.abs(b-C),x,d,s.deletion);const r=`${t.length}`,o=(0,l.measureText)(r,10);S>=o&&x>=w&&(e.fillStyle=f.deletion,e.fillText(r,(b+C)/2-o/2,P+x))}}else if("insertion"===t.type&&_){const r=b+T,o=+t.base||t.length,n=Math.max(0,Math.min(1.2,1/m));if(o<10&&!h&&(p(e,r,P,n,x,d,s.insertion),1/m>=i&&x>=w)){const o=Math.round(r-n);p(e,o,P,3*n,1,d),p(e,o,P+x-1,3*n,1,d),e.fillText(`(${t.base})`,r+3,P+x)}}else if("hardclip"===t.type||"softclip"===t.type){const r=b+T,n=s[t.type],a=Math.max(o,y);if(p(e,r,P,a,x,d,n),1/m>=i&&x>=w){const o=r-a;p(e,o,P,3*a,1,d),p(e,o,P+x-1,3*a,1,d),e.fillText(`(${t.base})`,r+3,P+x)}}else if("skip"===t.type&&b+S>0){const t=S-(m>10?1.5:0);p(e,Math.max(0,b),P+x/2-1,t+Math.min(b,0),1,d,s.skip)}}if(_)for(const t of S){const r=v+t.start,o=t.length,a=+t.base||t.length;if("insertion"===t.type&&a>=10){const[t]=(0,l.bpSpanPx)(r,r+o,M,m),i=`${a}`;if(m>n)p(e,t-1,P,2,x,d,s.insertion);else if(x>c){const r=(0,l.measureText)(i),o=5;p(e,t-r/2-o,P,r+2*o,x,d,"purple"),e.fillStyle=f.insertion,e.fillText(i,t-r/2,P+x)}else{const r=2;p(e,t-r,P,2*r,x,d,s.insertion)}}}}}function P({ctx:e,feat:t,renderArgs:r,config:n,theme:a,colorMap:i,canvasWidth:c}){const{feature:s,topPx:h,heightPx:g}=t,{regions:_,bpPerPx:u}=r,m=_[0],b=(0,o.readConfObject)(n,"minSubfeatureWidth"),x=s.get("mismatches"),P=s.get("seq"),{charWidth:C,charHeight:M}=d();if(!P||!x)return;const v=M-2;let y=0,S=0;const w=s.get("CIGAR"),T=(0,f.parseCigar)(w);for(let t=0;t<T.length;t+=2){const r=T[t+1],o=+T[t];if("S"===r){for(let r=0;r<o;r++){const n=P[y+r],f=s.get("start")-(0===t?o:0)+S+r,[d,_]=(0,l.bpSpanPx)(f,f+1,m,u),x=Math.max(b,_-d),M=i[n]||"#000000";e.fillStyle=M,p(e,d,h,x,g,c),x>=C&&g>=v&&(e.fillStyle=a.palette.getContrastText(M),e.fillText(n,d+(x-C)/2+1,h+g))}y+=o}"N"===r&&(S+=o),"M"!==r&&"="!==r&&"X"!==r||(S+=o,y+=o),"D"===r&&(S+=o),"I"===r&&(y+=o)}}function C({ctx:e,layoutRecords:t,canvasWidth:r,renderArgs:i}){const{stopToken:c,config:s,showSoftClip:l,colorBy:f,theme:p}=i,g=(0,o.readConfObject)(s,"mismatchAlpha"),_=(0,o.readConfObject)(s,"minSubfeatureWidth"),u=(0,o.readConfObject)(s,"largeInsertionIndicatorScale"),m=(0,o.readConfObject)(s,"hideSmallIndels"),C="#f0f"===(0,o.readConfObject)(s,"color"),M=(0,n.createJBrowseTheme)(p),v=h(M),y=function(e){return Object.fromEntries(Object.entries(h(e)).map((([t,r])=>[t,e.palette.getContrastText(r)])))}(M);e.font="bold 10px Courier New,monospace";const{charWidth:S,charHeight:w}=d(),T=(A=f?.type,["methylation","modifications"].includes(A||""));var A;let W=performance.now();for(const o of t)performance.now()-W>400&&((0,a.SW)(c),W=performance.now()),b({ctx:e,feat:o,renderArgs:i,defaultColor:C,colorMap:v,colorContrastMap:y,charWidth:S,charHeight:w,canvasWidth:r}),x({ctx:e,feat:o,renderArgs:i,hideSmallIndels:m,mismatchAlpha:g,drawSNPsMuted:T,drawIndels:!0,largeInsertionIndicatorScale:u,minSubfeatureWidth:_,charWidth:S,charHeight:w,colorMap:v,colorContrastMap:y,canvasWidth:r}),l&&P({ctx:e,feat:o,renderArgs:i,colorMap:v,config:s,theme:M,canvasWidth:r})}},36917:(e,t,r)=>{r.d(t,{DW:()=>f,L9:()=>i,pf:()=>n,sY:()=>s,w7:()=>a});var o=r(86576);const n={color_fwd_strand_not_proper:"#ECC8C8",color_rev_strand_not_proper:"#BEBED8",color_fwd_strand:"#EC8B8B",color_rev_strand:"#8F8FD8",color_fwd_missing_mate:"#D11919",color_rev_missing_mate:"#1919D1",color_fwd_diff_chr:"#000",color_rev_diff_chr:"#969696",color_pair_lr:"#c8c8c8",color_pair_rr:"navy",color_pair_rl:"teal",color_pair_ll:"green",color_nostrand:"#c8c8c8",color_interchrom:"purple",color_longinsert:"red",color_shortinsert:"pink",color_unknown:"grey"},a={color_fwd_strand_not_proper:"#CA6767",color_rev_strand_not_proper:"#7272AA",color_fwd_strand:"#DC2A2A",color_rev_strand:"#4141BA",color_fwd_missing_mate:"#921111",color_rev_missing_mate:"#111192",color_fwd_diff_chr:"#000000",color_rev_diff_chr:"#696969",color_pair_lr:"#8C8C8C",color_pair_rr:"#00005A",color_pair_rl:"#005A5A",color_pair_ll:"#005A00",color_nostrand:"#8C8C8C",color_interchrom:"#5A005A",color_longinsert:"#B30000",color_shortinsert:"#FF3A5C",color_unknown:"grey"};function i(e,t,r){const o=e.refName===t.refName,i=Math.abs(e.tlen||0);return o&&i>(r?.upper||0)?[n.color_longinsert,a.color_longinsert]:o&&i<(r?.lower||0)?[n.color_shortinsert,a.color_shortinsert]:o?void 0:[n.color_interchrom,a.color_interchrom]}const c=[n.color_unknown,n.color_unknown];function s(e,t,r){return l(e)||i(e,t,r)||c}function l(e){const t=o.il.fr[e.pair_orientation||""],r=o.rr[t];return"LR"===t?void 0:[n[r],a[r]]}function f(e){return l(e)||c}},59509:(e,t,r)=>{r.d(t,{r:()=>c});var o=r(95805),n=r(49256),a=r(93092),i=r(86576);function c(e,t){const r=e.get("strand"),c=e.get("seq"),s=(0,i.c$)(e,"MM","Mm")||"",l=t||(0,o.parseCigar)(e.get("CIGAR"));if(c){const t=(0,a.Z1)(s,c,r),o=(0,a.Yj)(e),i=[];let f=0;for(const{type:e,positions:a}of t){for(const{ref:t,idx:c}of(0,n.h)(l,a)){const n=o?.[f+(-1===r?a.length-1-c:c)]||0;if(i[t]){const r=i[t];i[t]={allProbs:[...r.allProbs,n],prob:Math.max(r.prob,n),type:r.prob>n?r.type:e}}else i[t]={type:e,prob:n,allProbs:[n]}}f+=a.length}return i}}}}]);
//# sourceMappingURL=4060.234faabc.chunk.js.map