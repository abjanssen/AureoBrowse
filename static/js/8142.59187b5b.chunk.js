"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8142],{78142:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var o=n(7552),r=n(68446),a=n(75785),l=n(23758),s=n(90542),i=n(17307),c=n(59121),m=n(83867),u=n(99546),d=n(20529),p=n(36715);const b=(0,a.n9)()((()=>({bp:{display:"flex",alignItems:"center",marginLeft:10},searchBox:{display:"flex"}}))),v=(0,r.observer)((function({view:e}){const{classes:t}=b(),{assemblyNames:n,coarseTotalBp:r}=e;return o.createElement("span",{className:t.searchBox},o.createElement(d.Gd,{model:e,showHelp:!1}),o.createElement(p.A,{variant:"body2",color:"textSecondary",className:t.bp},n.join(",")," ",(0,u.toLocale)(Math.round(r))," bp"))})),f=(0,a.n9)()({inline:{display:"inline-flex"}}),g=(0,r.observer)((function({model:e}){const{classes:t}=f(),{views:n}=e,[r,a]=(0,o.useState)(n.length<=3),[u,d]=(0,o.useState)(n.length<=3);return o.createElement(m.A,{row:!0},o.createElement(l.A,{menuItems:[{label:"Synteny track selectors",type:"subMenu",subMenu:n.slice(0,-1).map(((t,o)=>({label:`Row ${o+1}->${o+2} (${n[o].assemblyNames.join(",")}->${n[o+1].assemblyNames.join(",")})`,onClick:()=>{e.activateTrackSelector(o)}})))},{label:"Row track selectors",type:"subMenu",subMenu:n.map(((e,t)=>({label:`Row ${t+1} track selector (${e.assemblyNames.join(",")})`,onClick:()=>e.activateTrackSelector()})))}]},o.createElement(s.xU,null)),o.createElement(l.A,{menuItems:[{label:"Row view menus",type:"subMenu",subMenu:n.map(((e,t)=>({label:`View ${t+1} Menu`,subMenu:e.menuItems()})))},...e.headerMenuItems()]},o.createElement(i.A,null)),o.createElement(l.A,{menuItems:[{label:"Show search boxes",type:"checkbox",checked:r,onClick:()=>{a(!r)}},{label:"Orientation - Side-by-side",type:"radio",checked:u,onClick:()=>{d(!u)}},{label:"Orientation - Vertical",type:"radio",checked:!u,onClick:()=>{d(!u)}}]},o.createElement(c.A,null)),r?o.createElement("span",{className:u?t.inline:void 0},n.map((e=>o.createElement(v,{key:e.id,view:e})))):null)}));var h=n(68584),E=n(49823);const w=(0,a.n9)()({container:{display:"grid"},overlay:{zIndex:100,gridArea:"1/1"},resizeHandle:{height:4,background:"#ccc"}});function y({view:e}){const{pluginManager:t}=(0,u.getEnv)(e),{ReactComponent:n}=t.getViewType(e.type);return o.createElement(n,{model:e})}const k=(0,r.observer)((function({model:e}){const{classes:t}=w(),{views:n,levels:r}=e;return o.createElement("div",{className:t.container},n.map(((n,a)=>o.createElement(o.Fragment,{key:n.id},a>0?o.createElement(o.Fragment,null,o.createElement("div",{className:t.container},o.createElement(M,{model:e,level:a-1})),o.createElement(E.ResizeHandle,{onDrag:e=>r[a-1]?.setHeight((r[a-1]?.height||0)+e),className:t.resizeHandle})):null,o.createElement(y,{view:n})))))})),M=(0,r.observer)((function({model:e,level:t}){const{classes:n}=w();return o.createElement(o.Fragment,null,e.levels[t]?.tracks.map((e=>{const[t]=e.displays,{RenderingComponent:r}=t,a=(0,h.getConf)(e,"trackId");return r?o.createElement("div",{className:n.overlay,key:a,style:{height:t.height,overflow:"hidden"}},o.createElement(r,{model:t})):null})))})),C=k;var N=n(963),x=n(9555),S=n(42489),A=n(89003);const O=(0,a.n9)()({guide:{pointerEvents:"none",height:"100%",width:1,position:"absolute",zIndex:10},sm:{fontSize:10}}),R=(0,r.observer)((function({model:e,coordX:t}){const{classes:n}=O();return o.createElement(A.A,{open:!0,placement:"top",title:e.views.map((e=>e.pxToBp(t))).map(((e,t)=>o.createElement(p.A,{className:n.sm,key:[JSON.stringify(e),t].join("-")},(0,u.stringify)(e,!0)))),arrow:!0},o.createElement("div",{className:n.guide,style:{left:t,background:"red"}}))})),B=(0,a.n9)()((e=>({rubberband:{height:"100%",background:(0,N.X4)(e.palette.tertiary.main,.7),position:"absolute",zIndex:10,textAlign:"center",overflow:"hidden"},rubberbandControl:{cursor:"crosshair",width:"100%",minHeight:8},rubberbandText:{color:e.palette.tertiary.contrastText},popover:{mouseEvents:"none",cursor:"crosshair"},paper:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}}))),T=(0,r.observer)((function({model:e,ControlComponent:t=o.createElement("div",null)}){const[n,r]=(0,o.useState)(),[a,l]=(0,o.useState)(),[s,i]=(0,o.useState)(),[c,m]=(0,o.useState)(),d=(0,o.useRef)(null),b=(0,o.useRef)(null),{classes:v}=B(),f=void 0!==n&&void 0===s;function g(e){e.preventDefault(),e.stopPropagation();const t=e.clientX-e.target.getBoundingClientRect().left;r(t),l(t)}function h(e){const t=e.target;m(e.clientX-t.getBoundingClientRect().left)}function w(){m(void 0),(0,S.transaction)((()=>{e.views.forEach((e=>{e.setOffsets(void 0,void 0)}))}))}function y(){i(void 0),r(void 0),l(void 0)}(0,o.useEffect)((()=>{function t(e){if(d.current&&f){const t=e.clientX-d.current.getBoundingClientRect().left;l(t)}}function o(t){if(void 0!==n&&d.current){const{clientX:o,clientY:r}=t,a=o-d.current.getBoundingClientRect().left;i({offsetX:a,clientX:o,clientY:r}),(0,S.transaction)((()=>{e.views.forEach((e=>{const t=function(e,t){if(void 0===n)return;let o=n,r=e;return r<o&&([o,r]=[r,o]),{leftOffset:t.pxToBp(o),rightOffset:t.pxToBp(r)}}(a,e);if(t){const{leftOffset:n,rightOffset:o}=t;e.setOffsets(n,o)}}))})),m(void 0)}}return f?(window.addEventListener("mousemove",t),window.addEventListener("mouseup",o),()=>{window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",o)}):()=>{}}),[n,f,e]),(0,o.useEffect)((()=>{!f&&void 0!==a&&void 0!==n&&Math.abs(a-n)<=3&&y()}),[f,a,n]);const k=Boolean(s);if(void 0===n)return o.createElement(o.Fragment,null,void 0!==c?o.createElement(R,{model:e,coordX:c}):null,o.createElement("div",{ref:d,className:v.rubberbandControl,onMouseDown:g,onMouseOut:w,onMouseMove:h},t));const M=s?s.offsetX:a||0,C=Math.min(M,n),N=Math.abs(M-n),{views:A}=e,O=A.map((e=>e.pxToBp(C))),T=A.map((e=>e.pxToBp(C+N))),I=A.map((e=>Math.ceil(N*e.bpPerPx)));return o.createElement(o.Fragment,null,b.current?o.createElement(o.Fragment,null,o.createElement(x.Ay,{className:v.popover,classes:{paper:v.paper},open:!0,anchorEl:b.current,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},keepMounted:!0,disableRestoreFocus:!0},O.map(((e,t)=>o.createElement(p.A,{key:[JSON.stringify(e),t,"left"].join("-")},(0,u.stringify)(e,!0))))),o.createElement(x.Ay,{className:v.popover,classes:{paper:v.paper},open:!0,anchorEl:b.current,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,disableRestoreFocus:!0},T.map(((e,t)=>o.createElement(p.A,{key:[JSON.stringify(e),t,"right"].join("-")},(0,u.stringify)(e,!0)))))):null,o.createElement("div",{ref:b,className:v.rubberband,style:{left:C,width:N}},o.createElement(p.A,{variant:"h6",className:v.rubberbandText},I.map(((e,t)=>o.createElement(p.A,{key:`${e}_${t}`},`${e.toLocaleString("en-US")}bp`))))),o.createElement("div",{className:v.rubberbandControl,ref:d,onMouseDown:g,onMouseOut:w,onMouseMove:h},t),s?o.createElement(E.Menu,{anchorReference:"anchorPosition",anchorPosition:{left:s.clientX,top:s.clientY},onMenuItemClick:function(e,t){t(),y()},open:k,onClose:y,menuItems:e.rubberBandMenuItems()}):null)})),I=(0,a.n9)()((e=>({rubberbandContainer:{position:"relative",overflow:"hidden"},rubberbandDiv:{width:"100%",background:e.palette.action.disabledBackground,height:15,"&:hover":{background:e.palette.action.selected}}}))),z=(0,r.observer)((function({model:e}){const{classes:t}=I();return o.createElement("div",{className:t.rubberbandContainer},o.createElement(g,{model:e}),o.createElement(T,{model:e,ControlComponent:o.createElement("div",{className:t.rubberbandDiv})}),o.createElement(C,{model:e}))}))}}]);
//# sourceMappingURL=8142.59187b5b.chunk.js.map