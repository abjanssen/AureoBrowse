"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7011],{37011:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var a=n(7552),r=n(943),i=n(68446),o=n(33039),l=n.n(o),s=n(68984),c=n(99546);async function u(e,t){const n=(0,c.getSession)(t),{view:a}=t;try{if(!a)throw new Error("No view associated with this view anymore");await a.navToLocString(e)}catch(e){console.error(e),n.notify(`${e}`)}}const m={AM:"The smallest template-independent mapping quality in the template",AS:"Alignment score generated by aligner",BC:"Barcode sequence identifying the sample",BQ:"Offset to base alignment quality (BAQ)",BZ:"Phred quality of the unique molecular barcode bases in the {OX} tag",CB:"Cell identifier",CC:"Reference name of the next hit",CM:"Edit distance between the color sequence and the color reference (see also {NM})",CO:"Free-text comments",CP:"Leftmost coordinate of the next hit",CQ:"Color read base qualities",CR:"Cellular barcode sequence bases (uncorrected)",CS:"Color read sequence",CT:"Complete read annotation tag, used for consensus annotation dummy features",CY:"Phred quality of the cellular barcode sequence in the {CR} tag",E2:"The 2nd most likely base calls",FI:"The index of segment in the template",FS:"Segment suffix",FZ:"Flow signal intensities",GC:"Reserved for backwards compatibility reasons",GQ:"Reserved for backwards compatibility reasons",GS:"Reserved for backwards compatibility reasons",H0:"Number of perfect hits",H1:"Number of 1-difference hits (see also {NM})",H2:"Number of 2-difference hits",HI:"Query hit index",IH:"Query hit total count",LB:"Library",MC:"CIGAR string for mate/next segment",MD:"String encoding mismatched and deleted reference bases",MF:"Reserved for backwards compatibility reasons",MI:"Molecular identifier; a string that uniquely identifies the molecule from which the record was derived",ML:"Base modification probabilities",MM:"Base modifications / methylation ",MQ:"Mapping quality of the mate/next segment",NH:"Number of reported alignments that contain the query in the current record",NM:"Edit distance to the reference",OA:"Original alignment",OC:"Original CIGAR (deprecated; use {OA} instead)",OP:"Original mapping position (deprecated; use {OA} instead)",OQ:"Original base quality",OX:"Original unique molecular barcode bases",PG:"Program",PQ:"Phred likelihood of the template",PT:"Read annotations for parts of the padded read sequence",PU:"Platform unit",Q2:"Phred quality of the mate/next segment sequence in the {R2} tag",QT:"Phred quality of the sample barcode sequence in the {BC} tag",QX:"Quality score of the unique molecular identifier in the {RX} tag",R2:"Sequence of the mate/next segment in the template",RG:"Read group",RT:"Reserved for backwards compatibility reasons",RX:"Sequence bases of the (possibly corrected) unique molecular identifier",S2:"Reserved for backwards compatibility reasons",SA:"Other canonical alignments in a chimeric alignment",SM:"Template-independent mapping quality",SQ:"Reserved for backwards compatibility reasons",TC:"The number of segments in the template",TS:"Transcript strand",U2:"Phred probability of the 2nd call being wrong conditional on the best being wrong",UQ:"Phred likelihood of the segment, conditional on the mapping being correct"};var d=n(36715),f=n(87731),p=n(80544);function g({tag:e,model:t}){return a.createElement("div",null,a.createElement(d.A,null,"List of supplementary alignment locations"),a.createElement("ul",null,e.split(";").filter((e=>!!e)).map(((e,n)=>{const[r,i,o,l]=e.split(","),s=(0,p.getLengthOnRef)(l),c=Math.floor(s/5),m=+i,d=+i+s,g=m-c,h=d+c,b=`${r}:${Math.max(1,g)}-${h}`,y=`${r}:${m.toLocaleString("en-US")}-${d.toLocaleString("en-US")} (${o}) [${s}bp]`;return a.createElement("li",{key:`${b}-${n}`},a.createElement(f.A,{href:"#",onClick:async e=>{e.preventDefault(),u(b,t)}},y))}))))}var h=n(89003),b=n(49823),y=n(86576);const v=(0,a.lazy)((()=>n.e(8136).then(n.bind(n,28136))));function w({model:e,feature:t,viewType:n}){const r=(0,c.getSession)(e),{view:i}=e,[o,l]=(0,a.useState)(),[s,u]=(0,a.useState)();(0,a.useEffect)((()=>{(async()=>{try{const e=await async function({view:e,feature:t}){const{assemblyManager:n}=(0,c.getSession)(e),a=t.get("CIGAR"),r=t.get("strand"),i=(0,y.bH)(t,"SA")||"",o=t.get("name"),l=(0,p.getClip)(a,1),s=await n.waitForAssembly(e.assemblyNames[0]);if(!s)throw new Error("assembly not found");const u=(0,p.featurizeSA)(i,t.id(),r,o,!0),m=t.toJSON();m.clipPos=l,m.strand=1,m.mate={refName:o,start:l,end:l+(0,p.getLengthSansClipping)(a)};const d=[m,...u];return d.forEach(((e,t)=>{e.refName=s?.getCanonicalRefName(e.refName)||e.refName,e.syntenyId=t,e.mate.syntenyId=t,e.mate.uniqueId=`${e.uniqueId}_mate`})),d.sort(((e,t)=>e.clipPos-t.clipPos)),d}({view:i,feature:new c.SimpleFeature(t)});l(e)}catch(e){u(e),console.error(e)}})()}),[t,i]);const m=[];if(o)for(let e=0;e<o.length-1;e++)m.push([o[e],o[e+1]]);return m.length?a.createElement("div",null,a.createElement(d.A,null,"Launch split views with breakend source and target"),s?a.createElement(b.ErrorMessage,{error:s}):null,a.createElement("ul",null,m.map(((t,i)=>{const[o,l]=t;return a.createElement("li",{key:`${JSON.stringify(t)}-${i}`},a.createElement(h.A,{title:"Top panel->Bottom panel"},a.createElement(f.A,{href:"#",onClick:t=>{t.preventDefault(),r.queueDialog((t=>[v,{handleClose:t,f1:o,f2:l,model:e,viewType:n}]))}},o.refName,":",(0,c.toLocale)(1===o.strand?o.end:o.start)," ","-> ",l.refName,":",(0,c.toLocale)(1===l.strand?l.start:l.end))))})))):null}function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},C.apply(null,arguments)}function E(e){const{model:t,tag:n,feature:r}=e,i=(0,c.getSession)(t),{pluginManager:o}=(0,c.getEnv)(i);let l;try{l=o.getViewType("BreakpointSplitView")}catch(e){}return a.createElement(s.BaseCard,C({},e,{title:"Supplementary alignments"}),a.createElement(g,{model:t,tag:n}),l?a.createElement(w,{viewType:l,model:t,feature:r}):null)}var S=n(83867),q=n(33371),O=n(32808),A=n(75785),k=n(32106);function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},R.apply(null,arguments)}const P=(0,A.n9)()({compact:{paddingRight:0,paddingTop:0,paddingBottom:0}}),T=["read paired","read mapped in proper pair","read unmapped","mate unmapped","read reverse strand","mate reverse strand","first in pair","second in pair","not primary alignment","read fails platform/vendor quality checks","read is PCR or optical duplicate","supplementary alignment"];function M(e){const{classes:t}=P(),{feature:n}=e,{flags:r}=n;return a.createElement(s.BaseCard,R({},e,{title:"Flags"}),a.createElement(k.A,{name:"Flag",value:r}),a.createElement(S.A,null,T.map(((e,n)=>{const i=r&1<<n,o=`${e}_${i}`;return a.createElement(q.A,{key:o,control:a.createElement(O.A,{className:t.compact,checked:Boolean(i),name:e,readOnly:!0}),label:e})}))))}function N({locString:e,model:t}){return a.createElement(f.A,{onClick:n=>{n.preventDefault(),u(e,t)},href:"#"},e)}var $=n(31409),B=n.n($);function Q({value:e}){const[t,n]=(0,a.useState)(!1),[r,i]=(0,a.useState)(!1),o=String(e);return o.length>100?a.createElement(a.Fragment,null,a.createElement("button",{type:"button",onClick:()=>{B()(o),i(!0),setTimeout((()=>i(!1)),700)}},r?"Copied to clipboard":"Copy"),a.createElement("button",{type:"button",onClick:()=>n((e=>!e))},t?"Show less":"Show more"),a.createElement("div",null,t?o:`${o.slice(0,100)}...`)):a.createElement("div",null,o)}function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},L.apply(null,arguments)}const x=["clipPos","flags"],F=(0,i.observer)((function(e){const{model:t}=e,n=l()(t.featureData),i=function(e,t){return t.tags?.SA||t.SA}(0,n);return a.createElement(r.A,{"data-testid":"alignment-side-drawer"},a.createElement(s.FeatureDetails,L({},e,{omit:x,descriptions:{...m,tags:m},feature:n,formatter:(e,n)=>"next_segment_position"===n?a.createElement(N,{model:t,locString:e}):a.createElement(Q,{value:e})})),i?a.createElement(E,{model:t,tag:i,feature:n}):null,void 0!==n.flags?a.createElement(M,L({feature:n},e)):null)}))}}]);
//# sourceMappingURL=7011.b810cccb.chunk.js.map