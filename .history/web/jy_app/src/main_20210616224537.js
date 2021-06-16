import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import axios from 'axios'
// 挂载到原型上 由于继承关系，所有的组件中都能使用 this.axios
Vue.prototype.axios = axios
// 配置全局 url 前缀
// axios.defaults.baseURL = "/api/private/v1/"
// 配置连接超时时间
axios.defaults.timeout=5000;

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use

// 导入字体图标
import '../public/font/iconfont.css'
// 导入全局样式表
import '../public/css/index.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

