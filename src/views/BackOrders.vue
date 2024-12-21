<template>
  <UserLoading :active="isLoading"/>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">購買時間</th>
        <th>Email</th>
        <th width="120">購買款項</th>
        <th width="120">應付金額</th>
        <th width="100">是否付款</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td v-if="item.is_paid">{{ $filters.date(item.paid_date) }}</td>
        <td v-else>尚未付款</td>
        <td>{{ item.user.email }}</td>
        <td class="text-right">products
        </td>
        <td class="text-right">
          {{ $filters.currency(item.total) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_paid">已付款</span>
          <span class="text-muted" v-else>未付款</span>
        </td>
        <td>
          <div class="btn-group">
            <!-- <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button> -->
            <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <UserPagination :pages="pagination" @emit-pages="getProducts"/>
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updatedProduct"/>
  <DelModal ref="delModal" :item="tempProduct" @delete-product="deleteProduct"/>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue'
import DelModal from '@/components/DelModal.vue'
import UserPagination from '@/components/UserPagination.vue'

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
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.products = res.data.orders
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
        productComponent.hideModal()
        if (res.data.success) {
          this.getProducts()
          // this.emitter.emit('push-message', {
          //   style: 'success',
          //   title: '更新成功'
          // })
          this.$httpMessageState(res, '更新')
        } else {
          this.$httpMessageState(res, '更新')
          // this.emitter.emit('push-message', {
          //   style: 'danger',
          //   title: '更新失敗',
          //   content: res.data.message.join(',')
          // })
        }
      })
    },
    deleteProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      const productComponent = this.$refs.delModal
      this.$http.delete(api).then((res) => {
        productComponent.hideModal()
        this.getProducts()
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
