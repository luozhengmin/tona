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
    <index-banner :images="images"></index-banner>
    <brand-list-body></brand-list-body>
    <index-foot></index-foot>
  </div>
</template>
<script>
  import IndexBanner from "../IndexBanner.vue";
  import IndexFoot from "../IndexFoot.vue";
  import BrandListBody from "./BrandListBody.vue";

  export default {
    name:'BrandList',
    components: {
      BrandListBody,
      IndexFoot,
      IndexBanner
    },
    data(){
      return{
        isActive: false,
        images:[
          { id:1,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg',index_link:'http://www.68design.com'},
          { id:2,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg',index_link:'http://www.baidu.com'},
          { id:3,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg',index_link:'http://www.baidu.com'},
          { id:4,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg',index_link:'http://www.baidu.com'}
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container{background-color:#f7f7f7;}
</style>
