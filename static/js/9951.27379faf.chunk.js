"use strict";(globalThis.webpackChunkfield_sustainability_helper=globalThis.webpackChunkfield_sustainability_helper||[]).push([[9951],{71277:(e,t,a)=>{function l(e){return e=e||globalThis.location.hostname,m.some((t=>{var a;return null!=(null==(a=e)?void 0:a.match(t))}))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(r)||null!=t.match(i)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(s)||null!=t.match(o)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}a.d(t,{XO:()=>l,pJ:()=>n});const r=/^devext.arcgis.com$/,s=/^qaext.arcgis.com$/,i=/^[\w-]*\.mapsdevext.arcgis.com$/,o=/^[\w-]*\.mapsqa.arcgis.com$/,m=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,r,s,/^jsapps.esri.com$/,i,o]},19951:(e,t,a)=>{a.r(t),a.d(t,{fetchSymbolFromStyle:()=>b,resolveWebStyleSymbol:()=>y});var l=a(51508),n=a(71277),r=a(10064),s=a(35995),i=a(70032),o=a(53283),m=a(192),c=a(1472),u=a(86423),p=a(81854);function y(e,t,a,l){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,a){const l=u.wm.replace(/\{SymbolName\}/gi,e.name);return(0,u.EJ)(l,a).then((e=>{const a=(0,u.KV)(e.data);return(0,m.im)(a,{portal:t.portal,url:(0,s.mN)((0,s.Yd)(l)),origin:"portal-item"})}))}(e,t,l):(0,u.n2)(e,t,l).then((n=>b(n,e.name,t,a,l))):Promise.reject(new r.Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function b(e,t,a,y,b){const h=e.data,g={portal:a&&a.portal||i.Z.getDefault(),url:(0,s.mN)(e.baseUrl),origin:"portal-item"},d=h.items.find((e=>e.name===t));if(!d){const e=`The symbol name '${t}' could not be found`;return Promise.reject(new r.Z("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let f=(0,o.f)((0,u.v9)(d,y),g),w=d.thumbnail&&d.thumbnail.href;const N=d.thumbnail&&d.thumbnail.imageData;(0,n.XO)()&&(f=(0,n.pJ)(f),w=(0,n.pJ)(w));const v={portal:a.portal,url:(0,s.mN)((0,s.Yd)(f)),origin:"portal-item"};return(0,u.EJ)(f,b).then((n=>{const r="cimRef"===y?(0,u.KV)(n.data):n.data,s=(0,m.im)(r,v);if(s&&(0,l.dU)(s)){if(w){const e=(0,o.f)(w,g);s.thumbnail=new p.p({url:e})}else N&&(s.thumbnail=new p.p({url:`data:image/png;base64,${N}`}));e.styleUrl?s.styleOrigin=new c.Z({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(s.styleOrigin=new c.Z({portal:a.portal,styleName:e.styleName,name:t}))}return s}))}}}]);
//# sourceMappingURL=9951.27379faf.chunk.js.map