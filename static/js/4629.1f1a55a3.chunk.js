"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4629],{87731:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(7552),o=r(93878),a=r(72639),l=r(70799),i=r(91527),s=r(15622),u=r(51148),c=r(48231),p=r(60129),d=r(58520),y=r(4785),b=r(36715),v=r(58161),m=r(39995);const A=({theme:e,ownerState:n})=>{const r=n.color,t=(0,m.Yn)(e,`palette.${r}`,!1)||n.color,o=(0,m.Yn)(e,`palette.${r}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,a.X4)(t,.4)};var h=r(69500);const w={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},x=(0,u.Ay)(b.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n[`underline${(0,s.A)(r.underline)}`],"button"===r.component&&n.button]}})((0,p.A)((({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:e,ownerState:n})=>"always"===e&&"inherit"!==n.color,style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter((0,d.A)()).map((([n])=>({props:{underline:"always",color:n},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[n].mainChannel} / 0.4)`:(0,a.X4)(e.palette[n].main,.4)}}))),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,a.X4)(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:(0,a.X4)(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${v.A.focusVisible}`]:{outline:"auto"}}}]})))),k=t.forwardRef((function(e,n){const r=(0,y.b)({props:e,name:"MuiLink"}),a=(0,c.A)(),{className:u,color:p="primary",component:d="a",onBlur:b,onFocus:m,TypographyClasses:k,underline:C="always",variant:g="inherit",sx:f,...L}=r,[S,$]=t.useState(!1),D={...r,color:p,component:d,focusVisible:S,underline:C,variant:g},M=(e=>{const{classes:n,component:r,focusVisible:t,underline:o}=e,a={root:["root",`underline${(0,s.A)(o)}`,"button"===r&&"button",t&&"focusVisible"]};return(0,l.A)(a,v.t,n)})(D);return(0,h.jsx)(x,{color:p,className:(0,o.A)(M.root,u),classes:k,component:d,onBlur:e=>{(0,i.A)(e.target)||$(!1),b&&b(e)},onFocus:e=>{(0,i.A)(e.target)&&$(!0),m&&m(e)},ref:n,ownerState:D,variant:g,...L,sx:[...void 0===w[p]?[{color:p}]:[],...Array.isArray(f)?f:[f]],style:{...L.style,..."always"===C&&"inherit"!==p&&!w[p]&&{"--Link-underlineColor":A({theme:a,ownerState:D})}}})}))},94629:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t.A,getLinkUtilityClass:()=>o.t,linkClasses:()=>o.A});var t=r(87731),o=r(58161)},58161:(e,n,r)=>{r.d(n,{A:()=>l,t:()=>a});var t=r(33761),o=r(85693);function a(e){return(0,o.Ay)("MuiLink",e)}const l=(0,t.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])}}]);
//# sourceMappingURL=4629.1f1a55a3.chunk.js.map