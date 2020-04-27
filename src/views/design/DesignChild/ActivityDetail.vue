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
                <router-link to="/BrandList">
                  <i class="iconfont bg-7">&#xe7ae;</i>
                  <span>品牌馆</span>
                </router-link>
              </li>
              <li>
                <router-link to="/Design">
                  <i class="iconfont bg-7">&#xe508;</i>
                  <span>优秀设计</span>
                </router-link>
              </li>
              <li>
                <router-link to="/GlobalStore">
                  <i class="iconfont bg-7">&#xe7b9;</i>
                  <span>全球门店</span>
                </router-link>
              </li>
              <li>
                <router-link to="/Investment">
                  <i class="iconfont bg-7">&#xe6b5;</i>
                  <span>招商加盟</span>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <i class="iconfont bg-7">&#xe602;</i>
                  <span>关于我们</span>
                </router-link>
              </li>
            </ul>
          </div>
        </transition>
      </div>
      <div class="activity-detail fix">
        <p><img src="../../../assets/image/hd01.jpg"/></p>
        <div class="activity-link">
          投稿作品请按照官方指定户型进行设计，查看<router-link to=""> 大赛题目>></router-link>
        </div>
        <p><img src="../../../assets/image/hd02.jpg"/></p>
        <p><img src="../../../assets/image/hd03.jpg"/></p>
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
      }
    },
    methods:{
      getActiveDetail(id){
        DesignApi.get(id).then(res=>{
          this.activeInfo = res.result.active_info;
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
