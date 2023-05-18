import { defineStore } from 'pinia'
import { categoryList } from '@/api/module/layout'
const useCategory = defineStore('category', {
  state: () => {
    return {
      categoryListData: []
    }
  },

  actions: {
    async getCategory() {
      let res = await categoryList()
      if (res.code == 1) {
        this.categoryListData = res.result
      }
    }
  }
})
export default useCategory
