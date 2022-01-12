"use strict";(self.webpackChunkfield_sustainability_helper=self.webpackChunkfield_sustainability_helper||[]).push([[7314],{99278:function(t,e,i){i.d(e,{Z:function(){return w}});var r,n=i(29439),a=i(15671),s=i(43144),l=i(60136),o=i(29388),h=i(27366),u=(i(93169),i(10064)),f=i(67123),p=i(84652),c=i(32718),x=i(92026),v=i(49861),m=i(89125),d=i(69912),g=c.Z.getLogger("esri.layers.support.PixelBlock"),y=r=function(t){(0,l.Z)(i,t);var e=(0,o.Z)(i);function i(t){var r;return(0,a.Z)(this,i),(r=e.call(this,t)).width=null,r.height=null,r.pixelType="f32",r.validPixelCount=null,r.mask=null,r.maskIsAlpha=!1,r.pixels=null,r.statistics=null,r}return(0,s.Z)(i,[{key:"castPixelType",value:function(t){if(!t)return"f32";var e=t.toLowerCase();return["u1","u2","u4"].indexOf(e)>-1?e="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(e)&&(e="f32"),e}},{key:"getPlaneCount",value:function(){return this.pixels&&this.pixels.length}},{key:"addData",value:function(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new u.Z("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})}},{key:"getAsRGBA",value:function(){var t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}},{key:"getAsRGBAFloat",value:function(){var t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}},{key:"updateStatistics",value:function(){var t=this;this.statistics=this.pixels.map((function(e){return t._calculateBandStatistics(e,t.mask)}));var e=this.mask,i=0;if(e)for(var r=0;r<e.length;r++)e[r]&&i++;else i=this.width*this.height;this.validPixelCount=i}},{key:"clamp",value:function(t){if(t&&"f64"!==t&&"f32"!==t){var e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}for(var i,a,s,l=e,o=(0,n.Z)(l,2),h=o[0],u=o[1],f=this.pixels,p=this.width*this.height,c=f.length,x=[],v=0;v<c;v++){s=r.createEmptyBand(t,p),i=f[v];for(var m=0;m<p;m++)a=i[m],s[m]=a>u?u:a<h?h:a;x.push(s)}this.pixels=x,this.pixelType=t}}},{key:"extractBands",value:function(t){var e=this;if((0,x.Wi)(t)||0===t.length||null==this.pixels||0===this.pixels.length)return this;var i=this.pixels.length,n=t.some((function(t){return t>=e.pixels.length})),a=i===t.length&&!t.some((function(t,e){return t!==e}));return n||a?this:new r({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((function(t){return e.pixels[t]})),statistics:this.statistics&&t.map((function(t){return e.statistics[t]}))})}},{key:"clone",value:function(){var t,e=new r({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});this.mask&&(this.mask instanceof Uint8Array?e.mask=new Uint8Array(this.mask):e.mask=this.mask.slice(0));var i=r.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){e.pixels=[];var n=this.pixels[0].slice;for(t=0;t<this.pixels.length;t++)e.pixels[t]=n?this.pixels[t].slice(0,this.pixels[t].length):new i(this.pixels[t])}if(this.statistics)for(e.statistics=[],t=0;t<this.statistics.length;t++)e.statistics[t]=(0,p.d9)(this.statistics[t]);return e}},{key:"_fillFrom8Bit",value:function(t){var e=this.mask,i=this.maskIsAlpha,r=this.pixels;if(t&&r&&r.length){var n,a,s,l;n=a=s=r[0],r.length>=3?(a=r[1],s=r[2]):2===r.length&&(a=r[1]);var o=new Uint32Array(t),h=this.width*this.height;if(n.length===h)if(e&&e.length===h)if(i)for(l=0;l<h;l++)e[l]&&(o[l]=e[l]<<24|s[l]<<16|a[l]<<8|n[l]);else for(l=0;l<h;l++)e[l]&&(o[l]=255<<24|s[l]<<16|a[l]<<8|n[l]);else for(l=0;l<h;l++)o[l]=255<<24|s[l]<<16|a[l]<<8|n[l];else g.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}else g.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")}},{key:"_fillFromNon8Bit",value:function(t){var e=this.pixels,i=this.mask,r=this.statistics;if(t&&e&&e.length){var n=this.pixelType,a=1,s=0,l=1;if(r&&r.length>0)s=r.map((function(t){return t.minValue})).reduce((function(t,e){return Math.min(t,e)})),l=r.map((function(t){return t.maxValue-t.minValue})).reduce((function(t,e){return Math.max(t,e)})),a=255/l;else{var o=255;"s8"===n?(s=-128,o=127):"u16"===n?o=65535:"s16"===n?(s=-32768,o=32767):"u32"===n?o=4294967295:"s32"===n?(s=-2147483648,o=2147483647):"f32"===n?(s=-34e38,o=34e38):"f64"===n&&(s=-Number.MAX_VALUE,o=Number.MAX_VALUE),a=255/(o-s)}var h,u,f,p,c,x=new Uint32Array(t),v=this.width*this.height;if((h=u=f=e[0]).length!==v)return g.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(u=e[1],e.length>=3&&(f=e[2]),i&&i.length===v)for(p=0;p<v;p++)i[p]&&(x[p]=255<<24|(f[p]-s)*a<<16|(u[p]-s)*a<<8|(h[p]-s)*a);else for(p=0;p<v;p++)x[p]=255<<24|(f[p]-s)*a<<16|(u[p]-s)*a<<8|(h[p]-s)*a;else if(i&&i.length===v)for(p=0;p<v;p++)c=(h[p]-s)*a,i[p]&&(x[p]=255<<24|c<<16|c<<8|c);else for(p=0;p<v;p++)c=(h[p]-s)*a,x[p]=255<<24|c<<16|c<<8|c}else g.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")}},{key:"_fillFrom32Bit",value:function(t){var e,i,r,n,a=this.pixels,s=this.mask;if(!t||!a||!a.length)return g.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");e=i=r=a[0],a.length>=3?(i=a[1],r=a[2]):2===a.length&&(i=a[1]);var l=this.width*this.height;if(e.length!==l)return g.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");var o=0;if(s&&s.length===l)for(n=0;n<l;n++)t[o++]=e[n],t[o++]=i[n],t[o++]=r[n],t[o++]=1&s[n];else for(n=0;n<l;n++)t[o++]=e[n],t[o++]=i[n],t[o++]=r[n],t[o++]=1}},{key:"_calculateBandStatistics",value:function(t,e){var i,r=1/0,n=-1/0,a=t.length,s=0;if(e)for(i=0;i<a;i++)e[i]&&(r=(s=t[i])<r?s:r,n=s>n?s:n);else for(i=0;i<a;i++)r=(s=t[i])<r?s:r,n=s>n?s:n;return{minValue:r,maxValue:n}}}],[{key:"createEmptyBand",value:function(t,e){return new(r.getPixelArrayConstructor(t))(e)}},{key:"getPixelArrayConstructor",value:function(t){var e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array}return e}}]),i}(f.wq);(0,h._)([(0,v.Cb)({json:{write:!0}})],y.prototype,"width",void 0),(0,h._)([(0,v.Cb)({json:{write:!0}})],y.prototype,"height",void 0),(0,h._)([(0,v.Cb)({json:{write:!0}})],y.prototype,"pixelType",void 0),(0,h._)([(0,m.p)("pixelType")],y.prototype,"castPixelType",null),(0,h._)([(0,v.Cb)({json:{write:!0}})],y.prototype,"validPixelCount",void 0),(0,h._)([(0,v.Cb)({json:{write:!0}})],y.prototype,"mask",void 0),(0,h._)([(0,v.Cb)({json:{write:!0}})],y.prototype,"maskIsAlpha",void 0),(0,h._)([(0,v.Cb)({json:{write:!0}})],y.prototype,"pixels",void 0),(0,h._)([(0,v.Cb)({json:{write:!0}})],y.prototype,"statistics",void 0);var w=y=r=(0,h._)([(0,d.j)("esri.layers.support.PixelBlock")],y)},17314:function(t,e,i){i.d(e,{Uk:function(){return B},SJ:function(){return o},Pz:function(){return l},oc:function(){return p},hE:function(){return f},Oh:function(){return u},Hv:function(){return h},qF:function(){return s},nk:function(){return a},XV:function(){return x},us:function(){return g},Kh:function(){return m},zp:function(){return v},pW:function(){return w},Vl:function(){return T},dy:function(){return c}});var r=i(92026),n=i(99278);function a(t){return(0,r.pC)(t)&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0}function s(t,e){if(null==e||!e.length||!a(t))return t;var i=t.pixels.length;return e&&e.some((function(t){return t>=i}))||1===i&&1===e.length&&0===e[0]?t:i!==e.length||e.some((function(t,e){return t!==e}))?new n.Z({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((function(e){return t.pixels[e]})),statistics:t.statistics&&e.map((function(e){return t.statistics[e]}))}):t}function l(t){if(t){var e=t.colormap;if(e&&0!==e.length){var i=e.sort((function(t,e){return t[0]-e[0]})),r=0;i[0][0]<0&&(r=i[0][0]);var n,a=Math.max(256,i[i.length-1][0]-r+1),s=new Uint8Array(4*a),l=[],o=0,h=0,u=5===i[0].length;if(a>65536)return i.forEach((function(t){l[t[0]-r]=u?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:l,offset:r,alphaSpecified:u};if(t.fillUnspecified)for(o=(n=i[h])[0]-r;o<a;o++)s[4*o]=n[1],s[4*o+1]=n[2],s[4*o+2]=n[3],s[4*o+3]=u?n[4]:255,o===n[0]-r&&(n=h===i.length-1?n:i[++h]);else for(o=0;o<i.length;o++)s[h=4*((n=i[o])[0]-r)]=n[1],s[h+1]=n[2],s[h+2]=n[3],s[h+3]=u?n[4]:255;return{indexedColormap:s,offset:r,alphaSpecified:u}}}}function o(t,e){if(!a(t))return t;if(!e&&(e.indexedColormap||e.indexed2DColormap))return t;var i=t.clone(),r=i.pixels,n=i.mask,s=i.width*i.height;if(1!==r.length)return t;var l,o=e.indexedColormap,h=e.indexed2DColormap,u=e.offset,f=e.alphaSpecified,p=o.length-1,c=0,x=r[0],v=new Uint8Array(x.length),m=new Uint8Array(x.length),d=new Uint8Array(x.length),g=0;if(o)if(n)for(c=0;c<s;c++)n[c]&&((g=4*(x[c]-u))<u||g>p?n[c]=0:(v[c]=o[g],m[c]=o[g+1],d[c]=o[g+2],n[c]=o[g+3]));else{for(n=new Uint8Array(s),c=0;c<s;c++)(g=4*(x[c]-u))<u||g>p?n[c]=0:(v[c]=o[g],m[c]=o[g+1],d[c]=o[g+2],n[c]=o[g+3]);i.mask=n}else if(n)for(c=0;c<s;c++)n[c]&&(l=h[x[c]],v[c]=l[0],m[c]=l[1],d[c]=l[2],n[c]=l[3]);else{for(n=new Uint8Array(s),c=0;c<s;c++)l=h[x[c]],v[c]=l[0],m[c]=l[1],d[c]=l[2],n[c]=l[3];i.mask=n}return i.pixels=[v,m,d],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=f,i}function h(t){if(!a(t))return null;t.statistics||t.updateStatistics();var e,i,r,n,s,l,o,h,u,f,p,c,x,v,m=t.pixels,d=t.mask,g=t.pixelType,y=t.statistics,w=t.width*t.height,k=m.length,A=[],M=[],b=256;for(n=0;n<k;n++){if(l=new Uint32Array(b),h=m[n],"u8"===g)if(e=-.5,i=255.5,d)for(s=0;s<w;s++)d[s]&&l[h[s]]++;else for(s=0;s<w;s++)l[h[s]]++;else{if(e=y[n].minValue,r=((i=y[n].maxValue)-e)/b,o=new Uint32Array(257),d)for(s=0;s<w;s++)d[s]&&o[Math.floor((h[s]-e)/r)]++;else for(s=0;s<w;s++)o[Math.floor((h[s]-e)/r)]++;for(s=0;s<255;s++)l[s]=o[s];l[255]=o[255]+o[256]}for(A.push({min:e,max:i,size:b,counts:l}),u=0,f=0,x=0,s=0;s<b;s++)u+=l[s],f+=s*l[s];for(v=f/u,s=0;s<b;s++)x+=l[s]*Math.pow(s-v,2);p=(v+.5)*(r=(i-e)/b)+e,c=Math.sqrt(x/(u-1))*r,M.push({min:e,max:i,avg:p,stddev:c})}return{statistics:M,histograms:A}}function u(t){for(var e=[],i=0;i<t.length;i++){for(var r=t[i],n=r.min,a=r.max,s=r.size,l=r.counts,o=0,h=0,u=0;u<s;u++)o+=l[u],h+=u*l[u];for(var f=h/o,p=0,c=0;c<s;c++)p+=l[c]*Math.pow(c-f,2);var x=(a-n)/s,v=(f+.5)*x+n,m=Math.sqrt(p/(o-1))*x;e.push({min:n,max:a,avg:v,stddev:m})}return e}function f(t){var e=t.minCutOff,i=t.maxCutOff,r=t.gamma,n=t.pixelType,a=t.outMin||0,s=t.outMax||255;if(-1===["u8","u16","s8","s16"].indexOf(n))return null;var l,o,h=e.length,u=0;"s8"===n?u=-127:"s16"===n&&(u=-32767);var f=256;["u16","s16"].indexOf(n)>-1&&(f=65536);var p=[],c=[],x=s-a;for(l=0;l<h;l++)c[l]=i[l]-e[l],p[l]=x/(i[l]-e[l]);var v,m=r&&r.length>=h,d=[];if(m)for(l=0;l<h;l++)r[l]>1?r[l]>2?d[l]=6.5+Math.pow(r[l]-2,2.5):d[l]=6.5+100*Math.pow(2-r[l],4):d[l]=1;var g,y,w,k=[];if(m)for(l=0;l<h;l++){for(w=[],o=0;o<f;o++)v=((g=o+u)-e[l])/c[l],y=1,r[l]>1&&(y-=Math.pow(1/x,v*d[l])),g<i[l]&&g>e[l]?w[o]=Math.floor(y*x*Math.pow(v,1/r[l]))+a:g>=i[l]?w[o]=s:w[o]=a;k[l]=w}else for(l=0;l<h;l++){for(w=[],o=0;o<f;o++)(g=o+u)<=e[l]?w[o]=a:g>=i[l]?w[o]=s:w[o]=Math.floor((g-e[l])/c[l]*x)+a;k[l]=w}if(null!=t.contrastOffset){var A=function(t,e){var i,r,n=Math.min(Math.max(t,-100),100),a=Math.min(Math.max(e,-100),100),s=255,l=128,o=new Uint8Array(256);for(i=0;i<256;i++)n>0&&n<100?r=(200*i-100*s+2*s*a)/(2*(100-n))+l:n<=0&&n>-100?r=(200*i-100*s+2*s*a)*(100+n)/2e4+l:100===n?r=(r=200*i-100*s+(s+1)*(100-n)+2*s*a)>0?s:0:-100===n&&(r=l),o[i]=r>s?s:r<0?0:r;return o}(t.contrastOffset,t.brightnessOffset);for(l=0;l<h;l++)for(w=k[l],o=0;o<f;o++)w[o]=A[w[o]]}return{lut:k,offset:u}}function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256;e=Math.min(e,256);for(var i=t.size,r=t.counts,n=new Uint8Array(i),a=r.reduce((function(t,i){return t+i/e}),0),s=0,l=0,o=0,h=a,u=0;u<i;u++)if(o+=r[u],!(u<i-1&&o+r[u+1]<h)){for(;s<e-1&&h<o;)s++,h+=a;for(var f=l;f<=u;f++)n[f]=s;l=u+1}for(var p=l;p<i;p++)n[p]=e-1;return n}function c(t,e){if(!a(t))return null;var i,r,n,s,l,o=t.clone(),h=o.pixels,u=o.mask,f=e.minCutOff,p=e.maxCutOff,c=e.gamma,x=e.outMin||0,v=e.outMax||255,m=o.width*o.height,d=h.length,g=v-x,y=[],w=[];for(i=0;i<d;i++)w[i]=p[i]-f[i],y[i]=g/(p[i]-f[i]);var k=c&&c.length>=d,A=[];if(k)for(i=0;i<d;i++)c[i]>1?c[i]>2?A[i]=6.5+Math.pow(c[i]-2,2.5):A[i]=6.5+100*Math.pow(2-c[i],4):A[i]=1;if(k)if(null!=u){for(r=0;r<m;r++)if(u[r])for(i=0;i<d;i++)l=((n=h[i][r])-f[i])/w[i],s=1,c[i]>1&&(s-=Math.pow(1/g,l*A[i])),n<p[i]&&n>f[i]?h[i][r]=Math.floor(s*g*Math.pow(l,1/c[i]))+x:n>=p[i]?h[i][r]=v:h[i][r]=x}else for(r=0;r<m;r++)for(i=0;i<d;i++)l=((n=h[i][r])-f[i])/w[i],s=1,c[i]>1&&(s-=Math.pow(1/g,l*A[i])),n<p[i]&&n>f[i]?h[i][r]=Math.floor(s*g*Math.pow(l,1/c[i]))+x:n>=p[i]?h[i][r]=v:h[i][r]=x;else if(null!=u){for(r=0;r<m;r++)if(u[r])for(i=0;i<d;i++)(n=h[i][r])<p[i]&&n>f[i]?h[i][r]=Math.floor((n-f[i])/w[i]*g)+x:n>=p[i]?h[i][r]=v:h[i][r]=x}else for(r=0;r<m;r++)for(i=0;i<d;i++)(n=h[i][r])<p[i]&&n>f[i]?h[i][r]=Math.floor((n-f[i])/w[i]*g)+x:n>=p[i]?h[i][r]=v:h[i][r]=x;return o.pixelType="u8",o.updateStatistics(),o}function x(t,e){if(!a(t))return null;var i,r,s=t.pixels,l=t.mask,o=t.width*t.height,h=s.length,u=e.lut,f=e.offset;u&&1===u[0].length&&(u=s.map((function(){return u})));var p,c,x,v=[];if(f)if(null==l)for(i=0;i<h;i++){for(p=s[i],c=u[i],x=new Uint8Array(o),r=0;r<o;r++)x[r]=c[p[r]-f];v.push(x)}else for(i=0;i<h;i++){for(p=s[i],c=u[i],x=new Uint8Array(o),r=0;r<o;r++)l[r]&&(x[r]=c[p[r]-f]);v.push(x)}else if(null==l)for(i=0;i<h;i++){for(p=s[i],c=u[i],x=new Uint8Array(o),r=0;r<o;r++)x[r]=c[p[r]];v.push(x)}else for(i=0;i<h;i++){for(p=s[i],c=u[i],x=new Uint8Array(o),r=0;r<o;r++)l[r]&&(x[r]=c[p[r]]);v.push(x)}var m=new n.Z({width:t.width,height:t.height,pixels:v,mask:l,pixelType:"u8"});return m.updateStatistics(),m}function v(t,e){if(!a(t))return null;var i,r,n,s,l,o,h=t.clone(),u=h.pixels,f=h.width*h.height,p=e.length,c=Math.floor(p/2),x=e[Math.floor(c)],v=u[0],m=!1,d=new Uint8Array(f),g=new Uint8Array(f),y=new Uint8Array(f),w=h.mask,k=4===e[0].mappedColor.length;for(w||((w=new Uint8Array(f)).fill(k?255:1),h.mask=w),l=0;l<f;l++)if(w[l]){for(i=v[l],m=!1,o=c,r=x,n=0,s=p-1;s-n>1;){if(i===r.value){m=!0;break}i>r.value?n=o:s=o,o=Math.floor((n+s)/2),r=e[Math.floor(o)]}m||(i===e[n].value?(r=e[n],m=!0):i===e[s].value?(r=e[s],m=!0):i<e[n].value?(m=!1,r=null):i>e[n].value&&(i<e[s].value?(r=e[n],m=!0):s===p-1?(m=!1,r=null):(r=e[s],m=!0))),m?(d[l]=r.mappedColor[0],g[l]=r.mappedColor[1],y[l]=r.mappedColor[2],w[l]=r.mappedColor[3]):d[l]=g[l]=y[l]=w[l]=0}return h.pixels=[d,g,y],h.mask=w,h.pixelType="u8",h.maskIsAlpha=k,h}function m(t,e){if(!t||0===t.length)return null;var i=t.filter((function(t){return t.pixelBlock}))[0];if(!i||(0,r.Wi)(i.pixelBlock))return null;var n=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,a=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,s=.01*Math.min(n,a),l=t.sort((function(t,e){return Math.abs(t.extent.ymax-e.extent.ymax)>s?e.extent.ymax-t.extent.ymax:Math.abs(t.extent.xmin-e.extent.xmin)>s?t.extent.xmin-e.extent.xmin:0})),o=Math.min.apply(null,l.map((function(t){return t.extent.xmin}))),h=Math.min.apply(null,l.map((function(t){return t.extent.ymin}))),u=Math.max.apply(null,l.map((function(t){return t.extent.xmax}))),f=Math.max.apply(null,l.map((function(t){return t.extent.ymax}))),p={x:Math.round((e.xmin-o)/n),y:Math.round((f-e.ymax)/a)},c={width:Math.round((u-o)/n),height:Math.round((f-h)/a)},x={width:Math.round((e.xmax-e.xmin)/n),height:Math.round((e.ymax-e.ymin)/a)};return Math.round(c.width/i.pixelBlock.width)*Math.round(c.height/i.pixelBlock.height)!==l.length||p.x<0||p.y<0||c.width<x.width||c.height<x.height?null:{extent:e,pixelBlock:g(l.map((function(t){return t.pixelBlock})),c,{clipOffset:p,clipSize:x})}}function d(t,e,i,r,n,a){var s=i.block,l=s.width,o=s.height,h=i.offset,u=h.x,f=h.y,p=i.mosaic,c=p.width,x=function(t,e,i,r,n,a,s,l){return{xmin:n<=i*t?0:n<i*t+t?n-i*t:t,ymin:a<=r*e?0:a<r*e+e?a-r*e:e,xmax:n+s<=i*t?0:n+s<i*t+t?n+s-i*t:t,ymax:a+l<=r*e?0:a+l<r*e+e?a+l-r*e:e}}(l,o,r,n,u,f,c,p.height),v=0,m=0;if(a){var d=a.hasGCSSShiftTransform?360:a.halfWorldWidth,g=l*a.resolutionX,y=a.startX+r*g;y<d&&y+g>d?m=a.rightPadding:y>=d&&(v=a.leftMargin-a.rightPadding,m=0)}if(x.xmax-=m,"number"!=typeof e)for(var w=x.ymin;w<x.ymax;w++)for(var k=(n*o+w-f)*c+(r*l-u)+v,A=w*l,M=x.xmin;M<x.xmax;M++)t[k+M]=e[A+M];else for(var b=x.ymin;b<x.ymax;b++)for(var C=(n*o+b-f)*c+(r*l-u)+v,U=x.xmin;U<x.xmax;U++)t[C+U]=e}function g(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=i.clipOffset,l=i.clipSize,o=i.alignmentInfo,h=i.blockWidths;if(h)return y(t,e,{blockWidths:h});var u=t.filter((function(t){return a(t)}))[0];if((0,r.Wi)(u))return null;for(var f,p,c=l?l.width:e.width,x=l?l.height:e.height,v=u.width,m=u.height,g=e.width/v,w=e.height/m,k={offset:s||{x:0,y:0},mosaic:l||e,block:{width:v,height:m}},A=u.pixelType,M=n.Z.getPixelArrayConstructor(A),b=u.pixels.length,C=[],U=0;U<b;U++){f=new M(c*x);for(var T=0;T<w;T++)for(var B=0;B<g;B++){var P=t[T*g+B];a(P)&&d(f,P.pixels[U],k,B,T,o)}C.push(f)}if(t.some((function(t){return(0,r.Wi)(t)||t.mask&&t.mask.length>0}))){p=new Uint8Array(c*x);for(var _=0;_<w;_++)for(var S=0;S<g;S++){var Z=t[_*g+S],F=(0,r.pC)(Z)?Z.mask:null;d(p,F||(Z?1:0),k,S,_,o)}}var G=new n.Z({width:c,height:x,pixels:C,pixelType:A,mask:p});return G.updateStatistics(),G}function y(t,e,i){var s=t.find((function(t){return(0,r.pC)(t)}));if(!(0,r.pC)(s))return null;var l=t.some((function(t){return!(0,r.pC)(t)||!!t.mask})),o=e.width,h=e.height,u=l?new Uint8Array(o*h):null,f=i.blockWidths,p=[],c=s.getPlaneCount(),x=n.Z.getPixelArrayConstructor(s.pixelType);if(l)for(var v=0,m=0;v<t.length;m+=f[v],v++){var d=t[v];if(a(d))for(var g=d.mask,y=0;y<h;y++)for(var w=0;w<f[v];w++)u[y*o+w+m]=null==g?255:g[y*d.width+w]}for(var k=0;k<c;k++){for(var A=new x(o*h),M=0,b=0;M<t.length;b+=f[M],M++){var C=t[M];if(a(C)){var U=C.pixels[k];if(null!=U)for(var T=0;T<h;T++)for(var B=0;B<f[M];B++)A[T*o+B+b]=U[T*C.width+B]}}p.push(A)}var P=new n.Z({width:o,height:h,mask:u,pixels:p,pixelType:s.pixelType});return P.updateStatistics(),P}function w(t,e,i){if(!a(t))return null;var r=t.width,n=t.height,s=e.x,l=e.y,o=i.width+s,h=i.height+l;if(s<0||l<0||o>r||h>n)return t;if(0===s&&0===l&&o===r&&h===n)return t;t.mask||(t.mask=new Uint8Array(r*n));for(var u=t.mask,f=0;f<n;f++)for(var p=f*r,c=0;c<r;c++)u[p+c]=f<l||f>=h||c<s||c>=o?0:1;return t.updateStatistics(),t}function k(t){if(!a(t))return null;for(var e=t.clone(),i=t.width,r=t.height,n=t.pixels,s=t.mask,l=n[0],o=e.pixels[0],h=2;h<r-1;h++){for(var u=new Map,f=h-2;f<h+2;f++)for(var p=0;p<4;p++){var c=f*i+p;b(u,l[c],s?s[c]:1)}o[h*i]=A(u),o[h*i+1]=o[h*i+2]=o[h*i];for(var x=3;x<i-1;x++){var v=(h-2)*i+x+1;b(u,l[v],s?s[v]:1),b(u,l[v=(h-1)*i+x+1],s?s[v]:1),b(u,l[v=h*i+x+1],s?s[v]:1),b(u,l[v=(h+1)*i+x+1],s?s[v]:1),M(u,l[v=(h-2)*i+x-3],s?s[v]:1),M(u,l[v=(h-1)*i+x-3],s?s[v]:1),M(u,l[v=h*i+x-3],s?s[v]:1),M(u,l[v=(h+1)*i+x-3],s?s[v]:1),o[h*i+x]=A(u)}o[h*i+x+1]=o[h*i+x]}for(var m=0;m<i;m++)o[m]=o[i+m]=o[2*i+m],o[(r-1)*i+m]=o[(r-2)*i+m];return e.updateStatistics(),e}function A(t){if(0===t.size)return 0;for(var e=0,i=-1,r=0,n=t.keys(),a=n.next();!a.done;)(r=t.get(a.value))>e&&(i=a.value,e=r),a=n.next();return i}function M(t,e,i){if(0!==i){var r=t.get(e);1===r?t.delete(e):t.set(e,r-1)}}function b(t,e,i){0!==i&&t.set(e,t.has(e)?t.get(e)+1:1)}function C(t,e,i){var r=e.x,s=e.y,l=i.width,o=i.height;if(0===r&&0===s&&o===t.height&&l===t.width)return t;var h=t.width,u=t.height,f=Math.max(0,s),p=Math.max(0,r),c=Math.min(r+l,h),x=Math.min(s+o,u);if(c<0||x<0||!a(t))return null;r=Math.max(0,-r),s=Math.max(0,-s);for(var v=t.pixels,m=t.mask,d=l*o,g=v.length,y=[],w=0;w<g;w++){for(var k=v[w],A=n.Z.createEmptyBand(t.pixelType,d),M=f;M<x;M++)for(var b=M*h,C=(M+s-f)*l+r,U=p;U<c;U++)A[C++]=k[b+U];y.push(A)}for(var T=new Uint8Array(d),B=f;B<x;B++)for(var P=B*h,_=(B+s-f)*l+r,S=p;S<c;S++)T[_++]=m?m[P+S]:1;var Z=new n.Z({width:i.width,height:i.height,pixelType:t.pixelType,pixels:y,mask:T});return Z.updateStatistics(),Z}function U(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!a(t))return null;for(var i=t.pixels,r=t.width,s=t.height,l=t.mask,o=t.pixelType,h=[],u=Math.round(r/2),f=Math.round(s/2),p=s-1,c=r-1,x=0;x<i.length;x++){for(var v=i[x],m=n.Z.createEmptyBand(o,u*f),d=0,g=0;g<s;g+=2)for(var y=0;y<r;y+=2){var w=v[g*r+y];if(e){var k=y===c?w:v[g*r+y+1],A=g===p?w:v[g*r+y+r],M=y===c?A:g===p?k:v[g*r+y+r+1];m[d++]=(w+k+A+M)/4}else m[d++]=w}h.push(m)}var b=null;if(l){b=new Uint8Array(u*f);for(var C=0,U=0;U<s;U+=2)for(var T=0;T<r;T+=2){var B=l[U*r+T];if(e){var P=T===c?B:l[U*r+T+1],_=U===p?B:l[U*r+T+r],S=T===c?_:U===p?P:l[U*r+T+r+1];b[C++]=B*P*_*S?1:0}else b[C++]=B}}return new n.Z({width:u,height:f,pixelType:o,pixels:h,mask:b})}function T(t,e,i){if(!a(t))return null;for(var r=e.width,n=e.height,s=t.width,l=t.height,o=new Map,h={x:0,y:0},u=null==i?1:1+i,f=t,p=0;p<u;p++){for(var c=Math.ceil(s/r),x=Math.ceil(l/n),v=0;v<x;v++){h.y=v*n;for(var m=0;m<c;m++){h.x=m*r;var d=C(f,h,e);o.set("".concat(p,"/").concat(v,"/").concat(m),d)}}p<u-1&&(f=U(f)),s=Math.round(s/2),l=Math.round(l/2)}return o}function B(t,e,i,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"nearest";if(!a(t))return null;"majority"===s&&(t=k(t));for(var l,o,h,u,f,p,c,x=t,v=x.pixels,m=x.mask,d=x.pixelType,g=t.width,y=t.height,w=n.Z.getPixelArrayConstructor(d),A=v.length,M=e.width,b=e.height,C=r.cols,U=r.rows,T=Math.ceil(M/C-.1/C),B=Math.ceil(b/U-.1/U),P=!1,_=0;_<i.length;_+=3)-1===i[_]&&-1===i[_+1]&&-1===i[_+2]&&(P=!0);for(var S,Z,F=T*C,G=F*B*U,I=new Float32Array(G),O=new Float32Array(G),R=0,V="majority"===s?0:.5,j=0;j<B;j++)for(var W=0;W<T;W++){o=i[l=12*(j*T+W)],h=i[l+1],u=i[l+2],f=i[l+3],p=i[l+4],c=i[l+5];for(var z=0;z<U;z++){R=(j*U+z)*F+W*C,Z=(z+.5)/U;for(var E=0;E<z;E++)S=(E+.5)/C,I[R+E]=Math.round((o*S+h*Z+u)*g-V),O[R+E]=Math.round((f*S+p*Z+c)*y-V)}o=i[l+=6],h=i[l+1],u=i[l+2],f=i[l+3],p=i[l+4],c=i[l+5];for(var q=0;q<U;q++){R=(j*U+q)*F+W*C,Z=(q+.5)/U;for(var X=q;X<C;X++)S=(X+.5)/C,I[R+X]=Math.round((o*S+h*Z+u)*g-V),O[R+X]=Math.round((f*S+p*Z+c)*y-V)}}for(var D,L=function(t,e){for(var i=0;i<b;i++){l=i*F;for(var r=0;r<M;r++)I[l]<0||O[l]<0?t[i*M+r]=0:t[i*M+r]=e[I[l]+O[l]*g],l++}},N=[],H=0;H<A;H++)L(D=new w(M*b),v[H]),N.push(D);var J=new n.Z({width:M,height:b,pixelType:d,pixels:N});if(m)J.mask=new Uint8Array(M*b),L(J.mask,m);else if(P){J.mask=new Uint8Array(M*b);for(var K=0;K<M*b;K++)J.mask[K]=I[K]<0||O[K]<0?0:1}return J.updateStatistics(),J}}}]);
//# sourceMappingURL=7314.a578472b.chunk.js.map