(function(){"use strict";var e={8849:function(e,n,t){var r=t(3751),o=t(4335),i=t(1021),a=t(6893),u=t(5261),c=t(3505),l=t(7013),f=t(1066),d=t(641);function s(e,n){const t=(0,d.g2)("router-view");return(0,d.uX)(),(0,d.Wv)(t)}var p=t(6262);const h={},m=(0,p.A)(h,[["render",s]]);var b=m,v=t(5220);const g=[{path:"/",name:"home",component:()=>Promise.all([t.e(114),t.e(606),t.e(594)]).then(t.bind(t,7311)),children:[{path:"/",component:()=>Promise.all([t.e(718),t.e(611)]).then(t.bind(t,3611))},{path:"products",component:()=>Promise.all([t.e(114),t.e(307)]).then(t.bind(t,9307))},{path:"product/:productId",component:()=>Promise.all([t.e(114),t.e(718),t.e(463)]).then(t.bind(t,6463))},{path:"checkform",component:()=>Promise.all([t.e(114),t.e(902)]).then(t.bind(t,6902))},{path:"orders",component:()=>Promise.all([t.e(114),t.e(606),t.e(765),t.e(337)]).then(t.bind(t,337))},{path:"checkout/:orderId",component:()=>t.e(918).then(t.bind(t,3918))},{path:"user/login",component:()=>Promise.all([t.e(114),t.e(606),t.e(814)]).then(t.bind(t,3814))}]},{path:"/login",name:"login",component:()=>Promise.all([t.e(114),t.e(606),t.e(444)]).then(t.bind(t,5444))},{path:"/back",name:"back",component:()=>Promise.all([t.e(114),t.e(606),t.e(594)]).then(t.bind(t,4826)),children:[{path:"products",component:()=>Promise.all([t.e(114),t.e(606),t.e(765),t.e(362)]).then(t.bind(t,9362))},{path:"coupons",component:()=>Promise.all([t.e(606),t.e(765),t.e(352)]).then(t.bind(t,4352))},{path:"orders",component:()=>Promise.all([t.e(606),t.e(765),t.e(666)]).then(t.bind(t,3666))}]},{path:"/about",name:"about",component:()=>Promise.all([t.e(114),t.e(606),t.e(594)]).then(t.bind(t,603))}],y=(0,v.aE)({history:(0,v.Bt)(),routes:g});var w=y;function k(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function P(e){const n=new Date(1e3*e);return n.toLocaleDateString()}var O=t(4042),E=t.n(O);E().init({duration:1e3,easing:"ease-in-out-back"});const j=(0,r.Ef)(b);j.config.globalProperties.$filters={currency:k,date:P},Object.keys(c).forEach((e=>{(0,u.Km)(e,c[e])})),(0,u.jK)({generateMessage:(0,l.kg)({zh_TW:f}),validateOnInput:!0}),(0,l.xS)("zh_TW"),j.use(i.A,o.A),j.use(w),j.component("UserLoading",a.A),j.component("UserForm",u.lV),j.component("UserField",u.D0),j.component("ErrorMessage",u.Kw),j.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(594===e?"about":e)+"."+{114:"583e8eb0",307:"9f5af809",337:"fba1efc3",352:"94ff8bb2",362:"bbc745ed",444:"68810165",463:"49ddb6a1",594:"3719c127",606:"7d4ae20c",611:"85b884a3",666:"cd88bf71",718:"d3181cb3",765:"de8f5dea",814:"222fe72b",902:"4a17313e",918:"425d256c"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{307:"55d00d7b",463:"39b309ed",611:"73f905cf"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue_flower:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var s=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/vue_flower/dist/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",t.nc&&(a.nonce=t.nc);var u=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var r=t&&t.type,u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=u,a.parentNode&&a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=u,a.href=n,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={307:1,463:1,611:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var f=c(t)}for(n&&n(r);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},r=self["webpackChunkvue_flower"]=self["webpackChunkvue_flower"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(8849)}));r=t.O(r)})();
//# sourceMappingURL=app.e800a3c9.js.map