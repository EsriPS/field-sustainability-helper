"use strict";(globalThis.webpackChunkfield_sustainability_helper=globalThis.webpackChunkfield_sustainability_helper||[]).push([[7671,5164],{9997:(e,t,i)=>{i.d(t,{F:()=>y,M:()=>n});const n={Base64:0,Hex:1,String:2,Raw:3};function r(e,t){const i=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}function l(e){const t=[];for(let i=0,n=8*e.length;i<n;i+=8)t[i>>5]|=(255&e.charCodeAt(i/8))<<i%32;return t}function s(e){const t=[];for(let i=0,n=32*e.length;i<n;i+=8)t.push(String.fromCharCode(e[i>>5]>>>i%32&255));return t.join("")}function a(e){const t="0123456789abcdef",i=[];for(let n=0,r=4*e.length;n<r;n++)i.push(t.charAt(e[n>>2]>>n%4*8+4&15)+t.charAt(e[n>>2]>>n%4*8&15));return i.join("")}function o(e){const t=[];for(let i=0,n=4*e.length;i<n;i+=3){const n=(e[i>>2]>>i%4*8&255)<<16|(e[i+1>>2]>>(i+1)%4*8&255)<<8|e[i+2>>2]>>(i+2)%4*8&255;for(let r=0;r<4;r++)8*i+6*r>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n>>6*(3-r)&63))}return t.join("")}function u(e,t,i,n,l,s){return r(function(e,t){return e<<t|e>>>32-t}(r(r(t,e),r(n,s)),l),i)}function c(e,t,i,n,r,l,s){return u(t&i|~t&n,e,t,r,l,s)}function d(e,t,i,n,r,l,s){return u(t&n|i&~n,e,t,r,l,s)}function p(e,t,i,n,r,l,s){return u(t^i^n,e,t,r,l,s)}function f(e,t,i,n,r,l,s){return u(i^(t|~n),e,t,r,l,s)}function m(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;let i=1732584193,n=-271733879,l=-1732584194,s=271733878;for(let a=0;a<e.length;a+=16){const t=i,o=n,u=l,m=s;i=c(i,n,l,s,e[a+0],7,-680876936),s=c(s,i,n,l,e[a+1],12,-389564586),l=c(l,s,i,n,e[a+2],17,606105819),n=c(n,l,s,i,e[a+3],22,-1044525330),i=c(i,n,l,s,e[a+4],7,-176418897),s=c(s,i,n,l,e[a+5],12,1200080426),l=c(l,s,i,n,e[a+6],17,-1473231341),n=c(n,l,s,i,e[a+7],22,-45705983),i=c(i,n,l,s,e[a+8],7,1770035416),s=c(s,i,n,l,e[a+9],12,-1958414417),l=c(l,s,i,n,e[a+10],17,-42063),n=c(n,l,s,i,e[a+11],22,-1990404162),i=c(i,n,l,s,e[a+12],7,1804603682),s=c(s,i,n,l,e[a+13],12,-40341101),l=c(l,s,i,n,e[a+14],17,-1502002290),n=c(n,l,s,i,e[a+15],22,1236535329),i=d(i,n,l,s,e[a+1],5,-165796510),s=d(s,i,n,l,e[a+6],9,-1069501632),l=d(l,s,i,n,e[a+11],14,643717713),n=d(n,l,s,i,e[a+0],20,-373897302),i=d(i,n,l,s,e[a+5],5,-701558691),s=d(s,i,n,l,e[a+10],9,38016083),l=d(l,s,i,n,e[a+15],14,-660478335),n=d(n,l,s,i,e[a+4],20,-405537848),i=d(i,n,l,s,e[a+9],5,568446438),s=d(s,i,n,l,e[a+14],9,-1019803690),l=d(l,s,i,n,e[a+3],14,-187363961),n=d(n,l,s,i,e[a+8],20,1163531501),i=d(i,n,l,s,e[a+13],5,-1444681467),s=d(s,i,n,l,e[a+2],9,-51403784),l=d(l,s,i,n,e[a+7],14,1735328473),n=d(n,l,s,i,e[a+12],20,-1926607734),i=p(i,n,l,s,e[a+5],4,-378558),s=p(s,i,n,l,e[a+8],11,-2022574463),l=p(l,s,i,n,e[a+11],16,1839030562),n=p(n,l,s,i,e[a+14],23,-35309556),i=p(i,n,l,s,e[a+1],4,-1530992060),s=p(s,i,n,l,e[a+4],11,1272893353),l=p(l,s,i,n,e[a+7],16,-155497632),n=p(n,l,s,i,e[a+10],23,-1094730640),i=p(i,n,l,s,e[a+13],4,681279174),s=p(s,i,n,l,e[a+0],11,-358537222),l=p(l,s,i,n,e[a+3],16,-722521979),n=p(n,l,s,i,e[a+6],23,76029189),i=p(i,n,l,s,e[a+9],4,-640364487),s=p(s,i,n,l,e[a+12],11,-421815835),l=p(l,s,i,n,e[a+15],16,530742520),n=p(n,l,s,i,e[a+2],23,-995338651),i=f(i,n,l,s,e[a+0],6,-198630844),s=f(s,i,n,l,e[a+7],10,1126891415),l=f(l,s,i,n,e[a+14],15,-1416354905),n=f(n,l,s,i,e[a+5],21,-57434055),i=f(i,n,l,s,e[a+12],6,1700485571),s=f(s,i,n,l,e[a+3],10,-1894986606),l=f(l,s,i,n,e[a+10],15,-1051523),n=f(n,l,s,i,e[a+1],21,-2054922799),i=f(i,n,l,s,e[a+8],6,1873313359),s=f(s,i,n,l,e[a+15],10,-30611744),l=f(l,s,i,n,e[a+6],15,-1560198380),n=f(n,l,s,i,e[a+13],21,1309151649),i=f(i,n,l,s,e[a+4],6,-145523070),s=f(s,i,n,l,e[a+11],10,-1120210379),l=f(l,s,i,n,e[a+2],15,718787259),n=f(n,l,s,i,e[a+9],21,-343485551),i=r(i,t),n=r(n,o),l=r(l,u),s=r(s,m)}return[i,n,l,s]}function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.Hex;const i=t||n.Base64,r=m(l(e),8*e.length);switch(i){case n.Raw:return r;case n.Hex:return a(r);case n.String:return s(r);case n.Base64:return o(r)}}},71277:(e,t,i)=>{function n(e){return e=e||globalThis.location.hostname,u.some((t=>{var i;return null!=(null==(i=e)?void 0:i.match(t))}))}function r(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(l)||null!=t.match(a)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(s)||null!=t.match(o)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}i.d(t,{XO:()=>n,pJ:()=>r});const l=/^devext.arcgis.com$/,s=/^qaext.arcgis.com$/,a=/^[\w-]*\.mapsdevext.arcgis.com$/,o=/^[\w-]*\.mapsqa.arcgis.com$/,u=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,l,s,/^jsapps.esri.com$/,a,o]},46228:(e,t,i)=>{i.d(t,{I:()=>r,v:()=>l});var n=i(16889);function r(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=(0,n.uZ)(e,0,o);for(let n=0;n<4;n++)t[i+n]=Math.floor(256*u(r*s[n]))}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=0;for(let n=0;n<4;n++)i+=e[t+n]*a[n];return i}const s=[1,256,65536,16777216],a=[1/256,1/65536,1/16777216,1/4294967296],o=l(new Uint8ClampedArray([255,255,255,255]));function u(e){return e-Math.floor(e)}},91935:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(10064),r=i(32718),l=i(58971);function s(e,t,i,n,l){const s=e.referencesGeometry()&&l?o(t,n,l):t,a=e.repurposeFeature(s);try{return e.evaluate({...i,$feature:a})}catch(u){return r.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",u),null}}const a=new Map;function o(e,t,i){const{transform:s,hasZ:o,hasM:u}=i;a.has(t)||a.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,i,n,r)=>(0,l.U1)(i,t,e,n,r);case"esriGeometryPolygon":return(e,i,n,r)=>(0,l.Ie)(i,t,e,n,r);case"esriGeometryPolyline":return(e,i,n,r)=>(0,l.G6)(i,t,e,n,r);case"esriGeometryMultipoint":return(e,i,n,r)=>(0,l.J9)(i,t,e,n,r);default:return r.Z.getLogger("esri.views.2d.support.arcadeOnDemand").error(new n.Z("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}(t));const c=a.get(t)(e.geometry,s,o,u);return{...e,geometry:c}}},18745:(e,t,i)=>{i.d(t,{a:()=>o});var n=i(10064),r=i(32718),l=i(80613),s=i(46640);const a=r.Z.getLogger("esri.views.2d.engine.webgl");function o(e){return(0,s.hj)(e.minDataValue)&&(0,s.hj)(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?l.X.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?l.X.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?l.X.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?l.X.SIZE_UNIT_VALUE:(a.error(new n.Z("mapview-bad-type","Found invalid size VisualVariable",e)),l.X.NONE)}},85164:(e,t,i)=>{i.r(t),i.d(t,{createSymbolSchema:()=>a});var n=i(80613),r=i(54815);function l(e){var t;return"line-marker"===e.type?{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function s(e){return hydrateKey(e)}function a(e,t,i){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return u(e,t,i);case"simple-marker":case"picture-marker":return d(e,t,i);case"simple-line":return c(e,t,i);case"text":return p(e,t,i);case"label":return o(e,t,i);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...l(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function o(e,t,i){const l=e.toJSON(),a=(0,r.jj)(n.LW.LABEL,{...t,placement:l.labelPlacement});return{materialKey:i?s(a):a,hash:e.hash(),...l,labelPlacement:l.labelPlacement}}function u(e,t,i){const a=t.supportsOutlineFills,o=(0,r.jj)(n.LW.FILL,{...t,isOutlinedFill:a}),u=i?s(o):o,c=e.clone(),d=c.outline;t.supportsOutlineFills||(c.outline=null);const p={materialKey:u,hash:c.hash(),isOutlinedFill:!!t.supportsOutlineFills,...l(c)};if(t.supportsOutlineFills)return p;const f=[];if(f.push(p),d){const e=(0,r.jj)(n.LW.LINE,{...t,isOutline:!0}),a={materialKey:i?s(e):e,hash:d.hash(),...l(d)};f.push(a)}return{type:"composite-symbol",layers:f,hash:f.reduce(((e,t)=>t.hash+e),"")}}function c(e,t,i){const a=(0,r.jj)(n.LW.LINE,t),o=i?s(a):a,u=e.clone(),c=u.marker;u.marker=null;const d=[];if(d.push({materialKey:o,hash:u.hash(),...l(u)}),c){var p;const e=(0,r.jj)(n.LW.MARKER,t),a=i?s(e):e;c.color=null!=(p=c.color)?p:u.color,d.push({materialKey:a,hash:c.hash(),lineWidth:u.width,...l(c)})}return{type:"composite-symbol",layers:d,hash:d.reduce(((e,t)=>t.hash+e),"")}}function d(e,t,i){const a=(0,r.jj)(n.LW.MARKER,t),o=i?s(a):a,u=l(e);return{materialKey:o,hash:e.hash(),...u,angle:e.angle,maxVVSize:t.maxVVSize}}function p(e,t,i){const a=(0,r.jj)(n.LW.TEXT,t),o=i?s(a):a,u=l(e);return{materialKey:o,hash:e.hash(),...u,angle:e.angle,maxVVSize:t.maxVVSize}}},69534:(e,t,i)=>{i.d(t,{MD:()=>$,Ew:()=>E,q5:()=>V});var n=i(10064),r=i(93169),l=i(84652),s=i(32718),a=i(92026),o=i(17842),u=i(46640),c=i(80613),d=i(18745);var p=i(85164),f=(i(78915),i(691)),m=i(94109);i(95857),i(98125);function y(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;const t=e.getVisualVariablesForType("size");if(!t[0])return 0;const i=t[0];if("outline"===i.target)return 0;if("stops"===i.transformationType)return i.stops.map((e=>e.size)).reduce(g,0);if("clamped-linear"===i.transformationType){let e=-1/0,t=-1/0;return e="number"==typeof i.maxSize?i.maxSize:i.maxSize.stops.map((e=>e.size)).reduce(g,0),t="number"==typeof i.minSize?i.minSize:i.minSize.stops.map((e=>e.size)).reduce(g,0),Math.max(e,t)}return"real-world-size"===i.transformationType?30:void 0}m.eF.metrics,new f.Z(0,0,24,24);function g(e,t){return Math.max(e,t)}var h=i(91370),b=i(20478),v=i(31666);const x=s.Z.getLogger("esri.views.2d.layers.features.schemaUtils"),S="ValidationError",w={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function V(e){let t=0,i=0,n=!1,r=!0,l=!0;if((0,a.pC)(e)){if(i=y(e),"visualVariables"in e&&(t=function(e){if(!e)return c.X.NONE;let t=0;for(const i of e)if("size"===i.type){const e=(0,d.a)(i);t|=e,"outline"===i.target&&(t|=e<<4)}else"color"===i.type?t|=c.X.COLOR:"opacity"===i.type?t|=c.X.OPACITY:"rotation"===i.type&&(t|=c.X.ROTATION);return t}(e.visualVariables||[]),n="dot-density"===e.type),"dictionary"===e.type)return{maxVVSize:i,supportsOutlineFills:!1,vvFlags:t,stride:{fill:"default"}};if(!n){const t=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&t.push(e.backgroundFillSymbol);for(const e of t)if("cim"===e.type&&(r=!1),"simple-fill"===e.type||"picture-fill"===e.type){const t=e.outline;t&&"none"!==t.style&&"solid"!==t.style&&(l=!1);const i=t&&"none"!==t.style&&"solid"!==t.style,n="simple-fill"===e.type&&"none"!==e.style&&"solid"!==e.style;("picture-fill"===e.type||n||i)&&(r=!1)}}}return n&&(l=!1),{vvFlags:t,maxVVSize:i,supportsOutlineFills:l,stride:{fill:n?"dot-density":r?"simple":"default"}}}function z(e,t){const i=(0,l.d9)(e);return i.some((e=>function(e,t){const i=e.labelPlacement,r=w[t];if(!e.symbol)return x.warn("No ILabelClass symbol specified."),!0;if(!r)return x.error(new n.Z("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${t} is not supported`)),!0;if(!r.some((e=>e===i))){const n=r[0];i&&x.warn(`Found invalid label placement type ${i} for ${t}. Defaulting to ${n}`),e.labelPlacement=n}return!1}(e,t)))?[]:i}function E(e){return(0,r.Z)("esri-2d-update-debug")&&console.debug("Created new schema",F(e,!0)),F(e)}function F(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var i,n;const r=M(e,t),l={};return r.map((t=>T(l,e,t))),{source:{definitionExpression:e.definitionExpression,fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:null==(i=e.historicMoment)?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(n=e.timeExtent)?void 0:n.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:r,targets:l}}catch(r){if(r.fieldName===S)return x.error(r),null;throw r}}function T(e,t,i){switch(i.target){case"feature":return void Z(e,O(t),i);case"aggregate":{if(!("featureReduction"in t))return;const r=t.featureReduction;if("selection"===r.type)throw new n.Z(S,"Mapview does not support `selection` reduction type",r);return Z(e,O(t),i),void function(e,t,i){e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:(0,o.F2)(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil((0,o.F2)(t.clusterMaxSize)/64),fields:i.aggregateFields}}),I(e.aggregate,i.attributes.fields)}(e,r,i)}}}function I(e,t){for(const i in t){const n=t[i];if(n.target!==e.name)continue;const r=e.attributes[i];r?(r.context.mesh=r.context.mesh||n.context.mesh,r.context.storage=r.context.storage||n.context.storage):e.attributes[i]=n}return e}function O(e){var t,i,n,r,l;return[null!=(t=null==(i=(0,a.Wg)(e.filter))?void 0:i.toJSON())?t:null,null!=(n=null==(r=(0,a.Wg)(null==(l=(0,a.Wg)(e.featureEffect))?void 0:l.filter))?void 0:r.toJSON())?n:null]}function Z(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),I(e.feature,i.attributes.fields),e}function L(e,t){return t.field?N(e,{...t,type:"field",field:t.field}):t.valueExpression?N(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function N(e,t){switch(t.type){case"expression":{const i=t.valueExpression;if(!e.fields[i]){const n=e.indexCount++;e.fields[i]={...t,name:i,fieldIndex:n}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(t.label);if(!e.fields[i]){const n=e.indexCount++;e.fields[i]={...t,name:i,fieldIndex:n}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field;return"aggregate"===t.target&&e.fields[i]||(e.fields[i]={...t,name:i}),{field:i}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function M(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const i=new Array;let n=0;return i.push(R(e,n++,t)),i}function _(e,t,i,n,r){let l=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const s=N(t,{type:"label-expression",target:n,context:{mesh:!0},resultType:"string",label:{labelExpression:i.labelExpression,labelExpressionInfo:i.labelExpressionInfo?{expression:i.labelExpressionInfo.expression}:null,symbol:!!i.symbol,where:i.where}}),{fieldIndex:a}=s,o=V(e);return{...(0,p.createSymbolSchema)(i,o,l),fieldIndex:a,target:n,index:r}}function R(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r={indexCount:0,fields:{}},l="featureReduction"in e&&e.featureReduction,s=l?"aggregate":"feature";if("sublayers"in e){const t={type:"subtype",subtypeField:e.subtypeField,renderers:{},stride:{fill:"default"}},l={type:"subtype",mapping:{},target:"feature"},o={type:"subtype",classes:{}},u={type:"symbol",target:"feature",aggregateFields:[],attributes:r,storage:l,mesh:{matcher:t,aggregateMatcher:null,labels:o,sortKey:null}},c=new Set;let d=0;for(const{renderer:p,subtypeCode:f,labelingInfo:m,labelsVisible:y}of e.sublayers){const e=$(r,s,p,i),u=P(r,s,p),g=y&&m;if("visualVariables"in p&&p.visualVariables&&p.visualVariables.length)throw new n.Z(S,"Visual variables are currently not supported for subtype layers");if("dictionary"===e.type)throw new n.Z(S,"Dictionary renderer is not supported in subtype layers");if("subtype"===e.type)throw new n.Z(S,"Nested subtype renderers is not supported");if((0,a.pC)(u)&&"subtype"===u.type)throw new n.Z(S,"Nested subtype storage is not supported");if((0,a.pC)(u)&&"dot-density"===u.type)throw new n.Z(S,"Dot density attributes are not supported in subtype layers");if(c.has(f))throw new n.Z(S,"Subtype codes for sublayers must be unique");c.add(f),t.renderers[f]=e,l.mapping[f]=u,g&&(o.classes[f]=g.map((e=>_(p,r,e,"feature",d++,i))))}return u}if("heatmap"===e.renderer.type){const{blurRadius:t,fieldOffset:i,field:n}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:r,target:s,storage:null,mesh:{blurRadius:t,fieldOffset:i,field:L(r,{target:s,field:n,resultType:"numeric"}).field}}}{const t=[],a="aggregate"===s?(0,b.S1)(t,e.renderer,l,null):e.renderer;C(r,t);const o=$(r,s,a,i);let u=null;const c=P(r,s,a),d=(0,v.oq)(e.geometryType);let f=e.labelsVisible&&e.labelingInfo||[],m=[];if(l){if("selection"===l.type)throw new n.Z(S,"Mapview does not support `selection` reduction type",l);if(l.symbol){const e=V(a);u={type:"simple",symbol:(0,p.createSymbolSchema)(l.symbol,e,i),stride:e.stride}}m=l&&l.labelsVisible&&l.labelingInfo||[]}f=z(f,d),m=z(m,d);let y=0;const g=[...f.map((e=>_(a,r,e,"feature",y++,i))),...m.map((e=>_(a,r,e,"aggregate",y++,i)))],h=k(r,e.orderBy);return{type:"symbol",target:s,attributes:r,aggregateFields:t,storage:c,mesh:{matcher:o,labels:{type:"simple",classes:g},aggregateMatcher:u,sortKey:h}}}}function k(e,t){if((0,a.Wi)(t)||!t.length)return null;t.length>1&&x.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`);const i=t[0],r="ascending"===i.order?"asc":"desc";return i.field?{field:i.field,order:r}:i.valueExpression?{fieldIndex:N(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:r}:(x.error(new n.Z(S,"Expected to find a field or valueExpression for OrderByInfo",i)),null)}function C(e,t){const i={mesh:!0,storage:!0};for(const n of t){const{name:t,outStatistic:r}=n,{statisticType:l,onStatisticField:s}=r;let a=null,o=null,u=null;const c="numeric",d="feature";"onStatisticValueExpression"in r?o=N(e,{type:"expression",target:d,valueExpression:r.onStatisticValueExpression,resultType:c}).fieldIndex:"onStatisticNormalizationField"in r?(a=N(e,{type:"field",target:d,field:s,resultType:c}).field,u=r.onStatisticNormalizationField):a=N(e,{type:"field",target:d,field:s,resultType:c}).field,N(e,{type:"statistic",target:"aggregate",name:t,context:i,inField:a,inNormalizationField:u,inFieldIndex:o,statisticType:l})}}function P(e,t,i){switch(i.type){case"dot-density":return function(e,t,i){return i&&i.length?{type:"dot-density",mapping:i.map(((i,n)=>{const{field:r,fieldIndex:l}=L(e,{valueExpression:i.valueExpression,field:i.field,resultType:"numeric",target:t});return{binding:n,field:r,fieldIndex:l}})),target:t}:{type:"dot-density",mapping:[],target:t}}(e,t,i.attributes);case"simple":case"class-breaks":case"unique-value":case"dictionary":return function(e,t,i){if(!i||!i.length)return{type:"visual-variable",mapping:[],target:t};const n={storage:!0},r="numeric";return{type:"visual-variable",mapping:(0,h.t)(i).map((i=>{var l;const s=(0,u.nU)(i.type),{field:a,fieldIndex:o}=L(e,{target:t,valueExpression:i.valueExpression,field:i.field,context:n,resultType:r});switch(i.type){case"size":return"$view.scale"===i.valueExpression?null:{type:"size",binding:s,field:a,fieldIndex:o,normalizationField:L(e,{target:t,field:i.normalizationField,context:n,resultType:r}).field,valueRepresentation:null!=(l=i.valueRepresentation)?l:null};case"color":return{type:"color",binding:s,field:a,fieldIndex:o,normalizationField:L(e,{target:t,field:i.normalizationField,context:n,resultType:r}).field};case"opacity":return{type:"opacity",binding:s,field:a,fieldIndex:o,normalizationField:L(e,{target:t,field:i.normalizationField,context:n,resultType:r}).field};case"rotation":return{type:"rotation",binding:s,field:a,fieldIndex:o}}})).filter((e=>e)),target:t}}(e,t,i.visualVariables);case"heatmap":return null}}function $(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const r=(0,a.Pt)(e,{indexCount:0,fields:{}});switch(i.type){case"simple":case"dot-density":return j(r,i,n);case"class-breaks":return A(r,t,i,n);case"unique-value":return K(r,t,i,n);case"dictionary":return U(r,i,n)}}function j(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const n=t.getSymbols(),r=n.length?n[0]:null,l=V(t);return{type:"simple",symbol:(0,p.createSymbolSchema)(r,l,i),stride:l.stride}}function A(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const r={mesh:!0,use:"renderer.field"},l=i.backgroundFillSymbol,{field:s,fieldIndex:a}=L(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:r}),o=i.normalizationType,u="log"===o?"esriNormalizeByLog":"percent-of-total"===o?"esriNormalizeByPercentOfTotal":"field"===o?"esriNormalizeByField":null,c=V(i),d=i.classBreakInfos.map((e=>({symbol:(0,p.createSymbolSchema)(e.symbol,c,n),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return{type:"interval",attributes:e.fields,field:s,fieldIndex:a,backgroundFillSymbol:(0,p.createSymbolSchema)(l,c,n),defaultSymbol:(0,p.createSymbolSchema)(i.defaultSymbol,c,n),intervals:d,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:u,isMaxInclusive:i.isMaxInclusive,stride:c.stride}}function K(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const l=[],s=i.backgroundFillSymbol,a={target:t,context:{mesh:!0},resultType:"string"};if(i.field&&"string"!=typeof i.field)throw new n.Z(S,"Expected renderer.field to be a string",i);const{field:o,fieldIndex:u}=L(e,{...a,field:i.field,valueExpression:i.valueExpression}),c=V(i);for(const n of i.uniqueValueInfos)l.push({value:""+n.value,symbol:(0,p.createSymbolSchema)(n.symbol,c,r)});return{type:"map",attributes:e.fields,field:o,fieldIndex:u,field2:L(e,{...a,field:i.field2}).field,field3:L(e,{...a,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:(0,p.createSymbolSchema)(s,c),defaultSymbol:(0,p.createSymbolSchema)(i.defaultSymbol,c),map:l,stride:c.stride}}function U(e,t){const i=V(t);return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:i,stride:i.stride}}},91370:(e,t,i)=>{i.d(t,{a:()=>s,t:()=>a});var n=i(32718),r=i(17842);const l=n.Z.getLogger("esri.renderers.visualVariables.support.utils"),s=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const t=e.clone(),i=t.visualVariables.map((e=>o(e)?u(e):e));return t.visualVariables=i,t};function a(e){return e.map((e=>o(e)?u(e.clone()):e))}function o(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function u(e){return e.stops=function(e,t){return t.length<=8?t:(l.warn(`Found ${t.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),t.length>16?function(e,t){const[i,...n]=t,l=n.pop(),s=n[0].value,a=n[n.length-1].value,o=(a-s)/6,u=[];for(let d=s;d<a;d+=o){let i=0;for(;d>=n[i].value;)i++;const l=n[i],s=t[i-1],a=d-s.value,o=l.value===s.value?1:a/(l.value-s.value);if("color"===e){const e=n[i],r=t[i-1],l=e.color.clone();l.r=c(r.color.r,l.r,o),l.g=c(r.color.g,l.g,o),l.b=c(r.color.b,l.b,o),l.a=c(r.color.a,l.a,o),u.push({value:d,color:l,label:e.label})}else if("size"===e){const e=n[i],l=t[i-1],s=(0,r.t_)(e.size),a=c((0,r.t_)(l.size),s,o);u.push({value:d,size:a,label:e.label})}else{const e=n[i],r=c(t[i-1].opacity,e.opacity,o);u.push({value:d,opacity:r,label:e.label})}}return[i,...u,l]}(e,t):function(e){const[t,...i]=e,n=i.pop();for(;i.length>6;){let e=0,t=0;for(let n=1;n<i.length;n++){const r=i[n-1],l=i[n],s=Math.abs(l.value-r.value);s>t&&(t=s,e=n)}i.splice(e,1)}return[t,...i,n]}(t))}(e.type,e.stops),e}function c(e,t,i){return(1-i)*e+i*t}},95857:(e,t,i)=>{i.d(t,{I_:()=>a,XA:()=>f,Zu:()=>u,ab:()=>c,eT:()=>p,y1:()=>o,yA:()=>d});i(75746);var n=i(92026),r=i(80885),l=i(65156),s=i(76335);i(38999),i(94109),i(47975);const a=512,o=50;function u(e,t){if(!t.isWrappable)return null;const[i,n]=(0,s.uS)(t);return e[2]>n?[(0,l.Ue)([e[0],e[1],n,e[3]]),(0,l.Ue)([i,e[1],i+e[2]-n,e[3]])]:e[0]<i?[(0,l.Ue)([i,e[1],e[2],e[3]]),(0,l.Ue)([n-(i-e[0]),e[1],n,e[3]])]:null}function c(e){return"text"===e||"esriTS"===e}function d(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function p(e){switch((0,n.Wg)(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}function f(e){if(!e)return null;const{xmin:t,ymin:i,xmax:n,ymax:l,spatialReference:s}=e;return new r.Z({rings:[[[t,i],[t,l],[n,l],[n,i],[t,i]]],spatialReference:s})}},98125:(e,t,i)=>{i.d(t,{xS:()=>b,B3:()=>h});var n=i(79815),r=i(80613),l=i(54815);const s={marker:r.LW.MARKER,fill:r.LW.FILL,line:r.LW.LINE,text:r.LW.TEXT};class a{constructor(e,t,i,n){const r={minScale:null==t?void 0:t.minScale,maxScale:null==t?void 0:t.maxScale},a=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(r);this.layers=e,this.data=t,this.hash=this._createHash()+a,this.rendererKey=i;const o={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:i};for(const u of e){const e=s[u.type];u.materialKey=(0,l.jj)(e,o),u.maxVVSize=n,u.scaleInfo=r,u.templateHash+=a}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}var o=i(71277),u=i(10064),c=i(66978),d=i(35995),p=i(70032),f=i(53283),m=i(86423);async function y(e,t,i){if(!e.name)return Promise.reject(new u.Z("style-symbol-reference-name-missing","Missing name in style symbol reference"));if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return async function(e,t){const n=m.wm.replace(/\{SymbolName\}/gi,e.name);try{const e=await(0,m.EJ)(n,t);return(0,m.KV)(e.data)}catch(i){return(0,c.k_)(i),null}}(e,i);try{return async function(e,t,i,n){const r=e.data,l={portal:i&&i.portal||p.Z.getDefault(),url:(0,d.mN)(e.baseUrl),origin:"portal-item"},s=r.items.find((e=>e.name===t));if(!s)throw new u.Z("symbolstyleutils:symbol-name-not-found",`The symbol name '${t}' could not be found`,{symbolName:t});let a=(0,f.f)((0,m.v9)(s,"cimRef"),l);(0,o.XO)()&&(a=(0,o.pJ)(a));try{const e=await(0,m.EJ)(a,n);return(0,m.KV)(e.data)}catch(y){return(0,c.k_)(y),null}}(await(0,m.n2)(e,t,i),e.name,t,i)}catch(n){return(0,c.k_)(n),null}}const g=async(e,t,i)=>new a(await(0,n.c)(e.data,t,i),e.data,e.rendererKey,e.maxVVSize),h=async(e,t,i,n)=>{if(!e)return null;if("cim"===e.type)return g(e,t,i);if("web-style"===e.type){const r={type:"cim",data:await y(e,null,n),rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return g(r,t,i)}return e};function b(e){if(!e)return null;const{type:t,cim:i,url:n,materialHash:r}=e,l={cim:i,type:t,mosaicHash:r,url:n,size:null,dashTemplate:null,path:null,text:null,fontName:null};switch(t){case"marker":l.size=e.size,l.path=e.path;break;case"line":l.dashTemplate=e.dashTemplate;break;case"text":l.text=e.text,l.fontName=e.fontName}return l}},20478:(e,t,i)=>{i.d(t,{aV:()=>V,S1:()=>x,os:()=>S,yR:()=>z});var n,r=i(10064),l=i(93169),s=i(32718),a=i(92026),o=i(9997),u=i(245),c=i(53896),d=i(27366),p=i(84652),f=i(49861),m=(i(25243),i(69912)),y=i(31201),g=i(80724);let h=n=class extends u.Z{writeLevels(e,t,i){for(const n in e){const e=this.levels[n];return void(t.stops=e)}}clone(){return new n({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,g.iY)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,g.iY)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:(0,p.d9)(this.levels)})}};(0,d._)([(0,f.Cb)()],h.prototype,"levels",void 0),(0,d._)([(0,y.c)("levels")],h.prototype,"writeLevels",null),h=n=(0,d._)([(0,m.j)("esri.views.2d.engine.LevelDependentSizeVariable")],h);const b=s.Z.getLogger("esri.views.2d.layers.support.clusterUtils");l.Z.add("esri-cluster-arcade-enabled",!0);const v=(0,l.Z)("esri-cluster-arcade-enabled"),x=(e,t,i,n)=>{const r=t.clone();if(!z(r))return r;if(i.fields)for(const l of i.fields)E(e,l);if("visualVariables"in r){const t=(r.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),l=S(t);t.forEach((t=>{"rotation"===t.type?t.field?t.field=T(e,t.field,"avg_angle"):t.valueExpression&&(t.field=F(e,t.valueExpression,"avg_angle"),t.valueExpression=null):t.normalizationField?(t.field=T(e,t.field,"norm",t.normalizationField),t.normalizationField=null):t.field?t.field=T(e,t.field,"avg"):(t.field=F(e,t.valueExpression,"avg"),t.valueExpression=null)})),(0,a.Wi)(l)&&!w(t)&&(t.push(V(i,n)),r.dynamicClusterSize=!0),r.visualVariables=t}switch(r.type){case"simple":break;case"unique-value":r.field?r.field=T(e,r.field,"mode"):r.valueExpression&&(r.field=F(e,r.valueExpression,"mode"),r.valueExpression=null);break;case"class-breaks":r.normalizationField?(r.field=T(e,r.field,"norm",r.normalizationField),r.normalizationField=null):r.field?r.field=T(e,r.field,"avg"):(r.field=F(e,r.valueExpression,"avg"),r.valueExpression=null)}return r},S=e=>{for(const t of e)if("size"===t.type)return t;return null},w=e=>{for(const t of e)if("cluster_count"===t.field)return!0;return!1},V=(e,t)=>{const i=[new c.Z({value:0,size:0}),new c.Z({value:1})];if((0,a.Wi)(t))return new u.Z({field:"cluster_count",stops:[...i,new c.Z({value:2,size:0})]});const n=Object.keys(t).reduce(((n,r)=>({...n,[r]:[...i,new c.Z({value:Math.max(2,t[r].minValue),size:e.clusterMinSize}),new c.Z({value:Math.max(3,t[r].maxValue),size:e.clusterMaxSize})]})),{});return new h({field:"cluster_count",levels:n})},z=e=>{const t=t=>b.error(new r.Z("Unsupported-renderer",t,{renderer:e}));if("unique-value"===e.type){if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){const i=e.normalizationType;if("field"!==i)return t(`FeatureReductionCluster does not support a normalizationType of ${i}`),!1}}else if("simple"!==e.type)return t(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1;if(!v){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function E(e,t){const{name:i,outStatistic:n}=t,{onStatisticField:l,onStatisticValueExpression:s,statisticType:a}=n;if(s){const t=(0,o.F)(s.toLowerCase());e.push({name:i,outStatistic:{onStatisticField:t,onStatisticValueExpression:s,statisticType:a}})}else l?e.push({name:i,outStatistic:{onStatisticField:l,statisticType:a}}):b.error(new r.Z("mapview-unsupported-field","Unable to handle field",{field:t}))}function F(e,t,i){const n=(0,o.F)(t),r="mode"===i?`cluster_type_${n}`:`cluster_avg_${n}`;return e.some((e=>e.name===r))||e.push({name:r,outStatistic:{onStatisticField:n,onStatisticValueExpression:t,statisticType:i}}),r}function T(e,t,i,n){if("cluster_count"===t||e.some((e=>e.name===t)))return t;const r=function(e,t,i){switch(e){case"avg":case"avg_angle":return`cluster_avg_${t}`;case"mode":return`cluster_type_${t}`;case"norm":{const e=i,n="field",r=t.toLowerCase()+",norm:"+n+","+e.toLowerCase();return"cluster_avg_"+(0,o.F)(r)}}}(i,t,n);return e.some((e=>e.name===r))||("norm"===i?e.push({name:r,outStatistic:{onStatisticField:t,onStatisticNormalizationField:n,statisticType:i}}):e.push({name:r,outStatistic:{onStatisticField:t,statisticType:i}})),r}},31666:(e,t,i)=>{i.d(t,{JV:()=>l,oq:()=>r});const n=new(i(43404).X)({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function r(e){return n.toJSON(e)}function l(e){const{bandCount:t,attributeTable:i,colormap:n,pixelType:r}=e.rasterInfo;return 1===t&&(null!=i||null!=n||"u8"===r||"s8"===r)}}}]);
//# sourceMappingURL=7671.78f1fa2b.chunk.js.map