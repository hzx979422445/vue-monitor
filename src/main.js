import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import http from './service/http'
import validate from './service/validate'
import util from './service/util'
import './assets/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
Vue.config.productionTip = false
Vue.use(Element)
Vue.use(validate)
Vue.use(util)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  http,
  render: h => h(App)
}).$mount('#app')
