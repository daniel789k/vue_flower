import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import * as AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filters'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { createPinia } from 'pinia'

AOS.init({
  duration: 1000,
  easing: 'ease-in-out-back'
})

const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.$filters = {
  currency,
  date
}

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

app.use(pinia)
app.use(VueAxios, axios)
app.use(router)
app.component('UserLoading', Loading)
app.component('UserForm', Form)
app.component('UserField', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
