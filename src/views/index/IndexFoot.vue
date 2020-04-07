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
  .footer{background-color:#323232;width:100%;padding:40px 0 24px 0;color:#fff;margin-top:20px;}
    .foot .ew-pic{text-align:center;width:32%;margin:0 auto;}
    .foot .ew-pic img{max-width:100%;}
    .erwei h3{text-align:center;padding-top:12px;font-size:14px;}
    .foot .row{justify-content:space-between;padding:40px 0 24px 0;font-size:14px;}
    .foot .row li{padding-left:2px;}
    .foot .row li:first-child(1){padding-left:0;}
    .foot a{color:#fff;}
    .foot >p {text-align:center;color:#b7b7b7;}
    .foot >p a{padding:0 4px;color:#b7b7b7;}
</style>
