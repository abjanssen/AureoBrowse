"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5331],{9469:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(23758),s=n(99546),l=n(7215),i=n(84885),a=n(68446),r=n(69500);const c=(0,a.observer)((function({model:e}){const t=(0,s.getSession)(e),{selection:n}=e,{pluginManager:a}=(0,s.getEnv)(e),{adminMode:c,sessionTracks:d}=t,h=new Set(d?.map((e=>e.trackId))),g=a.evaluateExtensionPoint("TrackSelector-multiTrackMenuItems",[],{session:t});return n.length?(0,r.jsx)(o.A,{menuItems:[{label:"Clear selection",onClick:()=>{e.clearSelection()}},...n.every((e=>{return t=e.trackId,c||h.has(t);var t}))?[{label:"Delete tracks",onClick:()=>{n.forEach((e=>t.deleteTrackConf?.(e)))}}]:[],...g.map((t=>({...t,..."onClick"in t?{onClick:()=>{t.onClick(e)}}:{}})))],children:(0,r.jsx)(i.A,{badgeContent:n.length,color:"primary",children:(0,r.jsx)(l.A,{})})}):null}))},25331:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var o=n(7552),s=n(68446),l=n(28685),i=n(99546),a=n(374),r=n(62859),c=n(2051),d=n(29629),h=n(75785),g=n(69500);const u=(0,h.n9)()((e=>({fab:{position:"absolute",bottom:e.spacing(6),right:e.spacing(6)}}))),m=(0,s.observer)((function({model:e}){const{classes:t}=u(),n=(0,i.getSession)(e),[s,l]=(0,o.useState)(null);function h(){l(null)}const m=(0,i.isSessionModelWithConnections)(n),k=(0,i.isSessionWithAddTracks)(n);return k||m?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.A,{color:"secondary",className:t.fab,onClick:e=>{l(e.currentTarget)},children:(0,g.jsx)(a.A,{})}),(0,g.jsxs)(c.A,{anchorEl:s,open:Boolean(s),onClose:()=>{l(null)},children:[m?(0,g.jsx)(d.A,{onClick:()=>{h(),(0,i.isSessionModelWithWidgets)(n)&&n.showWidget(n.addWidget("AddConnectionWidget","addConnectionWidget"))},children:"Add connection"}):null,k?(0,g.jsx)(d.A,{onClick:()=>{h(),(0,i.isSessionModelWithWidgets)(n)&&n.showWidget(n.addWidget("AddTrackWidget","addTrackWidget",{view:e.view.id}))},children:"Add track"}):null]})]}):null}));var k=n(31892),C=n(1343),b=n(93117),x=n(61723),f=n(68584),p=n(23758),v=n(922);const j=(0,o.lazy)((()=>Promise.all([n.e(8565),n.e(8237),n.e(6157),n.e(7314),n.e(6738)]).then(n.bind(n,11158)))),y=(0,o.lazy)((()=>n.e(7181).then(n.bind(n,97181)))),A=(0,o.lazy)((()=>n.e(5896).then(n.bind(n,35896)))),S=(0,o.lazy)((()=>n.e(741).then(n.bind(n,60741)))),T=(0,o.lazy)((()=>n.e(4138).then(n.bind(n,44138)))),w=(0,s.observer)((function({model:e}){const t=(0,i.getSession)(e),[n,s]=(0,o.useState)(),[l,a]=(0,o.useState)(),[r,c]=(0,o.useState)(!1),[d,h]=(0,o.useState)(!1),[u,m]=(0,o.useState)(!1);function k(e,n){const o=(0,f.readConfObject)(e,"name"),l=t.prepareToBreakConnection?.(e);if(l){const[t,n]=l;Object.keys(n).length>0?s({connectionConf:e,safelyBreakConnection:t,dereferenceTypeCount:n,name:o}):t()}n&&a({name:o,connectionConf:e})}return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p.A,{menuItems:[{label:"Open faceted track selector",onClick:()=>{m(!0)}},...(0,i.isSessionWithAddTracks)(t)?[{label:"Add track...",onClick:()=>{(0,i.isSessionModelWithWidgets)(t)&&t.showWidget(t.addWidget("AddTrackWidget","addTrackWidget",{view:e.view.id}))}}]:[],{label:"Connections...",subMenu:[...(0,i.isSessionModelWithConnections)(t)?[{label:"Turn on/off connections...",onClick:()=>{c(!0)}}]:[],...(0,i.isSessionModelWithConnectionEditing)(t)?[{label:"Add connection...",onClick:()=>{(0,i.isSessionModelWithWidgets)(t)&&t.showWidget(t.addWidget("AddConnectionWidget","addConnectionWidget"))}},{label:"Delete connections...",onClick:()=>{h(!0)}}]:[]]},{label:"Sort...",type:"subMenu",subMenu:[{label:"Sort tracks by name",type:"checkbox",checked:e.activeSortTrackNames,onClick:()=>{e.setSortTrackNames(!e.activeSortTrackNames)}},{label:"Sort categories by name",type:"checkbox",checked:e.activeSortCategories,onClick:()=>{e.setSortCategories(!e.activeSortCategories)}}]},{label:"Collapse...",type:"subMenu",subMenu:[...e.hasAnySubcategories?[{label:"Collapse subcategories",onClick:()=>{e.collapseSubCategories()}}]:[],{label:"Collapse top-level categories",onClick:()=>{e.collapseTopLevelCategories()}},{label:"Expand all categories",onClick:()=>{e.expandAllCategories()}}]}],children:(0,g.jsx)(v.A,{})}),(0,g.jsxs)(o.Suspense,{fallback:null,children:[n?(0,g.jsx)(y,{modalInfo:n,onClose:()=>{s(void 0)}}):null,l?(0,g.jsx)(A,{handleClose:()=>{a(void 0)},deleteDialogDetails:l,session:t}):null,d?(0,g.jsx)(S,{handleClose:()=>{h(!1)},breakConnection:k,session:t}):null,r?(0,g.jsx)(T,{handleClose:()=>{c(!1)},session:t,breakConnection:k}):null,u?(0,g.jsx)(j,{handleClose:()=>{m(!1)},model:e}):null]})]})}));var W=n(9469),I=n(1114),M=n(89003),N=n(84885),F=n(13476),O=n(91468),L=n(26027);const B=(0,s.observer)((function({model:e,tracks:t,extraMenuItems:n,children:s,onClick:l}){const{view:a}=e,[r,c]=(0,o.useState)(!1),d=(0,i.getSession)(e);return a?(0,g.jsx)(p.A,{closeAfterItemClick:!1,onClick:l,menuItems:[...t.map((t=>({type:"checkbox",label:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(F.A,{html:(0,O.getTrackName)(t,d)})," ",(0,g.jsx)(L.A,{id:t.trackId,trackId:t.trackId,model:e,conf:t,setOpen:c,stopPropagation:!0})]}),checked:a.tracks.some((e=>e.configuration===t)),onClick:()=>{r||e.view.toggleTrack(t.trackId)&&e.addToRecentlyUsed(t.trackId)}}))),...n],children:s}):null})),R=(0,h.n9)()({smallBadge:{height:14},margin:{marginRight:10}}),E=(0,s.observer)((function({model:e}){const{classes:t}=R(),{view:n,favoriteTracks:o}=e;return n?(0,g.jsx)(B,{onClick:()=>{e.setFavoritesCounter(0)},tracks:o,model:e,extraMenuItems:o.length?[{type:"divider"},{label:"Clear favorites",onClick:()=>{e.clearFavorites()}}]:[{label:"No favorite tracks yet",onClick:()=>{}}],children:(0,g.jsx)(M.A,{title:"Favorite tracks",children:(0,g.jsx)(N.A,{classes:{badge:t.smallBadge},color:"secondary",anchorOrigin:{vertical:"bottom",horizontal:"right"},className:t.margin,badgeContent:e.favoritesCounter,children:(0,g.jsx)(I.A,{})})})}):null}));var P=n(69833);const D=(0,h.n9)()({smallBadge:{height:14}}),H=(0,s.observer)((function({model:e}){const{classes:t}=D(),{view:n,recentlyUsedCounter:o,recentlyUsedTracks:s}=e;return n?(0,g.jsx)(B,{onClick:()=>{e.setRecentlyUsedCounter(0)},model:e,tracks:s,extraMenuItems:s.length?[{type:"divider"},{label:"Clear recently used",onClick:()=>{e.clearRecentlyUsed()}}]:[{label:"No recently used",onClick:()=>{}}],children:(0,g.jsx)(M.A,{title:"Recently used tracks",children:(0,g.jsx)(N.A,{classes:{badge:t.smallBadge},anchorOrigin:{vertical:"bottom",horizontal:"right"},color:"secondary",badgeContent:o,children:(0,g.jsx)(P.A,{})})})}):null})),U=(0,h.n9)()((e=>({searchBox:{margin:e.spacing(2)}}))),z=(0,s.observer)((function({model:e}){const{filterText:t}=e,{classes:n}=U();return(0,g.jsx)(C.A,{className:n.searchBox,label:"Filter tracks",value:t,onChange:t=>{e.setFilterText(t.target.value)},fullWidth:!0,slotProps:{input:{endAdornment:(0,g.jsx)(b.A,{position:"end",children:(0,g.jsx)(x.A,{onClick:()=>{e.clearFilterText()},children:(0,g.jsx)(k.A,{})})})}}})})),_=(0,s.observer)((function({model:e,setHeaderHeight:t}){return(0,g.jsx)("div",{ref:e=>{t(e?.getBoundingClientRect().height||0)},"data-testid":"hierarchical_track_selector",children:(0,g.jsxs)("div",{style:{display:"flex"},children:[(0,g.jsx)(w,{model:e}),(0,g.jsx)(W.A,{model:e}),(0,g.jsx)(z,{model:e}),(0,g.jsx)(H,{model:e}),(0,g.jsx)(E,{model:e})]})})}));var $=n(32296),K=n(8463),q=n(32813),G=n(12756),J=n(30476),Q=n(36715);function V(e){return"category"===e?.type?e.children.flatMap((e=>"category"===e.type?V(e):e.conf)):[]}function X(e,t=new Map){e.id&&e.children.length&&t.set(e.id,e);for(const n of e.children)X(n,t);return t}function Y(e=""){return e.endsWith("(Unsupported)")||e.endsWith("(Unknown)")}const Z=(0,h.n9)()((e=>({contrastColor:{color:e.palette.tertiary.contrastText},accordionText:{margin:"auto 0",width:"100%"}})));function ee({isOpen:e,setOpen:t,data:n}){const{classes:s}=Z(),[l,i]=(0,o.useState)(null),{menuItems:a=[],name:r,model:c,id:d,tree:h}=n;return(0,g.jsxs)("div",{className:s.accordionText,onClick:()=>{l||(n.toggleCollapse(d),t(!e))},children:[(0,g.jsxs)(Q.A,{"data-testid":`htsCategory-${r}`,children:[e?(0,g.jsx)(q.A,{}):(0,g.jsx)(G.A,{}),r,(0,g.jsx)(x.A,{onClick:e=>{i(e.currentTarget),e.stopPropagation()},className:s.contrastColor,children:(0,g.jsx)(J.A,{})})]}),l?(0,g.jsx)(K.A,{anchorEl:l,menuItems:[{label:"Add to selection",onClick:()=>{const e=X(h).get(d);c.addToSelection(V(e))}},{label:"Remove from selection",onClick:()=>{const e=X(h).get(d);c.removeFromSelection(V(e))}},{label:"Show all tracks",onClick:()=>{for(const e of X(h).get(d)?.children||[])"track"===e.type&&c.view.showTrack(e.trackId)}},{label:"Hide all tracks",onClick:()=>{for(const e of X(h).get(d)?.children||[])"track"===e.type&&c.view.hideTrack(e.trackId)}},...a],onMenuItemClick:(e,t)=>{t(),i(null)},open:Boolean(l),onClose:()=>{i(null)}}):null]})}var te=n(33371),ne=n(32808);const oe=(0,h.n9)()((e=>({compactCheckbox:{padding:0},checkboxLabel:{marginRight:0,"&:hover":{backgroundColor:e.palette.action.selected}},selected:{background:"#cccc"}})));function se({data:e}){const{classes:t}=oe(),{checked:n,conf:o,model:s,drawerPosition:l,id:i,trackId:a,name:r,selected:c,onChange:d}=e,h=(0,f.readConfObject)(o,"description");return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(M.A,{title:h+(c?" (in selection)":""),placement:"left"===l?"right":"left",children:(0,g.jsx)(te.A,{className:t.checkboxLabel,onClick:e=>{(e.ctrlKey||e.metaKey)&&(c?s.removeFromSelection([o]):s.addToSelection([o]),e.preventDefault())},control:(0,g.jsx)(ne.A,{className:t.compactCheckbox,checked:n,onChange:()=>{d(a)},disabled:Y(r),inputProps:{"data-testid":`htsTrackEntry-${i}`}}),label:(0,g.jsx)("div",{"data-testid":`htsTrackLabel-${i}`,className:c?t.selected:void 0,children:(0,g.jsx)(F.A,{html:r})})})}),(0,g.jsx)(L.A,{model:s,trackId:a,id:i,conf:o})]})}const le=(0,h.n9)()((e=>({accordionBase:{display:"flex"},accordionCard:{padding:3,cursor:"pointer",display:"flex"},nestingLevelMarker:{position:"absolute",borderLeft:"1.5px solid #555"},accordionColor:{background:e.palette.tertiary.main,color:e.palette.tertiary.contrastText,width:"100%",display:"flex",paddingLeft:5}})));function ie({data:e,isOpen:t,style:n,setOpen:o}){const{isLeaf:s,nestingLevel:l}=e,{classes:i}=le(),a=10*l+(s?10:0);return(0,g.jsxs)("div",{style:n,className:s?void 0:i.accordionBase,children:[new Array(l).fill(0).map(((e,t)=>(0,g.jsx)("div",{style:{left:10*t+4,height:n?.height},className:i.nestingLevelMarker},`mark-${t}`))),(0,g.jsx)("div",{className:s?void 0:i.accordionCard,style:{marginLeft:a,whiteSpace:"nowrap",width:"100%"},children:(0,g.jsx)("div",{className:s?void 0:i.accordionColor,children:s?(0,g.jsx)(se,{data:e}):(0,g.jsx)(ee,{isOpen:t,data:e,setOpen:o})})})]})}function ae(e,t,n,o){const s="track"===e.type;return{data:{defaultHeight:s?22:40,isLeaf:s,isOpenByDefault:!0,nestingLevel:t,selected:!!s&&o[e.trackId],...e,...n},nestingLevel:t,node:e}}const re=(0,s.observer)((function({height:e,tree:t,model:n}){const{filterText:s,selection:l,view:a}=n,r=(0,o.useRef)(null),c=(0,i.getSession)(n),{drawerPosition:d}=c,h=(0,o.useMemo)((()=>Object.fromEntries(l.map((e=>[e.trackId,e])))),[l]),u=(0,o.useMemo)((()=>({onChange:e=>{a.toggleTrack(e)&&n.addToRecentlyUsed(e)},toggleCollapse:e=>{n.toggleCategory(e)},tree:t,model:n,drawerPosition:d})),[a,n,d,t]),m=(0,o.useCallback)((function*(){for(const e of t.children)yield ae(e,0,u,h);for(;;){const e=yield;for(const t of e.node.children)yield ae(t,e.nestingLevel+1,u,h)}}),[t,u,h]);return(0,o.useEffect)((()=>{r.current.recomputeTree({refreshNodes:!0,useDefaultHeight:!0})}),[t,s]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)($.SS,{ref:r,treeWalker:m,height:e,children:ie})})})),ce=({tree:e,model:t,offset:n})=>"undefined"==typeof jest?(0,g.jsx)(l.Ay,{disableWidth:!0,children:o=>(0,g.jsx)(re,{height:(o.height||n)-n,model:t,tree:e})}):(0,g.jsx)(re,{height:9e3,model:t,tree:e}),de=({overrideDimensions:e,children:t})=>e?(0,g.jsx)("div",{style:{...e},children:t}):t,he=(0,s.observer)((function({model:e,toolbarHeight:t,overrideDimensions:n}){return(0,g.jsxs)(de,{overrideDimensions:n,children:[(0,g.jsx)(ge,{model:e,toolbarHeight:t}),(0,g.jsx)(m,{model:e})]})})),ge=(0,s.observer)((function({model:e,toolbarHeight:t=0}){const[n,s]=(0,o.useState)(0);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(_,{model:e,setHeaderHeight:s}),(0,g.jsx)(ce,{tree:e.hierarchy,model:e,offset:t+n})]})})),ue=he},26027:(e,t,n)=>{n.d(t,{A:()=>h});var o=n(23758),s=n(99546),l=n(30476),i=n(1185),a=n(84181),r=n(75785),c=n(69500);const d=(0,r.n9)()({cascadingStyle:{padding:0}}),h=function({id:e,trackId:t,stopPropagation:n,model:r,setOpen:h,conf:g}){const{classes:u}=d();return(0,c.jsx)(o.A,{className:u.cascadingStyle,stopPropagation:n,setOpen:h,"data-testid":`htsTrackEntryMenu-${e}`,menuItems:[...(0,s.getSession)(r).getTrackActionMenuItems?.(g)||[],r.isFavorite(t)?{label:"Remove from favorites",onClick:()=>{r.removeFromFavorites(t)},icon:a.A}:{label:"Add to favorites",onClick:()=>{r.addToFavorites(t)},icon:i.A},{label:"Add to selection",onClick:()=>{r.addToSelection([g])}},...r.isSelected(g)?[{label:"Remove from selection",onClick:()=>{r.removeFromSelection([g])}}]:[]],children:(0,c.jsx)(l.A,{})})}}}]);
//# sourceMappingURL=5331.8258b9c1.chunk.js.map