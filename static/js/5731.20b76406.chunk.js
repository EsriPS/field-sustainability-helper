"use strict";(globalThis.webpackChunkfield_sustainability_helper=globalThis.webpackChunkfield_sustainability_helper||[]).push([[5731,2078],{95731:(e,t,r)=>{r.d(t,{xp:()=>q,Vt:()=>O});var a=r(27366),o=r(76200),s=r(10064),i=(r(93169),r(32718)),n=r(92026),l=r(66978),p=r(35995),c=r(49861),u=(r(63780),r(25243),r(38511)),d=r(69912),h=r(31201),y=r(15909),m=r(53866),f=r(90724),v=r(78952),g=r(25899),w=r(45948),S=r(30494),I=r(70032),_=r(98995),b=r(14921),x=r(71907),R=r(62078);async function T(e,t,r){if(!t||!t.resources)return;const a=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const o=new Set(t.resources.toKeep.map((e=>e.resource.path))),i=new Set,n=[];o.forEach((t=>{a.delete(t),e.paths.push(t)}));for(const s of t.resources.toUpdate)if(a.delete(s.resource.path),o.has(s.resource.path)||i.has(s.resource.path)){const{resource:t,content:a,finish:o,error:i}=s,l=(0,R.getSiblingOfSameTypeI)(t,(0,x.D)());e.paths.push(l.path),n.push(A({resource:l,content:a,finish:o,error:i},r))}else e.paths.push(s.resource.path),n.push(N(s,r)),i.add(s.resource.path);for(const s of t.resources.toAdd)n.push(A(s,r)),e.paths.push(s.resource.path);if(a.forEach((e=>{const r=t.portalItem.resourceFromPath(e);n.push(r.portalItem.removeResource(r).catch((()=>{})))})),0===n.length)return;const p=await(0,l.as)(n);(0,l.k_)(r);const c=p.filter((e=>"error"in e)).map((e=>e.error));if(c.length>0)throw new s.Z("save:resources","Failed to save one or more resources",{errors:c})}async function A(e,t){const r=await(0,b.q6)(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function N(e,t){const r=await(0,b.q6)(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}const P=i.Z.getLogger("esri.layers.mixins.SceneService"),O=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,l.Ds)((async(e,t,r)=>{switch(e){case q.SAVE:return this._save(t);case q.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return v.Z.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,a=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=a?new v.Z(a):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const a=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return m.Z.fromJSON(a,r)}const a=t.store,o=this._readSpatialReference(t);return null==o||null==a||null==a.extent||!Array.isArray(a.extent)||a.extent.some((e=>e<U))?null:new m.Z({xmin:a.extent[0],ymin:a.extent[1],xmax:a.extent[2],ymax:a.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,a=null!=r.version?r.version.toString():"";return this.parseVersionString(a)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return(0,g.a7)(this.url,t.name);let a=t.name;if(!a&&this.url){const e=(0,g.Qc)(this.url);(0,n.pC)(e)&&(a=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(a=r+" - "+a),(0,g.ld)(a)}set url(e){const t=(0,g.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:P});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,a){(0,g.wH)(this,e,"layers",t,a)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=(0,p.mN)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,S.T)(this.parsedUrl.path,this.rootNode,e,this.apiKey,P,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,r;const a=e.rootIndex%e.pageSize,o=null==(t=e.rootPage)||null==(r=t.nodes)?void 0:r[a];if(null==o||null==o.obb||null==o.obb.center||null==o.obb.halfSize)throw new s.Z("sceneservice:invalid-node-page","Invalid node page.");if(o.obb.center[0]<U||null==this.fullExtent||this.fullExtent.hasZ)return;const i=o.obb.halfSize,n=o.obb.center[2],l=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=n-l,this.fullExtent.zmax=n+l}else if("node"===(null==e?void 0:e.type)){var a;const t=null==(a=e.rootNode)?void 0:a.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<U)return;const r=t[2],o=t[3];this.fullExtent.zmin=r-o,this.fullExtent.zmax=r+o}}async _fetchService(e){if(null==this.url)throw new s.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,o.default)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await(0,o.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let r=!1;if(t.data.layerType&&"Voxel"===t.data.layerType&&(r=!0),r)return this._fetchVoxelServiceLayer();const a=t.data;this.read(a,{origin:"service",url:this.parsedUrl}),this.validateLayer(a)}async _fetchVoxelServiceLayer(e){const t=(await(0,o.default)(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl}),this.validateLayer(t)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const a=t.getTypeKeywords();for(const o of a)e.typeKeywords.push(o);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===C.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const r={...K,...t};let a=_.default.from(e);a||(P.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new s.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),a.id&&(a=a.clone(),a.id=null);const o=a.portal||I.Z.getDefault();await this._ensureLoadBeforeSave(),a.type=Z,a.portal=o;const i={origin:"portal-item",url:null,messages:[],portal:o,portalItem:a,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations),await this._validateAgainstJSONSchema(n,i,r),a.url=this.url,a.title||(a.title=this.title),this._updateTypeKeywords(a,r,C.newItem),await o._signIn(),await o.user.addItem({item:a,folder:r&&r.folder,data:n}),await T(this.resourceReferences,i,null),this.portalItem=a,(0,y.D)(i),i.portalItem=a,a}async _save(e){const t={...K,...e};this.portalItem||(P.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new s.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==Z&&(P.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+Z),await Promise.reject(new s.Z("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${Z}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&(0,p.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||I.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},a={layers:[this.write({},r)]};return await Promise.all(r.resources.pendingOperations),await this._validateAgainstJSONSchema(a,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,C.existingItem),await this.portalItem.update({data:a}),await T(this.resourceReferences,r,null),(0,y.D)(r),this.portalItem}async _validateAgainstJSONSchema(e,t,a){let o=t.messages.filter((e=>"error"===e.type)).map((e=>new s.Z(e.name,e.message,e.details)));if(a&&a.validationOptions.ignoreUnsupported&&(o=o.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),a.validationOptions.enabled||E){const t=(await r.e(6168).then(r.bind(r,36168))).validate(e,a.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(P.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===a.validationOptions.failPolicy){const e=t.map((e=>new s.Z("sceneservice:schema-validation",e))).concat(o);throw new s.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(o.length>0)throw new s.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}};return(0,a._)([(0,c.Cb)(w.id)],t.prototype,"id",void 0),(0,a._)([(0,c.Cb)({type:v.Z})],t.prototype,"spatialReference",void 0),(0,a._)([(0,u.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,a._)([(0,c.Cb)({type:m.Z})],t.prototype,"fullExtent",void 0),(0,a._)([(0,u.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,a._)([(0,c.Cb)({readOnly:!0,type:f.Z})],t.prototype,"heightModelInfo",void 0),(0,a._)([(0,c.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,a._)([(0,c.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,a._)([(0,c.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,a._)([(0,u.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,a._)([(0,c.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,a._)([(0,c.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,a._)([(0,c.Cb)({type:String})],t.prototype,"title",void 0),(0,a._)([(0,u.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,a._)([(0,u.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,a._)([(0,c.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,a._)([(0,c.Cb)(w.HQ)],t.prototype,"url",null),(0,a._)([(0,h.c)("url")],t.prototype,"writeUrl",null),(0,a._)([(0,c.Cb)()],t.prototype,"parsedUrl",null),(0,a._)([(0,c.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,a._)([(0,c.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,a._)([(0,d.j)("esri.layers.mixins.SceneService")],t),t},U=-1e38,E=!1;var C,j;(j=C||(C={}))[j.existingItem=0]="existingItem",j[j.newItem=1]="newItem";const Z="Scene Service",K={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var q;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(q||(q={}))},30494:(e,t,r)=>{r.d(t,{T:()=>i});var a=r(76200),o=r(10064),s=r(92026);async function i(e,t,r,i,n,l){let p=null;if((0,s.pC)(r)){const t=`${e}/nodepages/`,o=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,a.default)(o,{query:{f:"json",token:i},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(d){(0,s.pC)(n)&&n.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",o,d),p=d}}if(!t)return null;const c=`${e}/nodes/`,u=c+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await(0,a.default)(u,{query:{f:"json",token:i},responseType:"json",signal:l})).data,urlPrefix:c}}catch(d){throw new o.Z("sceneservice:root-node-missing","Root node missing.",{pageError:p,nodeError:d,url:u})}}},62078:(e,t,r)=>{r.r(t),r.d(t,{addOrUpdateResource:()=>l,contentToBlob:()=>h,fetchResources:()=>n,getSiblingOfSameType:()=>y,getSiblingOfSameTypeI:()=>m,removeAllResources:()=>c,removeResource:()=>p,splitPrefixFileNameAndExtension:()=>d});var a=r(76200),o=r(10064),s=r(92026),i=r(35995);async function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;await e.load(r);const a=(0,i.v_)(e.itemUrl,"resources"),{start:o=1,num:n=10,sortOrder:l="asc",sortField:p="created"}=t,c={query:{start:o,num:n,sortOrder:l,sortField:p,token:e.apiKey},signal:(0,s.U2)(r,"signal")},u=await e.portal._request(a,c);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((t=>{let{created:r,size:a,resource:o}=t;return{created:new Date(r),size:a,resource:e.resourceFromPath(o)}}))}}async function l(e,t,r,a){if(!e.hasPath())throw new o.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const n=e.portalItem;await n.load(a);const l=(0,i.v_)(n.userItemUrl,"add"===t?"addResources":"updateResources"),[p,c]=u(e.path),d=await h(r),y=new FormData;return p&&"."!==p&&y.append("resourcesPrefix",p),y.append("fileName",c),y.append("file",d,c),y.append("f","json"),(0,s.pC)(a)&&a.access&&y.append("access",a.access),await n.portal._request(l,{method:"post",body:y,signal:(0,s.U2)(a,"signal")}),e}async function p(e,t,r){if(!t.hasPath())throw new o.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const a=(0,i.v_)(e.userItemUrl,"removeResources");await e.portal._request(a,{method:"post",query:{resource:t.path},signal:(0,s.U2)(r,"signal")}),t.portalItem=null}async function c(e,t){await e.load(t);const r=(0,i.v_)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:(0,s.U2)(t,"signal")})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=function(e){const t=(0,i.Ml)(e);return(0,s.Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[a,o]=u(t);return[a,o,r]}async function h(e){return e instanceof Blob?e:(await(0,a.default)(e.url,{responseType:"blob"})).data}function y(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath((0,i.v_)(r,t+a))}function m(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath((0,i.v_)(r,t+a))}}}]);
//# sourceMappingURL=5731.20b76406.chunk.js.map