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
          component: () => import("@/views/index/index"),
          meta: {
            showFooter: true
          }
        },
        {
          path: 'how-shop',
          name: 'how-shop',
          component: () => import("@/views/service/how-shop"),
        },
        {
          path: 'payment',
          name: 'payment',
          component: () => import("@/views/service/payment"),
        },
        {
          path: 'promises',
          name: 'promises',
          component: () => import("@/views/service/promises"),
        },
        {
          path: 'contact-us',
          name: 'contact-us',
          component: () => import("@/views/service/contact-us"),
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
          path: 'BrandList-1',
          name: 'BrandList-1',
          component: () => import("@/views/index/Brand/BrandList-1"),
        },
        {
          path: 'BrandChild',
          name: 'BrandChild',
          component: () => import("@/views/index/Brand/BrandChild/BrandChild"),
        },
        {
          path: 'Tape',
          name: 'Tape',
          component: () => import("@/views/index/Brand/BrandChild/BrandForm/Tape"),
        },
        {
          path: 'sign-up',
          name: 'sign-up',
          component: () => import("@/views/index/Brand/BrandChild/BrandForm/sign-up"),
        },
        {
          path: 'Recommend',
          name: 'Recommend',
          component: () => import("@/views/design/DesignChild/Recommend"),
        },
        {
          path: 'Activity',
          name: 'Activity',
          component: () => import("@/views/design/DesignChild/Activity"),
        },
        {
          path: 'ActivityDetail',
          name: 'ActivityDetail',
          component: () => import("@/views/design/DesignChild/ActivityDetail"),
        },
        {
          path: 'DesignPlan',
          name: 'DesignPlan',
          component: () => import("@/views/design/DesignChild/DesignPlan"),
        },
        {
          path: 'Design',
          name: 'Design',
          component: () => import("@/views/design/Design"),
          meta: {
            showFooter: true
          }
        },
        {
          path: 'DesignDetail',
          name: 'DesignDetail',
          component: () => import("@/views/design/DesignDetail"),
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
          path: 'ProductList',
          name: 'ProductList',
          component: () => import("@/views/category/ProductList"),
        },
        {
          path: 'ProductList01',
          name: 'ProductList01',
          component: () => import("@/views/category/ProductList01"),
        },
        {
          path: 'ProductList-Item',
          name: 'ProductList-Item',
          component: () => import("@/views/category/ProductList-Item"),
        },
        {
          path: 'ProductSearch',
          name: 'ProductSearch',
          component: () => import("@/views/category/ProductSearch"),
        },
        {
          path: 'ProductDetail',
          name: 'ProductDetail',
          component: () => import("@/views/category/ProductDetail"),
        },
        {
          path: 'DetailMessage',
          name: 'DetailMessage',
          component: () => import("@/views/category/DetailMessage"),
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
          meta: {
            showFooter: true
          }
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
          path: 'identify',
          name: 'identify',
          component: () => import("@/views/person/identify"),
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
          name: 'after-sale/list',
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
        {
          path: 'after-sale/success',
          name: 'after-sale/success',
          component: () => import("@/views/person/after-sale/success"),
        },
        {
          path: 'integral/index',
          name: 'integral-index',
          component: () => import("@/views/person/integral/index"),
        },
        {
          path: 'integral/list',
          name: 'integral-list',
          component: () => import("@/views/person/integral/list"),
        },
        {
          path: 'integral/record',
          name: 'integral-record',
          component: () => import("@/views/person/integral/record"),
        },
        {
          path: 'information/list',
          name: 'information-list',
          component: () => import("@/views/person/information/list"),
        },
        {
          path: 'information/active',
          name: 'information-active',
          component: () => import("@/views/person/information/active"),
        },
        {
          path: 'information/active-detail',
          name: 'information-active-detail',
          component: () => import("@/views/person/information/active-detail"),
        },
        {
          path: 'information/system',
          name: 'information-system',
          component: () => import("@/views/person/information/system"),
        },
        {
          path: 'information/private',
          name: 'information-private',
          component: () => import("@/views/person/information/private"),
        },
        {
          path: 'feedback/edit',
          name: 'feedback-edit',
          component: () => import("@/views/person/feedback/edit"),
        },
        {
          path: 'foot/list',
          name: 'foot-list',
          component: () => import("@/views/person/foot/list"),
        },
      ]
    },

  ]
})
