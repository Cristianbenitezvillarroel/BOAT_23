import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/eventlist',
    name: 'EventList',
    component: () => import('@/views/EventList')
  },
]

const router = new VueRouter({
  routes
})

export default router