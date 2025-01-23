<template>
  <UserLoading :active="isLoading"/>
  <div class="container px-5" style="min-height: calc(100vh - 72px - 57.6px);">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb pt-3">
        <li class="breadcrumb-item"><router-link class="text-secondary text-decoration-none" to="/products">產品</router-link></li>
        <li class="breadcrumb-item active text-mainColor" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center mb-5">
      <article class="col-12 col-lg-4 d-flex align-items-center align-items-lg-start">
        <img :src="product.imageUrl" alt="商品圖片" class="img-fluid mx-auto ms-lg-0 d-block" style="height: 80%; object-fit: cover;">
      </article>
      <div class="col-12 col-lg-8">
        <h2>{{ product.title }}</h2>
        <div>{{ product.content }}</div>
        <pre class="mt-3" style="overflow-x: hidden;">{{ product.description }}</pre>
        <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
        <del class="h6 text-muted" v-if="product.price">原價 {{ product.origin_price }} 元</del>
        <div class="h5 text-subColor1" v-if="product.price">現在只要 {{ product.price }} 元</div>
        <hr>
        <div class="input-group input-group-sm mb-2">
          <input type="number" class="form-control flex-grow-0 w-25 text-center"
          min="1" v-model.number="qty">
          <div class="input-group-text">/ 朵</div>
          <button type="button" class="btn btn-outline-mainColor"
          @click="addToCart(product.id)">
            加到購物車
          </button>
        </div>
      </div>
    </div>
    <h2 class="mb-3">推薦商品</h2>
    <!-- 電腦版推薦 -->
    <swiper
      :navigation="true"
      :slidesPerView="3"
      :spaceBetween="50"
      :pagination="{
        dynamicBullets: true,
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper pb-4"
      style="--swiper-theme-color: #564527;"
      v-if="windowWidth > 992"
    >
      <swiper-slide v-for="item in recommendP" :key="item.id">
        <div class="card h-100" style="cursor: pointer;">
          <img :src=item.imageUrl class="card-img-top" alt="商品圖片"
          @click="getrecommend(item.id)" style="height: 200px; object-fit: cover;">
          <div class="card-body bg-navBack d-flex flex-column justify-content-between">
            <h5 class="card-title" @click="getrecommend(item.id)">{{ item.title }}</h5>
            <div class="h5" @click="getrecommend(item.id)" v-if="!item.price">{{ item.origin_price }} 元</div>
            <del class="h6 text-muted" @click="getrecommend(item.id)" v-if="item.price">原價 {{ item.origin_price }} 元</del>
            <div class="h5 text-subColor1" @click="getrecommend(item.id)" v-if="item.price">現在只要 {{ item.price }} 元</div>

            <div class="btn-group btn-group-sm">
              <button type="button" class="btn btn-outline-mainColor"
              :disabled="status.loadingItem === item.id"
              @click="addrecommend(item.id)">
              <div v-if="status.loadingItem === item.id" class="spinner-grow text-mainColor spinner-grow-sm" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- 手機板推薦 -->
    <swiper
      :navigation="true"
      :slidesPerView="1"
      :spaceBetween="50"
      :pagination="{
        dynamicBullets: true,
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper pb-4"
      style="--swiper-theme-color: #564527;"
      v-else
    >
      <swiper-slide v-for="item in recommendP" :key="item.id">
        <div class="card h-100">
          <img :src=item.imageUrl class="card-img-top" alt="商品圖片"
          @click="getrecommend(item.id)" style="height: 200px; object-fit: cover;">
          <div class="card-body bg-navBack d-flex flex-column justify-content-between">
            <h5 class="card-title" @click="getrecommend(item.id)">{{ item.title }}</h5>
            <div class="h5" @click="getrecommend(item.id)" v-if="!item.price">{{ item.origin_price }} 元</div>
            <del class="h6 text-muted" @click="getrecommend(item.id)" v-if="item.price">原價 {{ item.origin_price }} 元</del>
            <div class="h5 text-subColor1" @click="getrecommend(item.id)" v-if="item.price">現在只要 {{ item.price }} 元</div>

            <div class="btn-group btn-group-sm">
              <button type="button" class="btn btn-outline-mainColor"
              :disabled="status.loadingItem === item.id"
              @click="addrecommend(item.id)">
              <div v-if="status.loadingItem === item.id" class="spinner-grow text-mainColor spinner-grow-sm" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="py-3"></div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { buyCountStore } from '@/stores/cartStore'
import { mapState } from 'pinia'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination, Navigation]
    }
  },
  data () {
    return {
      recommendP: {},
      product: {},
      id: '',
      status: {
        loadingItem: ''
      },
      qty: 1,
      windowWidth: window.innerWidth
    }
  },
  inject: ['$httpMessageState'],
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          this.product = response.data.product
        }
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
    getrecommend (id) {
      this.id = id
      this.$router.push(`/product/${id}`)
      this.getProduct()
    },
    getrecommendP () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.recommendP = response.data.products
        this.isLoading = false
      })
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '取得推薦產品失敗'
            })
          }
        })
    },
    addToCart (id, qty = this.qty) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.isLoading = true
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false
        this.$httpMessageState(response, '加入購物車')
        this.getCart()
        this.$router.push('/products')
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
    addrecommend (id) {
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
              title: '添加推薦失敗'
            })
          }
        })
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
    }
  },
  computed: {
    ...mapState(buyCountStore, ['getbuyCount', 'setbuyCount'])
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
    this.getrecommendP()
  },
  updated () {
    window.scroll(0, 0)
  }
}
</script>
