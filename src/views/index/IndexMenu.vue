<template>
  <div class="menu wrap fix">
    <div class="menu-item" @click="goBrandstore">
      <i class="iconfont bg-1">&#xe7ae;</i>
      <span class="menu-item-title">品牌馆</span>
    </div>
    <div class="menu-item" @click="goDesign">
      <i class="iconfont bg-2">&#xe671;</i>
      <span class="menu-item-title">设计方案</span>
    </div>
    <div class="menu-item" @click="goGloble">
      <i class="iconfont bg-3">&#xe7ae;</i>
      <span class="menu-item-title">全球门店</span>
    </div>
    <div class="menu-item" @click="goPartner">
      <i class="iconfont bg-4">&#xe6b5;</i>
      <span class="menu-item-title">招商加盟</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "IndexMenu",
      methods: {
        goBrandstore() {
          this.$router.push({name: 'BrandList'})
        },
        goDesign() {
          this.$router.push({'name': ''})
        },
        goGloble() {
          this.$router.push({'name': 'Globalstore'})
        },
        goPartner() {
          this.$router.push({'name': 'Investment'})
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
        border-radius:50%;
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
  .bg-1{background-image: linear-gradient(to bottom , #f1d690,#e1c48a );}
  .bg-2{background-image: linear-gradient(to bottom , #35e7ba,#2cddca );}
  .bg-3{background-image: linear-gradient(to bottom , #6fc7ff,#5a91fe );}
  .bg-4{background-image: linear-gradient(to bottom , #ff9d74,#fd5d53 );}
</style>
