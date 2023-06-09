import axios from "axios";
const request = axios.create({
  baseURL:"http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout:5000
})

request.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
request.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})

export default request