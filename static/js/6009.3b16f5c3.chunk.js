"use strict";(globalThis.webpackChunkfield_sustainability_helper=globalThis.webpackChunkfield_sustainability_helper||[]).push([[6009,9951],{71277:(t,e,n)=>{function i(t){return t=t||globalThis.location.hostname,c.some((e=>{var n;return null!=(null==(n=t)?void 0:n.match(e))}))}function r(t,e){return t&&(e=e||globalThis.location.hostname)?null!=e.match(o)||null!=e.match(l)?t.replace("static.arcgis.com","staticdev.arcgis.com"):null!=e.match(a)||null!=e.match(s)?t.replace("static.arcgis.com","staticqa.arcgis.com"):t:t}n.d(e,{XO:()=>i,pJ:()=>r});const o=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,l=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,o,a,/^jsapps.esri.com$/,l,s]},36009:(t,e,n)=>{n.r(e),n.d(e,{getPatternDescriptor:()=>L,getSizeFromOptions:()=>D,getSymbolLayerFill:()=>z,previewSymbol3D:()=>I});var i=n(65905),r=n(86950),o=(n(93169),n(10064)),a=n(32718),l=n(92026),s=n(66978),c=n(17842),h=n(79563),u=n(29122),p=n(73627),f=n(37817),m=n(69157),d=n(74579),y=n(19951);const g=f.b_.size,b=f.b_.maxSize,w=f.b_.maxOutlineSize,x=f.b_.lineWidth,v=f.b_.tallSymbolWidth,k=a.Z.getLogger("esri.symbols.support.previewSymbol3D");function M(t){const e=t.outline,n=(0,l.pC)(t.material)?t.material.color:null,i=(0,l.pC)(n)?n.toHex():null;if((0,l.Wi)(e)||"pattern"in e&&(0,l.pC)(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style)return"fill"===t.type&&"#ffffff"===i?{color:"#bdc3c7",width:.75}:null;const r=(0,c.F2)(e.size)||0;return{color:"rgba("+((0,l.pC)(e.color)?e.color.toRgba():"255,255,255,1")+")",width:Math.min(r,w),style:"pattern"in e&&(0,l.pC)(e.pattern)&&"style"===e.pattern.type?(0,h.Sp)(e.pattern.style):null,join:"butt",cap:"patternCap"in e?e.patternCap:"butt"}}function S(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const n=t.a,i=(0,r._Y)(t),o=i.h,a=i.s/e,l=100-(100-i.v)/e,{r:s,g:c,b:h}=(0,r.xr)({h:o,s:a,v:l});return[s,c,h,n]}function j(t){return"water"===t.type?(0,l.Wi)(t.color)?null:t.color:(0,l.Wi)(t.material)||(0,l.Wi)(t.material.color)?null:t.material.color}function z(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=j(t);if(!n){if("fill"===t.type)return null;const n=h.Ne.r,i=(0,f.uH)(n,e);return[i,i,i,100]}const i=n.toRgba();for(let r=0;r<3;r++)i[r]=(0,f.uH)(i[r],e);return i}async function L(t,e){const n=t.style;return"none"===n?null:{type:"pattern",x:0,y:0,src:await(0,h.Od)((0,i.V)(`esri/symbols/patterns/${n}.png`),e.toCss(!0)),width:5,height:5}}function N(t){return t.outline?M(t):{color:"rgba(0, 0, 0, 1)",width:1.5}}function $(t,e){const n=j(t);if(!n)return null;let i="rgba(";return i+=(0,f.uH)(n.r,e)+",",i+=(0,f.uH)(n.g,e)+",",i+=(0,f.uH)(n.b,e)+",",i+n.a+");"}function Z(t,e){const n=$(t,e);return n?"pattern"in t&&(0,l.pC)(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style?null:{color:n,width:Math.min(t.size?(0,c.F2)(t.size):.75,w),style:"pattern"in t&&(0,l.pC)(t.pattern)&&"style"===t.pattern.type?(0,h.Sp)(t.pattern.style):null,cap:"cap"in t?t.cap:null,join:"join"in t?"miter"===t.join?(0,c.F2)(2):t.join:null}:{}}function C(t,e,n){const i=.75*n;return{type:"linear",x1:i?.25*i:0,y1:i?.5*i:0,x2:i||4,y2:i?.5*i:4,colors:[{color:t,offset:0},{color:e,offset:1}]}}function D(t){const e="number"==typeof(null==t?void 0:t.size)?null==t?void 0:t.size:null;return e?(0,c.F2)(e):null}function F(t,e){const n=D(e),r=e&&e.maxSize?(0,c.F2)(e.maxSize):null,o=e&&e.disableUpsampling,a=t.symbolLayers,l=[];let h=0,w=0;const x=a.getItemAt(a.length-1);let S;return x&&"icon"===x.type&&(S=x.size&&(0,c.F2)(x.size)),a.forEach((a=>{if("icon"!==a.type&&"object"!==a.type)return;const s="icon"===a.type?a.size&&(0,c.F2)(a.size):0,x=n||s?Math.ceil(Math.min(n||s,r||b)):g;if(a&&a.resource&&a.resource.href){const e=function(t,e){const n=e&&e.resource,r=n&&n.href;if(t.thumbnail&&t.thumbnail.url)return Promise.resolve(t.thumbnail.url);if(r&&"object"!==e.type)return Promise.resolve((0,d.nf)(t,e));const o=(0,i.V)("esri/images/Legend/legend3dsymboldefault.png");return t.styleOrigin&&(t.styleOrigin.styleName||t.styleOrigin.styleUrl)?(0,y.resolveWebStyleSymbol)(t.styleOrigin,{portal:t.styleOrigin.portal},"webRef").catch((t=>t)).then((t=>{var e;return(null==t||null==(e=t.thumbnail)?void 0:e.url)||o})):Promise.resolve(o)}(t,a).then((function(t){const e=a.get("material.color"),n=function(t){return"icon"===t.type?"multiply":"tint"}(a);return(0,m.r)(t,x,e,n,o)})).then((function(t){const e=t.width,n=t.height;return h=Math.max(h,e),w=Math.max(w,n),[{shape:{type:"image",x:0,y:0,width:e,height:n,src:t.url},fill:null,stroke:null}]}));l.push(e)}else{var k;let t=x;"icon"===a.type&&S&&n&&(t=x*(s/S));const i="tall"===(null==e?void 0:e.symbolConfig)||(null==e||null==(k=e.symbolConfig)?void 0:k.isTall)||"object"===a.type&&function(t){const e=t.depth,n=t.height,i=t.width;return i&&e&&n&&i===e&&i<n}(a);h=Math.max(h,i?v:t),w=Math.max(w,t),l.push(Promise.resolve(function(t,e,n){const i=[];if(!t)return i;switch(t.type){case"icon":{const n=0,r=0,o=e,a=e;switch(t.resource&&t.resource.primitive||u.S){case"circle":i.push({shape:{type:"circle",cx:0,cy:0,r:.5*e},fill:z(t,0),stroke:M(t)});break;case"square":i.push({shape:{type:"path",path:[{command:"M",values:[n,a]},{command:"L",values:[n,r]},{command:"L",values:[o,r]},{command:"L",values:[o,a]},{command:"Z",values:[]}]},fill:z(t,0),stroke:M(t)});break;case"triangle":i.push({shape:{type:"path",path:[{command:"M",values:[n,a]},{command:"L",values:[.5*o,r]},{command:"L",values:[o,a]},{command:"Z",values:[]}]},fill:z(t,0),stroke:M(t)});break;case"cross":i.push({shape:{type:"path",path:[{command:"M",values:[.5*o,r]},{command:"L",values:[.5*o,a]},{command:"M",values:[n,.5*a]},{command:"L",values:[o,.5*a]}]},stroke:N(t)});break;case"x":i.push({shape:{type:"path",path:[{command:"M",values:[n,r]},{command:"L",values:[o,a]},{command:"M",values:[o,r]},{command:"L",values:[n,a]}]},stroke:N(t)});break;case"kite":i.push({shape:{type:"path",path:[{command:"M",values:[n,.5*a]},{command:"L",values:[.5*o,r]},{command:"L",values:[o,.5*a]},{command:"L",values:[.5*o,a]},{command:"Z",values:[]}]},fill:z(t,0),stroke:M(t)})}break}case"object":switch(t.resource&&t.resource.primitive||p.S){case"cone":{const r=C(z(t,0),z(t,-.6),n?v:e),o=(0,f.TE)(e,n);i.push({shape:o[0],fill:r}),i.push({shape:o[1],fill:r});break}case"inverted-cone":{const n=z(t,0),r=C(n,z(t,-.6),e),o=(0,f.DY)(e);i.push({shape:o[0],fill:r}),i.push({shape:o[1],fill:n});break}case"cube":{const r=(0,f.Pc)(e,n);i.push({shape:r[0],fill:z(t,0)}),i.push({shape:r[1],fill:z(t,-.3)}),i.push({shape:r[2],fill:z(t,-.5)});break}case"cylinder":{const r=C(z(t,0),z(t,-.6),n?v:e),o=(0,f.EB)(e,n);i.push({shape:o[0],fill:r}),i.push({shape:o[1],fill:r}),i.push({shape:o[2],fill:z(t,0)});break}case"diamond":{const n=(0,f.XX)(e);i.push({shape:n[0],fill:z(t,-.3)}),i.push({shape:n[1],fill:z(t,0)}),i.push({shape:n[2],fill:z(t,-.3)}),i.push({shape:n[3],fill:z(t,-.7)});break}case"sphere":{const n=C(z(t,0),z(t,-.6));n.x1=0,n.y1=0,n.x2=.25*e,n.y2=.25*e,i.push({shape:{type:"circle",cx:0,cy:0,r:.5*e},fill:n});break}case"tetrahedron":{const n=(0,f.tp)(e);i.push({shape:n[0],fill:z(t,-.3)}),i.push({shape:n[1],fill:z(t,0)}),i.push({shape:n[2],fill:z(t,-.6)});break}}}return i}(a,t,i)))}})),(0,s.as)(l).then((function(t){const n=[];return t.forEach((function(t){t.value?n.push(t.value):t.error&&k.warn("error while building swatchInfo!",t.error)})),(0,m.w)(n,[h,w],{node:e&&e.node,scale:!1,opacity:e&&e.opacity})}))}function I(t,e){if(0===t.symbolLayers.length)return Promise.reject(new o.Z("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(t.type){case"point-3d":return F(t,e);case"line-3d":return function(t,e){const n=t.symbolLayers,i=[],r=(0,d.YW)(t),o=D(e),a=(e&&e.maxSize?(0,c.F2)(e.maxSize):null)||w;let s,h=0,u=0;return n.forEach(((t,e)=>{if(!t)return;if("line"!==t.type&&"path"!==t.type)return;const n=[];switch(t.type){case"line":{const i=Z(t,0);if((0,l.Wi)(i))break;const r=i&&i.width||0;0===e&&(s=r);const c=Math.min(o||r,a),p=0===e?c:o?c*(r/s):c,f=p>x/2?2*p:x;u=Math.max(u,p),h=Math.max(h,f),i.width=p,n.push({shape:{type:"path",path:[{command:"M",values:[0,.5*u]},{command:"L",values:[h,.5*u]}]},stroke:i});break}case"path":{const e=Math.min(o||g,a),i=z(t,0),r=z(t,-.2),l=$(t,-.4),s=l?{color:l,width:1}:{};if("quad"===t.profile){const e=t.width,o=t.height,a=(0,f.eb)(e&&o?e/o:1,0===o,0===e),l={...s,join:"bevel"};n.push({shape:a[0],fill:r,stroke:l}),n.push({shape:a[1],fill:r,stroke:l}),n.push({shape:a[2],fill:i,stroke:l})}else n.push({shape:f.JZ.pathSymbol3DLayer[0],fill:r,stroke:s}),n.push({shape:f.JZ.pathSymbol3DLayer[1],fill:i,stroke:s});u=Math.max(u,e),h=u}}i.push(n)})),Promise.resolve((0,m.w)(i,[h,u],{node:e&&e.node,scale:r,opacity:e&&e.opacity}))}(t,e);case"polygon-3d":case"mesh-3d":return async function(t,e){const n="mesh-3d"===t.type,i=t.symbolLayers,r=D(e),o=e&&e.maxSize?(0,c.F2)(e.maxSize):null,a=r||g,s=[];let h=0,u=0,p=!1;for(let c=0;c<i.length;c++){const t=i.getItemAt(c),e=[];if(n&&"fill"!==t.type)continue;const r=f.JZ.fill[0];switch(t.type){case"fill":{const i=M(t),s=Math.min(a,o||b);h=Math.max(h,s),u=Math.max(u,s),p=!0;let c=z(t,0);const f="pattern"in t&&t.pattern,m=j(t);!n&&(0,l.pC)(f)&&"style"===f.type&&"solid"!==f.style&&m&&(c=await L(f,m)),e.push({shape:r,fill:c,stroke:i});break}case"line":{const n=Z(t,0);if((0,l.Wi)(n))break;const i={stroke:n,shape:r};h=Math.max(h,g),u=Math.max(u,g),e.push(i);break}case"extrude":{const n={join:"round",width:1,...Z(t,-.4)},i=z(t,0),r=z(t,-.2),l=Math.min(a,o||b),s=(0,f.EV)(l);n.width=1,e.push({shape:s[0],fill:r,stroke:n}),e.push({shape:s[1],fill:r,stroke:n}),e.push({shape:s[2],fill:i,stroke:n});const c=g,p=.7*g+.5*l;h=Math.max(h,c),u=Math.max(u,p);break}case"water":{const n=j(t),i=S(n),r=S(n,2),l=S(n,3),s=(0,f.ht)();p=!0,e.push({shape:s[0],fill:i}),e.push({shape:s[1],fill:r}),e.push({shape:s[2],fill:l});const c=Math.min(a,o||b);h=Math.max(h,c),u=Math.max(u,c);break}}s.push(e)}return Promise.resolve((0,m.w)(s,[h,u],{node:e&&e.node,scale:p,opacity:e&&e.opacity}))}(t,e)}return Promise.reject(new o.Z("symbolPreview: swatchInfo3D","symbol not supported."))}},69157:(t,e,n)=>{n.d(e,{r:()=>m,w:()=>p});var i=n(19545),r=n(76200),o=n(86950),a=n(10064),l=n(93169),s=(n(42877),n(88367)),c=n(99653),h=n(74579);const u=(0,s.E)();function p(t,e,n){const i=Math.ceil(e[0]),r=Math.ceil(e[1]);if(!t.some((t=>!!t.length)))return null;const o=n&&n.node||document.createElement("div");return null!=n.opacity&&(o.style.opacity=n.opacity.toString()),null!=n.effectView&&(o.style.filter=(0,h.wJ)(n.effectView)),u.append(o,c.KB.bind(null,t,i,r,n)),o}function f(t,e,n,i,r){switch(r){case"multiply":t[e+0]*=n[0],t[e+1]*=n[1],t[e+2]*=n[2],t[e+3]*=n[3];break;default:{const r=(0,o._Y)({r:t[e+0],g:t[e+1],b:t[e+2]});r.h=i.h,r.s=i.s,r.v=r.v/100*i.v;const a=(0,o.xr)(r);t[e+0]=a.r,t[e+1]=a.g,t[e+2]=a.b,t[e+3]*=n[3];break}}}function m(t,e,n,s,c){return function(t,e,n){return t?(0,r.default)(t,{responseType:"image"}).then((t=>{const i=t.data,r=i.width,o=i.height,a=r/o;let l=e;if(n){const t=Math.max(r,o);l=Math.min(l,t)}return{image:i,width:a<=1?Math.ceil(l*a):l,height:a<=1?l:Math.ceil(l/a)}})):Promise.reject(new a.Z("renderUtils: imageDataSize","href not provided."))}(t,e,c).then((r=>{const a=r.width?r.width:e,c=r.height?r.height:e;if(r.image&&function(t,e){return!(!t||"ignore"===e)&&("multiply"!==e||255!==t.r||255!==t.g||255!==t.b||1!==t.a)}(n,s)){let e=r.image.width,i=r.image.height;(0,l.Z)("edge")&&/\.svg$/i.test(t)&&(e-=1,i-=1);const h=function(t,e){t=Math.ceil(t),e=Math.ceil(e);const n=document.createElement("canvas");n.width=t,n.height=e,n.style.width=t+"px",n.style.height=e+"px";const i=n.getContext("2d");return i.clearRect(0,0,t,e),i}(a,c);h.drawImage(r.image,0,0,e,i,0,0,a,c);const u=h.getImageData(0,0,a,c),p=[n.r/255,n.g/255,n.b/255,n.a],m=(0,o._Y)(n);for(let t=0;t<u.data.length;t+=4)f(u.data,t,p,m,s);h.putImageData(u,0,0),t=h.canvas.toDataURL("image/png")}else{const e=i.id&&i.id.findCredential(t);if(e&&e.token){const n=-1===t.indexOf("?")?"?":"&";t=`${t}${n}token=${e.token}`}}return{url:t,width:a,height:c}})).catch((function(){return{url:t,width:e,height:e}}))}},99653:(t,e,n)=>{n.d(e,{A5:()=>C,KB:()=>I,al:()=>D,ch:()=>j,iL:()=>F,jA:()=>k,kQ:()=>M,vq:()=>v});var i=n(51995),r=n(93169),o=n(11245),a=n(22018),l=(n(80975),n(32718),n(67005));let s=0,c=0;const h=(0,r.Z)("android"),u=(0,r.Z)("chrome")||h&&h>=4?"auto":"optimizeLegibility",p={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},f=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;let m={},d={};const y={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},g=Math.PI;let b=1;function w(t,e){const n=t*(g/180);return Math.abs(e*Math.sin(n))+Math.abs(e*Math.cos(n))}function x(t){return t.map((t=>`${t.command} ${t.values.join(" ")}`)).join(" ").trim()}function v(t,e,n,i){if(t){if("circle"===t.type)return(0,l.u)("circle",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,r:t.r});if("ellipse"===t.type)return(0,l.u)("ellipse",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry});if("rect"===t.type)return(0,l.u)("rect",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",x:t.x,y:t.y,width:t.width,height:t.height});if("image"===t.type)return(0,l.u)("image",{href:t.src,x:t.x,y:t.y,width:t.width,height:t.height,preserveAspectRatio:"none"});if("path"===t.type){const i="string"!=typeof t.path?x(t.path):t.path;return(0,l.u)("path",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",d:i})}if("text"===t.type)return(0,l.u)("text",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4","text-anchor":i.align,"text-decoration":i.decoration,kerning:i.kerning,rotate:i.rotate,"text-rendering":u,"font-style":i.font.style,"font-variant":i.font.variant,"font-weight":i.font.weight,"font-size":i.font.size,"font-family":i.font.family,x:t.x,y:t.y},t.text)}return null}function k(t){const e={fill:"none",pattern:null,linearGradient:null};if(t)if("type"in t&&"pattern"===t.type){const n="patternId-"+ ++s;e.fill=`url(#${n})`,e.pattern={id:n,x:t.x,y:t.y,width:t.width,height:t.height,image:{x:0,y:0,width:t.width,height:t.height,href:t.src}}}else if("type"in t&&"linear"===t.type){const n="linearGradientId-"+ ++c;e.fill=`url(#${n})`,e.linearGradient={id:n,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stops:t.colors.map((t=>({offset:t.offset,color:t.color&&new i.Z(t.color).toString()})))}}else if(t){const n=new i.Z(t);e.fill=n.toString()}return e}function M(t){const e={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"};if(t&&(null!=t.width&&(e.width=t.width),t.cap&&(e.cap=t.cap),t.join&&(e.join=t.join.toString()),t.color&&(e.color=new i.Z(t.color).toString()),t.style)){let n=null;if(t.style in y&&(n=y[t.style]),Array.isArray(n)){n=n.slice(0);for(let e=0;e<n.length;++e)n[e]*=t.width;if("butt"!==t.cap){for(let e=0;e<n.length;e+=2)n[e]-=t.width,n[e]<1&&(n[e]=1);for(let e=1;e<n.length;e+=2)n[e]+=t.width}n=n.join(",")}e.dashArray=n}return e}function S(t,e){const n={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};return t&&(n.align=t.align,n.decoration=t.decoration,n.kerning=t.kerning?"auto":"0",n.rotate=t.rotated?"90":"0",n.font.style=e.style||"normal",n.font.variant=e.variant||"normal",n.font.weight=e.weight||"normal",n.font.size=e.size&&e.size.toString()||"10pt",n.font.family=e.family||"serif"),n}function j(t){const{pattern:e,linearGradient:n}=t;if(e)return(0,l.u)("pattern",{id:e.id,patternUnits:"userSpaceOnUse",x:e.x,y:e.y,width:e.width,height:e.height},(0,l.u)("image",{x:e.image.x,y:e.image.y,width:e.image.width,height:e.image.height,href:e.image.href}));if(n){const t=n.stops.map(((t,e)=>(0,l.u)("stop",{key:`${e}-stop`,offset:t.offset,"stop-color":t.color})));return(0,l.u)("linearGradient",{id:n.id,gradientUnits:"userSpaceOnUse",x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2},t)}return null}function z(t,e,n){return(0,a.t)(t,(0,a.c)(t),[e,n])}function L(t,e,n,i,r){return(0,a.s)(t,(0,a.c)(t),[e,n]),t[4]=t[4]*e-i*e+i,t[5]=t[5]*n-r*n+r,t}function N(t,e){m&&"left"in m?(m.left>t&&(m.left=t),m.right<t&&(m.right=t),m.top>e&&(m.top=e),m.bottom<e&&(m.bottom=e)):m={left:t,bottom:e,right:t,top:e}}function $(t){const e=t.args,n=e.length;let i;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(i=0;i<n;i+=2)N(e[i],e[i+1]);d.x=e[n-2],d.y=e[n-1];break;case"H":for(i=0;i<n;++i)N(e[i],d.y);d.x=e[n-1];break;case"V":for(i=0;i<n;++i)N(d.x,e[i]);d.y=e[n-1];break;case"m":{let t=0;"x"in d||(N(d.x=e[0],d.y=e[1]),t=2);for(i=t;i<n;i+=2)N(d.x+=e[i],d.y+=e[i+1]);break}case"l":case"t":for(i=0;i<n;i+=2)N(d.x+=e[i],d.y+=e[i+1]);break;case"h":for(i=0;i<n;++i)N(d.x+=e[i],d.y);break;case"v":for(i=0;i<n;++i)N(d.x,d.y+=e[i]);break;case"c":for(i=0;i<n;i+=6)N(d.x+e[i],d.y+e[i+1]),N(d.x+e[i+2],d.y+e[i+3]),N(d.x+=e[i+4],d.y+=e[i+5]);break;case"s":case"q":for(i=0;i<n;i+=4)N(d.x+e[i],d.y+e[i+1]),N(d.x+=e[i+2],d.y+=e[i+3]);break;case"A":for(i=0;i<n;i+=7)N(e[i+5],e[i+6]);d.x=e[n-2],d.y=e[n-1];break;case"a":for(i=0;i<n;i+=7)N(d.x+=e[i+5],d.y+=e[i+6])}}function Z(t,e,n){const i=p[t.toLowerCase()];let r;"number"==typeof i&&(i?e.length>=i&&(r={action:t,args:e.slice(0,e.length-e.length%i)},n.push(r),$(r)):(r={action:t,args:[]},n.push(r),$(r)))}function C(t){const e={x:0,y:0,width:0,height:0};if("circle"===t.type)e.x=t.cx-t.r,e.y=t.cy-t.r,e.width=2*t.r,e.height=2*t.r;else if("ellipse"===t.type)e.x=t.cx-t.rx,e.y=t.cy-t.ry,e.width=2*t.rx,e.height=2*t.ry;else if("image"===t.type||"rect"===t.type)e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height;else if("path"===t.type){const n=function(t){const e=("string"!=typeof t.path?x(t.path):t.path).match(f),n=[];if(m={},d={},!e)return null;let i="",r=[];const o=e.length;for(let l=0;l<o;++l){const t=e[l],o=parseFloat(t);isNaN(o)?(i&&Z(i,r,n),r=[],i=t):r.push(o)}Z(i,r,n);const a={x:0,y:0,width:0,height:0};return m&&"left"in m&&(a.x=m.left,a.y=m.top,a.width=m.right-m.left,a.height=m.bottom-m.top),a}(t);e.x=n.x,e.y=n.y,e.width=n.width,e.height=n.height}return e}function D(t){const e={x:0,y:0,width:0,height:0};let n=null,i=Number.NEGATIVE_INFINITY,r=Number.NEGATIVE_INFINITY;for(const o of t)n?(n.x=Math.min(n.x,o.x),n.y=Math.min(n.y,o.y),i=Math.max(i,o.x+o.width),r=Math.max(r,o.y+o.height)):(n=e,n.x=o.x,n.y=o.y,i=o.x+o.width,r=o.y+o.height);return n&&(n.width=i-n.x,n.height=r-n.y),n}function F(t,e,n,i,r,l,s,c,h){let u=(s&&l?w(l,e):e)/2,p=(s&&l?w(l,n):n)/2;if(h){const t=h[0],e=h[1];u=(s&&l?w(l,t):t)/2,p=(s&&l?w(l,e):e)/2}const f=t.width+i,m=t.height+i,d=(0,o.c)(),y=(0,o.c)();let g=!1;if(r&&0!==f&&0!==m){const t=e!==n?e/n:f/m,i=e>n?e:n;let r=1,o=1;isNaN(i)||(t>1?(r=i/f,o=i/t/m):(o=i/m,r=i*t/f)),(0,a.m)(y,y,L(d,r,o,u,p)),g=!0}const b=t.x+(f-i)/2,x=t.y+(m-i)/2;if((0,a.m)(y,y,z(d,u-b,p-x)),!g&&(f>e||m>n)){const t=f/e>m/n,i=(t?e:n)/(t?f:m);(0,a.m)(y,y,L(d,i,i,b,x))}return l&&(0,a.m)(y,y,function(t,e,n,i){const r=e%360*Math.PI/180;(0,a.r)(t,(0,a.c)(t),r);const o=Math.cos(r),l=Math.sin(r),s=t[4],c=t[5];return t[4]=s*o-c*l+i*l-n*o+n,t[5]=c*o+s*l-n*l-i*o+i,t}(d,l,b,x)),c&&(0,a.m)(y,y,z(d,c[0],c[1])),`matrix(${y[0]},${y[1]},${y[2]},${y[3]},${y[4]},${y[5]})`}function I(t,e,n,i){const r=[],o=[],a=++b,s=function(t,e,n){const i=null==t?void 0:t.effects.find((t=>"bloom"===t.type));if(!i)return null;const{strength:r,radius:o}=i,a=r>0?o:0,s=(r+a)*e,c=4*r+1;return(0,l.u)("filter",{id:`bloom${n}`,x:"-100%",y:"-100%",width:"300%",height:"300%",filterUnits:"userSpaceOnUse"},(0,l.u)("feMorphology",{operator:"dilate",radius:(r+.5*a)*(5**(e/100)*(.4+e/100)),in:"SourceGraphic",result:"dilate"}),(0,l.u)("feGaussianBlur",{in:"dilate",stdDeviation:s/25,result:"blur"}),(0,l.u)("feGaussianBlur",{in:"blur",stdDeviation:s/50,result:"intensityBlur"}),(0,l.u)("feComponentTransfer",{in:"SourceGraphic",result:"intensityBrightness"},(0,l.u)("feFuncR",{type:"linear",slope:c}),(0,l.u)("feFuncG",{type:"linear",slope:c}),(0,l.u)("feFuncB",{type:"linear",slope:c})),(0,l.u)("feMerge",null,(0,l.u)("feMergeNode",{in:"intensityBlur"}),(0,l.u)("feMergeNode",{in:"intensityBrightness"}),(0,l.u)("feGaussianBlur",{stdDeviation:r/10})))}(null==i?void 0:i.effectView,e,a);let c=null;if(s){var h;const t=null==i||null==(h=i.effectView)?void 0:h.effects.find((t=>"bloom"===t.type)),r=(t.strength?t.strength+t.radius/2:0)/3,o=e+e*r,a=n+n*r;c=[Math.max(o,10),Math.max(a,10)]}for(const u of t){const t=[],a=[];let s=0,h=0,p=0;for(const e of u){const{shape:n,fill:i,stroke:o,font:l,offset:c}=e;s+=o&&o.width||0;const u=k(i),f=M(o),m="text"===n.type?S(n,l):null;r.push(j(u)),t.push(v(n,u.fill,f,m)),a.push(C(n)),c&&(h+=c[0],p+=c[1])}const f=F(D(a),e,n,s,null==i?void 0:i.scale,null==i?void 0:i.rotation,null==i?void 0:i.useRotationSize,[h,p],c);o.push((0,l.u)("g",{transform:f},t))}return null!=i&&i.useRotationSize&&null!=i&&i.rotation&&(e=w(null==i?void 0:i.rotation,e),n=w(null==i?void 0:i.rotation,n)),s&&(e=c[0],n=c[1]),(0,l.u)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,style:"display: block;"},s,(0,l.u)("defs",null,r),s?(0,l.u)("g",{filter:`url(#bloom${a})`},o):o)}},19951:(t,e,n)=>{n.r(e),n.d(e,{fetchSymbolFromStyle:()=>m,resolveWebStyleSymbol:()=>f});var i=n(51508),r=n(71277),o=n(10064),a=n(35995),l=n(70032),s=n(53283),c=n(192),h=n(1472),u=n(86423),p=n(81854);function f(t,e,n,i){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?function(t,e,n){const i=u.wm.replace(/\{SymbolName\}/gi,t.name);return(0,u.EJ)(i,n).then((t=>{const n=(0,u.KV)(t.data);return(0,c.im)(n,{portal:e.portal,url:(0,a.mN)((0,a.Yd)(i)),origin:"portal-item"})}))}(t,e,i):(0,u.n2)(t,e,i).then((r=>m(r,t.name,e,n,i))):Promise.reject(new o.Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function m(t,e,n,f,m){const d=t.data,y={portal:n&&n.portal||l.Z.getDefault(),url:(0,a.mN)(t.baseUrl),origin:"portal-item"},g=d.items.find((t=>t.name===e));if(!g){const t=`The symbol name '${e}' could not be found`;return Promise.reject(new o.Z("symbolstyleutils:symbol-name-not-found",t,{symbolName:e}))}let b=(0,s.f)((0,u.v9)(g,f),y),w=g.thumbnail&&g.thumbnail.href;const x=g.thumbnail&&g.thumbnail.imageData;(0,r.XO)()&&(b=(0,r.pJ)(b),w=(0,r.pJ)(w));const v={portal:n.portal,url:(0,a.mN)((0,a.Yd)(b)),origin:"portal-item"};return(0,u.EJ)(b,m).then((r=>{const o="cimRef"===f?(0,u.KV)(r.data):r.data,a=(0,c.im)(o,v);if(a&&(0,i.dU)(a)){if(w){const t=(0,s.f)(w,y);a.thumbnail=new p.p({url:t})}else x&&(a.thumbnail=new p.p({url:`data:image/png;base64,${x}`}));t.styleUrl?a.styleOrigin=new h.Z({portal:n.portal,styleUrl:t.styleUrl,name:e}):t.styleName&&(a.styleOrigin=new h.Z({portal:n.portal,styleName:t.styleName,name:e}))}return a}))}}}]);
//# sourceMappingURL=6009.3b16f5c3.chunk.js.map