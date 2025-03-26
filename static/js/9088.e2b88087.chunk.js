"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9088],{49088:(e,a,c)=>{c.d(a,{makeImageData:()=>w});var n=c(68584),d=c(3496),t=c(99546),b=c(87485),r=c(37347),o=c(20095),f=c(20314),i=c(61300),u=c(90493),l=c(6219),s=c(45824),g=c(35873);function h(){var e,a,c,n,d,t=0,b=1,r=u.D_,o=!1;function l(a){return null==a||isNaN(a=+a)?d:r(0===c?.5:(a=(n(a)-e)*c,o?Math.max(0,Math.min(1,a)):a))}function s(e){return function(a){var c,n;return arguments.length?([c,n]=a,r=e(c,n),l):[r(0),r(1)]}}return l.domain=function(d){return arguments.length?([t,b]=d,e=n(t=+t),a=n(b=+b),c=e===a?0:1/(a-e),l):[t,b]},l.clamp=function(e){return arguments.length?(o=!!e,l):o},l.interpolator=function(e){return arguments.length?(r=e,l):r},l.range=s(f.A),l.rangeRound=s(i.A),l.unknown=function(e){return arguments.length?(d=e,l):d},function(d){return n=d,e=d(t),a=d(b),c=e===a?0:1/(a-e),l}}function m(e,a){return a.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function p(){var e=(0,s.C)(h()(u.D_));return e.copy=function(){return m(e,p())},l.K.apply(e,arguments)}function M(){var e=(0,g.g)(h()).domain([1,10]);return e.copy=function(){return m(e,M()).base(e.base())},l.K.apply(e,arguments)}const k=function(e){const a=e.length;return function(c){return e[Math.max(0,Math.min(a-1,Math.floor(c*a)))]}}(function(e){const a=new Array(256);let c=0;for(;c<256;)a[c]=`#${e.slice(6*c,6*++c)}`;return a}("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));async function w(e,a){const{features:c,config:f,bpPerPx:i,stopToken:u,resolution:l,sessionId:s,adapterConfig:g,useLogScale:h,colorScheme:m,regions:w,pluginManager:C,yScalar:x}=a,{statusCallback:S=()=>{}}=a;S("Drawing Hi-C matrix");const v=w[0],{dataAdapter:y}=await(0,d.cK)(C,s,g),j=await y.getResolution(i/l),_=(v.end-v.start)/i,A=j/(i*Math.sqrt(2)),D=(0,b.M)((0,n.readConfObject)(f,"baseColor")),I=Math.floor(v.start/j);if(c.length){let a=0,d=0,b=0;(0,r.SW)(u);for(const{bin1:e,bin2:n,counts:t}of c)a=Math.max(t,a),d=Math.min(Math.min(e,n),d),b=Math.max(Math.max(e,n),b);(0,r.SW)(u);const i={juicebox:["rgba(0,0,0,0)","red"],fall:(0,o.Ik)(["rgb(255, 255, 255)","rgb(255, 255, 204)","rgb(255, 237, 160)","rgb(254, 217, 118)","rgb(254, 178, 76)","rgb(253, 141, 60)","rgb(252, 78, 42)","rgb(227, 26, 28)","rgb(189, 0, 38)","rgb(128, 0, 38)","rgb(0, 0, 0)"]),viridis:k},l=h?a:a/20,s=i[m]||i.juicebox,g=h?M(s).domain([1,l]):p(s).domain([0,l]);x&&e.scale(1,x),e.save(),!0===v.reversed&&(e.scale(-1,1),e.translate(-_,0)),e.rotate(-Math.PI/4),(0,t.forEachWithStopTokenCheck)(c,u,(({bin1:c,bin2:d,counts:t})=>{e.fillStyle=(0,n.readConfObject)(f,"color",{count:t,maxScore:a,baseColor:D,scale:g,useLogScale:h}),e.fillRect((c-I)*A,(d-I)*A,A,A)})),e.restore()}}}}]);
//# sourceMappingURL=9088.e2b88087.chunk.js.map