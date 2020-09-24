<template>
    <div class="container">
      <div class="head fix">
        <div class="wrap fix">
          <div class="head-ss fix">
            <van-icon name="arrow-left" @click="$router.go(-1)" />
          </div>
          <div class="head-logo">如何购物</div>
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
      <div class="how-shop fix wrap" v-html="article.article_content">

      </div>
    </div>
</template>

<script>
  import ArticleApi from '@/api/ArticleApi'
  import NavMenu from "../index/navMenu.vue";
  export default {
    components: {NavMenu},
    name: "how-shop",
    data(){
      return{
        isActive: false,
        article:{}
      }
    },
    created(){
      this.getPage();
    },
    methods:{
      getPage(){
        ArticleApi.articleShow({article_id:55}).then(res=>{
          console.log(res)
          this.article = res.result;
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
.how-shop{
  color: #888;
  padding: 12px 15px;
}
</style>
