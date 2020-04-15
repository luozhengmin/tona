<template>
  <div>
    <div class="index-brand fix">
      <div class="wrap fix">
        <div class="title-t">
          <h2>品牌推荐<span class="ml">活动</span></h2>
        </div>
        <div class="brand-con ab fix">
          <div class="brand-con-l">
            <h3>TONA HOME x <span>品牌季</span></h3>
            <span></span>
            <h2>空间有限，选择无线</h2>
            <p>用我们的设计打造你的专属空间</p>
          </div>
          <div class="brand-con-r">
            <img src="../../assets/image/cp01.jpg">
          </div>
        </div>
      </div>
      <div class="brand-list fix">
        <van-swipe :loop="false" :width="160" :show-indicators="false">
          <van-swipe-item  v-for="(item,index) in brandlist" :key="index">
            <img src="../../assets/image/cp02.jpg">
          </van-swipe-item>
        </van-swipe>

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
  export default {
    name: "",
    data() {
      return {
        brandlist:[
          { id:1,imgUrl:''},
          { id:2,imgUrl:''},
          { id:3,imgUrl:''},
          { id:4,imgUrl:''}
        ]
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
