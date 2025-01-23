<template>
  <UserLoading :active="isLoading"/>
  <section class="container pb-5" style="min-height: calc(100vh - 72px - 57.6px);">
    <h2 class="text-center py-md-5 pt-3 mb-0">花藝商品</h2>
    <div class="row">
      <!-- 電腦導覽列 -->
      <div class="bg-light flex-column align-items-stretch p-3 pt-0 col-md-3 sticky-top h-100 bg-pageBack d-none d-md-block" style="top: 65px;">
        <div class="flex-md-column">
          <ul class="list-group flex-column">
            <li v-for="(value, index) in flowerType" :key="value+index" class="list-group-item ms-3 mb-2 btn btn-one" :class="{active: value==activeType}" @click="getType($event)"><i class="bi bi-flower2" v-if="value==activeType"/> {{ value }}</li>
          </ul>
        </div>
      </div>
      <!-- 手機導覽列 -->
      <div class="sticky-top bg-pageBack py-2 d-md-none" style="top: 57px;">
        <div class="py-auto" style="">
          <ul class="hideScroll mb-0" style="white-space: nowrap; overflow-x: scroll;">
            <li v-for="(value, index) in flowerType" :key="value+index" class="my-1 btn btn-one me-3" :class="{active: value==activeType}" @click="getType($event)"><i class="bi bi-flower2" v-if="value==activeType"/> {{ value }}</li>
          </ul>
        </div>
      </div>

      <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0" class="col-md-9">
        <div class="row row-cols-2 row-cols-md-3 g-4">
          <div class="col mb-2" v-for="item in nowProducts" :key="item.id">
            <div class="card h-100 position-relative border-0" style="overflow: hidden; cursor: pointer;">
              <div class="position-absolute top-0 start-100 bg-white" style="width: 60px; height: 60px; transform: translate(-50%,-50%) rotate(45deg);"/>
              <i v-if="getTitle.includes(item.title)" class="bi bi-heart-fill text-danger position-absolute" style="top: 2px; right: 5px; cursor: pointer;" @click="changeHeart($event), pushLoveFlower(item)"/>
              <i v-else class="bi bi-heart position-absolute" style="top: 2px; right: 5px; cursor: pointer;" @click="changeHeart($event), pushLoveFlower(item)"/>
              <img :src=item.imageUrl class="card-img-top" alt="商品圖片" @click="getProduct(item.id)" style="height: 200px; object-fit: cover;">
              <div class="card-body bg-navBack d-flex flex-column justify-content-between">
                <h5 class="card-title" @click="getProduct(item.id)">{{ item.title }}</h5>
                <div class="h5" @click="getProduct(item.id)" v-if="!item.price">{{ item.origin_price }} 元</div>
                <del class="h6 text-muted" @click="getProduct(item.id)" v-if="item.price !== item.origin_price">NT$ {{ item.origin_price }} </del>
                <div class="h5" @click="getProduct(item.id)" v-if="item.price">NT$ {{ item.price }} 元</div>

                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-outline-mainColor"
                  :disabled="status.loadingItem === item.id"
                  @click="addCart(item.id)">
                    <div v-if="status.loadingItem === item.id" class="spinner-grow text-mainColor spinner-grow-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                      加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emitter from '@/methods/emitter'
import { useLoveStore } from '@/stores/loveStore'
import { buyCountStore } from '@/stores/cartStore'
import { mapState } from 'pinia'

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
        '全部商品',
        '浪漫玫瑰花束', '繽紛混合花束',
        '婚禮花藝', '企業花藝',
        '綠色盆栽', '迷你多肉植物'
      ],
      nowType: '',
      nowProducts: [],
      activeType: '全部商品',
      loveFlower: []
    }
  },
  inject: ['$httpMessageState'],
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.products = response.data.products
        this.nowProducts = this.products
        this.isLoading = false
      })
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '取得產品失敗'
            })
          }
        })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.cart = response.data.data
        if (this.cart.carts.length !== 0) {
          this.setbuyCount(this.cart.carts.map(el => el.qty).reduce((a, b) => a + b))
        }
        this.isLoading = false
      })
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '取得購物車失敗'
            })
          }
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
        this.getCart()
      })
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '添加購物車失敗'
            })
          }
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
        this.status.loadingItem = ''
        this.getCart()
      })
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '更新購物車失敗'
            })
          }
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
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '添加優惠券失敗'
            })
          }
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
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '刪除品項失敗'
            })
          }
        })
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
        })
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '建立訂單失敗'
            })
          }
        })
    },
    scrollIntoView (id) {
      document.getElementById(id).scrollIntoView()
    },
    getType (event) {
      if (event.target.classList.contains('active') === false) {
        this.nowType = event.target.innerText
        this.activeType = event.target.innerText
        this.nowProducts = this.products.filter(e => e.category.includes(this.nowType))
      }
      if (event.target.innerText === '全部商品') {
        this.nowType = ''
        this.nowProducts = this.products
      }
    },
    changeHeart: (event) => {
      event.target.classList.toggle('bi-heart')
      event.target.classList.toggle('bi-heart-fill')
      event.target.classList.toggle('text-danger')
    }
  },
  computed: {
    ...mapState(useLoveStore, ['pushLoveFlower', 'getloveflower', 'getTitle']),
    ...mapState(buyCountStore, ['getbuyCount', 'setbuyCount'])
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>

<style>
.btn-one {
color: #5a0c0c !important;
background-color: #d3b78776;
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
.card:hover {
box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
transform: translate(0,-5px);
transition-delay: 0s !important;
}
.hideScroll::-webkit-scrollbar {
  display: none;
}
</style>
