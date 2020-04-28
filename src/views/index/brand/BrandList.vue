<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          品牌馆
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
    <index-banner :banners="banners"></index-banner>
    <brand-list-body></brand-list-body>
    <index-foot></index-foot>
  </div>
</template>
<script>
  import IndexBanner from "../IndexBanner.vue";
  import IndexFoot from "../IndexFoot.vue";
  import BrandListBody from "./BrandListBody.vue";
  import axios from "@/utils/request";

  export default {
    name:'BrandList',
    components: {
      BrandListBody,
      IndexFoot,
      IndexBanner
    },
    created() {
      this.getBanners();
    },
    data(){
      return{
        isActive: false,
        banners: []
      }
    },
    methods: {
      getBanners() {
        axios.post("/api/Index/getIndexAdList/ap_id",{ap_id:8,}).then(res => {
          let banners = res.result.banners;
          this.banners = banners;
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container{background-color:#f7f7f7;}
</style>
