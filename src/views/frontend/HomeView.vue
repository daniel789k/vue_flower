<template>
  <header class="mb-5 header px-4 py-5 d-flex align-items-lg-center justify-content-center img-fluid headerbg">
    <div class="text-white text-center bg-secondary bg-opacity-50 p-3 d-flex flex-column align-items-center justify-content-center">
      <p class="fs-5">歡迎來到花之藝</p>
      <h1 class="fw-bold">用花語傳遞心意</h1>
      <p>在花之藝花店，我們相信每一朵花都有它獨特的故事與語言。<br>我們致力於為每一位顧客提供最高品質的花卉產品和無與倫比的購物體驗。<br>無論是慶祝特別的日子，還是僅僅為了給日常生活增添一抹色彩。</p>
      <router-link to="/products" class="nav-link bg-pageBack text-dark d-inline px-3 py-2 rounded-2">前往選購</router-link>
    </div>
  </header>

  <section class="mb-5 px-md-5 px-4">
    <div class="row row-cols-1 row-cols-md-4">
      <div class="col d-flex flex-row flex-column align-items-center justify-content-center"  data-aos="fade-up" data-aos-delay="50">
        <div class="d-flex flex-column">
          <img src="@/assets/images/step1.jpg" alt="步驟一" class="mb-2 mb-lg-3 img-fluid">
          <div class="d-flex flex-column align-items-center text-md-center">
            <p class="kalam-bold text-main fs-5 me-auto mx-md-auto mb-2 mb-lg-3">STEP1</p>
            <h2 class="fw-bold fs-5 me-auto mx-md-auto mb-2 mb-lg-3">選擇產品</h2>
            <p class="me-auto mx-md-auto">瀏覽我們的網站<br>選擇您喜愛的花卉產品</p>
          </div>
        </div>
      </div>
      <div class="col d-flex flex-row flex-column align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div class="d-flex flex-column">
          <img src="@/assets/images/step2.jpg" alt="步驟二" class="mb-2 mb-lg-3 img-fluid">
          <div class="d-flex flex-column align-items-center text-md-center">
            <p class="kalam-bold text-main fs-5 me-auto mx-md-auto mb-2 mb-lg-3">STEP2</p>
            <h2 class="fw-bold fs-5 mb-2 mb-lg-3 me-auto mx-md-auto">確認訂單</h2>
            <p class="me-auto mx-md-auto">填寫訂購信息和收貨地址<br>確認訂單內容</p>
          </div>
        </div>
      </div>
      <div class="col d-flex flex-row flex-md-column align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="250">
        <div class="d-flex flex-column">
          <img src="@/assets/images/step3.jpg" alt="步驟三" class="mb-2 mb-lg-3 img-fluid">
          <div class="d-flex flex-column align-items-center text-md-center">
            <p class="kalam-bold text-main fs-5 me-auto mx-md-auto mb-2 mb-lg-3">STEP3</p>
            <h2 class="fw-bold fs-5 me-auto mx-md-auto mb-2 mb-lg-3">付款</h2>
            <p class="me-auto mx-md-auto text-nowrap">支持多種支付方式<br>方便快捷</p>
          </div>
        </div>
      </div>
      <div class="col d-flex flex-row flex-md-column align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="350">
        <div class="d-flex flex-column">
          <img src="@/assets/images/step4.jpg" alt="步驟四" class="mb-2 mb-lg-3 img-fluid">
          <div class="d-flex flex-column align-items-center text-md-center">
            <p class="kalam-bold text-main fs-5 me-auto mx-md-auto mb-2 mb-lg-3">STEP4</p>
            <h2 class="fw-bold fs-5 me-auto mx-md-auto mb-2 mb-lg-3">等待收花</h2>
            <p class="me-auto mx-md-auto">我們會在您選擇的時間內<br>準時送達。</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-5 py-5 d-flex flex-column-reverse justify-content-center wordbg"  data-aos="fade-up">
    <div class="container">
      <h2 class="text-center justify-content-center mb-0">
        花之藝花店 - 每一朵花都是一個故事<br>讓我們一起寫下最美的篇章
      </h2>
    </div>
  </section>

  <section class="pb-5 container">
    <h2 class="text-center mb-4">熱銷商品</h2>
    <swiper
      :navigation="true"
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }"
      :pagination="{
        dynamicBullets: true,
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper pb-3"
      style="--swiper-theme-color: #564527;"
    >
      <swiper-slide class="mx-4 cardWidth" v-for="item in recommendP" :key="item.id">
        <div class="card h-100">
          <img :src=item.imageUrl class="card-img-top" alt="推薦商品" @click="getrecommend(item.id)" style="height: 200px; object-fit: cover; cursor: pointer;">
          <div class="card-body bg-navBack d-flex flex-column justify-content-between">
            <h5 class="card-title">{{ item.title }}</h5>
            <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
            <del class="h6 text-muted" v-if="item.price !== item.origin_price">NT$ {{ item.origin_price }} </del>
            <div class="h5" v-if="item.price">NT$ {{ item.price }} 元</div>
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
  </section>

  <section class="pb-5 container">
    <div class="row">
      <div class="col-lg-3">
        <img src="@/assets/images/memberplan.jpg" class="w-100" alt="會員計畫">
      </div>
      <div class="col-lg-3 d-flex align-items-center my-3 my-lg-0">
        <div>
          <h2>會員計劃</h2>
          <p class="lh-lg text-subColor1">成為我們的會員<br>享受專屬優惠和生日禮物。</p>
        </div>
      </div>
      <div class="col-lg-3 d-flex align-items-center">
        <img src="@/assets/images/citydelivery.jpg" class="w-100" alt="同城速遞">
      </div>
      <div class="col-lg-3 d-flex align-items-center mt-3 mt-lg-0">
        <div>
          <h2>同城速遞</h2>
          <p class="lh-lg text-subColor1">當天送達，讓心意不再等待。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emitter from '@/methods/emitter'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCards, EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

export default {
  data () {
    return {
      recommendP: {},
      status: {
        loadingItem: ''
      },
      windowWidth: window.innerWidth
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
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
    getrecommend (id) {
      this.$router.push(`/product/${id}`)
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
              title: '增加推薦產品失敗'
            })
          }
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.cart = response.data.data
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
  setup () {
    return {
      modules: [EffectCards, EffectCoverflow, Pagination, Navigation]
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  created () {
    this.getrecommendP()
  }
}
</script>

<style>
.headerbg {
  background-image: url('~@/assets/images/home_picture.png');
  width: 100%;
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.wordbg {
  background-image: url('~@/assets/images/word_bg.jpg');
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
}
.cardWidth{
  width: 50%;
}

@media (min-width: 992px){
  .cardWidth{
    width: 25%;
  }
}
</style>
