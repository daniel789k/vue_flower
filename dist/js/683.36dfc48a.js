"use strict";(self["webpackChunkvue_flower"]=self["webpackChunkvue_flower"]||[]).push([[683],{1683:function(t,e,s){s.r(e),s.d(e,{default:function(){return V}});var a=s(641),i=s(3751),o=s(33);const l={class:"container pb-5 pt-md-5"},n={class:"row"},c={id:"navbar-example3",class:"navbar navbar-light bg-light flex-column align-items-stretch p-3 col-md-4 sticky-top h-100 bg-pageBack d-none d-md-block",style:{top:"57px"}},r=["href","onClick"],d=["href","onClick"],u={id:"navbar-example3",class:"navbar navbar-light bg-light p-3 sticky-top h-100 bg-pageBack d-md-none row",style:{top:"57px"}},p=["href","onClick"],h={"data-bs-spy":"scroll","data-bs-target":"#navbar-example3","data-bs-offset":"0",tabindex:"0",class:"col-md-8"},g=["id"],v=["id"],k={class:"row row-cols-2 row-cols-md-3 g-4"},m={key:0,class:"col mb-2"},b={class:"card h-100"},C=["src"],f={class:"card-body"},y={class:"card-title"},L={key:0,class:"h5"},$={key:1,class:"h6"},w={key:2,class:"h5"},x={class:"btn-group btn-group-sm"},I=["onClick"],E=["disabled","onClick"],X={key:0,class:"spinner-grow text-danger spinner-grow-sm",role:"status"},_=(0,a.Lk)("span",{class:"visually-hidden"},"Loading...",-1),F=[_];function K(t,e,s,_,K,j){const O=(0,a.g2)("UserLoading");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(O,{active:K.isLoading},null,8,["active"]),(0,a.Lk)("section",l,[(0,a.Lk)("div",n,[(0,a.Lk)("nav",c,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(K.flowerType,((t,e)=>((0,a.uX)(),(0,a.CE)("nav",{class:"nav nav-pills flex-md-column",key:t+e},[(0,a.Lk)("a",{class:"nav-link text-dark",href:`#item-${e+1}`,onClick:(0,i.D$)((t=>j.scrollIntoView(`item-${e+1}`)),["prevent"])},(0,o.v_)(Object.keys(t)[0]),9,r),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(Object.values(t)[0],((t,s)=>((0,a.uX)(),(0,a.CE)("nav",{class:"flex-column nav nav-pills",key:s},[(0,a.Lk)("a",{class:"nav-link ms-3 my-1 btn btn-one",href:`#item-${e+1}-${s+1}`,onClick:(0,i.D$)((t=>j.scrollIntoView(`item-${e+1}-${s+1}`)),["prevent"])},[(0,a.Lk)("span",null,(0,o.v_)(t),1)],8,d)])))),128))])))),128))]),(0,a.Lk)("nav",u,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(K.flowerType,((t,e)=>((0,a.uX)(),(0,a.CE)(a.FK,{key:t+e},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(Object.values(t)[0],((t,s)=>((0,a.uX)(),(0,a.CE)("nav",{class:"nav nav-pills col-4",key:s},[(0,a.Lk)("a",{class:"nav-link ms-3 my-1 btn btn-one",href:`#item-${e+1}-${s+1}`,onClick:(0,i.D$)((t=>j.scrollIntoView(`item-${e+1}-${s+1}`)),["prevent"])},[(0,a.Lk)("span",null,(0,o.v_)(t),1)],8,p)])))),128))],64)))),128))]),(0,a.Lk)("div",h,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(K.flowerType,((t,e)=>((0,a.uX)(),(0,a.CE)("div",{key:t+e},[(0,a.Lk)("h4",{style:{"padding-top":"56px","margin-top":"-56px"},id:`item-${e+1}`},(0,o.v_)(Object.keys(t)[0]),9,g),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(Object.values(t)[0],((t,s)=>((0,a.uX)(),(0,a.CE)("div",{key:s},[(0,a.Lk)("h5",{style:{"padding-top":"56px","margin-top":"-56px"},id:`item-${e+1}-${s+1}`},(0,o.v_)(t),9,v),(0,a.Lk)("div",k,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(K.products,(e=>((0,a.uX)(),(0,a.CE)(a.FK,{key:e.id},[e.category.includes(`${t}`)?((0,a.uX)(),(0,a.CE)("div",m,[(0,a.Lk)("div",b,[(0,a.Lk)("img",{src:e.imageUrl,class:"card-img-top",alt:"",style:{height:"200px","object-fit":"cover"}},null,8,C),(0,a.Lk)("div",f,[(0,a.Lk)("h5",y,(0,o.v_)(e.title),1),e.price?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",L,(0,o.v_)(e.origin_price)+" 元",1)),e.price?((0,a.uX)(),(0,a.CE)("del",$,"原價 "+(0,o.v_)(e.origin_price)+" 元",1)):(0,a.Q3)("",!0),e.price?((0,a.uX)(),(0,a.CE)("div",w,"現在只要 "+(0,o.v_)(e.price)+" 元",1)):(0,a.Q3)("",!0),(0,a.Lk)("div",x,[(0,a.Lk)("button",{type:"button",class:"btn btn-outline-secondary",onClick:t=>j.getProduct(e.id)}," 查看更多 ",8,I),(0,a.Lk)("button",{type:"button",class:"btn btn-outline-danger",disabled:this.status.loadingItem===e.id,onClick:t=>j.addCart(e.id)},[this.status.loadingItem===e.id?((0,a.uX)(),(0,a.CE)("div",X,F)):(0,a.Q3)("",!0),(0,a.eW)(" 加到購物車 ")],8,E)])])])])):(0,a.Q3)("",!0)],64)))),128))])])))),128))])))),128))])])])],64)}s(4114);var j={data(){return{products:[],product:{},status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{},coupon_code:"",isLoading:!1,flowerType:[{"鮮花花束":["浪漫玫瑰花束","繽紛混合花束"]},{"花藝設計":["婚禮花藝","企業花藝"]},{"盆栽與多肉植物":["綠色盆栽","迷你多肉植物"]}]}},inject:["$httpMessageState"],methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/vue-final-flower/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.products=t.data.products,console.log("products:",t),this.isLoading=!1}))},getProduct(t){this.$router.push(`/product/${t}`)},getCart(){const t="https://vue3-course-api.hexschool.io/api/vue-final-flower/cart";this.isLoading=!0,this.$http.get(t).then((t=>{console.log(t),this.cart=t.data.data,this.isLoading=!1}))},addCart(t){const e="https://vue3-course-api.hexschool.io/api/vue-final-flower/cart";this.status.loadingItem=t;const s={product_id:t,qty:1};this.$http.post(e,{data:s}).then((t=>{this.status.loadingItem="",console.log(t),this.getCart()}))},updateCart(t){const e=`https://vue3-course-api.hexschool.io/api/vue-final-flower/cart/${t.id}`;this.isLoading=!0,this.status.loadingItem=t.id;const s={product_id:t.product_id,qty:t.qty};this.$http.put(e,{data:s}).then((t=>{console.log(t),this.status.loadingItem="",this.getCart()}))},addCouponCode(){const t="https://vue3-course-api.hexschool.io/api/vue-final-flower/coupon",e={code:this.coupon_code};this.isLoading=!0,this.$http.post(t,{data:e}).then((t=>{this.$httpMessageState(t,"加入優惠券"),this.getCart(),this.isLoading=!1}))},removeCartItem(t){this.status.loadingItem=t;const e=`https://vue3-course-api.hexschool.io/api/vue-final-flower/cart/${t}`;this.isLoading=!0,this.$http.delete(e).then((t=>{this.$httpMessageState(t,"移除購物車品項"),this.status.loadingItem="",this.getCart(),this.isLoading=!1}))},createOrder(){const t="https://vue3-course-api.hexschool.io/api/vue-final-flower/order",e=this.form;this.$http.post(t,{data:e}).then((t=>{console.log(t)}))},scrollIntoView(t){document.getElementById(t).scrollIntoView()}},created(){this.getProducts(),this.getCart()}},O=s(6262);const Q=(0,O.A)(j,[["render",K]]);var V=Q}}]);
//# sourceMappingURL=683.36dfc48a.js.map