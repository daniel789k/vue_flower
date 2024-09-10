<template>
    <UserLoading :active="isLoading"></UserLoading>
    <div class="text-end">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
        增加一個產品
      </button>
    </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{item.category}}</td>
        <td>{{item.title}}</td>
        <td class="text-right">
          {{$filters.currency(item.origin_price)}}
        </td>
        <td class="text-right">
          {{$filters.currency(item.price)}}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <UserPagination :pages="pagination" @emit-pages="getProducts"></UserPagination>
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updatedProduct"></ProductModal>
  <DelModal ref="delModal" :item="tempProduct"
  @delete-product="deleteProduct">
  </DelModal>
  </template>

<script>
import ProductModal from '../components/ProductModal.vue'
import DelModal from '../components/DelModal.vue'
import UserPagination from '../components/UserPagination.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    ProductModal,
    DelModal,
    UserPagination
  },
  inject: ['emitter', '$httpMessageState'],
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            console.log(res.data)
            this.products = res.data.products
            this.pagination = res.data.pagination
          }
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    openDelModal (item) {
      this.tempProduct = { ...item }
      const productComponent = this.$refs.delModal
      productComponent.showModal()
    },
    updatedProduct (item) {
      this.tempProduct = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        console.log(res)
        productComponent.hideModal()
        if (res.data.success) {
          this.getProducts()
          this.$httpMessageState(res, '更新')
        } else {
          this.$httpMessageState(res, '更新')
        }
      })
    },
    deleteProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      const productComponent = this.$refs.delModal
      this.$http.delete(api).then((res) => {
        console.log(res)
        productComponent.hideModal()
        this.getProducts()
      })
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user)
      .then((res) => {
        console.log(res)
        if (!res.data.success) {
          this.$router.push('/login')
        } else {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '登錄成功'
          })
        }
      })
    this.getProducts()
  }
}
</script>
