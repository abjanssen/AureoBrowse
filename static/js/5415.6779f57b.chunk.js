"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5415],{85415:(e,a,r)=>{r.d(a,{doAfterAttach:()=>d});var t=r(99546),s=r(91468),i=r(36422),n=r(99412),o=r(86576);function d(e){(0,o.vi)(e,(async()=>{const a=(0,t.getContainingView)(e);e.autorunReady&&e.setCurrSortBpPerPx(a.bpPerPx)}),{delay:1e3}),(0,o.vi)(e,(async()=>{const{rpcManager:a}=(0,t.getSession)(e),r=(0,t.getContainingView)(e);if(!e.autorunReady)return;const{sortedBy:n,adapterConfig:o,rendererType:d,sortReady:c}=e,{bpPerPx:l}=r;if(n&&(!c||e.currSortBpPerPx===r.bpPerPx)){const{pos:r,refName:c,assemblyName:l}=n;await e.rendererType.renderInClient(a,{assemblyName:l,regions:[{start:r,end:r+1,refName:c,assemblyName:l}],adapterConfig:o,rendererType:d.name,sessionId:(0,s.getRpcSessionId)(e),layoutId:(0,t.getContainingTrack)(e).id,timeout:1e6,statusCallback:a=>{(0,i.isAlive)(e)&&e.setMessage(a)},...e.renderPropsPre()})}(0,i.isAlive)(e)&&(e.setCurrSortBpPerPx(l),e.setSortReady(!0))}),{delay:1e3}),(0,o.vi)(e,(async()=>{if(!e.autorunReady)return;const{adapterConfig:a}=e,{staticBlocks:r}=(0,t.getContainingView)(e),s=await(0,n.D)({model:e,adapterConfig:a,blocks:r});(0,i.isAlive)(e)&&(e.updateVisibleModifications(s),e.setModificationsReady(!0))}),{delay:1e3})}}}]);
//# sourceMappingURL=5415.6779f57b.chunk.js.map