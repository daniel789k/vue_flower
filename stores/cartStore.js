import { defineStore } from 'pinia'

export const buyCountStore = defineStore('buyCount', {
  state: () => ({
    buyCount: 0
  }),
  getters: {
    getbuyCount: ({ buyCount }) => {
      return buyCount
    }
  },
  actions: {
    setbuyCount (count) {
      this.buyCount = count
    }
  }
})
