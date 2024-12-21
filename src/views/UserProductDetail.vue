<template>
  <UserLoading :active="isLoading"/>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb pt-3">
        <li class="breadcrumb-item"><router-link to="/products">產品</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <img :src="product.imageUrl" alt="商品圖片" class="img-fluid mx-auto d-block" style="height: 80%; object-fit: cover;">
      </article>
      <div class="col-4">
        <h2>{{ product.title }}</h2>
        <div>{{ product.content }}</div>
        <pre class="mt-3">{{ product.description }}</pre>
        <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
        <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
        <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
        <hr>
        <button type="button" class="btn btn-outline-mainColor"
        @click="addToCart(product.id)">
          加到購物車
        </button>
      </div>
    </div>
    <h2 class="mb-3">推薦商品</h2>
    <swiper
      :navigation="true"
      :slidesPerView="3"
      :spaceBetween="50"
      :pagination="{
        dynamicBullets: true,
      }"
      :modules="modules"
      class="mySwiper pb-4 px-5"
    >
      <template v-for="item in recommendP" :key="item.id">
        <swiper-slide>
          <div class="card h-100">
            <img :src=item.imageUrl class="card-img-top" alt="商品圖片" style="height: 200px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
              <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
              <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>

              <div class="btn-group btn-group-sm">
                <button type="button" class="btn btn-outline-secondary"
                @click="getrecommend(item.id)">
                  查看更多
                </button>
                <button type="button" class="btn btn-outline-mainColor"
                :disabled="this.status.loadingItem === item.id"
                @click="addrecommend(item.id)">
                <div v-if="this.status.loadingItem === item.id" class="spinner-grow text-mainColor spinner-grow-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
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
      }
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
    },
    addToCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.isLoading = true
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false
        this.$httpMessageState(response, '加入購物車')
        this.$router.push('/products')
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
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.cart = response.data.data
        this.isLoading = false
      })
    }
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
