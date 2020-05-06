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
                <router-link to="/BrandList-1">
                  <img src="../../../assets/image/nav05.png">
                  <span>品牌馆</span>
                </router-link>
              </li>
              <li>
                <router-link to="/Design">
                  <img src="../../../assets/image/nav04.png">
                  <span>优秀设计</span>
                </router-link>
              </li>
              <li>
                <router-link to="/GlobalStore">
                  <img src="../../../assets/image/nav03.png">
                  <span>全球门店</span>
                </router-link>
              </li>
              <li>
                <router-link to="/Investment">
                  <img src="../../../assets/image/nav02.png">
                  <span>招商加盟</span>
                </router-link>
              </li>
              <li>
                <router-link to="/index">
                  <img src="../../../assets/image/nav01.png">
                  <span>关于我们</span>
                </router-link>
              </li>
            </ul>
          </div>
        </transition>
      </div>
      <index-banner :banners="banners"></index-banner>
      <index-menu-1></index-menu-1>
      <div class="index-brand fix">
        <div class="wrap fix">
        <div class="title-t">
          <h2><span>品牌推荐</span></h2>
        </div>
          <div class="brand-con" v-for="(item,index) in bannerItem">
            <a href=""><img :src="item.adv_code"></a>
          </div>
      </div>
      <div class="design-list fix">
        <van-swipe :loop="false" :width="300" :show-indicators="false">
          <van-swipe-item v-for="(item,index) in brandList" :key="index">
            <a href=""><img :src="item.store_banner"></a>
            <div class="main ab">
              <div class="infor-l ac">
                <h2>{{item.store_name}}</h2>
                <div class="-t">
                  <span>{{item.store_mainbusiness}}</span>
                </div>
              </div>
              <div class="infor-r">
                <van-tag color="#ee502f">NEW</van-tag>
                <span class="ab">{{item.suozaiquyu}}</span>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>

      </div>
      </div>

      <div class="index-brand-1 fix">
        <div class="wrap fix">
          <div class="title-t">
            <h2><span>发现品牌</span></h2>
          </div>
        </div>

        <div class="brand-item">
          <div class="brand-con wrap" v-for="(item,index) in bannerItem01" :key="index">
            <a href=""><img :src="item.adv_code"></a>
          </div>
          <div class="brand-list fix">
            <van-swipe :loop="false" :width="110" :show-indicators="false">
              <van-swipe-item  v-for="(item,index) in bannerItem02" :key="index">
                <div class="p-pic">
                  <a href=""><img :src="item.adv_code"></a>
                </div>
                <div class="p-infor">
                  <h2>{{item.adv_title}}</h2>
                  <p>{{item.adv_info}}</p>
                </div>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>

        <div class="brand-item">
          <div class="brand-con wrap" v-for="(item,index) in bannerItem03" :key="index">
            <a href=""><img :src="item.adv_code"></a>
          </div>
          <div class="brand-list fix">
            <van-swipe :loop="false" :width="110" :show-indicators="false">
              <van-swipe-item  v-for="(item,index) in bannerItem04" :key="index">
                <div class="p-pic">
                  <a href=""><img :src="item.adv_code"></a>
                </div>
                <div class="p-infor">
                  <h2>{{item.adv_title}}</h2>
                  <p>{{item.adv_info}}</p>
                </div>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>

        <div class="brand-item">
          <div class="brand-con wrap" v-for="(item,index) in bannerItem05" :key="index">
            <a href=""><img :src="item.adv_code"></a>
          </div>
          <div class="brand-list fix">
            <van-swipe :loop="false" :width="110" :show-indicators="false">
              <van-swipe-item  v-for="(item,index) in bannerItem06" :key="index">
                <div class="p-pic">
                  <a href=""><img :src="item.adv_code"></a>
                </div>
                <div class="p-infor">
                  <h2>{{item.adv_title}}</h2>
                  <p>{{item.adv_info}}</p>
                </div>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
  import IndexBanner from "../IndexBanner.vue";
  import IndexMenu1 from "../IndexMenu-1.vue";
  import axios from "@/utils/request";
  import StoreApi from "@/api/HomeStoreApi";
  export default {
    components: {
      IndexMenu1,
      IndexBanner
    },
    name: "BrandList-1",
    created() {
      let cat_id = this.$route.query.cat_id;
      this.getBanners();
      this.getList(cat_id);
      this.getBrand();
    },
    data(){
      return{
        isActive: false,
        brandList:[],
        banners:[],
        bannerItem:[],
        bannerItem01:[],
        bannerItem02:[],
        bannerItem03:[],
        bannerItem04:[],
        bannerItem05:[],
        bannerItem06:[],
      }
    },
    methods: {
      getBanners() {
        axios.post("/api/Index/getAppadList/ap_id/",{ap_id:23,}).then(res => {
          let banners = res.result.ad_list;
          this.banners = banners;
        });
        axios.post("/api/Index/getAppadList/ap_id/",{ap_id:16,}).then(res => {
          this.bannerItem = res.result.ad_list;
        });
        axios.post("/api/Index/getAppadList/ap_id/",{ap_id:17,}).then(res => {
          this.bannerItem01 = res.result.ad_list;
        });
        axios.post("/api/Index/getAppadList/ap_id/",{ap_id:18,}).then(res => {
          this.bannerItem02 = res.result.ad_list;
        });
        axios.post("/api/Index/getAppadList/ap_id/",{ap_id:19,}).then(res => {
          this.bannerItem03 = res.result.ad_list;
        });
        axios.post("/api/Index/getAppadList/ap_id/",{ap_id:20,}).then(res => {
          this.bannerItem04 = res.result.ad_list;
        });
        axios.post("/api/Index/getAppadList/ap_id/",{ap_id:21,}).then(res => {
          this.bannerItem05 = res.result.ad_list;
        });
        axios.post("/api/Index/getAppadList/ap_id/",{ap_id:22,}).then(res => {
          this.bannerItem06 = res.result.ad_list;
        });
      },
      getBrand(){
        StoreApi.store().then(res => {
          this.brandList = res.result;
        }).catch((error) => {
          console.log("error")
        });
      },

      getList(cat_id) {

      },
    }
  }
