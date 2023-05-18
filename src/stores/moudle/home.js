import { defineStore } from 'pinia'
import { getBannerList } from '@/api'
export const useHomeBanner = defineStore('home', {
  state: () => {
    return {
      bannerList: []
    }
  },
  actions: {
    // banner数据
    async getBanner() {
      let res = await getBannerList()

      this.bannerList = res.result
    }
  }
})