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
            <ul class="ab fix">
              <li>
                <router-link to="/BrandList-1">
                  <img src="../../../assets/image/nav05.png">
                  <span>品牌馆</span>
                </router-link>
              </li>
              <li>
                <router-link to="/Design">
                  <img src="../../../assets/image/nav04.png">
                  <span>优秀设计</span>
                </router-link>
              </li>
              <li>
                <router-link to="/GlobalStore">
                  <img src="../../../assets/image/nav03.png">
                  <span>全球门店</span>
                </router-link>
              </li>
              <li>
                <router-link to="/Investment">
                  <img src="../../../assets/image/nav02.png">
                  <span>招商加盟</span>
                </router-link>
              </li>
              <li>
                <p @click="goPage('https://www.tona.com/Index/lists/catid/1.html')">
                  <img src="../../../assets/image/nav01.png">
                  <span>关于我们</span>
                </p>
              </li>
            </ul>
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
  export default {
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
      goPage (url) {
        window.location.href = url
      }
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
