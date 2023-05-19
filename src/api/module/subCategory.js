import request from "@/utils/request";

// 二级分类 /category/sub/filter
export const getCategoryFilter = (id) => request({ url: "/category/sub/filter", params: { id }, method: "get" })