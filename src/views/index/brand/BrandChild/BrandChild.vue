<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">品牌馆</div>
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
    <div class="wrap fix">
      <div class="b-child-menu">
        <div class="b-child-top ab">
          <div class="b-child-pic">
            <img :src="store_info.store_logo" />
          </div>
          <div class="b-child-title ac">
            <h2>{{store_info.store_name}}</h2>
            <p>粉丝数186万</p>
          </div>
          <van-button color="#f4523b" @click="goPage('http://wpa.qq.com/msgrd?v=3&uin=1490081347&site=qq&menu=yes')">咨询客服</van-button>
        </div>
        <p>{{store_info.store_mainbusiness}}</p>
      </div>
    </div>
    <div class="b-child-tab">
      <van-tabs v-model="activeName" color="#323232" line-height="0">
        <van-tab title="品牌首页" name="a">
          <brand-home :products="rec_products" :designs="rec_designs" :likes="likes"></brand-home>
        </van-tab>
        <van-tab title="商品" name="b">
          <brand-product :store_id="store_id"></brand-product>
        </van-tab>
        <van-tab title="设计方案" name="c">
          <brand-design :store_id="store_id"></brand-design>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import BrandHome from "./BrandHome.vue";
import BrandDesign from "./BrandDesign.vue";
import BrandProduct from "./BrandProduct.vue";
import StoreApi from "@/api/HomeStoreApi";
import NavMenu from "../../navMenu.vue";

export default {
  components: {
    NavMenu,
    BrandProduct,
    BrandDesign,
    BrandHome
  },
  name: "BrandChild",
  data() {
    return {
      activeName: "",
      isActive: false,
      store_id: null,
      store_info: {},
      rec_products: [],
      rec_designs: [],
      likes: []
    };
  },
  created() {
    let store_id = this.$route.query.store_id;
    this.store_id = store_id;
    this.getStoreInfo();
  },
  methods: {
    getStoreInfo() {
      let params = {
        store_id: this.store_id
      };
      StoreApi.storeInfo(params).then(res => {
        console.log(res);
        this.store_info = res.result.store_info;
        this.rec_products = res.result.rec_goods_list;
        this.rec_designs = res.result.rec_design_fan;
        this.likes = res.result.guesslike_list;
      });
    },
  }
};
</script>

<style lang="scss" scoped>
.b-child-menu {
  margin-bottom: 12px;
  .b-child-top {
    align-items: center;
    margin: 20px 0 10px 0;
    .b-child-pic {
      padding-right: 12px;
      img {
        height: 50px;
        box-shadow: 0 0 10px #eee;
      }
    }
    .b-child-title {
      h2 {
        font-size: 16px;
        color: #323232;
        font-weight: bold;
      }
      p {
        font-size: 14px;
        color: #888;
      }
    }
    .van-button {
      height: 32px;
      line-height: 30px;
      border: none;
    }
  }
  p {
    font-size: 14px;
    color: #888;
  }
}
</style>
