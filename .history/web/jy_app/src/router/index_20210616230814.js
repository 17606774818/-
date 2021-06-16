import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/user/login.vue'
import index from '../views/main/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },{
    path: '/index',
    name: '/index',
    component: index
  },{
    path: '/login',
    name: '/login',
    component: login
  },
]

const router = new VueRouter({
  routes
})

export default router
