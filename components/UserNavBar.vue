<template>
  <UserLoading :active="isLoading"/>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-navBack">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/flowerart-favicon-color.svg" alt="logo" width="30" height="30"> 花之藝
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav ms-auto">
          <!-- <router-link to="/" class="nav-link">首頁</router-link> -->
          <router-link to="/products" class="nav-link" @click="this.$router.push('/products')" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" v-if="windowWidth < 992"><i class="bi bi-flower2 me-1"></i>花藝商品</router-link>
          <router-link to="/products" class="nav-link" v-if="windowWidth >= 992"><i class="bi bi-flower2 me-1"></i>花藝商品</router-link>
          <button type="button" class="nav-link me-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" @click.prevent="getCart(), addCouponCode()" v-if="windowWidth < 992" ><p class="text-start mb-0 position-relative" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"><i class="bi bi-cart2 me-1"></i>購物車<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {{ getbuyCount }}
            <span class="visually-hidden">buycount</span>
            </span>
          </p></button>
          <button type="button" class="nav-link me-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" @click.prevent="getCart(), addCouponCode()" v-if="windowWidth >= 992"><p class="text-start mb-0 position-relative"><i class="bi bi-cart2 me-1"></i>購物車<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {{ getbuyCount }}
            <span class="visually-hidden">buycount</span>
            </span>
          </p></button>
          <router-link to="/loves" class="nav-link" @click="this.$router.push('/loves')" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" v-if="windowWidth < 992"><i class="bi bi-heart me-1"></i>我的最愛</router-link>
          <router-link to="/loves" class="nav-link" v-if="windowWidth >= 992"><i class="bi bi-heart me-1"></i>我的最愛</router-link>
          <router-link to="/user/login" class="nav-link" @click="this.$router.push('/user/login')" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" v-if="loginStatus === 0 & windowWidth < 992"><i class="bi bi-person me-1"></i>會員登入</router-link>
          <router-link to="/user/login" class="nav-link" v-if="loginStatus === 0 & windowWidth >= 992"><i class="bi bi-person me-1"></i>會員登入</router-link>
          <router-link @click.prevent="logout" to="/" class="nav-link" v-if="loginStatus !== 0"><i class="bi bi-person"></i>會員您好</router-link>
          <router-link to="/orders" class="nav-link" v-if="loginStatus !== 0">訂單查詢</router-link>
          <!-- <router-link to="/login" class="nav-link">後台</router-link> -->
        </div>
      </div>
    </div>
  </nav>

  <!-- 購物車側欄 -->
  <div class="offcanvas offcanvas-end cartbg" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">購物車</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body pt-0" v-if="getbuyCount !== 0">
      <table class="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th style="width: 120px"></th>
            <th style="width: 120px">品名</th>
            <th style="width: 120px">數量</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cart.carts">
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm"
                :disabled="status.loadingItem === item.id"
                @click="removeCartItem(item.id)">
                  <i class="bi bi-x"></i>
                </button>
              </td>
               <td>
                <img :src="item.product.imageUrl" alt="" class="img-fluid">
              </td>
              <td>
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">
                  已套用優惠券
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <input type="number" class="form-control"
                  min="1"
                  :disabled="item.id === status.loadingItem"
                  @change="updateCart(item)"
                  v-model.number="item.qty">
                  <div class="input-group-text">/ {{ item.product.unit }}</div>
                </div>
              </td>
              <td class="text-end">
                <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                {{ $filters.currency(item.final_total) }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ $filters.currency(cart.total) }}</td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td></td>
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
          </tr>
        </tfoot>
      </table>
      <div class="input-group mb-3 input-group-sm w-50 ms-auto">
        <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary rounded-0 rounded-end" type="button" @click="addCouponCode">
            套用優惠碼
          </button>
        </div>
      </div>
      <div class="text-end">
        <router-link to="/checkform"><button type="button" class="btn btn-pageBack" aria-label="Close" data-bs-dismiss="offcanvas">前往結帳</button></router-link>
      </div>
    </div>
    <!-- 無商品時 -->
    <div class="offcanvas-body pt-0" v-if="getbuyCount == 0">
      <h2 class="mb-4">尚無商品</h2>
      <router-link to="/products"
      @click="this.$router.push('/products')"
      class="nav-link ps-3 fs-5" data-bs-dismiss="offcanvas" aria-label="Close"><i class="bi bi-flower2 me-1"></i>前往選購</router-link>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import { buyCountStore } from '@/stores/cartStore'
import { mapState } from 'pinia'

export default {
  data () {
    return {
      status: {
        loadingItem: ''
      },
      cart: {},
      coupon_code: '',
      nowuse_coupon_code: '',
      loginStatus: 0,
      isLoading: false,
      loveFlower: [],
      buyCount: 0,
      windowWidth: window.innerWidth
    }
  },
  inject: ['emitter'],
  methods: {
    $httpMessageState (res, title = '更新') {
      if (res.data.success) {
        emitter.emit('push-message', {
          style: 'success',
          title: `${title}成功`
        })
      } else {
        const message = typeof res.data.message === 'string' ? [res.data.message] : res.data.message
        emitter.emit('push-message', {
          style: 'danger',
          title: `${title}失敗`,
          content: message.join(',')
        })
      }
    },
    logout () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.loginStatus = 0
            this.$httpMessageState(res, '登出')
            this.$router.push('/')
          }
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.cart = response.data.data
        if (this.cart.carts.length === 0) {
          this.setbuyCount(0)
        }
        if (this.cart.carts.length !== 0) {
          this.setbuyCount(this.cart.carts.map(el => el.qty).reduce((a, b) => a + b))
          if (this.coupon_code === '') {
            if ('coupon' in this.cart.carts[0]) {
              this.coupon_code = this.cart.carts[0].coupon.code
            }
          }
        }
        this.isLoading = false
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
      let coupon = {}
      if (this.coupon_code !== '') {
        this.nowuse_coupon_code = this.coupon_code
      } else {
        this.coupon_code = this.nowuse_coupon_code
      }
      if (this.cart.carts.length === 0) {
        this.coupon_code = ''
        this.nowuse_coupon_code = ''
      }
      coupon = {
        code: this.coupon_code
      }
      this.isLoading = true
      this.$http.post(url, { data: coupon }).then((response) => {
        if (this.coupon_code) {
          this.$httpMessageState(response, '加入優惠券')
          this.getCart()
          this.isLoading = false
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
    },
    comfirmLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      const api = `${process.env.VUE_APP_API}api/user/check`
      this.$http.post(api, this.user)
        .then((res) => {
          if (!res.data.success) {
            this.loginStatus = 0
          } else {
            this.loginStatus = 1
          }
        })
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  computed: {
    ...mapState(buyCountStore, ['getbuyCount', 'setbuyCount'])
  },
  created () {
    this.getCart()
  },
  updated () {
    this.comfirmLogin()
  }
}
</script>

<style>
.cartbg {
  background-image: url('~@/assets/images/cartbg.jpg');
  width: 530px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
