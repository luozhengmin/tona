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
