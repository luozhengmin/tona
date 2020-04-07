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
          component: () => import("@/views/login/login"),
          meta: {
            showFooter: false
          }
        },
        {
          path: 'mima-login',
          name: 'mima-login',
          component: () => import("@/views/login/mima-login"),
          meta: {
            showFooter: false
          }
        },
        {
          path: 'yzm-login',
          name: 'yzm-login',
          component: () => import("@/views/login/yzm-login"),
          meta: {
            showFooter: false
          }
        },
        {
          path: 'reset',
          name: 'reset',
          component: () => import("@/views/login/reset"),
          meta: {
            showFooter: false
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import("@/views/login/register"),
          meta: {
            showFooter: false
          }
        },
        {
          path: 'protocol',
          name: 'protocol',
          component: () => import("@/views/login/protocol"),
          meta: {
            showFooter: false
          }
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import("@/views/cart/index"),
          meta: {
            showFooter: true
          }
        },
        {
          path: 'confirm',
          name: 'confirm',
          component: () => import("@/views/cart/confirm")
        },
        {
          path: 'receipt',
          name: 'receipt',
          component: () => import("@/views/cart/receipt")
        },
        {
          path: 'pay',
          name: 'pay',
          component: () => import("@/views/cart/pay")
        },
        {
          path: 'pay-success',
          name: 'pay-success',
          component: () => import("@/views/cart/pay-success")
        },
        {
          path: 'BrandList',
          name: 'BrandList',
          component: () => import("@/views/index/brand/BrandList")
        },
        {
          path: 'Investment',
          name: 'Investment',
          component: () => import("@/views/index/Investment/Investment")
        },
        {
          path: 'Globalstore',
          name: 'Globalstore',
          component: () => import("@/views/index/Globalstore/Globalstore")
        },
      ]
    },

  ]
})
