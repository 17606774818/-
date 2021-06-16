import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  }, {
    // 首页
    path: '/index',
    name: 'index',
    component: () => {
      return import('@/views/main/index.vue');
    },
  },{
    // 专栏
    path: '/special_column',
    name: 'special_column',
    component: () => {
      return import('@/views/main/special_column.vue');
    },
  },{
    // 消息
    path: '/news',
    name: 'news',
    component: () => {
      return import('@/views/main/news.vue');
    },
  },{
    // 我的
    path: '/my',
    name: 'my',
    component: () => {
      return import('@/views/main/my.vue');
    },
    children: [
      {
        //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        path: 'login',
        name: 'login',
        component: () => {} import('@/views/user/login.vue'),
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
