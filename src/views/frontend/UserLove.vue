<template>
  <UserLoading :active="isLoading"/>
  <section class="container pb-5 pt-md-5" :class="{ noLove: getloveflower.length==0}">
    <div class="row">
      <h2 class="mb-4" v-if="getloveflower.length!==0">我的最愛</h2>

      <h2 class="mb-4" v-if="getloveflower.length==0">尚無商品</h2>
      <router-link to="/products" class="nav-link ps-3 fs-5" v-if="getloveflower.length==0"><i class="bi bi-flower2 me-1"></i>前往選購</router-link>

      <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0" class="col-md-12">
        <div class="row row-cols-2 row-cols-md-4 g-4 mb-2">
          <template v-for="item in getloveflower" :key="item.id">
            <div class="col mb-2">
              <div class="card h-100 position-relative border-0" style="overflow: hidden;">
                <div class="position-absolute top-0 start-100 bg-white" style="width: 60px; height: 60px; transform: translate(-50%,-50%) rotate(45deg);"></div>
                <i class="bi bi-heart-fill text-danger position-absolute" style="top: 2px; right: 5px; cursor: pointer;"
                @click="changeHeart($event), pushLoveFlower(item)"></i>
                <img :src=item.imageUrl class="card-img-top" alt="最愛商品圖片" style="height: 200px; object-fit: cover;">
                <div class="card-body bg-pageBack d-flex flex-column justify-content-between">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                  <del class="h6" v-if="item.price !== item.origin_price">NT$ {{ item.origin_price }} </del>
                  <div class="h5" v-if="item.price">NT$ {{ item.price }} 元</div>

                  <div class="btn-group btn-group-sm">
                    <button type="button" class="btn btn-outline-secondary"
                    @click="getProduct(item.id)">
                      查看更多
                    </button>
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
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useLoveStore } from '@/stores/loveStore'
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
        { 鮮花花束: ['浪漫玫瑰花束', '繽紛混合花束'] },
        { 花藝設計: ['婚禮花藝', '企業花藝'] },
        { 盆栽與多肉植物: ['綠色盆栽', '迷你多肉植物'] }
      ],
      loveF: []
    }
  },
  inject: ['emitter', '$httpMessageState'],
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.products = response.data.products
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
        })
    },
    changeHeart: (event) => {
      event.target.classList.toggle('bi-heart')
      event.target.classList.toggle('bi-heart-fill')
      event.target.classList.toggle('text-danger')
    }
  },
  computed: {
    ...mapState(useLoveStore, ['pushLoveFlower', 'getloveflower'])
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>

<style>
.noLove {
  height: calc(100vh - 72px - 57.6px)
}
</style>
