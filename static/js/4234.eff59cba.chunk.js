"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4234],{14234:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=a(93902),r=a(46377),i=a(99546),n=a(99834),o=a(66885),u=a(37957);class c extends r.BaseFeatureDataAdapter{static capabilities=["hasResolution","hasLocalStats","hasGlobalStats"];async setupPre(e){const{statusCallback:t=()=>{}}=e||{},a=this.pluginManager,r=new s.j({filehandle:(0,n.openLocation)(this.getConf("bigWigLocation"),a)}),o=await(0,i.updateStatus)("Downloading bigwig header",t,(()=>r.getHeader(e)));return{bigwig:r,header:o}}async setup(e){return this.setupP||(this.setupP=this.setupPre(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async getRefNames(e){const{header:t}=await this.setup(e);return Object.keys(t.refsByName)}async refIdToName(e){const{header:t}=await this.setup();return t.refsByNumber[e]?.name}async getGlobalStats(e){const{header:t}=await this.setup(e);return(0,u.WD)(t.totalSummary)}getFeatures(e,t={}){const{refName:a,start:s,end:r}=e,{bpPerPx:i=0,stopToken:n,resolution:u=1,statusCallback:c=()=>{}}=t;return(0,o.ObservableCreate)((async n=>{c("Downloading bigwig data");const o=this.getConf("source"),l=this.getConf("resolutionMultiplier"),{bigwig:h}=await this.setup(t),g=await h.getFeatures(a,s,r,{...t,basesPerSpan:i/u*l});for(const t of g){o&&(t.source=o);const s=`${o}:${e.refName}:${t.start}-${t.end}`;t.refName=a,t.uniqueId=s,n.next({get:e=>t[e],id:()=>s,toJSON:()=>t})}n.complete()}),n)}async getMultiRegionFeatureDensityStats(e){return{featureDensity:0}}freeResources(){}}}}]);
//# sourceMappingURL=4234.eff59cba.chunk.js.map