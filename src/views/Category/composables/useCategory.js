import { onMounted, ref } from 'vue'
import { getCategoryList } from '@/api'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

export const useCategory = () => {
  const route = useRoute()
  const categoryList = ref({})
  const getCategory = async (id = route.params.id) => {
    let res = await getCategoryList(id)
    categoryList.value = res.result
  }

  onMounted(() => {
    getCategory()
  })
  onBeforeRouteUpdate((to) => {
    console.log(to);
    getCategory(to.params.id)
  })

  return {
    categoryList
  }
}
