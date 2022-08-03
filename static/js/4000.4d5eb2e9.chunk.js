"use strict";(globalThis.webpackChunkfield_sustainability_helper=globalThis.webpackChunkfield_sustainability_helper||[]).push([[4e3],{14e3:(e,t,i)=>{i.d(t,{Z:()=>E});var s=i(10064),r=i(84652),a=i(92026),n=i(18759),o=i(68860),u=i(41414),l=i(65156),c=i(376),h=i(77981),p=i(50689),d=i(92975),y=i(33392),f=i(19995),m=i(60480),g=i(92536),x=i(77095),_=i(20311),S=i(31904),w=i(52410),R=i(819),Q=i(99912);const v="feature-store:unsupported-query";const F=new Set,I=new n.WJ(2e6);let C=0;class E{constructor(e){this.capabilities={query:m.g},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",(()=>this.clearCache())),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new n.Xq(C+++"$$",I)),this.fieldsIndex=new w.Z(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=(0,a.hw)(this._frameTask),this.clearCache(),(0,a.SC)(this._geometryQueryCache),this._changeHandle=(0,a.hw)(this._changeHandle),(0,a.SC)(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const e=this.featureStore.fullBounds;return e?{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:(0,S.S2)(this.spatialReference)}:null}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=(0,_.R)(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){this._geometryQueryCache&&this._geometryQueryCache.clear(),this._allItems=null,this._timeExtent=null}async executeQuery(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,s=(0,r.d9)(t);try{s=await this._schedule((()=>(0,S.Up)(s,this.definitionExpression,this.spatialReference)),i),s=await this._reschedule((()=>this._checkQuerySupport(s)),i),e=await this._reschedule((()=>this._executeGeometryQuery(s,i)),i),e=await this._reschedule((()=>e.executeAggregateIdsQuery(s)),i),e=await this._reschedule((()=>e.executeObjectIdsQuery(s)),i),e=await this._reschedule((()=>e.executeTimeQuery(s)),i),e=await this._reschedule((()=>e.executeAttributesQuery(s)),i)}catch(a){if(a!==S.vF)throw a;e=new g.Z([],null,this)}return e.createQueryResponse(s)}async executeQueryForCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,i=(0,r.d9)(e);i.returnGeometry=!1,i.returnCentroid=!1,i.outSR=null;try{i=await this._schedule((()=>(0,S.Up)(i,this.definitionExpression,this.spatialReference)),t),i=await this._reschedule((()=>this._checkQuerySupport(i)),t);let e=await this._reschedule((()=>this._executeGeometryQuery(i,t)),t);return e=await this._reschedule((()=>e.executeAggregateIdsQuery(i)),t),e=await this._reschedule((()=>e.executeObjectIdsQuery(i)),t),e=await this._reschedule((()=>e.executeTimeQuery(i)),t),e=await this._reschedule((()=>e.executeAttributesQuery(i)),t),e.createQueryResponseForCount(i)}catch(s){if(s!==S.vF)throw s;return 0}}async executeQueryForExtent(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,s=(0,r.d9)(t);const a=s.outSR;try{s=await this._schedule((()=>(0,S.Up)(s,this.definitionExpression,this.spatialReference)),i),s=await this._reschedule((()=>this._checkQuerySupport(s)),i),s.returnGeometry=!0,s.returnCentroid=!1,s.outSR=null,e=await this._reschedule((()=>this._executeGeometryQuery(s,i)),i),e=await this._reschedule((()=>e.executeAggregateIdsQuery(s)),i),e=await this._reschedule((()=>e.executeObjectIdsQuery(s)),i),e=await this._reschedule((()=>e.executeTimeQuery(s)),i),e=await this._reschedule((()=>e.executeAttributesQuery(s)),i);const t=e.size;if(!t)return{count:t,extent:null};(0,u.t8)(G,u.Gv),this.featureStore.forEachBounds(e.items,(e=>(0,u.TC)(G,e)),b);const r={xmin:G[0],ymin:G[1],xmax:G[3],ymax:G[4],spatialReference:(0,S.S2)(this.spatialReference)};this.hasZ&&isFinite(G[2])&&isFinite(G[5])&&(r.zmin=G[2],r.zmax=G[5]);const n=(0,f.iV)(r,e.spatialReference,a);if(n.spatialReference=(0,S.S2)(a||this.spatialReference),n.xmax-n.xmin==0){const e=(0,o.c9)(n.spatialReference);n.xmin-=e,n.xmax+=e}if(n.ymax-n.ymin==0){const e=(0,o.c9)(n.spatialReference);n.ymin-=e,n.ymax+=e}if(this.hasZ&&null!=n.zmin&&null!=n.zmax&&n.zmax-n.zmin==0){const e=(0,o.c9)(n.spatialReference);n.zmin-=e,n.zmax+=e}return{count:t,extent:n}}catch(n){if(n===S.vF)return{count:0,extent:null};throw n}}async executeQueryForIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return this.executeQueryForIdSet(e,t).then((e=>Array.from(e)))}async executeQueryForIdSet(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,s=(0,r.d9)(t);s.returnGeometry=!1,s.returnCentroid=!1,s.outSR=null;try{s=await this._schedule((()=>(0,S.Up)(s,this.definitionExpression,this.spatialReference)),i),s=await this._reschedule((()=>this._checkQuerySupport(s)),i),e=await this._reschedule((()=>this._executeGeometryQuery(s,i)),i),e=await this._reschedule((()=>e.executeAggregateIdsQuery(s)),i),e=await this._reschedule((()=>e.executeObjectIdsQuery(s)),i),e=await this._reschedule((()=>e.executeTimeQuery(s)),i),e=await this._reschedule((()=>e.executeAttributesQuery(s)),i);const t=e.items,r=new Set;return await this._reschedule((()=>{for(const i of t)r.add(e.featureAdapter.getObjectId(i))}),i),r}catch(a){if(a===S.vF)return new Set;throw a}}async executeQueryForSnapping(e,t){const{point:i,distance:s,types:r}=e;if(r===g.r.NONE)return{candidates:[]};const n=await this._reschedule((()=>this._checkQuerySupport(e.query)),t),o=!(0,d.fS)(i.spatialReference,this.spatialReference);o&&await(0,f._W)(i.spatialReference,this.spatialReference);const u="number"==typeof s?s:s.x,l="number"==typeof s?s:s.y,c={xmin:i.x-u,xmax:i.x+u,ymin:i.y-l,ymax:i.y+l,spatialReference:i.spatialReference},y=o?(0,f.iV)(c,this.spatialReference):c;if(!y)return{candidates:[]};const m=(await(0,p.aX)((0,h.im)(i),null,{signal:t}))[0],x=(await(0,p.aX)((0,h.im)(y),null,{signal:t}))[0];if((0,a.Wi)(m)||(0,a.Wi)(x))return{candidates:[]};let _=new g.Z(this._searchFeatures(this._getQueryBBoxes(x.toJSON())),null,this);_=await this._reschedule((()=>_.executeObjectIdsQuery(n)),t),_=await this._reschedule((()=>_.executeTimeQuery(n)),t),_=await this._reschedule((()=>_.executeAttributesQuery(n)),t);const S=m.toJSON(),w=o?(0,f.iV)(S,this.spatialReference):S,R=o?Math.max(y.xmax-y.xmin,y.ymax-y.ymin)/2:s;return _.createSnappingResponse({...e,point:w,distance:R},i.spatialReference)}async executeQueryForLatestObservations(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(!this.timeInfo||!this.timeInfo.trackIdField)throw new s.Z(v,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});let i,a=(0,r.d9)(e);try{a=await this._schedule((()=>(0,S.Up)(a,this.definitionExpression,this.spatialReference)),t),a=await this._reschedule((()=>this._checkQuerySupport(a)),t),i=await this._reschedule((()=>this._executeGeometryQuery(a,t)),t),i=await this._reschedule((()=>i.executeAggregateIdsQuery(a)),t),i=await this._reschedule((()=>i.executeObjectIdsQuery(a)),t),i=await this._reschedule((()=>i.executeTimeQuery(a)),t),i=await this._reschedule((()=>i.executeAttributesQuery(a)),t),i=await this._reschedule((()=>i.filterLatest()),t)}catch(n){if(n!==S.vF)throw n;i=new g.Z([],null,this)}return i.createQueryResponse(a)}async executeQueryForSummaryStatistics(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;const{field:s,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:a},i)).createSummaryStatisticsResponse(e,t)}async executeQueryForUniqueValues(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;const{field:s,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:s,valueExpression:r},i)).createUniqueValuesResponse(e,t)}async executeQueryForClassBreaks(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;const{field:s,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:a},i)).createClassBreaksResponse(e,t)}async executeQueryForHistogram(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;const{field:s,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:a},i)).createHistogramResponse(e,t)}async _schedule(e,t){return(0,a.pC)(this._frameTask)?this._frameTask.schedule(e,t):e(Q.G5)}async _reschedule(e,t){return(0,a.pC)(this._frameTask)?this._frameTask.reschedule(e,t):e(Q.G5)}_getAll(){if(!this._allItems){const e=[];this.featureStore.forEach((t=>e.push(t))),this._allItems=new g.Z(e,null,this)}return this._allItems}async _executeGeometryQuery(e,t){const{geometry:i,outSR:s,spatialRel:r,returnGeometry:n,returnCentroid:o}=e,u=this.featureStore.featureSpatialReference,l=i&&u&&u!==i.spatialReference?(0,f.iV)(i,u):i,c=n||o,h=(0,d.JY)(s)&&!(0,d.fS)(this.spatialReference,s),p=this._geometryQueryCache?h&&c?JSON.stringify({originalFilterGeometry:i,spatialRelationship:r,outSpatialReference:s}):JSON.stringify({originalFilterGeometry:i,spatialRelationship:r}):null;if(p){const e=this._geometryQueryCache.get(p);if(!(0,a.o8)(e))return e}const y=async e=>{if(h&&c){const t=await e.project(s);return p&&this._geometryQueryCache.put(p,t,t.size||1),t}return p&&this._geometryQueryCache.put(p,e,e.size||1),e};if(!l)return y(this._getAll());const m=this.featureAdapter;if("esriSpatialRelDisjoint"===r){const e=this._searchFeatures(this._getQueryBBoxes(i));if(!e.length)return y(this._getAll());let s,a;const n=new Set;for(const t of e)n.add(m.getObjectId(t));await this._reschedule((()=>{let e=0;s=new Array(n.size),this.featureStore.forEach((t=>s[e++]=t)),a=n}),t);const o=await this._reschedule((async()=>{const e=await(0,x.cW)(r,l,this.geometryType,this.hasZ,this.hasM);return new g.Z(await this._runSpatialFilter(s,(t=>!a.has(m.getObjectId(t))||e(m.getGeometry(t))),t),i,this)}),t);return y(o)}const _=this._searchFeatures(this._getQueryBBoxes(i));if(!_.length){const e=new g.Z([],i,this);return p&&this._geometryQueryCache.put(p,e,e.size||1),e}if(this._canExecuteSoloPass(l,e))return y(new g.Z(_,i,this));const S=await(0,x.cW)(r,l,this.geometryType,this.hasZ,this.hasM),w=await this._runSpatialFilter(_,(e=>S(m.getGeometry(e))),t);return y(new g.Z(w,i,this))}async _runSpatialFilter(e,t,i){if(!t)return e;if((0,a.Wi)(this._frameTask))return e.filter((e=>t(e)));let s=0;const r=new Array,n=async a=>{for(;s<e.length;){const o=e[s++];t(o)&&(r.push(o),a.madeProgress()),a.done&&await this._reschedule((e=>n(e)),i)}};return this._reschedule((e=>n(e)),i).then((()=>r))}_canExecuteSoloPass(e,t){const{geometryType:i}=this,{spatialRel:s}=t;return(0,x.hN)(e)&&("esriSpatialRelEnvelopeIntersects"===s||"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===s||"esriSpatialRelContains"===s||"esriSpatialRelWithin"===s))}_getQueryBBoxes(e){if((0,x.hN)(e)){if((0,h.YX)(e))return[(0,l.al)(e.xmin,e.ymin,e.xmax,e.ymax)];if((0,h.oU)(e))return e.rings.map((e=>(0,l.al)(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1]))))}return[(0,c.$P)((0,l.Ue)(),e)]}_searchFeatures(e){for(const s of e)this.featureStore.forEachInBounds(s,(e=>{F.add(e)}));const t=new Array(F.size);let i=0;return F.forEach((e=>t[i++]=e)),F.clear(),t}async _checkStatisticsSupport(e,t){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new s.Z(v,"Unsupported query options",{query:e});return Promise.all([this._checkAttributesQuerySupport(e),this._checkStatisticsParamsSupport(t),(0,x.P0)(e,this.geometryType,this.spatialReference),(0,f._W)(this.spatialReference,e.outSR)]).then((()=>e))}async _checkStatisticsParamsSupport(e){let t=[];if(e.valueExpression){const{arcadeUtils:i}=await(0,R.LC)();t=i.extractFieldNames(e.valueExpression)}if(e.field&&t.push(e.field),e.normalizationField&&t.push(e.normalizationField),!t.length)throw new s.Z(v,"params should have at least a field or valueExpression",{params:e});(0,y.Of)(this.fieldsIndex,t,"params contains missing fields")}async _checkQuerySupport(e){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new s.Z(v,"Unsupported query options",{query:e});return Promise.all([this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),(0,x.P0)(e,this.geometryType,this.spatialReference),(0,f._W)(this.spatialReference,e.outSR)]).then((()=>e))}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:i,returnDistinctValues:r,outStatistics:a}=e,n=a?a.map((e=>e.outStatisticFieldName&&e.outStatisticFieldName.toLowerCase())).filter(Boolean):[];if(i&&i.length>0){const e=" asc",t=" desc",s=i.map((i=>{const s=i.toLowerCase();return s.indexOf(e)>-1?s.split(e)[0]:s.indexOf(t)>-1?s.split(t)[0]:i})).filter((e=>-1===n.indexOf(e)));(0,y.Of)(this.fieldsIndex,s,"orderByFields contains missing fields")}if(t&&t.length>0)(0,y.Of)(this.fieldsIndex,t,"outFields contains missing fields");else if(r)throw new s.Z(v,"outFields should be specified for returnDistinctValues",{query:e});(0,y.hO)(this.fieldsIndex,e.where)}async _checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:i,having:r}=e,a=i&&i.length,n=t&&t.length;if(r){if(!a||!n)throw new s.Z(v,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});(0,y.z4)(this.fieldsIndex,r,t)}if(n){if(!t.every((e=>"exceedslimit"!==e.statisticType)))return;const r=t.map((e=>e.onStatisticField)).filter(Boolean);(0,y.Of)(this.fieldsIndex,r,"onStatisticFields contains missing fields"),a&&(0,y.Of)(this.fieldsIndex,i,"groupByFieldsForStatistics contains missing fields");for(const i of t){const{onStatisticField:t,statisticType:r}=i;if("percentile_disc"!==r&&"percentile_cont"!==r||!("statisticParameters"in i)){if("count"!==r&&t&&(0,y.G3)(t,this.fieldsIndex))throw new s.Z(v,"outStatistics contains non-numeric fields",{definition:i,query:e})}else{const{statisticParameters:t}=i;if(!t)throw new s.Z(v,"statisticParamters should be set for percentile type",{definition:i,query:e})}}}}async _getQueryEngineResultForStats(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,s=arguments.length>2?arguments[2]:void 0;t=(0,r.d9)(t);try{t=await this._schedule((()=>(0,S.Up)(t,this.definitionExpression,this.spatialReference)),s),t=await this._reschedule((()=>this._checkStatisticsSupport(t,i)),s),e=await this._reschedule((()=>this._executeGeometryQuery(t,s)),s),e=await this._reschedule((()=>e.executeAggregateIdsQuery(t)),s),e=await this._reschedule((()=>e.executeObjectIdsQuery(t)),s),e=await this._reschedule((()=>e.executeTimeQuery(t)),s),e=await this._reschedule((()=>e.executeAttributesQuery(t)),s)}catch(a){if(a!==S.vF)throw a;e=new g.Z([],null,this)}return e}}const b=(0,u.Ue)(),G=(0,u.Ue)()},60480:(e,t,i)=>{i.d(t,{g:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},77095:(e,t,i)=>{i.d(t,{hN:()=>Q,P0:()=>R,cW:()=>w});var s=i(10064),r=i(34066),a=i(66504);var n=i(77981),o=i(92975);function u(e,t){return e?t?4:3:t?3:2}function l(e,t,i,s,r,a){const n=u(r,a),{coords:o,lengths:l}=s;if(!l)return!1;for(let u=0,h=0;u<l.length;u++,h+=n)if(!c(e,t,i,o[h],o[h+1]))return!1;return!0}function c(e,t,i,s,r){if(!e)return!1;const a=u(t,i),{coords:n,lengths:o}=e;let l=!1,c=0;for(const u of o)l=h(l,n,a,c,u,s,r),c+=u*a;return l}function h(e,t,i,s,r,a,n){let o=e,u=s;for(let l=s,c=s+r*i;l<c;l+=i){u=l+i,u===c&&(u=s);const e=t[l],r=t[l+1],h=t[u],p=t[u+1];(r<n&&p>=n||p<n&&r>=n)&&e+(n-r)/(p-r)*(h-e)<a&&(o=!o)}return o}var p=i(83406),d=i(80457),y=i(19995),f=i(31904);const m="feature-store:unsupported-query",g={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},x={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},_={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},S={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function w(e,t,s,o,u){if((0,n.oU)(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,p.Uy)(new d.Z,t,!1,!1);return Promise.resolve((t=>function(e,t,i,s){return c(e,t,i,s.coords[0],s.coords[1])}(e,!1,!1,t)))}if((0,n.oU)(t)&&"esriGeometryMultipoint"===s){const i=(0,p.Uy)(new d.Z,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>l(i,!1,!1,e,o,u)))}if((0,n.YX)(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>(0,r.aV)(t,(0,f.Op)(s,o,u,e))));if((0,n.YX)(t)&&"esriGeometryMultipoint"===s&&"esriSpatialRelContains"===e)return Promise.resolve((e=>(0,r.lQ)(t,(0,f.Op)(s,o,u,e))));if((0,n.YX)(t)&&"esriSpatialRelIntersects"===e){const e=function(e){return"mesh"===e?a.h_:(0,a.IY)(e)}(s);return Promise.resolve((i=>e(t,(0,f.Op)(s,o,u,i))))}return i.e(309).then(i.bind(i,50309)).then((i=>{const r=i[g[e]].bind(null,t.spatialReference,t);return e=>r((0,f.Op)(s,o,u,e))}))}async function R(e,t,i){const{spatialRel:r,geometry:a}=e;if(a){if(!function(e){return!0===x[e]}(r))throw new s.Z(m,"Unsupported query spatial relationship",{query:e});if((0,o.JY)(a.spatialReference)&&(0,o.JY)(i)){if(!function(e){return!0===_[(0,n.Ji)(e)]}(a))throw new s.Z(m,"Unsupported query geometry type",{query:e});if(!function(e){return!0===S[e]}(t))throw new s.Z(m,"Unsupported layer geometry type",{query:e});if(e.outSR)return(0,y._W)(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function Q(e){if((0,n.YX)(e))return!0;if((0,n.oU)(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}}}]);
//# sourceMappingURL=4000.4d5eb2e9.chunk.js.map