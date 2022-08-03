"use strict";(globalThis.webpackChunkfield_sustainability_helper=globalThis.webpackChunkfield_sustainability_helper||[]).push([[8103],{8103:(t,e,n)=>{n.r(e),n.d(e,{previewSymbol2D:()=>w});var i=n(51995),o=n(10064),l=n(17842),a=n(79563),r=n(37817),s=n(69157);const c="picture-fill",h=r.b_.size,u=r.b_.maxSize,d=r.b_.maxOutlineSize,f=r.b_.lineWidth,p=document.createElement("canvas");function m(t,e){const n=p.getContext("2d"),i=[];return e&&(e.weight&&i.push(e.weight),e.size&&i.push(e.size+"px"),e.family&&i.push(e.family)),n.font=i.join(" "),n.measureText(t).width}function y(t){if(0===t.length)return 0;if(t.length>2){const e=(0,l.Wz)(1),n=parseFloat(t);switch(t.slice(-2)){case"px":return n;case"pt":return n*e;case"in":return 72*n*e;case"pc":return 12*n*e;case"mm":return 2.8346456692913384*n*e;case"cm":return 28.346456692913385*n*e}}return parseFloat(t)}function g(t){const e=null==t?void 0:t.size;return{width:null!=e&&"object"==typeof e&&"width"in e?(0,l.F2)(e.width):null,height:null!=e&&"object"==typeof e&&"height"in e?(0,l.F2)(e.height):null}}function w(t,e){var n,p;const w="number"==typeof(null==e?void 0:e.size)?null==e?void 0:e.size:null,x=null!=w?(0,l.F2)(w):null,v=null!=(null==e?void 0:e.maxSize)?(0,l.F2)(e.maxSize):null,k=null!=(null==e?void 0:e.opacity)?e.opacity:null,b=null!=(null==e?void 0:e.rotation)?e.rotation:"angle"in t?t.angle:null,M=(0,a._M)(t);let z=(0,a.mx)(t);if(M&&!z){const t="type"in M?null:new i.Z(M);"#ffffff"===(t?t.toHex():null)&&(z={color:"#bdc3c7",width:.75})}const j={shape:null,fill:null,stroke:z,offset:[0,0]};null!=(n=z)&&n.width&&(z.width=Math.min(z.width,d));const L=(null==(p=z)?void 0:p.width)||0;let S=null!=(null==e?void 0:e.size)&&(null==(null==e?void 0:e.scale)||(null==e?void 0:e.scale)),F=0,A=0,$=!1;switch(t.type){case"simple-marker":{const e=t.style,n=Math.min(null!=x?x:(0,l.F2)(t.size),v||u);switch(F=n,A=n,e){case"circle":j.shape={type:"circle",cx:0,cy:0,r:.5*n},S||(F+=L,A+=L);break;case"cross":j.shape={type:"path",path:[{command:"M",values:[0,.5*A]},{command:"L",values:[F,.5*A]},{command:"M",values:[.5*F,0]},{command:"L",values:[.5*F,A]}]};break;case"diamond":j.shape={type:"path",path:[{command:"M",values:[0,.5*A]},{command:"L",values:[.5*F,0]},{command:"L",values:[F,.5*A]},{command:"L",values:[.5*F,A]},{command:"Z",values:[]}]},S||(F+=L,A+=L);break;case"square":j.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[F,0]},{command:"L",values:[F,A]},{command:"L",values:[0,A]},{command:"Z",values:[]}]},S||(F+=L,A+=L),b&&($=!0);break;case"triangle":j.shape={type:"path",path:[{command:"M",values:[.5*F,0]},{command:"L",values:[F,A]},{command:"L",values:[0,A]},{command:"Z",values:[]}]},S||(F+=L,A+=L),b&&($=!0);break;case"x":j.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[F,A]},{command:"M",values:[F,0]},{command:"L",values:[0,A]}]},b&&($=!0);break;case"path":j.shape={type:"path",path:t.path||""},S||(F+=L,A+=L),b&&($=!0),S=!0}break}case"simple-line":{var I;const{width:t,height:n}=g(e),i=null!=n?n:Math.min(null!=x?x:L,v||d),o=null!=t?t:f;z.width=i,F=o,A=i;const l=(null==j||null==(I=j.stroke)?void 0:I.cap)||"butt",a="round"===l;S=!0,j.stroke.cap="butt"===l?"square":l,j.shape={type:"path",path:[{command:"M",values:[a?i/2:0,A/2]},{command:"L",values:[a?F-i/2:F,A/2]}]};break}case c:case"simple-fill":{const t="object"==typeof(null==e?void 0:e.symbolConfig)&&(null==e?void 0:e.symbolConfig.isSquareFill),{width:n,height:i}=g(e);F=t&&null!=n?n:null!=x?x:h,A=t&&null!=i?i:F,S||(F+=L,A+=L),S=!0,j.shape=t?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[F,0]},{command:"L",values:[F,A]},{command:"L",values:[0,A]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:r.JZ.fill[0];break}case"picture-marker":{let e=(0,l.F2)(t.width),n=(0,l.F2)(t.height);const i=null!=x?x:Math.max(e,n),o=e/n;e=o<=1?Math.ceil(i*o):i,n=o<=1?i:Math.ceil(i/o),F=Math.min(e,v||u),A=Math.min(n,v||u),j.shape={type:"image",x:-Math.round(F/2),y:-Math.round(A/2),width:F,height:A,src:t.url||""},b&&($=!0);break}case"text":{const e=t,n=e.text||"Aa",i=e.font,o=Math.min(null!=x?x:(0,l.F2)(i.size),v||u),a=m(n,{weight:i.weight,size:o,family:i.family}),r=/[\uE600-\uE6FF]/.test(n);F=r?o:a,A=o;let s=.25*y((i?o:0).toString());r&&(s+=5),j.shape={type:"text",text:n,x:0,y:s,align:"middle",decoration:i&&i.decoration,rotated:e.rotated,kerning:e.kerning},j.font=i&&{size:o,style:i.style,decoration:i.decoration,weight:i.weight,family:i.family};break}}if(!j.shape)return Promise.reject(new o.Z("symbolPreview: renderPreviewHTML2D","symbol not supported."));const Z=M,C=t.color;let N=null;return Z&&"pattern"===Z.type&&C&&t.type!==c?N=(0,a.Od)(Z.src,C.toCss(!0)).then((t=>(Z.src=t,j.fill=Z,j))):(j.fill=M,N=Promise.resolve(j)),N.then((t=>{const n=[[t]];if("object"==typeof(null==e?void 0:e.symbolConfig)&&null!=e&&e.symbolConfig.applyColorModulation){const e=.6*F;n.unshift([{...t,offset:[-e,0],fill:(0,r.dc)(M,-.3)}]),n.push([{...t,offset:[e,0],fill:(0,r.dc)(M,.3)}]),F+=2*e,S=!1}return(0,s.w)(n,[F,A],{node:e&&e.node,scale:S,opacity:k,rotation:b,useRotationSize:$,effectView:null==e?void 0:e.effectView})}))}},69157:(t,e,n)=>{n.d(e,{r:()=>p,w:()=>d});var i=n(19545),o=n(76200),l=n(86950),a=n(10064),r=n(93169),s=(n(42877),n(88367)),c=n(99653),h=n(74579);const u=(0,s.E)();function d(t,e,n){const i=Math.ceil(e[0]),o=Math.ceil(e[1]);if(!t.some((t=>!!t.length)))return null;const l=n&&n.node||document.createElement("div");return null!=n.opacity&&(l.style.opacity=n.opacity.toString()),null!=n.effectView&&(l.style.filter=(0,h.wJ)(n.effectView)),u.append(l,c.KB.bind(null,t,i,o,n)),l}function f(t,e,n,i,o){switch(o){case"multiply":t[e+0]*=n[0],t[e+1]*=n[1],t[e+2]*=n[2],t[e+3]*=n[3];break;default:{const o=(0,l._Y)({r:t[e+0],g:t[e+1],b:t[e+2]});o.h=i.h,o.s=i.s,o.v=o.v/100*i.v;const a=(0,l.xr)(o);t[e+0]=a.r,t[e+1]=a.g,t[e+2]=a.b,t[e+3]*=n[3];break}}}function p(t,e,n,s,c){return function(t,e,n){return t?(0,o.default)(t,{responseType:"image"}).then((t=>{const i=t.data,o=i.width,l=i.height,a=o/l;let r=e;if(n){const t=Math.max(o,l);r=Math.min(r,t)}return{image:i,width:a<=1?Math.ceil(r*a):r,height:a<=1?r:Math.ceil(r/a)}})):Promise.reject(new a.Z("renderUtils: imageDataSize","href not provided."))}(t,e,c).then((o=>{const a=o.width?o.width:e,c=o.height?o.height:e;if(o.image&&function(t,e){return!(!t||"ignore"===e)&&("multiply"!==e||255!==t.r||255!==t.g||255!==t.b||1!==t.a)}(n,s)){let e=o.image.width,i=o.image.height;(0,r.Z)("edge")&&/\.svg$/i.test(t)&&(e-=1,i-=1);const h=function(t,e){t=Math.ceil(t),e=Math.ceil(e);const n=document.createElement("canvas");n.width=t,n.height=e,n.style.width=t+"px",n.style.height=e+"px";const i=n.getContext("2d");return i.clearRect(0,0,t,e),i}(a,c);h.drawImage(o.image,0,0,e,i,0,0,a,c);const u=h.getImageData(0,0,a,c),d=[n.r/255,n.g/255,n.b/255,n.a],p=(0,l._Y)(n);for(let t=0;t<u.data.length;t+=4)f(u.data,t,d,p,s);h.putImageData(u,0,0),t=h.canvas.toDataURL("image/png")}else{const e=i.id&&i.id.findCredential(t);if(e&&e.token){const n=-1===t.indexOf("?")?"?":"&";t=`${t}${n}token=${e.token}`}}return{url:t,width:a,height:c}})).catch((function(){return{url:t,width:e,height:e}}))}},99653:(t,e,n)=>{n.d(e,{A5:()=>I,KB:()=>N,al:()=>Z,ch:()=>j,iL:()=>C,jA:()=>b,kQ:()=>M,vq:()=>k});var i=n(51995),o=n(93169),l=n(11245),a=n(22018),r=(n(80975),n(32718),n(67005));let s=0,c=0;const h=(0,o.Z)("android"),u=(0,o.Z)("chrome")||h&&h>=4?"auto":"optimizeLegibility",d={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},f=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;let p={},m={};const y={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},g=Math.PI;let w=1;function x(t,e){const n=t*(g/180);return Math.abs(e*Math.sin(n))+Math.abs(e*Math.cos(n))}function v(t){return t.map((t=>`${t.command} ${t.values.join(" ")}`)).join(" ").trim()}function k(t,e,n,i){if(t){if("circle"===t.type)return(0,r.u)("circle",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,r:t.r});if("ellipse"===t.type)return(0,r.u)("ellipse",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry});if("rect"===t.type)return(0,r.u)("rect",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",x:t.x,y:t.y,width:t.width,height:t.height});if("image"===t.type)return(0,r.u)("image",{href:t.src,x:t.x,y:t.y,width:t.width,height:t.height,preserveAspectRatio:"none"});if("path"===t.type){const i="string"!=typeof t.path?v(t.path):t.path;return(0,r.u)("path",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",d:i})}if("text"===t.type)return(0,r.u)("text",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4","text-anchor":i.align,"text-decoration":i.decoration,kerning:i.kerning,rotate:i.rotate,"text-rendering":u,"font-style":i.font.style,"font-variant":i.font.variant,"font-weight":i.font.weight,"font-size":i.font.size,"font-family":i.font.family,x:t.x,y:t.y},t.text)}return null}function b(t){const e={fill:"none",pattern:null,linearGradient:null};if(t)if("type"in t&&"pattern"===t.type){const n="patternId-"+ ++s;e.fill=`url(#${n})`,e.pattern={id:n,x:t.x,y:t.y,width:t.width,height:t.height,image:{x:0,y:0,width:t.width,height:t.height,href:t.src}}}else if("type"in t&&"linear"===t.type){const n="linearGradientId-"+ ++c;e.fill=`url(#${n})`,e.linearGradient={id:n,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stops:t.colors.map((t=>({offset:t.offset,color:t.color&&new i.Z(t.color).toString()})))}}else if(t){const n=new i.Z(t);e.fill=n.toString()}return e}function M(t){const e={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"};if(t&&(null!=t.width&&(e.width=t.width),t.cap&&(e.cap=t.cap),t.join&&(e.join=t.join.toString()),t.color&&(e.color=new i.Z(t.color).toString()),t.style)){let n=null;if(t.style in y&&(n=y[t.style]),Array.isArray(n)){n=n.slice(0);for(let e=0;e<n.length;++e)n[e]*=t.width;if("butt"!==t.cap){for(let e=0;e<n.length;e+=2)n[e]-=t.width,n[e]<1&&(n[e]=1);for(let e=1;e<n.length;e+=2)n[e]+=t.width}n=n.join(",")}e.dashArray=n}return e}function z(t,e){const n={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};return t&&(n.align=t.align,n.decoration=t.decoration,n.kerning=t.kerning?"auto":"0",n.rotate=t.rotated?"90":"0",n.font.style=e.style||"normal",n.font.variant=e.variant||"normal",n.font.weight=e.weight||"normal",n.font.size=e.size&&e.size.toString()||"10pt",n.font.family=e.family||"serif"),n}function j(t){const{pattern:e,linearGradient:n}=t;if(e)return(0,r.u)("pattern",{id:e.id,patternUnits:"userSpaceOnUse",x:e.x,y:e.y,width:e.width,height:e.height},(0,r.u)("image",{x:e.image.x,y:e.image.y,width:e.image.width,height:e.image.height,href:e.image.href}));if(n){const t=n.stops.map(((t,e)=>(0,r.u)("stop",{key:`${e}-stop`,offset:t.offset,"stop-color":t.color})));return(0,r.u)("linearGradient",{id:n.id,gradientUnits:"userSpaceOnUse",x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2},t)}return null}function L(t,e,n){return(0,a.t)(t,(0,a.c)(t),[e,n])}function S(t,e,n,i,o){return(0,a.s)(t,(0,a.c)(t),[e,n]),t[4]=t[4]*e-i*e+i,t[5]=t[5]*n-o*n+o,t}function F(t,e){p&&"left"in p?(p.left>t&&(p.left=t),p.right<t&&(p.right=t),p.top>e&&(p.top=e),p.bottom<e&&(p.bottom=e)):p={left:t,bottom:e,right:t,top:e}}function A(t){const e=t.args,n=e.length;let i;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(i=0;i<n;i+=2)F(e[i],e[i+1]);m.x=e[n-2],m.y=e[n-1];break;case"H":for(i=0;i<n;++i)F(e[i],m.y);m.x=e[n-1];break;case"V":for(i=0;i<n;++i)F(m.x,e[i]);m.y=e[n-1];break;case"m":{let t=0;"x"in m||(F(m.x=e[0],m.y=e[1]),t=2);for(i=t;i<n;i+=2)F(m.x+=e[i],m.y+=e[i+1]);break}case"l":case"t":for(i=0;i<n;i+=2)F(m.x+=e[i],m.y+=e[i+1]);break;case"h":for(i=0;i<n;++i)F(m.x+=e[i],m.y);break;case"v":for(i=0;i<n;++i)F(m.x,m.y+=e[i]);break;case"c":for(i=0;i<n;i+=6)F(m.x+e[i],m.y+e[i+1]),F(m.x+e[i+2],m.y+e[i+3]),F(m.x+=e[i+4],m.y+=e[i+5]);break;case"s":case"q":for(i=0;i<n;i+=4)F(m.x+e[i],m.y+e[i+1]),F(m.x+=e[i+2],m.y+=e[i+3]);break;case"A":for(i=0;i<n;i+=7)F(e[i+5],e[i+6]);m.x=e[n-2],m.y=e[n-1];break;case"a":for(i=0;i<n;i+=7)F(m.x+=e[i+5],m.y+=e[i+6])}}function $(t,e,n){const i=d[t.toLowerCase()];let o;"number"==typeof i&&(i?e.length>=i&&(o={action:t,args:e.slice(0,e.length-e.length%i)},n.push(o),A(o)):(o={action:t,args:[]},n.push(o),A(o)))}function I(t){const e={x:0,y:0,width:0,height:0};if("circle"===t.type)e.x=t.cx-t.r,e.y=t.cy-t.r,e.width=2*t.r,e.height=2*t.r;else if("ellipse"===t.type)e.x=t.cx-t.rx,e.y=t.cy-t.ry,e.width=2*t.rx,e.height=2*t.ry;else if("image"===t.type||"rect"===t.type)e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height;else if("path"===t.type){const n=function(t){const e=("string"!=typeof t.path?v(t.path):t.path).match(f),n=[];if(p={},m={},!e)return null;let i="",o=[];const l=e.length;for(let r=0;r<l;++r){const t=e[r],l=parseFloat(t);isNaN(l)?(i&&$(i,o,n),o=[],i=t):o.push(l)}$(i,o,n);const a={x:0,y:0,width:0,height:0};return p&&"left"in p&&(a.x=p.left,a.y=p.top,a.width=p.right-p.left,a.height=p.bottom-p.top),a}(t);e.x=n.x,e.y=n.y,e.width=n.width,e.height=n.height}return e}function Z(t){const e={x:0,y:0,width:0,height:0};let n=null,i=Number.NEGATIVE_INFINITY,o=Number.NEGATIVE_INFINITY;for(const l of t)n?(n.x=Math.min(n.x,l.x),n.y=Math.min(n.y,l.y),i=Math.max(i,l.x+l.width),o=Math.max(o,l.y+l.height)):(n=e,n.x=l.x,n.y=l.y,i=l.x+l.width,o=l.y+l.height);return n&&(n.width=i-n.x,n.height=o-n.y),n}function C(t,e,n,i,o,r,s,c,h){let u=(s&&r?x(r,e):e)/2,d=(s&&r?x(r,n):n)/2;if(h){const t=h[0],e=h[1];u=(s&&r?x(r,t):t)/2,d=(s&&r?x(r,e):e)/2}const f=t.width+i,p=t.height+i,m=(0,l.c)(),y=(0,l.c)();let g=!1;if(o&&0!==f&&0!==p){const t=e!==n?e/n:f/p,i=e>n?e:n;let o=1,l=1;isNaN(i)||(t>1?(o=i/f,l=i/t/p):(l=i/p,o=i*t/f)),(0,a.m)(y,y,S(m,o,l,u,d)),g=!0}const w=t.x+(f-i)/2,v=t.y+(p-i)/2;if((0,a.m)(y,y,L(m,u-w,d-v)),!g&&(f>e||p>n)){const t=f/e>p/n,i=(t?e:n)/(t?f:p);(0,a.m)(y,y,S(m,i,i,w,v))}return r&&(0,a.m)(y,y,function(t,e,n,i){const o=e%360*Math.PI/180;(0,a.r)(t,(0,a.c)(t),o);const l=Math.cos(o),r=Math.sin(o),s=t[4],c=t[5];return t[4]=s*l-c*r+i*r-n*l+n,t[5]=c*l+s*r-n*r-i*l+i,t}(m,r,w,v)),c&&(0,a.m)(y,y,L(m,c[0],c[1])),`matrix(${y[0]},${y[1]},${y[2]},${y[3]},${y[4]},${y[5]})`}function N(t,e,n,i){const o=[],l=[],a=++w,s=function(t,e,n){const i=null==t?void 0:t.effects.find((t=>"bloom"===t.type));if(!i)return null;const{strength:o,radius:l}=i,a=o>0?l:0,s=(o+a)*e,c=4*o+1;return(0,r.u)("filter",{id:`bloom${n}`,x:"-100%",y:"-100%",width:"300%",height:"300%",filterUnits:"userSpaceOnUse"},(0,r.u)("feMorphology",{operator:"dilate",radius:(o+.5*a)*(5**(e/100)*(.4+e/100)),in:"SourceGraphic",result:"dilate"}),(0,r.u)("feGaussianBlur",{in:"dilate",stdDeviation:s/25,result:"blur"}),(0,r.u)("feGaussianBlur",{in:"blur",stdDeviation:s/50,result:"intensityBlur"}),(0,r.u)("feComponentTransfer",{in:"SourceGraphic",result:"intensityBrightness"},(0,r.u)("feFuncR",{type:"linear",slope:c}),(0,r.u)("feFuncG",{type:"linear",slope:c}),(0,r.u)("feFuncB",{type:"linear",slope:c})),(0,r.u)("feMerge",null,(0,r.u)("feMergeNode",{in:"intensityBlur"}),(0,r.u)("feMergeNode",{in:"intensityBrightness"}),(0,r.u)("feGaussianBlur",{stdDeviation:o/10})))}(null==i?void 0:i.effectView,e,a);let c=null;if(s){var h;const t=null==i||null==(h=i.effectView)?void 0:h.effects.find((t=>"bloom"===t.type)),o=(t.strength?t.strength+t.radius/2:0)/3,l=e+e*o,a=n+n*o;c=[Math.max(l,10),Math.max(a,10)]}for(const u of t){const t=[],a=[];let s=0,h=0,d=0;for(const e of u){const{shape:n,fill:i,stroke:l,font:r,offset:c}=e;s+=l&&l.width||0;const u=b(i),f=M(l),p="text"===n.type?z(n,r):null;o.push(j(u)),t.push(k(n,u.fill,f,p)),a.push(I(n)),c&&(h+=c[0],d+=c[1])}const f=C(Z(a),e,n,s,null==i?void 0:i.scale,null==i?void 0:i.rotation,null==i?void 0:i.useRotationSize,[h,d],c);l.push((0,r.u)("g",{transform:f},t))}return null!=i&&i.useRotationSize&&null!=i&&i.rotation&&(e=x(null==i?void 0:i.rotation,e),n=x(null==i?void 0:i.rotation,n)),s&&(e=c[0],n=c[1]),(0,r.u)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,style:"display: block;"},s,(0,r.u)("defs",null,o),s?(0,r.u)("g",{filter:`url(#bloom${a})`},l):l)}}}]);
//# sourceMappingURL=8103.ad7f90f7.chunk.js.map