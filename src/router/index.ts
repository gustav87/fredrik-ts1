import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Fredrik from '../views/Fredrik.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Fredrik',
    component: Fredrik
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
