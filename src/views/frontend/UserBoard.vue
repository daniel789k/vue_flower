<template>
  <NavBar/>
  <div class="bg-pageBack">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>

  <FooTer/>
</template>

<script>
import NavBar from '@/components/UserNavBar.vue'
import FooTer from '@/components/FooTer.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import $httpMessageState from '@/methods/pushMessageState'

export default {
  provide () {
    return {
      emitter,
      $httpMessageState
    }
  },
  components: {
    NavBar,
    FooTer,
    ToastMessages
  }
}
</script>
