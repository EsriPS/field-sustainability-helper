"use strict";(globalThis.webpackChunkfield_sustainability_helper=globalThis.webpackChunkfield_sustainability_helper||[]).push([[3177],{32802:(e,i,s)=>{s.r(i),s.d(i,{default:()=>o});var t=s(27366),r=s(92026),l=s(8537),a=(s(32718),s(25243),s(63780),s(93169),s(75366),s(69912)),n=s(18661),y=s(99288);let u=class extends y.default{initialize(){this.handles.add([(0,l.S1)(this.view,"viewpoint",(()=>this._update()))])}_injectOverrides(e){let i=super._injectOverrides(e);const s=this.view.scale,t=this.layer.sublayers.filter((e=>function(e,i){return!e.visible||0!==e.minScale&&i>e.minScale||0!==e.maxScale&&i<e.maxScale}(e,s))).map((e=>e.subtypeCode));if(!t.length)return i;i=(0,r.pC)(i)?i:(new n.Z).toJSON();const l=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return i.where=i.where?`(${i.where}) AND (${l})`:l,i}_setLayersForFeature(e){const i=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[i.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},i=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${i})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};u=(0,t._)([(0,a.j)("esri.views.2d.layers.SubtypeGroupLayerView2D")],u);const o=u}}]);
//# sourceMappingURL=3177.a1ab7cec.chunk.js.map