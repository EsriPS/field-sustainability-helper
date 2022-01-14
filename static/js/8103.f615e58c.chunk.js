"use strict";(self.webpackChunkfield_sustainability_helper=self.webpackChunkfield_sustainability_helper||[]).push([[8103],{8103:function(e,a,l){l.r(a),l.d(a,{previewSymbol2D:function(){return f}});var t=l(1413),n=l(51995),i=l(10064),s=l(17842),o=l(79563),r=l(37817),u=l(69157),c="picture-fill",m=120,h=document.createElement("canvas");function p(e,a){var l=h.getContext("2d"),t=[];return a&&(a.weight&&t.push(a.weight),a.size&&t.push(a.size+"px"),a.family&&t.push(a.family)),l.font=t.join(" "),l.measureText(e).width}function d(e){if(0===e.length)return 0;if(e.length>2){var a=(0,s.Wz)(1),l=parseFloat(e);switch(e.slice(-2)){case"px":return l;case"pt":return l*a;case"in":return 72*l*a;case"pc":return 12*l*a;case"mm":return 2.8346456692913384*l*a;case"cm":return 28.346456692913385*l*a}}return parseFloat(e)}function f(e,a){var l,h,f=null!=(null==a?void 0:a.size)?(0,s.F2)(a.size):null,v=null!=(null==a?void 0:a.maxSize)?(0,s.F2)(a.maxSize):null,y=null!=(null==a?void 0:a.opacity)?a.opacity:null,w=null!=(null==a?void 0:a.rotation)?a.rotation:"angle"in e?e.angle:null,b=(0,o._M)(e),g=(0,o.mx)(e);if(b&&!g){var M="type"in b?null:new n.Z(b);"#ffffff"===(M?M.toHex():null)&&(g={color:"#bdc3c7",width:.75})}var k={shape:null,fill:null,stroke:g,offset:[0,0]};null!=(l=g)&&l.width&&(g.width=Math.min(g.width,80));var x=(null==(h=g)?void 0:h.width)||0,L=null!=f&&(null==(null==a?void 0:a.scale)||(null==a?void 0:a.scale)),z=0,F=0,Z=!1;switch(e.type){case"simple-marker":var C=e.style,S=Math.min(null!=f?f:(0,s.F2)(e.size),v||m);switch(z=S,F=S,C){case"circle":k.shape={type:"circle",cx:0,cy:0,r:.5*S},L||(z+=x,F+=x);break;case"cross":k.shape={type:"path",path:[{command:"M",values:[0,.5*F]},{command:"L",values:[z,.5*F]},{command:"M",values:[.5*z,0]},{command:"L",values:[.5*z,F]}]};break;case"diamond":k.shape={type:"path",path:[{command:"M",values:[0,.5*F]},{command:"L",values:[.5*z,0]},{command:"L",values:[z,.5*F]},{command:"L",values:[.5*z,F]},{command:"Z",values:[]}]},L||(z+=x,F+=x);break;case"square":k.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[z,0]},{command:"L",values:[z,F]},{command:"L",values:[0,F]},{command:"Z",values:[]}]},L||(z+=x,F+=x),w&&(Z=!0);break;case"triangle":k.shape={type:"path",path:[{command:"M",values:[.5*z,0]},{command:"L",values:[z,F]},{command:"L",values:[0,F]},{command:"Z",values:[]}]},L||(z+=x,F+=x),w&&(Z=!0);break;case"x":k.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[z,F]},{command:"M",values:[z,0]},{command:"L",values:[0,F]}]},w&&(Z=!0);break;case"path":k.shape={type:"path",path:e.path||""},L||(z+=x,F+=x),w&&(Z=!0),L=!0}break;case"simple-line":var _=Math.min(null!=f?f:x,v||80),j=_>22?2*_:40;g.width=_,z=j,F=_,k.shape={type:"path",path:[{command:"M",values:[0,F]},{command:"L",values:[z,F]}]};break;case c:case"simple-fill":z=Math.min(null!=f?f:22,v||m)+x,F=z,L=!0,k.shape="object"==typeof(null==a?void 0:a.symbolConfig)&&null!=a&&a.symbolConfig.isSquareFill?r.JZ.squareFill[0]:r.JZ.fill[0];break;case"picture-marker":var P=(0,s.F2)(e.width),q=(0,s.F2)(e.height),E=null!=f?f:Math.max(P,q),D=P/q;P=D<=1?Math.ceil(E*D):E,q=D<=1?E:Math.ceil(E/D),z=Math.min(P,v||m),F=Math.min(q,v||m),k.shape={type:"image",x:-Math.round(z/2),y:-Math.round(F/2),width:z,height:F,src:e.url||""},w&&(Z=!0);break;case"text":var H=e,J=H.text||"Aa",T=H.font,V=Math.min(null!=f?f:(0,s.F2)(T.size),v||m),A=p(J,{weight:T.weight,size:V,family:T.family}),O=/[\uE600-\uE6FF]/.test(J);z=O?V:A,F=V;var R=.25*d((T?V:0).toString());O&&(R+=5),k.shape={type:"text",text:J,x:0,y:R,align:"middle",decoration:T&&T.decoration,rotated:H.rotated,kerning:H.kerning},k.font=T&&{size:V,style:T.style,decoration:T.decoration,weight:T.weight,family:T.family}}if(!k.shape)return Promise.reject(new i.Z("symbolPreview: renderPreviewHTML2D","symbol not supported."));var W=b,B=e.color,G=null;return W&&"pattern"===W.type&&B&&e.type!==c?G=(0,o.Od)(W.src,B.toCss(!0)).then((function(e){return W.src=e,k.fill=W,k})):(k.fill=b,G=Promise.resolve(k)),G.then((function(e){var l=[[e]];if("object"==typeof(null==a?void 0:a.symbolConfig)&&null!=a&&a.symbolConfig.applyColorModulation){var n=.6*z;l.unshift([(0,t.Z)((0,t.Z)({},e),{},{offset:[-n,0],fill:(0,r.dc)(b,-.3)})]),l.push([(0,t.Z)((0,t.Z)({},e),{},{offset:[n,0],fill:(0,r.dc)(b,.3)})]),z+=2*n}return(0,u.w)(l,[z,F],{node:a&&a.node,scale:L,opacity:y,rotation:w,useRotationSize:Z,effectView:null==a?void 0:a.effectView})}))}}}]);
//# sourceMappingURL=8103.f615e58c.chunk.js.map