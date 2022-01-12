"use strict";(self.webpackChunkfield_sustainability_helper=self.webpackChunkfield_sustainability_helper||[]).push([[8103],{8103:function(a,e,t){t.r(e),t.d(e,{previewSymbol2D:function(){return d}});var n=t(1413),l=t(51995),c=t(10064),m=t(17842),u=t(79563),p=t(37817),o=t(1682),s="picture-fill",r=120,h=document.createElement("canvas");function i(a,e){var t=h.getContext("2d"),n=[];return e&&(e.weight&&n.push(e.weight),e.size&&n.push(e.size+"px"),e.family&&n.push(e.family)),t.font=n.join(" "),t.measureText(a).width}function L(a){if(0===a.length)return 0;if(a.length>2){var e=(0,m.Wz)(1),t=parseFloat(a);switch(a.slice(-2)){case"px":return t;case"pt":return t*e;case"in":return 72*t*e;case"pc":return 12*t*e;case"mm":return 2.8346456692913384*t*e;case"cm":return 28.346456692913385*t*e}}return parseFloat(a)}function d(a,e){var t,h,d=null!=(null==e?void 0:e.size)?(0,m.F2)(e.size):null,v=null!=(null==e?void 0:e.maxSize)?(0,m.F2)(e.maxSize):null,y=null!=(null==e?void 0:e.opacity)?e.opacity:null,f=null!=(null==e?void 0:e.rotation)?e.rotation:"angle"in a?a.angle:null,M=(0,u._M)(a),Z=(0,u.mx)(a);if(M&&!Z){var x="type"in M?null:new l.Z(M);"#ffffff"===(x?x.toHex():null)&&(Z={color:"#bdc3c7",width:.75})}var b={shape:null,fill:null,stroke:Z,offset:[0,0]};null!=(t=Z)&&t.width&&(Z.width=Math.min(Z.width,80));var w=(null==(h=Z)?void 0:h.width)||0,g=null!=d&&(null==(null==e?void 0:e.scale)||(null==e?void 0:e.scale)),k=0,C=0,z=!1;switch(a.type){case"simple-marker":var F=a.style,S=Math.min(null!=d?d:(0,m.F2)(a.size),v||r);switch(k=S,C=S,F){case"circle":b.shape={type:"circle",cx:0,cy:0,r:.5*S},g||(k+=w,C+=w);break;case"cross":b.shape={type:"path",path:[{command:"M",values:[0,.5*C]},{command:"L",values:[k,.5*C]},{command:"M",values:[.5*k,0]},{command:"L",values:[.5*k,C]}]};break;case"diamond":b.shape={type:"path",path:[{command:"M",values:[0,.5*C]},{command:"L",values:[.5*k,0]},{command:"L",values:[k,.5*C]},{command:"L",values:[.5*k,C]},{command:"Z",values:[]}]},g||(k+=w,C+=w);break;case"square":b.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[k,0]},{command:"L",values:[k,C]},{command:"L",values:[0,C]},{command:"Z",values:[]}]},g||(k+=w,C+=w),f&&(z=!0);break;case"triangle":b.shape={type:"path",path:[{command:"M",values:[.5*k,0]},{command:"L",values:[k,C]},{command:"L",values:[0,C]},{command:"Z",values:[]}]},g||(k+=w,C+=w),f&&(z=!0);break;case"x":b.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[k,C]},{command:"M",values:[k,0]},{command:"L",values:[0,C]}]},f&&(z=!0);break;case"path":b.shape={type:"path",path:a.path||""},g||(k+=w,C+=w),f&&(z=!0),g=!0}break;case"simple-line":var E=Math.min(null!=d?d:w,v||80),D=E>22?2*E:40;Z.width=E,k=D,C=E,b.shape={type:"path",path:[{command:"M",values:[0,C]},{command:"L",values:[k,C]}]};break;case s:case"simple-fill":k=Math.min(null!=d?d:22,v||r)+w,C=k,g=!0,b.shape="object"==typeof(null==e?void 0:e.symbolConfig)&&null!=e&&e.symbolConfig.isSquareFill?p.JZ.squareFill[0]:p.JZ.fill[0];break;case"picture-marker":var P=(0,m.F2)(a.width),_=(0,m.F2)(a.height),j=null!=d?d:Math.max(P,_),q=P/_;P=q<=1?Math.ceil(j*q):j,_=q<=1?j:Math.ceil(j/q),k=Math.min(P,v||r),C=Math.min(_,v||r),b.shape={type:"image",x:-Math.round(k/2),y:-Math.round(C/2),width:k,height:C,src:a.url||""},f&&(z=!0);break;case"text":var V=a,H=V.text||"Aa",J=V.font,T=Math.min(null!=d?d:(0,m.F2)(J.size),v||r),X=i(H,{weight:J.weight,size:T,family:J.family}),A=/[\uE600-\uE6FF]/.test(H);k=A?T:X,C=T;var B=.25*L((J?T:0).toString());A&&(B+=5),b.shape={type:"text",text:H,x:0,y:B,align:"middle",decoration:J&&J.decoration,rotated:V.rotated,kerning:V.kerning},b.font=J&&{size:T,style:J.style,decoration:J.decoration,weight:J.weight,family:J.family}}if(!b.shape)return Promise.reject(new c.Z("symbolPreview: renderPreviewHTML2D","symbol not supported."));var O=M,R=a.color,W=null;return O&&"pattern"===O.type&&R&&a.type!==s?W=(0,u.Od)(O.src,R.toCss(!0)).then((function(a){return O.src=a,b.fill=O,b})):(b.fill=M,W=Promise.resolve(b)),W.then((function(a){var t=[[a]];if("object"==typeof(null==e?void 0:e.symbolConfig)&&null!=e&&e.symbolConfig.applyColorModulation){var l=.6*k;t.unshift([(0,n.Z)((0,n.Z)({},a),{},{offset:[-l,0],fill:(0,p.dc)(M,-.3)})]),t.push([(0,n.Z)((0,n.Z)({},a),{},{offset:[l,0],fill:(0,p.dc)(M,.3)})]),k+=2*l}return(0,o.w)(t,[k,C],{node:e&&e.node,scale:g,opacity:y,rotation:f,useRotationSize:z,effectView:null==e?void 0:e.effectView})}))}},37817:function(a,e,t){t.d(e,{dc:function(){return d},uH:function(){return L},TE:function(){return s},Pc:function(){return p},EB:function(){return o},XX:function(){return h},EV:function(){return m},DY:function(){return r},eb:function(){return c},tp:function(){return i},ht:function(){return u},JZ:function(){return l}});var n=t(51995),l={fill:[{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"}],squareFill:[{type:"path",path:"M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z"}],pathSymbol3DLayer:[{type:"path",path:"M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z"},{type:"circle",cx:-2,cy:10,r:5}],extrudeSymbol3DLayer:[{type:"path",path:"M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z"},{type:"path",path:"M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z"},{type:"path",path:"M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z"}],cone:[{type:"path",path:"M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z"}],tallCone:[{type:"path",path:"M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z"}],invertedCone:[{type:"path",path:"M 0,7 L -8,-8 L 8,-8 Z"},{type:"path",path:"M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z"}],cube:[{type:"path",path:"M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z"},{type:"path",path:"M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z"},{type:"path",path:"M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z"}],tallCube:[{type:"path",path:"M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z"},{type:"path",path:"M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z"},{type:"path",path:"M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z"}],cylinder:[{type:"path",path:"M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:8,ry:2}],tallCylinder:[{type:"path",path:"M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:3.5,ry:1}],diamond:[{type:"path",path:"M 0,-10 L 10,-1 L -1,1 L 0,-10 Z"},{type:"path",path:"M 0,-10 L -1,1 L -8,-1 L 0,-10 Z"},{type:"path",path:"M -1,1 L 0,10 L -8,-1 L -1,1 Z"},{type:"path",path:"M -1,0 L 0,10 L 10,-1 L -1,1 Z"}],tetrahedron:[{type:"path",path:"M 0,-10 L 10,7 L 0,0 L 0,-10 Z"},{type:"path",path:"M 0,-10 L 0,0 L -8,7 L 0,-10 Z"},{type:"path",path:"M 10,7 L 0,0 L -8,7 L 10,7 Z"}]};function c(a,e,t){var n=22,l=22;a<1?n*=.75:a>1&&(l*=1.25);var c=22,m=22;return e&&t&&(n=l=c=m=0),[{type:"path",path:[{command:"M",values:[c,0]},{command:"L",values:[t?c:.875*c,0]},{command:"L",values:[t?n-.5*c:0,l-.5*m]},{command:"L",values:[n-.5*c,l-.5*m]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[c,0]},{command:"L",values:[c,e?0:.125*m]},{command:"L",values:[n-.5*c,e?l-.5*m:m]},{command:"L",values:[n-.5*c,l-.5*m]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[n-.5*c,l-.5*m]},{command:"L",values:[t?n-.5*c:0,l-.5*m]},{command:"L",values:[t?n-.5*c:0,e?l-.5*m:m]},{command:"L",values:[n-.5*c,e?l-.5*m:m]},{command:"Z",values:[]}]}]}function m(a){var e=22,t=.5*a;return[{type:"path",path:[{command:"M",values:[0,.7*e*.5]},{command:"L",values:[6.6,.7*e]},{command:"L",values:[6.6,.7*e+t]},{command:"L",values:[0,.7*e+t-.7*e*.5]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[6.6,.7*e]},{command:"L",values:[6.6,.7*e+t]},{command:"L",values:[e,t]},{command:"L",values:[e,0]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[6.6,0]},{command:"L",values:[e,0]},{command:"L",values:[6.6,.7*e]},{command:"L",values:[0,.7*e*.5]},{command:"Z",values:[]}]}]}function u(){return[{type:"path",path:"M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27"},{type:"path",path:"M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z"},{type:"path",path:"M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z"}]}function p(a,e){var t=e?20:a,n=e?4:6;t-=t<=22?.5*n:n;var l=e?.35*t:.5*t;return[{type:"path",path:[{command:"M",values:[.5*t,0]},{command:"L",values:[t,.5*l]},{command:"L",values:[.5*t,l]},{command:"L",values:[0,.5*l]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*l]},{command:"L",values:[.5*t,l]},{command:"L",values:[.5*t,a]},{command:"L",values:[0,a-.5*l]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.5*t,l]},{command:"L",values:[.5*t,a]},{command:"L",values:[t,a-.5*l]},{command:"L",values:[t,.5*l]},{command:"Z",values:[]}]}]}function o(a,e){var t=e?20:a,n=e?4:6,l=.5*(t-=t<=22?.5*n:n),c=.15*t,m=a-c;return[{type:"ellipse",cx:.5*t,cy:m,rx:l,ry:c},{type:"path",path:[{command:"M",values:[0,c]},{command:"L",values:[0,m]},{command:"L",values:[t,m]},{command:"L",values:[t,c]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*t,cy:c,rx:l,ry:c}]}function s(a,e){var t=e?20:a,n=e?4:6,l=.15*(t-=t<=22?.5*n:n),c=a-l;return[{type:"ellipse",cx:.5*t,cy:c,rx:.5*t,ry:l},{type:"path",path:[{command:"M",values:[.5*t,0]},{command:"L",values:[t,c]},{command:"L",values:[0,c]},{command:"Z",values:[]}]}]}function r(a){var e=a,t=.15*(e-=e<22?3:6);return[{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[e,0]},{command:"L",values:[.5*e,a-t]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*e,cy:0,rx:.5*e,ry:t}]}function h(a){var e=a,t=a,n=e-=e<22?2:4,l=t,c=Math.floor(a/10)-1||1;return[{type:"path",path:[{command:"M",values:[.45*n,0]},{command:"L",values:[n,.5*l-c]},{command:"L",values:[.45*n-c,.5*l+c]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*n,0]},{command:"L",values:[.45*n-c,.5*l+c]},{command:"L",values:[0,.5*l-c]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*l-c]},{command:"L",values:[.45*n-c,.5*l+c]},{command:"L",values:[.45*n,t]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*n,t]},{command:"L",values:[n,.5*l-c]},{command:"L",values:[.45*n-c,.5*l+c]},{command:"Z",values:[]}]}]}function i(a){var e=a;return[{type:"path",path:[{command:"M",values:[.45*a,0]},{command:"L",values:[a,e-=e<22?1:2]},{command:"L",values:[.45*a,.6*e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*a,0]},{command:"L",values:[.45*a,.6*e]},{command:"L",values:[0,e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,e]},{command:"L",values:[.45*a,.6*e]},{command:"L",values:[a,e]},{command:"Z",values:[]}]}]}function L(a,e){return Math.round(Math.min(Math.max(a+255*e*.75,0),255))}function d(a,e){if("type"in a&&("linear"===a.type||"pattern"===a.type))return a;var t=new n.Z(a);return new n.Z([L(t.r,e),L(t.g,e),L(t.b,e),t.a])}}}]);
//# sourceMappingURL=8103.96e73cc1.chunk.js.map