"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7409],{27409:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var a=s(35505),n=s(46377),i=s(99546),r=s(99834),o=s(32595),c=s(66885),d=s(6434),f=s(52645),u=s(77744);class l extends n.BaseFeatureDataAdapter{async configurePre(e){const t=this.getConf("gffGzLocation"),s=this.getConf(["index","indexType"]),n=this.getConf(["index","location"]),i=this.getConf("dontRedispatch")||["chromosome","contig","region"],o=new a.wD({filehandle:(0,r.openLocation)(t,this.pluginManager),csiFilehandle:"CSI"===s?(0,r.openLocation)(n,this.pluginManager):void 0,tbiFilehandle:"CSI"!==s?(0,r.openLocation)(n,this.pluginManager):void 0,chunkCacheSize:52428800,renameRefSeqs:e=>e});return{gff:o,dontRedispatch:i,header:await o.getHeader()}}async configurePre2(){return this.configured||(this.configured=this.configurePre().catch((e=>{throw this.configured=void 0,e}))),this.configured}async configure(e){const{statusCallback:t=()=>{}}=e||{};return(0,i.updateStatus)("Downloading index",t,(()=>this.configurePre2()))}async getRefNames(e={}){const{gff:t}=await this.configure(e);return t.getReferenceSequenceNames(e)}async getHeader(e={}){const{gff:t}=await this.configure(e);return t.getHeader()}getFeatures(e,t={}){return(0,c.ObservableCreate)((async s=>{const{gff:a}=await this.configure(t),n=await a.getMetadata();await this.getFeaturesHelper(e,t,n,s,!0)}),t.stopToken)}async getFeaturesHelper(e,t,s,a,n,r=e){const{statusCallback:c=()=>{}}=t;try{const l=[],{dontRedispatch:h,gff:g}=await this.configure(t);if(await(0,i.updateStatus)("Downloading features",c,(()=>g.getLines(e.refName,e.start,e.end,((e,t)=>{l.push(this.parseLine(s.columnNumbers,e,t))})))),n&&l.length){let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;for(const e of l){const t=e.fields[2];if(!h.includes(t)){const t=e.start-1;t<n&&(n=t),e.end>i&&(i=e.end)}}if(i>e.end||n<e.start)return void await this.getFeaturesHelper({...e,start:n,end:i},t,s,a,!1,e)}const p=l.map((e=>(e.fields[8]&&"."!==e.fields[8]?e.fields[8].includes("_lineHash")||(e.fields[8]+=`;_lineHash=${e.lineHash}`):e.fields[8]=`_lineHash=${e.lineHash}`,e.fields.join("\t")))).join("\n");for(const e of(0,f.g)(p))for(const t of e){const e=new d.A({data:(0,u.d)(t),id:`${this.id}-offset-${t.attributes?._lineHash?.[0]}`});(0,o.R6)(e.get("start"),e.get("end"),r.start,r.end)&&a.next(e)}a.complete()}catch(e){a.error(e)}}parseLine(e,t,s){const a=t.split("\t");return{start:+a[e.start-1],end:+a[e.end-1],lineHash:s,fields:a}}freeResources(){}}},77744:(e,t,s)=>{function a(e){const{end:t,start:s,child_features:n,derived_features:i,attributes:r,type:o,source:c,phase:d,seq_id:f,score:u,strand:l}=e;let h;"+"===l?h=1:"-"===l?h=-1:"."===l&&(h=0);const g=new Set(["start","end","seq_id","score","type","source","phase","strand"]),p=r||{},w={};for(const e of Object.keys(p)){let t=e.toLowerCase();if(g.has(t)&&(t+="2"),p[e]&&"_lineHash"!==e){let s=p[e];Array.isArray(s)&&1===s.length&&([s]=s),w[t]=s}}return{...w,start:s-1,end:t,strand:h,type:o,source:c,refName:f,derived_features:i,phase:null===d?void 0:Number(d),score:null===u?void 0:u,subfeatures:n.flatMap((e=>e.map((e=>a(e)))))}}s.d(t,{d:()=>a})}}]);
//# sourceMappingURL=7409.6dfe285b.chunk.js.map