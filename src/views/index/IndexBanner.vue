<template>
  <div class="index-banner fix">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.index_link">
          <img v-lazy="item.adv_code" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
export default {
  name: "IndexBanner",
  props: {
    banners: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {};
  }
};
</script>
