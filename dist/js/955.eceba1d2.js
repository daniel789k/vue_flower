"use strict";(self["webpackChunkvue_flower"]=self["webpackChunkvue_flower"]||[]).push([[955],{8775:function(t,e,s){s.d(e,{N:function(){return o}});s(4114);var i=s(5615);const o=(0,i.nY)("loveFlower",{state:()=>({loveF:[],loveTitle:[]}),getters:{getloveflower:({loveF:t})=>t,getTitle:({loveTitle:t})=>t},actions:{pushLoveFlower(t){const e=this.loveF.length;0===e?(this.loveF.push(t),this.loveTitle.push(t.title)):this.loveF.forEach(((s,i)=>{s.title===t.title?(this.loveF.splice(i,1),this.loveTitle.splice(i,1)):s.title!==t.title&&i===e-1&&(this.loveF.push(t),this.loveTitle.push(t.title))}))}}})},955:function(t,e,s){s.r(e),s.d(e,{default:function(){return P}});var i=s(641),o=s(3751),l=s(33);const a={class:"container pb-5 pt-md-5"},n={class:"row"},r={id:"navbar-example3",class:"navbar navbar-light bg-light flex-column align-items-stretch p-3 col-md-4 sticky-top h-100 bg-pageBack d-none d-md-block",style:{top:"57px"}},c=["href","onClick"],p=["href","onClick"],u={id:"navbar-example3",class:"navbar navbar-light bg-light p-3 sticky-top h-100 bg-pageBack d-md-none row",style:{top:"57px"}},d=["href","onClick"],h={"data-bs-spy":"scroll","data-bs-target":"#navbar-example3","data-bs-offset":"0",tabindex:"0",class:"col-md-8"},g=["id"],v=["id"],k={class:"row row-cols-2 row-cols-md-3 g-4"},m={key:0,class:"col mb-2"},b={class:"card h-100 position-relative border-0",style:{overflow:"hidden"}},f=(0,i.Lk)("div",{class:"position-absolute top-0 start-100 bg-white",style:{width:"60px",height:"60px",transform:"translate(-50%,-50%) rotate(45deg)"}},null,-1),C=["onClick"],y=["onClick"],L=["src"],w={class:"card-body bg-pageBack d-flex flex-column justify-content-between"},x={class:"card-title"},$={key:0,class:"h5"},E={key:1,class:"h6"},F={key:2,class:"h5"},I={class:"btn-group btn-group-sm"},X=["onClick"],_=["disabled","onClick"],T={key:0,class:"spinner-grow text-mainColor spinner-grow-sm",role:"status"},K=(0,i.Lk)("span",{class:"visually-hidden"},"Loading...",-1),j=[K];function O(t,e,s,K,O,Q){const V=(0,i.g2)("UserLoading");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(V,{active:O.isLoading},null,8,["active"]),(0,i.Lk)("section",a,[(0,i.Lk)("div",n,[(0,i.Lk)("nav",r,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(O.flowerType,((t,e)=>((0,i.uX)(),(0,i.CE)("nav",{class:"nav nav-pills flex-md-column",key:t+e},[(0,i.Lk)("a",{class:"nav-link text-dark",href:`#item-${e+1}`,onClick:(0,o.D$)((t=>Q.scrollIntoView(`item-${e+1}`)),["prevent"])},(0,l.v_)(Object.keys(t)[0]),9,c),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(Object.values(t)[0],((t,s)=>((0,i.uX)(),(0,i.CE)("nav",{class:"flex-column nav nav-pills",key:s},[(0,i.Lk)("a",{class:"nav-link ms-3 my-1 btn btn-one",href:`#item-${e+1}-${s+1}`,onClick:(0,o.D$)((t=>Q.scrollIntoView(`item-${e+1}-${s+1}`)),["prevent"])},[(0,i.Lk)("span",null,(0,l.v_)(t),1)],8,p)])))),128))])))),128))]),(0,i.Lk)("nav",u,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(O.flowerType,((t,e)=>((0,i.uX)(),(0,i.CE)(i.FK,{key:t+e},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(Object.values(t)[0],((t,s)=>((0,i.uX)(),(0,i.CE)("nav",{class:"nav nav-pills col-4",key:s},[(0,i.Lk)("a",{class:"nav-link ms-3 my-1 btn btn-one",href:`#item-${e+1}-${s+1}`,onClick:(0,o.D$)((t=>Q.scrollIntoView(`item-${e+1}-${s+1}`)),["prevent"])},[(0,i.Lk)("span",null,(0,l.v_)(t),1)],8,d)])))),128))],64)))),128))]),(0,i.Lk)("div",h,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(O.flowerType,((e,s)=>((0,i.uX)(),(0,i.CE)("div",{key:e+s},[(0,i.Lk)("h4",{style:{"padding-top":"56px","margin-top":"-56px"},id:`item-${s+1}`},(0,l.v_)(Object.keys(e)[0]),9,g),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(Object.values(e)[0],((e,o)=>((0,i.uX)(),(0,i.CE)("div",{key:o},[(0,i.Lk)("h5",{style:{"padding-top":"56px","margin-top":"-56px"},id:`item-${s+1}-${o+1}`},(0,l.v_)(e),9,v),(0,i.Lk)("div",k,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(O.products,(s=>((0,i.uX)(),(0,i.CE)(i.FK,{key:s.id},[s.category.includes(`${e}`)?((0,i.uX)(),(0,i.CE)("div",m,[(0,i.Lk)("div",b,[f,t.getTitle.includes(s.title)?((0,i.uX)(),(0,i.CE)("i",{key:0,class:"bi bi-heart-fill text-danger position-absolute",style:{top:"2px",right:"5px",cursor:"pointer"},onClick:e=>(Q.changeHeart(e),t.pushLoveFlower(s))},null,8,C)):((0,i.uX)(),(0,i.CE)("i",{key:1,class:"bi bi-heart position-absolute",style:{top:"2px",right:"5px",cursor:"pointer"},onClick:e=>(Q.changeHeart(e),t.pushLoveFlower(s))},null,8,y)),(0,i.Lk)("img",{src:s.imageUrl,class:"card-img-top",alt:"商品圖片",style:{height:"200px","object-fit":"cover"}},null,8,L),(0,i.Lk)("div",w,[(0,i.Lk)("h5",x,(0,l.v_)(s.title),1),s.price?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",$,(0,l.v_)(s.origin_price)+" 元",1)),s.price!==s.origin_price?((0,i.uX)(),(0,i.CE)("del",E,"NT$ "+(0,l.v_)(s.origin_price),1)):(0,i.Q3)("",!0),s.price?((0,i.uX)(),(0,i.CE)("div",F,"NT$ "+(0,l.v_)(s.price)+" 元",1)):(0,i.Q3)("",!0),(0,i.Lk)("div",I,[(0,i.Lk)("button",{type:"button",class:"btn btn-outline-secondary",onClick:t=>Q.getProduct(s.id)}," 查看更多 ",8,X),(0,i.Lk)("button",{type:"button",class:"btn btn-outline-mainColor",disabled:O.status.loadingItem===s.id,onClick:t=>Q.addCart(s.id)},[O.status.loadingItem===s.id?((0,i.uX)(),(0,i.CE)("div",T,j)):(0,i.Q3)("",!0),(0,i.eW)(" 加到購物車 ")],8,_)])])])])):(0,i.Q3)("",!0)],64)))),128))])])))),128))])))),128))])])])],64)}s(4114);var Q=s(8775),V=s(5615),B={data(){return{products:[],product:{},status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{},coupon_code:"",isLoading:!1,flowerType:[{"鮮花花束":["浪漫玫瑰花束","繽紛混合花束"]},{"花藝設計":["婚禮花藝","企業花藝"]},{"盆栽與多肉植物":["綠色盆栽","迷你多肉植物"]}],loveFlower:[]}},inject:["$httpMessageState"],methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/vue-final-flower/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.products=t.data.products,this.isLoading=!1}))},getProduct(t){this.$router.push(`/product/${t}`)},getCart(){const t="https://vue3-course-api.hexschool.io/api/vue-final-flower/cart";this.isLoading=!0,this.$http.get(t).then((t=>{this.cart=t.data.data,this.isLoading=!1}))},addCart(t){const e="https://vue3-course-api.hexschool.io/api/vue-final-flower/cart";this.status.loadingItem=t;const s={product_id:t,qty:1};this.$http.post(e,{data:s}).then((t=>{this.status.loadingItem="",this.getCart()}))},updateCart(t){const e=`https://vue3-course-api.hexschool.io/api/vue-final-flower/cart/${t.id}`;this.isLoading=!0,this.status.loadingItem=t.id;const s={product_id:t.product_id,qty:t.qty};this.$http.put(e,{data:s}).then((t=>{this.status.loadingItem="",this.getCart()}))},addCouponCode(){const t="https://vue3-course-api.hexschool.io/api/vue-final-flower/coupon",e={code:this.coupon_code};this.isLoading=!0,this.$http.post(t,{data:e}).then((t=>{this.$httpMessageState(t,"加入優惠券"),this.getCart(),this.isLoading=!1}))},removeCartItem(t){this.status.loadingItem=t;const e=`https://vue3-course-api.hexschool.io/api/vue-final-flower/cart/${t}`;this.isLoading=!0,this.$http.delete(e).then((t=>{this.$httpMessageState(t,"移除購物車品項"),this.status.loadingItem="",this.getCart(),this.isLoading=!1}))},createOrder(){const t="https://vue3-course-api.hexschool.io/api/vue-final-flower/order",e=this.form;this.$http.post(t,{data:e}).then((t=>{}))},scrollIntoView(t){document.getElementById(t).scrollIntoView()},changeHeart:t=>{t.target.classList.toggle("bi-heart"),t.target.classList.toggle("bi-heart-fill"),t.target.classList.toggle("text-danger")}},computed:{...(0,V.aH)(Q.N,["pushLoveFlower","getloveflower","getTitle"])},created(){this.getProducts(),this.getCart()}},H=s(6262);const N=(0,H.A)(B,[["render",O]]);var P=N}}]);
//# sourceMappingURL=955.eceba1d2.js.map