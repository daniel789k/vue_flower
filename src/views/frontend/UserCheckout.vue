<template>
  <Loading :active="isLoading"/>

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
            class="bg-success w-25 rounded my-auto mx-0 mx-md-3 col"
            style="height: 0.2rem"
          />
          <div class="col d-flex flex-column flex-md-row justify-content-center align-items-center px-1 px-md-0">
            <button type="button"
              class="btn bg-success text-white btn-sm rounded-pill"
              style="width: 2rem; height: 2rem"
            >
              2
            </button>
            <p class="ms-md-2 my-2 my-md-auto text-success text-nowrap">確認付款</p>
          </div>
          <span v-if="!order.is_paid"
            class="bg-white w-25 rounded my-auto mx-0 mx-md-3 col"
            style="height: 0.2rem"
          />
          <span v-else
            class="bg-success w-25 rounded my-auto mx-0 mx-md-3 col"
            style="height: 0.2rem"
          />
          <div class="col d-flex flex-column flex-md-row justify-content-center align-items-center px-1 px-md-0">
            <button type="button" v-if="!order.is_paid"
              class="btn bg-white text-black btn-sm rounded-pill"
              style="width: 2rem; height: 2rem"
            >
              3
            </button>
            <button type="button" v-else
              class="btn bg-success text-white btn-sm rounded-pill"
              style="width: 2rem; height: 2rem"
            >
              3
            </button>
            <p v-if="!order.is_paid" class="ms-md-2 my-2 my-md-auto text-black text-nowrap">完成訂單</p>
            <p v-else class="ms-md-2 my-2 my-md-auto text-success text-nowrap">完成訂單</p>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 row justify-content-center container mx-auto">
      <form class="col-md-6" @submit.prevent="payOrder">
        <table class="table align-middle">
          <thead>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="text-end">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-end">總計</td>
              <td class="text-end">{{ order.total }}</td>
            </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-end" v-if="order.is_paid === false">
          <button type="submit" class="btn btn-navBack">確認付款去</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'

export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order
          }
        })
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '取得訂單失敗'
            })
          }
        })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            this.getOrder()
          }
        })
        .catch((err) => {
          if (!err.data.success) {
            emitter.emit('push-message', {
              style: 'danger',
              title: '訂單付款失敗'
            })
          }
        })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
