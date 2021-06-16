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
    name: 'index',
    component: index
  },{
    // 专栏
    path: '/login',
    name: 'login',
    component: login
  },{
    // 消息
    path: '/login',
    name: 'login',
    component: login
  },{
    // 我的
    path: '/login',
    name: 'login',
    component: login,
    children: [
      {
        //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        path: 'login',
        name: 'login',
        component: () => import('@/views/user/board'),
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
