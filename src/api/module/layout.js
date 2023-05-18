import request from "@/utils/request";

export const categoryList = () => request({ url: "/home/category/head", method: "get" })