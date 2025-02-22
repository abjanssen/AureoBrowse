"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[6834],{6834:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(93902),s=r(60972),a=r(46377),o=r(99546),i=r(99834),c=r(66885),u=r(44728),d=r(82088),p=r(28493);class f extends a.BaseFeatureDataAdapter{async configurePre(e){const t=this.pluginManager,r=new n.C({filehandle:(0,i.openLocation)(this.getConf("bigBedLocation"),t)}),a=await r.getHeader(e);return{bigbed:r,header:a,parser:new s.A({autoSql:a.autoSql})}}async configure(e){return this.cachedP||(this.cachedP=this.configurePre(e).catch((e=>{throw this.cachedP=void 0,e}))),this.cachedP}async getRefNames(e){const{header:t}=await this.configure(e);return Object.keys(t.refsByName)}async getData(){const e=await this.getRefNames(),t=[];for(const r of e){const e=await(0,u._)(this.getFeatures({assemblyName:"unknown",refName:r,start:0,end:Number.MAX_SAFE_INTEGER}).pipe((0,d.$)()));t.push(e)}return t.flat()}async getHeader(e){const{parser:t,header:r}=await this.configure(e),{version:n,fileType:s}=r,{fields:a,...o}=t.autoSql;return{version:n,fileType:s,autoSql:{...o},fields:Object.fromEntries(a.map((({name:e,comment:t})=>[e,t])))}}async getFeaturesHelper({query:e,opts:t,observer:r,allowRedispatch:n,originalQuery:s=e}){const{stopToken:a,statusCallback:i=()=>{}}=t,c=this.getConf("scoreColumn"),u=this.getConf("aggregateField"),{parser:d,bigbed:f}=await(0,o.updateStatus)("Downloading header",i,(()=>this.configure(t))),l=await(0,o.updateStatus)("Downloading features",i,(()=>f.getFeatures(e.refName,e.start,e.end,{stopToken:a,basesPerSpan:e.end-e.start})));if(n&&l.length){let n=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,a=!1;for(const e of l)e.start<n&&(n=e.start),e.end>s&&(s=e.end),e[u]&&(a=!0);if(a&&(s>e.end||n<e.start))return void await this.getFeaturesHelper({query:{...e,start:n,end:s},opts:t,observer:r,allowRedispatch:!1,originalQuery:e})}const m={};if(l.some((e=>void 0===e.uniqueId)))throw new Error("found uniqueId undefined");for(const t of l){const n=[e.refName,`${t.start}`,`${t.end}`,...t.rest?.split("\t")||[]],a=d.parseLine(n,{uniqueId:t.uniqueId}),i=a[u];m[i]||(m[i]=[]);const{uniqueId:f,type:l,chrom:h,chromStart:b,chromEnd:k,description:S,chromStarts:N,blockStarts:_,blockSizes:g,score:y,blockCount:I,thickStart:q,thickEnd:C,strand:v,...w}=a,E=(0,p.np)({...w,scoreColumn:c,splitLine:n,parser:d,uniqueId:f,start:t.start,end:t.end,refName:e.refName});i?m[i].push(E):(0,o.doesIntersect2)(E.start,E.end,s.start,s.end)&&r.next(new o.SimpleFeature({id:`${this.id}-${f}`,data:E}))}Object.entries(m).map((([t,n])=>{const a=(0,o.min)(n.map((e=>e.start))),i=(0,o.max)(n.map((e=>e.end)));if((0,o.doesIntersect2)(a,i,s.start,s.end)){const{uniqueId:s,strand:c}=n[0];r.next(new o.SimpleFeature({id:`${this.id}-${s}-parent`,data:{type:"gene",subfeatures:n,strand:c,name:t,start:a,end:i,refName:e.refName}}))}})),r.complete()}getFeatures(e,t={}){return(0,c.ObservableCreate)((async r=>{try{await this.getFeaturesHelper({query:e,opts:t,observer:r,allowRedispatch:!0})}catch(e){r.error(e)}}),t.stopToken)}freeResources(){}}},28493:(e,t,r)=>{function n(e){const t=e?.trim().split(" ");return[0,1,2,3,5,6].every((e=>void 0!==t?.[e]&&!Number.isNaN(+t[e])))}function s(e){if(n(e)){const[t,r,n,s,a,o,i,c,u,d,p,f,l,m,h]=e.trim().split(" ");return{bitsw_score:t,percent_div:r,percent_del:n,percent_ins:s,query_chr:a,query_begin:o,query_end:i,query_remaining:c,orientation:u,matching_repeat_name:d,matching_repeat_class:p,matching_repeat_begin:f,matching_repeat_end:l,matching_repeat_remaining:m,repeat_id:h}}return{description:e}}function a({line:e,colRef:t,colStart:r,colEnd:n,scoreColumn:s,parser:a,uniqueId:i,names:c}){const u=e.split("\t");return o({splitLine:u,refName:u[t],start:Number.parseInt(u[r],10),end:Number.parseInt(u[n],10)+(r===n?1:0),parser:a,uniqueId:i,scoreColumn:s,names:c})}function o({splitLine:e,refName:t,start:r,end:a,parser:o,uniqueId:c,scoreColumn:u,names:d}){const p=d?function(e,t){let r=!1;const n=[];for(let s=0;s<t.length;s++)"blockCount"===e[s]&&(r=!0),n.push([e[s],t[s]]);const s=Object.fromEntries(n);if(r){const{blockStarts:e,blockCount:t,chromStarts:r,thickEnd:n,thickStart:a,blockSizes:o,...c}=s;return{...c,blockStarts:i(e),chromStarts:i(r),blockSizes:i(o),thickStart:a?+a:void 0,thickEnd:n?+n:void 0,blockCount:t?+t:void 0}}return s}(d,e):o.parseLine(e,{uniqueId:c}),{strand:f,score:l,chrom:m,chromStart:h,chromEnd:b,...k}=p,S=u?+p[u]:l?+l:void 0,N="string"==typeof f?"-"===f?-1:1:f,_=k.blockCount?function({start:e,uniqueId:t,refName:r,chromStarts:n,blockCount:s,blockSizes:a,blockStarts:o}){const i=[],c=n||o||[];for(let n=0;n<s;n++){const s=(c[n]||0)+e,o=a?.[n];if(o&&o>0){const e=s+o;i.push({uniqueId:`${t}-${n}`,start:s,end:e,refName:r,type:"block"})}}return i}({start:r,uniqueId:c,refName:t,chromStarts:k.chromStarts,blockCount:k.blockCount,blockSizes:k.blockSizes,blockStarts:k.blockStarts}):void 0;if(function({splitLine:e,start:t,end:r}){return+(e[6]||0)===t&&+(e[7]||0)===r&&[9,10,11,12,13,14,15,16,17].every((t=>e[t]&&!Number.isNaN(+e[t])))}({splitLine:e,start:r,end:a}))return function({splitLine:e,uniqueId:t,refName:r,start:n,end:s}){const[,,,a,,o,,,i,c,u,d,p,f,l,m,h,b]=e;return{uniqueId:t,refName:r,start:n,end:s,code:a,score:+u||0,strand:o,color:i,source:a,n_valid_cov:c,fraction_modified:u,n_mod:d,n_canonical:p,n_other_mod:f,n_delete:l,n_fail:m,n_diff:h,n_nocall:b}}({splitLine:e,uniqueId:c,refName:t,start:r,end:a});if(n(k.description)){const{chromStarts:e,blockSizes:n,blockStarts:o,type:i,blockCount:u,thickStart:d,thickEnd:p,description:f,...l}=k;return function({uniqueId:e,refName:t,start:r,end:n,description:a,...o}){const{subfeatures:i,...c}=o;return{...c,...s(a),uniqueId:e,refName:t,start:r,end:n}}({...l,uniqueId:c,description:f,type:i,score:S,start:r,end:a,strand:N,refName:t,subfeatures:_})}if(_&&function({thickStart:e,blockCount:t,strand:r}){return e&&t&&0!==r}({strand:N,blockCount:k.blockCount,thickStart:k.thickStart})){const{chromStarts:e,blockSizes:n,type:s,blockCount:o,thickStart:i,thickEnd:u,description:d}=k;return function(e){const{strand:t=0,chrom:r,chromStart:n,chromEnd:s,chromStarts:a,blockStarts:o,blockSizes:i,uniqueId:c,...u}=e,{subfeatures:d,thickStart:p,thickEnd:f,blockCount:l,refName:m,...h}=u,b=[],k=d.filter((e=>"block"===e.type)).sort(((e,t)=>e.start-t.start));for(const e of k){const r=e.start,n=e.end;p>=n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:n,refName:m}):p>r&&p<n&&f>=n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:p,refName:m},{type:"CDS",phase:0,start:p,end:n,refName:m}):p<=r&&f>=n?b.push({type:"CDS",phase:0,start:r,end:n,refName:m}):p>r&&p<n&&f<n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:p,refName:m},{type:"CDS",phase:0,start:p,end:f,refName:m},{type:(t>0?"three":"five")+"_prime_UTR",start:f,end:n,refName:m}):p<=r&&f>r&&f<n?b.push({type:"CDS",phase:0,start:r,end:f,refName:m},{type:(t>0?"three":"five")+"_prime_UTR",start:f,end:n,refName:m}):f<=r&&b.push({type:(t>0?"three":"five")+"_prime_UTR",start:r,end:n,refName:m})}return{...h,uniqueId:c,strand:t,type:"mRNA",refName:m,subfeatures:b}}({...k,description:d,chromStarts:e,thickStart:i,thickEnd:u,blockSizes:n,blockCount:o,type:s,score:S,start:r,end:a,strand:N,refName:t,uniqueId:c,subfeatures:_})}return{...k,uniqueId:c,score:S,start:r,end:a,strand:N,refName:t,subfeatures:_}}function i(e){return void 0!==e?"string"==typeof e?e.split(",").map((e=>+e)):e:void 0}r.d(t,{dE:()=>a,np:()=>o})}}]);
//# sourceMappingURL=6834.18cc3e6a.chunk.js.map