</script>

<style lang="scss" scoped>
  .design-list{
    color:#323232;
    margin:12px 0 0 15px;position:relative;overflow:hidden;
    .van-swipe-item{
          margin-right:10px;
          .main{
            color:#888;
            padding:12px 12px;
            align-items:center;
            border:solid 1px #eee;
            .infor-l{
              h2{
                font-size:14px;
                color:#000;
                padding-bottom:4px;
              }
              .-t{
                i{font-size:12px;line-height:12px;padding:0 2px 0 6px;}
              }
            }
            .infor-r{
              flex-direction:column;
              text-align:right;
              .van-tag{border-radius:10px 10px 10px 0;margin-bottom: 2px;width:36px;display:inline-block;
                height: 18px;
                line-height: 18px;
                padding: 0;
                text-align: center;}
              span{
                align-items:center;
                display: block;
                /*.van-icon{font-size:16px;padding-right:2px;}*/
              }
            }
          }
        }
  }
  .brand-item{
    margin-bottom:12px;
    .brand-list{
      margin:-20px 0 0 7%;
      padding:12px 0 12px 12px;
      background-color:#f7f7f7;
      border-top-left-radius:5px;
      border-bottom-left-radius:5px;
      .van-swipe-item{
        margin-right:5px;
      }
      .p-pic{
        padding:0 6px;
        img{border-radius:5px;}
      }
      .p-infor{
        text-align:center;
        h2{font-size:14px;color:#323232;margin:6px 0 2px 0;}
        p{color:#b7b7b7;}
      }
    }
  }

</style>
