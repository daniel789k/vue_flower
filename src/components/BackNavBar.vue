<template>
<nav class="navbar navbar-expand-lg navbar-light sticky-top bg-navBack">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="../assets/images/flowerart-favicon-color.svg" alt="logo" width="30" height="30"> 花之藝</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav ms-auto">
          <router-link to="/back/products" class="nav-link">產品編輯</router-link>
          <router-link to="/back/orders" class="nav-link">訂單</router-link>
          <router-link to="/back/coupons" class="nav-link">優惠券</router-link>
          <a href="#" @click.prevent="logout" class="nav-link">登出</a>
          <router-link to="/" class="nav-link">前台</router-link>
    </div>
          </div>
        </div>
    </nav>

<!-- 購物車側欄 -->
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
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
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ $filters.currency(cart.total) }}</td>
      </tr>
      <tr v-if="cart.final_total !== cart.total">
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
      </tr>
      </tfoot>
    </table>
    <div class="input-group mb-3 input-group-sm">
      <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
          套用優惠碼
        </button>
      </div>
    </div>
    <div class="text-end">
        <router-link class="btn btn-danger" to="/checkform">前往結帳</router-link>
    </div>
  </div>
</div>
</template>

<script>
import emitter from '@/methods/emitter'

export default {
  data () {
    return {
      status: {
        loadingItem: ''
      },
      cart: {},
      coupon_code: '',
      nowuse_coupon_code: ''
    }
  },
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
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/')
          }
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.cart = response.data.data
        this.isLoading = false
        if (this.cart.carts[0].coupon) {
          this.coupon_code = this.cart.carts[0].coupon.code
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
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      let coupon = {}
      if (this.coupon_code !== '') {
        this.nowuse_coupon_code = this.coupon_code
      } else {
        this.coupon_code = this.nowuse_coupon_code
      }
      coupon = {
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
    }
  },
  created () {
    this.getCart()
  }
}
</script>
