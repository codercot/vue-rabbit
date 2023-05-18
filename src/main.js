import { createApp } from 'vue'
import router from '@/router/index.js'
import App from './App.vue'


// 引入初始化样式文件
import '@/styles/common.scss'
import pinia from './stores'

// 引入懒加载指令插件并且注册
// import { lazyPlugin } from '@/directives'
// 引入全局组件插件
// import { componentPlugin } from '@/components'

const app = createApp(App)
app.use(router)
// 注册持久化插件
app.use(pinia)
app.mount('#app')




