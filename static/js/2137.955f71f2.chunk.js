"use strict";(self.webpackChunkfield_sustainability_helper=self.webpackChunkfield_sustainability_helper||[]).push([[2137],{26823:function(t,e,n){n.r(e),n.d(e,{FeatureCollectionSnappingSource:function(){return h}});var r=n(15861),i=n(15671),o=n(43144),a=n(60136),c=n(29388),u=n(87757),s=n(27366),p=n(85015),l=n(92026),f=n(49861),d=(n(63780),n(93169),n(25243),n(69912)),y=n(69117),h=function(t){(0,a.Z)(n,t);var e=(0,c.Z)(n);function n(t){return(0,i.Z)(this,n),e.call(this,t)}return(0,o.Z)(n,[{key:"availability",get:function(){return 1}},{key:"refresh",value:function(){}},{key:"fetchCandidates",value:function(){var t=(0,r.Z)(u.mark((function t(e,n){var r;return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=this.layerSource.layer.source).querySnapping){t.next=7;break}return t.next=4,r.querySnapping({distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,query:(0,l.pC)(e.filter)?e.filter.createQuery().toJSON():{where:"1=1"}},{signal:n});case 4:t.t0=t.sent.candidates.map((function(t){return(0,y.X)(t,e.coordinateHelper)})),t.next=8;break;case 7:t.t0=[];case 8:return t.abrupt("return",t.t0);case 9:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()}]),n}(p.Z);(0,s._)([(0,f.Cb)({constructOnly:!0})],h.prototype,"layerSource",void 0),(0,s._)([(0,f.Cb)({readOnly:!0})],h.prototype,"availability",null),h=(0,s._)([(0,d.j)("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],h)},69117:function(t,e,n){n.d(e,{X:function(){return d}});var r=n(95905),i=n(1413),o=n(15671),a=n(43144),c=n(60136),u=n(29388),s=n(95122),p=n(75691),l=n(61309),f=function(t){(0,c.Z)(n,t);var e=(0,u.Z)(n);function n(t){return(0,o.Z)(this,n),e.call(this,(0,i.Z)((0,i.Z)({},t),{},{constraint:new s.Hk(t.coordinateHelper,t.targetPoint)}))}return(0,a.Z)(n,[{key:"hints",get:function(){return[new l.n(this.targetPoint)]}}]),n}(p.a);function d(t,e){switch(t.type){case"edge":return new r.L({coordinateHelper:e,edgeStart:e.pointToVector(t.start),edgeEnd:e.pointToVector(t.end),targetPoint:e.pointToVector(t.target),objectId:t.objectId});case"vertex":return new f({coordinateHelper:e,targetPoint:e.pointToVector(t.target),objectId:t.objectId})}}},61309:function(t,e,n){n.d(e,{n:function(){return u}});var r=n(15671),i=n(43144),o=n(60136),a=n(29388),c=n(64674),u=function(t){(0,o.Z)(n,t);var e=(0,a.Z)(n);function n(t){var i;return(0,r.Z)(this,n),(i=e.call(this)).point=t,i}return(0,i.Z)(n,[{key:"equals",value:function(t){return t instanceof n&&(0,c.Xv)(this.point,t.point)}}]),n}(n(55054).r)}}]);
//# sourceMappingURL=2137.955f71f2.chunk.js.map