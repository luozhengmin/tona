<template>
  <div>
    <div class="index-brand fix">
      <div class="wrap fix">
        <div class="title-t">
          <h2>品牌推荐<span class="ml">活动</span></h2>
        </div>
        <div class="brand-con" v-for="(item,index) in bannerItem">
          <a href=""><img :src="item.adv_code"></a>
        </div>
      </div>
      <div class="brand-list fix">
        <van-swipe :loop="false" :width="160" :show-indicators="false">
          <van-swipe-item  v-for="(item,index) in brandList" :key="index">
            <img :src="item.adv_code">
          </van-swipe-item>
        </van-swipe>

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import axios from "@/utils/request";
Vue.use(Swipe);
Vue.use(SwipeItem);
  export default {
    name: "",
    created() {
      this.getBanners();
    },
    data() {
      return {
        value:'',
        bannerItem:[],
        brandList:[],
      }
    },
    methods:{
      getBanners() {
        axios.post("/api/Index/getAppadList/ap_id/",{ap_id:8,}).then(res => {
          this.brandList = res.result.ad_list;
        });
        axios.post("/api/Index/getAppadList/ap_id/",{ap_id:7,}).then(res => {
          this.bannerItem = res.result.ad_list;
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .brand-list{
    .van-swipe-item{
      margin-right:10px;
    }
  }

</style>
