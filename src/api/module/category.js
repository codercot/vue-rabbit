import request from "@/utils/request";

export const getCategoryList = (id) => request({ url: "/category", params: { id }, method: "get" })