"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9106],{25762:(e,t,o)=>{o.d(t,{A:()=>s});var n=o(74893),r=o(69500);const s=(0,n.A)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},1773:(e,t,o)=>{o.d(t,{A:()=>p});var n=o(7552),r=o(93878),s=o(70799),a=o(51148),i=o(4785),l=o(943),d=o(50885),c=o(69500);const u=(0,a.Ay)(l.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})({overflow:"hidden"}),p=n.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiCard"}),{className:n,raised:a=!1,...l}=o,p={...o,raised:a},m=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},d.T,t)})(p);return(0,c.jsx)(u,{className:(0,r.A)(m.root,n),elevation:a?8:void 0,ref:t,ownerState:p,...l})}))},50885:(e,t,o)=>{o.d(t,{A:()=>a,T:()=>s});var n=o(33761),r=o(85693);function s(e){return(0,r.Ay)("MuiCard",e)}const a=(0,n.A)("MuiCard",["root"])},25355:(e,t,o)=>{o.d(t,{A:()=>u});var n=o(7552),r=o(93878),s=o(70799),a=o(51148),i=o(4785),l=o(61823),d=o(69500);const c=(0,a.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:16,"&:last-child":{paddingBottom:24}}),u=n.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiCardContent"}),{className:n,component:a="div",...u}=o,p={...o,component:a},m=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},l.h,t)})(p);return(0,d.jsx)(c,{as:a,className:(0,r.A)(m.root,n),ownerState:p,ref:t,...u})}))},61823:(e,t,o)=>{o.d(t,{A:()=>a,h:()=>s});var n=o(33761),r=o(85693);function s(e){return(0,r.Ay)("MuiCardContent",e)}const a=(0,n.A)("MuiCardContent",["root"])},87731:(e,t,o)=>{o.d(t,{A:()=>f});var n=o(7552),r=o(93878),s=o(72639),a=o(70799),i=o(91527),l=o(15622),d=o(51148),c=o(48231),u=o(60129),p=o(58520),m=o(4785),A=o(36715),v=o(58161),y=o(39995);const b=({theme:e,ownerState:t})=>{const o=t.color,n=(0,y.Yn)(e,`palette.${o}`,!1)||t.color,r=(0,y.Yn)(e,`palette.${o}Channel`);return"vars"in e&&r?`rgba(${r} / 0.4)`:(0,s.X4)(n,.4)};var g=o(69500);const h={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},x=(0,d.Ay)(A.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`underline${(0,l.A)(o.underline)}`],"button"===o.component&&t.button]}})((0,u.A)((({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:e,ownerState:t})=>"always"===e&&"inherit"!==t.color,style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter((0,p.A)()).map((([t])=>({props:{underline:"always",color:t},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[t].mainChannel} / 0.4)`:(0,s.X4)(e.palette[t].main,.4)}}))),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,s.X4)(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:(0,s.X4)(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${v.A.focusVisible}`]:{outline:"auto"}}}]})))),f=n.forwardRef((function(e,t){const o=(0,m.b)({props:e,name:"MuiLink"}),s=(0,c.A)(),{className:d,color:u="primary",component:p="a",onBlur:A,onFocus:y,TypographyClasses:f,underline:w="always",variant:S="inherit",sx:C,...M}=o,[I,L]=n.useState(!1),R={...o,color:u,component:p,focusVisible:I,underline:w,variant:S},k=(e=>{const{classes:t,component:o,focusVisible:n,underline:r}=e,s={root:["root",`underline${(0,l.A)(r)}`,"button"===o&&"button",n&&"focusVisible"]};return(0,a.A)(s,v.t,t)})(R);return(0,g.jsx)(x,{color:u,className:(0,r.A)(k.root,d),classes:f,component:p,onBlur:e=>{(0,i.A)(e.target)||L(!1),A&&A(e)},onFocus:e=>{(0,i.A)(e.target)&&L(!0),y&&y(e)},ref:t,ownerState:R,variant:S,...M,sx:[...void 0===h[u]?[{color:u}]:[],...Array.isArray(C)?C:[C]],style:{...M.style,..."always"===w&&"inherit"!==u&&!h[u]&&{"--Link-underlineColor":b({theme:s,ownerState:R})}}})}))},58161:(e,t,o)=>{o.d(t,{A:()=>a,t:()=>s});var n=o(33761),r=o(85693);function s(e){return(0,r.Ay)("MuiLink",e)}const a=(0,n.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])},45331:(e,t,o)=>{o.d(t,{Ay:()=>h});var n=o(7552),r=o(93878),s=o(70799),a=o(23879),i=o(51148),l=o(60129),d=o(4785),c=o(3755),u=o(51584),p=o(57406),m=o(74823),A=o(2451),v=o(77999),y=o(69500);const b=(0,i.Ay)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,"flex-start"===o.alignItems&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.hasSecondaryAction&&t.secondaryAction]}})((0,l.A)((({theme:e})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${A.A.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]})))),g=(0,i.Ay)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),h=n.forwardRef((function(e,t){const o=(0,d.b)({props:e,name:"MuiListItem"}),{alignItems:i="center",children:l,className:A,component:h,components:x={},componentsProps:f={},ContainerComponent:w="li",ContainerProps:{className:S,...C}={},dense:M=!1,disableGutters:I=!1,disablePadding:L=!1,divider:R=!1,secondaryAction:k,slotProps:j={},slots:N={},...P}=o,G=n.useContext(p.A),D=n.useMemo((()=>({dense:M||G.dense||!1,alignItems:i,disableGutters:I})),[i,G.dense,M,I]),$=n.useRef(null),B=n.Children.toArray(l),T=B.length&&(0,c.A)(B[B.length-1],["ListItemSecondaryAction"]),V={...o,alignItems:i,dense:D.dense,disableGutters:I,disablePadding:L,divider:R,hasSecondaryAction:T},F=(e=>{const{alignItems:t,classes:o,dense:n,disableGutters:r,disablePadding:a,divider:i,hasSecondaryAction:l}=e,d={root:["root",n&&"dense",!r&&"gutters",!a&&"padding",i&&"divider","flex-start"===t&&"alignItemsFlexStart",l&&"secondaryAction"],container:["container"]};return(0,s.A)(d,m._,o)})(V),_=(0,u.A)($,t),z=N.root||x.Root||b,H=j.root||f.root||{},X={className:(0,r.A)(F.root,H.className,A),...P};let Y=h||"li";return T?(Y=X.component||h?Y:"div","li"===w&&("li"===Y?Y="div":"li"===X.component&&(X.component="div")),(0,y.jsx)(p.A.Provider,{value:D,children:(0,y.jsxs)(g,{as:w,className:(0,r.A)(F.container,S),ref:_,ownerState:V,...C,children:[(0,y.jsx)(z,{...H,...!(0,a.A)(z)&&{as:Y,ownerState:{...V,...H.ownerState}},...X,children:B}),B.pop()]})})):(0,y.jsx)(p.A.Provider,{value:D,children:(0,y.jsxs)(z,{...H,as:Y,ref:_,...!(0,a.A)(z)&&{ownerState:{...V,...H.ownerState}},...X,children:[B,k&&(0,y.jsx)(v.A,{children:k})]})})}))},74823:(e,t,o)=>{o.d(t,{A:()=>a,_:()=>s});var n=o(33761),r=o(85693);function s(e){return(0,r.Ay)("MuiListItem",e)}const a=(0,n.A)("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"])},2451:(e,t,o)=>{o.d(t,{A:()=>a,Y:()=>s});var n=o(33761),r=o(85693);function s(e){return(0,r.Ay)("MuiListItemButton",e)}const a=(0,n.A)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"])},77999:(e,t,o)=>{o.d(t,{A:()=>m});var n=o(7552),r=o(93878),s=o(70799),a=o(51148),i=o(4785),l=o(57406),d=o(87739),c=o(69500);const u=(0,a.Ay)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:e})=>e.disableGutters,style:{right:0}}]}),p=n.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiListItemSecondaryAction"}),{className:a,...p}=o,m=n.useContext(l.A),A={...o,disableGutters:m.disableGutters},v=(e=>{const{disableGutters:t,classes:o}=e,n={root:["root",t&&"disableGutters"]};return(0,s.A)(n,d.g,o)})(A);return(0,c.jsx)(u,{className:(0,r.A)(v.root,a),ownerState:A,ref:t,...p})}));p.muiName="ListItemSecondaryAction";const m=p},87739:(e,t,o)=>{o.d(t,{A:()=>a,g:()=>s});var n=o(33761),r=o(85693);function s(e){return(0,r.Ay)("MuiListItemSecondaryAction",e)}const a=(0,n.A)("MuiListItemSecondaryAction",["root","disableGutters"])}}]);
//# sourceMappingURL=9106.b274c701.chunk.js.map