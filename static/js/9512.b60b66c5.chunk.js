"use strict";(self.webpackChunkfield_sustainability_helper=self.webpackChunkfield_sustainability_helper||[]).push([[9512],{59512:function(e,t,r){r.r(t),r.d(t,{default:function(){return U}});var n=r(15861),i=r(1413),a=r(15671),o=r(43144),s=r(60136),l=r(29388),u=r(87757),c=r(27366),h=r(76200),d=r(10064),p=r(32718),v=r(92026),f=r(97642),y=r(66978),_=r(35995),m=r(49861),g=r(63780),k=(r(93169),r(25243),r(38511)),b=r(69912),w=r(90724),Z=r(74184),C=r(17775),S=r(11936),T=r(6061),x=r(29598),L=r(45948),I=r(37762),D=r(42537),E=r(31009),V=p.Z.getLogger("esri.core.workers.WorkerHandle"),j=function(){function e(t,r,n){var o=this,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(0,a.Z)(this,e),this._mainMethod=r,this._listeners=[],this._promise=(0,E.bA)(t,(0,i.Z)((0,i.Z)({},s),{},{schedule:n})).then((function(e){if(void 0===o._thread){o._thread=e,o._promise=null,s.hasInitialize&&o.broadcast({},"initialize");var t,r=(0,I.Z)(o._listeners);try{for(r.s();!(t=r.n()).done;){var n=t.value;o._connectListener(n)}}catch(i){r.e(i)}finally{r.f()}}else e.close()})),this._promise.catch((function(e){return V.error("Failed to initialize ".concat(t," worker: ").concat(e))}))}return(0,o.Z)(e,[{key:"on",value:function(e,t){var r=this,n={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(n),this._connectListener(n),(0,D.kB)((function(){n.removed=!0,(0,g.Od)(r._listeners,n),r._thread&&(0,v.pC)(n.threadHandle)&&n.threadHandle.remove()}))}},{key:"destroy",value:function(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}},{key:"invoke",value:function(e,t){return this.invokeMethod(this._mainMethod,e,t)}},{key:"invokeMethod",value:function(e,t,r){var n=this;if(this._thread){var i=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:i,signal:r})}return this._promise?this._promise.then((function(){return(0,y.k_)(r),n.invokeMethod(e,t,r)})):Promise.reject(null)}},{key:"broadcast",value:function(e,t){var r=this;return this._thread?Promise.all(this._thread.broadcast(t,e)).then((function(){})):this._promise?this._promise.then((function(){return r.broadcast(e,t)})):Promise.reject()}},{key:"promise",get:function(){return this._promise}},{key:"_connectListener",value:function(e){this._thread&&this._thread.on(e.eventName,e.callback).then((function(t){e.removed||(e.threadHandle=t)}))}}]),e}(),A=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return(0,a.Z)(this,r),(e=t.call(this,"LercWorker","_decode",n,{strategy:"dedicated"})).schedule=n,e.ref=0,e}return(0,o.Z)(r,[{key:"decode",value:function(e,t,r){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},r):Promise.resolve(null)}},{key:"getTransferList",value:function(e){return[e.buffer]}},{key:"release",value:function(){var e=this;--this.ref<=0&&(M.forEach((function(t,r){t===e&&M.delete(r)})),this.destroy())}}]),r}(j),M=new Map;function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=M.get((0,v.Wg)(e));return t||((0,v.pC)(e)?(t=new A((function(t){return e.schedule(t)})),M.set(e,t)):(t=new A,M.set(null,t))),++t.ref,t}var P=p.Z.getLogger("esri.layers.ElevationLayer"),N=function(e){(0,s.Z)(c,e);var t=(0,l.Z)(c);function c(){var e;(0,a.Z)(this,c);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).copyright=null,e.heightModelInfo=null,e.path=null,e.opacity=1,e.operationalLayerType="ArcGISTiledElevationServiceLayer",e.sourceJSON=null,e.type="elevation",e.url=null,e.version=null,e._lercDecoder=O(),e}return(0,o.Z)(c,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,i.Z)({url:e},t):e}},{key:"destroy",value:function(){this._lercDecoder=(0,v.RY)(this._lercDecoder)}},{key:"minScale",get:function(){},set:function(e){this.constructed&&P.warn("".concat(this.declaredClass,".minScale support has been removed (since 4.5)"))}},{key:"maxScale",get:function(){},set:function(e){this.constructed&&P.warn("".concat(this.declaredClass,".maxScale support has been removed (since 4.5)"))}},{key:"readVersion",value:function(e,t){var r=t.currentVersion;return r||(r=9.3),r}},{key:"load",value:function(e){var t=this,r=(0,v.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new d.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(y.r9).then((function(){return t._fetchImageService(r)}))),Promise.resolve(this)}},{key:"fetchTile",value:function(e,t,r,n){var i=this,a=(0,v.pC)((n=n||{signal:null}).signal)?n.signal:n.signal=(new AbortController).signal,o={responseType:"array-buffer",signal:a},s={noDataValue:n.noDataValue,returnFileInfo:!0};return this.load().then((function(){return i._fetchTileAvailability(e,t,r,n)})).then((function(){return(0,h.default)(i.getTileUrl(e,t,r),o)})).then((function(e){return i._lercDecoder.decode(e.data,s,a)})).then((function(e){return{values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}}))}},{key:"getTileUrl",value:function(e,t,r){var n=!this.tilemapCache&&this.supportsBlankTile,a=(0,_.B7)((0,i.Z)((0,i.Z)({},this.parsedUrl.query),{},{blankTile:!n&&null}));return"".concat(this.parsedUrl.path,"/tile/").concat(e,"/").concat(t,"/").concat(r).concat(a?"?"+a:"")}},{key:"queryElevation",value:function(){var e=(0,n.Z)(u.mark((function e(t,n){var i,a;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(6382).then(r.bind(r,16382));case 2:return i=e.sent,a=i.ElevationQuery,(0,y.k_)(n),e.abrupt("return",(new a).query(this,t,n));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"createElevationSampler",value:function(){var e=(0,n.Z)(u.mark((function e(t,n){var i,a;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(6382).then(r.bind(r,16382));case 2:return i=e.sent,a=i.ElevationQuery,(0,y.k_)(n),e.abrupt("return",(new a).createSampler(this,t,n));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_fetchTileAvailability",value:function(e,t,r,n){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,r,n):Promise.resolve("unknown")}},{key:"_fetchImageService",value:function(){var e=(0,n.Z)(u.mark((function e(t){var r,n;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",this.sourceJSON);case 2:return r={query:(0,i.Z)({f:"json"},this.parsedUrl.query),responseType:"json",signal:t},e.next=5,(0,h.default)(this.parsedUrl.path,r);case 5:(n=e.sent).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=n.data,this.read(n.data,{origin:"service",url:this.parsedUrl});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"hasOverriddenFetchTile",get:function(){return!this.fetchTile.__isDefault__}}]),c}((0,C.Z)((0,S.Y)((0,T.q)((0,x.I)((0,f.R)(Z.Z))))));(0,c._)([(0,m.Cb)({json:{read:{source:"copyrightText"}}})],N.prototype,"copyright",void 0),(0,c._)([(0,m.Cb)({readOnly:!0,type:w.Z})],N.prototype,"heightModelInfo",void 0),(0,c._)([(0,m.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],N.prototype,"path",void 0),(0,c._)([(0,m.Cb)({type:["show","hide"]})],N.prototype,"listMode",void 0),(0,c._)([(0,m.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],N.prototype,"minScale",null),(0,c._)([(0,m.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],N.prototype,"maxScale",null),(0,c._)([(0,m.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],N.prototype,"opacity",void 0),(0,c._)([(0,m.Cb)({type:["ArcGISTiledElevationServiceLayer"]})],N.prototype,"operationalLayerType",void 0),(0,c._)([(0,m.Cb)()],N.prototype,"sourceJSON",void 0),(0,c._)([(0,m.Cb)({json:{read:!1},value:"elevation",readOnly:!0})],N.prototype,"type",void 0),(0,c._)([(0,m.Cb)(L.HQ)],N.prototype,"url",void 0),(0,c._)([(0,m.Cb)()],N.prototype,"version",void 0),(0,c._)([(0,k.r)("version",["currentVersion"])],N.prototype,"readVersion",null),(N=(0,c._)([(0,b.j)("esri.layers.ElevationLayer")],N)).prototype.fetchTile.__isDefault__=!0;var U=N}}]);
//# sourceMappingURL=9512.b60b66c5.chunk.js.map