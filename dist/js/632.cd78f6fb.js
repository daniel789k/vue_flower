(self["webpackChunkvue_flower"]=self["webpackChunkvue_flower"]||[]).push([[632],{653:function(e,t,s){
/*!
  * Bootstrap toast.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n(s(9011),s(7956),s(8248),s(4035))})(0,(function(e,t,s,n){"use strict";const i="toast",o="bs.toast",a=`.${o}`,r=`mouseover${a}`,c=`mouseout${a}`,u=`focusin${a}`,l=`focusout${a}`,h=`hide${a}`,d=`hidden${a}`,m=`show${a}`,p=`shown${a}`,f="fade",_="hide",g="show",b="showing",v={animation:"boolean",autohide:"boolean",delay:"number"},k={animation:!0,autohide:!0,delay:5e3};class y extends e{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return k}static get DefaultType(){return v}static get NAME(){return i}show(){const e=t.trigger(this._element,m);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(f);const s=()=>{this._element.classList.remove(b),t.trigger(this._element,p),this._maybeScheduleHide()};this._element.classList.remove(_),n.reflow(this._element),this._element.classList.add(g,b),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const e=t.trigger(this._element,h);if(e.defaultPrevented)return;const s=()=>{this._element.classList.add(_),this._element.classList.remove(b,g),t.trigger(this._element,d)};this._element.classList.add(b),this._queueCallback(s,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(g),super.dispose()}isShown(){return this._element.classList.contains(g)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){t.on(this._element,r,(e=>this._onInteraction(e,!0))),t.on(this._element,c,(e=>this._onInteraction(e,!1))),t.on(this._element,u,(e=>this._onInteraction(e,!0))),t.on(this._element,l,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=y.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}return s.enableDismissTrigger(y),n.defineJQueryPlugin(y),y}))},7483:function(e,t,s){"use strict";function n(e){return{all:e=e||new Map,on:function(t,s){var n=e.get(t);n?n.push(s):e.set(t,[s])},off:function(t,s){var n=e.get(t);n&&(s?n.splice(n.indexOf(s)>>>0,1):e.set(t,[]))},emit:function(t,s){var n=e.get(t);n&&n.slice().map((function(e){e(s)})),(n=e.get("*"))&&n.slice().map((function(e){e(t,s)}))}}}s.d(t,{A:function(){return o}});const i=n();var o=i},1668:function(e,t,s){"use strict";s.d(t,{A:function(){return y}});var n=s(641);const i={class:"toast-container position-absolute pe-3 top-0 end-0"};function o(e,t,s,o,a,r){const c=(0,n.g2)("Toast");return(0,n.uX)(),(0,n.CE)("div",i,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.messages,((e,t)=>((0,n.uX)(),(0,n.Wv)(c,{key:t,msg:e},null,8,["msg"])))),128))])}s(4114);var a=s(33);const r={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},c={class:"toast-header"},u={class:"me-auto"},l=(0,n.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),h={key:0,class:"toast-body"};function d(e,t,s,i,o,d){return(0,n.uX)(),(0,n.CE)("div",r,[(0,n.Lk)("div",c,[(0,n.Lk)("span",{class:(0,a.C4)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,n.Lk)("strong",u,(0,a.v_)(s.msg.title),1),l]),s.msg.content?((0,n.uX)(),(0,n.CE)("div",h,(0,a.v_)(s.msg.content),1)):(0,n.Q3)("",!0)],512)}var m=s(653),p=s.n(m),f={props:["msg"],mounted(){const e=this.$refs.toast,t=new(p())(e,{delay:6e3});t.show()}},_=s(6262);const g=(0,_.A)(f,[["render",d]]);var b=g,v={components:{Toast:b},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(e=>{const{style:t="success",title:s,content:n}=e;this.messages.push({style:t,title:s,content:n})}))}};const k=(0,_.A)(v,[["render",o]]);var y=k},632:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var n=s(641),i=s(3751);const o={class:"container mt-5 mb-5"},a={class:"col-md-6"},r=(0,n.Lk)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),c={class:"mb-2"},u=(0,n.Lk)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),l={class:"mb-2"},h=(0,n.Lk)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),d=(0,n.Lk)("div",{class:"text-end mt-4"},[(0,n.Lk)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function m(e,t,s,m,p,f){const _=(0,n.g2)("ToastMessages"),g=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",o,[(0,n.Lk)("form",{class:"row justify-content-center",onSubmit:t[2]||(t[2]=(0,i.D$)(((...e)=>f.signIn&&f.signIn(...e)),["prevent"]))},[(0,n.Lk)("div",a,[r,(0,n.Lk)("div",c,[u,(0,n.bo)((0,n.Lk)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":t[0]||(t[0]=e=>p.user.username=e)},null,512),[[i.Jo,p.user.username]])]),(0,n.Lk)("div",l,[h,(0,n.bo)((0,n.Lk)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>p.user.password=e)},null,512),[[i.Jo,p.user.password]])]),d])],32)]),(0,n.bF)(_),(0,n.bF)(g)],64)}s(4114);var p=s(7483),f=s(1668),_={data(){return{user:{username:"",password:""}}},components:{ToastMessages:f.A},provide(){return{emitter:p.A}},methods:{signIn(){const e="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(e,this.user).then((e=>{if(e.data.success){const{token:t,expired:s}=e.data;document.cookie=`hexToken=${t}; expires=${new Date(s)}`,this.$router.push("/back/products")}else p.A.emit("push-message",{style:"danger",title:"帳號或密碼錯誤"})}))}},created(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e;const t="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(t,this.user).then((e=>{e.data.success&&this.$router.push("back/products")}))}},g=s(6262);const b=(0,g.A)(_,[["render",m]]);var v=b}}]);
//# sourceMappingURL=632.cd78f6fb.js.map