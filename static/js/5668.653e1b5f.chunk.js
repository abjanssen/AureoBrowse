"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5668],{35723:(e,t,a)=>{a.d(t,{A:()=>y});var r=a(7552),n=a(68446),o=a(36422),s=a(48231),l=a(99546),i=a(9502);function c(e,t){const a=e.get("tags");return a?a[t]:e.get(t)}function u(e,t){const a=e.get("ALT");if(a)return new Map(a?.map((e=>(0,i.h)(e))).filter(l.notEmpty).map((e=>[e.MatePosition,e]))).get(`${t.get("refName")}:${t.get("start")+1}`)}var f=a(49473);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d.apply(null,arguments)}const[g,,m]=[0,1,2,3],h=(0,n.observer)((function({model:e,trackId:t,parentRef:a,getTrackYPosOverride:n}){const{views:i,showIntraviewLinks:u}=e,h=(0,s.A)(),p=(0,l.getSession)(e),v=(0,o.getSnapshot)(e),{assemblyManager:k}=p,w=k.get(i[0].assemblyNames[0]);(0,f.E6)(v);const E=e.getTrackFeatures(t),y=(0,r.useMemo)((()=>function(e){for(const t of e.values())if(1&t.get("flags"))return!0;return!1}(E)),[E]),T=(0,r.useMemo)((()=>{const a=e.getMatchedFeaturesInLayout(t,y?function(e){const t=new Map,a=new Set;for(const r of e.values()){const e=r.get("flags"),n=r.id(),o=4&e,s=2&e;if(!a.has(n)&&!s&&!o){const e=r.get("name");let a=t.get(e);a||(a=[],t.set(e,a)),a.push(r)}a.add(r.id())}return[...t.values()].filter((e=>e.length>1))}(E):function(e){const t=new Map,a=new Set;for(const r of e.values()){const e=r.id(),n=4&r.get("flags"),o=!!c(r,"SA");if(!a.has(e)&&!n&&o){const e=r.get("name");let a=t.get(e);a||(a=[],t.set(e,a)),a.push(r)}a.add(r.id())}return[...t.values()].filter((e=>e.length>1))}(E));return y||a.forEach((e=>{e.sort(((e,t)=>e.feature.get("clipPos")-t.feature.get("clipPos")))})),a}),[E,t,y,e]),[S,b]=(0,r.useState)();let N=0;if(a.current){const e=a.current.getBoundingClientRect();N=e.top}return w?r.createElement("g",d({fill:"none"},(0,l.getStrokeProps)(h.palette.text.disabled),{"data-testid":T.length?`${t}-loaded`:t}),T.map((e=>{const a=[];for(let o=0;o<e.length-1;o++){const{layout:s,feature:l,level:c}=e[o],{layout:d,feature:h,level:v}=e[o+1];if(!s||!d)return console.warn("received null layout for a overlay feature"),null;if(!u&&c===v)return null;const k=w.getCanonicalRefName(l.get("refName")),T=w.getCanonicalRefName(h.get("refName"));if(!k||!T)throw new Error(`unable to find ref for ${k||T}`);const M=l.get("strand"),O=h.get("strand"),x=s[-1===M?g:m],L=-1===O,R=y?d[L?g:m]:d[L?m:g],$=(0,f.Tp)(i[c],k,x),A=(0,f.Tp)(i[v],T,R),W=i[c].pxToBp($).reversed,C=i[v].pxToBp(A).reversed,P=i.map((e=>e.getTrack(t))),I=(0,f.Ec)(t,c,i,P,s,n)-N,B=(0,f.Ec)(t,v,i,P,d,n)-N,F=["M",$,I,"C",$+200*l.get("strand")*(W?-1:1),I,A-200*h.get("strand")*(C?-1:1)*(y?-1:1),B,A,B].join(" "),J=`${l.id()}-${h.id()}`;a.push(r.createElement("path",{d:F,key:J,"data-testid":"r1",strokeWidth:S===J?5:1,onClick:()=>{const e=p.addWidget?.("BreakpointAlignmentsWidget","breakpointAlignments",{featureData:{feature1:(E.get(l.id())||{toJSON:()=>{}}).toJSON(),feature2:(E.get(h.id())||{toJSON:()=>{}}).toJSON()}});p.showWidget?.(e)},onMouseOver:()=>b(J),onMouseOut:()=>b(void 0)}))}return a}))):null})),[p]=[0,1,2,3],v=(0,n.observer)((function({model:e,trackId:t,parentRef:a,getTrackYPosOverride:n}){const{views:s}=e,c=(0,l.getSession)(e),{assemblyManager:d}=c,g=e.getTrackFeatures(t),m=(0,r.useMemo)((()=>e.getMatchedFeaturesInLayout(t,function(e){const t=new Map,a=new Set;for(const r of e.values()){if(!a.has(r.id())&&"breakend"===r.get("type")){const e=r.get("ALT");e?.forEach((e=>{const a=`${r.get("refName")}:${r.get("start")+1}`,n=(0,i.h)(e);if(n){const e=t.get(a);e?e.push(r):t.set(n.MatePosition||"none",[r])}}))}a.add(r.id())}return[...t.values()].filter((e=>e.length>1))}(g))),[g,t,e]),[h,v]=(0,r.useState)(),k=(0,o.getSnapshot)(e);(0,f.E6)(k);const w=d.get(s[0].assemblyNames[0]);if(!w)return null;let E=0;if(a.current){const e=a.current.getBoundingClientRect();E=e.top}return r.createElement("g",{stroke:"green",strokeWidth:5,fill:"none","data-testid":m.length?`${t}-loaded`:t},m.map((e=>{const a=[];for(let o=0;o<e.length-1;o+=1){const{layout:l,feature:i,level:d}=e[o],{layout:m,feature:k,level:y}=e[o+1],T=i.id(),S=u(i,k);if(!l||!m)return null;const b=i.get("refName"),N=k.get("refName"),M=w.getCanonicalRefName(b),O=w.getCanonicalRefName(N);if(!M||!O)throw new Error(`unable to find ref for ${M||O}`);const x=(0,f.Tp)(s[d],M,l[p]),L=(0,f.Tp)(s[y],O,m[p]),R=s[d].pxToBp(x).reversed,$=s[y].pxToBp(L).reversed,A=s.map((e=>e.getTrack(t))),W=(0,f.Ec)(t,d,s,A,l,n)-E,C=(0,f.Ec)(t,y,s,A,m,n)-E;if(S){const e=["M",x-20*("left"===S.Join?-1:1)*(R?-1:1),W,"L",x,W,"L",L,C,"L",L-20*("left"===S.MateDirection?1:-1)*($?-1:1),C].join(" ");a.push(r.createElement("path",{d:e,"data-testid":"r2",key:JSON.stringify(e),strokeWidth:T===h?10:5,onClick:()=>{const e=c.addWidget?.("VariantFeatureWidget","variantFeature",{featureData:g.get(T)?.toJSON()});c.showWidget?.(e)},onMouseOver:()=>v(T),onMouseOut:()=>v(void 0)}))}else console.warn("the relevant ALT allele was not found, cannot render")}return a})))})),[k]=[0,1,2,3];function w(e){return"+"===e?1:"-"===e?-1:0}const E=(0,n.observer)((function({model:e,trackId:t,parentRef:a,getTrackYPosOverride:n}){const{views:s}=e,i=(0,l.getSession)(e),{assemblyManager:c}=i,u=e.getTrackFeatures(t),d=(0,r.useMemo)((()=>e.getMatchedFeaturesInLayout(t,function(e){const t=[],a=new Set;for(const r of e.values())a.has(r.id())||"<TRA>"!==r.get("ALT")[0]||t.push([r]),a.add(r.id());return t}(u))),[u,t,e]),[g,m]=(0,r.useState)(),h=(0,o.getSnapshot)(e);if((0,f.E6)(h),!c.get(s[0].assemblyNames[0]))return null;let p=0;if(a.current){const e=a.current.getBoundingClientRect();p=e.top}return s.length<2?null:r.createElement("g",{fill:"none",stroke:"green",strokeWidth:5,"data-testid":d.length?`${t}-loaded`:t},d.map((e=>{const a=[];for(const{layout:o,feature:l,level:c}of e){const e=0===c?1:0,d=l.id();if(!o)return null;const h=l.get("INFO"),v=h.CHR2[0],E=h.END[0],y=h.STRANDS?.[0]?.split(""),[T,S]=y??[".","."],b=(0,f.Tp)(s[e],v,E);if(b){const h=[b,0,b+1,0],v=(0,f.Tp)(s[c],l.get("refName"),o[k]),E=b,y=s[c].pxToBp(v).reversed,N=s[e].pxToBp(E).reversed,M=s.map((e=>e.getTrack(t))),O=(0,f.Ec)(t,c,s,M,o,n)-p,x=(0,f.Ec)(t,e,s,M,h,n)-p,L=["M",v-20*w(T)*(y?-1:1),O,"L",v,O,"L",E,x,"L",E-20*w(S)*(N?-1:1),x].join(" ");a.push(r.createElement("path",{d:L,key:JSON.stringify(L),strokeWidth:d===g?10:5,onClick:()=>{const e=i.addWidget?.("VariantFeatureWidget","variantFeature",{featureData:(u.get(d)||{toJSON:()=>{}}).toJSON()});i.showWidget?.(e)},onMouseOver:()=>m(d),onMouseOut:()=>m(void 0)}))}}return a})))})),y=(0,n.observer)((function(e){const{model:t,trackId:a}=e,n=t.getMatchedTracks(a);return"AlignmentsTrack"===n[0]?.type?r.createElement(h,e):"VariantTrack"===n[0]?.type?t.hasTranslocations(a)?r.createElement(E,e):r.createElement(v,e):null}))},95668:(e,t,a)=>{a.d(t,{renderToSvg:()=>h});var r=a(7552),n=a(42489),o=a(99546),s=a(48407),l=a(49823),i=a(36422),c=a(68666),u=a(48231);function f({width:e,height:t,shift:a}){const n=(0,u.A)();return r.createElement("rect",{width:e+2*a,height:t,fill:(0,o.stripAlpha)(n.palette.background.default)})}var d=a(35723),g=a(91468);function m(e,t,a=0){const r={};let n=t;for(const o of e.tracks)r[o.configuration.trackId]=n+a,n+=o.displays[0].height+t;return r}async function h(e,t){const{textHeight:a=18,headerHeight:u=30,rulerHeight:h=30,fontSize:p=13,trackLabels:v="offset",Wrapper:k=(({children:e})=>e),themeName:w="default"}=t,{createRootFn:E}=(0,i.getRoot)(e),y=(0,o.getSession)(e),T=y.allThemes?.()[w],{width:S,views:b}=e,N=u+h,M=b.map((e=>(0,c.mJ)(e.tracks,a,v)+N)),O=(0,o.sum)(M)+100,x=await Promise.all(b.map((async e=>({view:e,data:await Promise.all(e.tracks.map((async e=>{const a=e.displays[0];return await(0,n.when)((()=>void 0===a.ready||a.ready)),{track:e,result:await a.renderSvg({...t,theme:T})}})))})))),L=function(e,t,a){return(0,o.max)(e.flatMap((e=>e.tracks.map((e=>(0,o.measureText)((0,g.getTrackName)(e.configuration,a),t))))),0)}(b,p,y)+40,R="left"===v?L:0,$="offset"===v?a:0,A=[m(b[0],$,p+N),m(b[1],$,p+M[0]+N)],W=S+R,C=(0,l.createJBrowseTheme)(T);return(0,o.renderToStaticMarkup)(r.createElement(s.A,{theme:C},r.createElement(k,null,r.createElement("svg",{width:S,height:O,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:[0,0,W+100,O].toString()},r.createElement(f,{width:W,height:O,shift:50}),r.createElement("g",{transform:`translate(50 ${p})`},r.createElement("g",{transform:`translate(${R})`},r.createElement("text",{x:0,fontSize:p,fill:C.palette.text.primary},b[0].assemblyNames.join(", ")),r.createElement(c.$m,{model:x[0].view,fontSize:p})),r.createElement(c.zh,{textHeight:a,trackLabels:v,fontSize:p,model:x[0].view,displayResults:x[0].data,offset:N,trackLabelOffset:R})),r.createElement("g",{transform:`translate(50 ${p+M[0]})`},r.createElement("g",{transform:`translate(${R})`},r.createElement("text",{x:0,fontSize:p,fill:C.palette.text.primary},b[1].assemblyNames.join(", ")),r.createElement(c.$m,{model:x[1].view,fontSize:p})),r.createElement(c.zh,{textHeight:a,trackLabels:v,fontSize:p,model:x[1].view,displayResults:x[1].data,offset:N,trackLabelOffset:R})),r.createElement("defs",null,r.createElement("clipPath",{id:"clip-bsv"},r.createElement("rect",{x:0,y:0,width:S,height:O}))),r.createElement("g",{transform:`translate(${R+50})`,clipPath:"url(#clip-bsv)"},e.matchedTracks.map((t=>r.createElement(d.A,{parentRef:{current:null},key:t.configuration.trackId,model:e,trackId:t.configuration.trackId,getTrackYPosOverride:(e,t)=>A[t][e]}))))))),E)}}}]);
//# sourceMappingURL=5668.653e1b5f.chunk.js.map