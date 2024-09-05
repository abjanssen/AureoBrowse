"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9067],{79067:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var o=a(7552),r=a(49823),n=a(29499),l=a(36715),i=a(24387),s=a(58507),c=a(5401),d=a(31647),p=a(943),u=a(64111),m=a(95767),g=a(82565),y=a(75199),A=a(73451),h=a(36422),v=a(99546);function b({searchResults:e,assemblyName:t,model:a,handleClose:r}){const n=(0,v.getSession)(a),{pluginManager:l}=(0,v.getEnv)(n),{assemblyManager:i}=n,s=t||a.displayedRegions[0].assemblyName,b=i.get(s);if(!b)throw new Error(`assembly ${s} not found`);if(!b.regions)throw new Error(`assembly ${s} regions not loaded`);return o.createElement(d.A,{component:p.A},o.createElement(u.A,null,o.createElement(m.A,null,o.createElement(g.A,null,o.createElement(y.A,null,"Name"),o.createElement(y.A,{align:"right"},"Location"),o.createElement(y.A,{align:"right"},"Track"),o.createElement(y.A,{align:"right"}))),o.createElement(A.A,null,e.map((e=>o.createElement(g.A,{key:e.getId()},o.createElement(y.A,{component:"th",scope:"row"},e.getLabel()),o.createElement(y.A,{align:"right"},e.getLocation()),o.createElement(y.A,{align:"right"},function(e){if(e){const t=l.pluggableConfigSchemaType("track"),o=(0,h.resolveIdentifier)(t,(0,h.getRoot)(a),e);return o?.name?.value||""}return""}(e.getTrackId())||"N/A"),o.createElement(y.A,{align:"right"},o.createElement(c.A,{onClick:async()=>{try{const t=e.getLocation();if(t){await async function(e){try{const t=b?.regions?.find((t=>e===t.refName));t?(a.setDisplayedRegions([t]),a.showAllRegions()):await a.navToLocString(e,s)}catch(e){console.warn(e),n.notify(`${e}`,"warning")}}(t);const o=e.getTrackId();o&&a.showTrack(o)}}catch(e){console.error(e),n.notifyError(`${e}`,e)}r()},color:"primary",variant:"contained"},"Go"))))))))}function f({model:e,assemblyName:t,searchQuery:a,searchResults:d,handleClose:p}){return o.createElement(r.Dialog,{open:!0,maxWidth:"xl",onClose:p,title:"Search results"},o.createElement(n.A,null,d?.length?o.createElement(o.Fragment,null,o.createElement(l.A,null,"Showing results for ",o.createElement("b",null,a)),o.createElement(b,{model:e,handleClose:p,assemblyName:t,searchResults:d})):o.createElement(l.A,null,"No results found for ",o.createElement("b",null,a))),o.createElement(i.A,null),o.createElement(s.A,null,o.createElement(c.A,{onClick:()=>{p()},color:"primary"},"Cancel")))}},64111:(e,t,a)=>{a.d(t,{A:()=>g});var o=a(7552),r=a(93878),n=a(70799),l=a(15560),i=a(51148),s=a(60129),c=a(4785),d=a(12667),p=a(69500);const u=(0,i.Ay)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})((0,s.A)((({theme:e})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:e})=>e.stickyHeader,style:{borderCollapse:"separate"}}]})))),m="table",g=o.forwardRef((function(e,t){const a=(0,c.b)({props:e,name:"MuiTable"}),{className:i,component:s=m,padding:g="normal",size:y="medium",stickyHeader:A=!1,...h}=a,v={...a,component:s,padding:g,size:y,stickyHeader:A},b=(e=>{const{classes:t,stickyHeader:a}=e,o={root:["root",a&&"stickyHeader"]};return(0,n.A)(o,d.l,t)})(v),f=o.useMemo((()=>({padding:g,size:y,stickyHeader:A})),[g,y,A]);return(0,p.jsx)(l.A.Provider,{value:f,children:(0,p.jsx)(u,{as:s,role:s===m?null:"table",ref:t,className:(0,r.A)(b.root,i),ownerState:v,...h})})}))},15560:(e,t,a)=>{a.d(t,{A:()=>o});const o=a(7552).createContext()},70156:(e,t,a)=>{a.d(t,{A:()=>o});const o=a(7552).createContext()},12667:(e,t,a)=>{a.d(t,{A:()=>l,l:()=>n});var o=a(33761),r=a(85693);function n(e){return(0,r.Ay)("MuiTable",e)}const l=(0,o.A)("MuiTable",["root","stickyHeader"])},73451:(e,t,a)=>{a.d(t,{A:()=>g});var o=a(7552),r=a(93878),n=a(70799),l=a(70156),i=a(51148),s=a(4785),c=a(20255),d=a(69500);const p=(0,i.Ay)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),u={variant:"body"},m="tbody",g=o.forwardRef((function(e,t){const a=(0,s.b)({props:e,name:"MuiTableBody"}),{className:o,component:i=m,...g}=a,y={...a,component:i},A=(e=>{const{classes:t}=e;return(0,n.A)({root:["root"]},c.b,t)})(y);return(0,d.jsx)(l.A.Provider,{value:u,children:(0,d.jsx)(p,{className:(0,r.A)(A.root,o),as:i,ref:t,role:i===m?null:"rowgroup",ownerState:y,...g})})}))},20255:(e,t,a)=>{a.d(t,{A:()=>l,b:()=>n});var o=a(33761),r=a(85693);function n(e){return(0,r.Ay)("MuiTableBody",e)}const l=(0,o.A)("MuiTableBody",["root"])},75199:(e,t,a)=>{a.d(t,{A:()=>A});var o=a(7552),r=a(93878),n=a(70799),l=a(72639),i=a(15622),s=a(15560),c=a(70156),d=a(51148),p=a(60129),u=a(4785),m=a(48459),g=a(69500);const y=(0,d.Ay)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,i.A)(a.size)}`],"normal"!==a.padding&&t[`padding${(0,i.A)(a.padding)}`],"inherit"!==a.align&&t[`align${(0,i.A)(a.align)}`],a.stickyHeader&&t.stickyHeader]}})((0,p.A)((({theme:e})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid\n    ${"light"===e.palette.mode?(0,l.a)((0,l.X4)(e.palette.divider,1),.88):(0,l.e$)((0,l.X4)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(e.vars||e).palette.text.primary}},{props:{variant:"footer"},style:{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)}},{props:{size:"small"},style:{padding:"6px 16px",[`&.${m.A.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}}},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:({ownerState:e})=>e.stickyHeader,style:{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}}]})))),A=o.forwardRef((function(e,t){const a=(0,u.b)({props:e,name:"MuiTableCell"}),{align:l="inherit",className:d,component:p,padding:A,scope:h,size:v,sortDirection:b,variant:f,...w}=a,x=o.useContext(s.A),k=o.useContext(c.A),T=k&&"head"===k.variant;let C;C=p||(T?"th":"td");let R=h;"td"===C?R=void 0:!R&&T&&(R="col");const E=f||k&&k.variant,M={...a,align:l,component:C,padding:A||(x&&x.padding?x.padding:"normal"),size:v||(x&&x.size?x.size:"medium"),sortDirection:b,stickyHeader:"head"===E&&x&&x.stickyHeader,variant:E},H=(e=>{const{classes:t,variant:a,align:o,padding:r,size:l,stickyHeader:s}=e,c={root:["root",a,s&&"stickyHeader","inherit"!==o&&`align${(0,i.A)(o)}`,"normal"!==r&&`padding${(0,i.A)(r)}`,`size${(0,i.A)(l)}`]};return(0,n.A)(c,m.r,t)})(M);let N=null;return b&&(N="asc"===b?"ascending":"descending"),(0,g.jsx)(y,{as:C,ref:t,className:(0,r.A)(H.root,d),"aria-sort":N,scope:R,ownerState:M,...w})}))},48459:(e,t,a)=>{a.d(t,{A:()=>l,r:()=>n});var o=a(33761),r=a(85693);function n(e){return(0,r.Ay)("MuiTableCell",e)}const l=(0,o.A)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"])},31647:(e,t,a)=>{a.d(t,{A:()=>p});var o=a(7552),r=a(93878),n=a(70799),l=a(51148),i=a(4785),s=a(39339),c=a(69500);const d=(0,l.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),p=o.forwardRef((function(e,t){const a=(0,i.b)({props:e,name:"MuiTableContainer"}),{className:o,component:l="div",...p}=a,u={...a,component:l},m=(e=>{const{classes:t}=e;return(0,n.A)({root:["root"]},s.I,t)})(u);return(0,c.jsx)(d,{ref:t,as:l,className:(0,r.A)(m.root,o),ownerState:u,...p})}))},39339:(e,t,a)=>{a.d(t,{A:()=>l,I:()=>n});var o=a(33761),r=a(85693);function n(e){return(0,r.Ay)("MuiTableContainer",e)}const l=(0,o.A)("MuiTableContainer",["root"])},95767:(e,t,a)=>{a.d(t,{A:()=>g});var o=a(7552),r=a(93878),n=a(70799),l=a(70156),i=a(51148),s=a(4785),c=a(14627),d=a(69500);const p=(0,i.Ay)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),u={variant:"head"},m="thead",g=o.forwardRef((function(e,t){const a=(0,s.b)({props:e,name:"MuiTableHead"}),{className:o,component:i=m,...g}=a,y={...a,component:i},A=(e=>{const{classes:t}=e;return(0,n.A)({root:["root"]},c.X,t)})(y);return(0,d.jsx)(l.A.Provider,{value:u,children:(0,d.jsx)(p,{as:i,className:(0,r.A)(A.root,o),ref:t,role:i===m?null:"rowgroup",ownerState:y,...g})})}))},14627:(e,t,a)=>{a.d(t,{A:()=>l,X:()=>n});var o=a(33761),r=a(85693);function n(e){return(0,r.Ay)("MuiTableHead",e)}const l=(0,o.A)("MuiTableHead",["root"])},82565:(e,t,a)=>{a.d(t,{A:()=>y});var o=a(7552),r=a(93878),n=a(70799),l=a(72639),i=a(70156),s=a(51148),c=a(60129),d=a(4785),p=a(36317),u=a(69500);const m=(0,s.Ay)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((0,c.A)((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${p.A.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${p.A.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.X4)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})))),g="tr",y=o.forwardRef((function(e,t){const a=(0,d.b)({props:e,name:"MuiTableRow"}),{className:l,component:s=g,hover:c=!1,selected:y=!1,...A}=a,h=o.useContext(i.A),v={...a,component:s,hover:c,selected:y,head:h&&"head"===h.variant,footer:h&&"footer"===h.variant},b=(e=>{const{classes:t,selected:a,hover:o,head:r,footer:l}=e,i={root:["root",a&&"selected",o&&"hover",r&&"head",l&&"footer"]};return(0,n.A)(i,p.r,t)})(v);return(0,u.jsx)(m,{as:s,ref:t,className:(0,r.A)(b.root,l),role:s===g?null:"row",ownerState:v,...A})}))},36317:(e,t,a)=>{a.d(t,{A:()=>l,r:()=>n});var o=a(33761),r=a(85693);function n(e){return(0,r.Ay)("MuiTableRow",e)}const l=(0,o.A)("MuiTableRow",["root","selected","hover","head","footer"])}}]);
//# sourceMappingURL=9067.1cc02121.chunk.js.map