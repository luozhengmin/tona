<template>
  <div class="footer fix">
    <div class="foot wrap fix">
      <div class="erwei">
        <div class="ew-pic">
          <img src="../../assets/image/erwei.jpg">
        </div>
        <h3>TONA HOME 微信公众号</h3>
      </div>
      <ul class="row ab">
        <li><a href="">如何购物</a></li>
        <li><a href="">支付 / 配送方式</a></li>
        <li><a href=""> 服务承诺</a></li>
        <li><a href="">加盟招商</a></li>
        <li><a href="">联系我们</a></li>
      </ul>
      <p>
        <span>Copyrght © 2019 TONA  国际卫浴  All Rights Reserved.</span><br>
        <a href="" class="beian">浙ICP备17019637号</a><a href="" class="beian">浙公安备31010402006982</a>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexFoot"
    }
</script>

<style scoped>
  .footer{background-color:#323232;width:100%;padding:2rem 0 1.2rem 0;font-size:0.7rem;color:#fff;margin-top:1.2rem;}
    .foot .ew-pic{text-align:center;width:32%;margin:0 auto;}
    .foot .ew-pic img{max-width:100%;}
    .foot h3{text-align:center;padding-top:0.6rem;}
    .foot .row{justify-content:space-between;padding:2rem 0 1.2rem 0;}
    .foot .row li{padding-left:0.1rem;}
    .foot .row li:first-child(1){padding-left:0;}
    .foot a{color:#fff;}
    .foot >p {text-align:center;color:#b7b7b7;}
    .foot >p a{padding:0 0.2rem;color:#b7b7b7;}
</style>
