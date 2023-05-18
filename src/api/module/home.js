import request from "@/utils/request";

export const getBannerList = (params = {}) => {
  const { distributionSite = '1' } = params
  return request({ url: '/home/banner', params: { distributionSite }, method: "get" })
}

// 新鲜好物 /home/new
export const getHomeNewList = () => request({ url: "/home/new", method: "get" })

//人气推荐 /home/hot
export const getHomeHotList = () => request({ url: '/home/hot', method: "get" })

//商品列表 /goods 
export const getHomeGoodsList = () => request({ url: "/home/goods", method: "get" })