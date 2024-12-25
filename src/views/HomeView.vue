<template>
  <header class="mb-5 header px-4 py-5 d-flex align-items-lg-center justify-content-center img-fluid headerbg">
    <div class="text-white text-center bg-secondary bg-opacity-50 p-3">
      <p class="fs-5">歡迎來到花之藝</p>
      <h1 class="fw-bold">用花語傳遞心意</h1>
      <p>在花之藝花店，我們相信每一朵花都有它獨特的故事與語言。<br>我們致力於為每一位顧客提供最高品質的花卉產品和無與倫比的購物體驗。<br>無論是慶祝特別的日子，還是僅僅為了給日常生活增添一抹色彩。</p>
    </div>
  </header>

  <section class="mb-5 px-md-5 px-4">
    <div class="row row-cols-1 row-cols-md-4">
      <div class="col d-flex flex-row flex-md-column align-items-center justify-content-center"  data-aos="fade-up" data-aos-delay="50">
        <div class="col">
          <img src="../assets/images/step1.jpg" alt="步驟一" class="mb-3 img-fluid">
        </div>
        <div class="d-flex flex-column align-items-center text-md-center ms-4 ms-md-0 col">
          <p class="kalam-bold text-main fs-5 me-auto mx-md-auto">STEP1</p>
          <h2 class="fw-bold fs-5 mb-3 me-auto mx-md-auto">選擇產品</h2>
          <p class="me-auto mx-md-auto">瀏覽我們的網站<br>選擇您喜愛的花卉產品</p>
        </div>
      </div>
      <div class="col d-flex flex-row flex-md-column align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div class="col">
          <img src="../assets/images/step2.jpg" alt="步驟二" class="mb-3 img-fluid">
        </div>
        <div class="d-flex flex-column align-items-center text-md-center ms-4 ms-md-0 col">
          <p class="kalam-bold text-main fs-5 me-auto mx-md-auto">STEP2</p>
          <h2 class="fw-bold fs-5 mb-3 me-auto mx-md-auto">確認訂單</h2>
          <p class="me-auto mx-md-auto">填寫訂購信息和收貨地址<br>確認訂單內容</p>
        </div>
      </div>
      <div class="col d-flex flex-row flex-md-column align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="250">
        <div class="col">
          <img src="../assets/images/step3.jpg" alt="步驟三" class="mb-3 img-fluid">
        </div>
        <div class="d-flex flex-column align-items-center text-md-center ms-4 ms-md-0 col">
          <p class="kalam-bold text-main fs-5 me-auto mx-md-auto">STEP3</p>
          <h2 class="fw-bold fs-5 mb-3 me-auto mx-md-auto">付款</h2>
          <p class="me-auto mx-md-auto text-nowrap">支持多種支付方式<br>方便快捷</p>
        </div>
      </div>
      <div class="col d-flex flex-row flex-md-column align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="350">
        <div class="col">
          <img src="../assets/images/step4.jpg" alt="步驟四" class="mb-3 img-fluid">
        </div>
        <div class="d-flex flex-column align-items-center text-md-center ms-4 ms-md-0 col">
          <p class="kalam-bold text-main fs-5 me-auto mx-md-auto">STEP4</p>
          <h2 class="fw-bold fs-5 mb-3 me-auto mx-md-auto">等待收花</h2>
          <p class="me-auto mx-md-auto">我們會在您選擇的時間內<br>準時送達。</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-5 py-5 d-flex flex-column-reverse wordbg"  data-aos="fade-up">
    <div class="container">
      <h2 class="text-center mb-4 justify-content-center d-flex">
        花之藝花店 - 每一朵花都是一個故事<br>讓我們一起寫下最美的篇章
      </h2>
    </div>
  </section>

  <section class="pb-5 container">
    <h2 class="text-center mb-4">熱銷商品</h2>
    <swiper
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
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper pb-3"
    >
      <template v-for="item in recommendP" :key="item.id">
        <swiper-slide class="w-25 mx-3">
          <div class="card h-100">
            <img :src=item.imageUrl class="card-img-top" alt="推薦商品" style="height: 200px; object-fit: cover;">
            <div class="card-body bg-pageBack d-flex flex-column justify-content-between">
              <h5 class="card-title">{{ item.title }}</h5>
              <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
              <del class="h6" v-if="item.price !== item.origin_price">NT$ {{ item.origin_price }} </del>
              <div class="h5" v-if="item.price">NT$ {{ item.price }} 元</div>

              <div class="btn-group btn-group-sm">
                <!-- <button type="button" class="btn btn-outline-secondary"
                        @click="getrecommend(item.id)">
                    查看更多
                </button> -->
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
      </template>
    </swiper>
  </section>

  <section class="pb-5 container">
    <div class="row">
      <div class="col-lg-3">
        <img src="../assets/images/memberplan.jpg" class="w-100" alt="會員計畫">
      </div>
      <div class="col-lg-3 d-flex align-items-center">
        <div>
          <h2>會員計劃</h2>
          <p class="lh-lg text-subColor1">成為我們的會員<br>享受專屬優惠和生日禮物。</p>
        </div>
      </div>
      <div class="col-lg-3 d-flex align-items-center">
        <img src="../assets/images/citydelivery.jpg" class="w-100" alt="同城速遞">
      </div>
      <div class="col-lg-3 d-flex align-items-center">
        <div>
          <h2>同城速遞</h2>
          <p class="lh-lg text-subColor1">當天送達，讓心意不再等待。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'

export default {
  data () {
    return {
      picture: 'https://images.unsplash.com/photo-1714139797690-969497e4a65e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      recommendP: {},
      status: {
        loadingItem: ''
      }
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
  setup () {
    return {
      modules: [EffectCoverflow, Pagination]
    }
  },
  created () {
    this.getrecommendP()
  }
}
</script>

<style>
.headerbg{
  background-image: url('~@/assets/images/home_picture.png');
  width: 100%;
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.wordbg{
  background-image: url('../assets/images/word_bg.jpg');
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
