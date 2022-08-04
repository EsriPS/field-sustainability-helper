"use strict";(globalThis.webpackChunkfield_sustainability_helper=globalThis.webpackChunkfield_sustainability_helper||[]).push([[8916],{43813:(e,t,r)=>{r.d(t,{E:()=>i});class s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach((e=>{const s=this._options[e];if(s){const i="boolean"!=typeof s&&s.name?s.name:e,o="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=o&&(r[i]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(o)?o.join(","):"object"==typeof o?JSON.stringify(o):o)}else r[e]=t[e]}),this),r}}function i(e){return new s(e)}},69732:(e,t,r)=>{r.d(t,{et:()=>g,ef:()=>b,bI:()=>T,Wf:()=>w});var s=r(76200),i=r(10064),o=r(92026),n=r(18202),a=r(35995),l=r(23084),u=r(27366),p=r(46784),d=r(49861),c=(r(63780),r(93169),r(25243),r(27135)),m=r(69912),h=r(49022),y=r(77279);let f=class extends p.wq{constructor(e){super(e),this.accumulateAttributeNames=null,this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsLengthUnits=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};(0,u._)([(0,d.Cb)()],f.prototype,"accumulateAttributeNames",void 0),(0,u._)([(0,d.Cb)()],f.prototype,"currentVersion",void 0),(0,u._)([(0,d.Cb)()],f.prototype,"defaultTravelMode",void 0),(0,u._)([(0,d.Cb)()],f.prototype,"directionsLanguage",void 0),(0,u._)([(0,c.J)(h.GX)],f.prototype,"directionsLengthUnits",void 0),(0,u._)([(0,d.Cb)()],f.prototype,"directionsSupportedLanguages",void 0),(0,u._)([(0,d.Cb)()],f.prototype,"directionsTimeAttribute",void 0),(0,u._)([(0,d.Cb)()],f.prototype,"hasZ",void 0),(0,u._)([(0,d.Cb)()],f.prototype,"impedance",void 0),(0,u._)([(0,d.Cb)()],f.prototype,"networkDataset",void 0),(0,u._)([(0,d.Cb)({type:[y.Z]})],f.prototype,"supportedTravelModes",void 0),f=(0,u._)([(0,m.j)("esri.rest.support.NetworkServiceDescription")],f);const v=f;function g(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}function b(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function w(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if((0,o.pC)(e)&&e.hasZ)return!0}return!1}async function T(e,t,r){if(!e)throw new i.Z("network-service:missing-url","Url to Network service is missing");const o=(0,l.lA)({f:"json",token:t},r),{data:u}=await(0,s.default)(e,o);u.supportedTravelModes||(u.supportedTravelModes=[]);for(let s=0;s<u.supportedTravelModes.length;s++)u.supportedTravelModes[s].id||(u.supportedTravelModes[s].id=u.supportedTravelModes[s].itemId);const p=u.currentVersion>=10.4?async function(e,t,r){try{const i=(0,l.lA)({f:"json",token:t},r),o=(0,a.Qj)(e)+"/retrieveTravelModes",{data:{supportedTravelModes:n,defaultTravelMode:u}}=await(0,s.default)(o,i);return{supportedTravelModes:n,defaultTravelMode:u}}catch(v){throw new i.Z("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:v})}}(e,t,r):async function(e,t){var r,i;const o=(0,l.lA)({f:"json"},t),{data:u}=await(0,s.default)(e.replace(/\/rest\/.*$/i,"/info"),o);if(!u||!u.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:p}=u,d=(0,a.Qj)(p)+"/sharing/rest/portals/self",{data:c}=await(0,s.default)(d,o),m=(0,n.hS)("helperServices.routingUtilities.url",c);if(!m)return{supportedTravelModes:[],defaultTravelMode:null};const h=(0,l.en)(p),y=/\/solve$/i.test(h.path)?"Route":/\/solveclosestfacility$/i.test(h.path)?"ClosestFacility":"ServiceAreas",f=(0,l.lA)({f:"json",serviceName:y},t),v=(0,a.Qj)(m)+"/GetTravelModes/execute",g=await(0,s.default)(v,f),b=[];let w=null;if(null!=g&&null!=(r=g.data)&&null!=(i=r.results)&&i.length){const e=g.data.results;for(const t of e){var T;if("supportedTravelModes"===t.paramName){if(null!=(T=t.value)&&T.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);b.push(t)}}else"defaultTravelMode"===t.paramName&&(w=t.value)}}return{supportedTravelModes:b,defaultTravelMode:w}}(e,r),{defaultTravelMode:d,supportedTravelModes:c}=await p;return u.defaultTravelMode=d,u.supportedTravelModes=c,v.fromJSON(u)}},10691:(e,t,r)=>{r.d(t,{Z:()=>v});var s=r(27366),i=(r(59486),r(92026)),o=r(49861),n=(r(63780),r(93169),r(25243),r(38511)),a=r(69912),l=r(52639);let u=class extends l.Z{};(0,s._)([(0,o.Cb)()],u.prototype,"events",void 0),(0,s._)([(0,o.Cb)()],u.prototype,"strings",void 0),u=(0,s._)([(0,a.j)("esri.rest.support.DirectionsFeature")],u);const p=u;var d=r(49818),c=r(53866),m=r(78952),h=r(29909),y=r(7882);let f=class extends d.default{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){var r;if(!e)return[];const s=null!=(r=t.summary.envelope.spatialReference)?r:t.spatialReference,i=s&&m.Z.fromJSON(s);return e.map((e=>{var t,r;const s=this._decompressGeometry(e.compressedGeometry),o=new h.Z({...s,spatialReference:i}),n=null!=(t=null==(r=e.events)?void 0:r.map((e=>{const{arriveTimeUTC:t,ETA:r,point:{x:s,y:o,z:n},strings:a}=e;return new p({geometry:new y.Z({x:s,y:o,z:n,hasZ:void 0!==n,spatialReference:i}),attributes:{ETA:r,arriveTimeUTC:t},strings:a})})))?t:[];return new p({attributes:e.attributes,events:n,geometry:o,strings:e.strings})}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((e=>{let{geometry:t}=e;return(0,i.Wg)(t)})),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map((e=>{let{strings:t}=e;return t}))}_decompressGeometry(e){let t=0,r=0,s=0,i=0;const o=[];let n,a,l,u,p,d,c,m,h=0,y=0,f=0;if(p=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),p||(p=[]),0===parseInt(p[h],32)){h=2;const e=parseInt(p[h],32);h++,d=parseInt(p[h],32),h++,1&e&&(y=p.indexOf("|")+1,c=parseInt(p[y],32),y++),2&e&&(f=p.indexOf("|",y)+1,m=parseInt(p[f],32),f++)}else d=parseInt(p[h],32),h++;for(;h<p.length&&"|"!==p[h];){n=parseInt(p[h],32)+t,h++,t=n,a=parseInt(p[h],32)+r,h++,r=a;const e=[n/d,a/d];y&&(u=parseInt(p[y],32)+s,y++,s=u,e.push(u/c)),f&&(l=parseInt(p[f],32)+i,f++,i=l,e.push(l/m)),o.push(e)}return{paths:[o],hasZ:y>0,hasM:f>0}}_mergePolylinesToSinglePath(e,t){if(0===e.length)return new h.Z({spatialReference:t});const r=[];for(const n of e)for(const e of n.paths)r.push(...e);const s=[];r.forEach(((e,t)=>{0!==t&&e[0]===r[t-1][0]&&e[1]===r[t-1][1]||s.push(e)}));const{hasM:i,hasZ:o}=e[0];return new h.Z({hasM:i,hasZ:o,paths:[s],spatialReference:t})}};(0,s._)([(0,o.Cb)({type:c.Z,json:{read:{source:"summary.envelope"}}})],f.prototype,"extent",void 0),(0,s._)([(0,o.Cb)()],f.prototype,"features",void 0),(0,s._)([(0,n.r)("features")],f.prototype,"readFeatures",null),(0,s._)([(0,o.Cb)()],f.prototype,"geometryType",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],f.prototype,"mergedGeometry",null),(0,s._)([(0,o.Cb)()],f.prototype,"routeId",void 0),(0,s._)([(0,o.Cb)()],f.prototype,"routeName",void 0),(0,s._)([(0,o.Cb)({value:null,readOnly:!0})],f.prototype,"strings",null),(0,s._)([(0,o.Cb)({json:{read:{source:"summary.totalDriveTime"}}})],f.prototype,"totalDriveTime",void 0),(0,s._)([(0,o.Cb)({json:{read:{source:"summary.totalLength"}}})],f.prototype,"totalLength",void 0),(0,s._)([(0,o.Cb)({json:{read:{source:"summary.totalTime"}}})],f.prototype,"totalTime",void 0),f=(0,s._)([(0,a.j)("esri.rest.support.DirectionsFeatureSet")],f);const v=f},2429:(e,t,r)=>{r.d(t,{Z:()=>p});var s=r(27366),i=r(43404),o=r(46784),n=r(49861),a=(r(63780),r(93169),r(25243),r(69912));const l=new i.X({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let u=class extends o.wq{constructor(e){super(e),this.description=null,this.type=null}};(0,s._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"description",void 0),(0,s._)([(0,n.Cb)({type:String,json:{read:l.read,write:l.write}})],u.prototype,"type",void 0),u=(0,s._)([(0,a.j)("esri.rest.support.GPMessage")],u);const p=u},89677:(e,t,r)=>{r.d(t,{Z:()=>p});var s=r(27366),i=r(43404),o=r(49861),n=(r(63780),r(93169),r(25243),r(69912)),a=r(2429);const l=new i.X({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let u=class extends a.Z{constructor(e){super(e),this.type=null}};(0,s._)([(0,o.Cb)({type:String,json:{read:l.read,write:l.write}})],u.prototype,"type",void 0),u=(0,s._)([(0,n.j)("esri.rest.support.NAMessage")],u);const p=u},77279:(e,t,r)=>{r.d(t,{Z:()=>c});var s,i=r(27366),o=r(46784),n=r(84652),a=r(49861),l=(r(25243),r(27135)),u=r(69912),p=r(49022);let d=s=class extends o.wq{constructor(e){super(e),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}clone(){return new s((0,n.d9)({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};(0,i._)([(0,a.Cb)({type:[Object],json:{write:!0}})],d.prototype,"attributeParameterValues",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],d.prototype,"description",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],d.prototype,"distanceAttributeName",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],d.prototype,"id",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],d.prototype,"impedanceAttributeName",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],d.prototype,"name",void 0),(0,i._)([(0,a.Cb)({type:[String],json:{write:!0}})],d.prototype,"restrictionAttributeNames",void 0),(0,i._)([(0,a.Cb)({type:Number,json:{write:{allowNull:!0}}})],d.prototype,"simplificationTolerance",void 0),(0,i._)([(0,l.J)(p.q$)],d.prototype,"simplificationToleranceUnits",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],d.prototype,"timeAttributeName",void 0),(0,i._)([(0,l.J)(p.DJ)],d.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],d.prototype,"useHierarchy",void 0),(0,i._)([(0,l.J)(p.ip)],d.prototype,"uturnAtJunctions",void 0),d=s=(0,i._)([(0,u.j)("esri.rest.support.TravelMode")],d);const c=d},49022:(e,t,r)=>{r.d(t,{$7:()=>a,BW:()=>h,DJ:()=>p,Dd:()=>f,GX:()=>o,SS:()=>m,W7:()=>d,cW:()=>v,hB:()=>n,ip:()=>u,no:()=>l,oi:()=>y,q$:()=>i,td:()=>g,yP:()=>c});var s=r(43404);const i=(0,s.w)()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriUnknownUnits:"unknown",esriYards:"yards"}),o=(0,s.w)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),n=(0,s.w)()({esriNAUDays:"days",esriNAUHours:"hours",esriNAUMinutes:"minutes",esriNAUSeconds:"seconds"}),a=(0,s.w)()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTFeatureSets:"featuresets",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),l=(0,s.w)()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),u=((0,s.w)()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),(0,s.w)()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"})),p=((0,s.w)()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),(0,s.w)()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),(0,s.w)()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"})),d=(0,s.w)()({0:"either-side-of-vehicle",1:"right-side-of-vehicle",2:"left-side-of-vehicle",3:"no-u-turn"},{useNumericKeys:!0}),c=(0,s.w)()({0:"stop",1:"waypoint",2:"break"},{useNumericKeys:!0}),m=(0,s.w)()({0:"ok",1:"not-located",2:"network-element-not-located",3:"element-not-traversable",4:"invalid-field-values",5:"not-reached",6:"time-window-violation",7:"not-located-on-closest"},{useNumericKeys:!0}),h=(0,s.w)()({1:"right",2:"left"},{useNumericKeys:!0}),y=(0,s.w)()({0:"restriction",1:"added-cost"},{useNumericKeys:!0}),f=(0,s.w)()({0:"permit",1:"restrict"},{useNumericKeys:!0}),v=(0,s.w)()({1:"header",50:"arrive",51:"depart",52:"straight",100:"on-ferry",101:"off-ferry",102:"central-fork",103:"roundabout",104:"u-turn",150:"door",151:"stairs",152:"elevator",153:"escalator",154:"pedestrian-ramp",200:"left-fork",201:"left-ramp",202:"clockwise-roundabout",203:"left-handed-u-turn",204:"bear-left",205:"left-turn",206:"sharp-left",207:"left-turn-and-immediate-left-turn",208:"left-turn-and-immediate-right-turn",300:"right-fork",301:"right-ramp",302:"counter-clockwise-roundabout",303:"right-handed-u-turn",304:"bear-right",305:"right-turn",306:"sharp-right",307:"right-turn-and-immediate-left-turn",308:"right-turn-and-immediate-right-turn",400:"up-elevator",401:"up-escalator",402:"up-stairs",500:"down-elevator",501:"down-escalator",502:"down-stairs",1e3:"general-event",1001:"landmark",1002:"time-zone-change",1003:"traffic-event",1004:"scaled-cost-barrier-event",1005:"boundary-crossing",1006:"restriction-violation"},{useNumericKeys:!0}),g=(0,s.w)()({0:"unknown",1:"segment",2:"maneuver-segment",3:"restriction-violation",4:"scaled-cost-barrier",5:"heavy-traffic",6:"slow-traffic",7:"moderate-traffic"},{useNumericKeys:!0})}}]);
//# sourceMappingURL=8916.66f61d85.chunk.js.map