// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';
import 'font-awesome/css/font-awesome.css'
import moment from 'moment'
Vue.use(Vant);
import VueAwesomeSwiper from 'vue-awesome-swiper'
//滑动效果
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper,)

import './assets/style/style.css'
import './assets/style/iconfont/iconfont.css'
//加载
import { Loading } from 'vant';
Vue.use(Loading);

import utils from './utils/util'
Vue.prototype.utils = utils;
//时间依赖
moment.locale('zh-cn')
Vue.prototype.$moment = moment
//引用cookie
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
