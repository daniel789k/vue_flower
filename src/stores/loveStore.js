import { defineStore } from 'pinia'

export const useLoveStore = defineStore('loveFlower', {
  state: () => ({
    loveF: [],
    loveTitle: []
  }),
  getters: {
    getloveflower: ({ loveF }) => {
      return loveF
    },
    getTitle: ({ loveTitle }) => {
      return loveTitle
    }
  },
  actions: {
    pushLoveFlower (item) {
      const loveLength = this.loveF.length
      if (loveLength === 0) {
        this.loveF.push(item)
        this.loveTitle.push(item.title)
      } else {
        this.loveF.forEach((value, index) => {
          if (value.title === item.title) {
            this.loveF.splice(index, 1)
            this.loveTitle.splice(index, 1)
          } else if (value.title !== item.title && index === loveLength - 1) {
            this.loveF.push(item)
            this.loveTitle.push(item.title)
          }
        })
      }
    }
  }
})
