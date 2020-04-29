<template>
  <div class="menu wrap fix">
    <div class="menu-item" @click="goBrand(4)" v-for="(item,index) in bannerItem" :key="index">
      <a href=""><img :src="item.adv_code"></a>
      <span class="menu-item-title">{{item.adv_title}}</span>
    </div>
    <!--<div class="menu-item" @click="goBrand(1)">-->
      <!--<i class="iconfont bg-5">&#xe7ae;</i>-->
      <!--<span class="menu-item-title">硬装建材</span>-->
    <!--</div>-->
    <!--<div class="menu-item" @click="goBrand(2)">-->
      <!--<i class="iconfont bg-6">&#xe671;</i>-->
      <!--<span class="menu-item-title">软装家居</span>-->
    <!--</div>-->
    <!--<div class="menu-item" @click="goBrand(3)">-->
      <!--<i class="iconfont bg-7">&#xe7ae;</i>-->
      <!--<span class="menu-item-title">智能家电</span>-->
    <!--</div>-->
    <!--<div class="menu-item" @click="goBrand(4)">-->
      <!--<i class="iconfont bg-8">&#xe6b5;</i>-->
      <!--<span class="menu-item-title">全屋定制</span>-->
    <!--</div>-->
  </div>
</template>

<script>
  import axios from "@/utils/request";
  export default {
    name: "IndexMenu-1",
    created() {
      this.getBanners();
    },
    data(){
      return{
        bannerItem:[]
      }
    },
    methods: {
      getBanners() {
        axios.post("/api/Index/getIndexAdList/ap_id",{ap_id:15,}).then(res => {
          this.bannerItem = res.result.banners;
        });
      }
//      goBrand(cat_id) {
//        this.$router.push('BrandList?cat_id='+cat_id)
//      },

    },
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
      img{width:54px;}
      /*.iconfont{*/
        /*margin:auto;*/
        /*width:54px;*/
        /*height:54px;*/
        /*line-height:58px;*/
        /*font-size:28px;*/
        /*color:#fff;*/
        /*overflow: hidden;*/
        /*display:block;*/
        /*text-align: center;*/
        /*border-radius:5px;*/
      /*}*/
      /*.menu-item-icon {*/
        /*width:54px;*/
        /*height:54px;*/
        /*overflow:hidden;*/
      /*}*/
      .menu-item-title {
        display:block;
        color: #696969;
        font-size:14px;
        margin-top:4px;
      }
    }
  }
  /*.bg-5{background-image: linear-gradient(to bottom , #f1d690,#e1c48a );}*/
  /*.bg-6{background-image: linear-gradient(to bottom , #35e7ba,#2cddca );}*/
  /*.bg-7{background-image: linear-gradient(to bottom , #6fc7ff,#5a91fe );}*/
  /*.bg-8{background-image: linear-gradient(to bottom , #ff9d74,#fd5d53 );}*/
</style>
