"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4284],{94284:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(99546),r=a(99834),s=a(46377);class i extends s.BaseAdapter{async getData(e){const t=this.getConf("cytobandLocation");return""===t.uri||"/path/to/cytoband.txt.gz"===t.uri?[]:(await(0,n.fetchAndMaybeUnzipText)((0,r.openLocation)(t,this.pluginManager),e)).split(/\n|\r\n|\r/).filter((e=>!!e.trim())).map(((e,t)=>{const[a,r,s,i,o]=e.split("\t");return new n.SimpleFeature({uniqueId:`${t}`,refName:a,start:+r,end:+s,name:i,type:o,gieStain:o||i})}))}freeResources(){}}}}]);
//# sourceMappingURL=4284.cb690590.chunk.js.map