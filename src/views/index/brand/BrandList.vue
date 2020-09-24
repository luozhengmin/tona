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
    <index-banner :banners="banners"></index-banner>
    <div class="sub-brand fix">
      <div class="sub-brand-t">
        <div class="classify ab fix">
          <div class="classify-tltle ab">
            <h2>品类</h2>
            <a @click="setCate(null)">全部</a>
          </div>
          <div class="classify-list">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="item in items" :key="item.id">
                <a @click="setCate(item.id)">{{item.value}}</a>
              </swiper-slide>
            </swiper>
          </div>
        </div>

        <div class="classify ab fix">
          <div class="classify-tltle ab">
            <h2>产地</h2>
            <a @click="setArea(null)">全部</a>
          </div>
          <div class="classify-list">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="(item,index) in areaList" :key="index">
                <a @click="setArea(item)">{{item}}</a>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="sub-brand-b wrap">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="getBrandList"
          :offset="50"
          finished-text="没有更多了"
        >
          <div class="col" v-for="item in brandList" :key="item.id">
            <router-link :to="{name:'BrandChild',query:{store_id:item.store_id}}">
              <div class="b-pic">
                <img :src="item.store_banner" />
              </div>
              <div class="main ab fix">
                <div class="h-pic">
                  <img :src="item.store_avatar" />
                </div>
                <div class="infor">
                  <h2>{{item.store_name}}</h2>
                  <p>{{item.store_mainbusiness}}</p>
                </div>
              </div>
            </router-link>
          </div>
        </van-list>
      </div>
    </div>
    <index-foot></index-foot>
  </div>
</template>
<script>
import IndexBanner from "../IndexBanner.vue";
import IndexFoot from "../IndexFoot.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import StoreApi from "@/api/HomeStoreApi";
import GoodsClassApi from "@/api/GoodsClassApi";
import axios from "@/utils/request";
import NavMenu from "../navMenu.vue";

export default {
  name: "BrandList",
  components: {
    NavMenu,
    Swiper,
    SwiperSlide,
    IndexFoot,
    IndexBanner
  },
  created() {
    this.getBanners();
    this.cate_id = this.$route.query.catid;
    this.getArea(this.cate_id);
    // this.getBrandList();
  },
  data() {
    return {
      isActive: false,
      banners: [],
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 15
      },
      items: [],
      areaList: [],
      brandList: [],
      cate_id: null,
      area_name: null,
      loading: false,
      finished: false,
      page_total: 0,
      page: 1
    };
  },
  methods: {
    getBanners() {
      axios.post("/api/Index/getAppadList/ap_id/", { ap_id: 24 }).then(res => {
        let banners = res.result.ad_list;
        this.banners = banners;
      });
    },
    getArea(catid) {
      GoodsClassApi.list().then(res => {
        let newData = res.result.class_list;
        for (let i = 0; i < 4; i++) {
          if (newData[i]["id"] == this.cate_id) {
            this.items = newData[i]["children"];
          }
        }
      });

      StoreApi.storeArea().then(res => {
        this.areaList = res.result;
      });
    },
    getBrandList() {
      let params = {
        cate_id: this.cate_id,
        area_name: this.area_name,
        page: this.page,
        pagesize: 10
      };
      StoreApi.storeBrand(params).then(res => {
        let list = res.result.store_list;
        list.forEach(i => {
          this.brandList.push(i);
        });
        this.page_total = res.result.page_total;
        if (this.page < this.page_total) {
          this.page++;
        } else {
          this.finished = true;
        }
        this.loading = false;
      });
    },
    setCate(cateId) {
      this.cate_id = cateId;
      this.getBrandList();
    },
    setArea(area) {
      this.area_name = area;
      this.getBrandList();
    },
  }
};
</script>
<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
}
.sub-brand-t {
  margin: 0 0 12px 0;
  background-color: #fff;
  padding: 2px 0 2px 15px;
  .classify {
    align-items: center;
    margin: 12px 0;
    .classify-tltle {
      width: 33.5%;
      align-items: center;
      h2 {
        font-size: 14px;
        color: #323232;
      }
      a {
        display: block;
        padding: 0 20px;
        background-color: #f4f4f4;
        margin: 0 12px;
        font-size: 14px;
        color: #323232;
        border-radius: 25px;
        height: 28px;
        line-height: 28px;
      }
      a:hover {
        background-color: red;
        color: #fff;
      }
    }
    .classify-list {
      position: relative;
      overflow: hidden;
      width: 66.5%;
    }
  }
}
.sub-brand-b {
  .col {
    width: 100%;
    position: relative;
    margin-bottom: 12px;
    a {
      display: block;
      .b-pic {
        text-align: center;
        img {
          border-radius: 2px;
        }
      }
      .main {
        align-items: center;
        background-color: #fff;
        border: solid 1px #f2f2f2;
        .h-pic {
          width: 45px;
          height: 45px;
          margin: 0 12px;
        }
        .infor {
          padding: 18px 10px 18px 0;
          h2 {
            font-size: 15px;
            color: #323232;
            padding-bottom: 3px;
          }
          p {
            color: #888;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
