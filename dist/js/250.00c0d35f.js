"use strict";(self["webpackChunkvue_flower"]=self["webpackChunkvue_flower"]||[]).push([[250],{7483:function(t,e,s){function l(t){return{all:t=t||new Map,on:function(e,s){var l=t.get(e);l?l.push(s):t.set(e,[s])},off:function(e,s){var l=t.get(e);l&&(s?l.splice(l.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var l=t.get(e);l&&l.slice().map((function(t){t(s)})),(l=t.get("*"))&&l.slice().map((function(t){t(e,s)}))}}}s.d(e,{A:function(){return r}});const n=l();var r=n},1250:function(t,e,s){s.r(e),s.d(e,{default:function(){return S}});var l=s(641),n=s(3751),r=s(33);const d={style:{"min-height":"calc(100vh - 72px - 57.6px)"}},u={class:"container-fluid"},a={class:"container-fluid p-3"},o={class:"row"},c=(0,l.Fv)('<div class="col d-flex flex-column flex-md-row justify-content-center align-items-center px-1 px-md-0"><button type="button" class="btn bg-success text-white btn-sm rounded-pill" style="width:2rem;height:2rem;"> 1 </button><p class="ms-md-2 my-2 my-md-auto text-success text-nowrap">訂購資料</p></div><span class="bg-success w-25 rounded my-auto mx-0 mx-md-3 col" style="height:0.2rem;"></span><div class="col d-flex flex-column flex-md-row justify-content-center align-items-center px-1 px-md-0"><button type="button" class="btn bg-success text-white btn-sm rounded-pill" style="width:2rem;height:2rem;"> 2 </button><p class="ms-md-2 my-2 my-md-auto text-success text-nowrap">確認付款</p></div>',3),i={key:0,class:"bg-white w-25 rounded my-auto mx-0 mx-md-3 col",style:{height:"0.2rem"}},m={key:1,class:"bg-success w-25 rounded my-auto mx-0 mx-md-3 col",style:{height:"0.2rem"}},p={class:"col d-flex flex-column flex-md-row justify-content-center align-items-center px-1 px-md-0"},h={key:0,type:"button",class:"btn bg-white text-black btn-sm rounded-pill",style:{width:"2rem",height:"2rem"}},k={key:1,type:"button",class:"btn bg-success text-white btn-sm rounded-pill",style:{width:"2rem",height:"2rem"}},y={key:2,class:"ms-md-2 my-2 my-md-auto text-black text-nowrap"},x={key:3,class:"ms-md-2 my-2 my-md-auto text-success text-nowrap"},b={class:"py-5 row justify-content-center container mx-auto"},f={class:"table align-middle"},L=(0,l.Lk)("thead",null,[(0,l.Lk)("th",null,"品名"),(0,l.Lk)("th",null,"數量"),(0,l.Lk)("th",null,"單價")],-1),v={class:"text-end"},g=(0,l.Lk)("td",{colspan:"2",class:"text-end"},"總計",-1),w={class:"text-end"},_={class:"table"},C=(0,l.Lk)("th",{width:"100"},"Email",-1),E=(0,l.Lk)("th",null,"姓名",-1),X=(0,l.Lk)("th",null,"收件人電話",-1),O=(0,l.Lk)("th",null,"收件人地址",-1),I=(0,l.Lk)("th",null,"付款狀態",-1),$={key:0},j={key:1,class:"text-success"},A={key:0,class:"text-end"},F=(0,l.Lk)("button",{type:"submit",class:"btn btn-navBack"},"確認付款去",-1),K=[F];function q(t,e,s,F,q,B){const D=(0,l.g2)("Loading");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(D,{active:q.isLoading},null,8,["active"]),(0,l.Lk)("div",d,[(0,l.Lk)("div",u,[(0,l.Lk)("div",a,[(0,l.Lk)("div",o,[c,q.order.is_paid?((0,l.uX)(),(0,l.CE)("span",m)):((0,l.uX)(),(0,l.CE)("span",i)),(0,l.Lk)("div",p,[q.order.is_paid?((0,l.uX)(),(0,l.CE)("button",k," 3 ")):((0,l.uX)(),(0,l.CE)("button",h," 3 ")),q.order.is_paid?((0,l.uX)(),(0,l.CE)("p",x,"完成訂單")):((0,l.uX)(),(0,l.CE)("p",y,"完成訂單"))])])])]),(0,l.Lk)("div",b,[(0,l.Lk)("form",{class:"col-md-6",onSubmit:e[0]||(e[0]=(0,n.D$)(((...t)=>B.payOrder&&B.payOrder(...t)),["prevent"]))},[(0,l.Lk)("table",f,[L,(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(q.order.products,(t=>((0,l.uX)(),(0,l.CE)("tr",{key:t.id},[(0,l.Lk)("td",null,(0,r.v_)(t.product.title),1),(0,l.Lk)("td",null,(0,r.v_)(t.qty)+"/"+(0,r.v_)(t.product.unit),1),(0,l.Lk)("td",v,(0,r.v_)(t.final_total),1)])))),128))]),(0,l.Lk)("tfoot",null,[(0,l.Lk)("tr",null,[g,(0,l.Lk)("td",w,(0,r.v_)(q.order.total),1)])])]),(0,l.Lk)("table",_,[(0,l.Lk)("tbody",null,[(0,l.Lk)("tr",null,[C,(0,l.Lk)("td",null,(0,r.v_)(q.order.user.email),1)]),(0,l.Lk)("tr",null,[E,(0,l.Lk)("td",null,(0,r.v_)(q.order.user.name),1)]),(0,l.Lk)("tr",null,[X,(0,l.Lk)("td",null,(0,r.v_)(q.order.user.tel),1)]),(0,l.Lk)("tr",null,[O,(0,l.Lk)("td",null,(0,r.v_)(q.order.user.address),1)]),(0,l.Lk)("tr",null,[I,(0,l.Lk)("td",null,[q.order.is_paid?((0,l.uX)(),(0,l.CE)("span",j,"付款完成")):((0,l.uX)(),(0,l.CE)("span",$,"尚未付款"))])])])]),!1===q.order.is_paid?((0,l.uX)(),(0,l.CE)("div",A,K)):(0,l.Q3)("",!0)],32)])])],64)}var B=s(7483),D={data(){return{order:{user:{}},orderId:"",isLoading:!1}},methods:{getOrder(){const t=`https://vue3-course-api.hexschool.io/api/vue-final-flower/order/${this.orderId}`;this.$http.get(t).then((t=>{t.data.success&&(this.order=t.data.order)})).catch((t=>{t.data.success||B.A.emit("push-message",{style:"danger",title:"取得訂單失敗"})}))},payOrder(){const t=`https://vue3-course-api.hexschool.io/api/vue-final-flower/pay/${this.orderId}`;this.$http.post(t).then((t=>{t.data.success&&this.getOrder()})).catch((t=>{t.data.success||B.A.emit("push-message",{style:"danger",title:"訂單付款失敗"})}))}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},M=s(6262);const Q=(0,M.A)(D,[["render",q]]);var S=Q}}]);
//# sourceMappingURL=250.00c0d35f.js.map