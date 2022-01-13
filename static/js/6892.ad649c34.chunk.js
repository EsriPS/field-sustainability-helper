"use strict";(self.webpackChunkfield_sustainability_helper=self.webpackChunkfield_sustainability_helper||[]).push([[6892,8],{20008:function(e,t,i){i.d(t,{e7:function(){return h},cM:function(){return d},Ru:function(){return l},pB:function(){return u},bA:function(){return c}});var n=i(29439),r=i(16889),s=i(65156),o=i(376),a=i(69662);function u(e,t,i,n){if(null==n||e.hasZ||(n=void 0),"point"===e.type)return e.x+=t,e.y+=i,e.hasZ&&null!=n&&(e.z+=n),e;if("multipoint"===e.type){for(var r=e.points,s=0;s<r.length;s++)r[s]=f(r[s],t,i,n);return e}if("extent"===e.type)return e.xmin+=t,e.xmax+=t,e.ymin+=i,e.ymax+=i,null!=n&&(e.zmin+=n,e.zmax+=n),e;for(var o=(0,a.nA)(e),u="polyline"===e.type?e.paths:e.rings,h=0;h<o.length;h++)for(var c=o[h],l=0;l<c.length;l++)c[l]=f(c[l],t,i,n);return"paths"in e?e.paths=u:e.rings=u,e}function h(e,t,i,n,r){var s=e.clone(),o=n.resolution;if("point"===s.type){if(r)u(s,t*o,-i*o);else{var h=n.state.transform,c=n.state.inverseTransform,l=h[0]*s.x+h[2]*s.y+h[4],d=h[1]*s.x+h[3]*s.y+h[5];s.x=c[0]*(l+t)+c[2]*(d+i)+c[4],s.y=c[1]*(l+t)+c[3]*(d+i)+c[5]}return s}if("multipoint"===s.type){if(r)u(s,t*o,-i*o);else for(var f=s.points,v=n.state.transform,g=n.state.inverseTransform,y=0;y<f.length;y++){var m=f[y],x=v[0]*m[0]+v[2]*m[1]+v[4],k=v[1]*m[0]+v[3]*m[1]+v[5],V=g[0]*(x+t)+g[2]*(k+i)+g[4],_=g[1]*(x+t)+g[3]*(k+i)+g[5];f[y]=p(m,V,_,void 0)}return s}if("extent"===s.type){if(r)u(s,t*o,-i*o);else{var Z=n.state.transform,E=n.state.inverseTransform,w=Z[0]*s.xmin+Z[2]*s.ymin+Z[4],T=Z[1]*s.xmin+Z[3]*s.ymin+Z[5],D=Z[0]*s.xmax+Z[2]*s.ymax+Z[4],z=Z[1]*s.xmax+Z[3]*s.ymax+Z[5];s.xmin=E[0]*(w+t)+E[2]*(T+i)+E[4],s.ymin=E[1]*(w+t)+E[3]*(T+i)+E[5],s.xmax=E[0]*(D+t)+E[2]*(z+i)+E[4],s.ymax=E[1]*(D+t)+E[3]*(z+i)+E[5]}return s}if(r)u(s,t*o,-i*o);else{for(var P=(0,a.nA)(s),C="polyline"===s.type?s.paths:s.rings,R=n.state.transform,b=n.state.inverseTransform,M=0;M<P.length;M++)for(var S=P[M],G=0;G<S.length;G++){var O=S[G],X=R[0]*O[0]+R[2]*O[1]+R[4],A=R[1]*O[0]+R[3]*O[1]+R[5],H=b[0]*(X+t)+b[2]*(A+i)+b[4],W=b[1]*(X+t)+b[3]*(A+i)+b[5];S[G]=p(O,H,W,void 0)}"paths"in s?s.paths=C:s.rings=C}return s}function c(e,t,i,r){if("point"===e.type){var u=e.x,h=e.y,c=r?r[0]:u,l=r?r[1]:h,d=e.clone(),f=(u-c)*t+c,v=(h-l)*i+l;return d.x=f,d.y=v,d}if("multipoint"===e.type){for(var g=(0,a.nA)(e),y=(0,s.Ue)(),m=(0,o.C6)(y,[g]),x=(0,n.Z)(m,4),k=x[0],V=x[1],_=x[2],Z=x[3],E=r?r[0]:(k+_)/2,w=r?r[1]:(Z+V)/2,T=e.clone(),D=T.points,z=0;z<D.length;z++){var P=D[z],C=(0,n.Z)(P,2),R=(C[0]-E)*t+E,b=(C[1]-w)*i+w;D[z]=p(P,R,b,void 0)}return T}if("extent"===e.type){var M=e.xmin,S=e.xmax,G=e.ymin,O=e.ymax,X=r?r[0]:(M+S)/2,A=r?r[1]:(O+G)/2,H=e.clone();if(H.xmin=(M-X)*t+X,H.ymax=(O-A)*i+A,H.xmax=(S-X)*t+X,H.ymin=(G-A)*i+A,H.xmin>H.xmax){var W=H.xmin,I=H.xmax;H.xmin=I,H.xmax=W}if(H.ymin>H.ymax){var N=H.ymin,q=H.ymax;H.ymin=q,H.ymax=N}return H}for(var B=(0,a.nA)(e),Y=(0,s.Ue)(),U=(0,o.C6)(Y,B),L=(0,n.Z)(U,4),F=L[0],J=L[1],j=L[2],Q=L[3],K=r?r[0]:(F+j)/2,$=r?r[1]:(Q+J)/2,ee=e.clone(),te="polyline"===ee.type?ee.paths:ee.rings,ie=0;ie<B.length;ie++)for(var ne=B[ie],re=0;re<ne.length;re++){var se=ne[re],oe=(0,n.Z)(se,2),ae=(oe[0]-K)*t+K,ue=(oe[1]-$)*i+$;te[ie][re]=p(se,ae,ue,void 0)}return"paths"in ee?ee.paths=te:ee.rings=te,ee}function l(e,t,i,n,r,s){var o=Math.sqrt((i-e)*(i-e)+(n-t)*(n-t));return Math.sqrt((r-e)*(r-e)+(s-t)*(s-t))/o}function d(e,t,i){var n=Math.atan2(t.y-i.y,t.x-i.x)-Math.atan2(e.y-i.y,e.x-i.x),s=Math.atan2(Math.sin(n),Math.cos(n));return(0,r.BV)(s)}function f(e,t,i,n){return p(e,e[0]+t,e[1]+i,null!=e[2]&&null!=n?e[2]+n:void 0)}function p(e,t,i,n){var r=[t,i];return e.length>2&&r.push(null!=n?n:e[2]),e.length>3&&r.push(e[3]),r}},14813:function(e,t,i){i.d(t,{Y6:function(){return v}});var n=i(15671),r=i(43144),s=i(88396),o=i(6394),a=i(11186),u=i(71353),h=i(90045),c=i(67077),l=i(7882),d=function(){function e(t){(0,n.Z)(this,e),this.spatialReference=t}return(0,r.Z)(e,[{key:"createVector",value:function(){return this.tag((0,o.a)())}},{key:"pointToVector",value:function(e){return this.tag((0,o.f)(e.x,e.y))}},{key:"arrayToVector",value:function(e){return this.tag((0,o.f)(e[0],e[1]))}},{key:"vectorToArray",value:function(e){return[e[0],e[1]]}},{key:"pointToArray",value:function(e){return[e.x,e.y]}},{key:"vectorToPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.Z;return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}},{key:"arrayToPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.Z;return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}},{key:"vectorToDehydratedPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"};return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.hasZ=!1,t.hasM=!1,t.spatialReference=this.spatialReference,t}},{key:"lerp",value:function(e,t,i,n){return(0,s.o)(n,e,t,i)}},{key:"addDelta",value:function(e,t,i){e[0]+=t,e[1]+=i}},{key:"distance",value:function(e,t){return(0,s.b)(e,t)}},{key:"getZ",value:function(e,t){return t}},{key:"hasZ",value:function(){return!1}},{key:"getM",value:function(e,t){return t}},{key:"hasM",value:function(){return!1}},{key:"clone",value:function(e){return this.tag((0,o.d)(e))}},{key:"copy",value:function(e,t){return(0,s.c)(t,e)}},{key:"fromXYZ",value:function(e){return this.tag((0,o.f)(e[0],e[1]))}},{key:"toXYZ",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,u.f)(e[0],e[1],t)}},{key:"tag",value:function(e){return e}}]),e}(),f=function(){function e(t,i){(0,n.Z)(this,e),this.valueType=t,this.spatialReference=i}return(0,r.Z)(e,[{key:"createVector",value:function(){return this.tag((0,u.c)())}},{key:"pointToVector",value:function(e){return this.tag((0,u.f)(e.x,e.y,0===this.valueType?e.z:e.m))}},{key:"arrayToVector",value:function(e){return this.tag((0,u.f)(e[0],e[1],e[2]||0))}},{key:"vectorToArray",value:function(e){return[e[0],e[1],e[2]]}},{key:"pointToArray",value:function(e){return 0===this.valueType?[e.x,e.y,e.z]:[e.x,e.y,e.m]}},{key:"vectorToPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.Z;return t.x=e[0],t.y=e[1],t.z=0===this.valueType?e[2]:void 0,t.m=1===this.valueType?e[2]:void 0,t.spatialReference=this.spatialReference,t}},{key:"arrayToPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.Z;return t.x=e[0],t.y=e[1],t.z=0===this.valueType?e[2]:void 0,t.m=1===this.valueType?e[2]:void 0,t.spatialReference=this.spatialReference,t}},{key:"vectorToDehydratedPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"},i=0===this.valueType,n=1===this.valueType;return t.x=e[0],t.y=e[1],t.z=i?e[2]:void 0,t.m=n?e[2]:void 0,t.hasZ=i,t.hasM=n,t.spatialReference=this.spatialReference,t}},{key:"lerp",value:function(e,t,i,n){return(0,a.e)(n,e,t,i)}},{key:"addDelta",value:function(e,t,i,n){e[0]+=t,e[1]+=i,0===this.valueType&&(e[2]+=n)}},{key:"distance",value:function(e,t){return 0===this.valueType?(0,a.i)(e,t):(0,s.b)(e,t)}},{key:"getZ",value:function(e,t){return 0===this.valueType?e[2]:t}},{key:"hasZ",value:function(){return 0===this.valueType}},{key:"getM",value:function(e,t){return 1===this.valueType?e[2]:t}},{key:"hasM",value:function(){return 1===this.valueType}},{key:"clone",value:function(e){return this.tag((0,u.d)(e))}},{key:"copy",value:function(e,t){return(0,a.g)(t,e)}},{key:"fromXYZ",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this.tag((0,u.f)(e[0],e[1],0===this.valueType?e.length>2?e[2]:t:i))}},{key:"toXYZ",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.tag((0,u.f)(e[0],e[1],0===this.valueType?e[2]:t))}},{key:"tag",value:function(e){return e}}]),e}(),p=function(){function e(t){(0,n.Z)(this,e),this.spatialReference=t}return(0,r.Z)(e,[{key:"createVector",value:function(){return this.tag((0,c.c)())}},{key:"pointToVector",value:function(e){return this.tag((0,c.f)(e.x,e.y,e.z,e.m))}},{key:"arrayToVector",value:function(e){return this.tag((0,c.f)(e[0],e[1],e[2]||0,e[3]||0))}},{key:"vectorToArray",value:function(e){return[e[0],e[1],e[2],e[3]]}},{key:"pointToArray",value:function(e){return[e.x,e.y,e.z,e.m]}},{key:"vectorToPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.Z;return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}},{key:"arrayToPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.Z;return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}},{key:"vectorToDehydratedPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"};return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.hasZ=!0,t.hasM=!0,t.spatialReference=this.spatialReference,t}},{key:"lerp",value:function(e,t,i,n){return(0,h.l)(n,e,t,i)}},{key:"addDelta",value:function(e,t,i,n){e[0]+=t,e[1]+=i,e[2]+=n}},{key:"distance",value:function(e,t){return(0,a.i)(e,t)}},{key:"getZ",value:function(e){return e[2]}},{key:"hasZ",value:function(){return!0}},{key:"getM",value:function(e){return e[3]}},{key:"hasM",value:function(){return!0}},{key:"clone",value:function(e){return this.tag((0,c.d)(e))}},{key:"copy",value:function(e,t){return(0,h.c)(t,e)}},{key:"fromXYZ",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this.tag((0,c.f)(e[0],e[1],e.length>2?e[2]:t,i))}},{key:"toXYZ",value:function(e){return(0,u.f)(e[0],e[1],e[2])}},{key:"tag",value:function(e){return e}}]),e}();function v(e,t,i){return e&&t?new p(i):t?new f(1,i):e?new f(0,i):new d(i)}},84954:function(e,t,i){i.d(t,{wA:function(){return y},kS:function(){return g},XE:function(){return m},Xz:function(){return v}});var n=i(37762),r=i(60136),s=i(29388),o=i(15671),a=i(43144),u=i(63780),h=i(91505),c=i(92026),l=i(80885),d=i(29909),f=i(14813),p=i(92975);var v=function(){function e(t){(0,o.Z)(this,e),this.component=t,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null}return(0,a.Z)(e,[{key:"pos",get:function(){return this._pos},set:function(e){this._pos=e,this.component.unnormalizeVertexPositions()}}]),e}(),g=(0,a.Z)((function e(t,i,n){(0,o.Z)(this,e),this.component=t,this.leftVertex=i,this.rightVertex=n,this.type="edge",i.rightEdge=this,n.leftEdge=this})),y=function(){function e(t,i){(0,o.Z)(this,e),this.spatialReference=t,this.viewingMode=i,this.vertices=[],this.edges=[]}return(0,a.Z)(e,[{key:"unnormalizeVertexPositions",value:function(){this.vertices.length<=1||function(e,t){if(t.supported){var i=1/0,n=-1/0,r=t.upperBoundX-t.lowerBoundX;e.forEach((function(e){for(var s=e.pos[0];s<t.lowerBoundX;)s+=r;for(;s>t.upperBoundX;)s-=r;i=Math.min(i,s),n=Math.max(n,s),e.pos[0]=s}));var s=n-i;r-s<s&&e.forEach((function(e){e.pos[0]<0&&(e.pos[0]+=r)}))}}(this.vertices,function(e,t){var i=(0,p.C5)(e);return 1===t&&i?{supported:!0,lowerBoundX:i.valid[0],upperBoundX:i.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}(this.spatialReference,this.viewingMode))}},{key:"updateVertexIndex",value:function(e,t){if(0!==this.vertices.length){var i=this.vertices[0],n=null,r=e,s=t;do{(n=r).index=s++,r=n.rightEdge?n.rightEdge.rightVertex:null}while(null!=r&&r!==i);n.leftEdge&&n!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(n),this.vertices.length-1)}}},{key:"getFirstVertex",value:function(){return 0===this.vertices.length?null:this.vertices[0]}},{key:"getLastVertex",value:function(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]}},{key:"isClosed",value:function(){return this.vertices.length>2&&null!==this.vertices[0].leftEdge}},{key:"swapVertices",value:function(e,t){var i=this.vertices[e];this.vertices[e]=this.vertices[t],this.vertices[t]=i}},{key:"iterateVertices",value:function(e){if(0!==this.vertices.length){var t=this.vertices[0],i=t;do{e(i,i.index),i=(0,c.pC)(i.rightEdge)?i.rightEdge.rightVertex:null}while(i!==t&&null!=i)}}}]),e}(),m=function(e){(0,r.Z)(i,e);var t=(0,s.Z)(i);function i(e,n,r){var s;return(0,o.Z)(this,i),(s=t.call(this)).type=e,s.coordinateHelper=n,s.viewingMode=r,s._geometry=null,s.dirty=!0,s.components=[],s}return(0,a.Z)(i,[{key:"geometry",get:function(){if(this.dirty){switch(this.type){case"point":this._geometry=this.toPoint();break;case"polyline":this._geometry=this.toPolyline();break;case"polygon":this._geometry=this.toPolygon()}this.dirty=!1}return this._geometry}},{key:"spatialReference",get:function(){return this.coordinateHelper.spatialReference}},{key:"notifyChanges",value:function(e){this.dirty=!0,this.emit("change",e)}},{key:"toPoint",value:function(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}},{key:"toPolyline",value:function(){var e=[],t=this.coordinateHelper.vectorToArray;return this.components.forEach((function(i,n){var r=[],s=i.vertices.find((function(e){return null==e.leftEdge})),o=s;do{r.push(t(s.pos)),s=s.rightEdge?s.rightEdge.rightVertex:null}while(s&&s!==o);e.push(r)})),new d.Z({paths:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}},{key:"toPolygon",value:function(){var e=[],t=this.coordinateHelper.vectorToArray;return this.components.forEach((function(i,n){var r=[],s=i.vertices[0],o=s,a=o;do{r.push(t(o.pos)),o=(0,c.pC)(o.rightEdge)?o.rightEdge.rightVertex:null}while(o&&o!==a);i.isClosed()&&r.push(t(s.pos)),e.push(r)})),new l.Z({rings:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}}],[{key:"fromGeometry",value:function(e,t){var r=e.spatialReference,s=(0,f.Y6)(e.hasZ,e.hasM,r),o=new i(e.type,s,t);switch(e.type){case"polygon":for(var a=e.rings,h=0;h<a.length;++h){for(var c=a[h],l=new y(r,t),d=c.length>2&&(0,u.fS)(c[0],c[c.length-1]),p=d?c.length-1:c.length,m=0;m<p;++m){var x=s.arrayToVector(c[m]),k=new v(l);l.vertices.push(k),k.pos=x,k.index=m}for(var V=l.vertices.length-1,_=0;_<V;++_){var Z=l.vertices[_],E=l.vertices[_+1],w=new g(l,Z,E);l.edges.push(w)}if(d){var T=new g(l,l.vertices[l.vertices.length-1],l.vertices[0]);l.edges.push(T)}o.components.push(l)}break;case"polyline":var D,z=(0,n.Z)(e.paths);try{for(z.s();!(D=z.n()).done;){for(var P=D.value,C=new y(r,t),R=P.length,b=0;b<R;++b){var M=s.arrayToVector(P[b]),S=new v(C);C.vertices.push(S),S.pos=M,S.index=b}for(var G=C.vertices.length-1,O=0;O<G;++O){var X=C.vertices[O],A=C.vertices[O+1],H=new g(C,X,A);C.edges.push(H)}o.components.push(C)}}catch(N){z.e(N)}finally{z.f()}break;case"point":var W=new y(r,t),I=new v(W);I.index=0,I.pos=s.pointToVector(e),W.vertices.push(I),o.components.push(W)}return o}}]),i}(h.Z)},87268:function(e,t,i){i.d(t,{c:function(){return Z}});var n=i(15671),r=i(43144),s=i(60136),o=i(29388),a=i(91505),u=i(92026),h=i(84954),c=function(){function e(t,i,r){(0,n.Z)(this,e),this.editGeometry=t,this.component=i,this.pos=r,this.addedVertex=null,this.originalEdge=null,this.left=null,this.right=null}return(0,r.Z)(e,[{key:"apply",value:function(){var e="redo";(0,u.Wi)(this.addedVertex)&&(e="apply",this.addedVertex=new h.Xz(this.component));var t=this.component.getLastVertex();if((0,u.Wi)(t))this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,this.addedVertex.index=0;else{var i=null;t.rightEdge&&(this.originalEdge=t.rightEdge,i=this.originalEdge.rightVertex,this.component.edges.splice(this.component.edges.indexOf(this.originalEdge),1)),this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,(0,u.Wi)(this.left)&&(this.left=new h.kS(this.component,t,this.addedVertex)),this.component.edges.push(this.left),t.rightEdge=this.left,(0,u.pC)(this.originalEdge)&&(0,u.pC)(i)&&((0,u.Wi)(this.right)&&(this.right=new h.kS(this.component,this.addedVertex,i)),this.component.edges.push(this.right),i.leftEdge=this.right),this.component.updateVertexIndex(this.addedVertex,t.index+1)}this.editGeometry.notifyChanges({operation:e,addedVertices:[this.addedVertex]})}},{key:"undo",value:function(){if((0,u.Wi)(this.addedVertex))return null;this.component.vertices.splice(this.component.vertices.indexOf(this.addedVertex),1),(0,u.pC)(this.left)&&(this.component.edges.splice(this.component.edges.indexOf(this.left),1),this.left.leftVertex.rightEdge=null),(0,u.pC)(this.right)&&(this.component.edges.splice(this.component.edges.indexOf(this.right),1),this.right.rightVertex.leftEdge=null),(0,u.pC)(this.originalEdge)&&(this.component.edges.push(this.originalEdge),this.originalEdge.leftVertex.rightEdge=this.originalEdge,this.originalEdge.rightVertex.leftEdge=this.originalEdge),(0,u.pC)(this.left)?this.component.updateVertexIndex(this.left.leftVertex,this.left.leftVertex.index):this.component.updateVertexIndex(this.addedVertex,0),this.editGeometry.notifyChanges({operation:"undo",removedVertices:[this.addedVertex]})}},{key:"accumulate",value:function(){return!1}}]),e}(),l=i(34778),d=function(){function e(t,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;(0,n.Z)(this,e),this.editGeometry=t,this.vertices=i,this.minNumberOfVertices=r,this.removedVertices=null}return(0,r.Z)(e,[{key:"apply",value:function(){var e=this,t="redo";null==this.removedVertices?(this.removedVertices=[],this.vertices.forEach((function(t){var i=e._removeVertex(t);(0,u.pC)(i)&&e.removedVertices.push(i)})),t="apply"):this.removedVertices.forEach((function(t){e._removeVertex(t.removedVertex)})),this.editGeometry.notifyChanges({operation:t,removedVertices:this.vertices})}},{key:"undo",value:function(){var e=this;this.removedVertices.forEach((function(t){e._undoRemoveVertex(t)})),this.editGeometry.notifyChanges({operation:"undo",addedVertices:this.vertices})}},{key:"accumulate",value:function(){return!1}},{key:"_removeVertex",value:function(e){var t=e.component;if(t.vertices.length<=this.minNumberOfVertices)return null;var i={removedVertex:e,createdEdge:null},n=e.leftEdge,r=e.rightEdge;return t.vertices.splice(t.vertices.indexOf(e),1),n&&(t.edges.splice(t.edges.indexOf(n),1),n.leftVertex.rightEdge=null),r&&(t.edges.splice(t.edges.indexOf(r),1),r.rightVertex.leftEdge=null),0===e.index&&r&&this.vertices.length>0&&t.swapVertices(t.vertices.indexOf(r.rightVertex),0),n&&r&&(i.createdEdge=new h.kS(t,n.leftVertex,r.rightVertex),t.edges.push(i.createdEdge)),r&&t.updateVertexIndex(r.rightVertex,r.rightVertex.index-1),i}},{key:"_undoRemoveVertex",value:function(e){var t=e.removedVertex,i=e.removedVertex.component,n=t.leftEdge,r=t.rightEdge;e.createdEdge&&i.edges.splice(i.edges.indexOf(e.createdEdge),1),i.vertices.push(t),n&&(i.edges.push(n),n.leftVertex.rightEdge=n),r&&(i.edges.push(r),r.rightVertex.leftEdge=r),i.updateVertexIndex(t,t.index)}}]),e}(),f=function(){function e(t,i,r){(0,n.Z)(this,e),this.editGeometry=t,this.edge=i,this.t=r,this.createdVertex=null,this.left=null,this.right=null}return(0,r.Z)(e,[{key:"apply",value:function(){var e="redo",t=this.edge,i=t.component,n=t.leftVertex,r=t.rightVertex;i.edges.splice(i.edges.indexOf(t),1),(0,u.Wi)(this.createdVertex)&&(e="apply",this.createdVertex=new h.Xz(t.component)),i.vertices.push(this.createdVertex),this.createdVertex.pos=this.editGeometry.coordinateHelper.lerp(t.leftVertex.pos,t.rightVertex.pos,this.t,this.editGeometry.coordinateHelper.createVector()),(0,u.Wi)(this.left)&&(this.left=new h.kS(i,n,this.createdVertex)),this.left.leftVertex.leftEdge?i.edges.push(this.left):i.edges.unshift(this.left),n.rightEdge=this.left,(0,u.Wi)(this.right)&&(this.right=new h.kS(i,this.createdVertex,r)),i.edges.push(this.right),r.leftEdge=this.right,i.updateVertexIndex(this.createdVertex,n.index+1),this.editGeometry.notifyChanges({operation:e,addedVertices:[this.createdVertex]})}},{key:"undo",value:function(){if((0,u.Wi)(this.createdVertex)||(0,u.Wi)(this.left)||(0,u.Wi)(this.right))return null;var e=this.edge,t=e.component,i=this.createdVertex.leftEdge,n=this.createdVertex.rightEdge,r=i.leftVertex,s=n.rightVertex;t.vertices.splice(t.vertices.indexOf(this.createdVertex),1),t.edges.splice(t.edges.indexOf(this.left),1),t.edges.splice(t.edges.indexOf(this.right),1),this.edge.leftVertex.leftEdge?t.edges.push(this.edge):t.edges.unshift(this.edge),r.rightEdge=e,s.leftEdge=e,t.updateVertexIndex(r,r.index),this.editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]})}},{key:"accumulate",value:function(){return!1}}]),e}(),p=function(){function e(t,i,r){(0,n.Z)(this,e),this.editGeometry=t,this.vertex=i,this.pos=r}return(0,r.Z)(e,[{key:"apply",value:function(){var e=(0,u.Wi)(this.originalPosition);e&&(this.originalPosition=this.vertex.pos),this._apply(e?"apply":"redo")}},{key:"undo",value:function(){this.vertex.pos=(0,u.Wg)(this.originalPosition),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:[this.vertex]})}},{key:"accumulate",value:function(t){return t instanceof e&&t.vertex===this.vertex&&(this.pos=t.pos,this._apply("apply"),!0)}},{key:"_apply",value:function(e){this.vertex.pos=this.pos,this.editGeometry.components.forEach((function(e){return e.unnormalizeVertexPositions()})),this.editGeometry.notifyChanges({operation:e,updatedVertices:[this.vertex]})}}]),e}(),v=i(63780),g=function(){function e(t,i){(0,n.Z)(this,e),this.editGeometry=t,this.component=i,this.createdEdge=null}return(0,r.Z)(e,[{key:"apply",value:function(){var e="redo";if((0,u.Wi)(this.createdEdge)){e="apply";var t=this.component.getFirstVertex(),i=this.component.getLastVertex();if(this.component.isClosed()||this.component.vertices.length<3||(0,u.Wi)(t)||(0,u.Wi)(i))return;this.createdEdge=new h.kS(this.component,i,t)}this.createdEdge.leftVertex.rightEdge=this.createdEdge,this.createdEdge.rightVertex.leftEdge=this.createdEdge,this.component.edges.push(this.createdEdge),this.editGeometry.notifyChanges({operation:e})}},{key:"undo",value:function(){(0,u.Wi)(this.createdEdge)||((0,v.Od)(this.component.edges,this.createdEdge),this.createdEdge.leftVertex.rightEdge=null,this.createdEdge.rightVertex.leftEdge=null,this.editGeometry.notifyChanges({operation:"undo"}))}},{key:"accumulate",value:function(){return!1}}]),e}(),y=i(254),m=i(3711),x=i(12225),k=i(29014),V=i(37762),_=function(){function e(){(0,n.Z)(this,e),this.operations=[],this.closed=!1}return(0,r.Z)(e,[{key:"close",value:function(){this.closed=!0}},{key:"apply",value:function(){var e,t=(0,V.Z)(this.operations);try{for(t.s();!(e=t.n()).done;){e.value.apply()}}catch(i){t.e(i)}finally{t.f()}}},{key:"undo",value:function(){for(var e=this.operations.length-1;e>=0;e--)this.operations[e].undo()}},{key:"accumulate",value:function(e){if(this.closed)return!1;var t=this.operations.length?this.operations[this.operations.length-1]:null;return t&&t.accumulate(e)||(this.operations.push(e),e.apply()),!0}}]),e}(),Z=function(e){(0,s.Z)(i,e);var t=(0,o.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this)).data=e,r.undoStack=[],r.redoStack=[],r.listener=r.data.on("change",(function(e){e.addedVertices&&r.emit("vertex-add",{type:"vertex-add",vertices:e.addedVertices,operation:e.operation}),e.removedVertices&&r.emit("vertex-remove",{type:"vertex-remove",vertices:e.removedVertices,operation:e.operation}),e.updatedVertices&&r.emit("vertex-update",{type:"vertex-update",vertices:e.updatedVertices,operation:e.operation})})),r}return(0,r.Z)(i,[{key:"destroy",value:function(){this.listener.remove()}},{key:"splitEdge",value:function(e,t){return this.apply(new f(this.data,e,t))}},{key:"updateVertices",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return this.apply(new l.y(this.data,e,t),i)}},{key:"moveVertices",value:function(e,t,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return this.updateVertices(e,new y.z(this.data.coordinateHelper,t,i,n),r)}},{key:"scaleVertices",value:function(e,t,i,n,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;return this.updateVertices(e,new k.q(t,i,n,r,o),s)}},{key:"rotateVertices",value:function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return this.updateVertices(e,new x.S(t,i,r),n)}},{key:"removeVertices",value:function(e){return this.apply(new d(this.data,e,this._minNumVerticesPerType))}},{key:"appendVertex",value:function(e){return 0===this.data.components.length?null:this.apply(new c(this.data,this.data.components[0],e))}},{key:"setVertexPosition",value:function(e,t){return this.apply(new p(this.data,e,t))}},{key:"offsetEdge",value:function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return this.updateVertices([t.leftVertex,t.rightVertex],new m.A(this.data.coordinateHelper,e,t,i),n)}},{key:"closeComponent",value:function(e){return this.data.components.includes(e)?this.apply(new g(this.data,e)):null}},{key:"canRemoveVertex",value:function(){return this.data.components[0].vertices.length>this._minNumVerticesPerType}},{key:"createUndoGroup",value:function(){var e=new _;return this.apply(e),{remove:function(){return e.close()}}}},{key:"undo",value:function(){if(this.undoStack.length>0){var e=this.undoStack.pop();return e.undo(),this.redoStack.push(e),e}return null}},{key:"redo",value:function(){if(this.redoStack.length>0){var e=this.redoStack.pop();return e.apply(),this.undoStack.push(e),e}return null}},{key:"canUndo",get:function(){return this.undoStack.length>0}},{key:"canRedo",get:function(){return this.redoStack.length>0}},{key:"lastOperation",get:function(){return this.undoStack.length>0?this.undoStack[this.undoStack.length-1]:null}},{key:"_minNumVerticesPerType",get:function(){switch(this.data.type){case"point":return 1;case"polyline":return 2;case"polygon":return 3;default:return 0}}},{key:"apply",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return 0!==t&&!(0,u.Wi)(this.lastOperation)&&this.lastOperation.accumulate(e)||(e.apply(),this.undoStack.push(e),this.redoStack=[]),e}}],[{key:"fromGeometry",value:function(e,t){return new i(h.XE.fromGeometry(e,t))}}]),i}(a.Z)},254:function(e,t,i){i.d(t,{z:function(){return s}});var n=i(15671),r=i(43144),s=function(){function e(t,i,r,s){(0,n.Z)(this,e),this.helper=t,this.dx=i,this.dy=r,this.dz=s}return(0,r.Z)(e,[{key:"move",value:function(e,t,i,n){this.helper.addDelta(e.pos,t,i,n)}},{key:"apply",value:function(e){this.move(e,this.dx,this.dy,this.dz)}},{key:"undo",value:function(e){this.move(e,-this.dx,-this.dy,-this.dz)}},{key:"canAccumulate",value:function(t){return t instanceof e}},{key:"accumulate",value:function(e,t){this.move(e,t.dx,t.dy,t.dz)}},{key:"accumulateParams",value:function(e){this.dx+=e.dx,this.dy+=e.dy,this.dz+=e.dz}}]),e}()},3711:function(e,t,i){i.d(t,{A:function(){return v}});var n=i(29439),r=i(15671),s=i(43144),o=i(16889),a=i(92026),u=i(88396),h=i(6394),c=i(11186),l=i(71353),d=i(55652),f=i(40927),p=i(94163),v=function(){function e(t,i,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;(0,r.Z)(this,e),this.helper=t,this.planeType=i,this.edge=n,this.distance=s,this._plane=(0,d.Ue)(),this._offsetPlane=(0,d.Ue)(),this._minDistance=-1/0,this._maxDistance=1/0,0===o&&this._initialize()}return(0,s.Z)(e,[{key:"plane",get:function(){return this._plane}},{key:"requiresSplitEdgeLeft",get:function(){return!this._left.isOriginalDirection}},{key:"requiresSplitEdgeRight",get:function(){return!this._right.isOriginalDirection}},{key:"edgeDirection",get:function(){return this._edgeDirection}},{key:"_initialize",value:function(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints()}},{key:"_initializeNeighbors",value:function(){var e,t,i,n,r=this._toXYZ(this.edge.leftVertex.pos),s=this._toXYZ(null==(e=this.edge.leftVertex.leftEdge)||null==(t=e.leftVertex)?void 0:t.pos),o=this._toXYZ(this.edge.rightVertex.pos),a=this._toXYZ(null==(i=this.edge.rightVertex.rightEdge)||null==(n=i.rightVertex)?void 0:n.pos);this._edgeDirection=(0,c.r)((0,l.c)(),r,o),this._left=this._computeNeighbor(r,s,this._edgeDirection),this._right=this._computeNeighbor(o,a,this._edgeDirection)}},{key:"_toXYZ",value:function(e){return(0,a.pC)(e)?this.helper.toXYZ(e):null}},{key:"_computeNeighbor",value:function(e,t,i){if((0,a.Wi)(t))return{start:e,end:t,direction:(0,l.f)(-i[1],i[0],0),isOriginalDirection:!0};var n=(0,c.r)((0,l.c)(),e,t),r=!this._passesBisectingAngleThreshold(n,i);return{start:e,end:t,direction:r?this._bisectVectorsPerpendicular(i,n):n,isOriginalDirection:!r}}},{key:"_passesBisectingAngleThreshold",value:function(e,t){var i=Math.abs((0,f.EU)(t,e));return i>=g&&i<=Math.PI-g}},{key:"_bisectVectorsPerpendicular",value:function(e,t){var i=(0,c.d)(e,t)<0?e:(0,c.o)((0,l.c)(),e),n=Math.abs((0,c.d)(i,t));if(!(n<.001||n>.999))return this._bisectDirection(i,t);var r=(0,c.c)((0,l.c)(),i,[0,0,1]);return(0,c.n)(r,r)}},{key:"_bisectDirection",value:function(e,t){var i=(0,c.b)((0,l.c)(),e,t);return(0,c.n)(i,i)}},{key:"_initializePlane",value:function(){var e=this._computeNormalDirection(this._left),t=this._computeNormalDirection(this._right);(0,c.d)(e,t)<0&&(0,c.o)(t,t),(0,d.Yq)(this._left.start,this._bisectDirection(e,t),this._plane)}},{key:"_computeNormalDirection",value:function(e){var t=(0,c.c)((0,l.c)(),e.direction,this._edgeDirection);(0,c.n)(t,t);var i=(0,c.c)((0,l.c)(),this._edgeDirection,t);return 1===this.planeType&&(i[2]=0),(0,c.n)(i,i)}},{key:"_initializeDistanceConstraints",value:function(){(0,a.pC)(this._left.end)&&!this.requiresSplitEdgeLeft&&this._updateDistanceConstraint((0,d.jH)(this._plane,this._left.end)),(0,a.pC)(this._right.end)&&!this.requiresSplitEdgeRight&&this._updateDistanceConstraint((0,d.jH)(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane)}},{key:"_updateDistanceConstraint",value:function(e){e<=0&&(this._minDistance=Math.max(this._minDistance,e)),e>=0&&(this._maxDistance=Math.min(this._maxDistance,e))}},{key:"_updateIntersectDistanceConstraint",value:function(e){var t=(0,d.mJ)(e),i=this._edgeDirection,r=(0,c.b)((0,l.c)(),this._left.start,this._left.direction),s=(0,c.b)((0,l.c)(),this._right.start,this._right.direction),o=this._pointInBasis2D((0,h.a)(),t,i,this._left.start),a=this._pointInBasis2D((0,h.a)(),t,i,r),f=this._pointInBasis2D((0,h.a)(),t,i,this._right.start),v=this._pointInBasis2D((0,h.a)(),t,i,s),g=(0,p.dU)({start:a,end:o,type:1},{start:v,end:f,type:1}),y=(0,n.Z)(g,1)[0];if(y){var m=(0,u.f)((0,h.a)(),o,a);(0,u.i)(m,m);var x=(0,u.f)((0,h.a)(),y,a),k=(0,u.k)(m,x),V=(0,c.b)((0,l.c)(),r,(0,c.a)((0,l.c)(),this._left.direction,-k)),_=(0,d.jH)(e,V);this._updateDistanceConstraint(_)}}},{key:"_pointInBasis2D",value:function(e,t,i,n){return e[0]=(0,f.SR)(t,n),e[1]=(0,f.SR)(i,n),e}},{key:"_offset",value:function(e,t){var i=this;Number.isFinite(this._minDistance)&&(t=Math.max(this._minDistance,t)),Number.isFinite(this._maxDistance)&&(t=Math.min(this._maxDistance,t)),(0,d.JG)(this._plane,this._offsetPlane),this._offsetPlane[3]-=t;var n=function(e,t,n){return(0,a.pC)(t)&&(0,d.fn)(i._offsetPlane,e,(0,c.b)((0,l.c)(),e,t),n)},r=(0,l.c)();(e===this.edge.leftVertex?n(this._left.start,this._left.direction,r):n(this._right.start,this._right.direction,r))&&this.helper.copy(this.helper.fromXYZ(r,void 0,this.helper.getM(e.pos)),e.pos)}},{key:"signedDistanceToPoint",value:function(e){return(0,d.jH)(this.plane,this.helper.toXYZ(this.helper.pointToVector(e)))}},{key:"apply",value:function(e){this._offset(e,this.distance)}},{key:"undo",value:function(e){this._offset(e,0)}},{key:"canAccumulate",value:function(t){return t instanceof e&&this.edge.leftVertex.index===t.edge.leftVertex.index&&this.edge.rightVertex.index===t.edge.rightVertex.index&&this.edge.component===t.edge.component&&this._maybeEqualsVec3(this._left.direction,t._left.direction)&&this._maybeEqualsVec3(this._right.direction,t._right.direction)&&(0,c.z)((0,d.mJ)(this._plane),(0,d.mJ)(t._plane))}},{key:"accumulate",value:function(e,t){var i=this._plane[3]-t._plane[3]+t.distance;this._offset(e,i)}},{key:"accumulateParams",value:function(e){var t=e.distance-e._plane[3];this.distance=t+this._plane[3]}},{key:"clone",value:function(){var t=new e(this.helper,this.planeType,this.edge,this.distance,1);return(0,d.JG)(this._plane,t._plane),(0,d.JG)(this._offsetPlane,t._offsetPlane),t._maxDistance=this._maxDistance,t._minDistance=this._minDistance,t._left=this._cloneNeighbor(this._left),t._right=this._cloneNeighbor(this._right),t._edgeDirection=(0,c.g)((0,l.c)(),this._edgeDirection),t}},{key:"_maybeEqualsVec3",value:function(e,t){return(0,a.Wi)(e)&&(0,a.Wi)(t)||(0,a.pC)(e)&&(0,a.pC)(t)&&(0,c.z)(e,t)}},{key:"_cloneNeighbor",value:function(e){var t=e.start,i=e.end,n=e.direction,r=e.isOriginalDirection;return{start:(0,c.g)((0,l.c)(),t),end:(0,a.pC)(i)?(0,c.g)((0,l.c)(),i):null,direction:(0,c.g)((0,l.c)(),n),isOriginalDirection:r}}}]),e}(),g=(0,o.Vl)(15)},12225:function(e,t,i){i.d(t,{S:function(){return a}});var n=i(15671),r=i(43144),s=i(63780),o=i(88396),a=function(){function e(t,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;(0,n.Z)(this,e),this.origin=t,this.angle=i,this.accumulationType=r}return(0,r.Z)(e,[{key:"rotate",value:function(e,t){(0,o.r)(e.pos,e.pos,this.origin,t)}},{key:"apply",value:function(e){this.rotate(e,this.angle)}},{key:"undo",value:function(e){this.rotate(e,-this.angle)}},{key:"canAccumulate",value:function(t){return t instanceof e&&(0,s.fS)(this.origin,t.origin)}},{key:"accumulate",value:function(e,t){var i=1===t.accumulationType;this.rotate(e,i?t.angle-this.angle:t.angle)}},{key:"accumulateParams",value:function(e){var t=1===e.accumulationType;this.angle=t?e.angle:this.angle+e.angle}}]),e}()},29014:function(e,t,i){i.d(t,{q:function(){return u}});var n=i(15671),r=i(43144),s=i(63780),o=i(6394),a=i(88396),u=function(){function e(t,i,r,s){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;(0,n.Z)(this,e),this.origin=t,this.axis1=i,this.factor1=r,this.factor2=s,this.accumulationType=a,this.axis2=(0,o.f)(i[1],-i[0])}return(0,r.Z)(e,[{key:"scale",value:function(e,t,i){(0,a.q)(e.pos,e.pos,this.origin,this.axis1,t),(0,a.q)(e.pos,e.pos,this.origin,this.axis2,i)}},{key:"apply",value:function(e){this.scale(e,this.factor1,this.factor2)}},{key:"undo",value:function(e){this.scale(e,1/this.factor1,1/this.factor2)}},{key:"canAccumulate",value:function(t){return t instanceof e&&(0,s.fS)(this.origin,t.origin)&&(0,s.fS)(this.axis1,t.axis1)}},{key:"accumulate",value:function(e,t){1===t.accumulationType?this.scale(e,t.factor1/this.factor1,t.factor2/this.factor2):this.scale(e,t.factor1,t.factor2)}},{key:"accumulateParams",value:function(e){var t=1===e.accumulationType;this.factor1=t?e.factor1:this.factor1*e.factor1,this.factor2=t?e.factor2:this.factor2*e.factor2}}]),e}()},34778:function(e,t,i){i.d(t,{y:function(){return s}});var n=i(15671),r=i(43144),s=function(){function e(t,i,r){(0,n.Z)(this,e),this.editGeometry=t,this.vertices=i,this.operation=r,this.undone=!1}return(0,r.Z)(e,[{key:"apply",value:function(){var e=this;this.vertices.forEach((function(t){return e.operation.apply(t)})),this.editGeometry.components.forEach((function(e){return e.unnormalizeVertexPositions()})),this.editGeometry.notifyChanges({operation:this.undone?"redo":"apply",updatedVertices:this.vertices})}},{key:"undo",value:function(){var e=this;this.vertices.forEach((function(t){return e.operation.undo(t)})),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:this.vertices}),this.undone=!0}},{key:"canAccumulate",value:function(e){if(this.undone||e.vertices.length!==this.vertices.length)return!1;for(var t=0;t<e.vertices.length;++t)if(e.vertices[t]!==this.vertices[t])return!1;return this.operation.canAccumulate(e.operation)}},{key:"accumulate",value:function(t){var i=this;return!!(t instanceof e&&this.canAccumulate(t))&&(this.vertices.forEach((function(e){return i.operation.accumulate(e,t.operation)})),this.operation.accumulateParams(t.operation),this.editGeometry.components.forEach((function(e){return e.unnormalizeVertexPositions()})),this.editGeometry.notifyChanges({operation:"apply",updatedVertices:this.vertices}),!0)}}]),e}()},34019:function(e,t,i){i.d(t,{N:function(){return s}});var n=i(15671),r=i(43144),s=function(){function e(t){(0,n.Z)(this,e),this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.editGeometryOperations=t.editGeometryOperations,this.elevationInfo=t.elevationInfo,this.pointer=t.pointer,this.vertexHandle=t.vertexHandle,this.excludeFeature=t.excludeFeature,this.visualizer=t.visualizer}return(0,r.Z)(e,[{key:"coordinateHelper",get:function(){return this.editGeometryOperations.data.coordinateHelper}}]),e}()},38561:function(e,t,i){i.d(t,{a:function(){return d}});var n=i(37762),r=i(15671),s=i(43144),o=i(42537),a=i(90609),u=i(53397),h=i(5916),c=i(61309),l=i(41216),d=function(){function e(){(0,r.Z)(this,e)}return(0,s.Z)(e,[{key:"draw",value:function(e,t){var i,r=this.getUniqueHints(e),s=[],d=(0,n.Z)(r);try{for(d.s();!(i=d.n()).done;){var f=i.value;f instanceof a.w&&s.push(this.visualizeIntersectionPoint(f,t)),f instanceof u.w&&s.push(this.visualizeLine(f,t)),f instanceof h.L&&s.push(this.visualizeParallelSign(f,t)),f instanceof l.y&&s.push(this.visualizeRightAngleQuad(f,t)),f instanceof c.n&&s.push(this.visualizePoint(f,t))}}catch(p){d.e(p)}finally{d.f()}return(0,o.AL)(s)}},{key:"getUniqueHints",value:function(e){var t,i=[],r=(0,n.Z)(e);try{for(r.s();!(t=r.n()).done;){var s,o=t.value,a=!0,u=(0,n.Z)(i);try{for(u.s();!(s=u.n()).done;){var h=s.value;if(o.equals(h)){a=!1;break}}}catch(c){u.e(c)}finally{u.f()}a&&i.push(o)}}catch(c){r.e(c)}finally{r.f()}return i}}]),e}()},61309:function(e,t,i){i.d(t,{n:function(){return u}});var n=i(15671),r=i(43144),s=i(60136),o=i(29388),a=i(64674),u=function(e){(0,s.Z)(i,e);var t=(0,o.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this)).point=e,r}return(0,r.Z)(i,[{key:"equals",value:function(e){return e instanceof i&&(0,a.Xv)(this.point,e.point)}}]),i}(i(55054).r)}}]);
//# sourceMappingURL=6892.ad649c34.chunk.js.map