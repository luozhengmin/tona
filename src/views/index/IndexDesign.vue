<template>
  <div>
    <div class="index-brand fix">
      <div class="wrap fix">
        <div class="title-t">
          <h2><span>设计灵感</span></h2>
        </div>
        <div class="brand-con ab fix">
          <div class="brand-con-l ac">
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
          <van-swipe-item v-for="(item,index) in designList" :key="index">
            <router-link :to="{name:'DesignDetail',query:{id:item.fan_id}}"><img :src="item.thumb"></router-link>
            <div class="main ab">
              <div class="infor-l ac">
                <h2>{{item.fan_name}}</h2>
                <div class="-t ab">
                  <router-link :to="{name:'DesignDetail',query:{id:item.id}}">{{item.style}}</router-link>
                  <span class="style-line"></span><span>原创设计</span>
                  <span class="view ab"><i class="van-icon van-icon-eye-o"></i>{{item.see_num}}</span>
                </div>
              </div>
              <div class="infor-r">
                <div class="dot"><img :src="item.member_avatar"></div>
                <span>{{item.member_name}}</span>
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
  import DesignApi from "@/api/DesignApi";
  Vue.use(Swipe);
  Vue.use(SwipeItem);
  export default {
    name: "",
    created() {
      this.getDesign();
    },
    data() {
      return {
        designList:[]
      }
    },
    methods:{
      getDesign() {
        DesignApi.list().then(res => {
          this.designList = res.result;
        }).catch((error)=>{
          console.log("error")
        });
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
    border:solid 1px #eee;
    .infor-l{
      h2{
        font-size:14px;
        color:#000;
        padding-bottom:4px;
      }
      .-t{
        align-items:center;
        font-size:13px;
        .style-line{
          display:block;width:1px;height:13px;background-color:#888;margin:0 6px;
        }
        i{font-size:16px;line-height:12px;padding:0 2px 0 6px;}
        .view{align-items:center;}
      }
    }
    .infor-r{
      text-align: center;
      .dot{
        width:24px;height:24px;margin:0 auto;border-radius:50%;text-align:center;
        img{border-radius:50%;}
      }
    }
  }
</style>
