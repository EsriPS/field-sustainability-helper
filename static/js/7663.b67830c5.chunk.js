"use strict";(globalThis.webpackChunkfield_sustainability_helper=globalThis.webpackChunkfield_sustainability_helper||[]).push([[7663],{57663:(a,i,e)=>{e.r(i),e.d(i,{classBreaks:()=>m,histogram:()=>d,summaryStatistics:()=>r,uniqueValues:()=>u});e(10064);var n=e(78952),t=(e(80031),e(15903)),l=e(819);let o=null;async function s(a,i){if(!i)return[];const e=a.field,s=a.valueExpression,r=a.normalizationType,u=a.normalizationField,m=a.normalizationTotal,d=[],f=a.viewInfoParams;let c=null,p=null;if(s){if(!o){const{arcadeUtils:a}=await(0,l.LC)();o=a}c=o.createFunction(s),p=f&&o.getViewInfo({viewingMode:f.viewingMode,scale:f.scale,spatialReference:new n.Z(f.spatialReference)})}return i.forEach((a=>{const i=a.attributes;let n;if(s){const i=o.createExecContext(a,p);n=o.executeFunction(c,i)}else i&&(n=i[e]);if(r&&isFinite(n)){const a=i&&parseFloat(i[u]);n=(0,t.fk)(n,r,a,m)}d.push(n)})),d}async function r(a){const{attribute:i,features:e}=a,{normalizationType:n,normalizationField:l,minValue:o,maxValue:r,fieldType:u}=i,m=await s({field:i.field,valueExpression:i.valueExpression,normalizationType:n,normalizationField:l,normalizationTotal:i.normalizationTotal,viewInfoParams:i.viewInfoParams},e),d=(0,t.S5)({normalizationType:n,normalizationField:l,minValue:o,maxValue:r}),f={value:.5,fieldType:u},c="esriFieldTypeString"===u?(0,t.H0)({values:m,supportsNullCount:d,percentileParams:f}):(0,t.i5)({values:m,minValue:o,maxValue:r,useSampleStdDev:!n,supportsNullCount:d,percentileParams:f});return(0,t.F_)(c,"esriFieldTypeDate"===u)}async function u(a){const{attribute:i,features:e}=a,n=await s({field:i.field,valueExpression:i.valueExpression,viewInfoParams:i.viewInfoParams},e),l=(0,t.eT)(n);return(0,t.Qm)(l,i.domain,i.returnAllCodedValues)}async function m(a){const{attribute:i,features:e}=a,{field:n,normalizationType:l,normalizationField:o,normalizationTotal:r,classificationMethod:u}=i,m=await s({field:n,valueExpression:i.valueExpression,normalizationType:l,normalizationField:o,normalizationTotal:r,viewInfoParams:i.viewInfoParams},e),d=(0,t.G2)(m,{field:n,normalizationType:l,normalizationField:o,normalizationTotal:r,classificationMethod:u,standardDeviationInterval:i.standardDeviationInterval,numClasses:i.numClasses,minValue:i.minValue,maxValue:i.maxValue});return(0,t.DL)(d,u)}async function d(a){const{attribute:i,features:e}=a,{field:n,normalizationType:l,normalizationField:o,normalizationTotal:r,classificationMethod:u}=i,m=await s({field:n,valueExpression:i.valueExpression,normalizationType:l,normalizationField:o,normalizationTotal:r,viewInfoParams:i.viewInfoParams},e);return(0,t.oF)(m,{field:n,normalizationType:l,normalizationField:o,normalizationTotal:r,classificationMethod:u,standardDeviationInterval:i.standardDeviationInterval,numBins:i.numBins,minValue:i.minValue,maxValue:i.maxValue})}}}]);
//# sourceMappingURL=7663.b67830c5.chunk.js.map