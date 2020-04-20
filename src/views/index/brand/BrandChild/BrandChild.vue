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
        <div class="wrap fix">
          <div class="b-child-menu">
            <div class="b-child-top ab">
              <div class="b-child-pic">
                <img src="../../../../assets/image/pplogo.jpg">
              </div>
              <div class="b-child-title ac">
                <h2>TONA国际卫浴</h2>
                <p>粉丝数186万</p>
              </div>
              <van-button color="#f4523b">咨询客服</van-button>
            </div>
            <p>主打产品：浴室柜、浴缸、马桶、淋浴房、岩板桌</p>
          </div>
        </div>
        <div class="b-child-tab">
          <van-tabs
            v-model="activeName"
            color="#323232"
            line-height="0"
          >
            <van-tab title="品牌首页" name="a">
              <brand-home></brand-home>
            </van-tab>
            <van-tab title="商品" name="b">
              <brand-product></brand-product>
            </van-tab>
            <van-tab title="设计师" name="c">
              <brand-design></brand-design>
            </van-tab>
          </van-tabs>
        </div>
      </div>
</template>

<script>
  import BrandHome from "./BrandHome.vue";
  import BrandDesign from "./BrandDesign.vue";
  import BrandProduct from "./BrandProduct.vue";

  export default {
    components: {
      BrandProduct,
      BrandDesign,
      BrandHome},
    name: "BrandChild",
    data(){
      return{
        activeName:'',
        isActive: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .b-child-menu{
    margin-bottom:12px;
    .b-child-top{
      align-items: center;
      margin: 20px 0 10px 0;
      .b-child-pic{
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
      .van-button{height:32px;line-height:30px;border:none;}
    }
    p{font-size:14px;color:#888;}
  }
</style>
