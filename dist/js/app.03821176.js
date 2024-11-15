(function(){"use strict";var e={8849:function(e,n,t){var o=t(3751),r=t(4335),i=t(1021),a=t(6893),u=t(5261),c=t(3505),l=t(7013),d=t(1066),f=t(641);function s(e,n){const t=(0,f.g2)("router-view");return(0,f.uX)(),(0,f.Wv)(t)}var p=t(6262);const h={},m=(0,p.A)(h,[["render",s]]);var b=m,v=t(5220);const g=[{path:"/",name:"home",component:()=>Promise.all([t.e(114),t.e(606),t.e(594)]).then(t.bind(t,7551)),children:[{path:"/",component:()=>Promise.all([t.e(718),t.e(567)]).then(t.bind(t,2567))},{path:"products",component:()=>Promise.all([t.e(114),t.e(451)]).then(t.bind(t,4451))},{path:"product/:productId",component:()=>Promise.all([t.e(114),t.e(718),t.e(731)]).then(t.bind(t,5731))},{path:"loves",component:()=>Promise.all([t.e(114),t.e(687)]).then(t.bind(t,687))},{path:"checkform",component:()=>Promise.all([t.e(114),t.e(755)]).then(t.bind(t,8755))},{path:"orders",component:()=>Promise.all([t.e(114),t.e(606),t.e(765),t.e(337)]).then(t.bind(t,337))},{path:"checkout/:orderId",component:()=>t.e(918).then(t.bind(t,3918))},{path:"user/login",component:()=>Promise.all([t.e(114),t.e(606),t.e(814)]).then(t.bind(t,3814))}]},{path:"/login",name:"login",component:()=>Promise.all([t.e(114),t.e(606),t.e(444)]).then(t.bind(t,5444))},{path:"/back",name:"back",component:()=>Promise.all([t.e(114),t.e(606),t.e(594)]).then(t.bind(t,4826)),children:[{path:"products",component:()=>Promise.all([t.e(114),t.e(606),t.e(765),t.e(362)]).then(t.bind(t,9362))},{path:"coupons",component:()=>Promise.all([t.e(606),t.e(765),t.e(352)]).then(t.bind(t,4352))},{path:"orders",component:()=>Promise.all([t.e(606),t.e(765),t.e(666)]).then(t.bind(t,3666))}]},{path:"/about",name:"about",component:()=>Promise.all([t.e(114),t.e(606),t.e(594)]).then(t.bind(t,603))}],y=(0,v.aE)({history:(0,v.Bt)(),routes:g});var w=y;function k(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function P(e){const n=new Date(1e3*e);return n.toLocaleDateString()}var O=t(4042),E=t.n(O);E().init({duration:1e3,easing:"ease-in-out-back"});const j=(0,o.Ef)(b);j.config.globalProperties.$filters={currency:k,date:P},Object.keys(c).forEach((e=>{(0,u.Km)(e,c[e])})),(0,u.jK)({generateMessage:(0,l.kg)({zh_TW:d}),validateOnInput:!0}),(0,l.xS)("zh_TW"),j.use(i.A,r.A),j.use(w),j.component("UserLoading",a.A),j.component("UserForm",u.lV),j.component("UserField",u.D0),j.component("ErrorMessage",u.Kw),j.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(d--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(594===e?"about":e)+"."+{114:"583e8eb0",337:"fba1efc3",352:"94ff8bb2",362:"bbc745ed",444:"68810165",451:"59d778c7",567:"618e2231",594:"9ca87582",606:"7d4ae20c",666:"cd88bf71",687:"e785434e",718:"d3181cb3",731:"f806bbae",755:"686b2586",765:"de8f5dea",814:"222fe72b",918:"425d256c"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{451:"55d00d7b",567:"73f905cf",687:"55d00d7b",731:"39b309ed"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue_flower:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var f=l[d];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=o),e[o]=[r];var s=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/vue_flower/dist/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,o,r,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",t.nc&&(a.nonce=t.nc);var u=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var o=t&&t.type,u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=u,a.parentNode&&a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=u,a.href=n,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),u=t.p+a;if(n(a,u))return r();e(o,u,null,r,i)}))},r={524:0};t.f.miniCss=function(e,n){var t={451:1,567:1,687:1,731:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],u=o[1],c=o[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var d=c(t)}for(n&&n(o);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},o=self["webpackChunkvue_flower"]=self["webpackChunkvue_flower"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(8849)}));o=t.O(o)})();
//# sourceMappingURL=app.03821176.js.map