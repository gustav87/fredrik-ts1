import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Fredrik from '../views/Fredrik.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Fredrik',
    component: Fredrik
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
