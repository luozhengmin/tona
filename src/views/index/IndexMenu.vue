<template>
  <div class="menu wrap fix">
    <div class="menu-item" @click="goBrand">
      <img src="../../assets/image/nav06.png">
      <span class="menu-item-title">品牌馆</span>
    </div>
    <div class="menu-item" @click="goDesign">
      <img src="../../assets/image/nav07.png">
      <span class="menu-item-title">设计方案</span>
    </div>
    <div class="menu-item" @click="goGlobal">
      <img src="../../assets/image/nav08.png">
      <span class="menu-item-title">全球门店</span>
    </div>
    <div class="menu-item" @click="goPartner">
      <img src="../../assets/image/nav09.png">
      <span class="menu-item-title">招商加盟</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "IndexMenu",
      methods: {
        goBrand() {
          this.$router.push({'name': 'BrandList-1'})
        },
        goDesign() {
          this.$router.push({'name': 'Design'})
        },
        goGlobal() {
          this.$router.push({'name': 'GlobalStore'})
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
    background: #fff;
    padding-top:8px;
    .menu-item {
      margin-bottom:20px;
      width:25%;
      text-align:center;
      float: left;
      /*.iconfont{*/
        /*margin:auto;*/
        /*width:54px;*/
        /*height:54px;*/
        /*line-height:54px;*/
        /*font-size:28px;*/
        /*color:#fff;*/
        /*overflow: hidden;*/
        /*display:block;*/
        /*text-align: center;*/
        /*border-radius:50%;*/
      /*}*/
      /*.menu-item-icon {*/
        /*width:54px;*/
        /*height:54px;*/
        /*overflow:hidden;*/
      /*}*/
      img{width:54px;height:54px;}
      .menu-item-title {
        display:block;
        color: #696969;
        font-size:14px;
        margin-top:4px;
      }
    }
    .menu-item:nth-child(1){
      .iconfont{line-height:58px;}
    }
  }
  .bg-1{background-image: linear-gradient(to bottom , #f1d690,#e1c48a );}
  .bg-2{background-image: linear-gradient(to bottom , #35e7ba,#2cddca );}
  .bg-3{background-image: linear-gradient(to bottom , #6fc7ff,#5a91fe );}
  .bg-4{background-image: linear-gradient(to bottom , #ff9d74,#fd5d53 );}
</style>
