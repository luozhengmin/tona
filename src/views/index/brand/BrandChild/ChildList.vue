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
            <img src="../../../../assets/image/cp01.jpg">
          </div>
        </div>
      </div>
      <div class="design-list fix">
        <van-swipe :loop="false" :width="300" :show-indicators="false">
          <van-swipe-item v-for="(item,index) in childlist" :key="index">
            <a href=""><img src="http://5b0988e595225.cdn.sohucs.com/images/20170903/3b270c8fc6084df7a187a514fb7b8ef0.jpeg"></a>
            <div class="main ab">
              <div class="infor-l ac">
                <h2>{{item.d_name}}</h2>
                <div class="-t">
                  <span>纯德系，现代卫浴品牌</span>
                </div>
              </div>
              <div class="infor-r">
                <van-tag color="#ee502f">NEW</van-tag>
                <span class="ab"><van-icon name="eye-o" />15402</span>
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
    name: "ChildList",
    data() {
      return {
        childlist:[
          {id:1,d_name:'TONA卫浴'},
          {id:1,d_name:'TONA卫浴'},
          {id:1,d_name:'TONA卫浴'},
          {id:1,d_name:'TONA卫浴'}
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
    align-items:center;
    .infor-l{
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
      flex-direction:column;
      text-align:right;
      .van-tag{border-radius:10px 10px 10px 0;}
      span{
        align-items:center;
        .van-icon{font-size:16px;padding-right:2px;}
      }
    }
  }
</style>
