import { defineStore } from 'pinia'

// export default defineStore('loveStore', {
//   state: () => ({
//     loveFlower: ['123', '321']
//   }),
//   getters: {
//     getloveflower: ({ loveFlower }) => {
//       return loveFlower
//     }
//   }
// })

// export const useLoveStore = defineStore('loveStore', {
//   state: () => (['123', '321']),
//   getters: {
//     getloveflower: (loveFlower) => {
//       return loveFlower
//     }
//   }
// })

export const useLoveStore = defineStore('loveFlower', {
  state: () => ({
    loveF: []
  }),
  getters: {
    getloveflower: ({ loveF }) => {
      return loveF
    }
  },
  actions: {
    pushLoveFlower (item) {
      const loveLength = this.loveF.length
      if (loveLength === 0) {
        this.loveF.push(item)
      } else {
        this.loveF.forEach((value, index) => {
          if (value.title === item.title) {
            this.loveF.splice(index, 1)
          } else if (value.title !== item.title && index === loveLength - 1) {
            this.loveF.push(item)
          }
        })
      }
    }
  }
})
