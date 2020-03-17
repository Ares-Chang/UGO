import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入 request
import request from './utils/request'

// 设置基础路径
var plugin = request({
  baseUrl: "https://api-ugo-web.itheima.net"
})

// 注册
Vue.use(plugin)

const app = new Vue({
  ...App
})
app.$mount()
