"use strict";(self.webpackChunkfield_sustainability_helper=self.webpackChunkfield_sustainability_helper||[]).push([[9713],{48976:function(e,t,i){i.d(t,{c:function(){return m},g:function(){return u},i:function(){return y},j:function(){return I},k:function(){return d},m:function(){return h},r:function(){return k},s:function(){return c}});var n=i(11873),r=i(98131),a=i(71353),l=i(26277),o=i(11186),s=i(90045);function c(e,t,i){i*=.5;var n=Math.sin(i);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(i),e}function u(e,t){var i=2*Math.acos(t[3]),n=Math.sin(i/2);return n>l.E?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),i}function h(e,t,i){var n=t[0],r=t[1],a=t[2],l=t[3],o=i[0],s=i[1],c=i[2],u=i[3];return e[0]=n*u+l*o+r*c-a*s,e[1]=r*u+l*s+a*o-n*c,e[2]=a*u+l*c+n*s-r*o,e[3]=l*u-n*o-r*s-a*c,e}function p(e,t,i,n){var r,a,o,s,c,u=t[0],h=t[1],p=t[2],y=t[3],m=i[0],v=i[1],d=i[2],f=i[3];return(a=u*m+h*v+p*d+y*f)<0&&(a=-a,m=-m,v=-v,d=-d,f=-f),1-a>l.E?(r=Math.acos(a),o=Math.sin(r),s=Math.sin((1-n)*r)/o,c=Math.sin(n*r)/o):(s=1-n,c=n),e[0]=s*u+c*m,e[1]=s*h+c*v,e[2]=s*p+c*d,e[3]=s*y+c*f,e}function y(e,t){var i=t[0],n=t[1],r=t[2],a=t[3],l=i*i+n*n+r*r+a*a,o=l?1/l:0;return e[0]=-i*o,e[1]=-n*o,e[2]=-r*o,e[3]=a*o,e}function m(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function v(e,t){var i,n=t[0]+t[4]+t[8];if(n>0)i=Math.sqrt(n+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{var r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);var a=(r+1)%3,l=(r+2)%3;i=Math.sqrt(t[3*r+r]-t[3*a+a]-t[3*l+l]+1),e[r]=.5*i,i=.5/i,e[3]=(t[3*a+l]-t[3*l+a])*i,e[a]=(t[3*a+r]+t[3*r+a])*i,e[l]=(t[3*l+r]+t[3*r+l])*i}return e}function d(e,t,i,n){var r=.5*Math.PI/180;t*=r,i*=r,n*=r;var a=Math.sin(t),l=Math.cos(t),o=Math.sin(i),s=Math.cos(i),c=Math.sin(n),u=Math.cos(n);return e[0]=a*s*u-l*o*c,e[1]=l*o*u+a*s*c,e[2]=l*s*c-a*o*u,e[3]=l*s*u+a*o*c,e}var f=s.c,M=s.s,g=s.a,b=h,w=s.b,S=s.d,C=s.l,Z=s.e,_=Z,G=s.f,x=G,E=s.n,I=s.g,P=s.h;function k(e,t,i){var n=(0,o.d)(t,i);return n<-.999999?((0,o.c)(L,V,t),(0,o.u)(L)<1e-6&&(0,o.c)(L,z,t),(0,o.n)(L,L),c(e,L,Math.PI),e):n>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,o.c)(L,t,i),e[0]=L[0],e[1]=L[1],e[2]=L[2],e[3]=1+n,E(e,e))}var L=(0,a.c)(),V=(0,a.f)(1,0,0),z=(0,a.f)(0,1,0);var O=(0,r.a)(),R=(0,r.a)();var T=(0,n.c)();Object.freeze({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:c,getAxisAngle:u,multiply:h,rotateX:function(e,t,i){i*=.5;var n=t[0],r=t[1],a=t[2],l=t[3],o=Math.sin(i),s=Math.cos(i);return e[0]=n*s+l*o,e[1]=r*s+a*o,e[2]=a*s-r*o,e[3]=l*s-n*o,e},rotateY:function(e,t,i){i*=.5;var n=t[0],r=t[1],a=t[2],l=t[3],o=Math.sin(i),s=Math.cos(i);return e[0]=n*s-a*o,e[1]=r*s+l*o,e[2]=a*s+n*o,e[3]=l*s-r*o,e},rotateZ:function(e,t,i){i*=.5;var n=t[0],r=t[1],a=t[2],l=t[3],o=Math.sin(i),s=Math.cos(i);return e[0]=n*s+r*o,e[1]=r*s-n*o,e[2]=a*s+l*o,e[3]=l*s-a*o,e},calculateW:function(e,t){var i=t[0],n=t[1],r=t[2];return e[0]=i,e[1]=n,e[2]=r,e[3]=Math.sqrt(Math.abs(1-i*i-n*n-r*r)),e},slerp:p,random:function(e){var t=(0,l.R)(),i=(0,l.R)(),n=(0,l.R)(),r=Math.sqrt(1-t),a=Math.sqrt(t);return e[0]=r*Math.sin(2*Math.PI*i),e[1]=r*Math.cos(2*Math.PI*i),e[2]=a*Math.sin(2*Math.PI*n),e[3]=a*Math.cos(2*Math.PI*n),e},invert:y,conjugate:m,fromMat3:v,fromEuler:d,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:f,set:M,add:g,mul:b,scale:w,dot:S,lerp:C,length:Z,len:_,squaredLength:G,sqrLen:x,normalize:E,exactEquals:I,equals:P,rotationTo:k,sqlerp:function(e,t,i,n,r,a){return p(O,t,r,a),p(R,i,n,a),p(e,O,R,2*a*(1-a)),e},setAxes:function(e,t,i,n){var r=T;return r[0]=i[0],r[3]=i[1],r[6]=i[2],r[1]=n[0],r[4]=n[1],r[7]=n[2],r[2]=-t[0],r[5]=-t[1],r[8]=-t[2],E(e,v(e,r))}})},85577:function(e,t,i){i.d(t,{r:function(){return S}});var n=i(93433),r=i(15671),a=i(43144),l=i(60136),o=i(29388),s=(i(59486),i(52639)),c=(i(51508),i(42537)),u=i(17842),h=i(88396),p=i(6394),y=i(71353),m=i(70040),v=i(76014),d=i(38561),f=i(16072),M=i(16851),g=i(75021),b=i(7882),w=i(29909),S=function(e){(0,l.Z)(i,e);var t=(0,o.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this)).graphicsLayer=e,n}return(0,a.Z)(i,[{key:"visualizeIntersectionPoint",value:function(e,t){return this._visualizeSnappingIndicator(new b.Z({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:t.coordinateHelper.spatialReference}),_)}},{key:"visualizePoint",value:function(e,t){return this._visualizeSnappingIndicator(new b.Z({x:e.point[0],y:e.point[1],spatialReference:t.coordinateHelper.spatialReference}),G)}},{key:"visualizeLine",value:function(e,t){return this._visualizeSnappingIndicator(new w.Z({paths:[[e.lineStart,e.lineEnd]],spatialReference:t.coordinateHelper.spatialReference}),x)}},{key:"visualizeParallelSign",value:function(e,t){return this._visualizeSnappingIndicator(new w.Z({paths:[[e.lineStart,e.lineEnd]],spatialReference:t.coordinateHelper.spatialReference}),E)}},{key:"visualizeRightAngleQuad",value:function(e,t){return this._visualizeSnappingIndicator(new w.Z({paths:[[e.previousVertex,e.centerVertex,e.nextVertex]],spatialReference:t.coordinateHelper.spatialReference}),L(e))}},{key:"_visualizeSnappingIndicator",value:function(e,t){var i=this,n=new s.Z({geometry:e,symbol:t});return this.graphicsLayer.add(n),(0,c.kB)((function(){i.graphicsLayer.remove(n)}))}}]),i}(d.a),C=m.O.main.toArray(),Z=[].concat((0,n.Z)(m.O.main.toRgb()),[100]),_=new f.Z({outline:new M.Z({width:1.5,color:C}),size:15,color:[0,0,0,0]}),G=new f.Z({outline:{width:.5,color:[0,0,0,1]},size:10,color:C}),x=new g.Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:(0,u.Wz)(v.c.lineHintWidthTarget),color:C}]}}}),E=new g.Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:C}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:C}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),I=function(e){return new g.Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:(0,u.Wz)(v.c.rightAngleHintSize),rotation:e,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:(0,u.Wz)(v.c.rightAngleHintOutlineSize),color:C},{type:"CIMSolidFill",enable:!0,color:Z}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}})},P=I(45),k=I(225),L=function(){var e=(0,p.a)(),t=(0,p.a)(),i=(0,y.c)();return function(n){return(0,h.f)(e,n.centerVertex,n.previousVertex),(0,h.f)(t,n.nextVertex,n.previousVertex),(0,h.j)(i,e,t),i[2]<0?P:k}}()},51283:function(e,t,i){i.r(t),i.d(t,{DrawGraphicTool2D:function(){return _}});var n=i(29439),r=i(15671),a=i(43144),l=i(60136),o=i(29388),s=i(27366),c=(i(59486),i(52639)),u=i(42537),h=i(92026),p=i(49861),y=(i(63780),i(93169),i(25243),i(69912)),m=i(85577),v=(i(51508),i(75021)),d=i(16072),f=new v.Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),M=new d.Z({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),g=new d.Z({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}}),b=i(77566),w=i(42046),S=i(54016),C=i(7882),Z=i(77577),_=function(e){(0,l.Z)(i,e);var t=(0,o.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e))._visualElementGraphics={outline:null,regularVertices:null,activeVertex:null},n.activeFillSymbol=null,n.type="draw-2d",n._visualElementSymbols={outline:(0,h.Pt)(e.activeLineSymbol,f),regularVertices:(0,h.Pt)(e.regularVerticesSymbol,M),activeVertex:(0,h.Pt)(e.activeVertexSymbol,g),fill:(0,h.Wg)(e.activeFillSymbol)},n}return(0,a.Z)(i,[{key:"initializeGraphic",value:function(e){return(0,h.pC)(this._visualElementSymbols.fill)&&(e.symbol=this._visualElementSymbols.fill),null}},{key:"makeDrawOperation",value:function(){var e=this.view;return new w.w({view:e,manipulators:this.manipulators,geometryType:(0,b.I)(this.geometryType),drawingMode:this.mode,hasZ:this.hasZ,defaultZ:this.defaultZ,snapToSceneEnabled:this.snapToScene,drawSurface:new S.hP(e),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new m.r(this.internalGraphicsLayer)})}},{key:"onActiveVertexChanged",value:function(e){var t=this;if("point"===this.geometryType)return null;var i=(0,n.Z)(e,2),r=i[0],a=i[1],l=new C.Z({x:r,y:a,spatialReference:this.drawOperation.spatialReference});return(0,h.pC)(this._visualElementGraphics.activeVertex)?(this._visualElementGraphics.activeVertex.geometry=l,null):(this._visualElementGraphics.activeVertex=new c.Z({geometry:l,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(G),(0,u.kB)((function(){(0,h.pC)(t._visualElementGraphics.activeVertex)&&(t.internalGraphicsLayer.remove(t._visualElementGraphics.activeVertex),t._visualElementGraphics.activeVertex=(0,h.SC)(t._visualElementGraphics.activeVertex))})))}},{key:"onOutlineChanged",value:function(e){var t=this,i=e.clone();if("polyline"===i.type){var n=i.paths[i.paths.length-1];n.splice(0,n.length-2)}return(0,h.pC)(this._visualElementGraphics.outline)?(this._visualElementGraphics.outline.geometry=i,null):(this._visualElementGraphics.outline=new c.Z({geometry:i,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.outline),this.internalGraphicsLayer.graphics.sort(G),(0,u.kB)((function(){(0,h.pC)(t._visualElementGraphics.outline)&&(t.internalGraphicsLayer.remove(t._visualElementGraphics.outline),t._visualElementGraphics.outline=(0,h.SC)(t._visualElementGraphics.outline))})))}},{key:"onRegularVerticesChanged",value:function(e){var t=this,i=new Z.Z({points:e,spatialReference:this.drawOperation.spatialReference});return(0,h.pC)(this._visualElementGraphics.regularVertices)?(this._visualElementGraphics.regularVertices.geometry=i,null):(this._visualElementGraphics.regularVertices=new c.Z({geometry:i,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(G),(0,u.kB)((function(){(0,h.pC)(t._visualElementGraphics.regularVertices)&&(t.internalGraphicsLayer.remove(t._visualElementGraphics.regularVertices),t._visualElementGraphics.regularVertices=(0,h.SC)(t._visualElementGraphics.regularVertices))})))}}]),i}(b.T);function G(e,t){var i,n,r,a;return(null!=(i=null==(n=e.attributes)?void 0:n.displayOrder)?i:-1/0)-(null!=(r=null==(a=t.attributes)?void 0:a.displayOrder)?r:-1/0)}(0,s._)([(0,p.Cb)()],_.prototype,"activeFillSymbol",void 0),(0,s._)([(0,p.Cb)({readOnly:!0})],_.prototype,"type",void 0),(0,s._)([(0,p.Cb)({constructOnly:!0,nonNullable:!0})],_.prototype,"view",void 0),_=(0,s._)([(0,y.j)("esri.views.2d.interactive.draw.DrawGraphicTool2D")],_)},70040:function(e,t,i){i.d(t,{O:function(){return l},X:function(){return y}});var n=i(43144),r=i(15671),a=i(51995),l={main:new a.Z([255,127,0]),selected:new a.Z([255,255,255]),outline:new a.Z([0,0,0,.5]),selectedOutline:new a.Z([255,255,255]),hoverOutline:new a.Z([255,255,255]),secondary:new a.Z([255,255,255]),secondaryOutline:new a.Z([100,100,100]),transparent:new a.Z([0,0,0,0])};function o(e,t){if(t)for(var i in t)e[i]=t[i]}var s=(0,n.Z)((function e(t){(0,r.Z)(this,e),this.size=8,this.hoverSize=10,this.color=l.main,this.hoverColor=l.main,this.outlineColor=l.outline,this.hoverOutlineColor=l.hoverOutline,o(this,t)})),c=(0,n.Z)((function e(t){(0,r.Z)(this,e),this.color=l.secondary,this.hoverColor=l.main,o(this,t)})),u=(0,n.Z)((function e(t){(0,r.Z)(this,e),this.color=l.transparent,this.hoverColor=l.transparent,this.outlineColor=l.main,this.hoverOutlineColor=l.main,this.stagedColor=l.transparent,this.stagedOutlineColor=l.secondary,o(this,t)})),h=(0,n.Z)((function e(t){(0,r.Z)(this,e),this.vertex=new s,this.midpoint=new s({color:l.secondary,outlineColor:l.secondaryOutline,size:6}),this.selected=new s({color:l.selected,hoverColor:l.selected,hoverOutlineColor:l.hoverOutline}),o(this,t)})),p=(0,n.Z)((function e(t){(0,r.Z)(this,e),this.center=new s({color:l.secondaryOutline}),this.fill=new u,this.line=new c,this.vertex=new s({color:l.selected,outlineColor:l.main,hoverColor:l.selected,hoverOutlineColor:l.secondaryOutline}),o(this,t)})),y=new((0,n.Z)((function e(t){(0,r.Z)(this,e),this.reshapeGraphics=new h,this.transformGraphics=new p,o(this,t)})))}}]);
//# sourceMappingURL=9713.e6699caf.chunk.js.map