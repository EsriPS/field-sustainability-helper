"use strict";(globalThis.webpackChunkfield_sustainability_helper=globalThis.webpackChunkfield_sustainability_helper||[]).push([[4265],{65630:(e,t,o)=>{o.d(t,{D:()=>L,b:()=>_});var r=o(50951),a=o(22357),i=o(83734),n=o(71011),s=o(33280),l=o(94951),c=o(81221),d=o(73782),u=o(52276),m=o(53230),p=o(60113),v=o(48655),h=o(28719),f=o(49223),g=o(6781),x=o(21002),b=o(38171),C=o(30694),y=o(34975),T=o(15226),M=o(96658),w=o(2116),O=o(41481),A=o(23235),S=o(18607),P=o(10763),H=o(14282),E=o(71033),N=o(98634),R=o(64201),D=o(4760);function _(e){const t=new R.kG,o=t.vertex.code,_=t.fragment.code;t.include(H.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const L=e.hasModelTransformation;return L&&t.vertex.uniforms.add("model","mat4"),t.include(u.f),t.varyings.add("vpos","vec3"),t.include(S.kl,e),t.include(c.fQ,e),t.include(f.LC,e),e.output!==n.H.Color&&e.output!==n.H.Alpha||(t.include(d.O,e),t.include(l.w,{linearDepth:!1,hasModelTransformation:L}),e.normalType===d.h.Attribute&&e.offsetBackfaces&&t.include(i.w),t.include(b.Q,e),t.include(h.B,e),e.instancedColor&&t.attributes.add(D.T.INSTANCECOLOR,"vec4"),t.varyings.add("localvpos","vec3"),t.include(p.D,e),t.include(a.q,e),t.include(m.R,e),t.include(v.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),o.add(N.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${N.H.float(P.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===d.h.Attribute?N.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${L?"model,":""} vpos);
          ${e.normalType===d.h.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===n.H.Alpha&&(t.include(s.p2,e),t.include(P.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(x.S),t.include(T.l,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(E.y),_.add(N.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?N.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:N.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?N.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:N.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===n.H.Color&&(t.include(s.p2,e),t.include(y.X,e),t.include(C.K,e),t.include(P.sj,e),e.receiveShadows&&t.include(A.hX,e),e.multipassTerrainEnabled&&(t.fragment.include(x.S),t.include(T.l,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(O.jV,e),t.include(w.T,e),t.fragment.include(E.y),t.include(M.k,e),_.add(N.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?N.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:N.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===d.h.ScreenDerivative?N.H`
        vec3 normal = screenDerivativeNormal(localvpos);`:N.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===O.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===r.JY.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?N.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:N.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?N.H`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${e.pbrMode===O.f7.Normal||e.pbrMode===O.f7.Schematic?e.viewingMode===r.JY.Global?N.H`vec3 normalGround = normalize(vpos + localOrigin);`:N.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:N.H``}
        ${e.pbrMode===O.f7.Normal||e.pbrMode===O.f7.Schematic?N.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(g.s,e),t}const L=Object.freeze({__proto__:null,build:_})},40563:(e,t,o)=>{o.d(t,{R:()=>N,b:()=>E});var r=o(50951),a=o(22357),i=o(83734),n=o(71011),s=o(33280),l=o(94951),c=o(81221),d=o(73782),u=o(52276),m=o(53230),p=o(60113),v=o(48655),h=o(49223),f=o(6781),g=o(21002),x=o(30694),b=o(34975),C=o(15226),y=o(2116),T=o(41481),M=o(23235),w=o(18607),O=o(10763),A=o(71033),S=o(98634),P=o(64201),H=o(4760);function E(e){const t=new P.kG,o=t.vertex.code,E=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),t.include(u.f),t.varyings.add("vpos","vec3"),t.include(w.kl,e),t.include(c.fQ,e),t.include(h.LC,e),e.output!==n.H.Color&&e.output!==n.H.Alpha||(t.include(d.O,e),t.include(l.w,{linearDepth:!1}),e.offsetBackfaces&&t.include(i.w),e.instancedColor&&t.attributes.add(H.T.INSTANCECOLOR,"vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(p.D,e),t.include(a.q,e),t.include(m.R,e),t.include(v.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),o.add(S.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${S.H.float(O.bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassTerrainEnabled?S.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===n.H.Alpha&&(t.include(s.p2,e),t.include(O.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(g.S),t.include(C.l,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(A.y),E.add(S.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?S.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?S.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:S.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?S.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:S.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===n.H.Color&&(t.include(s.p2,e),t.include(b.X,e),t.include(x.K,e),t.include(O.sj,e),e.receiveShadows&&t.include(M.hX,e),e.multipassTerrainEnabled&&(t.fragment.include(g.S),t.include(C.l,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(T.jV,e),t.include(y.T,e),t.fragment.include(A.y),E.add(S.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?S.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?S.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:S.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===T.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===r.JY.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?S.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:S.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${S.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===T.f7.Normal||e.pbrMode===T.f7.Schematic?e.viewingMode===r.JY.Global?S.H`vec3 normalGround = normalize(vpos + localOrigin);`:S.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:S.H``}
        ${e.pbrMode===T.f7.Normal||e.pbrMode===T.f7.Schematic?S.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(f.s,e),t}const N=Object.freeze({__proto__:null,build:E})},32035:(e,t,o)=>{o.d(t,{a:()=>i,b:()=>l,n:()=>s,s:()=>n,t:()=>a});var r=o(77873);function a(e,t,o){if(e.count!==t.count)return void r.c.error("source and destination buffers need to have the same number of elements");const a=e.count,i=o[0],n=o[1],s=o[2],l=o[4],c=o[5],d=o[6],u=o[8],m=o[9],p=o[10],v=o[12],h=o[13],f=o[14],g=e.typedBuffer,x=e.typedBufferStride,b=t.typedBuffer,C=t.typedBufferStride;for(let r=0;r<a;r++){const e=r*x,t=r*C,o=b[t],a=b[t+1],y=b[t+2];g[e]=i*o+l*a+u*y+v,g[e+1]=n*o+c*a+m*y+h,g[e+2]=s*o+d*a+p*y+f}}function i(e,t,o){if(e.count!==t.count)return void r.c.error("source and destination buffers need to have the same number of elements");const a=e.count,i=o[0],n=o[1],s=o[2],l=o[3],c=o[4],d=o[5],u=o[6],m=o[7],p=o[8],v=e.typedBuffer,h=e.typedBufferStride,f=t.typedBuffer,g=t.typedBufferStride;for(let r=0;r<a;r++){const e=r*h,t=r*g,o=f[t],a=f[t+1],x=f[t+2];v[e]=i*o+l*a+u*x,v[e+1]=n*o+c*a+m*x,v[e+2]=s*o+d*a+p*x}}function n(e,t,o){const r=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<r;l++){const e=l*i,t=l*s;a[e]=o*n[t],a[e+1]=o*n[t+1],a[e+2]=o*n[t+2]}}function s(e,t){const o=Math.min(e.count,t.count),r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride;for(let s=0;s<o;s++){const e=s*a,t=s*n,o=i[t],l=i[t+1],c=i[t+2],d=Math.sqrt(o*o+l*l+c*c);if(d>0){const t=1/d;r[e]=t*o,r[e+1]=t*l,r[e+2]=t*c}}}function l(e,t,o){const r=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<r;l++){const e=l*i,t=l*s;a[e]=n[t]>>o,a[e+1]=n[t+1]>>o,a[e+2]=n[t+2]>>o}}Object.freeze({__proto__:null,transformMat4:a,transformMat3:i,scale:n,normalize:s,shiftRight:l})},92770:(e,t,o)=>{function r(e,t,o){const r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let l=(o&&o.dstIndex?o.dstIndex:0)*a,c=(o&&o.srcIndex?o.srcIndex:0)*n;for(let d=0;d<s;++d)r[l]=i[c],r[l+1]=i[c+1],r[l+2]=i[c+2],l+=a,c+=n}function a(e,t,o,r,a){var i,n;const s=e.typedBuffer,l=e.typedBufferStride,c=null!=(i=null==a?void 0:a.count)?i:e.count;let d=(null!=(n=null==a?void 0:a.dstIndex)?n:0)*l;for(let u=0;u<c;++u)s[d]=t,s[d+1]=o,s[d+2]=r,d+=l}o.d(t,{c:()=>r,f:()=>a});Object.freeze({__proto__:null,copy:r,fill:a})},71277:(e,t,o)=>{function r(e){return e=e||globalThis.location.hostname,c.some((t=>{var o;return null!=(null==(o=e)?void 0:o.match(t))}))}function a(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(i)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}o.d(t,{XO:()=>r,pJ:()=>a});const i=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,i,n,/^jsapps.esri.com$/,s,l]},77873:(e,t,o)=>{o.d(t,{c:()=>r});const r=o(32718).Z.getLogger("esri.views.3d.support.buffer.math")},4265:(e,t,o)=>{o.r(t),o.d(t,{fetch:()=>k,gltfToEngineResources:()=>j,parseUrl:()=>U});var r=o(71277),a=o(92026),i=o(22753),n=o(11873),s=o(14226),l=o(81949),c=o(11186),d=o(71353),u=o(41414),m=o(25158),p=o(32035),v=o(19093),h=o(17054),f=o(27053),g=o(55798),x=o(32315),b=o(76200),C=o(14921),y=o(10064),T=o(32718),M=o(66978),w=o(49901),O=o(38330),A=o(68401),S=o(74894),P=o(76873),H=o(10052),E=o(8548);const N=T.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function R(e,t){const o=await async function(e,t){const o=(0,a.pC)(t)&&t.streamDataRequester;if(o)return async function(e,t,o){const r=await(0,C.q6)(t.request(e,"json",o));if(!0===r.ok)return r.value;(0,M.r9)(r.error),D(r.error.details.url)}(e,o,t);const r=await(0,C.q6)((0,b.default)(e,(0,a.Wg)(t)));if(!0===r.ok)return r.value.data;(0,M.r9)(r.error),D(r.error)}(e,t);return{resource:o,textures:await I(o.textureDefinitions,t)}}function D(e){throw new y.Z("",`Request for object resource failed: ${e}`)}function _(e){const t=e.params,o=t.topology;let r=!0;switch(t.vertexAttributes||(N.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(N.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(N.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(N.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),r=!1)}}else N.warn("Indexed geometries must specify faces"),r=!1;break}default:N.warn(`Unsupported topology '${o}'`),r=!1}e.params.material||(N.warn("Geometry requires material"),r=!1);const a=e.params.vertexAttributes;for(const i in a)a[i].values||(N.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function L(e){const t=(0,u.cS)();return e.forEach((e=>{const o=e.boundingInfo;(0,a.pC)(o)&&((0,u.pp)(t,o.getBBMin()),(0,u.pp)(t,o.getBBMax()))})),t}async function I(e,t){const o=[];for(const n in e){const r=e[n],i=r.images[0].data;if(!i){N.warn("Externally referenced texture data is not yet supported");continue}const s=r.encoding+";base64,"+i,l="/textureDefinitions/"+n,c="rgba"===r.channels?r.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:E.e8.REPEAT,t:E.e8.REPEAT},preMultiplyAlpha:B(c)!==A.JJ.Opaque},u=(0,a.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,O.t)(s,t);o.push(u.then((e=>({refId:l,image:e,params:d,alphaChannelUsage:c}))))}const r=await Promise.all(o),i={};for(const a of r)i[a.refId]=a;return i}function B(e){switch(e){case"mask":return A.JJ.Mask;case"maskAndTransparency":return A.JJ.MaskBlend;case"none":return A.JJ.Opaque;default:return A.JJ.Blend}}function F(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const z=new w.G(1,2,"wosr");var G=o(4760),V=o(68845),$=o(19131),q=o(69618),W=o(92770);async function k(e,t){const o=U((0,r.pJ)(e));if("wosr"===o.fileType){const e=await(t.cache?t.cache.loadWOSR(o.url,t):R(o.url,t)),r=function(e,t){const o=[],r=[],i=[],n=[],s=e.resource,l=w.G.parse(s.version||"1.0","wosr");z.validate(l);const c=s.model.name,u=s.model.geometries,m=s.materialDefinitions,p=e.textures;let v=0;const h=new Map;for(let f=0;f<u.length;f++){const e=u[f];if(!_(e))continue;const s=F(e),l=e.params.vertexAttributes,c=[];for(const t in l){const e=l[t],o=e.values;c.push([t,{data:o,size:e.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,new Uint32Array(t[e].values)])}const x=p&&p[s.texture];if(x&&!h.has(s.texture)){const{image:e,params:t}=x,o=new P.x(e,t);n.push(o),h.set(s.texture,o)}const b=h.get(s.texture),C=b?b.id:void 0;let y=i[s.material]?i[s.material][s.texture]:null;if(!y){const e=m[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=x&&x.alphaChannelUsage,r=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,n=x?B(x.alphaChannelUsage):void 0,l={ambient:(0,d.d)(e.diffuse),diffuse:(0,d.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:C,initTextureTransparent:!0,doubleSided:!0,cullFace:A.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,a.pC)(t)&&t.materialParamsMixin&&Object.assign(l,t.materialParamsMixin),y=new H.G(l),i[s.material]||(i[s.material]={}),i[s.material][s.texture]=y}r.push(y);const T=new S.Z(c,g);v+=g.position?g.position.length:0,o.push(T)}return{name:c,stageResources:{textures:n,materials:r,geometries:o},pivotOffset:s.model.pivotOffset,boundingBox:L(o),numberOfVertices:v,lodThreshold:null}}(e,t);return{lods:[r],referenceBoundingBox:r.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const i=await(t.cache?t.cache.loadGLTF(o.url,t,t.usePBR):(0,g.z)(new f.C(t.streamDataRequester),o.url,t,t.usePBR)),n=(0,a.U2)(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&(0,a.pC)(n)&&-1!==i.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let o=0;o<e.model.lods.length;++o){const r=e.model.lods[o];e.customMeta.esriTreeRendering=!0;for(const i of r.parts){const r=i.attributes.normal;if((0,a.Wi)(r))return;const n=i.attributes.position,u=n.count,p=(0,d.c)(),v=(0,d.c)(),f=(0,d.c)(),g=(0,h.gS)(m.mc,u),x=(0,h.gS)(m.ct,u),b=(0,s.a)((0,l.c)(),i.transform);for(let a=0;a<u;a++){n.getVec(a,v),r.getVec(a,p),(0,c.m)(v,v,i.transform),(0,c.f)(f,v,t.center),(0,c.E)(f,f,t.radius);const s=f[2],l=(0,c.l)(f),d=Math.min(.45+.55*l*l,1);(0,c.E)(f,f,t.radius),(0,c.m)(f,f,b),(0,c.n)(f,f),o+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.e)(f,f,p,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(a,f),g.set(a,0,255*d),g.set(a,1,255*d),g.set(a,2,255*d),g.set(a,3,255)}i.attributes.normal=x,i.attributes.color=g}}}(i,n);const u=i.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},p={...t.materialParamsMixin,treeRendering:i.customMeta.esriTreeRendering};if(null!=o.specifiedLodIndex){const e=j(i,u,p,o.specifiedLodIndex);let t=e[0].boundingBox;return 0!==o.specifiedLodIndex&&(t=j(i,u,p,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const v=j(i,u,p);return{lods:v,referenceBoundingBox:v[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}function U(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function j(e,t,o,r){const s=e.model,l=(0,n.c)(),c=new Array,d=new Map,f=new Map;return s.lods.forEach(((e,n)=>{if(void 0!==r&&n!==r)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,a.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,u.cS)()};c.push(g),e.parts.forEach((e=>{const r=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=s.materials.get(e.material),c=(0,a.pC)(e.attributes.texCoord0),b=(0,a.pC)(e.attributes.normal),C=function(e){switch(e){case"BLEND":return A.JJ.Blend;case"MASK":return A.JJ.Mask;case"OPAQUE":case null:case void 0:return A.JJ.Opaque}}(n.alphaMode);if(!d.has(r)){if(c){if((0,a.pC)(n.textureColor)&&!f.has(n.textureColor)){const e=s.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:C!==A.JJ.Opaque};f.set(n.textureColor,new P.x(e.data,t))}if((0,a.pC)(n.textureNormal)&&!f.has(n.textureNormal)){const e=s.textures.get(n.textureNormal);f.set(n.textureNormal,new P.x(e.data,e.parameters))}if((0,a.pC)(n.textureOcclusion)&&!f.has(n.textureOcclusion)){const e=s.textures.get(n.textureOcclusion);f.set(n.textureOcclusion,new P.x(e.data,e.parameters))}if((0,a.pC)(n.textureEmissive)&&!f.has(n.textureEmissive)){const e=s.textures.get(n.textureEmissive);f.set(n.textureEmissive,new P.x(e.data,e.parameters))}if((0,a.pC)(n.textureMetallicRoughness)&&!f.has(n.textureMetallicRoughness)){const e=s.textures.get(n.textureMetallicRoughness);f.set(n.textureMetallicRoughness,new P.x(e.data,e.parameters))}}const i=n.color[0]**(1/V.K),l=n.color[1]**(1/V.K),u=n.color[2]**(1/V.K),m=n.emissiveFactor[0]**(1/V.K),p=n.emissiveFactor[1]**(1/V.K),v=n.emissiveFactor[2]**(1/V.K),h=(0,a.pC)(n.textureColor)&&c?f.get(n.textureColor):null;d.set(r,new H.G({...t,transparent:C===A.JJ.Blend,customDepthTest:A.Gv.Lequal,textureAlphaMode:C,textureAlphaCutoff:n.alphaCutoff,diffuse:[i,l,u],ambient:[i,l,u],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?A.Vr.None:A.Vr.Back,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:b?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:(0,a.pC)(h)?h.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:(0,a.pC)(n.textureNormal)&&c?f.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:(0,a.pC)(h)&&!!h.params.preMultiplyAlpha,occlusionTextureId:(0,a.pC)(n.textureOcclusion)&&c?f.get(n.textureOcclusion).id:void 0,emissiveTextureId:(0,a.pC)(n.textureEmissive)&&c?f.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,a.pC)(n.textureMetallicRoughness)&&c?f.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[m,p,v],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...o}))}const y=function(e,t){switch(t){case E.MX.TRIANGLES:return(0,x.nh)(e);case E.MX.TRIANGLE_STRIP:return(0,x.DA)(e);case E.MX.TRIANGLE_FAN:return(0,x.jX)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),T=e.attributes.position.count,M=(0,h.gS)(m.ct,T);(0,p.t)(M,e.attributes.position,e.transform);const w=[[G.T.POSITION,{data:M.typedBuffer,size:M.elementCount,exclusive:!0}]],O=[[G.T.POSITION,y]];if((0,a.pC)(e.attributes.normal)){const t=(0,h.gS)(m.ct,T);(0,i.a)(l,e.transform),(0,p.a)(t,e.attributes.normal,l),w.push([G.T.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),O.push([G.T.NORMAL,y])}if((0,a.pC)(e.attributes.tangent)){const t=(0,h.gS)(m.ek,T);(0,i.a)(l,e.transform),(0,v.t)(t,e.attributes.tangent,l),w.push([G.T.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),O.push([G.T.TANGENT,y])}if((0,a.pC)(e.attributes.texCoord0)){const t=(0,h.gS)(m.Eu,T);(0,$.n)(t,e.attributes.texCoord0),w.push([G.T.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),O.push([G.T.UV0,y])}if((0,a.pC)(e.attributes.color)){const t=(0,h.gS)(m.mc,T);if(4===e.attributes.color.elementCount)e.attributes.color instanceof m.ek?(0,v.s)(t,e.attributes.color,255):e.attributes.color instanceof m.mc?(0,q.c)(t,e.attributes.color):e.attributes.color instanceof m.v6&&(0,v.s)(t,e.attributes.color,1/256);else{(0,q.f)(t,255,255,255,255);const o=new m.ne(t.buffer,0,4);e.attributes.color instanceof m.ct?(0,p.s)(o,e.attributes.color,255):e.attributes.color instanceof m.ne?(0,W.c)(o,e.attributes.color):e.attributes.color instanceof m.mw&&(0,p.s)(o,e.attributes.color,1/256)}w.push([G.T.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),O.push([G.T.COLOR,y])}const N=new S.Z(w,O);g.stageResources.geometries.push(N),g.stageResources.materials.push(d.get(r)),c&&((0,a.pC)(n.textureColor)&&g.stageResources.textures.push(f.get(n.textureColor)),(0,a.pC)(n.textureNormal)&&g.stageResources.textures.push(f.get(n.textureNormal)),(0,a.pC)(n.textureOcclusion)&&g.stageResources.textures.push(f.get(n.textureOcclusion)),(0,a.pC)(n.textureEmissive)&&g.stageResources.textures.push(f.get(n.textureEmissive)),(0,a.pC)(n.textureMetallicRoughness)&&g.stageResources.textures.push(f.get(n.textureMetallicRoughness))),g.numberOfVertices+=T;const R=N.boundingInfo;(0,a.pC)(R)&&((0,u.pp)(g.boundingBox,R.getBBMin()),(0,u.pp)(g.boundingBox,R.getBBMax()))}))})),c}},49420:(e,t,o)=>{o.d(t,{F5:()=>s,HB:()=>l,a9:()=>r});var r,a,i=o(16889),n=o(92026);function s(e){switch(e){case"multiply":default:return r.Multiply;case"ignore":return r.Ignore;case"replace":return r.Replace;case"tint":return r.Tint}}function l(e,t,o){if((0,n.Wi)(e)||t===r.Ignore)return o[0]=255,o[1]=255,o[2]=255,void(o[3]=255);const a=(0,i.uZ)(Math.round(e[3]*d),0,d),s=0===a||t===r.Tint?0:t===r.Replace?u:m;o[0]=(0,i.uZ)(Math.round(e[0]*c),0,c),o[1]=(0,i.uZ)(Math.round(e[1]*c),0,c),o[2]=(0,i.uZ)(Math.round(e[2]*c),0,c),o[3]=a+s}(a=r||(r={}))[a.Multiply=1]="Multiply",a[a.Ignore=2]="Ignore",a[a.Replace=3]="Replace",a[a.Tint=4]="Tint";const c=255,d=85,u=d,m=2*d},83734:(e,t,o)=>{o.d(t,{w:()=>a});var r=o(98634);function a(e){e.vertex.code.add(r.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},81221:(e,t,o)=>{o.d(t,{d3:()=>d,fQ:()=>c});var r=o(71353),a=o(71011),i=o(27254),n=o(98634),s=o(4760),l=o(43411);function c(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(s.T.MODELORIGINHI,"vec3"),e.attributes.add(s.T.MODELORIGINLO,"vec3"),e.attributes.add(s.T.MODEL,"mat3"),e.attributes.add(s.T.MODELNORMAL,"mat3")),t.instancedDoublePrecision&&(e.vertex.include(i.$,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[n.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,n.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?n.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,n.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,n.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?n.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:n.H``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),t.output===a.H.Normal&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4])}function d(e,t){(0,l.po)(t,u,m,3),e.setUniform3fv("viewOriginHi",u),e.setUniform3fv("viewOriginLo",m)}const u=(0,r.c)(),m=(0,r.c)()},73782:(e,t,o)=>{o.d(t,{O:()=>s,h:()=>i});var r=o(98634);function a(e){const t=r.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}var i,n=o(4760);function s(e,t){t.normalType===i.Attribute&&(e.attributes.add(n.T.NORMAL,"vec3"),e.vertex.code.add(r.H`vec3 normalModel() {
return normal;
}`)),t.normalType===i.CompressedAttribute&&(e.include(a),e.attributes.add(n.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(r.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===i.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(i||(i={}))},52276:(e,t,o)=>{o.d(t,{f:()=>i});var r=o(98634),a=o(4760);function i(e){e.attributes.add(a.T.POSITION,"vec3"),e.vertex.code.add(r.H`vec3 positionModel() { return position; }`)}},53230:(e,t,o)=>{o.d(t,{R:()=>s});var r=o(49420),a=o(98634);function i(e){e.vertex.code.add(a.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${a.H.int(r.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${a.H.int(r.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${a.H.int(r.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${a.H.int(r.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var n=o(4760);function s(e,t){t.symbolColor?(e.include(i),e.attributes.add(n.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(a.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(a.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},28719:(e,t,o)=>{o.d(t,{B:()=>c,i:()=>d});var r=o(50951),a=o(73782),i=(o(11873),o(81949),o(71353),o(52276)),n=o(27254),s=o(98634);function l(e,t){e.include(i.f),e.vertex.include(n.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("transformWorldFromModelRS","mat3"),e.vertex.uniforms.add("transformWorldFromModelTH","vec3"),e.vertex.uniforms.add("transformWorldFromModelTL","vec3"),e.vertex.uniforms.add("transformWorldFromViewTH","vec3"),e.vertex.uniforms.add("transformWorldFromViewTL","vec3"),e.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),e.vertex.uniforms.add("transformProjFromView","mat4"),e.vertex.code.add(s.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("transformWorldFromViewTL","vec3"),e.fragment.code.add(s.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}function c(e,t){t.normalType===a.h.Attribute||t.normalType===a.h.CompressedAttribute?(e.include(a.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),e.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),e.vertex.code.add(s.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===a.h.Ground?(e.include(l,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s.H`
    void forwardNormal() {
      vNormalWorld = ${t.viewingMode===r.JY.Global?s.H`normalize(vPositionWorldCameraRelative);`:s.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(s.H`void forwardNormal() {}`)}function d(e,t){e.setUniformMatrix4fv("viewNormal",t)}},6781:(e,t,o)=>{o.d(t,{s:()=>v});var r=o(71011),a=o(33280),i=o(94951),n=o(73782),s=o(60113),l=o(28719),c=o(16574),d=o(137),u=o(18607),m=o(10763),p=o(98634);function v(e,t){const o=e.vertex.code,v=e.fragment.code,h=t.hasModelTransformation;t.output!==r.H.Depth&&t.output!==r.H.Shadow||(e.include(i.w,{linearDepth:!0,hasModelTransformation:h}),e.include(s.D,t),e.include(u.kl,t),e.include(c.F,t),e.include(a.p2,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(p.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${h?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(m.sj,t),v.add(p.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?p.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),t.output===r.H.Normal&&(e.include(i.w,{linearDepth:!1,hasModelTransformation:h}),e.include(n.O,t),e.include(l.B,t),e.include(s.D,t),e.include(u.kl,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),o.add(p.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${t.normalType===n.h.Attribute?p.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${h?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(a.p2,t),e.include(m.sj,t),v.add(p.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?p.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${t.normalType===n.h.ScreenDerivative?p.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:p.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),t.output===r.H.Highlight&&(e.include(i.w,{linearDepth:!1,hasModelTransformation:h}),e.include(s.D,t),e.include(u.kl,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(p.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${h?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(a.p2,t),e.include(m.sj,t),e.include(d.bA),v.add(p.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?p.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},38171:(e,t,o)=>{o.d(t,{Q:()=>l});var r=o(60113),a=o(27284),i=o(96658),n=o(98634),s=o(4760);function l(e,t){const o=e.fragment;t.vertexTangents?(e.attributes.add(s.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===i.q.WindingOrder?o.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(n.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.attributeTextureCoordinates!==r.N.None&&(e.include(a.i,t),o.uniforms.add("normalTexture","sampler2D"),o.uniforms.add("normalTextureSize","vec2"),o.code.add(n.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},30694:(e,t,o)=>{o.d(t,{K:()=>a});var r=o(98634);function a(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add("ssaoTex","sampler2D"),o.uniforms.add("viewportPixelSz","vec4"),o.code.add(r.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):o.code.add(r.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},34975:(e,t,o)=>{o.d(t,{X:()=>m});var r=o(50951),a=o(60750),i=o(30694),n=o(53685),s=o(2116),l=o(41481),c=o(85586),d=o(23235),u=o(98634);function m(e,t){const o=e.fragment;e.include(n.v),e.include(i.K,t),t.pbrMode!==l.f7.Disabled&&e.include(s.T,t),e.include(a._,t),t.receiveShadows&&e.include(d.hX,t),o.uniforms.add("lightingGlobalFactor","float"),o.uniforms.add("ambientBoostFactor","float"),o.uniforms.add("hasFillLights","bool"),e.include(c.e),o.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),o.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.viewingMode===r.JY.Global?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),o.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),t.pbrMode===l.f7.Disabled||t.pbrMode===l.f7.WaterOnIntegratedMesh?o.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):t.pbrMode!==l.f7.Normal&&t.pbrMode!==l.f7.Schematic||(o.code.add(u.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(u.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),o.code.add(u.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(u.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===l.f7.Schematic?u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},96658:(e,t,o)=>{o.d(t,{k:()=>s,q:()=>r});var r,a,i=o(41644),n=o(98634);function s(e,t){const o=e.fragment;switch(o.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case r.None:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case r.View:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case r.WindingOrder:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,i.Bg)(t.doubleSidedMode);case r.COUNT:}}(a=r||(r={}))[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT"},27254:(e,t,o)=>{o.d(t,{$:()=>i,I:()=>n});var r=o(93169),a=o(98634);function i(e,t){let{code:o}=e;t.doublePrecisionRequiresObfuscation?o.add(a.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):o.add(a.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function n(e){return!!(0,r.Z)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},14282:(e,t,o)=>{o.d(t,{a:()=>n});var r=o(71011),a=o(98634),i=o(37825);function n(e,t){const o=a.H`
  /*
  *  ${t.name}
  *  ${t.output===r.H.Color?"RenderOutput: Color":t.output===r.H.Depth?"RenderOutput: Depth":t.output===r.H.Shadow?"RenderOutput: Shadow":t.output===r.H.Normal?"RenderOutput: Normal":t.output===r.H.Highlight?"RenderOutput: Highlight":""}
  */
  `;(0,i.CG)()&&(e.fragment.code.add(o),e.vertex.code.add(o))}},71033:(e,t,o)=>{o.d(t,{y:()=>n});var r=o(49420),a=o(116),i=o(98634);function n(e){e.include(a.Y),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(r.a9.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${i.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${i.H.int(r.a9.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${i.H.int(r.a9.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},10052:(e,t,o)=>{o.d(t,{G:()=>X,R:()=>te});var r=o(92026),a=o(11873),i=o(11186),n=o(71353),s=o(50951),l=o(55158),c=o(71011),d=o(96658),u=o(10763),m=o(68401),p=o(40485),v=o(56529),h=o(78041),f=o(68198),g=o(93822),x=o(4760),b=o(76783),C=o(33236),y=o(22909),T=o(27366),M=o(32718),w=o(33280),O=o(81221),A=o(73782),S=o(60113),P=o(49223),H=o(137),E=o(15226),N=o(41481),R=o(23235),D=o(18607),_=o(27254),L=o(41012),I=o(82144),B=o(31132),F=o(33559),z=o(7566),G=o(27627),V=o(50411),$=o(65630),q=o(8548),W=o(36207);const k=M.Z.getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class U extends B.A{initializeProgram(e){const t=U.shader.get(),o=this.configuration,r=t.build({oitEnabled:o.transparencyPassType===m.Am.Color,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,pbrMode:o.usePBR?o.isSchematic?N.f7.Schematic:N.f7.Normal:N.f7.Disabled,hasMetalnessAndRoughnessTexture:o.hasMetalnessAndRoughnessTexture,hasEmissionTexture:o.hasEmissionTexture,hasOcclusionTexture:o.hasOcclusionTexture,hasNormalTexture:o.hasNormalTexture,hasColorTexture:o.hasColorTexture,hasModelTransformation:o.hasModelTransformation,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:o.normalsTypeDerivate?A.h.ScreenDerivative:A.h.Attribute,doubleSidedMode:o.doubleSidedMode,vertexTangents:o.vertexTangents,attributeTextureCoordinates:o.hasMetalnessAndRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture||o.hasColorTexture?S.N.Default:S.N.None,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,_.I)(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new G.$(e.rctx,r,z.i)}bindPass(e,t){var o,a;(0,L.II)(this.program,t.camera.projectionMatrix);const i=this.configuration.output;this.configuration.hasModelTransformation&&((0,r.pC)(e.modelTransformation)?this.program.setUniformMatrix4fv("model",e.modelTransformation):k.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===c.H.Depth||t.multipassTerrainEnabled||i===c.H.Shadow)&&this.program.setUniform2fv("nearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),(0,E.p)(this.program,t)),i===c.H.Alpha&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",y.FZ[e.colorMixMode])),i===c.H.Color?(t.lighting.setUniforms(this.program,!1,t.hasFillLights),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",y.FZ[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&(0,N.nW)(this.program,e,this.configuration.isSchematic)):i===c.H.Highlight&&(0,H.wW)(this.program,t),(0,D.uj)(this.program,e),(0,P.Mo)(this.program,e,t),(0,y.bj)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),e.textureAlphaMode!==m.JJ.Mask&&e.textureAlphaMode!==m.JJ.MaskBlend||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(o=t.shadowMap)||o.bind(this.program),null==(a=t.ssaoHelper)||a.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?(0,n.f)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;(0,L.q0)(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===c.H.Color||this.configuration.output===c.H.Alpha||this.configuration.output===c.H.Depth&&this.configuration.screenSizePerspective||this.configuration.output===c.H.Normal&&this.configuration.screenSizePerspective||this.configuration.output===c.H.Highlight&&this.configuration.screenSizePerspective)&&(0,L.fb)(this.program,t,e.camera.viewInverseTransposeMatrix),this.configuration.output===c.H.Normal&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&(0,O.d3)(this.program,t),(0,w.Vv)(this.program,this.configuration,e.slicePlane,{origin:t}),this.configuration.output===c.H.Color&&(0,R.vL)(this.program,e,t)}_convertDepthTestFunction(e){return e===m.Gv.Lequal?q.wb.LEQUAL:q.wb.LESS}_setPipeline(e,t){const o=this.configuration,r=e===m.Am.NONE,a=e===m.Am.FrontFace;return(0,W.sm)({blending:o.output!==c.H.Color&&o.output!==c.H.Alpha||!o.transparent?null:r?h.wu:(0,h.j7)(e),culling:j(o)&&(0,W.zp)(o.cullFace),depthTest:{func:(0,h.Bh)(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:r||a?o.writeDepth&&W.LZ:null,colorWrite:W.BK,stencilWrite:o.sceneHasOcludees?V.s3:null,stencilTest:o.sceneHasOcludees?t?V.eD:V.RY:null,polygonOffset:r||a?null:(0,h.je)(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function j(e){return e.cullFace?e.cullFace!==m.Vr.None:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}U.shader=new I.J($.D,(()=>o.e(294).then(o.bind(o,40294))));class J extends F.m{constructor(){super(...arguments),this.output=c.H.Color,this.alphaDiscardMode=m.JJ.Opaque,this.doubleSidedMode=d.q.None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=m.Vr.None,this.transparencyPassType=m.Am.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=m.Gv.Less}}(0,T._)([(0,F.o)({count:c.H.COUNT})],J.prototype,"output",void 0),(0,T._)([(0,F.o)({count:m.JJ.COUNT})],J.prototype,"alphaDiscardMode",void 0),(0,T._)([(0,F.o)({count:d.q.COUNT})],J.prototype,"doubleSidedMode",void 0),(0,T._)([(0,F.o)()],J.prototype,"isSchematic",void 0),(0,T._)([(0,F.o)()],J.prototype,"vertexColors",void 0),(0,T._)([(0,F.o)()],J.prototype,"offsetBackfaces",void 0),(0,T._)([(0,F.o)()],J.prototype,"symbolColors",void 0),(0,T._)([(0,F.o)()],J.prototype,"vvSize",void 0),(0,T._)([(0,F.o)()],J.prototype,"vvColor",void 0),(0,T._)([(0,F.o)()],J.prototype,"verticalOffset",void 0),(0,T._)([(0,F.o)()],J.prototype,"receiveShadows",void 0),(0,T._)([(0,F.o)()],J.prototype,"slicePlaneEnabled",void 0),(0,T._)([(0,F.o)()],J.prototype,"sliceHighlightDisabled",void 0),(0,T._)([(0,F.o)()],J.prototype,"receiveAmbientOcclusion",void 0),(0,T._)([(0,F.o)()],J.prototype,"screenSizePerspective",void 0),(0,T._)([(0,F.o)()],J.prototype,"textureAlphaPremultiplied",void 0),(0,T._)([(0,F.o)()],J.prototype,"hasColorTexture",void 0),(0,T._)([(0,F.o)()],J.prototype,"usePBR",void 0),(0,T._)([(0,F.o)()],J.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,T._)([(0,F.o)()],J.prototype,"hasEmissionTexture",void 0),(0,T._)([(0,F.o)()],J.prototype,"hasOcclusionTexture",void 0),(0,T._)([(0,F.o)()],J.prototype,"hasNormalTexture",void 0),(0,T._)([(0,F.o)()],J.prototype,"instanced",void 0),(0,T._)([(0,F.o)()],J.prototype,"instancedColor",void 0),(0,T._)([(0,F.o)()],J.prototype,"instancedDoublePrecision",void 0),(0,T._)([(0,F.o)()],J.prototype,"vertexTangents",void 0),(0,T._)([(0,F.o)()],J.prototype,"normalsTypeDerivate",void 0),(0,T._)([(0,F.o)()],J.prototype,"writeDepth",void 0),(0,T._)([(0,F.o)()],J.prototype,"sceneHasOcludees",void 0),(0,T._)([(0,F.o)()],J.prototype,"transparent",void 0),(0,T._)([(0,F.o)()],J.prototype,"enableOffset",void 0),(0,T._)([(0,F.o)({count:m.Vr.COUNT})],J.prototype,"cullFace",void 0),(0,T._)([(0,F.o)({count:m.Am.COUNT})],J.prototype,"transparencyPassType",void 0),(0,T._)([(0,F.o)()],J.prototype,"multipassTerrainEnabled",void 0),(0,T._)([(0,F.o)()],J.prototype,"cullAboveGround",void 0),(0,T._)([(0,F.o)()],J.prototype,"hasModelTransformation",void 0),(0,T._)([(0,F.o)({count:m.Gv.COUNT})],J.prototype,"customDepthTest",void 0);var Z=o(40563);class K extends U{initializeProgram(e){const t=K.shader.get(),o=this.configuration,r=t.build({oitEnabled:o.transparencyPassType===m.Am.Color,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,pbrMode:o.usePBR?N.f7.Normal:N.f7.Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:o.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:A.h.Attribute,doubleSidedMode:d.q.WindingOrder,vertexTangents:!1,attributeTextureCoordinates:o.hasColorTexture?S.N.Default:S.N.None,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,_.I)(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new G.$(e.rctx,r,z.i)}}K.shader=new I.J(Z.R,(()=>o.e(8834).then(o.bind(o,88834))));class X extends v.F5{constructor(e){super(e,Y),this.supportsEdges=!0,this.techniqueConfig=new J,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=(0,l.U$)().vec3f(x.T.POSITION).vec3f(x.T.NORMAL);return e.vertexTangents&&o.vec4f(x.T.TANGENT),t&&o.vec2f(x.T.UV0),e.vertexColors&&o.vec4u8(x.T.COLOR),e.symbolColors&&o.vec4u8(x.T.SYMBOLCOLOR),o}(this.parameters),this.instanceBufferLayout=e.instanced?te(this.parameters):null}isVisibleInPass(e){return e!==f.C.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==f.C.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==f.C.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,o=e.vertexColors,r=e.symbolColors,a=!!t&&t.indexOf("color")>-1,i=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return o&&(a||i||r)?!!n||s:o?n?l:s:a||i||r?!!n||s:n?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,(0,r.pC)(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?m.Vr.None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig.hasModelTransformation=(0,r.pC)(this.parameters.modelTransformation),e!==c.H.Color&&e!==c.H.Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=d.q.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?d.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?d.q.WindingOrder:d.q.None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<h.ve),this.techniqueConfig}intersect(e,t,o,r,a,n,l){if(null!==this.parameters.verticalOffset){const e=r.camera;(0,i.s)(se,o[12],o[13],o[14]);let t=null;switch(r.viewingMode){case s.JY.Global:t=(0,i.n)(ie,se);break;case s.JY.Local:t=(0,i.g)(ie,ae)}let l=0;if(null!==this.parameters.verticalOffset){const o=(0,i.f)(le,se,e.eye),r=(0,i.l)(o),a=(0,i.a)(o,o,1/r);let n=null;this.parameters.screenSizePerspective&&(n=(0,i.d)(t,a)),l+=(0,y.Hx)(e,r,this.parameters.verticalOffset,n,this.parameters.screenSizePerspective)}(0,i.a)(t,t,l),(0,i.t)(ne,t,r.transform.inverseRotation),a=(0,i.f)(oe,a,ne),n=(0,i.f)(re,n,ne)}(0,y.Bw)(e,t,r,a,n,(0,b.W9)(r.verticalOffset),l)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?g.r.TRANSPARENT_MATERIAL:g.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:g.r.OPAQUE_MATERIAL)||e===g.r.DRAPED_MATERIAL}createGLMaterial(e){return e.output===c.H.Color||e.output===c.H.Alpha||e.output===c.H.Depth||e.output===c.H.Normal||e.output===c.H.Shadow||e.output===c.H.Highlight?new Q(e):null}createBufferWriter(){return new ee(this.vertexBufferLayout,this.instanceBufferLayout)}}class Q extends p.Z{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?K:U,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==c.H.Color&&this._output!==c.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const Y={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:m.Vr.Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,a.c)(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:m.Gv.Less,textureAlphaMode:m.JJ.Blend,textureAlphaCutoff:u.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...v.mo};class ee{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(x.T.POSITION).length}write(e,t,o,r){(0,C.NK)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,o,r)}}function te(e){let t=(0,l.U$)();return t=e.instancedDoublePrecision?t.vec3f(x.T.MODELORIGINHI).vec3f(x.T.MODELORIGINLO).mat3f(x.T.MODEL).mat3f(x.T.MODELNORMAL):t.mat4f(x.T.MODEL).mat4f(x.T.MODELNORMAL),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f(x.T.INSTANCECOLOR)),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f(x.T.INSTANCEFEATUREATTRIBUTE)),t}const oe=(0,n.c)(),re=(0,n.c)(),ae=(0,n.f)(0,0,1),ie=(0,n.c)(),ne=(0,n.c)(),se=(0,n.c)(),le=(0,n.c)()}}]);
//# sourceMappingURL=4265.89bd8410.chunk.js.map