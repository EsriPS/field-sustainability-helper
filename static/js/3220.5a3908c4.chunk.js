"use strict";(self.webpackChunkfield_sustainability_helper=self.webpackChunkfield_sustainability_helper||[]).push([[3220],{27811:function(e,t,r){r.d(t,{QM:function(){return o},hy:function(){return u},uI:function(){return i}});var n=r(37762),a=r(16889),i=function(){if(!("document"in globalThis))return function(){return null};var e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,function(r){t.clearRect(0,0,1,e.height);var a,i=t.createLinearGradient(0,0,0,e.height),o=(0,n.Z)(r.colorStops);try{for(o.s();!(a=o.n()).done;){var u=a.value,s=u.ratio,l=u.color;i.addColorStop(Math.max(s,.001),"rgba(".concat(l[0],", ").concat(l[1],", ").concat(l[2],", ").concat(l[3],")"))}}catch(c){o.e(c)}finally{o.f()}return t.fillStyle=i,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}}();function o(e,t,r,a){var i,o,u=t.blurRadius,l=t.fieldOffset,c=t.field,f=new Float64Array(r*a),d=s(u),h=Math.round(3*u),p=Number.NEGATIVE_INFINITY,y=function(e,t){return null!=e?"string"==typeof t?function(t){return-1*+t.readAttribute(e)}:function(r){return+r.readAttribute(e)+t}:function(e){return 1}}(c,l),v=new Set,w=(0,n.Z)(e);try{for(w.s();!(o=w.n()).done;)for(var m=o.value.getCursor();m.next();){var M=m.getObjectId();if(!v.has(M)){v.add(M);var b=m.readLegacyPointGeometry(),g=128;if(!(b.x<-128||b.x>=r+g||b.y<-128||b.y>a+g))for(var k=+y(m),_=Math.round(b.x)-h,Z=Math.round(b.y)-h,T=Math.max(0,_),x=Math.max(0,Z),C=Math.min(a,Math.round(b.y)+h),S=Math.min(r,Math.round(b.x)+h),I=x;I<C;I++)for(var U=d[I-Z],O=T;O<S;O++){var F=d[O-_];(i=f[I*r+O]+=U*F*k)>p&&(p=i)}}}}catch(A){w.e(A)}finally{w.f()}return{matrix:f.buffer,max:p}}function u(e,t,r,n,i,o){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);var u=e.getImageData(0,0,t,t);r&&n&&u.data.set(new Uint8ClampedArray(function(e,t,r,n,i){for(var o=new Uint32Array(e*e),u=("buffer"in t?t:new Float64Array(t)),s=("buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer)),l=s.length/(i-n),c=0;c<u.length;c++){var f=u[c],d=Math.floor((f-n)*l);o[c]=s[(0,a.uZ)(d,0,s.length-1)]}return o.buffer}(t,r,n,i,o))),e.putImageData(u,0,0)}function s(e){for(var t=Math.round(3*e),r=2*e*e,n=new Float64Array(2*t+1),a=0;a<=n.length;a++)n[a]=Math.exp(-Math.pow(a-t,2)/r)/Math.sqrt(2*Math.PI)*(e/2);return n}},81735:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(15671),a=r(43144),i=r(60136),o=r(29388),u=r(27366),s=r(41691),l=r(49861),c=(r(63780),r(93169),r(25243),r(69912)),f=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"initialize",value:function(){}},{key:"destroy",value:function(){}},{key:"supportsTileUpdates",get:function(){return!1}},{key:"spatialReference",get:function(){var e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}}]),r}(s.r);(0,u._)([(0,l.Cb)({readOnly:!0})],f.prototype,"supportsTileUpdates",null),(0,u._)([(0,l.Cb)({constructOnly:!0})],f.prototype,"remoteClient",void 0),(0,u._)([(0,l.Cb)({constructOnly:!0})],f.prototype,"service",void 0),(0,u._)([(0,l.Cb)()],f.prototype,"spatialReference",null),(0,u._)([(0,l.Cb)({constructOnly:!0})],f.prototype,"tileInfo",void 0),(0,u._)([(0,l.Cb)({constructOnly:!0})],f.prototype,"tileStore",void 0);var d=f=(0,u._)([(0,c.j)("esri.views.2d.layers.features.processors.BaseProcessor")],f)},63220:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(1413),a=r(29439),i=r(37762),o=r(15861),u=r(60136),s=r(29388),l=r(43144),c=r(15671),f=r(87757),d=r(27366),h=(r(93169),r(92026)),p=(r(32718),r(25243),r(63780),r(75366),r(69912)),y=r(48732),v=r(27811),w=r(94109),m=r(81735),M=r(35092),b=(0,l.Z)((function e(t,r){(0,c.Z)(this,e),this.offset=t,this.extent=r}));function g(e){var t=e.key,r=new Map,n=256,a=w.I_,i=e.tileInfoView.tileInfo.isWrappable;return r.set((0,M.M)(t,-1,-1,i).id,new b([-a,-a],[a-n,a-n,a,a])),r.set((0,M.M)(t,0,-1,i).id,new b([0,-a],[0,a-n,a,a])),r.set((0,M.M)(t,1,-1,i).id,new b([a,-a],[0,a-n,n,a])),r.set((0,M.M)(t,-1,0,i).id,new b([-a,0],[a-n,0,a,a])),r.set((0,M.M)(t,1,0,i).id,new b([a,0],[0,0,n,a])),r.set((0,M.M)(t,-1,1,i).id,new b([-a,a],[a-n,0,a,n])),r.set((0,M.M)(t,0,1,i).id,new b([0,a],[0,0,a,n])),r.set((0,M.M)(t,1,1,i).id,new b([a,a],[0,0,n,n])),r}var k=function(e){(0,u.Z)(r,e);var t=(0,s.Z)(r);function r(){var e;return(0,c.Z)(this,r),(e=t.apply(this,arguments)).type="heatmap",e._tileKeyToFeatureSets=new Map,e}return(0,l.Z)(r,[{key:"initialize",value:function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}},{key:"update",value:function(){var e=(0,o.Z)(f.mark((function e(t,r){var n;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("heatmap"===(n=r.schema.processors[0]).type){e.next=3;break}return e.abrupt("return");case 3:(0,y.Hg)(this._schema,n)&&(t.mesh=!0,this._schema=n);case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"onTileUpdate",value:function(e){var t,r=(0,i.Z)(e.removed);try{for(r.s();!(t=r.n()).done;){var n=t.value;this._tileKeyToFeatureSets.delete(n.key.id)}}catch(a){r.e(a)}finally{r.f()}}},{key:"onTileClear",value:function(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}},{key:"onTileMessage",value:function(){var e=(0,o.Z)(f.mark((function e(t,r,i){var o,u,s,l,c,d;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._tileKeyToFeatureSets.has(t.key.id)||this._tileKeyToFeatureSets.set(t.key.id,new Map),o=this._tileKeyToFeatureSets.get(t.key.id),(0,h.pC)(r.addOrUpdate)&&r.addOrUpdate.hasFeatures&&o.set(r.addOrUpdate.instance,r),!r.end){e.next=7;break}return u=[],s=g(t),this._tileKeyToFeatureSets.forEach((function(e,r){if(r===t.key.id)e.forEach((function(e){return(0,h.Po)(e.addOrUpdate,(function(e){return u.push(e)}))}));else if(s.has(r)){var n=s.get(r),i=(0,a.Z)(n.offset,2),o=i[0],l=i[1];e.forEach((function(e){return(0,h.Po)(e.addOrUpdate,(function(e){var t=e.transform(o,l,1,1);u.push(t)}))}))}})),l=(0,v.QM)(u,this._schema.mesh,512,512),c={tileKey:t.key.id,intensityInfo:l},d=[l.matrix],e.abrupt("return",this.remoteClient.invoke("tileRenderer.onTileData",c,(0,n.Z)((0,n.Z)({},i),{},{transferList:d})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"onTileError",value:function(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}}]),r}(m.Z),_=k=(0,d._)([(0,p.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],k)},35092:function(e,t,r){r.d(t,{M:function(){return n}});r(67906);function n(e,t,r,n){var a=e.clone(),i=1<<a.level,o=a.col+t,u=a.row+r;return n&&o<0?(a.col=o+i,a.world-=1):o>=i?(a.col=o-i,a.world+=1):a.col=o,a.row=u,a}}}]);
//# sourceMappingURL=3220.5a3908c4.chunk.js.map