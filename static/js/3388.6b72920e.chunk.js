"use strict";(self.webpackChunkfield_sustainability_helper=self.webpackChunkfield_sustainability_helper||[]).push([[3388],{32698:function(e,r,t){t.d(r,{m:function(){return u}});var n=t(35995),a=t(70032);function u(e){return{origin:"portal-item",url:(0,n.mN)(e.itemUrl),portal:e.portal||a.Z.getDefault(),portalItem:e,readResourcePaths:[]}}},33388:function(e,r,t){t.r(r),t.d(r,{getFirstLayerOrTableId:function(){return g},getNumLayersAndTables:function(){return L},load:function(){return p},preprocessFSItemData:function(){return x}});var n=t(15861),a=t(87757),u=t(10064),l=t(19610),i=t(70032),o=t(32698),s=t(21371),c=t(41226);function p(e,r){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(a.mark((function e(r,t){var n;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=r.instance.portalItem)||!n.id){e.next=8;break}return e.next=4,n.load(t);case 4:d(r),e.t0=y(r,t),e.next=9;break;case 8:e.t0=Promise.resolve();case 9:return e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){var r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new u.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}function y(e,r){return v.apply(this,arguments)}function v(){return v=(0,n.Z)(a.mark((function e(r,t){var n,u,l,i,c,p;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.instance,u=n.portalItem,l=u.url,i=u.title,c=(0,o.m)(u),"group"!==n.type){e.next=3;break}return e.abrupt("return",(n.read({title:i},c),h(n,r)));case 3:return l&&n.read({url:l},c),e.next=6,I(r,t);case 6:return p=e.sent,e.abrupt("return",(p&&n.read(p,c),n.resourceReferences={portalItem:u,paths:c.readResourcePaths},n.read({title:i},c),(0,s.y)(n,c)));case 8:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function h(e,r){var t,i,o=e.portalItem.type;switch(o){case"Feature Service":case"Feature Collection":t=l.T.FeatureLayer;break;case"Stream Service":t=l.T.StreamLayer;break;case"Scene Service":t=l.T.SceneLayer;break;default:throw new u.Z("portal:unsupported-item-type-as-group","The item type '".concat(o,"' is not supported as a 'IGroupLayer'"))}return t().then((function(e){return i=e,I(r)})).then(function(){var r=(0,n.Z)(a.mark((function r(t){return a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==o){r.next=7;break}return r.next=3,x(t,e.portalItem.url);case 3:t=r.sent,r.t0=b(e,i,t),r.next=8;break;case 7:r.t0=L(t)>0?b(e,i,t):m(e,i);case 8:return r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function m(e,r){return e.portalItem.url?(0,c.b)(e.portalItem.url).then((function(t){var n,a;function u(e){return{id:e.id,name:e.name}}t&&b(e,r,{layers:null==(n=t.layers)?void 0:n.map(u),tables:null==(a=t.tables)?void 0:a.map(u)})})):Promise.resolve()}function b(e,r,t){var n=t.layers||[],a=t.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((function(e){var r;"Table"===(null==e||null==(r=e.layerDefinition)?void 0:r.type)&&a.push(e)})),n=n.filter((function(e){var r;return"Table"!==(null==e||null==(r=e.layerDefinition)?void 0:r.type)}))),n.reverse().forEach((function(n){var a=w(e,r,t,n);e.add(a)})),a.reverse().forEach((function(n){var a=w(e,r,t,n);e.tables.add(a)}))}function w(e,r,t,n){var a=new r({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var u={origin:"portal-item",portal:e.portalItem.portal||i.Z.getDefault()};a.read(n,u);var l=t.showLegend;null!=l&&a.read({showLegend:l},u)}return a}function I(e,r){if(!1===e.supportsData)return Promise.resolve(void 0);var t=e.instance;return t.portalItem.fetchData("json",r).catch((function(){return null})).then(function(){var e=(0,n.Z)(a.mark((function e(r){var n,u;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Z(t)){e.next=3;break}return u=!0,e.abrupt("return",(r&&L(r)>0&&(null==t.layerId&&(t.layerId=g(r)),(n=T(r,t.layerId))&&(1===L(r)&&(u=!1),null!=r.showLegend&&(n.showLegend=r.showLegend))),u&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),n));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}function x(e,r){return k.apply(this,arguments)}function k(){return(k=(0,n.Z)(a.mark((function e(r,t){var n,u,l;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null==(n=r)?void 0:n.layers)&&null!=(null==(u=r)?void 0:u.tables)){e.next=5;break}return e.next=3,(0,c.b)(t);case 3:l=e.sent,(r=r||{}).layers=r.layers||(null==l?void 0:l.layers),r.tables=r.tables||(null==l?void 0:l.tables);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function T(e,r){var t=e.layers;if(t)for(var n=0;n<t.length;n++)if(t[n].id===r)return t[n];var a=e.tables;if(a)for(var u=0;u<a.length;u++)if(a[u].id===r)return a[u];return null}function L(e){var r,t,n,a;return(null!=(r=null==e||null==(t=e.layers)?void 0:t.length)?r:0)+(null!=(n=null==e||null==(a=e.tables)?void 0:a.length)?n:0)}function Z(e){return"stream"!==e.type&&"layerId"in e}},41226:function(e,r,t){t.d(r,{b:function(){return l}});var n=t(15861),a=t(87757),u=t(76200);function l(e){return i.apply(this,arguments)}function i(){return i=(0,n.Z)(a.mark((function e(r){var t,n;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.default)(r,{responseType:"json",query:{f:"json"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}}}]);
//# sourceMappingURL=3388.6b72920e.chunk.js.map