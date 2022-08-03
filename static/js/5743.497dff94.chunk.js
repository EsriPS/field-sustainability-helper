"use strict";(globalThis.webpackChunkfield_sustainability_helper=globalThis.webpackChunkfield_sustainability_helper||[]).push([[5743],{95743:(e,n,t)=>{t.r(n),t.d(n,{registerFunctions:()=>p});var r=t(47238),a=t(44715),i=t(28113),s=t(73954),l=t(66978),u=t(32238),c=t(84178);function o(e){return e instanceof u.Z}function f(e,n,t,f,p){return p(e,n,(function(e,n,p){if(p.length<2)return f(new Error("Missing Parameters"));if(null===(p=(0,a.H)(p))[0]&&null===p[1])return(0,l.DB)(!1);if((0,a.q)(p[0]))return p[1]instanceof u.Z?(0,l.DB)(new i.Z({parentfeatureset:p[0],relation:t,relationGeom:p[1]})):null===p[1]?(0,l.DB)(new s.Z({parentfeatureset:p[0]})):f("Spatial Relation cannot accept this parameter type");if(o(p[0])){if(o(p[1])){let e=null;switch(t){case"esriSpatialRelEnvelopeIntersects":e=(0,c.kK)((0,r.SV)(p[0]),(0,r.SV)(p[1]));break;case"esriSpatialRelIntersects":e=(0,c.kK)(p[0],p[1]);break;case"esriSpatialRelContains":e=(0,c.r3)(p[0],p[1]);break;case"esriSpatialRelOverlaps":e=(0,c.Nm)(p[0],p[1]);break;case"esriSpatialRelWithin":e=(0,c.uh)(p[0],p[1]);break;case"esriSpatialRelTouches":e=(0,c.W4)(p[0],p[1]);break;case"esriSpatialRelCrosses":e=(0,c.jU)(p[0],p[1])}return null!==e?e:(0,l.d1)(new Error("Unrecognised Relationship"))}return(0,a.q)(p[1])?(0,l.DB)(new i.Z({parentfeatureset:p[1],relation:t,relationGeom:p[0]})):null===p[1]?(0,l.DB)(!1):f("Spatial Relation cannot accept this parameter type")}return null!==p[0]?f("Spatial Relation cannot accept this parameter type"):(0,a.q)(p[1])?(0,l.DB)(new s.Z({parentfeatureset:p[1]})):p[1]instanceof u.Z||null===p[1]?(0,l.DB)(!1):void 0}))}function p(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return f(n,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return f(n,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return f(n,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return f(n,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(n,t){return f(n,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(n,t){return f(n,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(n,t){return f(n,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(n,t){return e.standardFunctionAsync(n,t,(function(e,n,t){if(t=(0,a.H)(t),(0,a.p)(t,3,3),o(t[0])&&o(t[1]))return(0,c.LV)(t[0],t[1],(0,a.d)(t[2]));if(t[0]instanceof u.Z&&null===t[1])return!1;if(t[1]instanceof u.Z&&null===t[0])return!1;if((0,a.q)(t[0])&&null===t[1])return new s.Z({parentfeatureset:t[0]});if((0,a.q)(t[1])&&null===t[0])return new s.Z({parentfeatureset:t[1]});if((0,a.q)(t[0])&&t[1]instanceof u.Z)return t[0].relate(t[1],(0,a.d)(t[2]));if((0,a.q)(t[1])&&t[0]instanceof u.Z)return t[1].relate(t[0],(0,a.d)(t[2]));if(null===t[0]&&null===t[1])return!1;throw new Error("Illegal Argument")}))})}}}]);
//# sourceMappingURL=5743.497dff94.chunk.js.map