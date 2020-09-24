<template>
  <div class="footer fix">
    <div class="foot wrap fix">
      <div class="erwei">
        <div class="ew-pic" v-for="(item,index) in codeList" :key="index">
          <img :src="item.adv_code">
        </div>
        <h3>TONA HOME 微信公众号</h3>
      </div>
      <ul class="row ab">
        <li><router-link to="/how-shop">如何购物</router-link></li>
        <li><router-link to="/payment">支付 / 配送方式</router-link></li>
        <li><router-link to="/promises">服务承诺</router-link></li>
        <li><router-link to="/Investment">加盟招商</router-link></li>
        <li><router-link to="/contact-us">联系我们</router-link></li>
      </ul>
      <p>
        <span>Copyrght © 2019 TONA  国际卫浴  All Rights Reserved.</span><br>
        <span @click="goPage('https://beian.miit.gov.cn/')" class="beian">浙ICP备17019637号</span><span>浙公安备31010402006982</span>
      </p>
    </div>
  </div>
</template>

<script>
  import axios from "@/utils/request";
  export default {
    name: "IndexFoot",
    created() {
      this.getBanners();
    },
    data(){
      return{
        codeList:[]
      }
    },
    methods: {
      getBanners() {
        axios.post("/api/Index/getAppadList/ap_id/", {ap_id:25,}).then(res => {
          this.codeList = res.result.ad_list;
        });
      },
    }
  }
</script>

<style scoped>
  .footer{background-color:#323232;width:100%;padding:40px 0 24px 0;color:#fff;margin-top:20px;}
    .foot .ew-pic{text-align:center;width:32%;margin:0 auto;}
    .foot .ew-pic img{max-width:100%;}
    .erwei h3{text-align:center;padding-top:12px;font-size:14px;}
    .foot .row{justify-content:space-between;padding:40px 0 24px 0;font-size:13px;}
    .foot .row li{padding-left:2px;}
    .foot .row li:first-child{padding-left:0;}
    .foot a{color:#fff;}
    .foot >p {text-align:center;color:#b7b7b7;}
    .foot >p span{padding:0 4px;}
</style>
