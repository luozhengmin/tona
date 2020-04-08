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
      redirect: "LandPage",
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
          path: 'LandPage',
          name: 'LandPage',
          component: () => import("@/views/index/LandPage/LandPage"),
        },
        {
          path: 'BrandList',
          name: 'BrandList',
          component: () => import("@/views/index/Brand/BrandList"),
        },
        {
          path: 'BrandChild',
          name: 'BrandChild',
          component: () => import("@/views/index/Brand/BrandChild/BrandChild"),
        },
        {
          path: 'GlobalStore',
          name: 'GlobalStore',
          component: () => import("@/views/index/GlobalStore/GlobalStore"),
        },
        {
          path: 'Investment',
          name: 'Investment',
          component: () => import("@/views/index/Investment/Investment"),
        },
        {
          path: 'MakeStore',
          name: 'MakeStore',
          component: () => import("@/views/index/GlobalStore/MakeStore"),
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
          path: 'person',
          name: 'person',
          component: () => import("@/views/person/index"),
        },
        {
          path: 'help',
          name: 'help',
          component: () => import("@/views/person/help"),
        },
        {
          path: 'help-detail',
          name: 'help-detail',
          component: () => import("@/views/person/help-detail"),
        },
        {
          path: 'person-center',
          name: 'person-center',
          component: () => import("@/views/person/person-center"),
        },
        {
          path: 'person-edit',
          name: 'person-edit',
          component: () => import("@/views/person/person-edit"),
        },
        {
          path: 'update-password',
          name: 'update-password',
          component: () => import("@/views/person/update-password"),
        },
        {
          path: 'update-mobile-1',
          name: 'update-mobile-1',
          component: () => import("@/views/person/update-mobile-1"),
        },
        {
          path: 'update-mobile-2',
          name: 'update-mobile-2',
          component: () => import("@/views/person/update-mobile-2"),
        },
        {
          path: 'third-auth',
          name: 'third-auth',
          component: () => import("@/views/person/third-auth"),
        },
        {
          path: 'address-list',
          name: 'address-list',
          component: () => import("@/views/person/address/list"),
        },
        {
          path: 'address-edit',
          name: 'address-edit',
          component: () => import("@/views/person/address/edit"),
        },
        {
          path: 'collect',
          name: 'collect',
          component: () => import("@/views/person/collect"),
        },
        {
          path: 'order/search',
          name: 'order-search',
          component: () => import("@/views/person/order/search"),
        },
        {
          path: 'order/list',
          name: 'order-list',
          component: () => import("@/views/person/order/list"),
        },
        {
          path: 'order/evaluate',
          name: 'order-evaluate',
          component: () => import("@/views/person/order/evaluate"),
        },
        {
          path: 'order/detail',
          name: 'order-detail',
          component: () => import("@/views/person/order/detail"),
        },
        {
          path: 'order/logistics',
          name: 'logistics',
          component: () => import("@/views/person/order/logistics"),
        },
        {
          path: 'after-sale/list',
          name: 'after-sale-list',
          component: () => import("@/views/person/after-sale/list"),
        },
        {
          path: 'after-sale/edit',
          name: 'after-sale-edit',
          component: () => import("@/views/person/after-sale/edit"),
        },
        {
          path: 'after-sale/edit2',
          name: 'after-sale-edit2',
          component: () => import("@/views/person/after-sale/edit2"),
        },
        {
          path: 'after-sale/detail',
          name: 'after-sale-detail',
          component: () => import("@/views/person/after-sale/detail"),
        },
      ]
    },

  ]
})
