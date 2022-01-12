"use strict";(self.webpackChunkfield_sustainability_helper=self.webpackChunkfield_sustainability_helper||[]).push([[2461],{80391:function(e,t,i){i.d(t,{T:function(){return O}});var r=i(37762),n=i(15861),s=i(15671),a=i(43144),u=i(11752),o=i(61120),h=i(60136),l=i(29388),d=i(87757),c=i(66978),f=i(43e3),_=i(10064),v=i(93169),y=i(32718),p=i(92026),k=(i(44070),i(53634)),E=(i(37825),i(8548),i(3667),i(51378)),x=(i(45412),i(94109)),g=i(84328),R=i(46640),b=i(64668),m=y.Z.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),T=(0,b.g)(b.J,m),S=function(){function e(t,i,r){(0,s.Z)(this,e),this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;var n=t.buffer,a=t.pixelType,u=t.textureOnly,o=(0,R.UK)(a);this.shared=r,this.pixelType=a,this.size=i,this.textureOnly=u,u||(this.data=new o((0,p.Wg)(n))),this._resetRange()}return(0,a.Z)(e,[{key:"destroy",value:function(){var e=this;(0,p.Po)(this._texture,(function(e){return e.dispose()}));var t=function(t){(0,p.Po)(e._fbos[t],(function(e){"0"===t&&e.detachColorTexture(),e.dispose()})),e._fbos[t]=null};for(var i in this._fbos)t(i);this._texture=null}},{key:"_textureDesc",get:function(){return{target:3553,wrapMode:33071,pixelFormat:6408,dataType:this.pixelType,samplingMode:9728,width:this.size,height:this.size}}},{key:"setData",value:function(e,t,i){var r=(0,g.jL)(e),n=(0,p.Wg)(this.data),s=r*this.texelSize+t;!n||s>=n.length||(n[s]=i,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r))}},{key:"getData",value:function(e,t){if((0,p.Wi)(this.data))return null;var i=(0,g.jL)(e)*this.texelSize+t;return!this.data||i>=this.data.length?null:this.data[i]}},{key:"getTexture",value:function(e){var t=this;return(0,p.Pt)(this._texture,(function(){return t._initTexture(e)}))}},{key:"getFBO",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if((0,p.Wi)(this._fbos[t])){var i={colorTarget:0,depthStencilTarget:0},r=0===t?this.getTexture(e):this._textureDesc;this._fbos[t]=new k.Z(e,i,r)}return this._fbos[t]}},{key:"locked",get:function(){return!(5121!==this.pixelType||!this.shared||this.textureOnly||!(0,v.Z)("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}},{key:"hasDirty",get:function(){var e=this.dirtyStart;return this.dirtyEnd>=e}},{key:"updateTexture",value:function(e,t){if(!this.locked){try{var i=this.dirtyStart,r=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();var n=(0,p.Wg)(this.data).buffer,s=this.getTexture(e),a=(i-i%this.size)/this.size,u=(r-r%this.size)/this.size,o=a,h=this.size,l=u,d=a*this.size*4,c=4*(h+l*this.size)-d,f=(0,R.UK)(this.pixelType),v=new f(n,d*f.BYTES_PER_ELEMENT,c),y=this.size,k=l-o+1;if(k>this.size)return void m.error(new _.Z("mapview-webgl","Out-of-bounds index when updating AttributeData"));s.updateData(0,0,o,y,k,v)}catch(E){}t()}}},{key:"update",value:function(e){var t=e.data,i=e.start,r=e.end;if((0,p.pC)(t))for(var n=this.data,s=i*this.texelSize,a=0;a<t.length;a++){var u=1<<a%this.texelSize;e.layout&u&&(n[s+a]=t[a])}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,r)}},{key:"resize",value:function(e,t){var i=this.size;if(this.size=t,this.textureOnly)i!==this.size&&(this._lastTexture=this._texture,this._texture=null);else{var r=(0,R.UK)(this.pixelType);this.destroy(),this.data=new r((0,p.Wg)(e.buffer))}}},{key:"_resetRange",value:function(){this.dirtyStart=2147483647,this.dirtyEnd=0}},{key:"_initTexture",value:function(e){var t=new E.Z(e,this._textureDesc,(0,p.Pt)(this.data,void 0));if((0,p.pC)(this._lastTexture)&&this._fbos[0]){var i=this._lastTexture.descriptor.width,r=this._lastTexture.descriptor.height,n=this._lastTexture.descriptor.dataType,s=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(e),u=(0,R.Yw)(n),o=new((0,R.UK)(n))(new ArrayBuffer(i*r*u*this.texelSize)),h=e.getBoundFramebufferObject(),l=e.getViewport(),d=l.x,c=l.y,f=l.width,_=l.height;e.bindFramebuffer(a),a.readPixels(0,0,i,r,s,n,o),t.updateData(0,0,0,2*i,r/2,o),e.setViewport(d,c,f,_),e.bindFramebuffer(h)}return this.destroy(),this._texture=t,this._texture}}]),e}(),w=function(){function e(t){(0,s.Z)(this,e),this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}return(0,a.Z)(e,[{key:"initialize",value:function(e){var t=e.blocks,i=e.shared,r=e.size;if(this.shared=i,this.size=r,T("Initializing AttributeStoreView",e),(0,p.Wi)(this._data))this._data=(0,p.Fd)(t,(function(e){return new S(e,r,i)}));else for(var n=0;n<this._data.length;n++){var s=this._data[n],a=t[n];(0,p.pC)(a)&&((0,p.Wi)(s)?this._data[n]=new S(a,r,i):s.resize(a,r))}this._initialized=!0}},{key:"destroy",value:function(){(0,p.Po)(this._data,(function(e){return(0,p.Fd)(e,(function(e){return e.destroy()}))})),(0,p.Po)(this._defaultTexture,(function(e){return e.dispose()}))}},{key:"isEmpty",value:function(){var e=this._data;return(0,p.Wi)(e)}},{key:"isUpdating",value:function(){var e=(0,p.pC)(this._pendingAttributeUpdate),t=e;return(0,v.Z)("esri-2d-log-updating")&&console.log("Updating AttributeStoreView ".concat(t,"\n  -> hasPendingUpdate ").concat(e)),t}},{key:"getBlock",value:function(e){return(0,p.Wi)(this._data)?null:this._data[e]}},{key:"setLabelMinZoom",value:function(e,t){this.setData(e,0,1,t)}},{key:"getLabelMinZoom",value:function(e){return this.getData(e,0,1,255)}},{key:"getFilterFlags",value:function(e){return this.getData(e,0,0,0)}},{key:"getVVSize",value:function(e){return this.getData(e,x.aK,0,0)}},{key:"getData",value:function(e,t,i,r){if(!this._data)return 0;var n=(0,p.Wg)(this._data)[t];if((0,p.Wi)(n))return 0;var s=n.getData(e,i);return(0,p.pC)(s)?s:r}},{key:"setData",value:function(e,t,i,r){var n=(0,p.Wg)(this._data)[t];(0,p.Wg)(n).setData(e,i,r)}},{key:"lockTextureUpload",value:function(){this._locked=!0}},{key:"unlockTextureUpload",value:function(){this._locked=!1}},{key:"forceTextureUpload",value:function(){this._forceNextUpload=!0}},{key:"requestUpdate",value:function(){var e=(0,n.Z)(d.mark((function e(t){var i;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._pendingAttributeUpdate){e.next=2;break}return e.abrupt("return",void m.error(new _.Z("mapview-webgl","Tried to update attribute data with a pending update")));case 2:return i=(0,c.hh)(),e.abrupt("return",(T("AttributeStoreView Update Requested",t),this._pendingAttributeUpdate={data:t,resolver:i},i.promise));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){if(this._initialized&&(0,p.pC)(this._pendingAttributeUpdate)){for(var e=this._pendingAttributeUpdate,t=e.data,i=e.resolver,r=(0,p.Wg)(this._data),n=function(e){var i=t.blocks[e],n=r[e];(0,p.Po)(n,(function(t){return(0,p.Po)(i,(function(i){T("Updating block ".concat(e),i),t.update(i)}))}))},s=0;s<t.blocks.length;s++)n(s);this._pendingAttributeUpdate=null,i(),this._onUpdate()}}},{key:"bindTextures",value:function(e){var t=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.update();var r=this._getDefaultTexture(e);if(!this._initialized)return e.bindTexture(r,x.iJ),void(i&&(e.bindTexture(r,x.nM),e.bindTexture(r,x.Ij),e.bindTexture(r,x.f2)));var n=(0,p.Wg)(this._data);this._locked&&!this._forceNextUpload||((0,p.JR)(n,(function(i){return i.updateTexture(e,(function(){return t._onUpdate()}))})),this._forceNextUpload=!1),e.bindTexture((0,p.R2)(n[0],r,(function(t){return t.getTexture(e)})),x.iJ),i&&(e.bindTexture((0,p.R2)(n[1],r,(function(t){return t.getTexture(e)})),x.nM),e.bindTexture((0,p.R2)(n[2],r,(function(t){return t.getTexture(e)})),x.Ij),e.bindTexture((0,p.R2)(n[3],r,(function(t){return t.getTexture(e)})),x.f2))}},{key:"_getDefaultTexture",value:function(e){if((0,p.Wi)(this._defaultTexture)){this._defaultTexture=new E.Z(e,{wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array(4))}return this._defaultTexture}}]),e}(),C=i(55067),z=i(51995),Z=i(17842),D=i(68860),M=i(49229),P=i(90316);function F(e,t){var i=t.length;if(e<t[0].value||1===i)return t[0].size;for(var r=1;r<i;r++)if(e<t[r].value){var n=(e-t[r-1].value)/(t[r].value-t[r-1].value);return t[r-1].size+n*(t[r].size-t[r-1].size)}return t[i-1].size}function I(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if((0,p.Wi)(t))return e[i+0]=0,e[i+1]=0,e[i+2]=0,void(e[i+3]=0);var r=t.r,n=t.g,s=t.b,a=t.a;e[i+0]=r*a/255,e[i+1]=n*a/255,e[i+2]=s*a/255,e[i+3]=a}var V=function(){function e(){(0,s.Z)(this,e),this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1}}return(0,a.Z)(e,[{key:"getSizeVVFieldStops",value:function(e){var t=this._vvSizeFieldStops;switch(t.type){case"static":return t;case"level-dependent":return(0,p.Pt)(t.levels[e],(function(){var i=1/0,r=0;for(var n in t.levels){var s=parseFloat(n),a=Math.abs(e-s);a<i&&(i=a,r=s)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};var u=Math.pow(2,(e-r)/2),o=(0,p.Wg)(t.levels[r]),h=new Float32Array(o.values);return h[2]*=u,h[3]*=u,{sizes:(0,p.Wg)(o.sizes),values:h}}))}}},{key:"vvMaterialParameters",get:function(){return this._vvMaterialParameters}},{key:"update",value:function(e){(0,p.pC)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}},{key:"setInfo",value:function(e,t,i){this._updateEffects(i),this._vvInfo=t,"dot-density"===e.type&&this._updateDotDensityInfo(e)}},{key:"getVariation",value:function(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:(0,P.Z)().supportsTextureFloat}}},{key:"getVariationHash",value:function(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}},{key:"_updateEffects",value:function(e){(0,p.pC)(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}},{key:"_updateVisualVariables",value:function(e,t){var i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,e){var r=e.size;if(r){if(i.vvSizeEnabled=!0,r.minMaxValue){var n,s,a=r.minMaxValue;if((0,R.$K)(a.minSize)&&(0,R.$K)(a.maxSize))if((0,R.hj)(a.minSize)&&(0,R.hj)(a.maxSize))n=(0,Z.F2)(a.minSize),s=(0,Z.F2)(a.maxSize);else{var u=t.scale;n=(0,Z.F2)(F(u,a.minSize.stops)),s=(0,Z.F2)(F(u,a.maxSize.stops))}this.vvSizeMinMaxValue.set([a.minDataValue,a.maxDataValue,n,s])}if(r.scaleStops&&(this.vvSizeScaleStopsValue=(0,Z.F2)(F(t.scale,r.scaleStops.stops))),r.unitValue){var o=(0,D.c9)(t.spatialReference)/M.a[r.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=o/t.resolution}r.fieldStops&&(this._vvSizeFieldStops=r.fieldStops)}var h=e.color;h&&(i.vvColorEnabled=!0,this.vvColorValues.set(h.values),this.vvColors.set(h.colors));var l=e.opacity;l&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(l.values),this.vvOpacities.set(l.opacities));var d=e.rotation;d&&(i.vvRotationEnabled=!0,i.vvRotationType=d.type)}}},{key:"_updateDotDensityInfo",value:function(e){var t=e.attributes;this.ddDotValue=e.dotValue,this.ddDotScale=e.referenceScale,this.ddDotSize=e.dotSize,this.ddDotBlending=e.dotBlendingEnabled,this.ddSeed=e.seed;for(var i=0;i<x.$0;i++){var r=i>=t.length?new z.Z([0,0,0,0]):t[i].color;I(this.ddColors,r,4*i)}for(var n=0;n<8;n++)this.ddActiveDots[n]=n<e.attributes.length?1:0;I(this.ddBackgroundColor,e.backgroundColor)}}]),e}(),O=function(e){(0,h.Z)(i,e);var t=(0,l.Z)(i);function i(e){var r;return(0,s.Z)(this,i),(r=t.call(this,e))._rendererInfo=new V,r._materialItemsRequestQueue=new f.Z,r.attributeView=new w((function(){return r.onAttributeStoreUpdate()})),r}return(0,a.Z)(i,[{key:"destroy",value:function(){this.removeAllChildren(),this.children.forEach((function(e){return e.destroy()})),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}},{key:"setRendererInfo",value:function(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}},{key:"getMaterialItems",value:function(){var e=(0,n.Z)(d.mark((function e(t,i){var r;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&0!==t.length){e.next=2;break}return e.abrupt("return",null);case 2:return r=(0,c.hh)(),e.abrupt("return",(this._materialItemsRequestQueue.push({items:t,abortOptions:i,resolver:r}),this.requestRender(),r.promise));case 4:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"doRender",value:function(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0)for(var t=this._materialItemsRequestQueue.pop();t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop();(0,u.Z)((0,o.Z)(i.prototype),"doRender",this).call(this,e)}},{key:"renderChildren",value:function(e){var t,n=(0,r.Z)(this.children);try{for(n.s();!(t=n.n()).done;){t.value.commit(e)}}catch(s){n.e(s)}finally{n.f()}this._rendererInfo.update(e.state),(0,u.Z)((0,o.Z)(i.prototype),"renderChildren",this).call(this,e)}},{key:"createRenderParams",value:function(e){var t=(0,u.Z)((0,o.Z)(i.prototype),"createRenderParams",this).call(this,e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}},{key:"onAttributeStoreUpdate",value:function(){}},{key:"_processMaterialItemRequest",value:function(e,t){var i=this,r=t.items,n=t.abortOptions,s=t.resolver,a=e.painter,u=e.pixelRatio,o=r.map((function(e){return a.textureManager.rasterizeItem(e.symbol,u,e.glyphIds,n)}));Promise.all(o).then((function(e){if(i.stage){var t=e.map((function(e,t){return{id:r[t].id,mosaicItem:e}}));s.resolve(t)}else s.reject()}),s.reject)}}]),i}(C.Z)},55067:function(e,t,i){i.d(t,{Z:function(){return y}});var r=i(37762),n=i(15671),s=i(43144),a=i(11752),u=i(61120),o=i(60136),h=i(29388),l=i(93169),d=i(80613),c=i(64510),f=i(60418),_=i(40655),v=function(e,t){return e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col},y=function(e){(0,o.Z)(i,e);var t=(0,h.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this))._tileInfoView=e,r}return(0,s.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return!1}},{key:"renderChildren",value:function(e){this.sortChildren(v),this.setStencilReference(),(0,a.Z)((0,u.Z)(i.prototype),"renderChildren",this).call(this,e)}},{key:"createRenderParams",value:function(e){var t=e.state,r=(0,a.Z)((0,u.Z)(i.prototype),"createRenderParams",this).call(this,e);return r.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,r.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),r}},{key:"prepareRenderPasses",value:function(e){var t=this,r=(0,a.Z)((0,u.Z)(i.prototype),"prepareRenderPasses",this).call(this,e);return r.push(e.registerRenderPass({name:"stencil",brushes:[_.Z],drawPhase:d.jx.DEBUG|d.jx.MAP|d.jx.HIGHLIGHT,target:function(){return t.getStencilTarget()}})),(0,l.Z)("esri-tiles-debug")&&r.push(e.registerRenderPass({name:"tileInfo",brushes:[f.Z],drawPhase:d.jx.DEBUG,target:function(){return t.children}})),r}},{key:"getStencilTarget",value:function(){return this.children}},{key:"updateTransforms",value:function(e){var t,i=(0,r.Z)(this.children);try{for(i.s();!(t=i.n()).done;){var n=t.value,s=this._tileInfoView.getTileResolution(n.key);n.setTransform(e,s)}}catch(a){i.e(a)}finally{i.f()}}},{key:"setStencilReference",value:function(){var e,t=1,i=(0,r.Z)(this.children);try{for(i.s();!(e=i.n()).done;){e.value.stencilRef=t++}}catch(n){i.e(n)}finally{i.f()}}}]),i}(c.Z)},72900:function(e,t,i){i.d(t,{I:function(){return d}});var r=i(29439),n=i(15671),s=i(43144),a=i(60136),u=i(29388),o=i(22753),h=i(87422),l=i(73828),d=function(e){(0,a.Z)(i,e);var t=(0,u.Z)(i);function i(e,r,s,a,u){var o,h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:a,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:u;return(0,n.Z)(this,i),(o=t.call(this)).triangleCountReportedInDebug=0,o.triangleCount=0,o.texture=null,o.key=new l.Z(e),o.x=r,o.y=s,o.width=a,o.height=u,o.rangeX=h,o.rangeY=d,o}return(0,s.Z)(i,[{key:"destroy",value:function(){this.texture&&(this.texture.dispose(),this.texture=null)}},{key:"setTransform",value:function(e,t){var i=t/(e.resolution*e.pixelRatio),n=this.transforms.tileMat3,s=e.toScreenNoRotation([0,0],[this.x,this.y]),a=(0,r.Z)(s,2),u=a[0],h=a[1],l=this.width/this.rangeX*i,d=this.height/this.rangeY*i;(0,o.s)(n,l,0,0,0,d,0,u,h,1),(0,o.m)(this.transforms.dvs,e.displayViewMat3,n)}}]),i}(h.s)},98774:function(e,t,i){i.d(t,{o:function(){return k}});var r=i(29439),n=i(11752),s=i(61120),a=i(60136),u=i(29388),o=i(15671),h=i(43144),l=i(22018),d=i(22753),c=i(23588),f=i(88396),_=i(15245),v=i(94109),y=i(72900),p=function(){function e(){(0,o.Z)(this,e)}return(0,h.Z)(e,[{key:"acquire",value:function(e){return{refCount:1,version:-1,labelMat2d:(0,c.c)(),tileMat3:(0,c.c)(),dvs:(0,c.c)()}}},{key:"release",value:function(e){}}]),e}(),k=function(e){(0,a.Z)(i,e);var t=(0,u.Z)(i);function i(e,r,n){return(0,o.Z)(this,i),t.call(this,e,r,n,v.I_,v.I_)}return(0,h.Z)(i,[{key:"destroy",value:function(){(0,n.Z)((0,s.Z)(i.prototype),"destroy",this).call(this),this._transforms&&i.TransformCache.release(this.key.hash)}},{key:"setTransform",value:function(e,t){var i=t/(e.resolution*e.pixelRatio),n=this.transforms.tileMat3,s=e.toScreenNoRotation([0,0],[this.x,this.y]),a=(0,r.Z)(s,2),u=a[0],o=a[1],h=this.width/this.rangeX*i,c=this.height/this.rangeY*i;(0,d.s)(n,h,0,0,0,c,0,u,o,1),(0,d.m)(this.transforms.dvs,e.displayViewMat3,n);var v=this.transforms.labelMat2d,y=e.getScreenTransform(v,t),p=(0,_.c)();(0,f.t)(p,[this.x,this.y],y),(0,l.i)(v),(0,l.t)(v,v,p),(0,l.m)(v,e.viewMat2d,v)}},{key:"_createTransforms",value:function(){return i.TransformCache.acquire(this.key.hash)}}]),i}(y.I);k.TransformCache=new p},50477:function(e,t,i){i.d(t,{$:function(){return o}});var r=i(15671),n=i(43144),s=i(92026),a=i(94109),u=2147483647,o=function(){function e(t){(0,r.Z)(this,e),this._head=t,this._cursor=t}return(0,n.Z)(e,[{key:"size",value:function(){for(var e=this._cursor,t=0;e;)t+=e.size(),e=e._link;return t}},{key:"id",get:function(){return this._cursor.id},set:function(e){this._cursor.id=e}},{key:"materialKey",get:function(){return this._cursor.materialKey},set:function(e){this._cursor.materialKey=e}},{key:"insertAfter",get:function(){return this._cursor.insertAfter}},{key:"indexFrom",get:function(){return this._cursor.indexFrom},set:function(e){this._cursor.indexFrom=e}},{key:"indexCount",get:function(){return this._cursor.indexCount},set:function(e){this._cursor.indexCount=e}},{key:"vertexFrom",get:function(){return this._cursor.vertexFrom},set:function(e){this._cursor.vertexFrom=e}},{key:"vertexCount",get:function(){return this._cursor.vertexCount},set:function(e){this._cursor.vertexCount=e}},{key:"sortKey",get:function(){return this._cursor.sortKey},set:function(e){this._cursor.sortKey=e}},{key:"index",get:function(){return this._cursor._indexStart+this._cursor._index}},{key:"seekIndex",value:function(e){var t=e;for(this._cursor=this._head;this._cursor;){var i=this._cursor.size();if(t<i)return this._cursor._index=t,!0;t-=i,this._cursor=this._cursor._link}return!1}},{key:"forEach",value:function(e){for(var t=this.getCursor();t.next();)e(t)}},{key:"link",value:function(e){if(this._head){for(var t=this._head;t._link;)t=t._link;t._link=e._head,t._link._indexStart=t._indexStart+t.size()}else this._head=e._head}},{key:"getCursor",value:function(){return this.copy()}},{key:"lookup",value:function(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}},{key:"copy",value:function(){var t,i=new e(null==(t=this._head)?void 0:t.copy());if(!i._head)return i;for(var r=i._head,n=i._head._link;n;)r._link=n.copy(),n=(r=n)._link;return i}},{key:"next",value:function(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}},{key:"peekId",value:function(){var e;return null!=(e=this._cursor.peekId())?e:this._cursor._link.peekId()}},{key:"delete",value:function(e){for(var t=this._head,i=null;t;){if(t.delete(e))return t.isEmpty()&&((0,s.pC)(i)&&(i._link=t._link),t===this._head&&(this._head=t._link),t===this._cursor&&(this._cursor=t._link)),!0;i=t,t=t._link}return!1}}],[{key:"from",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.byteLength/h.BYTES_PER_RECORD-i,n=new h(new Int32Array(t,i*h.BYTES_PER_RECORD,r*h.ELEMENTS_PER_RECORD));return new e(n)}}]),e}();o.ELEMENTS_PER_RECORD=a.XJ,o.BYTES_PER_RECORD=o.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;var h=function(){function e(t){(0,r.Z)(this,e),this._link=null,this._index=-1,this._indexStart=0,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=t}return(0,n.Z)(e,[{key:"delete",value:function(e){var t=this._index,i=this.lookup(e);if(i)for(this.id=u,++this._deletedCount;this.next()&&this.id===e;)this.id=u,++this._deletedCount;return this._index=t,i}},{key:"isEmpty",value:function(){return this._deletedCount===this.size()}},{key:"link",value:function(e){this._link?this._link.link(e):this._link=e}},{key:"lookup",value:function(e){if((0,s.Wi)(this._offsets.instance)){this._offsets.instance=new Map;var t=this.copy();t._index=-1;for(var i=0;t.next();)t.id!==i&&(this._offsets.instance.set(t.id,t._index),i=t.id)}if(!this._offsets.instance.has(e))return!1;var r=this._index;return this._index=this._offsets.instance.get(e),this.id!==u||(this._index=r,!1)}},{key:"id",get:function(){return this._packedRecords[this._index*e.ELEMENTS_PER_RECORD]},set:function(t){this._packedRecords[this._index*e.ELEMENTS_PER_RECORD]=t}},{key:"materialKey",get:function(){return this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+1]},set:function(t){this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+1]=t}},{key:"insertAfter",get:function(){return this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+2]}},{key:"indexFrom",get:function(){return this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+3]},set:function(t){this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+3]=t}},{key:"indexCount",get:function(){return this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+4]},set:function(t){this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+4]=t}},{key:"vertexFrom",get:function(){return this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+5]},set:function(t){this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+5]=t}},{key:"vertexCount",get:function(){return this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+6]},set:function(t){this._packedRecords[this._index*e.ELEMENTS_PER_RECORD+6]=t}},{key:"sortKey",get:function(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*e.ELEMENTS_PER_RECORD+7]},set:function(t){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*e.ELEMENTS_PER_RECORD+7]=t}},{key:"index",get:function(){return this._index}},{key:"size",value:function(){return this._packedRecords.length/e.ELEMENTS_PER_RECORD}},{key:"next",value:function(){for(;++this._index<this.size()&&this.id===u;);return this._index<this.size()}},{key:"peekId",value:function(){var t=(this._index+1)*e.ELEMENTS_PER_RECORD;return t>=this._packedRecords.length?0:this._packedRecords[t]}},{key:"getCursor",value:function(){return this.copy()}},{key:"copy",value:function(){var t=new e(this._packedRecords);return t._indexStart=this._indexStart,t._link=this._link,t._index=this._index,t._offsets=this._offsets,t._deletedCount=this._deletedCount,t}}],[{key:"from",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.byteLength/this.BYTES_PER_RECORD-i;return new e(new Int32Array(t,i*this.BYTES_PER_RECORD,r*this.ELEMENTS_PER_RECORD))}}]),e}();h.ELEMENTS_PER_RECORD=a.XJ,h.BYTES_PER_RECORD=h.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT}}]);
//# sourceMappingURL=2461.14b6fb2a.chunk.js.map