<template>
  <div>
    <div class="index-brand fix">
      <div class="b-child-tab home-child">
        <van-tabs
          v-model="activeName"
          color="#323232"
          line-height="0"
        >
          <van-tab title="品牌推荐" name="a">
            <div class="wrap fix">
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
          </van-tab>
          <van-tab title="活动" name="b">
            <div class="design-list fix">
              <van-swipe :loop="false" :width="300" :show-indicators="false">
                <van-swipe-item v-for="(item,index) in activeList" :key="index">
                  <router-link :to="{name:'ActivityDetail',query:{id:item.zhuanti_id}}"><img :src="item.zhuanti_image"></router-link>
                </van-swipe-item>
              </van-swipe>
            </div>
          </van-tab>
        </van-tabs>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import axios from "@/utils/request";
import DesignApi from "@/api/DesignApi";
Vue.use(Swipe);
Vue.use(SwipeItem);
  export default {
    name: "",
    created() {
      this.getBanners();
      this.getActive();
    },
    data() {
      return {
        activeName:'',
        value:'',
        bannerItem:[],
        brandList:[],
        activeList:[]
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
      },
      getActive() {
        DesignApi.eventRecommend().then(res => {
          this.activeList = res.result.list;
        }).catch((error) => {
          console.log("error")
        });
      },
    }
  }
</script>

<style lang="scss" scoped>

  .brand-list{
    .van-swipe-item{
      margin-right:10px;
    }
  }
  .design-list{
    color:#323232;
    margin:0 0 15px 15px;position:relative;overflow:hidden;
    .van-swipe-item{
      margin-right:10px;
      a{
        display:block;
      }
    }
  }
</style>
