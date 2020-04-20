<template>
  <div class="home-base">
    <div class="common-footer-wrap">
      <van-tabbar active-color="#f12c20" inactive-color="#888">
        <van-tabbar-item><router-link :to="{ name: 'index'}" class='item'><i class='iconfont icon-homepage' /><span class='text'>首页</span></router-link></van-tabbar-item>
        <van-tabbar-item><router-link :to="{ name: 'ProductList'}" class='item'><i class='iconfont icon-classify_icon' style="font-size:19px;"/><span class='text'>品类</span></router-link></van-tabbar-item>
        <van-tabbar-item><router-link :to="{ name: 'Design'}" class='item'><i class='iconfont icon-sheji' style="font-size:22px;"/><span class='text'>优秀设计</span></router-link></van-tabbar-item>
        <van-tabbar-item badge="5"><router-link :to="{ name: 'cart'}" class='item'><i class='iconfont icon-gouwuche0' /><span class='text'>购物车</span></router-link></van-tabbar-item>
        <van-tabbar-item><router-link :to="{ name: 'person'}" class='item'><i class='iconfont icon-wode' /><span class='text'>我的</span></router-link></van-tabbar-item>
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
        height:26px;
        line-height:26px;
        font-size:26px;
        text-align: center;
        margin: 0 auto;
      }
      .span{font-size:0.6}
    }
</style>
