<template>
  <UserLoading :active="isLoading"/>

  <div style="min-height: calc(100vh - 72px - 57.6px);">
    <div class="container-fluid py-3">
      <div class="container-fluid p-3">
        <div class="row">
          <div class="col d-flex flex-column flex-md-row justify-content-center align-items-center px-1 px-md-0">
            <button type="button"
              class="btn bg-success text-white btn-sm rounded-pill"
              style="width: 2rem; height: 2rem"
            >
              1
            </button>
            <p class="ms-md-2 my-2 my-md-auto text-success text-nowrap">訂購資料</p>
          </div>
          <span
            class="bg-white w-25 rounded my-auto mx-0 mx-md-3 col"
            style="height: 0.2rem"
          />
          <div class="col d-flex flex-column flex-md-row justify-content-center align-items-center px-1 px-md-0">
            <button type="button"
              class="btn bg-white text-black btn-sm rounded-pill"
              style="width: 2rem; height: 2rem"
            >
              2
            </button>
            <p class="ms-md-2 my-2 my-md-auto text-black text-nowrap">確認付款</p>
          </div>
          <span
            class="bg-white w-25 rounded my-auto mx-0 mx-md-3 col"
            style="height: 0.2rem"
          />
          <div class="col d-flex flex-column flex-md-row justify-content-center align-items-center px-1 px-md-0">
            <button type="button"
              class="btn bg-white text-black btn-sm rounded-pill"
              style="width: 2rem; height: 2rem"
            >
              3
            </button>
            <p class="ms-md-2 my-2 my-md-auto text-black text-nowrap">完成訂單</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row container mx-auto">
    <!-- 表單 -->
      <div class="col-md-6">
        <div class="my-4 row justify-content-center">
          <UserForm class="col-md-11" v-slot="{ errors }"
            @submit="createOrder">
            <div class="mb-3">
                <label for="email" class="form-label">Email *</label>
                <UserField id="email" name="email" type="email" class="form-control"
                        :class="{ 'is-invalid': errors['email'] }"
                        placeholder="請輸入 Email" rules="email|required"
                        v-model="form.user.email"/>
                <ErrorMessage name="email" class="invalid-feedback"/>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">收件人姓名 *</label>
                <UserField id="name" name="姓名" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['姓名'] }"
                        placeholder="請輸入姓名" rules="required"
                        v-model="form.user.name"/>
                <ErrorMessage name="姓名" class="invalid-feedback"/>
              </div>
              <div class="mb-3">
                <label for="tel" class="form-label">收件人電話 *</label>
                <UserField id="tel" name="電話" type="tel" class="form-control"
                        :class="{ 'is-invalid': errors['電話'] }"
                        placeholder="請輸入電話" rules="required"
                        v-model="form.user.tel"/>
                <ErrorMessage name="電話" class="invalid-feedback"/>
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">收件人地址 *</label>
                <UserField id="address" name="地址" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['地址'] }"
                        placeholder="請輸入地址" rules="required"
                        v-model="form.user.address"/>
                <ErrorMessage name="地址" class="invalid-feedback"/>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <textarea name="" id="message" class="form-control" cols="30" rows="3" v-model="form.message"/>
              </div>
              <div class="mb-3">
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-navBack">送出訂單</button>
              </div>
          </UserForm>
        </div>
      </div>
    <!-- 購買商品 -->
      <div class="col-md-6 sticky-top h-100 mb-3 mt-3 bg-transparent" style="top: 56px;">
        <table class="table align-middle border-light" style="--bs-table-bg: rgba(0,0,0,0);">
          <thead>
            <tr>
              <th/>
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
                    <i class="bi bi-x"/>
                  </button>
                </td>
                <td>
                  <img :src="item.product.imageUrl" alt="商品圖片" class="img-fluid">
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
              <td/>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ $filters.currency(cart.total) }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td/>
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group input-group-sm w-50 ms-auto" v-if="windowWidth > 992">
          <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary rounded-0 rounded-end" type="button" @click="addCouponCode">
              套用優惠碼
            </button>
          </div>
        </div>
        <div class="input-group input-group-sm" v-else>
          <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary rounded-0 rounded-end" type="button" @click="addCouponCode">
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
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
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      cart: {},
      isLoading: false,
      status: {
        loadingItem: ''
      },
      products: [],
      coupon_code: '',
      windowWidth: window.innerWidth
    }
  },
  inject: ['$httpMessageState'],
  methods: {
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          this.$httpMessageState(res, '建立訂單')
          this.setbuyCount(0)
          this.$router.push(`/checkout/${res.data.orderId}`)
        })
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '建立訂單失敗'
            })
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
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '取得購物車失敗'
            })
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
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '更新購物車失敗'
            })
          }
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
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '優惠券添加失敗'
            })
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
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '移除品項失敗'
            })
          }
        })
    }
  },
  computed: {
    ...mapState(buyCountStore, ['getbuyCount', 'setbuyCount'])
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  created () {
    this.getCart()
  }
}
</script>
