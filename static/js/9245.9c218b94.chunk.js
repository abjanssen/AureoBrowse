(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9245],{87731:(e,n,r)=>{"use strict";r.d(n,{A:()=>C});var t=r(7552),o=r(93878),i=r(72639),s=r(70799),a=r(91527),l=r(15622),u=r(51148),c=r(48231),g=r(60129),p=r(4785),h=r(36715),d=r(58161),f=r(39995);const m=({theme:e,ownerState:n})=>{const r=n.color,t=(0,f.Yn)(e,`palette.${r}`,!1)||n.color,o=(0,f.Yn)(e,`palette.${r}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,i.X4)(t,.4)};var _=r(69500);const v={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},y=(0,u.Ay)(h.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n[`underline${(0,l.A)(r.underline)}`],"button"===r.component&&n.button]}})((0,g.A)((({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:e,ownerState:n})=>"always"===e&&"inherit"!==n.color,style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter((([,e])=>e&&e.main)).map((([n])=>({props:{underline:"always",color:n},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[n].mainChannel} / 0.4)`:(0,i.X4)(e.palette[n].main,.4)}}))),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,i.X4)(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:(0,i.X4)(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${d.A.focusVisible}`]:{outline:"auto"}}}]})))),C=t.forwardRef((function(e,n){const r=(0,p.b)({props:e,name:"MuiLink"}),i=(0,c.A)(),{className:u,color:g="primary",component:h="a",onBlur:f,onFocus:C,TypographyClasses:A,underline:L="always",variant:S="inherit",sx:w,...b}=r,[M,O]=t.useState(!1),R={...r,color:g,component:h,focusVisible:M,underline:L,variant:S},E=(e=>{const{classes:n,component:r,focusVisible:t,underline:o}=e,i={root:["root",`underline${(0,l.A)(o)}`,"button"===r&&"button",t&&"focusVisible"]};return(0,s.A)(i,d.t,n)})(R);return(0,_.jsx)(y,{color:g,className:(0,o.A)(E.root,u),classes:A,component:h,onBlur:e=>{(0,a.A)(e.target)||O(!1),f&&f(e)},onFocus:e=>{(0,a.A)(e.target)&&O(!0),C&&C(e)},ref:n,ownerState:R,variant:S,...b,sx:[...void 0===v[g]?[{color:g}]:[],...Array.isArray(w)?w:[w]],style:{...b.style,..."always"===L&&"inherit"!==g&&!v[g]&&{"--Link-underlineColor":m({theme:i,ownerState:R})}}})}))},58161:(e,n,r)=>{"use strict";r.d(n,{A:()=>s,t:()=>i});var t=r(33761),o=r(85693);function i(e){return(0,o.Ay)("MuiLink",e)}const s=(0,t.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])},96605:(e,n,r)=>{var t=r(25113),o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Map;function s(){this._array=[],this._set=i?new Map:Object.create(null)}s.fromArray=function(e,n){for(var r=new s,t=0,o=e.length;t<o;t++)r.add(e[t],n);return r},s.prototype.size=function(){return i?this._set.size:Object.getOwnPropertyNames(this._set).length},s.prototype.add=function(e,n){var r=i?e:t.toSetString(e),s=i?this.has(e):o.call(this._set,r),a=this._array.length;s&&!n||this._array.push(e),s||(i?this._set.set(e,a):this._set[r]=a)},s.prototype.has=function(e){if(i)return this._set.has(e);var n=t.toSetString(e);return o.call(this._set,n)},s.prototype.indexOf=function(e){if(i){var n=this._set.get(e);if(n>=0)return n}else{var r=t.toSetString(e);if(o.call(this._set,r))return this._set[r]}throw new Error('"'+e+'" is not in the set.')},s.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},s.prototype.toArray=function(){return this._array.slice()},n.C=s},62778:(e,n,r)=>{var t=r(28710);n.encode=function(e){var n,r="",o=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{n=31&o,(o>>>=5)>0&&(n|=32),r+=t.encode(n)}while(o>0);return r},n.decode=function(e,n,r){var o,i,s,a,l=e.length,u=0,c=0;do{if(n>=l)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(i=t.decode(e.charCodeAt(n++))))throw new Error("Invalid base64 digit: "+e.charAt(n-1));o=!!(32&i),u+=(i&=31)<<c,c+=5}while(o);r.value=(a=(s=u)>>1,1&~s?a:-a),r.rest=n}},28710:(e,n)=>{var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");n.encode=function(e){if(0<=e&&e<r.length)return r[e];throw new TypeError("Must be between 0 and 63: "+e)},n.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},61669:(e,n)=>{function r(e,t,o,i,s,a){var l=Math.floor((t-e)/2)+e,u=s(o,i[l],!0);return 0===u?l:u>0?t-l>1?r(l,t,o,i,s,a):a==n.LEAST_UPPER_BOUND?t<i.length?t:-1:l:l-e>1?r(e,l,o,i,s,a):a==n.LEAST_UPPER_BOUND?l:e<0?-1:e}n.GREATEST_LOWER_BOUND=1,n.LEAST_UPPER_BOUND=2,n.search=function(e,t,o,i){if(0===t.length)return-1;var s=r(-1,t.length,e,t,o,i||n.GREATEST_LOWER_BOUND);if(s<0)return-1;for(;s-1>=0&&0===o(t[s],t[s-1],!0);)--s;return s}},73912:(e,n,r)=>{var t=r(25113);function o(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}o.prototype.unsortedForEach=function(e,n){this._array.forEach(e,n)},o.prototype.add=function(e){var n,r,o,i,s,a;r=e,o=(n=this._last).generatedLine,i=r.generatedLine,s=n.generatedColumn,a=r.generatedColumn,i>o||i==o&&a>=s||t.compareByGeneratedPositionsInflated(n,r)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},o.prototype.toArray=function(){return this._sorted||(this._array.sort(t.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},n.P=o},86539:(e,n)=>{function r(e){function n(e,n,r){var t=e[n];e[n]=e[r],e[r]=t}return function e(r,t,o,i){if(o<i){var s=o-1;n(r,(c=o,g=i,Math.round(c+Math.random()*(g-c))),i);for(var a=r[i],l=o;l<i;l++)t(r[l],a,!1)<=0&&n(r,s+=1,l);n(r,s+1,l);var u=s+1;e(r,t,o,u-1),e(r,t,u+1,i)}var c,g}}let t=new WeakMap;n.g=function(e,n,o=0){let i=t.get(n);void 0===i&&(i=function(e){let n=r.toString();return new Function(`return ${n}`)()(e)}(n),t.set(n,i)),i(e,n,o,e.length-1)}},40396:(e,n,r)=>{var t=r(25113),o=r(61669),i=r(96605).C,s=r(62778),a=r(86539).g;function l(e,n){var r=e;return"string"==typeof e&&(r=t.parseSourceMapInput(e)),null!=r.sections?new h(r,n):new u(r,n)}function u(e,n){var r=e;"string"==typeof e&&(r=t.parseSourceMapInput(e));var o=t.getArg(r,"version"),s=t.getArg(r,"sources"),a=t.getArg(r,"names",[]),l=t.getArg(r,"sourceRoot",null),u=t.getArg(r,"sourcesContent",null),c=t.getArg(r,"mappings"),g=t.getArg(r,"file",null);if(o!=this._version)throw new Error("Unsupported version: "+o);l&&(l=t.normalize(l)),s=s.map(String).map(t.normalize).map((function(e){return l&&t.isAbsolute(l)&&t.isAbsolute(e)?t.relative(l,e):e})),this._names=i.fromArray(a.map(String),!0),this._sources=i.fromArray(s,!0),this._absoluteSources=this._sources.toArray().map((function(e){return t.computeSourceURL(l,e,n)})),this.sourceRoot=l,this.sourcesContent=u,this._mappings=c,this._sourceMapURL=n,this.file=g}function c(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}l.fromSourceMap=function(e,n){return u.fromSourceMap(e,n)},l.prototype._version=3,l.prototype.__generatedMappings=null,Object.defineProperty(l.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),l.prototype.__originalMappings=null,Object.defineProperty(l.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),l.prototype._charIsMappingSeparator=function(e,n){var r=e.charAt(n);return";"===r||","===r},l.prototype._parseMappings=function(e,n){throw new Error("Subclasses must implement _parseMappings")},l.GENERATED_ORDER=1,l.ORIGINAL_ORDER=2,l.GREATEST_LOWER_BOUND=1,l.LEAST_UPPER_BOUND=2,l.prototype.eachMapping=function(e,n,r){var o,i=n||null;switch(r||l.GENERATED_ORDER){case l.GENERATED_ORDER:o=this._generatedMappings;break;case l.ORIGINAL_ORDER:o=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}for(var s=this.sourceRoot,a=e.bind(i),u=this._names,c=this._sources,g=this._sourceMapURL,p=0,h=o.length;p<h;p++){var d=o[p],f=null===d.source?null:c.at(d.source);a({source:f=t.computeSourceURL(s,f,g),generatedLine:d.generatedLine,generatedColumn:d.generatedColumn,originalLine:d.originalLine,originalColumn:d.originalColumn,name:null===d.name?null:u.at(d.name)})}},l.prototype.allGeneratedPositionsFor=function(e){var n=t.getArg(e,"line"),r={source:t.getArg(e,"source"),originalLine:n,originalColumn:t.getArg(e,"column",0)};if(r.source=this._findSourceIndex(r.source),r.source<0)return[];var i=[],s=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",t.compareByOriginalPositions,o.LEAST_UPPER_BOUND);if(s>=0){var a=this._originalMappings[s];if(void 0===e.column)for(var l=a.originalLine;a&&a.originalLine===l;)i.push({line:t.getArg(a,"generatedLine",null),column:t.getArg(a,"generatedColumn",null),lastColumn:t.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s];else for(var u=a.originalColumn;a&&a.originalLine===n&&a.originalColumn==u;)i.push({line:t.getArg(a,"generatedLine",null),column:t.getArg(a,"generatedColumn",null),lastColumn:t.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s]}return i},n.SourceMapConsumer=l,u.prototype=Object.create(l.prototype),u.prototype.consumer=l,u.prototype._findSourceIndex=function(e){var n,r=e;if(null!=this.sourceRoot&&(r=t.relative(this.sourceRoot,r)),this._sources.has(r))return this._sources.indexOf(r);for(n=0;n<this._absoluteSources.length;++n)if(this._absoluteSources[n]==e)return n;return-1},u.fromSourceMap=function(e,n){var r=Object.create(u.prototype),o=r._names=i.fromArray(e._names.toArray(),!0),s=r._sources=i.fromArray(e._sources.toArray(),!0);r.sourceRoot=e._sourceRoot,r.sourcesContent=e._generateSourcesContent(r._sources.toArray(),r.sourceRoot),r.file=e._file,r._sourceMapURL=n,r._absoluteSources=r._sources.toArray().map((function(e){return t.computeSourceURL(r.sourceRoot,e,n)}));for(var l=e._mappings.toArray().slice(),g=r.__generatedMappings=[],p=r.__originalMappings=[],h=0,d=l.length;h<d;h++){var f=l[h],m=new c;m.generatedLine=f.generatedLine,m.generatedColumn=f.generatedColumn,f.source&&(m.source=s.indexOf(f.source),m.originalLine=f.originalLine,m.originalColumn=f.originalColumn,f.name&&(m.name=o.indexOf(f.name)),p.push(m)),g.push(m)}return a(r.__originalMappings,t.compareByOriginalPositions),r},u.prototype._version=3,Object.defineProperty(u.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});const g=t.compareByGeneratedPositionsDeflatedNoLine;function p(e,n){let r=e.length,t=e.length-n;if(!(t<=1))if(2==t){let r=e[n],t=e[n+1];g(r,t)>0&&(e[n]=t,e[n+1]=r)}else if(t<20)for(let t=n;t<r;t++)for(let r=t;r>n;r--){let n=e[r-1],t=e[r];if(g(n,t)<=0)break;e[r-1]=t,e[r]=n}else a(e,g,n)}function h(e,n){var r=e;"string"==typeof e&&(r=t.parseSourceMapInput(e));var o=t.getArg(r,"version"),s=t.getArg(r,"sections");if(o!=this._version)throw new Error("Unsupported version: "+o);this._sources=new i,this._names=new i;var a={line:-1,column:0};this._sections=s.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var r=t.getArg(e,"offset"),o=t.getArg(r,"line"),i=t.getArg(r,"column");if(o<a.line||o===a.line&&i<a.column)throw new Error("Section offsets must be ordered and non-overlapping.");return a=r,{generatedOffset:{generatedLine:o+1,generatedColumn:i+1},consumer:new l(t.getArg(e,"map"),n)}}))}u.prototype._parseMappings=function(e,n){var r,o,i,l,u=1,g=0,h=0,d=0,f=0,m=0,_=e.length,v=0,y={},C=[],A=[];let L=0;for(;v<_;)if(";"===e.charAt(v))u++,v++,g=0,p(A,L),L=A.length;else if(","===e.charAt(v))v++;else{for((r=new c).generatedLine=u,i=v;i<_&&!this._charIsMappingSeparator(e,i);i++);for(e.slice(v,i),o=[];v<i;)s.decode(e,v,y),l=y.value,v=y.rest,o.push(l);if(2===o.length)throw new Error("Found a source, but no line and column");if(3===o.length)throw new Error("Found a source and line, but no column");if(r.generatedColumn=g+o[0],g=r.generatedColumn,o.length>1&&(r.source=f+o[1],f+=o[1],r.originalLine=h+o[2],h=r.originalLine,r.originalLine+=1,r.originalColumn=d+o[3],d=r.originalColumn,o.length>4&&(r.name=m+o[4],m+=o[4])),A.push(r),"number"==typeof r.originalLine){let e=r.source;for(;C.length<=e;)C.push(null);null===C[e]&&(C[e]=[]),C[e].push(r)}}p(A,L),this.__generatedMappings=A;for(var S=0;S<C.length;S++)null!=C[S]&&a(C[S],t.compareByOriginalPositionsNoSource);this.__originalMappings=[].concat(...C)},u.prototype._findMapping=function(e,n,r,t,i,s){if(e[r]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[r]);if(e[t]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[t]);return o.search(e,n,i,s)},u.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var n=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var r=this._generatedMappings[e+1];if(n.generatedLine===r.generatedLine){n.lastGeneratedColumn=r.generatedColumn-1;continue}}n.lastGeneratedColumn=1/0}},u.prototype.originalPositionFor=function(e){var n={generatedLine:t.getArg(e,"line"),generatedColumn:t.getArg(e,"column")},r=this._findMapping(n,this._generatedMappings,"generatedLine","generatedColumn",t.compareByGeneratedPositionsDeflated,t.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(r>=0){var o=this._generatedMappings[r];if(o.generatedLine===n.generatedLine){var i=t.getArg(o,"source",null);null!==i&&(i=this._sources.at(i),i=t.computeSourceURL(this.sourceRoot,i,this._sourceMapURL));var s=t.getArg(o,"name",null);return null!==s&&(s=this._names.at(s)),{source:i,line:t.getArg(o,"originalLine",null),column:t.getArg(o,"originalColumn",null),name:s}}}return{source:null,line:null,column:null,name:null}},u.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e}))},u.prototype.sourceContentFor=function(e,n){if(!this.sourcesContent)return null;var r=this._findSourceIndex(e);if(r>=0)return this.sourcesContent[r];var o,i=e;if(null!=this.sourceRoot&&(i=t.relative(this.sourceRoot,i)),null!=this.sourceRoot&&(o=t.urlParse(this.sourceRoot))){var s=i.replace(/^file:\/\//,"");if("file"==o.scheme&&this._sources.has(s))return this.sourcesContent[this._sources.indexOf(s)];if((!o.path||"/"==o.path)&&this._sources.has("/"+i))return this.sourcesContent[this._sources.indexOf("/"+i)]}if(n)return null;throw new Error('"'+i+'" is not in the SourceMap.')},u.prototype.generatedPositionFor=function(e){var n=t.getArg(e,"source");if((n=this._findSourceIndex(n))<0)return{line:null,column:null,lastColumn:null};var r={source:n,originalLine:t.getArg(e,"line"),originalColumn:t.getArg(e,"column")},o=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",t.compareByOriginalPositions,t.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(o>=0){var i=this._originalMappings[o];if(i.source===r.source)return{line:t.getArg(i,"generatedLine",null),column:t.getArg(i,"generatedColumn",null),lastColumn:t.getArg(i,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},h.prototype=Object.create(l.prototype),h.prototype.constructor=l,h.prototype._version=3,Object.defineProperty(h.prototype,"sources",{get:function(){for(var e=[],n=0;n<this._sections.length;n++)for(var r=0;r<this._sections[n].consumer.sources.length;r++)e.push(this._sections[n].consumer.sources[r]);return e}}),h.prototype.originalPositionFor=function(e){var n={generatedLine:t.getArg(e,"line"),generatedColumn:t.getArg(e,"column")},r=o.search(n,this._sections,(function(e,n){return e.generatedLine-n.generatedOffset.generatedLine||e.generatedColumn-n.generatedOffset.generatedColumn})),i=this._sections[r];return i?i.consumer.originalPositionFor({line:n.generatedLine-(i.generatedOffset.generatedLine-1),column:n.generatedColumn-(i.generatedOffset.generatedLine===n.generatedLine?i.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},h.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},h.prototype.sourceContentFor=function(e,n){for(var r=0;r<this._sections.length;r++){var t=this._sections[r].consumer.sourceContentFor(e,!0);if(t||""===t)return t}if(n)return null;throw new Error('"'+e+'" is not in the SourceMap.')},h.prototype.generatedPositionFor=function(e){for(var n=0;n<this._sections.length;n++){var r=this._sections[n];if(-1!==r.consumer._findSourceIndex(t.getArg(e,"source"))){var o=r.consumer.generatedPositionFor(e);if(o)return{line:o.line+(r.generatedOffset.generatedLine-1),column:o.column+(r.generatedOffset.generatedLine===o.line?r.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},h.prototype._parseMappings=function(e,n){this.__generatedMappings=[],this.__originalMappings=[];for(var r=0;r<this._sections.length;r++)for(var o=this._sections[r],i=o.consumer._generatedMappings,s=0;s<i.length;s++){var l=i[s],u=o.consumer._sources.at(l.source);u=t.computeSourceURL(o.consumer.sourceRoot,u,this._sourceMapURL),this._sources.add(u),u=this._sources.indexOf(u);var c=null;l.name&&(c=o.consumer._names.at(l.name),this._names.add(c),c=this._names.indexOf(c));var g={source:u,generatedLine:l.generatedLine+(o.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(o.generatedOffset.generatedLine===l.generatedLine?o.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:c};this.__generatedMappings.push(g),"number"==typeof g.originalLine&&this.__originalMappings.push(g)}a(this.__generatedMappings,t.compareByGeneratedPositionsDeflated),a(this.__originalMappings,t.compareByOriginalPositions)}},58203:(e,n,r)=>{var t=r(62778),o=r(25113),i=r(96605).C,s=r(73912).P;function a(e){e||(e={}),this._file=o.getArg(e,"file",null),this._sourceRoot=o.getArg(e,"sourceRoot",null),this._skipValidation=o.getArg(e,"skipValidation",!1),this._ignoreInvalidMapping=o.getArg(e,"ignoreInvalidMapping",!1),this._sources=new i,this._names=new i,this._mappings=new s,this._sourcesContents=null}a.prototype._version=3,a.fromSourceMap=function(e,n){var r=e.sourceRoot,t=new a(Object.assign(n||{},{file:e.file,sourceRoot:r}));return e.eachMapping((function(e){var n={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(n.source=e.source,null!=r&&(n.source=o.relative(r,n.source)),n.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(n.name=e.name)),t.addMapping(n)})),e.sources.forEach((function(n){var i=n;null!==r&&(i=o.relative(r,n)),t._sources.has(i)||t._sources.add(i);var s=e.sourceContentFor(n);null!=s&&t.setSourceContent(n,s)})),t},a.prototype.addMapping=function(e){var n=o.getArg(e,"generated"),r=o.getArg(e,"original",null),t=o.getArg(e,"source",null),i=o.getArg(e,"name",null);(this._skipValidation||!1!==this._validateMapping(n,r,t,i))&&(null!=t&&(t=String(t),this._sources.has(t)||this._sources.add(t)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:n.line,generatedColumn:n.column,originalLine:null!=r&&r.line,originalColumn:null!=r&&r.column,source:t,name:i}))},a.prototype.setSourceContent=function(e,n){var r=e;null!=this._sourceRoot&&(r=o.relative(this._sourceRoot,r)),null!=n?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[o.toSetString(r)]=n):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(r)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},a.prototype.applySourceMap=function(e,n,r){var t=n;if(null==n){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');t=e.file}var s=this._sourceRoot;null!=s&&(t=o.relative(s,t));var a=new i,l=new i;this._mappings.unsortedForEach((function(n){if(n.source===t&&null!=n.originalLine){var i=e.originalPositionFor({line:n.originalLine,column:n.originalColumn});null!=i.source&&(n.source=i.source,null!=r&&(n.source=o.join(r,n.source)),null!=s&&(n.source=o.relative(s,n.source)),n.originalLine=i.line,n.originalColumn=i.column,null!=i.name&&(n.name=i.name))}var u=n.source;null==u||a.has(u)||a.add(u);var c=n.name;null==c||l.has(c)||l.add(c)}),this),this._sources=a,this._names=l,e.sources.forEach((function(n){var t=e.sourceContentFor(n);null!=t&&(null!=r&&(n=o.join(r,n)),null!=s&&(n=o.relative(s,n)),this.setSourceContent(n,t))}),this)},a.prototype._validateMapping=function(e,n,r,t){if(n&&"number"!=typeof n.line&&"number"!=typeof n.column){var o="original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.";if(this._ignoreInvalidMapping)return"undefined"!=typeof console&&console.warn&&console.warn(o),!1;throw new Error(o)}if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||n||r||t)&&!(e&&"line"in e&&"column"in e&&n&&"line"in n&&"column"in n&&e.line>0&&e.column>=0&&n.line>0&&n.column>=0&&r)){if(o="Invalid mapping: "+JSON.stringify({generated:e,source:r,original:n,name:t}),this._ignoreInvalidMapping)return"undefined"!=typeof console&&console.warn&&console.warn(o),!1;throw new Error(o)}},a.prototype._serializeMappings=function(){for(var e,n,r,i,s=0,a=1,l=0,u=0,c=0,g=0,p="",h=this._mappings.toArray(),d=0,f=h.length;d<f;d++){if(e="",(n=h[d]).generatedLine!==a)for(s=0;n.generatedLine!==a;)e+=";",a++;else if(d>0){if(!o.compareByGeneratedPositionsInflated(n,h[d-1]))continue;e+=","}e+=t.encode(n.generatedColumn-s),s=n.generatedColumn,null!=n.source&&(i=this._sources.indexOf(n.source),e+=t.encode(i-g),g=i,e+=t.encode(n.originalLine-1-u),u=n.originalLine-1,e+=t.encode(n.originalColumn-l),l=n.originalColumn,null!=n.name&&(r=this._names.indexOf(n.name),e+=t.encode(r-c),c=r)),p+=e}return p},a.prototype._generateSourcesContent=function(e,n){return e.map((function(e){if(!this._sourcesContents)return null;null!=n&&(e=o.relative(n,e));var r=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,r)?this._sourcesContents[r]:null}),this)},a.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},a.prototype.toString=function(){return JSON.stringify(this.toJSON())},n.x=a},2573:(e,n,r)=>{var t=r(58203).x,o=r(25113),i=/(\r?\n)/,s="$$$isSourceNode$$$";function a(e,n,r,t,o){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==n?null:n,this.source=null==r?null:r,this.name=null==o?null:o,this[s]=!0,null!=t&&this.add(t)}a.fromStringWithSourceMap=function(e,n,r){var t=new a,s=e.split(i),l=0,u=function(){return e()+(e()||"");function e(){return l<s.length?s[l++]:void 0}},c=1,g=0,p=null;return n.eachMapping((function(e){if(null!==p){if(!(c<e.generatedLine)){var n=(r=s[l]||"").substr(0,e.generatedColumn-g);return s[l]=r.substr(e.generatedColumn-g),g=e.generatedColumn,h(p,n),void(p=e)}h(p,u()),c++,g=0}for(;c<e.generatedLine;)t.add(u()),c++;if(g<e.generatedColumn){var r=s[l]||"";t.add(r.substr(0,e.generatedColumn)),s[l]=r.substr(e.generatedColumn),g=e.generatedColumn}p=e}),this),l<s.length&&(p&&h(p,u()),t.add(s.splice(l).join(""))),n.sources.forEach((function(e){var i=n.sourceContentFor(e);null!=i&&(null!=r&&(e=o.join(r,e)),t.setSourceContent(e,i))})),t;function h(e,n){if(null===e||void 0===e.source)t.add(n);else{var i=r?o.join(r,e.source):e.source;t.add(new a(e.originalLine,e.originalColumn,i,n,e.name))}}},a.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e[s]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},a.prototype.prepend=function(e){if(Array.isArray(e))for(var n=e.length-1;n>=0;n--)this.prepend(e[n]);else{if(!e[s]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},a.prototype.walk=function(e){for(var n,r=0,t=this.children.length;r<t;r++)(n=this.children[r])[s]?n.walk(e):""!==n&&e(n,{source:this.source,line:this.line,column:this.column,name:this.name})},a.prototype.join=function(e){var n,r,t=this.children.length;if(t>0){for(n=[],r=0;r<t-1;r++)n.push(this.children[r]),n.push(e);n.push(this.children[r]),this.children=n}return this},a.prototype.replaceRight=function(e,n){var r=this.children[this.children.length-1];return r[s]?r.replaceRight(e,n):"string"==typeof r?this.children[this.children.length-1]=r.replace(e,n):this.children.push("".replace(e,n)),this},a.prototype.setSourceContent=function(e,n){this.sourceContents[o.toSetString(e)]=n},a.prototype.walkSourceContents=function(e){for(var n=0,r=this.children.length;n<r;n++)this.children[n][s]&&this.children[n].walkSourceContents(e);var t=Object.keys(this.sourceContents);for(n=0,r=t.length;n<r;n++)e(o.fromSetString(t[n]),this.sourceContents[t[n]])},a.prototype.toString=function(){var e="";return this.walk((function(n){e+=n})),e},a.prototype.toStringWithSourceMap=function(e){var n={code:"",line:1,column:0},r=new t(e),o=!1,i=null,s=null,a=null,l=null;return this.walk((function(e,t){n.code+=e,null!==t.source&&null!==t.line&&null!==t.column?(i===t.source&&s===t.line&&a===t.column&&l===t.name||r.addMapping({source:t.source,original:{line:t.line,column:t.column},generated:{line:n.line,column:n.column},name:t.name}),i=t.source,s=t.line,a=t.column,l=t.name,o=!0):o&&(r.addMapping({generated:{line:n.line,column:n.column}}),i=null,o=!1);for(var u=0,c=e.length;u<c;u++)10===e.charCodeAt(u)?(n.line++,n.column=0,u+1===c?(i=null,o=!1):o&&r.addMapping({source:t.source,original:{line:t.line,column:t.column},generated:{line:n.line,column:n.column},name:t.name})):n.column++})),this.walkSourceContents((function(e,n){r.setSourceContent(e,n)})),{code:n.code,map:r}}},25113:(e,n)=>{n.getArg=function(e,n,r){if(n in e)return e[n];if(3===arguments.length)return r;throw new Error('"'+n+'" is a required argument.')};var r=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,t=/^data:.+\,.+$/;function o(e){var n=e.match(r);return n?{scheme:n[1],auth:n[2],host:n[3],port:n[4],path:n[5]}:null}function i(e){var n="";return e.scheme&&(n+=e.scheme+":"),n+="//",e.auth&&(n+=e.auth+"@"),e.host&&(n+=e.host),e.port&&(n+=":"+e.port),e.path&&(n+=e.path),n}n.urlParse=o,n.urlGenerate=i;var s,a,l=(s=function(e){var r=e,t=o(e);if(t){if(!t.path)return e;r=t.path}for(var s=n.isAbsolute(r),a=[],l=0,u=0;;){if(l=u,-1===(u=r.indexOf("/",l))){a.push(r.slice(l));break}for(a.push(r.slice(l,u));u<r.length&&"/"===r[u];)u++}var c,g=0;for(u=a.length-1;u>=0;u--)"."===(c=a[u])?a.splice(u,1):".."===c?g++:g>0&&(""===c?(a.splice(u+1,g),g=0):(a.splice(u,2),g--));return""===(r=a.join("/"))&&(r=s?"/":"."),t?(t.path=r,i(t)):r},a=[],function(e){for(var n=0;n<a.length;n++)if(a[n].input===e){var r=a[0];return a[0]=a[n],a[n]=r,a[0].result}var t=s(e);return a.unshift({input:e,result:t}),a.length>32&&a.pop(),t});function u(e,n){""===e&&(e="."),""===n&&(n=".");var r=o(n),s=o(e);if(s&&(e=s.path||"/"),r&&!r.scheme)return s&&(r.scheme=s.scheme),i(r);if(r||n.match(t))return n;if(s&&!s.host&&!s.path)return s.host=n,i(s);var a="/"===n.charAt(0)?n:l(e.replace(/\/+$/,"")+"/"+n);return s?(s.path=a,i(s)):a}n.normalize=l,n.join=u,n.isAbsolute=function(e){return"/"===e.charAt(0)||r.test(e)},n.relative=function(e,n){""===e&&(e="."),e=e.replace(/\/$/,"");for(var r=0;0!==n.indexOf(e+"/");){var t=e.lastIndexOf("/");if(t<0)return n;if((e=e.slice(0,t)).match(/^([^\/]+:\/)?\/*$/))return n;++r}return Array(r+1).join("../")+n.substr(e.length+1)};var c=!("__proto__"in Object.create(null));function g(e){return e}function p(e){if(!e)return!1;var n=e.length;if(n<9)return!1;if(95!==e.charCodeAt(n-1)||95!==e.charCodeAt(n-2)||111!==e.charCodeAt(n-3)||116!==e.charCodeAt(n-4)||111!==e.charCodeAt(n-5)||114!==e.charCodeAt(n-6)||112!==e.charCodeAt(n-7)||95!==e.charCodeAt(n-8)||95!==e.charCodeAt(n-9))return!1;for(var r=n-10;r>=0;r--)if(36!==e.charCodeAt(r))return!1;return!0}function h(e,n){return e===n?0:null===e?1:null===n?-1:e>n?1:-1}n.toSetString=c?g:function(e){return p(e)?"$"+e:e},n.fromSetString=c?g:function(e){return p(e)?e.slice(1):e},n.compareByOriginalPositions=function(e,n,r){var t=h(e.source,n.source);return 0!==t||0!=(t=e.originalLine-n.originalLine)||0!=(t=e.originalColumn-n.originalColumn)||r||0!=(t=e.generatedColumn-n.generatedColumn)||0!=(t=e.generatedLine-n.generatedLine)?t:h(e.name,n.name)},n.compareByOriginalPositionsNoSource=function(e,n,r){var t;return 0!=(t=e.originalLine-n.originalLine)||0!=(t=e.originalColumn-n.originalColumn)||r||0!=(t=e.generatedColumn-n.generatedColumn)||0!=(t=e.generatedLine-n.generatedLine)?t:h(e.name,n.name)},n.compareByGeneratedPositionsDeflated=function(e,n,r){var t=e.generatedLine-n.generatedLine;return 0!==t||0!=(t=e.generatedColumn-n.generatedColumn)||r||0!==(t=h(e.source,n.source))||0!=(t=e.originalLine-n.originalLine)||0!=(t=e.originalColumn-n.originalColumn)?t:h(e.name,n.name)},n.compareByGeneratedPositionsDeflatedNoLine=function(e,n,r){var t=e.generatedColumn-n.generatedColumn;return 0!==t||r||0!==(t=h(e.source,n.source))||0!=(t=e.originalLine-n.originalLine)||0!=(t=e.originalColumn-n.originalColumn)?t:h(e.name,n.name)},n.compareByGeneratedPositionsInflated=function(e,n){var r=e.generatedLine-n.generatedLine;return 0!==r||0!=(r=e.generatedColumn-n.generatedColumn)||0!==(r=h(e.source,n.source))||0!=(r=e.originalLine-n.originalLine)||0!=(r=e.originalColumn-n.originalColumn)?r:h(e.name,n.name)},n.parseSourceMapInput=function(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))},n.computeSourceURL=function(e,n,r){if(n=n||"",e&&("/"!==e[e.length-1]&&"/"!==n[0]&&(e+="/"),n=e+n),r){var t=o(r);if(!t)throw new Error("sourceMapURL could not be parsed");if(t.path){var s=t.path.lastIndexOf("/");s>=0&&(t.path=t.path.substring(0,s+1))}n=u(i(t),n)}return l(n)}},1631:(e,n,r)=>{r(58203).x,n.SourceMapConsumer=r(40396).SourceMapConsumer,r(2573)}}]);
//# sourceMappingURL=9245.9c218b94.chunk.js.map