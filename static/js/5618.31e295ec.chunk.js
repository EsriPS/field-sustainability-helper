"use strict";(self.webpackChunkfield_sustainability_helper=self.webpackChunkfield_sustainability_helper||[]).push([[5618],{58971:function(n,t,e){e.d(t,{ym:function(){return z},RF:function(){return v},vY:function(){return s},J9:function(){return k},U1:function(){return Z},Ie:function(){return w},G6:function(){return W}});var r=e(29439),i=e(92026),u=e(77981);var a=function(n,t,e){return[t,e]},o=function(n,t,e){return[t,e,n[2]]},l=function(n,t,e){return[t,e,n[2],n[3]]};function s(n){return n?{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:(0,i.pC)(n.extent)?[n.extent.xmin,n.extent.ymax]:[0,0]}:null}function c(n,t){var e=n.scale,r=n.translate;return Math.round((t-r[0])/e[0])}function f(n,t){var e=n.scale,r=n.translate;return Math.round((r[1]-t)/e[1])}function h(n,t,e){for(var r,i,u,a,o=[],l=0;l<e.length;l++){var s=e[l];l>0?(u=c(n,s[0]),a=f(n,s[1]),u===r&&a===i||(o.push(t(s,u-r,a-i)),r=u,i=a)):(r=c(n,s[0]),i=f(n,s[1]),o.push(t(s,r,i)))}return o.length>0?o:null}function p(n,t){var e=n.scale,r=n.translate;return t*e[0]+r[0]}function m(n,t){var e=n.scale;return n.translate[1]-t*e[1]}function x(n,t,e){var i=new Array(e.length);if(!e.length)return i;var u=(0,r.Z)(n.scale,2),a=u[0],o=u[1],l=p(n,e[0][0]),s=m(n,e[0][1]);i[0]=t(e[0],l,s);for(var c=1;c<e.length;c++){var f=e[c];l+=f[0]*a,s-=f[1]*o,i[c]=t(f,l,s)}return i}function y(n,t,e){for(var r=new Array(e.length),i=0;i<e.length;i++)r[i]=x(n,t,e[i]);return r}function g(n,t,e,r,i){return t.points=function(n,t,e,r){return h(n,e?r?l:o:r?o:a,t)}(n,e.points,r,i),t}function v(n,t,e,r,i){return t.x=c(n,e.x),t.y=f(n,e.y),t!==e&&(r&&(t.z=e.z),i&&(t.m=e.m)),t}function b(n,t,e,r,i){var u=function(n,t,e,r){for(var i=[],u=e?r?l:o:r?o:a,s=0;s<t.length;s++){var c=h(n,u,t[s]);c&&c.length>=3&&i.push(c)}return i.length?i:null}(n,e.rings,r,i);return u?(t.rings=u,t):null}function d(n,t,e,r,i){var u=function(n,t,e,r){for(var i=[],u=e?r?l:o:r?o:a,s=0;s<t.length;s++){var c=h(n,u,t[s]);c&&c.length>=2&&i.push(c)}return i.length?i:null}(n,e.paths,r,i);return u?(t.paths=u,t):null}function z(n,t){return n&&t?(0,u.wp)(t)?v(n,{},t,!1,!1):(0,u.l9)(t)?d(n,{},t,!1,!1):(0,u.oU)(t)?b(n,{},t,!1,!1):(0,u.aW)(t)?g(n,{},t,!1,!1):(0,u.YX)(t)?function(n,t,e,r,i){return t.xmin=c(n,e.xmin),t.ymin=f(n,e.ymin),t.xmax=c(n,e.xmax),t.ymax=f(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),i&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}(n,{},t,!1,!1):null:null}function k(n,t,e,r,u){return(0,i.pC)(e)&&(t.points=function(n,t,e,r){return x(n,e?r?l:o:r?o:a,t)}(n,e.points,r,u)),t}function Z(n,t,e,r,u){return(0,i.Wi)(e)||(t.x=p(n,e.x),t.y=m(n,e.y),t!==e&&(r&&(t.z=e.z),u&&(t.m=e.m))),t}function w(n,t,e,r,u){return(0,i.pC)(e)&&(t.rings=function(n,t,e,r){return y(n,e?r?l:o:r?o:a,t)}(n,e.rings,r,u)),t}function W(n,t,e,r,u){return(0,i.pC)(e)&&(t.paths=function(n,t,e,r){return y(n,e?r?l:o:r?o:a,t)}(n,e.paths,r,u)),t}},70178:function(n,t,e){e.d(t,{k:function(){return r}});e(93169);function r(n,t){return!!i(n.spatialReference,t.spatialReference)&&n.x===t.x&&n.y===t.y&&n.z===t.z&&n.m===t.m}function i(n,t){return n===t||n&&t&&n.equals(t)}},65618:function(n,t,e){e.d(t,{Wh:function(){return s},Pj:function(){return f},FS:function(){return m},TF:function(){return x},MS:function(){return y},S6:function(){return c},Tx:function(){return h},R3:function(){return p}});var r=e(37762),i=e(43144),u=e(15671),a=(e(93169),e(92026)),o=(e(78952),e(41414)),l=e(65156),s=(e(58971),e(27823),e(83040),e(70178),(0,i.Z)((function n(t,e,r){(0,u.Z)(this,n),this.uid=t,this.geometry=e,this.attributes=r,this.visible=!0,this.objectId=null,this.centroid=null})));function c(n){return(0,a.pC)(n.geometry)}var f=(0,i.Z)((function n(){(0,u.Z)(this,n),this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}));function h(n,t,e,r){return{x:n,y:t,z:e,hasZ:null!=e,hasM:!1,spatialReference:r,type:"point"}}function p(n){if((0,a.Wi)(n))return 0;switch(n.type){case"point":return 1;case"polyline":var t,e=0,i=(0,r.Z)(n.paths);try{for(i.s();!(t=i.n()).done;){e+=t.value.length}}catch(c){i.e(c)}finally{i.f()}return e;case"polygon":var u,o=0,l=(0,r.Z)(n.rings);try{for(l.s();!(u=l.n()).done;){o+=u.value.length}}catch(c){l.e(c)}finally{l.f()}return o;case"multipoint":return n.points.length;case"extent":return 2;case"mesh":var s=n.vertexAttributes&&n.vertexAttributes.position;return s?s.length/3:0;default:return}}function m(n,t){switch((0,o.cS)(t),"mesh"===n.type&&(n=n.extent),n.type){case"point":t[0]=t[3]=n.x,t[1]=t[4]=n.y,n.hasZ&&(t[2]=t[5]=n.z);break;case"polyline":for(var e=0;e<n.paths.length;e++)(0,o.Wi)(t,n.paths[e],n.hasZ);break;case"polygon":for(var r=0;r<n.rings.length;r++)(0,o.Wi)(t,n.rings[r],n.hasZ);break;case"multipoint":(0,o.Wi)(t,n.points,n.hasZ);break;case"extent":t[0]=n.xmin,t[1]=n.ymin,t[3]=n.xmax,t[4]=n.ymax,null!=n.zmin&&(t[2]=n.zmin),null!=n.zmax&&(t[5]=n.zmax)}}function x(n,t){switch((0,l.cS)(t),"mesh"===n.type&&(n=n.extent),n.type){case"point":t[0]=t[2]=n.x,t[1]=t[3]=n.y;break;case"polyline":for(var e=0;e<n.paths.length;e++)(0,l.Wi)(t,n.paths[e]);break;case"polygon":for(var r=0;r<n.rings.length;r++)(0,l.Wi)(t,n.rings[r]);break;case"multipoint":(0,l.Wi)(t,n.points);break;case"extent":t[0]=n.xmin,t[1]=n.ymin,t[2]=n.xmax,t[3]=n.ymax}}function y(n,t){return null!=n.objectId?n.objectId:n.attributes&&t?n.attributes[t]:null}(0,o.Ue)(),(0,l.Ue)()}}]);
//# sourceMappingURL=5618.31e295ec.chunk.js.map