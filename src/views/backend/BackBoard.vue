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
  data () {
    return {
      picture: 'https://images.unsplash.com/photo-1714139797690-969497e4a65e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  },
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
  }
}
</script>
