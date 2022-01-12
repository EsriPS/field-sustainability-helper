"use strict";(self.webpackChunkfield_sustainability_helper=self.webpackChunkfield_sustainability_helper||[]).push([[6004],{56004:function(e,t,r){r.r(t),r.d(t,{FeatureServiceSnappingSourceWorker:function(){return se},default:function(){return ae}});var i=r(1413),n=r(15861),s=r(15671),a=r(43144),u=r(60136),o=r(29388),l=r(87757),c=r(27366),h=r(91505),f=r(100),d=r(92026),p=r(66978),v=r(8537),y=r(49861),g=r(63780),m=(r(93169),r(25243),r(69912)),k=r(78952),b=r(97114),C=r(83706),F=r(22824),w=r(43957),S=r(21149),I=r(29439),x=r(37762),Z=r(85015),T=function(e){(0,u.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).updating=!1,e.pending=[],e}return(0,a.Z)(r,[{key:"push",value:function(e,t){this.pending.push({promise:e,callback:t}),1===this.pending.length&&this.process()}},{key:"process",value:function(){var e=this;if(this.pending.length){this.updating=!0;var t=this.pending[0];t.promise.then((function(e){return t.callback(e)})).catch((function(){})).then((function(){e.pending.shift(),e.process()}))}else this.updating=!1}}]),r}(Z.Z);(0,c._)([(0,y.Cb)()],T.prototype,"updating",void 0),T=(0,c._)([(0,m.j)("esri.core.AsyncSequence")],T);var _=r(41691),P=r(42537),E=r(32718),A=r(53866),O=r(65156),R=r(83406),M=r(70436),z=r(5192),j=r(14921),B=function(){function e(t,r){(0,s.Z)(this,e),this.data=t,this.resolution=r,this.state={type:0},this.alive=!0}return(0,a.Z)(e,[{key:"process",value:function(e){switch(this.state.type){case 0:return this.state=this.gotoFetchCount(this.state,e),this.state.task.promise.then(e.resume,e.resume);case 1:case 3:break;case 2:return this.state=this.gotoFetchFeatures(this.state,e),this.state.task.promise.then(e.resume,e.resume);case 4:this.state=this.goToDone(this.state,e)}return null}},{key:"debugInfo",get:function(){return{data:this.data,featureCount:this.featureCount,state:this.stateToString}}},{key:"featureCount",get:function(){switch(this.state.type){case 0:case 1:return 0;case 2:return this.state.featureCount;case 3:return this.state.previous.featureCount;case 4:return this.state.features.length;case 5:return this.state.previous.features.length}}},{key:"stateToString",get:function(){switch(this.state.type){case 0:return"created";case 1:return"fetch-count";case 2:return"fetched-count";case 3:return"fetch-features";case 4:return"fetched-features";case 5:return"done"}}},{key:"gotoFetchCount",value:function(e,t){var r=this;return{type:1,previous:e,task:(0,p.vr)(function(){var e=(0,n.Z)(l.mark((function e(i){var n;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.mt)(t.fetchCount(r,i));case 2:n=e.sent,1===r.state.type&&(r.state=r.gotoFetchedCount(r.state,n.ok?n.value:1/0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},{key:"gotoFetchedCount",value:function(e,t){return{type:2,featureCount:t,previous:e}}},{key:"gotoFetchFeatures",value:function(e,t){var r=this;return{type:3,previous:e,task:(0,p.vr)(function(){var i=(0,n.Z)(l.mark((function i(n){var s;return l.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,j.mt)(t.fetchFeatures(r,e.featureCount,n));case 2:s=i.sent,3===r.state.type&&(r.state=r.gotoFetchedFeatures(r.state,s.ok?s.value:[]));case 4:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}())}}},{key:"gotoFetchedFeatures",value:function(e,t){return{type:4,previous:e,features:t}}},{key:"goToDone",value:function(e,t){return t.finish(this,e.features),{type:5,previous:e}}},{key:"reset",value:function(){var e=this.state;switch(this.state={type:0},e.type){case 0:case 2:case 4:case 5:break;case 1:case 3:e.task.abort()}}},{key:"intersects",value:function(e){return!(!(0,d.Wi)(e)&&this.data.extent)||((0,O.oJ)(e,q),(0,O.kK)(this.data.extent,q))}}]),e}(),q=(0,O.Ue)(),H=E.Z.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher"),J=function(e){(0,u.Z)(r,e);var t=(0,o.Z)(r);function r(e){var i;return(0,s.Z)(this,r),(i=t.call(this,e)).tilesOfInterest=[],i.availability=0,i.pendingTiles=new Map,i.pendingEdits=new T,i.pendingEditsAbortController=new AbortController,i}return(0,a.Z)(r,[{key:"minimumVerticesPerFeature",get:function(){var e;switch(null==(e=this.store)?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}},{key:"filter",set:function(e){var t=this._get("filter"),r=this.filterProperties(e);JSON.stringify(t)!==JSON.stringify(r)&&this._set("filter",r)}},{key:"customParameters",set:function(e){var t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}},{key:"configuration",get:function(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}},{key:"tileInfo",set:function(e){var t=this._get("tileInfo");t!==e&&((0,d.pC)(e)&&(0,d.pC)(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}},{key:"tileSize",set:function(e){this._get("tileSize")!==e&&this._set("tileSize",e)}},{key:"updating",get:function(){return this.updatingHandles.updating||this.pendingEdits.updating}},{key:"initialize",value:function(){var e=this;this.initializeFetchExtent(),this.updatingHandles.add(this,"configuration",(function(){return e.refresh()})),this.updatingHandles.add(this,"tilesOfInterest",(function(t,r){(0,g.fS)(t,r,(function(e,t){return e.id===t.id}))||e.process()}),1)}},{key:"destroy",value:function(){var e=this;this.pendingTiles.forEach((function(t){return e.deletePendingTile(t)})),this.pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this.pendingEditsAbortController.abort(),this.pendingEditsAbortController=null}},{key:"refresh",value:function(){var e=this;this.store.refresh(),this.pendingTiles.forEach((function(t){return e.deletePendingTile(t)})),this.process()}},{key:"applyEdits",value:function(e){var t=this;this.pendingEdits.push(e,function(){var e=(0,n.Z)(l.mark((function e(r){var n,s,a,u;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==r.addedFeatures.length||0!==r.updatedFeatures.length||0!==r.deletedFeatures.length){e.next=2;break}return e.abrupt("return");case 2:n=(0,x.Z)(t.pendingTiles);try{for(n.s();!(s=n.n()).done;)a=(0,I.Z)(s.value,2),a[1].reset()}catch(o){n.e(o)}finally{n.f()}return u=(0,i.Z)((0,i.Z)({},r),{},{deletedFeatures:r.deletedFeatures.map((function(e){var r=e.objectId,i=e.globalId;return r&&-1!==r?r:t.lookupObjectIdByGlobalId(i)}))}),e.next=7,t.updatingHandles.addPromise(t.store.processEdits(u,(function(e,r){return t.queryFeaturesById(e,r)}),t.pendingEditsAbortController.signal));case 7:t.processPendingTiles();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"initializeFetchExtent",value:function(){var e=this;if(this.capabilities.query.supportsExtent){var t=(0,p.vr)(function(){var t=(0,n.Z)(l.mark((function t(r){var i,n;return l.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,z.executeQueryForExtent)(e.url,new S.Z({where:"1=1",outSpatialReference:e.spatialReference,cacheHint:!!e.capabilities.query.supportsCacheHint||void 0}),{query:e.configuration.customParameters,signal:r});case 3:n=t.sent,e.store.extent=A.Z.fromJSON(null==(i=n.data)?void 0:i.extent),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),(0,p.r9)(t.t0),H.warn("Failed to fetch data extent",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}());this.updatingHandles.addPromise(t.promise.then((function(){return e.process()}))),this.handles.add((0,P.kB)((function(){return t.abort()})))}}},{key:"debugInfo",get:function(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this.pendingTiles.values()).map((function(e){return e.debugInfo})),storedTiles:this.store.debugInfo}}},{key:"process",value:function(){this.markTilesNotAlive(),this.createPendingTiles(),this.deletePendingTiles(),this.processPendingTiles()}},{key:"markTilesNotAlive",value:function(){var e,t=(0,x.Z)(this.pendingTiles);try{for(t.s();!(e=t.n()).done;){(0,I.Z)(e.value,2)[1].alive=!1}}catch(r){t.e(r)}finally{t.f()}}},{key:"createPendingTiles",value:function(){var e=this.collectMissingTilesInfo();if(this.setAvailability((0,d.Wi)(e)?1:e.coveredArea/e.fullArea),!(0,d.Wi)(e)){var t,r=(0,x.Z)(e.missingTiles);try{for(r.s();!(t=r.n()).done;){var i=t.value,n=i.data,s=i.resolution,a=this.pendingTiles.get(n.id);a?(a.resolution=s,a.alive=!0):this.createPendingTile(n,s)}}catch(u){r.e(u)}finally{r.f()}}}},{key:"collectMissingTilesInfo",value:function(){for(var e=this,t=null,r=this.tilesOfInterest.length-1;r>=0;r--){var i=this.tilesOfInterest[r],n=this.store.process(i,(function(t,r){return e.verifyTileComplexity(t,r)}));(0,d.Wi)(t)?t=n:t.prepend(n)}return t}},{key:"deletePendingTiles",value:function(){var e,t=(0,x.Z)(this.pendingTiles);try{for(t.s();!(e=t.n()).done;){var r=(0,I.Z)(e.value,2)[1];r.alive||this.deletePendingTile(r)}}catch(i){t.e(i)}finally{t.f()}}},{key:"processPendingTiles",value:function(){var e=this,t={fetchCount:function(t,r){return e.fetchCount(t,r)},fetchFeatures:function(t,r,i){return e.fetchFeatures(t,r,i)},finish:function(t,r){return e.finishPendingTile(t,r)},resume:function(){return e.processPendingTiles()}};if(this.ensureFetchAllCounts(t)){var r,i=(0,x.Z)(this.pendingTiles);try{for(i.s();!(r=i.n()).done;){var n=(0,I.Z)(r.value,2)[1];this.verifyTileComplexity(this.store.getFeatureCount(n.data),n.resolution)&&this.updatingHandles.addPromise(n.process(t))}}catch(s){i.e(s)}finally{i.f()}}}},{key:"verifyTileComplexity",value:function(e,t){return this.verifyVertexComplexity(e)&&this.verifyFeatureDensity(e,t)}},{key:"verifyVertexComplexity",value:function(e){return e*this.minimumVerticesPerFeature<L}},{key:"verifyFeatureDensity",value:function(e,t){if((0,d.Wi)(this.tileInfo))return!1;var r=this.tileSize*t;return e*(Q/(r*r))<D}},{key:"ensureFetchAllCounts",value:function(e){var t,r=!0,i=(0,x.Z)(this.pendingTiles);try{for(i.s();!(t=i.n()).done;){var n=(0,I.Z)(t.value,2)[1];n.state.type<2&&this.updatingHandles.addPromise(n.process(e)),n.state.type<=1&&(r=!1)}}catch(s){i.e(s)}finally{i.f()}return r}},{key:"finishPendingTile",value:function(e,t){this.store.add(e.data,t),this.deletePendingTile(e),this.updateAvailability()}},{key:"updateAvailability",value:function(){var e=this.collectMissingTilesInfo();this.setAvailability((0,d.Wi)(e)?1:e.coveredArea/e.fullArea)}},{key:"setAvailability",value:function(e){this._set("availability",e)}},{key:"createPendingTile",value:function(e,t){var r=new B(e,t);return this.pendingTiles.set(e.id,r),r}},{key:"deletePendingTile",value:function(e){e.reset(),this.pendingTiles.delete(e.data.id)}},{key:"fetchCount",value:function(){var e=(0,n.Z)(l.mark((function e(t,r){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.store.fetchCount(t.data,this.url,this.createCountQuery(t),{query:this.customParameters,timeout:W,signal:r}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"fetchFeatures",value:function(){var e=(0,n.Z)(l.mark((function e(t,r,i){var n,s,a,u,o,c,h,f,p;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=0,a=0,u=r;case 1:return o=this.createFeaturesQuery(t),c=this.setPagingParameters(o,s,u),e.next=5,this.queryFeatures(o,i);case 5:if(h=e.sent,f=h.features,p=h.exceededTransferLimit,c&&(s+=(0,d.Wg)(o.num)),a+=f.length,n=n?n.concat(f):f,u=r-a,c&&p&&!(u<=0)){e.next=10;break}return e.abrupt("return",n);case 10:e.next=1;break;case 12:case"end":return e.stop()}}),e,this)})));return function(t,r,i){return e.apply(this,arguments)}}()},{key:"filterProperties",value:function(e){return(0,d.Wi)(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}},{key:"lookupObjectIdByGlobalId",value:function(e){var t=this.globalIdField,r=this.objectIdField;if((0,d.Wi)(t))throw new Error("Expected globalIdField to be defined");var i=null;if(this.store.featureStore.forEach((function(n){var s;e===n.attributes[t]&&(i=null!=(s=n.objectId)?s:n.attributes[r])})),(0,d.Wi)(i))throw new Error("Expected to find a feature with globalId ".concat(e));return i}},{key:"queryFeaturesById",value:function(e,t){var r=this.createFeaturesQuery(null);return r.objectIds=e,this.queryFeatures(r,t)}},{key:"queryFeatures",value:function(e,t){return this.capabilities.query.supportsFormatPBF?this.queryFeaturesPBF(e,t):this.queryFeaturesJSON(e,t)}},{key:"queryFeaturesPBF",value:function(){var e=(0,n.Z)(l.mark((function e(t,r){var i,n,s;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.sourceSpatialReference,e.next=3,(0,z.executeQueryPBF)(this.url,t,new M.J({sourceSpatialReference:i}),{query:this.configuration.customParameters,timeout:W,signal:r});case 3:return n=e.sent,s=n.data,e.abrupt("return",(0,R.lM)(s));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeaturesJSON",value:function(){var e=(0,n.Z)(l.mark((function e(t,r){var i,n,s;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.sourceSpatialReference,e.next=3,(0,z.executeQuery)(this.url,t,i,{query:this.configuration.customParameters,timeout:W,signal:r});case 3:return n=e.sent,s=n.data,e.abrupt("return",(0,R.h_)(s,this.objectIdField));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"createCountQuery",value:function(e){var t=this.createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}},{key:"createFeaturesQuery",value:function(e){var t=this.createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,(0,d.pC)(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}},{key:"createBaseQuery",value:function(e){var t=new S.Z({returnZ:!1,returnM:!1,geometry:(0,d.pC)(this.tileInfo)&&(0,d.pC)(e)?(0,O.HH)(e.data.extent,this.tileInfo.spatialReference):void 0}),r=this.configuration.filter;return(0,d.pC)(r)&&(t.where=r.where,t.gdbVersion=r.gdbVersion,t.timeExtent=r.timeExtent),t.outSpatialReference=this.spatialReference,t}},{key:"setPagingParameters",value:function(e,t,r){if(!this.capabilities.query.supportsPagination)return!1;var i=this.capabilities.query,n=i.supportsMaxRecordCountFactor,s=i.supportsCacheHint,a=i.tileMaxRecordCount,u=i.maxRecordCount,o=i.supportsResultType,l=n?S.Z.MAX_MAX_RECORD_COUNT_FACTOR:1,c=l*((o||s)&&a?a:u||N);return e.start=t,n?(e.maxRecordCountFactor=Math.min(l,Math.ceil(r/c)),e.num=Math.min(r,e.maxRecordCountFactor*c)):e.num=Math.min(r,c),!0}}]),r}(_.r);(0,c._)([(0,y.Cb)({constructOnly:!0})],J.prototype,"url",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],J.prototype,"objectIdField",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],J.prototype,"globalIdField",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],J.prototype,"capabilities",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],J.prototype,"sourceSpatialReference",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],J.prototype,"spatialReference",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],J.prototype,"store",void 0),(0,c._)([(0,y.Cb)({readOnly:!0})],J.prototype,"minimumVerticesPerFeature",null),(0,c._)([(0,y.Cb)()],J.prototype,"filter",null),(0,c._)([(0,y.Cb)()],J.prototype,"customParameters",null),(0,c._)([(0,y.Cb)({readOnly:!0})],J.prototype,"configuration",null),(0,c._)([(0,y.Cb)()],J.prototype,"tileInfo",null),(0,c._)([(0,y.Cb)()],J.prototype,"tileSize",null),(0,c._)([(0,y.Cb)()],J.prototype,"tilesOfInterest",void 0),(0,c._)([(0,y.Cb)({readOnly:!0})],J.prototype,"updating",null),(0,c._)([(0,y.Cb)({readOnly:!0})],J.prototype,"availability",void 0),J=(0,c._)([(0,m.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],J);var N=2e3,W=6e5,L=1e6,Q=25,D=1;function V(e){return 32+e.length}function G(e){if(!e)return 0;var t=32;for(var r in e)if(e.hasOwnProperty(r)){var i=e[r];switch(typeof i){case"string":t+=V(i);break;case"number":t+=16;break;case"boolean":t+=4}}return t}function U(e,t){return 32+e.length*t}var K=r(66020),X=function(e){function t(){(0,s.Z)(this,t),this._store=new Map,this._byteSize=0}return(0,a.Z)(t,[{key:"set",value:function(e,t){this.delete(e),this._store.set(e,t),this._byteSize+=t.byteSize}},{key:"delete",value:function(e){var t=this._store.get(e);return!!this._store.delete(e)&&(this._byteSize-=t.byteSize,!0)}},{key:"get",value:function(e){return this.used(e),this._store.get(e)}},{key:"has",value:function(e){return this.used(e),this._store.has(e)}},{key:"clear",value:function(){this._store.clear()}},{key:"applyByteSizeLimit",value:function(e,t){var r,i=(0,x.Z)(this._store);try{for(i.s();!(r=i.n()).done;){var n=(0,I.Z)(r.value,2),s=n[0],a=n[1];if(this._byteSize<=e)break;this.delete(s),t(a)}}catch(u){i.e(u)}finally{i.f()}}},{key:"values",value:function(){return this._store.values()}},{key:e,value:function(){return this._store[Symbol.iterator]()}},{key:"used",value:function(e){var t=this._store.get(e);t&&(this._store.delete(e),this._store.set(e,t))}}]),t}(Symbol.iterator),$=function(e){(0,u.Z)(r,e);var t=(0,o.Z)(r);function r(e){var i;return(0,s.Z)(this,r),(i=t.call(this,e)).tileInfo=null,i.extent=null,i.maximumByteSize=10485760,i.tileBounds=new K.H,i.tiles=new X,i.refCounts=new Map,i.tileFeatureCounts=new Map,i.tmpBoundingRect=(0,O.Ue)(),i}return(0,a.Z)(r,[{key:"add",value:function(e,t){var r,i=this,n=[],s=(0,x.Z)(t);try{for(s.s();!(r=s.n()).done;){var a=r.value;0===this.referenceFeature(a.objectId)&&n.push(a)}}catch(u){s.e(u)}finally{s.f()}this.addTileStorage(e,new Set(t.map((function(e){return e.objectId}))),function(e){return e.reduce((function(e,t){return e+function(e){return 32+function(e){if((0,d.Wi)(e))return 0;var t=U(e.lengths,4);return 32+U(e.coords,8)+t}(e.geometry)+G(e.attributes)}(t)}),0)}(t)),this.featureStore.addMany(n),this.tiles.applyByteSizeLimit(this.maximumByteSize,(function(e){return i.removeTileStorage(e)}))}},{key:"destroy",value:function(){this.clear(),this.tileFeatureCounts.clear()}},{key:"clear",value:function(){this.featureStore.clear(),this.tileBounds.clear(),this.tiles.clear(),this.refCounts.clear()}},{key:"refresh",value:function(){this.clear(),this.tileFeatureCounts.clear()}},{key:"processEdits",value:function(e,t,r){return this.processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this.processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,r)}},{key:"addTileStorage",value:function(e,t,r){this.tiles.set(e.id,new Y(e,t,r)),this.tileBounds.set(e.id,e.extent),this.tileFeatureCounts.set(e.id,t.size)}},{key:"remove",value:function(e){var t=e.id,r=this.tiles.get(t);r&&this.removeTileStorage(r)}},{key:"removeTileStorage",value:function(e){var t,r=[],i=(0,x.Z)(e.objectIds);try{for(i.s();!(t=i.n()).done;){var n=t.value;1===this.unreferenceFeature(n)&&r.push(n)}}catch(a){i.e(a)}finally{i.f()}this.featureStore.removeManyById(r);var s=e.data.id;this.tiles.delete(s),this.tileBounds.delete(s)}},{key:"processEditsDelete",value:function(e){this.featureStore.removeManyById(e);var t,r=(0,x.Z)(this.tiles);try{for(r.s();!(t=r.n()).done;){var i,n=(0,I.Z)(t.value,2)[1],s=(0,x.Z)(e);try{for(s.s();!(i=s.n()).done;){var a=i.value;n.objectIds.delete(a)}}catch(c){s.e(c)}finally{s.f()}this.tileFeatureCounts.set(n.data.id,n.objectIds.size)}}catch(c){r.e(c)}finally{r.f()}var u,o=(0,x.Z)(e);try{for(o.s();!(u=o.n()).done;){var l=u.value;this.refCounts.delete(l)}}catch(c){o.e(c)}finally{o.f()}}},{key:"processEditsRefetch",value:function(){var e=(0,n.Z)(l.mark((function e(t,r,i){var n,s,a,u,o,c,h,f=this;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t,i);case 2:n=e.sent.features,s=this.featureStore,a=s.hasZ,u=s.hasM,o=(0,x.Z)(n);try{for(h=function(){var e=c.value,t=(0,R.$)(f.tmpBoundingRect,e.geometry,a,u);(0,d.Wi)(t)||f.tileBounds.forEachInBounds(t,(function(t){var r=f.tiles.get(t);f.featureStore.add(e),r.objectIds.has(e.objectId)||(r.objectIds.add(e.objectId),f.referenceFeature(e.objectId),f.tileFeatureCounts.set(r.data.id,r.objectIds.size))}))},o.s();!(c=o.n()).done;)h()}catch(l){o.e(l)}finally{o.f()}case 8:case"end":return e.stop()}}),e,this)})));return function(t,r,i){return e.apply(this,arguments)}}()},{key:"process",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};if((0,d.Wi)(this.tileInfo)||!e.extent||(0,d.pC)(this.extent)&&!(0,O.kK)((0,O.oJ)(this.extent,this.tmpBoundingRect),e.extent))return new te(e);if(this.tiles.has(e.id))return new te(e);var r=this.createTileTree(e,this.tileInfo);return this.simplify(r,t,null,0,1),this.collectMissingTiles(e,r,this.tileInfo)}},{key:"debugInfo",get:function(){var e=this;return Array.from(this.tiles.values()).map((function(t){var r=t.data;return{data:r,featureCount:e.tileFeatureCounts.get(r.id)||0}}))}},{key:"getFeatureCount",value:function(e){var t=this.tileFeatureCounts.get(e.id);return null!=t?t:0}},{key:"fetchCount",value:function(){var e=(0,n.Z)(l.mark((function e(t,r,i,n){var s,a;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==(s=this.tileFeatureCounts.get(t.id))){e.next=3;break}return e.abrupt("return",s);case 3:return e.next=5,(0,z.executeQueryForCount)(r,i,n);case 5:return a=e.sent,e.abrupt("return",(this.tileFeatureCounts.set(t.id,a.data.count),a.data.count));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,i,n){return e.apply(this,arguments)}}()},{key:"createTileTree",value:function(e,t){var r=this,i=new ee(e.level,e.row,e.col);return t.updateTileInfo(i,1),this.tileBounds.forEachInBounds(e.extent,(function(n){var s=r.tiles.get(n).data;r.tilesAreRelated(e,s)&&r.populateChildren(i,s,t,r.tileFeatureCounts.get(s.id)||0)})),i}},{key:"tilesAreRelated",value:function(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;var r=e.level<t.level,i=r?e:t,n=r?t:e,s=1<<n.level-i.level;return Math.floor(n.row/s)===i.row&&Math.floor(n.col/s)===i.col}},{key:"populateChildren",value:function(e,t,r,i){var n=t.level-e.level-1;if(n<0)e.isLeaf=!0;else{var s=t.row>>n,a=t.col>>n,u=e.row<<1,o=a-(e.col<<1)+(s-u<<1),l=e.children[o];if((0,d.pC)(l))this.populateChildren(l,t,r,i);else{var c=new ee(e.level+1,s,a);r.updateTileInfo(c,1),e.children[o]=c,this.populateChildren(c,t,r,i)}}}},{key:"simplify",value:function(e,t,r,i,n){var s=n*n;if(e.isLeaf)return t(this.getFeatureCount(e),n)?0:(this.remove(e),(0,d.pC)(r)&&(r.children[i]=null),s);for(var a=n/2,u=a*a,o=0,l=0;l<e.children.length;l++){var c=e.children[l];o+=(0,d.pC)(c)?this.simplify(c,t,e,l,a):u}return 0===o?this.mergeChildren(e):1-o/s<ie&&(this.purge(e),(0,d.pC)(r)&&(r.children[i]=null),o=s),o}},{key:"mergeChildren",value:function(e){var t=this,r=new Set,i=0;this.forEachLeaf(e,(function(e){var n=t.tiles.get(e.id);if(n){i+=n.byteSize;var s,a=(0,x.Z)(n.objectIds);try{for(a.s();!(s=a.n()).done;){var u=s.value;r.has(u)||(r.add(u),t.referenceFeature(u))}}catch(o){a.e(o)}finally{a.f()}t.remove(e)}})),this.addTileStorage(e,r,i),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this.tileFeatureCounts.set(e.id,r.size)}},{key:"forEachLeaf",value:function(e,t){var r,i=(0,x.Z)(e.children);try{for(i.s();!(r=i.n()).done;){var n=r.value;(0,d.Wi)(n)||(n.isLeaf?t(n):this.forEachLeaf(n,t))}}catch(s){i.e(s)}finally{i.f()}}},{key:"purge",value:function(e){if(!(0,d.Wi)(e))if(e.isLeaf)this.remove(e);else for(var t=0;t<e.children.length;t++){var r=e.children[t];this.purge(r),e.children[t]=null}}},{key:"collectMissingTiles",value:function(e,t,r){var i=new re(r,e,this.extent);return this.collectMissingTilesRecurse(t,i,1),i.info}},{key:"collectMissingTilesRecurse",value:function(e,t,r){if(!e.isLeaf)if(e.hasChildren)for(var i=r/2,n=0;n<e.children.length;n++){var s=e.children[n];(0,d.Wi)(s)?t.addMissing(e.level+1,(e.row<<1)+((2&n)>>1),(e.col<<1)+(1&n),i):this.collectMissingTilesRecurse(s,t,i)}else t.addMissing(e.level,e.row,e.col,r)}},{key:"referenceFeature",value:function(e){var t=(this.refCounts.get(e)||0)+1;return this.refCounts.set(e,t),1===t?0:2}},{key:"unreferenceFeature",value:function(e){var t=(this.refCounts.get(e)||0)-1;return 0===t?(this.refCounts.delete(e),1):(t>0&&this.refCounts.set(e,t),2)}},{key:"test",get:function(){var e=this;return{tiles:Array.from(this.tiles.values()).map((function(e){return"".concat(e.data.id,":[").concat(Array.from(e.objectIds),"]")})),featureReferences:Array.from(this.refCounts.keys()).map((function(t){return"".concat(t,":").concat(e.refCounts.get(t))}))}}}]),r}(Z.Z);(0,c._)([(0,y.Cb)({constructOnly:!0})],$.prototype,"featureStore",void 0),(0,c._)([(0,y.Cb)()],$.prototype,"tileInfo",void 0),(0,c._)([(0,y.Cb)()],$.prototype,"extent",void 0),(0,c._)([(0,y.Cb)()],$.prototype,"maximumByteSize",void 0),$=(0,c._)([(0,m.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],$);var Y=(0,a.Z)((function e(t,r,i){(0,s.Z)(this,e),this.data=t,this.objectIds=r,this.byteSize=i})),ee=function(){function e(t,r,i){(0,s.Z)(this,e),this.level=t,this.row=r,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}return(0,a.Z)(e,[{key:"hasChildren",get:function(){return!this.isLeaf&&((0,d.pC)(this.children[0])||(0,d.pC)(this.children[1])||(0,d.pC)(this.children[2])||(0,d.pC)(this.children[3]))}}]),e}(),te=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];(0,s.Z)(this,e),this.missingTiles=r,this.fullArea=0,this.coveredArea=0,this.fullArea=(0,O.SO)(t.extent),this.coveredArea=this.fullArea}return(0,a.Z)(e,[{key:"prepend",value:function(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea}}]),e}(),re=function(){function e(t,r,i){(0,s.Z)(this,e),this.tileInfo=t,this.extent=null,this.info=new te(r),(0,d.pC)(i)&&(this.extent=(0,O.oJ)(i))}return(0,a.Z)(e,[{key:"addMissing",value:function(e,t,r,i){var n={id:null,level:e,row:t,col:r};this.tileInfo.updateTileInfo(n,1),!(0,d.pC)(n.extent)||(0,d.pC)(this.extent)&&!(0,O.kK)(this.extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:i}),this.info.coveredArea-=(0,O.SO)(n.extent))}}]),e}(),ie=.18751,ne=r(94854),se=function(e){(0,u.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).isInitializing=!0,e.whenSetup=(0,p.dD)(),e.handles=new f.Z,e.updatingHandles=new ne.t,e.pendingApplyEdits=new Map,e}return(0,a.Z)(r,[{key:"updating",get:function(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}},{key:"destroy",value:function(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy()}},{key:"setup",value:function(){var e=(0,n.Z)(l.mark((function e(t){var r,n,s,a,u,o=this;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.serviceInfo,n=r.geometryType,s=r.objectIdField,a=r.timeInfo,u=r.fields,e.abrupt("return",(this.featureStore=new b.Z((0,i.Z)((0,i.Z)({},t.serviceInfo),{},{hasZ:!1,hasM:!1})),this.queryEngine=new C.Z({spatialReference:t.spatialReference,featureStore:this.featureStore,geometryType:n,fields:u,hasZ:!1,hasM:!1,objectIdField:s,timeInfo:a?w.Z.fromJSON(a):null}),this.featureFetcher=new J({store:new $({featureStore:this.featureStore}),url:t.serviceInfo.url,objectIdField:t.serviceInfo.objectIdField,globalIdField:t.serviceInfo.globalIdField,capabilities:t.serviceInfo.capabilities,spatialReference:k.Z.fromJSON(t.spatialReference),sourceSpatialReference:k.Z.fromJSON(t.serviceInfo.spatialReference)}),this.handles.add([this.featureFetcher.watch("availability",(function(e){return o.emit("notify-availability",{availability:e})}),!0),this.watch("updating",(function(){return o.notifyUpdating()}))]),this.whenSetup.resolve(),this.isInitializing=!1,this.configure(t.configuration)));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"configure",value:function(){var e=(0,n.Z)(l.mark((function e(t){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updatingHandles.addPromise(this.whenSetup.promise);case 2:return this.updateFeatureFetcherConfiguration(t),e.abrupt("return",{result:{}});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchCandidates",value:function(){var e=(0,n.Z)(l.mark((function e(t,r){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.whenSetup.promise;case 2:return(0,p.k_)(r),e.next=5,this.queryEngine.executeQueryForSnapping({point:t.point,distance:t.distance,types:t.types,query:(0,d.pC)(t.filter)?t.filter:{where:"1=1"}},(0,d.pC)(r)?r.signal:null);case 5:return e.t0=e.sent,e.abrupt("return",{result:e.t0});case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateTiles",value:function(){var e=(0,n.Z)(l.mark((function e(t,r){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updatingHandles.addPromise(this.whenSetup.promise);case 2:return(0,p.k_)(r),this.featureFetcher.tileSize=t.tileSize,this.featureFetcher.tilesOfInterest=t.tiles,this.featureFetcher.tileInfo=(0,d.pC)(t.tileInfo)?F.Z.fromJSON(t.tileInfo):null,e.abrupt("return",{result:{}});case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,n.Z)(l.mark((function e(t,r){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updatingHandles.addPromise(this.whenSetup.promise);case 2:return(0,p.k_)(r),this.featureFetcher.refresh(),e.abrupt("return",{result:{}});case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"whenNotUpdating",value:function(){var e=(0,n.Z)(l.mark((function e(t,r){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updatingHandles.addPromise(this.whenSetup.promise);case 2:return(0,p.k_)(r),e.next=5,(0,p.Hl)((0,v.cm)(this,"updating"),r);case 5:return e.abrupt("return",{result:{}});case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getDebugInfo",value:function(){var e=(0,n.Z)(l.mark((function e(t,r){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",((0,p.k_)(r),{result:this.featureFetcher.debugInfo}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"beginApplyEdits",value:function(){var e=(0,n.Z)(l.mark((function e(t,r){var i;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.updatingHandles.addPromise(this.whenSetup.promise),(0,p.k_)(r),i=(0,p.dD)(),e.abrupt("return",(this.pendingApplyEdits.set(t.id,i),this.featureFetcher.applyEdits(i.promise),this.updatingHandles.addPromise(i.promise),{result:{}}));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"endApplyEdits",value:function(){var e=(0,n.Z)(l.mark((function e(t,r){var i;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.pendingApplyEdits.get(t.id),e.abrupt("return",(i&&i.resolve(t.edits),(0,p.k_)(r),{result:{}}));case 2:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateFeatureFetcherConfiguration",value:function(e){this.featureFetcher.filter=(0,d.pC)(e.filter)?S.Z.fromJSON(e.filter):null,this.featureFetcher.customParameters=e.customParameters}},{key:"notifyUpdating",value:function(){this.emit("notify-updating",{updating:this.updating})}}]),r}(h.Z.EventedAccessor);function ae(){return new se}(0,c._)([(0,y.Cb)({readOnly:!0})],se.prototype,"updating",null),(0,c._)([(0,y.Cb)()],se.prototype,"isInitializing",void 0),se=(0,c._)([(0,m.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],se)}}]);
//# sourceMappingURL=6004.abc98ce5.chunk.js.map