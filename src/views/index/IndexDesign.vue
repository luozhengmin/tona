<template>
  <div>
    <div class="index-brand fix">
      <div class="wrap fix">
        <div class="title-t">
          <h2><span>设计灵感</span></h2>
        </div>
        <div class="brand-con ab fix">
          <div class="brand-con-l">
            <h3>TONA HOME x <span>卫浴家装</span></h3>
            <span></span>
            <h2>致力为全球用户提供</h2>
            <p>自然健康的全屋解决方案</p>
          </div>
          <div class="brand-con-r">
            <img src="../../assets/image/cp01.jpg">
          </div>
        </div>
      </div>
      <div class="design-list fix">
        <van-swipe :loop="false" :width="300" :show-indicators="false">
          <van-swipe-item v-for="(item,index) in designlist" :key="index">
            <a href=""><img src="http://5b0988e595225.cdn.sohucs.com/images/20170903/3b270c8fc6084df7a187a514fb7b8ef0.jpeg"></a>
            <div class="main ab">
              <div class="infor-l">
                <h2>{{item.d_name}}</h2>
                <div class="-t">
                  <span>韵华茶几 | 原创设计</span>
                  <span><i class="iconfont">&#xe7ae;</i>15402</span>
                </div>
              </div>
              <div class="infor-r">
                <div class="dot"></div>
                <span>数码党</span>
              </div>
            </div>
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
        designlist:[
          {id:1,d_name:'GDC Award 2019 评审奖 获奖作品'},
          {id:1,d_name:'GDC Award 2019 评审奖 获奖作品'},
          {id:1,d_name:'GDC Award 2019 评审奖 获奖作品'},
          {id:1,d_name:'GDC Award 2019 评审奖 获奖作品'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .design-list{
    color:#323232;
    margin:12px 0 0 15px;position:relative;overflow:hidden;
  }
  .van-swipe-item{
    margin-right:10px;
  }
  .main{
    color:#888;
    padding:12px 12px;
    .infor-l{
      width:80%;
      h2{
        font-size:14px;
        color:#000;
        padding-bottom:4px;
      }
      .-t{
        i{font-size:12px;line-height:12px;padding:0 2px 0 6px;}
      }
    }
    .infor-r{
      width:20%;
      text-align: center;
      .dot{width:24px;height:24px;margin:0 auto;background:#aaa;border-radius:50%;}
    }
  }
</style>
