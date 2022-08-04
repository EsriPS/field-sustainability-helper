"use strict";(globalThis.webpackChunkfield_sustainability_helper=globalThis.webpackChunkfield_sustainability_helper||[]).push([[6306,8],{96306:(t,e,i)=>{i.r(e),i.d(e,{default:()=>X});var s=i(27366),r=(i(59486),i(52639)),a=i(91505),o=i(100),h=i(92026),n=i(8537),c=i(49861),l=(i(63780),i(93169),i(25243),i(69912)),p=i(65156),u=i(376),d=i(69662),g=i(80885),y=i(29909),_=i(7882),v=i(77577);function m(t){let e=0,i=0;const s=t.length;let r,a=t[i];for(i=0;i<s-1;i++)r=t[i+1],e+=(r[0]-a[0])*(r[1]+a[1]),a=r;return e>=0}function f(t,e,i,s){const r=[];for(const a of t){const t=a.slice(0);r.push(t);const o=e*(a[0]-s.x)-i*(a[1]-s.y)+s.x,h=i*(a[0]-s.x)+e*(a[1]-s.y)+s.y;t[0]=o,t[1]=h}return r}function G(t,e,i){const s=t.spatialReference,r=e*Math.PI/180,a=Math.cos(r),o=Math.sin(r);var h,n;if("xmin"in t&&(i=null!=(h=i)?h:t.center,t=new g.Z({spatialReference:s,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){var c;i=null!=(c=i)?c:t.extent.center;const e=[];for(const s of t.paths)e.push(f(s,a,o,i));return new y.Z({spatialReference:s,paths:e})}if("rings"in t){var l;i=null!=(l=i)?l:t.extent.center;const e=[];for(const s of t.rings){const t=m(s),r=f(s,a,o,i);m(r)!==t&&r.reverse(),e.push(r)}return new g.Z({spatialReference:s,rings:e})}if("x"in t){var p;i=null!=(p=i)?p:t;const e=new _.Z({x:a*(t.x-i.x)-o*(t.y-i.y)+i.x,y:o*(t.x-i.x)+a*(t.y-i.y)+i.y,spatialReference:s});return null!=t.z&&(e.z=t.z),null!=t.m&&(e.m=t.m),e}return"points"in t?(i=null!=(n=i)?n:t.extent.center,new v.Z({points:f(t.points,a,o,i),spatialReference:s})):null}var x=i(61459),b=i(16851),w=i(16072),S=i(20008),k=i(53503),C=i(74982),R=i(83089),M=i(70040);class O{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move-start"}}class I{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move"}}class Z{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move-stop"}}class E{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-start"}}class z{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate"}}class A{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-stop"}}class L{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale-start"}}class B{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale"}}class Y{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale-stop"}}const N=M.X.transformGraphics,T={centerIndicator:new w.Z({style:"cross",size:N.center.size,color:N.center.color}),fill:{default:new x.Z({color:N.fill.color,outline:{color:N.fill.outlineColor,join:"round",width:1}}),active:new x.Z({color:N.fill.stagedColor,outline:{color:N.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new w.Z({style:"square",size:N.vertex.size,color:N.vertex.color,outline:{color:N.vertex.outlineColor,width:1}}),hover:new w.Z({style:"square",size:N.vertex.hoverSize,color:N.vertex.hoverColor,outline:{color:N.vertex.hoverOutlineColor,width:1}})},rotator:{default:new w.Z({style:"circle",size:N.vertex.size,color:N.vertex.color,outline:{color:N.vertex.outlineColor,width:1}}),hover:new w.Z({style:"circle",size:N.vertex.hoverSize,color:N.vertex.hoverColor,outline:{color:N.vertex.hoverOutlineColor,width:1}})},rotatorLine:new b.Z({color:N.line.color,width:1})};let H=class extends a.Z.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._handles=new o.Z,this._mover=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.centerGraphic=null,this.backgroundGraphic=null,this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.handleGraphics=[],this.layer=null,this.preserveAspectRatio=!1,this.rotateGraphic=null,this.showCenterGraphic=!0,this.view=null,this._getBounds=(()=>{const t=(0,p.Ue)();return(e,i)=>{e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;for(const s of i){if(!s)continue;let i,r,a,o;if("point"===s.type)i=a=s.x,r=o=s.y;else if("multipoint"===s.type){const e=(0,d.nA)(s);[i,r,a,o]=(0,u.C6)(t,[e])}else if("extent"===s.type)[i,r,a,o]=[s.xmin,s.ymin,s.xmax,s.ymax];else{const e=(0,d.nA)(s);[i,r,a,o]=(0,u.C6)(t,e)}e[0]=Math.min(i,e[0]),e[1]=Math.min(r,e[1]),e[2]=Math.max(a,e[2]),e[3]=Math.max(o,e[3])}return e}})()}initialize(){this._highlightHelper=new C.Z({view:this.view}),this._setup(),this._handles.add([(0,n.N1)(this,"view.ready",(()=>{const{layer:t,view:e}=this;(0,R.p)(e,t)})),(0,n.Wy)(this,"preserveAspectRatio",(()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics())})),(0,n.Wy)(this,"view.scale",(()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()})),(0,n.Wy)(this,"graphics",(()=>this.refresh())),(0,n.Wy)(this,"layer",((t,e)=>{e&&this._resetGraphics(e),this.refresh()}))])}destroy(){this._reset(),this._handles=(0,h.SC)(this._handles)}set highlightsEnabled(t){var e;null==(e=this._highlightHelper)||e.removeAll(),this._set("highlightsEnabled",t),this._setUpHighlights()}get state(){const t=!!this.get("view.ready"),e=!(!this.get("graphics.length")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"}set symbols(t){const{centerIndicator:e=T.centerIndicator,fill:i=T.fill,handles:s=T.handles,rotator:r=T.rotator,rotatorLine:a=T.rotatorLine}=t||{};this._set("symbols",{centerIndicator:e,fill:i,handles:s,rotator:r,rotatorLine:a})}isUIGraphic(t){let e=[];return this.handleGraphics.length&&(e=e.concat(this.handleGraphics)),this.backgroundGraphic&&e.push(this.backgroundGraphic),this.centerGraphic&&e.push(this.centerGraphic),this.rotateGraphic&&e.push(this.rotateGraphic),this._rotateLineGraphic&&e.push(this._rotateLineGraphic),e.length&&e.includes(t)}move(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,r=(0,S.e7)(s,t,e,this.view);i.geometry=r}this.refresh(),this._emitMoveStopEvent(t,e,null)}}scale(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,r=(0,S.bA)(s,t,e);i.geometry=r}this.refresh(),this._emitScaleStopEvent(t,e,null)}}rotate(t,e){if(this._mover&&this.graphics.length){if(!e){const t=this.handleGraphics[1].geometry.x,i=this.handleGraphics[3].geometry.y;e=new _.Z(t,i,this.view.spatialReference)}for(const i of this.graphics){const s=G(i.geometry,t,e);i.geometry=s}this.refresh(),this._emitRotateStopEvent(t,null)}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){"active"===this.state&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){this._highlightHelper.removeAll(),this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){const e=t||this.layer;e&&(e.removeMany(this.handleGraphics),e.remove(this.backgroundGraphic),e.remove(this.centerGraphic),e.remove(this.rotateGraphic),e.remove(this._rotateLineGraphic));for(const i of this.handleGraphics)i.destroy();this._set("handleGraphics",[]),this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",null)),this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null)),this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null)),this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this.handleGraphics)),this.enableMovement&&(t=t.concat(this.graphics,this.backgroundGraphic)),this.enableRotation&&t.push(this.rotateGraphic),this.showCenterGraphic&&t.push(this.centerGraphic),this._mover=new k.default({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:t=>this._onGraphicClickCallback(t),onGraphicMoveStart:t=>this._onGraphicMoveStartCallback(t),onGraphicMove:t=>this._onGraphicMoveCallback(t),onGraphicMoveStop:t=>this._onGraphicMoveStopCallback(t),onGraphicPointerOver:t=>this._onGraphicPointerOverCallback(t),onGraphicPointerOut:t=>this._onGraphicPointerOutCallback(t)}})}_getStartInfo(t){const[e,i,s,r]=this._getBoxBounds((0,p.Ue)()),a=Math.abs(s-e),o=Math.abs(r-i),h=(s+e)/2,n=(r+i)/2,{x:c,y:l}=t.geometry;return{width:a,height:o,centerX:h,centerY:n,startX:c,startY:l,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}}_getGraphicInfos(){return this.graphics.map((t=>this._getGraphicInfo(t)))}_getGraphicInfo(t){const e=t.geometry,[i,s,r,a]=this._getBounds((0,p.Ue)(),[e]);return{width:Math.abs(r-i),height:Math.abs(a-s),centerX:(r+i)/2,centerY:(a+s)/2,geometry:e}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:e,_xScale:i,_yScale:s,backgroundGraphic:r,handleGraphics:a,rotateGraphic:o,symbols:h}=this,n=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),r.symbol=h.fill.active,this._startInfo=this._getStartInfo(n),n===o?(this.view.cursor="grabbing",this._emitRotateStartEvent(e,n)):a.includes(n)?(this._activeHandleGraphic=n,this._emitScaleStartEvent(i,s,n)):this._emitMoveStartEvent(t.dx,t.dy,n)}_onGraphicMoveCallback(t){const e=t.graphic;if(this._startInfo)if(this.handleGraphics.includes(e))this._scaleGraphic(e),this._emitScaleEvent(this._xScale,this._yScale,e);else if(e===this.rotateGraphic)this._rotateGraphic(e),this._emitRotateEvent(this._angleOfRotation,e);else{const i=t.dx,s=t.dy;this._totalDx+=i,this._totalDy+=s,this._moveGraphic(e,i,s),this._emitMoveEvent(i,s,e)}}_onGraphicMoveStopCallback(t){const e=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:i,_totalDx:s,_totalDy:r,_xScale:a,_yScale:o,handleGraphics:h,rotateGraphic:n}=this;this.refresh(),e===n?(this.view.cursor="pointer",this._emitRotateStopEvent(i,e)):h.includes(e)?this._emitScaleStopEvent(a,o,e):this._emitMoveStopEvent(s,r,e)}_onGraphicPointerOverCallback(t){const{backgroundGraphic:e,handleGraphics:i,graphics:s,rotateGraphic:r,symbols:a,view:o}=this,h=t.graphic;if(h===r)return r.symbol=a.rotator.hover,void(o.cursor="pointer");if(s.includes(h)||h===e)return void(o.cursor="move");if(!i.includes(h))return void(o.cursor="pointer");t.graphic.symbol=a.handles.hover;const n=o.rotation;let c,l=t.index;switch(l<8&&(n>=0&&n<45?l%=8:l=n>=45&&n<90?(l+1)%8:n>=90&&n<135?(l+2)%8:n>=135&&n<180?(l+3)%8:n>=180&&n<225?(l+4)%8:n>=225&&n<270?(l+5)%8:n>=270&&n<315?(l+6)%8:(l+7)%8),l){case 0:case 4:c="nwse-resize";break;case 1:case 5:c="ns-resize";break;case 2:case 6:c="nesw-resize";break;case 3:case 7:c="ew-resize";break;default:c="pointer"}o.cursor=c}_onGraphicPointerOutCallback(t){const{handleGraphics:e,rotateGraphic:i,symbols:s,view:r}=this;t.graphic===i?i.symbol=s.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),r.cursor="default"}_scaleGraphic(t){const{_startInfo:e,handleGraphics:i,preserveAspectRatio:s,view:r}=this,{centerX:a,centerY:o,startX:h,startY:n}=e,{resolution:c,transform:l}=r.state,p=i.indexOf(t);1!==p&&5!==p||this._updateX(t,a),3!==p&&7!==p||this._updateY(t,o);const{x:u,y:d}=t.geometry,g=l[0]*u+l[2]*d+l[4],y=l[1]*u+l[3]*d+l[5],v=e.graphicInfos.map((t=>t.geometry));if(s){const t=l[0]*a+l[2]*o+l[4],e=l[1]*a+l[3]*o+l[5],i=l[0]*h+l[2]*n+l[4],s=l[1]*h+l[3]*n+l[5];this._xScale=this._yScale=(0,S.Ru)(t,e,i,s,g,y);for(const r of v){const t=v.indexOf(r);this.graphics[t].geometry=(0,S.bA)(r,this._xScale,this._yScale,[a,o])}this._updateBackgroundGraphic()}else{const{width:t,height:i}=e;let s=u-h,l=n-d;if(1===p||5===p?s=0:3!==p&&7!==p||(l=0),0===s&&0===l)return;const g=t+(h>a?s:-1*s),y=i+(n<o?l:-1*l),m=a+s/2,f=o+l/2;this._xScale=g/t||1,this._yScale=y/i||1,1===p||5===p?this._xScale=1:3!==p&&7!==p||(this._yScale=1);const G=(m-a)/c,x=(f-o)/c,b=(0,S.bA)(e.box,this._xScale,this._yScale);this.backgroundGraphic.geometry=(0,S.e7)(b,G,x,r,!0);const{centerX:w,centerY:k}=this._getGraphicInfo(this.backgroundGraphic),C=(w-a)/c,R=-1*(k-o)/c;for(const e of v){const t=v.indexOf(e),i=(0,S.bA)(e,this._xScale,this._yScale,[a,o]);this.graphics[t].geometry=(0,S.e7)(i,C,R,r,!0)}this.centerGraphic.geometry=new _.Z(w,k,r.spatialReference)}}_rotateGraphic(t){const{centerX:e,centerY:i,startX:s,startY:r,box:a,rotate:o}=this._startInfo,h=new _.Z(s,r,this.view.spatialReference),n=new _.Z(e,i,this.view.spatialReference),c=t.geometry;this._angleOfRotation=(0,S.cM)(h,c,n);const l=this._startInfo.graphicInfos.map((t=>t.geometry));for(const p of l){const t=l.indexOf(p),e=G(p,this._angleOfRotation,n);this.graphics[t].geometry=e}this.backgroundGraphic.geometry=G(a,this._angleOfRotation,n),this.rotateGraphic.geometry=G(o,this._angleOfRotation,n)}_moveGraphic(t,e,i){if(this.graphics.includes(t)){const s=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=(0,S.e7)(s,e,i,this.view);for(const r of this.graphics)r!==t&&(r.geometry=(0,S.e7)(r.geometry,e,i,this.view))}else if(t===this.centerGraphic){const t=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=(0,S.e7)(t,e,i,this.view)}if(t===this.backgroundGraphic||t===this.centerGraphic)for(const s of this.graphics)s.geometry=(0,S.e7)(s.geometry,e,i,this.view)}_setUpHighlights(){var t,e;this.highlightsEnabled&&null!=(t=this.graphics)&&t.length&&(null==(e=this._highlightHelper)||e.add(this.graphics))}_setupGraphics(){const{_graphicAttributes:t,symbols:e}=this;this._set("centerGraphic",new r.Z(null,e.centerIndicator,t)),this.showCenterGraphic&&this.layer.add(this.centerGraphic),this._set("backgroundGraphic",new r.Z(null,e.fill.default,t)),this.layer.add(this.backgroundGraphic),this._rotateLineGraphic=new r.Z(null,e.rotatorLine,t),this._set("rotateGraphic",new r.Z(null,e.rotator.default,t)),this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(let i=0;i<8;i++)this.handleGraphics.push(new r.Z(null,e.handles.default,t));this.enableScaling&&this.layer.addMany(this.handleGraphics)}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this.centerGraphic.visible=!1,this.rotateGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this.handleGraphics.forEach((t=>t.visible=!1))}_updateHandleGraphics(){const t=this._getCoordinates(!0);this.handleGraphics.forEach(((e,i)=>{const[s,r]=t[i];this._updateXY(e,s,r)}))}_updateBackgroundGraphic(){const t=this._getCoordinates();this.backgroundGraphic.geometry=new g.Z({rings:t,spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,e,i,s]=this._getBoxBounds((0,p.Ue)()),r=(i+t)/2,a=(s+e)/2;this.centerGraphic.geometry=new _.Z(r,a,this.view.spatialReference)}_updateRotateGraphic(){if(!this.handleGraphics.length)return;const{x:t,y:e}=this.handleGraphics[1].geometry,i=e+this.view.state.resolution*this._rotateGraphicOffset;this.rotateGraphic.geometry=new _.Z(t,i,this.view.spatialReference)}_updateRotateLineGraphic(){if(!this.handleGraphics.length||!this.rotateGraphic||!this.rotateGraphic.geometry)return;const t=this.handleGraphics[1].geometry,e=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=new y.Z({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}_updateXY(t,e,i){t.geometry=new _.Z(e,i,this.view.spatialReference)}_updateX(t,e){const i=t.geometry.y;t.geometry=new _.Z(e,i,this.view.spatialReference)}_updateY(t,e){const i=t.geometry.x;t.geometry=new _.Z(i,e,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some((t=>t&&(0,h.pC)(t.geometry)&&"extent"===t.geometry.type))}_getBoxBounds(t){const e=this.graphics.map((t=>t.geometry));return this._getBounds(t,e)}_getCoordinates(t){const[e,i,s,r]=this._getBoxBounds((0,p.Ue)());if(t){const t=(e+s)/2,a=(r+i)/2;return[[e,r],[t,r],[s,r],[s,a],[s,i],[t,i],[e,i],[e,a]]}return[[e,r],[s,r],[s,i],[e,i]]}_emitMoveStartEvent(t,e,i){const s=new O(this.graphics,i,t,e);this.emit("move-start",s),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(s)}_emitMoveEvent(t,e,i){const s=new I(this.graphics,i,t,e);this.emit("move",s),this.callbacks.onMove&&this.callbacks.onMove(s)}_emitMoveStopEvent(t,e,i){const s=new Z(this.graphics,i,t,e);this.emit("move-stop",s),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(s)}_emitRotateStartEvent(t,e){const i=new E(this.graphics,e,t);this.emit("rotate-start",i),this.callbacks.onRotateStart&&this.callbacks.onRotateStart(i)}_emitRotateEvent(t,e){const i=new z(this.graphics,e,t);this.emit("rotate",i),this.callbacks.onRotate&&this.callbacks.onRotate(i)}_emitRotateStopEvent(t,e){const i=new A(this.graphics,e,t);this.emit("rotate-stop",i),this.callbacks.onRotateStop&&this.callbacks.onRotateStop(i)}_emitScaleStartEvent(t,e,i){const s=new L(this.graphics,i,t,e);this.emit("scale-start",s),this.callbacks.onScaleStart&&this.callbacks.onScaleStart(s)}_emitScaleEvent(t,e,i){const s=new B(this.graphics,i,t,e);this.emit("scale",s),this.callbacks.onScale&&this.callbacks.onScale(s)}_emitScaleStopEvent(t,e,i){const s=new Y(this.graphics,i,t,e);this.emit("scale-stop",s),this.callbacks.onScaleStop&&this.callbacks.onScaleStop(s)}};(0,s._)([(0,c.Cb)()],H.prototype,"_rotateLineGraphic",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],H.prototype,"type",void 0),(0,s._)([(0,c.Cb)()],H.prototype,"callbacks",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],H.prototype,"centerGraphic",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],H.prototype,"backgroundGraphic",void 0),(0,s._)([(0,c.Cb)()],H.prototype,"enableMovement",void 0),(0,s._)([(0,c.Cb)()],H.prototype,"enableRotation",void 0),(0,s._)([(0,c.Cb)()],H.prototype,"enableScaling",void 0),(0,s._)([(0,c.Cb)()],H.prototype,"graphics",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],H.prototype,"handleGraphics",void 0),(0,s._)([(0,c.Cb)({value:!0})],H.prototype,"highlightsEnabled",null),(0,s._)([(0,c.Cb)()],H.prototype,"layer",void 0),(0,s._)([(0,c.Cb)()],H.prototype,"preserveAspectRatio",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],H.prototype,"rotateGraphic",void 0),(0,s._)([(0,c.Cb)()],H.prototype,"showCenterGraphic",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],H.prototype,"state",null),(0,s._)([(0,c.Cb)({value:T})],H.prototype,"symbols",null),(0,s._)([(0,c.Cb)()],H.prototype,"view",void 0),H=(0,s._)([(0,l.j)("esri.views.draw.support.Box")],H);const X=H},20008:(t,e,i)=>{i.d(e,{Ru:()=>l,bA:()=>c,cM:()=>p,e7:()=>n,pB:()=>h});var s=i(16889),r=i(65156),a=i(376),o=i(69662);function h(t,e,i,s){if(null==s||t.hasZ||(s=void 0),"point"===t.type)return t.x+=e,t.y+=i,t.hasZ&&null!=s&&(t.z+=s),t;if("multipoint"===t.type){const r=t.points;for(let t=0;t<r.length;t++)r[t]=u(r[t],e,i,s);return t}if("extent"===t.type)return t.xmin+=e,t.xmax+=e,t.ymin+=i,t.ymax+=i,null!=s&&(t.zmin+=s,t.zmax+=s),t;const r=(0,o.nA)(t),a="polyline"===t.type?t.paths:t.rings;for(let o=0;o<r.length;o++){const t=r[o];for(let r=0;r<t.length;r++)t[r]=u(t[r],e,i,s)}return"paths"in t?t.paths=a:t.rings=a,t}function n(t,e,i,s,r){const a=t.clone(),n=s.resolution;if("point"===a.type){if(r)h(a,e*n,-i*n);else{const t=s.state.transform,r=s.state.inverseTransform,o=t[0]*a.x+t[2]*a.y+t[4],h=t[1]*a.x+t[3]*a.y+t[5];a.x=r[0]*(o+e)+r[2]*(h+i)+r[4],a.y=r[1]*(o+e)+r[3]*(h+i)+r[5]}return a}if("multipoint"===a.type){if(r)h(a,e*n,-i*n);else{const t=a.points,r=s.state.transform,o=s.state.inverseTransform;for(let s=0;s<t.length;s++){const a=t[s],h=r[0]*a[0]+r[2]*a[1]+r[4],n=r[1]*a[0]+r[3]*a[1]+r[5],c=o[0]*(h+e)+o[2]*(n+i)+o[4],l=o[1]*(h+e)+o[3]*(n+i)+o[5];t[s]=d(a,c,l,void 0)}}return a}if("extent"===a.type){if(r)h(a,e*n,-i*n);else{const t=s.state.transform,r=s.state.inverseTransform,o=t[0]*a.xmin+t[2]*a.ymin+t[4],h=t[1]*a.xmin+t[3]*a.ymin+t[5],n=t[0]*a.xmax+t[2]*a.ymax+t[4],c=t[1]*a.xmax+t[3]*a.ymax+t[5];a.xmin=r[0]*(o+e)+r[2]*(h+i)+r[4],a.ymin=r[1]*(o+e)+r[3]*(h+i)+r[5],a.xmax=r[0]*(n+e)+r[2]*(c+i)+r[4],a.ymax=r[1]*(n+e)+r[3]*(c+i)+r[5]}return a}if(r)h(a,e*n,-i*n);else{const t=(0,o.nA)(a),r="polyline"===a.type?a.paths:a.rings,h=s.state.transform,n=s.state.inverseTransform;for(let s=0;s<t.length;s++){const r=t[s];for(let t=0;t<r.length;t++){const s=r[t],a=h[0]*s[0]+h[2]*s[1]+h[4],o=h[1]*s[0]+h[3]*s[1]+h[5],c=n[0]*(a+e)+n[2]*(o+i)+n[4],l=n[1]*(a+e)+n[3]*(o+i)+n[5];r[t]=d(s,c,l,void 0)}}"paths"in a?a.paths=r:a.rings=r}return a}function c(t,e,i,s){if("point"===t.type){const{x:r,y:a}=t,o=s?s[0]:r,h=s?s[1]:a,n=t.clone(),c=(r-o)*e+o,l=(a-h)*i+h;return n.x=c,n.y=l,n}if("multipoint"===t.type){const h=(0,o.nA)(t),n=(0,r.Ue)(),[c,l,p,u]=(0,a.C6)(n,[h]),g=s?s[0]:(c+p)/2,y=s?s[1]:(u+l)/2,_=t.clone(),v=_.points;for(let t=0;t<v.length;t++){const s=v[t],[r,a]=s,o=(r-g)*e+g,h=(a-y)*i+y;v[t]=d(s,o,h,void 0)}return _}if("extent"===t.type){const{xmin:r,xmax:a,ymin:o,ymax:h}=t,n=s?s[0]:(r+a)/2,c=s?s[1]:(h+o)/2,l=t.clone();if(l.xmin=(r-n)*e+n,l.ymax=(h-c)*i+c,l.xmax=(a-n)*e+n,l.ymin=(o-c)*i+c,l.xmin>l.xmax){const t=l.xmin,e=l.xmax;l.xmin=e,l.xmax=t}if(l.ymin>l.ymax){const t=l.ymin,e=l.ymax;l.ymin=e,l.ymax=t}return l}const h=(0,o.nA)(t),n=(0,r.Ue)(),[c,l,p,u]=(0,a.C6)(n,h),g=s?s[0]:(c+p)/2,y=s?s[1]:(u+l)/2,_=t.clone(),v="polyline"===_.type?_.paths:_.rings;for(let r=0;r<h.length;r++){const t=h[r];for(let s=0;s<t.length;s++){const a=t[s],[o,h]=a,n=(o-g)*e+g,c=(h-y)*i+y;v[r][s]=d(a,n,c,void 0)}}return"paths"in _?_.paths=v:_.rings=v,_}function l(t,e,i,s,r,a){const o=Math.sqrt((i-t)*(i-t)+(s-e)*(s-e));return Math.sqrt((r-t)*(r-t)+(a-e)*(a-e))/o}function p(t,e,i){const r=Math.atan2(e.y-i.y,e.x-i.x)-Math.atan2(t.y-i.y,t.x-i.x),a=Math.atan2(Math.sin(r),Math.cos(r));return(0,s.BV)(a)}function u(t,e,i,s){return d(t,t[0]+e,t[1]+i,null!=t[2]&&null!=s?t[2]+s:void 0)}function d(t,e,i,s){const r=[e,i];return t.length>2&&r.push(null!=s?s:t[2]),t.length>3&&r.push(t[3]),r}},70040:(t,e,i)=>{i.d(e,{O:()=>r,X:()=>p});var s=i(51995);const r={main:new s.Z([255,127,0]),selected:new s.Z([255,255,255]),outline:new s.Z([0,0,0,.5]),selectedOutline:new s.Z([255,255,255]),hoverOutline:new s.Z([255,255,255]),secondary:new s.Z([255,255,255]),secondaryOutline:new s.Z([100,100,100]),transparent:new s.Z([0,0,0,0])};function a(t,e){if(e)for(const i in e)t[i]=e[i]}class o{constructor(t){this.size=8,this.hoverSize=10,this.color=r.main,this.hoverColor=r.main,this.outlineColor=r.outline,this.hoverOutlineColor=r.hoverOutline,a(this,t)}}class h{constructor(t){this.color=r.secondary,this.hoverColor=r.main,a(this,t)}}class n{constructor(t){this.color=r.transparent,this.hoverColor=r.transparent,this.outlineColor=r.main,this.hoverOutlineColor=r.main,this.stagedColor=r.transparent,this.stagedOutlineColor=r.secondary,a(this,t)}}class c{constructor(t){this.vertex=new o,this.midpoint=new o({color:r.secondary,outlineColor:r.secondaryOutline,size:6}),this.selected=new o({color:r.selected,hoverColor:r.selected,hoverOutlineColor:r.hoverOutline}),a(this,t)}}class l{constructor(t){this.center=new o({color:r.secondaryOutline}),this.fill=new n,this.line=new h,this.vertex=new o({color:r.selected,outlineColor:r.main,hoverColor:r.selected,hoverOutlineColor:r.secondaryOutline}),a(this,t)}}const p=new class{constructor(t){this.reshapeGraphics=new c,this.transformGraphics=new l,a(this,t)}}}}]);
//# sourceMappingURL=6306.539a73c6.chunk.js.map