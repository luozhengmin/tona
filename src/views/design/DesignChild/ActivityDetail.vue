<template>
    <div class="container">
      <div class="head fix">
        <div class="wrap fix">
          <div class="head-ss fix">
            <van-icon name="arrow-left" @click="$router.go(-1)"/>
          </div>
          <div class="head-logo">
            活动标题
          </div>
          <div class="menu-ico" v-bind:class="{active:isActive}" v-on:click="isActive=!isActive">
            <span></span>
          </div>
        </div>
        <transition name="van-slide-down">
          <div class="slideNav" v-if="isActive">
            <nav-menu></nav-menu>
          </div>
        </transition>
      </div>
      <div class="activity-detail fix" v-html="activeInfo.zhuanti_content">
        <!--{{activeInfo.zhuanti_content}}-->
        <!--<p><img src="../../../assets/image/hd01.jpg"/></p>-->
        <!--<div class="activity-link">-->
          <!--投稿作品请按照官方指定户型进行设计，查看<router-link to=""> 大赛题目>></router-link>-->
        <!--</div>-->
        <!--<p><img src="../../../assets/image/hd02.jpg"/></p>-->
        <!--<p><img src="../../../assets/image/hd03.jpg"/></p>-->
      </div>
    </div>
</template>

<script>
  import DesignApi from "@/api/DesignApi";
  import NavMenu from "../../index/navMenu.vue";
  export default {
    components: {NavMenu},
    name: "ActivityDetail",
    data(){
      return{
        isActive: false,
        activeInfo:{}
      }
    },
    methods:{
      getActiveDetail(id){
        DesignApi.activeDetail({zhuanti_id:id}).then(res=>{
          this.activeInfo = res.result;
          console.log(this.activeInfo)
        })
      },
    },
    created(){
      let id = this.$route.query.id;
      this.getActiveDetail(id)
    }
  }
</script>

<style lang="scss" scoped>
  .activity-link{
    padding:12px 0;
    background-color:#050291;
    text-align:center;
    font-size:13px;color:#fff;
    a{color:#dedd14;}
  }
</style>
