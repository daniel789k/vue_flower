<template>
<UserLoading :active="isLoading"></UserLoading>
<section class="container pb-5 pt-md-5">
<div class="row">
  <!-- 電腦導覽列 -->
    <nav id="navbar-example3" class="navbar navbar-light bg-light flex-column align-items-stretch p-3 col-md-4 sticky-top h-100 bg-pageBack d-none d-md-block" style="top: 57px;">
    <nav class="nav nav-pills flex-md-column" v-for="(value, index) in flowerType" :key="value+index">
        <a class="nav-link  text-dark" :href="`#item-${index+1}`" @click.prevent="scrollIntoView(`item-${index+1}`)">{{ Object.keys(value)[0] }}</a>
        <nav class="flex-column nav nav-pills" v-for="(value1, key1) in Object.values(value)[0]" :key="key1">
        <a class="nav-link ms-3 my-1 btn btn-one" :href="`#item-${index+1}-${key1+1}`" @click.prevent="scrollIntoView(`item-${index+1}-${key1+1}`)"><span>{{value1}}</span></a>
        </nav>
    </nav>
    </nav>
    <!-- 手機導覽列 -->
    <nav id="navbar-example3" class="navbar navbar-light bg-light p-3 sticky-top h-100 bg-pageBack d-md-none row" style="top: 57px;">
      <template v-for="(value, index) in flowerType" :key="value+index">
        <nav class="nav nav-pills col-4" v-for="(value1, key1) in Object.values(value)[0]" :key="key1">
        <a class="nav-link ms-3 my-1 btn btn-one" :href="`#item-${index+1}-${key1+1}`" @click.prevent="scrollIntoView(`item-${index+1}-${key1+1}`)"><span>{{value1}}</span></a>
        </nav>
      </template>
    </nav>

    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0" class="col-md-8">
      <div v-for="(value, index) in flowerType" :key="value+index">
        <h4 style="padding-top: 56px; margin-top: -56px;" :id="`item-${index+1}`">{{ Object.keys(value)[0] }}</h4>
        <div v-for="(value1, key1) in Object.values(value)[0]" :key="key1">
          <h5 style="padding-top: 56px; margin-top: -56px;" :id="`item-${index+1}-${key1+1}`">{{value1}}</h5>
          <div class="row row-cols-2 row-cols-md-3 g-4">
            <template v-for="item in products" :key="item.id">
              <div class="col mb-2" v-if="item.category.includes(`${value1}`)">
                <div class="card h-100 position-relative" style="overflow: hidden;">
                  <div class="position-absolute top-0 start-100 bg-white" style="width: 60px; height: 60px; transform: translate(-50%,-50%) rotate(45deg);"></div>
                  <i class="bi bi-heart position-absolute" style="top: 2px; right: 5px;" @click="changeHeart($event)"></i>
                  <img :src=item.imageUrl class="card-img-top" alt="" style="height: 200px; object-fit: cover;">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                    <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                    <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>

                    <div class="btn-group btn-group-sm">
                      <button type="button" class="btn btn-outline-secondary"
                              @click="getProduct(item.id)">
                        查看更多
                      </button>
                      <button type="button" class="btn btn-outline-danger"
                      :disabled="this.status.loadingItem === item.id"
                      @click="addCart(item.id)">
                      <div v-if="this.status.loadingItem === item.id" class="spinner-grow text-danger spinner-grow-sm" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                        加到購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
</div>
</section>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ''
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      cart: {},
      coupon_code: '',
      isLoading: false,
      flowerType: [
        { 鮮花花束: ['浪漫玫瑰花束', '繽紛混合花束'] },
        { 花藝設計: ['婚禮花藝', '企業花藝'] },
        { 盆栽與多肉植物: ['綠色盆栽', '迷你多肉植物'] }
      ]
    }
  },
  inject: ['$httpMessageState'],
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.products = response.data.products
        console.log('products:', response)
        this.isLoading = false
      })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        console.log(response)
        this.cart = response.data.data
        this.isLoading = false
      })
    },
    addCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = ''
        console.log(res)
        this.getCart()
      })
    },
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.status.loadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(url, { data: cart }).then((res) => {
        console.log(res)
        this.status.loadingItem = ''
        this.getCart()
      })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.isLoading = true
      this.$http.post(url, { data: coupon }).then((response) => {
        this.$httpMessageState(response, '加入優惠券')
        this.getCart()
        this.isLoading = false
      })
    },
    removeCartItem (id) {
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, '移除購物車品項')
        this.status.loadingItem = ''
        this.getCart()
        this.isLoading = false
      })
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          console.log(res)
        })
    },
    scrollIntoView (id) {
      document.getElementById(id).scrollIntoView()
    },
    changeHeart: (event) => {
      event.target.classList.toggle('bi-heart')
      event.target.classList.toggle('bi-heart-fill')
      event.target.classList.toggle('text-danger')
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>

<style>
.btn-one {
color: #FFF !important;
transition: all 0.3s;
position: relative;
}
.active {
  background-color: #DCCBAE !important;
  transition: all 0.3s;
  color: black !important;
  letter-spacing: 2px;
}
.btn-one span {
transition: all 0.3s;
}
.btn-one::before {
content: '';
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1;
opacity: 0;
transition: all 0.3s;
border-top-width: 1px;
border-bottom-width: 1px;
border-top-style: solid;
border-bottom-style: solid;
border-top-color: rgba(255,255,255,0.5);
border-bottom-color: rgba(255,255,255,0.5);
transform: scale(0.1, 1);
}
.btn-one:hover span {
letter-spacing: 2px;
color: black !important;
}
.btn-one:hover::before {
opacity: 1;
transform: scale(1, 1);
}
.btn-one.active::before {
opacity: 1;
transform: scale(1, 1);
}
.btn-one::after {
content: '';
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1;
transition: all 0.3s;
background-color: rgba(255,255,255,0.1);
}
.btn-one:hover::after {
opacity: 0;
transform: scale(0.1, 1);
}
.btn-one.active::after {
opacity: 0;
transform: scale(0.1, 1);
}
</style>
