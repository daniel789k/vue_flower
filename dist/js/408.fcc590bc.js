"use strict";(self["webpackChunkvue_flower"]=self["webpackChunkvue_flower"]||[]).push([[408],{2408:function(t,e,l){l.r(e),l.d(e,{default:function(){return I}});var r=l(641),s=l(3751),n=l(33);const d={class:"py-5 row justify-content-center container"},o={class:"table align-middle"},u=(0,r.Lk)("thead",null,[(0,r.Lk)("th",null,"品名"),(0,r.Lk)("th",null,"數量"),(0,r.Lk)("th",null,"單價")],-1),a={class:"text-end"},i=(0,r.Lk)("td",{colspan:"2",class:"text-end"},"總計",-1),c={class:"text-end"},k={class:"table"},L=(0,r.Lk)("th",{width:"100"},"Email",-1),h=(0,r.Lk)("th",null,"姓名",-1),p=(0,r.Lk)("th",null,"收件人電話",-1),v=(0,r.Lk)("th",null,"收件人地址",-1),f=(0,r.Lk)("th",null,"付款狀態",-1),g={key:0},_={key:1,class:"text-success"},b={key:0,class:"text-end"},y=(0,r.Lk)("button",{class:"btn btn-danger"},"確認付款去",-1),m=[y];function w(t,e,l,y,w,C){const x=(0,r.g2)("Loading");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(x,{active:w.isLoading},null,8,["active"]),(0,r.Lk)("div",d,[(0,r.Lk)("form",{class:"col-md-6",onSubmit:e[0]||(e[0]=(0,s.D$)(((...t)=>C.payOrder&&C.payOrder(...t)),["prevent"]))},[(0,r.Lk)("table",o,[u,(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(w.order.products,(t=>((0,r.uX)(),(0,r.CE)("tr",{key:t.id},[(0,r.Lk)("td",null,(0,n.v_)(t.product.title),1),(0,r.Lk)("td",null,(0,n.v_)(t.qty)+"/"+(0,n.v_)(t.product.unit),1),(0,r.Lk)("td",a,(0,n.v_)(t.final_total),1)])))),128))]),(0,r.Lk)("tfoot",null,[(0,r.Lk)("tr",null,[i,(0,r.Lk)("td",c,(0,n.v_)(w.order.total),1)])])]),(0,r.Lk)("table",k,[(0,r.Lk)("tbody",null,[(0,r.Lk)("tr",null,[L,(0,r.Lk)("td",null,(0,n.v_)(w.order.user.email),1)]),(0,r.Lk)("tr",null,[h,(0,r.Lk)("td",null,(0,n.v_)(w.order.user.name),1)]),(0,r.Lk)("tr",null,[p,(0,r.Lk)("td",null,(0,n.v_)(w.order.user.tel),1)]),(0,r.Lk)("tr",null,[v,(0,r.Lk)("td",null,(0,n.v_)(w.order.user.address),1)]),(0,r.Lk)("tr",null,[f,(0,r.Lk)("td",null,[w.order.is_paid?((0,r.uX)(),(0,r.CE)("span",_,"付款完成")):((0,r.uX)(),(0,r.CE)("span",g,"尚未付款"))])])])]),!1===w.order.is_paid?((0,r.uX)(),(0,r.CE)("div",b,m)):(0,r.Q3)("",!0)],32)])],64)}var C={data(){return{order:{user:{}},orderId:"",isLoading:!1}},methods:{getOrder(){const t=`https://vue3-course-api.hexschool.io/api/vue-final-flower/order/${this.orderId}`;this.$http.get(t).then((t=>{console.log(t),t.data.success&&(this.order=t.data.order,console.log(this.order))}))},payOrder(){const t=`https://vue3-course-api.hexschool.io/api/vue-final-flower/pay/${this.orderId}`;this.$http.post(t).then((t=>{console.log(t),t.data.success&&this.getOrder()}))}},created(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()}},x=l(6262);const E=(0,x.A)(C,[["render",w]]);var I=E}}]);
//# sourceMappingURL=408.fcc590bc.js.map