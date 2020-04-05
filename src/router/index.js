import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("@/views/home"),
      redirect: "index",
      children: [
        {
          path: 'index',
          name: 'Index',
          component: () => import("@/views/index/index")
        },
        {
          path: 'login',
          name: 'login',
          component: () => import("@/views/login/login")
        },
        {
          path: 'mima-login',
          name: 'mima-login',
          component: () => import("@/views/login/mima-login")
        },
        {
          path: 'yzm-login',
          name: 'yzm-login',
          component: () => import("@/views/login/yzm-login")
        },
        {
          path: 'reset',
          name: 'reset',
          component: () => import("@/views/login/reset")
        },
        {
          path: 'register',
          name: 'register',
          component: () => import("@/views/login/register")
        },
        {
          path: 'protocol',
          name: 'protocol',
          component: () => import("@/views/login/protocol")
        },
      ]
    },

  ]
})
