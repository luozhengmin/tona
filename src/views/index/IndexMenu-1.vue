<template>
  <div class="menu wrap fix">
    <div class="menu-item" @click="goBrand">
      <i class="iconfont bg-5">&#xe7ae;</i>
      <span class="menu-item-title">硬装建材</span>
    </div>
    <div class="menu-item" @click="goDesign">
      <i class="iconfont bg-6">&#xe671;</i>
      <span class="menu-item-title">软装家居</span>
    </div>
    <div class="menu-item" @click="goGlobal">
      <i class="iconfont bg-7">&#xe7ae;</i>
      <span class="menu-item-title">智能家电</span>
    </div>
    <div class="menu-item" @click="goPartner">
      <i class="iconfont bg-8">&#xe6b5;</i>
      <span class="menu-item-title">全屋定制</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexMenu-1",
    methods: {
      goBrand() {
        this.$router.push({'name': 'BrandList'})
      },
      goDesign() {
        this.$router.push({'name': 'BrandList'})
      },
      goGlobal() {
        this.$router.push({'name': 'BrandList'})
      },
      goPartner() {
        this.$router.push({'name': 'BrandList'})
      },
    }
  }
</script>

<style lang="scss" scoped>
  .menu {
    overflow: hidden;
    justify-content: space-around;
    background: #FFFFFF;
    padding-top:20px;
    .menu-item {
      margin-bottom:20px;
      width:25%;
      text-align:center;
      float: left;
      .iconfont{
        margin:auto;
        width:54px;
        height:54px;
        line-height:58px;
        font-size:28px;
        color:#fff;
        overflow: hidden;
        display:block;
        text-align: center;
        border-radius:5px;
      }
      .menu-item-icon {
        width:54px;
        height:54px;
        overflow:hidden;
      }
      .menu-item-title {
        display:block;
        color: #696969;
        font-size:14px;
        margin-top:4px;
      }
    }
  }
  .bg-5{background-image: linear-gradient(to bottom , #f1d690,#e1c48a );}
  .bg-6{background-image: linear-gradient(to bottom , #35e7ba,#2cddca );}
  .bg-7{background-image: linear-gradient(to bottom , #6fc7ff,#5a91fe );}
  .bg-8{background-image: linear-gradient(to bottom , #ff9d74,#fd5d53 );}
</style>
