"use strict";(self.webpackChunkfield_sustainability_helper=self.webpackChunkfield_sustainability_helper||[]).push([[2226],{42226:function(e,t,i){i.r(t),i.d(t,{default:function(){return K}});var r=i(15861),n=i(15671),a=i(43144),s=i(60136),u=i(29388),o=i(87757),l=i(27366),c=i(8537),h=i(49861),p=(i(63780),i(93169),i(25243),i(69912)),d=i(2608),y=i(95986),v=i(29439),f=i(52639),m=i(76200),g=i(85015),w=i(32718),x=i(92026),b=i(66978),_=i(27135),k=i(53866),Z=i(80394),R=i(64145),C=i(78983),V=i(33624),E=i(75391),P=i(43634),q=w.Z.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D"),D=function(e){(0,s.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments)).attached=!1,e.container=new V.W,e.updateRequested=!1,e._graphicsView=null,e._projectFullExtentPromise=null,e._dataParameters={exportParametersVersion:0,extents:[],tileResolution:0,time:"",isOceanStyle:!1,isOceanographic:!1},e.type="Graphics",e._graphics=new C.J,e._updateGraphics=(0,b.Ds)(function(){var t=(0,r.Z)(o.mark((function t(i,r){var n,a,s,u,l,c,h,p,d,y,f,m,g,w,b,_,Z,C,V,E,P,q;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i.stationary){t.next=2;break}return t.abrupt("return");case 2:return n=i.state,a=new k.Z({xmin:n.extent.xmin,ymin:n.extent.ymin,xmax:n.extent.xmax,ymax:n.extent.ymax,spatialReference:n.spatialReference}),s=(0,v.Z)(i.state.size,2),u=s[0],l=s[1],(c={}).timeExtent=e.timeExtent,c.requestAsImageElement=!1,c.signal=r,null==e._projectFullExtentPromise&&(e._projectFullExtentPromise=e._getProjectedFullExtent(a.spatialReference)),h="vector-field"===e.layer.renderer.type?e.layer.renderer.symbolTileSize:50,t.next=7,e._projectFullExtentPromise;case 7:return p=t.sent,d=(0,R.BH)(a,u,l,h,p),y=d.extent,f=d.resolution,m=d.width,g=d.height,t.next=15,e.layer.fetchImage(y,m,g,c);case 15:if(w=t.sent,"vector-field"!==(b=e.layer.renderer).type){t.next=28;break}return _=w.pixelData.pixelBlock,Z=b.sizeVariables[0],!(0,x.pC)(_)||Z.minDataValue&&Z.maxDataValue||(Z.minDataValue=_.statistics[0].minValue,Z.maxDataValue=_.statistics[0].maxValue),e._pixelData={extent:y,pixelBlock:_},C=y.clone().normalize(),V={exportParametersVersion:e.layer.exportImageServiceParameters.version,extents:C,tileResolution:f,time:JSON.stringify(e.timeExtent||""),isOceanStyle:"flow-to"===b.flowRepresentation,isOceanographic:"ocean-current-kn"===b.style||"ocean-current-m"===b.style},E=e._canReuseVectorFieldData(V)?e._dataParameters.extents:[],t.next=25,b.getGraphicsFromPixelData(w.pixelData,"vector-uv"===e.layer.rasterInfo.dataType,E);case 25:P=t.sent,E.length?(q=e._graphics.items.filter((function(e){return(0,x.pC)(e.geometry)&&E.some((function(t){return t.intersects(e.geometry)}))&&!C.some((function(t){return t.intersects(e.geometry)}))})),e._graphics.removeMany(q),e._graphics.addMany(P)):e._graphics.set("items",P),e._graphicsView.update(i),e._dataParameters=V;case 28:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}()),e}return(0,a.Z)(i,[{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||this.isUpdating()}},{key:"update",value:function(e){this._updateGraphics(e).catch((function(e){(0,b.D_)(e)||q.error(e)}))}},{key:"hitTest",value:function(e){return new f.Z({attributes:{},geometry:e.clone(),layer:this.layer})}},{key:"attach",value:function(){var e=this;this._graphicsView=new P.Z({view:this.view,graphics:this._graphics,requestUpdateCallback:function(){return e.requestUpdate()},container:new E.Z(this.view.featuresTilingScheme)}),this.attached=!0}},{key:"detach",value:function(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null}},{key:"install",value:function(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container)}},{key:"uninstall",value:function(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container)}},{key:"isUpdating",value:function(){return this._graphicsView.updating||this.updateRequested}},{key:"getPixelData",value:function(){return this.updating?null:this._pixelData}},{key:"redraw",value:function(){}},{key:"requestUpdate",value:function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}},{key:"_getProjectedFullExtent",value:function(){var e=(0,r.Z)(o.mark((function e(t){var i;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,Z.tB)(this.layer.fullExtent,t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.prev=8,e.next=11,(0,m.default)(this.layer.url,{query:{option:"footprints",outSR:t.wkid||JSON.stringify(t.toJSON()),f:"json"}});case 11:return i=e.sent.data.featureCollection.layers[0].layerDefinition.extent,e.abrupt("return",i?k.Z.fromJSON(i):null);case 15:return e.prev=15,e.t1=e.catch(8),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,this,[[0,6],[8,15]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_canReuseVectorFieldData",value:function(e){var t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=Math.abs(this._dataParameters.tileResolution-e.tileResolution)/e.tileResolution<.01,n=this._dataParameters.extents.some((function(t){return e.extents.some((function(e){return t.intersects(e)}))})),a=this._dataParameters.isOceanStyle===e.isOceanStyle,s=this._dataParameters.isOceanographic===e.isOceanographic;return t&&i&&r&&n&&a&&s}}]),i}(g.Z);(0,l._)([(0,h.Cb)()],D.prototype,"attached",void 0),(0,l._)([(0,h.Cb)()],D.prototype,"container",void 0),(0,l._)([(0,h.Cb)()],D.prototype,"layer",void 0),(0,l._)([(0,h.Cb)()],D.prototype,"timeExtent",void 0),(0,l._)([(0,h.Cb)()],D.prototype,"view",void 0),(0,l._)([(0,h.Cb)()],D.prototype,"updateRequested",void 0),(0,l._)([(0,h.Cb)()],D.prototype,"updating",null),(0,l._)([(0,_.J)({graphics:"Graphics"})],D.prototype,"type",void 0);var I=D=(0,l._)([(0,p.j)("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],D),S=i(17314),U=i(90110),F=i(10978),B=i(9229),T=w.Z.getLogger("esri.views.2d.layers.imagery.ImageryView2D"),O=function(e){(0,s.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments)).attached=!1,e.container=new V.W,e.updateRequested=!1,e.type="Imagery",e._bitmapView=null,e}return(0,a.Z)(i,[{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||this.isUpdating()}},{key:"update",value:function(e){this.strategy.update(e).catch((function(e){(0,b.D_)(e)||T.error(e)}))}},{key:"detach",value:function(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()}},{key:"hitTest",value:function(e){return new f.Z({attributes:{},geometry:e.clone(),layer:this.layer})}},{key:"attach",value:function(){var e=this,t=this.layer.version>=10,i=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new U.c,this.strategy=new B.Z({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:i,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:function(){return e.requestUpdate()}}),this.attached=!0}},{key:"install",value:function(e){this.container.addChild(this._bitmapView),e.addChild(this.container)}},{key:"uninstall",value:function(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)}},{key:"redraw",value:function(){var e=this;this.strategy.updateExports((function(t){t.source instanceof HTMLImageElement?t.requestRender():e.layer.applyRenderer({pixelBlock:t.source.pixelBlock}).then((function(i){var r=t.source;r.pixelBlock=i.pixelBlock,r.filter=function(t){return e.layer.applyFilter(t)},e.container.requestRender()}))}))}},{key:"requestUpdate",value:function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}},{key:"getPixelData",value:function(){if(this.updating)return null;var e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){var t=this.view.extent,i=e.map((function(e){return e.source})).filter((function(e){return e.extent&&e.extent.intersects(t)})).map((function(e){return{extent:e.extent,pixelBlock:e.originalPixelBlock}})),r=(0,S.Kh)(i,t);return(0,x.pC)(r)?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}},{key:"_fetchImage",value:function(e,t,i,r){var n=this;return(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,this.layer.fetchImage(e,t,i,r).then((function(e){return e.imageElement?e.imageElement:n.layer.applyRenderer(e.pixelData,{signal:r.signal}).then((function(t){var i=new F.Z(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return i.filter=function(e){return n.layer.applyFilter(e)},i}))}))}}]),i}(g.Z);(0,l._)([(0,h.Cb)()],O.prototype,"attached",void 0),(0,l._)([(0,h.Cb)()],O.prototype,"container",void 0),(0,l._)([(0,h.Cb)()],O.prototype,"layer",void 0),(0,l._)([(0,h.Cb)()],O.prototype,"strategy",void 0),(0,l._)([(0,h.Cb)()],O.prototype,"timeExtent",void 0),(0,l._)([(0,h.Cb)()],O.prototype,"view",void 0),(0,l._)([(0,h.Cb)()],O.prototype,"updateRequested",void 0),(0,l._)([(0,h.Cb)()],O.prototype,"updating",null),(0,l._)([(0,_.J)({imagery:"Imagery"})],O.prototype,"type",void 0);var M=O=(0,l._)([(0,p.j)("esri.views.2d.layers.imagery.ImageryView2D")],O),j=i(11752),G=i(61120),H=i(10064),J=i(7882),N=i(45948),z=i(21149),L=i(24405),A=i(67581),W=function(e){(0,s.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments))._exportImageVersion=-1,e}return(0,a.Z)(i,[{key:"initialize",value:function(){var e=this;this.handles.add([(0,c.S1)(this,["layer.blendMode","layer.effects"],(function(t){e.subview&&(e.subview.container.blendMode=t)}),!0),(0,c.S1)(this,"layer.effect",(function(t){e.subview&&(e.subview.container.effect=t)}),!0)])}},{key:"pixelData",get:function(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}},{key:"updating",get:function(){return!!(!this.subview||"updating"in this.subview&&this.subview.updating)}},{key:"hitTest",value:function(){var e=(0,r.Z)(o.mark((function e(t,i){return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.subview?"hitTest"in this.subview?[this.subview.hitTest(t)]:[]:null);case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"update",value:function(e){var t;null==(t=this.subview)||t.update(e)}},{key:"attach",value:function(){var e=this;this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([(0,c.S1)(this,"layer.exportImageServiceParameters.version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),this.watch("timeExtent",(function(){"timeExtent"in e.subview&&(e.subview.timeExtent=e.timeExtent),e.requestUpdate()})),this.layer.on("redraw",(function(){"redraw"in e.subview?e.subview.redraw():e.subview.redrawOrRefetch()})),(0,c.YP)(this.layer,"renderer",(function(){return e._setSubView()}))],"imagerylayerview-update")}},{key:"detach",value:function(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"doRefresh",value:function(){var e=(0,r.Z)(o.mark((function e(){return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return!this.subview||!this.suspended&&this.subview.updating}},{key:"_setSubView",value:function(){var e,t,i,r,n="Imagery";"vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(n="Graphics"),"animated-flow"===(null==(t=this.layer.renderer)?void 0:t.type)&&(n="Flow"),this.subview&&this.subview.type===n||(null==(i=this.subview)||i.uninstall(this.container),null==(r=this.subview)||r.destroy(),this.subview="Imagery"===n?new M({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"Graphics"===n?new I({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new d.Z({layer:this.layer,layerView:this}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode,this.subview.container.effect=this.layer.effect),this.requestUpdate()}}]),i}(function(e){var t=function(e){(0,s.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments)).view=null,e}return(0,a.Z)(i,[{key:"fetchPopupFeatures",value:function(){var e=(0,r.Z)(o.mark((function e(t,i){var r,n,a,s,u,l,c,h,p,d,y;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.layer,t){e.next=3;break}throw new H.Z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});case 3:if(n=r.popupEnabled,a=(0,L.V)(r,i),n&&(0,x.pC)(a)){e.next=6;break}throw new H.Z("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:a});case 6:return e.next=8,a.getRequiredFields();case 8:return s=e.sent,(u=new z.Z).timeExtent=this.timeExtent,u.geometry=t,u.outFields=s,u.outSpatialReference=t.spatialReference,l=this.view.resolution,c="2d"===this.view.type?new J.Z(l,l,this.view.spatialReference):new J.Z(.5*l,.5*l,this.view.spatialReference),h=a.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},p=h.returnTopmostRaster,d=h.showNoDataRecords,y={returnDomainValues:!0,returnTopmostRaster:p,pixelSize:c,showNoDataRecords:d,signal:(0,x.pC)(i)?i.signal:null},e.abrupt("return",r.queryVisibleRasters(u,y).then((function(e){return e})));case 13:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e;return!!(0,j.Z)((0,G.Z)(i.prototype),"canResume",this).call(this)&&(null==(e=this.timeExtent)||!e.isEmpty)}}]),i}(e);return(0,l._)([(0,h.Cb)()],t.prototype,"layer",void 0),(0,l._)([(0,h.Cb)()],t.prototype,"suspended",void 0),(0,l._)([(0,h.Cb)(N.qG)],t.prototype,"timeExtent",void 0),(0,l._)([(0,h.Cb)()],t.prototype,"view",void 0),t=(0,l._)([(0,p.j)("esri.views.layers.ImageryLayerView")],t)}((0,i(13107).y)((0,y.y)(A.Z))));(0,l._)([(0,h.Cb)()],W.prototype,"pixelData",null),(0,l._)([(0,h.Cb)({readOnly:!0})],W.prototype,"updating",null),(0,l._)([(0,h.Cb)()],W.prototype,"subview",void 0);var K=W=(0,l._)([(0,p.j)("esri.views.2d.layers.ImageryLayerView2D")],W)},75391:function(e,t,i){i.d(t,{Z:function(){return c}});var r=i(15671),n=i(43144),a=i(11752),s=i(61120),u=i(60136),o=i(29388),l=i(80613),c=function(e){(0,u.Z)(i,e);var t=(0,o.Z)(i);function i(){return(0,r.Z)(this,i),t.apply(this,arguments)}return(0,n.Z)(i,[{key:"renderChildren",value:function(e){this.attributeView.bindTextures(e.context,!1),this.children.some((function(e){return e.hasData}))&&((0,a.Z)((0,s.Z)(i.prototype),"renderChildren",this).call(this,e),e.drawPhase===l.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===l.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}},{key:"_renderHighlight",value:function(e){var t=e.painter.effects.highlight;t.bind(e),this._renderChildren(e,t.defines),t.draw(e),t.unbind()}}]),i}(i(82022).Z)}}]);
//# sourceMappingURL=2226.942982a2.chunk.js.map