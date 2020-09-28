<template>
    <div>
      <div class="container">
        <div class="land-page fix">
          <div class="lp-logo">
            <img src="../../../assets/image/lplogo.png">
          </div>
          <div class="lp-link">
            <router-link to="/index">供应链商城</router-link>
            <router-link to="/index">ENGLISH</router-link>
            <router-link to="/index">GERMAN</router-link>
          </div>
          <div class="lp-copy">
            <div class="lp-menu">
              <span @click="goPage('https://www.tona.com/Index/lists/catid/1.html')">关于我们</span>
              <router-link to="/help">帮助中心</router-link>
              <router-link to="/after-sale/list">售后服务</router-link>
              <router-link to="/Investment">招商加盟</router-link>
            </div>
            <p>
              <span>Copyrght © 2020 TONAHOME  All Rights Reserved.</span><br>
              <span @click="goPage('https://beian.miit.gov.cn/')" class="beian">浙ICP备17019637号</span>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "LandPage",
      data(){
        return{

        }
      },
      methods:{
        goPage (url) {
          window.location.href = url
        }
      }
    }
</script>

<style lang="scss" scoped>
  .container{margin-top:0;}
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
      a{display:block;padding:8px 0;font-size:16px;color:#323232;font-family:arial;}
      a:nth-child(1){font-family:"微软雅黑";}
    }
    .lp-copy{
      bottom:12px;
      width:100%;
      p {
        text-align:center;color:#323232;
        span{padding:0 4px;}
      }

      .lp-menu{
        padding-bottom:8px;
        text-align:center;
        a,span{display:inline-block;padding:0 4px;color:#323232;}
      }
    }
  }
  .land-page .lp-logo,.land-page .lp-link,.land-page .lp-copy{position:absolute;padding:0 15px;width:100%;}
</style>
