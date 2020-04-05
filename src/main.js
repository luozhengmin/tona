// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'font-awesome/css/font-awesome.css'

Vue.use(Vant);
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import './assets/style/style.css'
import './assets/style/iconfont/iconfont.css'
/*图标应用*/
import { Icon } from 'vant';
Vue.use(Icon);
/*懒加载*/
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
