<template>
  <div class="home-base">
    <div class="common-footer-wrap">
      <van-tabbar>
        <van-tabbar-item><router-link :to="{ name: ''}" class='item'><i class='iconfont icon-homepage' /><span class='text'>首页</span></router-link></van-tabbar-item>
        <van-tabbar-item><router-link :to="{ name: ''}" class='item'><i class='iconfont icon-homepage' /><span class='text'>品类</span></router-link></van-tabbar-item>
        <van-tabbar-item><router-link :to="{ name: ''}" class='item'><i class='iconfont icon-homepage' /><span class='text'>优秀设计</span></router-link></van-tabbar-item>
        <van-tabbar-item badge="5"><router-link :to="{ name: ''}" class='item'><i class='iconfont icon-homepage' /><span class='text'>购物车</span></router-link></van-tabbar-item>
        <van-tabbar-item><router-link :to="{ name: ''}" class='item'><i class='iconfont icon-homepage' /><span class='text'>我的</span></router-link></van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
    export default {
        name: "StoreFoot"
    }
</script>

<style lang="scss" scoped>
  .van-tabbar-item{text-align:center;}
    .item{
      .iconfont {
        display: block;
        width:30px;
        height: 30px;
        line-height: 30px;
        font-size:30px;
        text-align: center;
        margin: 0 auto;
      }
      .span{font-size:0.6}
    }
</style>
