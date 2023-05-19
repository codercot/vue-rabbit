import { getBannerList } from "@/api"
import { onMounted, ref } from 'vue'

export const useBanner = () => {
  const bannerList = ref([])
  // 轮播图数据
  const getBanner = async () => {
    let res = await getBannerList({ distributionSite: "2" })
    bannerList.value = res.result
  }

  onMounted(() => {
    getBanner()
  })

  return {
    bannerList
  }
}
