<template>
  <div class="menu wrap fix">
    <div class="menu-item" v-for="(item,index) in bannerItem" :key="index">
      <router-link :to="item.adv_typedate"><img :src="item.adv_code"></router-link>
      <span class="menu-item-title">{{item.adv_title}}</span>
    </div>
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
        axios.post("/api/Index/getAppadList/ap_id/",{ap_id:15,}).then(res => {
          this.bannerItem = res.result.ad_list;
        });
      }
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
      .menu-item-title {
        display:block;
        color: #696969;
        font-size:15px;
        margin-top:4px;
      }
    }
  }
</style>
