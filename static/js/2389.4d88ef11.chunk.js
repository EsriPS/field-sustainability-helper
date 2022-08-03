"use strict";(globalThis.webpackChunkfield_sustainability_helper=globalThis.webpackChunkfield_sustainability_helper||[]).push([[2389],{42977:(e,t,i)=>{i.r(t),i.d(t,{default:()=>P});var r=i(27366),l=i(76200),a=i(10064),s=i(41691),n=i(92026),o=i(97642),c=i(66978),h=i(35995),p=i(49861),u=(i(63780),i(93169),i(89125)),d=i(38511),f=i(69912),v=i(31201),y=i(78952),m=i(74184),_=i(27961),b=i(17775),g=i(6741),w=i(11936),S=i(6693),T=i(46671),C=i(6061),O=i(29598),A=i(71684),L=i(56811),D=i(18870),$=i(25899),Z=i(45948),N=i(77990);const x=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let I=class extends((0,S.h)((0,D.x)((0,L.M)((0,C.q)((0,O.I)((0,b.Z)((0,g.O)((0,w.Y)((0,o.R)((0,s.p)((0,A.Q)((0,_.V)((0,T.N)(m.Z)))))))))))))){constructor(){super(...arguments),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,n.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(c.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}get attributionDataUrl(){var e;const t=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return t&&this._getDefaultAttribution(this._getMapName(t))}readSpatialReference(e,t){return(e=e||t.tileInfo&&t.tileInfo.spatialReference)&&y.Z.fromJSON(e)}writeSublayers(e,t,i,r){if(!this.loaded||!e)return;const l=e.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).toArray(),a=[],s={writeSublayerStructure:!1,...r};l.forEach((e=>{const t=e.write({},s);a.push(t)})),a.some((e=>Object.keys(e).length>1))&&(t.layers=a)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>(0,h.mN)(e).path)):null}fetchTile(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:a}=r,s=this.getTileUrl(e,t,i),n={responseType:"image",signal:a,query:{...this.refreshParameters}};return(0,l.default)(s,n).then((e=>e.data))}getTileUrl(e,t,i){const r=!this.tilemapCache&&this.supportsBlankTile,l=(0,h.B7)({...this.parsedUrl.query,blankTile:!r&&null,...this.customParameters,token:this.apiKey}),a=this.tileServers;return`${a&&a.length?a[t%a.length]:this.parsedUrl.path}/tile/${e}/${t}/${i}${l?"?"+l:""}`}_fetchService(e){return new Promise(((t,i)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new a.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new a.Z("tile-layer:undefined-url","layer's url is not defined");const r=(0,$.Qc)(this.parsedUrl.path);if((0,n.pC)(r)&&"ImageServer"===r.serverType)throw new a.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,l.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t,i)})).then((t=>{if(t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,$.M8)(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,t){if(!(0,$.B5)(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,l.default)(i,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new a.Z("tile-layer:version-not-available")}))}_getMapName(e){const t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t&&t[2]}_getDefaultAttribution(e){if(!e)return;let t;e=e.toLowerCase();for(let i=0,r=x.length;i<r;i++)if(t=x[i],t.toLowerCase().indexOf(e)>-1)return(0,h.hF)("//static.arcgis.com/attribution/"+t)}_getDefaultTileServers(e){const t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),i=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||i?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};(0,r._)([(0,p.Cb)({readOnly:!0})],I.prototype,"attributionDataUrl",null),(0,r._)([(0,p.Cb)({type:["show","hide","hide-children"]})],I.prototype,"listMode",void 0),(0,r._)([(0,p.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],I.prototype,"isReference",void 0),(0,r._)([(0,p.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],I.prototype,"operationalLayerType",void 0),(0,r._)([(0,p.Cb)({type:Boolean})],I.prototype,"resampling",void 0),(0,r._)([(0,p.Cb)()],I.prototype,"sourceJSON",void 0),(0,r._)([(0,p.Cb)({type:y.Z})],I.prototype,"spatialReference",void 0),(0,r._)([(0,d.r)("spatialReference",["spatialReference","tileInfo"])],I.prototype,"readSpatialReference",null),(0,r._)([(0,p.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],I.prototype,"path",void 0),(0,r._)([(0,p.Cb)({readOnly:!0})],I.prototype,"sublayers",void 0),(0,r._)([(0,v.c)("sublayers",{layers:{type:[N.Z]}})],I.prototype,"writeSublayers",null),(0,r._)([(0,p.Cb)({json:{read:!1,write:!1}})],I.prototype,"popupEnabled",void 0),(0,r._)([(0,p.Cb)()],I.prototype,"tileServers",null),(0,r._)([(0,u.p)("tileServers")],I.prototype,"castTileServers",null),(0,r._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],I.prototype,"type",void 0),(0,r._)([(0,p.Cb)(Z.HQ)],I.prototype,"url",void 0),I=(0,r._)([(0,f.j)("esri.layers.TileLayer")],I),I.prototype.fetchTile.__isDefault__=!0;const P=I},17775:(e,t,i)=>{i.d(t,{Z:()=>h});var r=i(27366),l=(i(59486),i(49861)),a=(i(63780),i(93169),i(25243),i(38511)),s=i(69912),n=i(71466),o=i(23638),c=i(78952);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new o.y({layer:this}):null}};return(0,r._)([(0,l.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"minScale",void 0),(0,r._)([(0,a.r)("service","minScale")],t.prototype,"readMinScale",null),(0,r._)([(0,l.Cb)()],t.prototype,"maxScale",void 0),(0,r._)([(0,a.r)("service","maxScale")],t.prototype,"readMaxScale",null),(0,r._)([(0,l.Cb)({type:c.Z})],t.prototype,"spatialReference",void 0),(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,r._)([(0,l.Cb)(n.h)],t.prototype,"tileInfo",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"tilemapCache",void 0),(0,r._)([(0,a.r)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),(0,r._)([(0,l.Cb)()],t.prototype,"version",void 0),t=(0,r._)([(0,s.j)("esri.layers.mixins.ArcGISCachedService")],t),t}},23638:(e,t,i)=>{i.d(t,{y:()=>O});var r,l=i(27366),a=i(76200),s=i(85015),n=i(59896),o=i(10064),c=i(41691),h=i(32718),p=i(16054),u=i(27546),d=i(66978),f=i(94172),v=i(99346),y=i(35995),m=i(49861),_=i(63780),b=(i(93169),i(89125)),g=i(69912),w=i(84652);class S{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),r=i%8,l=i>>3,a=this._tileAvailabilityBitSet;return l<0||l>a.length?"unknown":a[l]&1<<r?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let r=!0,l=!0;const a=Math.ceil(t*i/8),s=new Uint8Array(a);let n=0;for(let o=0;o<e.length;o++){const t=o%8;e[o]?(l=!1,s[n]|=1<<t):r=!1,7===t&&++n}l?this._allAvailability="unavailable":r?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=s,this.byteSize+=s.length)}static fromDefinition(e,t){const i=e.service.request||a.default,{row:r,col:l,width:s,height:n}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:r,left:l,width:s,height:n},valid:!0,data:(0,_.a9)(s*n,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==r||e.location.left!==l||e.location.width!==s||e.location.height!==n))throw new o.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:r,left:l,width:s,height:n}});return S.fromJSON(e)}))}static fromJSON(e){S._validateJSON(e);const t=new S;return t.location=Object.freeze((0,w.d9)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static _validateJSON(e){if(!e||!e.location)throw new o.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new o.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new o.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new o.Z("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new o.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function T(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const C=h.Z.getLogger("esri.layers.support.TilemapCache");let O=r=class extends((0,c.p)(s.Z)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2*n.Y8.MEGABYTES,this.request=a.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new p.Z(this.cacheByteSize),this.handles.add([this.watch(["layer.parsedUrl","layer.tileServers?","layer.apiKey?","layer.customParameters?"],(()=>this._initializeTilemapDefinition())),(0,f.YP)((()=>{var e,t;return null==(e=this.layer)||null==(t=e.tileInfo)?void 0:t.lods}),(e=>this._initializeAvailableLevels(e)),f.tX)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(C.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,r){if(!this._availableLevels[e])return Promise.reject(new o.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,a=this._tilemapFromCache(e,t,i,l);if(a)return Promise.resolve(a);const s=r&&r.signal;return r={...r,signal:null},new Promise(((e,t)=>{(0,d.fu)(s,(()=>t((0,d.zE)())));const i=T(l);let a=this._pendingTilemapRequests[i];if(!a){a=S.fromDefinition(l,r).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=a,a.then(e,e)}a.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,r){return this._availableLevels[e]?this.fetchTilemap(e,t,i,r).catch((e=>e)).then((r=>{if(r instanceof S){const l=r.getAvailability(t,i);return"unavailable"===l?Promise.reject(new o.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):l}if((0,d.D_)(r))throw r;return"unknown"})):Promise.reject(new o.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,r,l){r.level=e,r.row=t,r.col=i;const a=this.layer.tileInfo;a.updateTileInfo(r);const s=this.fetchAvailability(e,t,i,l).catch((e=>{if((0,d.D_)(e))throw e;if(a.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,l,s),s}async _fetchAvailabilityUpsamplePrefetch(e,t,i,l,a,s){if(!this._prefetchingEnabled)return;const n=`prefetch-${e}`;if(this.handles.has(n))return;const o=new AbortController;s.then((()=>o.abort()),(()=>o.abort()));let c=!1;const h={remove(){c||(c=!0,o.abort())}};if(this.handles.add(h,n),await(0,v.MU)(10,o.signal).catch((()=>{})),c||(c=!0,this.handles.remove(n)),(0,d.Hc)(o))return;const p={id:e,level:t,row:i,col:l},u={...a,signal:o.signal},f=this.layer.tileInfo;for(let d=0;r._prefetches.length<r._maxPrefetch&&f.upsampleTile(p);++d){const e=this.fetchAvailability(p.level,p.row,p.col,u);r._prefetches.push(e);const t=()=>{r._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:i,customParameters:r}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:(0,y.B7)({...t.query,...r,token:null!=i?i:null==(e=t.query)?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const l=T(r);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,r)=>!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}};O._maxPrefetch=4,O._prefetches=new u.Z({initialSize:r._maxPrefetch}),(0,l._)([(0,m.Cb)({constructOnly:!0,type:Number})],O.prototype,"levels",void 0),(0,l._)([(0,b.p)("levels")],O.prototype,"castLevels",null),(0,l._)([(0,m.Cb)({readOnly:!0,type:Number})],O.prototype,"size",null),(0,l._)([(0,m.Cb)({constructOnly:!0,type:Number})],O.prototype,"cacheByteSize",void 0),(0,l._)([(0,m.Cb)({constructOnly:!0})],O.prototype,"layer",void 0),(0,l._)([(0,m.Cb)({constructOnly:!0})],O.prototype,"request",void 0),O=r=(0,l._)([(0,g.j)("esri.layers.support.TilemapCache")],O)},71466:(e,t,i)=>{i.d(t,{d:()=>a,h:()=>l});var r=i(22824);const l={type:r.Z,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:a}}}}};function a(e,t,i,l){if(!e)return null;const{minScale:a,maxScale:s,minLOD:n,maxLOD:o}=t;if(null!=n&&null!=o)return l&&l.ignoreMinMaxLOD?r.Z.fromJSON(e):r.Z.fromJSON({...e,lods:e.lods.filter((e=>{let{level:t}=e;return null!=t&&t>=n&&t<=o}))});if(0!==a&&0!==s){const t=e=>Math.round(1e4*e)/1e4,i=a?t(a):1/0,l=s?t(s):-1/0;return r.Z.fromJSON({...e,lods:e.lods.filter((e=>{const r=t(e.scale);return r<=i&&r>=l}))})}return r.Z.fromJSON(e)}},10141:(e,t,i)=>{function r(e){var t;const i=e.layer;return"floorInfo"in i&&null!=(t=i.floorInfo)&&t.floorField&&"floors"in e.view?s(e.view.floors,i.floorInfo.floorField):null}function l(e,t){var i;return"floorInfo"in t&&null!=(i=t.floorInfo)&&i.floorField?s(e,t.floorInfo.floorField):null}function a(e,t){const{definitionExpression:i}=t;return e?i?`(${i}) AND (${e})`:e:i}function s(e,t){if(null==e||!e.length)return null;const i=e.filter((e=>""!==e)).map((e=>`'${e}'`));return i.push("''"),`${t} IN (${i.join(",")}) OR ${t} IS NULL`}i.d(t,{Hp:()=>a,cx:()=>r,ff:()=>l})}}]);
//# sourceMappingURL=2389.4d88ef11.chunk.js.map