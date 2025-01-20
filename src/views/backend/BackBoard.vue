<template>
  <NavBar/>

  <div>
    <ToastMessages/>
    <router-view/>
  </div>

  <FooTer/>
</template>

<script>
import NavBar from '@/components/BackNavBar.vue'
import FooTer from '@/components/FooTer.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import $httpMessageState from '@/methods/pushMessageState'

export default {
  components: {
    NavBar,
    FooTer,
    ToastMessages
  },
  provide () {
    return {
      emitter,
      $httpMessageState
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('login')
        }
      })
      .catch((err) => {
        if (!err.data.success) {
          emitter.emit('push-message', {
            style: 'danger',
            title: '登入失敗'
          })
        }
      })
  }
}
</script>
