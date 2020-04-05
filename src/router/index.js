import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/home"),
      redirect: "/index",
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import("@/views/login")
        },
        {
          path: '/mima-login',
          name: 'mima-login',
          component: () => import("@/views/mima-login")
        },
        {
          path: '/yzm-login',
          name: 'yzm-login',
          component: () => import("@/views/yzm-login")
        },
        {
          path: '/reset',
          name: 'reset',
          component: () => import("@/views/reset")
        },
        {
          path: '/register',
          name: 'register',
          component: () => import("@/views/register")
        },
        {
          path: '/protocol',
          name: 'protocol',
          component: () => import("@/views/protocol")
        },
        {
          path: '/index',
          name: 'index',
          component: () => import("@/views/index/index")
        }
      ]
    },

  ]
})
