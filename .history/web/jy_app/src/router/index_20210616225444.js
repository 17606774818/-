import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/user/login.vue'
import home from '../views/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },{
    path: '/login',
    name: '/login',
    component: login
  },{
    path: '/home',
    name: '/home',
    component: home
  },
]

const router = new VueRouter({
  routes
})

export default router
