<template>
    <div>
      <div class="container">
        <div class="land-page fix">
          <div class="lp-logo">
            <img src="../../../assets/image/lplogo.png">
          </div>
          <div class="lp-link">
            <router-link to="/index">供应链商城</router-link>
            <router-link to="">ENGLISH</router-link>
            <router-link to="">GERMAN</router-link>
          </div>
          <div class="lp-copy">
            <div class="lp-menu">
              <router-link to="/about">关于我们</router-link>
              <router-link to="">帮助中心</router-link>
              <router-link to="">售后服务</router-link>
              <router-link to="/Investment">招商加盟</router-link>
            </div>
            <p>
              <span>Copyrght © 2019 TONA  国际卫浴  All Rights Reserved.</span><br>
              <a href="" class="beian">浙ICP备17019637号</a><a href="" class="beian">浙公安备31010402006982</a>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "LandPage"
    }
</script>

<style lang="scss" scoped>
  .land-page{
    position: relative;
    width:100%;
    height:100vh;
    .lp-logo{
      text-align:center;
      top:8%;
    }
    .lp-link{
      text-align:center;
      top: calc(50% - 50px);
      a{display:block;padding:8px 0;font-size:16px;color:#323232;}
    }
    .lp-copy{
      bottom:12px;
      width:100%;
      p {text-align:center;color:#323232;}
      p a{padding:0 4px;color:#323232;}
      .lp-menu{
        padding-bottom:8px;
        text-align:center;
        a{display:inline-block;padding:0 4px;color:#323232;}
      }
    }
  }
  .land-page .lp-logo,.land-page .lp-link,.land-page .lp-copy{position:absolute;padding:0 15px;width:100%;}
</style>
