"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7722],{47722:(t,e,a)=>{a.r(e),a.d(e,{getQuantitativeStatsAutorun:()=>l});var s=a(99546),r=a(37347),i=a(42489),o=a(36422),n=a(68584),c=a(91468);function l(t){(0,o.addDisposer)(t,(0,i.autorun)((async()=>{try{if(t.quantitativeStatsReady){const e=(0,s.getContainingView)(t),a=(0,r.y5)();t.setStatsLoading(a);const i=JSON.stringify(e.dynamicBlocks),l=await async function(t,e){const{rpcManager:a}=(0,s.getSession)(t),r=(0,n.getConf)(t,"numStdDev")||3,{adapterConfig:i,autoscaleType:l}=t,u=(0,c.getRpcSessionId)(t),{currStatsBpPerPx:g}=e,p={sessionId:u,adapterConfig:i,statusCallback:e=>{(0,o.isAlive)(t)&&t.setMessage(e)},...e};if("global"===l||"globalsd"===l){const t=await a.call(u,"WiggleGetGlobalQuantitativeStats",p),{scoreMin:e,scoreMean:s,scoreStdDev:i}=t;return"globalsd"===l?{...t,scoreMin:e>=0?0:s-r*i,scoreMax:s+r*i,currStatsBpPerPx:g}:{...t,currStatsBpPerPx:g}}if("local"===l||"localsd"===l){const{dynamicBlocks:e,bpPerPx:i}=(0,s.getContainingView)(t),o=await a.call(u,"WiggleGetMultiRegionQuantitativeStats",{...p,regions:e.contentBlocks.map((t=>{const{start:e,end:a}=t;return{...JSON.parse(JSON.stringify(t)),start:Math.floor(e),end:Math.ceil(a)}})),bpPerPx:i}),{scoreMin:n,scoreMean:c,scoreStdDev:d}=o;return"localsd"===l?{...o,scoreMin:n>=0?0:c-r*d,scoreMax:c+r*d,currStatsBpPerPx:g}:{...o,currStatsBpPerPx:g}}if("zscale"===l)return a.call(u,"WiggleGetGlobalQuantitativeStats",p);throw new Error(`invalid autoscaleType '${l}'`)}(t,{stopToken:a,filters:[],currStatsBpPerPx:e.bpPerPx,...t.adapterProps()});(0,o.isAlive)(t)&&t.updateQuantitativeStats(l,i)}}catch(e){(0,o.isAlive)(t)&&!(0,s.isAbortException)(e)&&(console.error(e),t.setError(e))}}),{delay:1e3}))}}}]);
//# sourceMappingURL=7722.3615b374.chunk.js.map