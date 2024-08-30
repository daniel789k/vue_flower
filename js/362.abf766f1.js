"use strict";(self["webpackChunkvue_flower"]=self["webpackChunkvue_flower"]||[]).push([[362],{1967:function(t,e,o){o.d(e,{A:function(){return T}});var l=o(6768),a=o(5130);const s={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},i={class:"modal-dialog modal-xl",role:"document"},c={class:"modal-content border-0"},d=(0,l.Lk)("div",{class:"modal-header bg-dark text-white"},[(0,l.Lk)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,l.Lk)("span",null,"新增產品")]),(0,l.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),n={class:"modal-body"},r={class:"row"},u={class:"col-sm-4"},p={class:"mb-3"},m=(0,l.Lk)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),h={class:"mb-3"},b=(0,l.Lk)("label",{for:"customFile",class:"form-label"},[(0,l.eW)("或 上傳圖片 "),(0,l.Lk)("i",{class:"fas fa-spinner fa-spin"})],-1),k=(0,l.Fv)('<img class="img-fluid" alt=""><div class="mt-5"><div class="mb-3 input-group"><input type="url" class="form-control form-control" placeholder="請輸入連結"><button type="button" class="btn btn-outline-danger"> 移除 </button></div><div><button class="btn btn-outline-primary btn-sm d-block w-100"> 新增圖片 </button></div></div>',2),g={class:"col-sm-8"},f={class:"mb-3"},L=(0,l.Lk)("label",{for:"title",class:"form-label"},"標題",-1),v={class:"row gx-2"},P={class:"mb-3 col-md-6"},y=(0,l.Lk)("label",{for:"category",class:"form-label"},"分類",-1),x={class:"mb-3 col-md-6"},$=(0,l.Lk)("label",{for:"price",class:"form-label"},"單位",-1),w={class:"row gx-2"},C={class:"mb-3 col-md-6"},M=(0,l.Lk)("label",{for:"origin_price",class:"form-label"},"原價",-1),_={class:"mb-3 col-md-6"},U=(0,l.Lk)("label",{for:"price",class:"form-label"},"售價",-1),F=(0,l.Lk)("hr",null,null,-1),E={class:"mb-3"},A=(0,l.Lk)("label",{for:"description",class:"form-label"},"產品描述",-1),D={class:"mb-3"},V=(0,l.Lk)("label",{for:"content",class:"form-label"},"說明內容",-1),X={class:"mb-3"},J={class:"form-check"},I=(0,l.Lk)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),N={class:"modal-footer"},j=(0,l.Lk)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function K(t,e,o,K,S,z){return(0,l.uX)(),(0,l.CE)("div",s,[(0,l.Lk)("div",i,[(0,l.Lk)("div",c,[d,(0,l.Lk)("div",n,[(0,l.Lk)("div",r,[(0,l.Lk)("div",u,[(0,l.Lk)("div",p,[m,(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>S.tempProduct.imageUrl=t)},null,512),[[a.Jo,S.tempProduct.imageUrl]])]),(0,l.Lk)("div",h,[b,(0,l.Lk)("input",{type:"file",id:"customFile",class:"form-control",onChange:e[1]||(e[1]=(...t)=>z.uploadFile&&z.uploadFile(...t)),ref:"fileInput"},null,544)]),k]),(0,l.Lk)("div",g,[(0,l.Lk)("div",f,[L,(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[2]||(e[2]=t=>S.tempProduct.title=t)},null,512),[[a.Jo,S.tempProduct.title]])]),(0,l.Lk)("div",v,[(0,l.Lk)("div",P,[y,(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[3]||(e[3]=t=>S.tempProduct.category=t)},null,512),[[a.Jo,S.tempProduct.category]])]),(0,l.Lk)("div",x,[$,(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[4]||(e[4]=t=>S.tempProduct.unit=t)},null,512),[[a.Jo,S.tempProduct.unit]])])]),(0,l.Lk)("div",w,[(0,l.Lk)("div",C,[M,(0,l.bo)((0,l.Lk)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[5]||(e[5]=t=>S.tempProduct.origin_price=t)},null,512),[[a.Jo,S.tempProduct.origin_price]])]),(0,l.Lk)("div",_,[U,(0,l.bo)((0,l.Lk)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[6]||(e[6]=t=>S.tempProduct.price=t)},null,512),[[a.Jo,S.tempProduct.price]])])]),F,(0,l.Lk)("div",E,[A,(0,l.bo)((0,l.Lk)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[7]||(e[7]=t=>S.tempProduct.description=t)},null,512),[[a.Jo,S.tempProduct.description]])]),(0,l.Lk)("div",D,[V,(0,l.bo)((0,l.Lk)("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[8]||(e[8]=t=>S.tempProduct.content=t)},null,512),[[a.Jo,S.tempProduct.content]])]),(0,l.Lk)("div",X,[(0,l.Lk)("div",J,[(0,l.bo)((0,l.Lk)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[9]||(e[9]=t=>S.tempProduct.is_enabled=t)},null,512),[[a.lH,S.tempProduct.is_enabled]]),I])])])])]),(0,l.Lk)("div",N,[j,(0,l.Lk)("button",{type:"button",class:"btn btn-primary",onClick:e[10]||(e[10]=e=>t.$emit("update-product",S.tempProduct))},"確認")])])])],512)}var S=o(3286),z={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product}},data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const o="https://vue3-course-api.hexschool.io/api/vue-final-flower/admin/upload";this.$http.post(o,e).then((t=>{console.log(t.data),t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)}))}},mixins:[S.A]},H=o(1241);const O=(0,H.A)(z,[["render",K]]);var T=O},2601:function(t,e,o){o.d(e,{A:function(){return L}});var l=o(6768),a=o(4232),s=o(5130);const i={"aria-label":"Page navigation example"},c={class:"pagination justify-content-center mb-0 pb-3"},d={class:"page-item"},n=(0,l.Lk)("span",{"aria-hidden":"true"},"«",-1),r=[n],u=["onClick"],p={class:"page-item"},m=(0,l.Lk)("span",{"aria-hidden":"true"},"»",-1),h=[m];function b(t,e,o,n,m,b){return(0,l.uX)(),(0,l.CE)("nav",i,[(0,l.Lk)("ul",c,[(0,l.Lk)("li",d,[(0,l.Lk)("a",{class:(0,a.C4)(["page-link",{disabled:1===o.pages.current_page}]),href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,s.D$)((t=>b.updatePage(o.pages.current_page-1)),["prevent"]))},r,2)]),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(o.pages.total_pages,(t=>((0,l.uX)(),(0,l.CE)("li",{class:(0,a.C4)(["page-item",{active:t===o.pages.current_page}]),key:t},[(0,l.Lk)("a",{class:"page-link",href:"#",onClick:(0,s.D$)((e=>b.updatePage(t)),["prevent"])},(0,a.v_)(t),9,u)],2)))),128)),(0,l.Lk)("li",p,[(0,l.Lk)("a",{class:(0,a.C4)(["page-link",{disabled:o.pages.current_page===o.pages.total_pages}]),href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,s.D$)((t=>b.updatePage(o.pages.current_page+1)),["prevent"]))},h,2)])])])}var k={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},g=o(1241);const f=(0,g.A)(k,[["render",b]]);var L=f},9362:function(t,e,o){o.r(e),o.d(e,{default:function(){return y}});var l=o(6768),a=o(4232);const s={class:"text-end"},i={class:"table mt-4"},c=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",{width:"120"},"分類"),(0,l.Lk)("th",null,"產品名稱"),(0,l.Lk)("th",{width:"120"},"原價"),(0,l.Lk)("th",{width:"120"},"售價"),(0,l.Lk)("th",{width:"100"},"是否啟用"),(0,l.Lk)("th",{width:"200"},"編輯")])],-1),d={class:"text-right"},n={class:"text-right"},r={key:0,class:"text-success"},u={key:1,class:"text-muted"},p={class:"btn-group"},m=["onClick"],h=["onClick"];function b(t,e,o,b,k,g){const f=(0,l.g2)("UserLoading"),L=(0,l.g2)("UserPagination"),v=(0,l.g2)("ProductModal"),P=(0,l.g2)("DelModal");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(f,{active:k.isLoading},null,8,["active"]),(0,l.Lk)("div",s,[(0,l.Lk)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=t=>g.openModal(!0))}," 增加一個產品 ")]),(0,l.Lk)("table",i,[c,(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(k.products,(e=>((0,l.uX)(),(0,l.CE)("tr",{key:e.id},[(0,l.Lk)("td",null,(0,a.v_)(e.category),1),(0,l.Lk)("td",null,(0,a.v_)(e.title),1),(0,l.Lk)("td",d,(0,a.v_)(t.$filters.currency(e.origin_price)),1),(0,l.Lk)("td",n,(0,a.v_)(t.$filters.currency(e.price)),1),(0,l.Lk)("td",null,[e.is_enabled?((0,l.uX)(),(0,l.CE)("span",r,"啟用")):((0,l.uX)(),(0,l.CE)("span",u,"未啟用"))]),(0,l.Lk)("td",null,[(0,l.Lk)("div",p,[(0,l.Lk)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>g.openModal(!1,e)},"編輯",8,m),(0,l.Lk)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>g.openDelModal(e)},"刪除",8,h)])])])))),128))])]),(0,l.bF)(L,{pages:k.pagination,onEmitPages:g.getProducts},null,8,["pages","onEmitPages"]),(0,l.bF)(v,{ref:"productModal",product:k.tempProduct,onUpdateProduct:g.updatedProduct},null,8,["product","onUpdateProduct"]),(0,l.bF)(P,{ref:"delModal",item:k.tempProduct,onDeleteProduct:g.deleteProduct},null,8,["item","onDeleteProduct"])],64)}o(4114);var k=o(1967),g=o(7765),f=o(2601),L={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:k.A,DelModal:g.A,UserPagination:f.A},inject:["emitter","$httpMessageState"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/vue-final-flower/admin/products?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,t.data.success&&(console.log(t.data),this.products=t.data.products,this.pagination=t.data.pagination)}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const o=this.$refs.productModal;o.showModal()},openDelModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.showModal()},updatedProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/vue-final-flower/admin/product",o="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/vue-final-flower/admin/product/${t.id}`,o="put");const l=this.$refs.productModal;this.$http[o](e,{data:this.tempProduct}).then((t=>{console.log(t),l.hideModal(),t.data.success?(this.getProducts(),this.$httpMessageState(t,"更新")):this.$httpMessageState(t,"更新")}))},deleteProduct(){const t=`https://vue3-course-api.hexschool.io/api/vue-final-flower/admin/product/${this.tempProduct.id}`,e=this.$refs.delModal;this.$http.delete(t).then((t=>{console.log(t),e.hideModal(),this.getProducts()}))}},created(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t;const e="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(e,this.user).then((t=>{console.log(t),t.data.success?this.emitter.emit("push-message",{style:"success",title:"登錄成功"}):this.$router.push("/login")})),this.getProducts()}},v=o(1241);const P=(0,v.A)(L,[["render",b]]);var y=P}}]);
//# sourceMappingURL=362.abf766f1.js.map