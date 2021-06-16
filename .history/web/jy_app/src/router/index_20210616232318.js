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
  },{
    // 专栏
    path: '/login',
    name: '/login',
    component: login
  },{
    // 消息
    path: '/login',
    name: '/login',
    component: login
  },{
    // 我的
    path: '/login',
    name: '/login',
    component: login,
    children: [
      {
        path: '/login',
        name: '/login',
        component: login
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
