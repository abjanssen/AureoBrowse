(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[305],{37809:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var r=a(46377),s=a(99834),n=a(66885),i=a(32598),l=a(6434),c=a(7706),o=a(92202);const d="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;class u extends r.BaseFeatureDataAdapter{calculatedIntervalTreeMap={};async loadDataP(e){const{statusCallback:t=(()=>{})}=e||{},a=this.pluginManager,r=await(0,s.openLocation)(this.getConf("gffLocation"),a).readFile(),n=function(e){return 31===e[0]&&139===e[1]&&8===e[2]}(r)?await(0,c.unzip)(r):r,u=[],f={};let h=0,p=0;for(;h<n.length;){const e=n.indexOf("\n",h),a=-1===e?n.slice(h):n.slice(h,e),r=(d?.decode(a)||a.toString()).trim();if(r)if(r.startsWith("#"))u.push(r);else{if(r.startsWith(">"))break;{const e=r.indexOf("\t"),t=r.slice(0,e);f[t]||(f[t]=""),f[t]+=r+"\n"}}p++%1e4==0&&t(`Loading ${Math.floor(h/1e6).toLocaleString("en-US")}/${Math.floor(n.length/1e6).toLocaleString("en-US")} MB`),h=e+1}const g=Object.fromEntries(Object.entries(f).map((([e,t])=>[e,a=>{if(a?.("Parsing GFF data"),!this.calculatedIntervalTreeMap[e]){const a=new i.Ay;o.A.parseStringSync(t,{parseFeatures:!0,parseComments:!1,parseDirectives:!1,parseSequences:!1,disableDerivesFromReferences:!0}).flat().map(((t,a)=>new l.A({data:this.featureData(t),id:`${this.id}-${e}-${a}`}))).forEach((e=>a.insert([e.get("start"),e.get("end")],e))),this.calculatedIntervalTreeMap[e]=a}return this.calculatedIntervalTreeMap[e]}])));return{header:u.join("\n"),intervalTreeMap:g}}async loadData(e){return this.gffFeatures||(this.gffFeatures=this.loadDataP(e).catch((e=>{throw this.gffFeatures=void 0,e}))),this.gffFeatures}async getRefNames(e={}){const{intervalTreeMap:t}=await this.loadData(e);return Object.keys(t)}async getHeader(e={}){const{header:t}=await this.loadData(e);return t}getFeatures(e,t={}){return(0,n.ObservableCreate)((async a=>{try{const{start:r,end:s,refName:n}=e,{intervalTreeMap:i}=await this.loadData(t);i[n](t.statusCallback)?.search([r,s]).forEach((e=>a.next(e))),a.complete()}catch(e){a.error(e)}}),t.signal)}featureData(e){const t={...e};t.start-=1,"+"===e.strand?t.strand=1:"-"===e.strand?t.strand=-1:"."===e.strand?t.strand=0:t.strand=void 0,t.phase=Number(e.phase),t.refName=e.seq_id,null===e.score&&delete t.score,null===e.phase&&delete t.score;const a=new Set(["start","end","seq_id","score","type","source","phase","strand"]),r=e.attributes||{};for(const e of Object.keys(r)){let s=e.toLowerCase();if(a.has(s)&&(s+="2"),null!==r[e]){let a=r[e];Array.isArray(a)&&1===a.length&&([a]=a),t[s]=a}}return t.refName=t.seq_id,e.child_features&&e.child_features.length>0&&(t.subfeatures=e.child_features.flatMap((e=>e.map((e=>this.featureData(e)))))),delete t.child_features,delete t.data,delete t.attributes,delete t.seq_id,t}freeResources(){}}},85392:()=>{},43951:()=>{}}]);
//# sourceMappingURL=305.a6417c6e.chunk.js.map