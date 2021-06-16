import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/user/login.vue'
import index from '../views/main/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  }, {
    // 首页
    path: '/index',
    name: '/index',
    component: index
  }, {
    // 登录
    path: '/login',
    name: '/login',
    component: login
  },
  
]

const router = new VueRouter({
  routes
})

export default router
