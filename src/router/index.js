import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index/index'
import IndexBanner from '../views/index/IndexBanner'
import IndexMenu from '../views/index/IndexMenu'
import IndexFoot from '../views/index/IndexFoot'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [

    {
      path: '',
      name: 'index',
      component:index
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import ("@/views/login")
    },
    {
      path: '/mima-login',
      name: 'mima-login',
      component: ()=>import ("@/views/mima-login")
    },
    {
      path: '/yzm-login',
      name: 'yzm-login',
      component: ()=>import ("@/views/yzm-login")
    },
    {
      path: '/reset',
      name: 'reset',
      component: ()=>import ("@/views/reset")
    },
    {
      path: '/register',
      name: 'register',
      component: ()=>import ("@/views/register")
    },
    {
      path: '/protocol',
      name: 'protocol',
      component: ()=>import ("@/views/protocol")
    },{
      path: '',
      name: 'IndexBanner',
      component:IndexBanner
    },
    {
      path: '',
      name: 'IndexMenu',
      component:IndexMenu
    },
    {
      path: '',
      name: 'IndexFoot',
      component:IndexFoot
    }
  ]
})
