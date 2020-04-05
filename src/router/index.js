import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: ()=>import ("@/views/index/index")
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
    }
    ,
    {
      path: '/protocol',
      name: 'protocol',
      component: ()=>import ("@/views/protocol")
    }
  ]
})
