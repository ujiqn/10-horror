(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6086:function(t){"use strict";var e=Object.assign.bind(Object);t.exports=e,t.exports.default=t.exports},7485:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=n(5893);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=n(7294),a=n(5022),l=n.n(a);function u(){var t=(0,s.useState)(!1),e=t[0],n=t[1],o=(0,s.useState)(null),a=o[0],u=o[1],c=(0,s.useState)([]),f=c[0],d=c[1],_=(0,s.useState)(""),b=_[0],h=_[1],y=(0,s.useState)("\u4e00\u90e8\u5c4b\u3060\u3051\u7570\u69d8\u306b\u5b89\u3044"),g=y[0],p=(y[1],(0,s.useState)([])),x=(p[0],p[1],(0,s.useState)([])),m=(x[0],x[1],(0,s.useRef)(null)),v=(0,s.useRef)(null);return(0,s.useEffect)((function(){if(!e){var t=new Image;t.onload=function(){n(!0),u(t)},t.src="./frame.png";var r=v.current;setInterval((function(){d(i(r.innerText.substr(0,10)))}),100)}}),[e]),(0,s.useEffect)((function(){if(a){var t=m.current,e=t.getContext("2d"),n=document.createElement("canvas"),r=n.getContext("2d");n.width=1600,n.height=810,r.save(),r.fillStyle="#000",r.textAlign="center",r.textBaseline="middle",r.font="".concat(80,'px "Shippori Mincho"'),r.fillText(i(f).join("  "),n.width/2,n.height/2),r.restore(),t.width=800,t.height=450,e.save(),e.fillStyle="#eee",e.fillRect(0,0,t.width,t.height),e.drawImage(a,0,0,t.width,t.height),e.drawImage(n,0,t.height*((1-.9)/4)-16,t.width,t.height),e.restore(),h(t.toDataURL("image/png"))}}),[f]),(0,r.jsxs)("div",{className:l().index,style:{opacity:e?1:0},children:[(0,r.jsx)("canvas",{ref:m}),(0,r.jsx)("div",{ref:v,className:l().txt,contentEditable:!0,suppressContentEditableWarning:!0,children:g}),(0,r.jsx)("a",{id:"btn-download",className:"".concat(l().btn," ").concat(l()["btn-save"]),href:b,download:"10-horror",children:"\u753b\u50cf\u3092\u4fdd\u5b58"})]})}},5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7485)}])},5022:function(t){t.exports={index:"styles_index__1wWVS",txt:"styles_txt__2PLt0",btn:"styles_btn__3-s30","btn-save":"styles_btn-save__1Muiy",box:"styles_box__2t3-4","book-box":"styles_book-box__KJ5F0","book-link":"styles_book-link__2-Ywj","book-link-img":"styles_book-link-img__3C_gT","book-link-btn":"styles_book-link-btn__IyLWo",logo:"styles_logo__3-eQe"}}},function(t){t.O(0,[774],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);