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
    }
  }
}
</script>
