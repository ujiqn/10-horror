(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{491:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=n(5893),s=n(18),o=n(7757),a=n.n(o),r=n(2137),l=n(9669),c=n.n(l),u=n(7294),d=n(5022),_=n.n(d);function f(){var e=(0,u.useState)(!1),t=e[0],n=e[1],o=(0,u.useState)(null),l=o[0],d=o[1],f=(0,u.useState)([]),h=f[0],g=f[1],x=(0,u.useState)(""),b=x[0],v=x[1],m=(0,u.useState)("\u4e00\u90e8\u5c4b\u3060\u3051\u7570\u69d8\u306b\u5b89\u3044"),p=m[0],w=m[1],k=(0,u.useState)([]),y=k[0],j=k[1],E=(0,u.useRef)(null),S=(0,u.useRef)(null);return(0,u.useEffect)((function(){if(!t){(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={"X-API-KEY":"973afc71-353d-4807-8a9e-b518b44d77dc"},e.next=3,Promise.all([c().get("https://10moji.microcms.io/api/v1/novel",{headers:t}),c().get("https://10moji.microcms.io/api/v1/info",{headers:t})]).then((function(e){w(e[0].data.novel),j(e[1].data.contents.reverse())}));case 3:case"end":return e.stop()}}),e)})))();var e=new Image;e.onload=function(){n(!0),d(e)},e.src="./frame.png",[].slice.call(document.querySelectorAll("[data-ga]")).forEach((function(e){e.addEventListener("click",(function(){!function(e){window.gtag("event",String(e.dataset.ga))}(e)}))}));var i=S.current;setInterval((function(){g((0,s.Z)(i.innerText.substr(0,10)))}),100)}}),[t]),(0,u.useEffect)((function(){if(l){var e=E.current,t=e.getContext("2d"),n=document.createElement("canvas"),i=n.getContext("2d");n.width=1600,n.height=810,i.save(),i.fillStyle="#000",i.textAlign="center",i.textBaseline="middle",i.font="".concat(80,'px "Shippori Mincho"'),i.fillText((0,s.Z)(h).join("  "),n.width/2,n.height/2),i.restore(),e.width=800,e.height=450,t.save(),t.fillStyle="#eee",t.fillRect(0,0,e.width,e.height),t.drawImage(l,0,0,e.width,e.height),t.drawImage(n,0,e.height*((1-.9)/4)-16,e.width,e.height),t.restore(),v(e.toDataURL("image/png"))}}),[h]),(0,i.jsxs)("div",{className:_().index,style:{opacity:t?1:0},children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("canvas",{ref:E}),(0,i.jsx)("img",{src:b})]}),(0,i.jsx)("div",{ref:S,className:_().txt,contentEditable:!0,suppressContentEditableWarning:!0,children:p}),(0,i.jsx)("a",{id:"btn-download",className:"".concat(_().btn," ").concat(_()["btn-save"]),href:b,target:"_blank",children:"\u753b\u50cf\u3092\u4fdd\u5b58"}),(0,i.jsx)("div",{className:_().info,children:y.map((function(e,t){return function(e,t){return(0,i.jsxs)("div",{className:_().box,children:[(0,i.jsx)("h1",{children:e.title}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:e.html}})]},t)}(e,t)}))})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(491)}])},5022:function(e){e.exports={index:"styles_index__1wWVS",txt:"styles_txt__2PLt0",btn:"styles_btn__3-s30","btn-save":"styles_btn-save__1Muiy",box:"styles_box__2t3-4","book-box":"styles_book-box__KJ5F0","book-link":"styles_book-link__2-Ywj","book-link-img":"styles_book-link-img__3C_gT","book-link-btn":"styles_book-link-btn__IyLWo",logo:"styles_logo__3-eQe",info:"styles_info__2HnY5"}}},function(e){e.O(0,[774,351,275],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);