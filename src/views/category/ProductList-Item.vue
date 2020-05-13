<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">商品列表</div>
        <div class="menu-ico" v-bind:class="{active:isActive}" v-on:click="isActive=!isActive">
          <span></span>
        </div>
      </div>
      <transition name="van-slide-down">
        <div class="slideNav" v-if="isActive">
          <ul class="ab fix">
            <li>
              <router-link to="/BrandList-1">
                <img src="../../assets/image/nav05.png" />
                <span>品牌馆</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Design">
                <img src="../../assets/image/nav04.png" />
                <span>优秀设计</span>
              </router-link>
            </li>
            <li>
              <router-link to="/GlobalStore">
                <img src="../../assets/image/nav03.png" />
                <span>全球门店</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Investment">
                <img src="../../assets/image/nav02.png" />
                <span>招商加盟</span>
              </router-link>
            </li>
            <li>
              <router-link to="/index">
                <img src="../../assets/image/nav01.png" />
                <span>关于我们</span>
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="s-search">
      <van-search
        v-model="queryParams.keyword"
        show-action
        placeholder="请输入商品关键词"
        @search="onSearch"
      >
        <template #left-icon>
          <van-icon class="fa fa-search" />
        </template>
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>

    <div class="classify ab fix">
      <div class="classify-tltle ac">
        <a>全部</a>
      </div>
      <div class="classify-list">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <router-link to="/ProductSearch">浴室柜</router-link>
          </swiper-slide>
          <swiper-slide>
            <a href>智能马桶</a>
          </swiper-slide>
          <swiper-slide>
            <a href>浴缸</a>
          </swiper-slide>
          <swiper-slide>
            <a href>淋浴房</a>
          </swiper-slide>
          <swiper-slide>
            <a href>淋浴房</a>
          </swiper-slide>
          <swiper-slide>
            <a href>淋浴房</a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="s-select u-select">
      <van-tabs color="#f4523b" @click="tabClick">
        <van-tab name="goods_addtime">
          <template #title>新品</template>
          <van-list
            v-model="loading"
            :finished="finished"
            @load="getGoodslist"
            :offset="50"
            finished-text="没有更多了"
          >
            <ProductItem :products="goodslist"></ProductItem>
          </van-list>
        </van-tab>
        <van-tab name="goods_salenum">
          <template #title>
            销量
            <i
              v-if="queryParams.sort_order=='asc'&&tabName=='goods_salenum'"
              class="fa fa-sort-asc"
            ></i>
            <i v-else class="fa fa-sort-desc"></i>
          </template>
          <van-list
            v-model="loading"
            :finished="finished"
            @load="getGoodslist"
            :offset="50"
            finished-text="没有更多了"
          >
            <ProductItem :products="goodslist"></ProductItem>
          </van-list>
        </van-tab>
        <van-tab name="goods_price">
          <template #title>
            价格
            <i
              v-if="queryParams.sort_order=='asc'&&tabName=='goods_price'"
              class="fa fa-sort-asc"
            ></i>
            <i v-else class="fa fa-sort-desc"></i>
          </template>
          <van-list
            v-model="loading"
            :finished="finished"
            @load="getGoodslist"
            :offset="50"
            finished-text="没有更多了"
          >
            <ProductItem :products="goodslist"></ProductItem>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { stringInterception } from "../../utils/common.js";
import { getGoodsList } from "../../api/GoodsLists";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ProductItem from "./product/ProductItem";

export default {
  name: "ProductList-Item",
  components: {
    Swiper,
    SwiperSlide,
    ProductItem
  },
  data() {
    return {
      isActive: false,
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 15
      },
      value: "",
      goodslist: [], //商品列表
      cate_id: "", //品类ID
      keyword: "", //关键字
      hasmore: "", //是否还有更多
      pagetotal: "", //总页数
      queryParams: {
        cate_id: "",
        keyword: "",
        page: 1,
        per_page: 10,
        sort_key: "goods_addtime",
        sort_order: "desc"
      },
      loading: false,
      finished: false,
      tabName: "goods_addtime"
    };
  },
  created() {
    this.cate_id = this.$route.query.cate_id;
    this.queryParams.cate_id = this.cate_id;
    // this.getGoodslist();
  },
  methods: {
    getGoodslist() {
      //获取商品列表
      getGoodsList(this.queryParams).then(res => {
        console.log(res);
        res.result.goods_list.forEach(item => {
          item.goods_name = stringInterception(item.goods_name, 9);
          item.goods_advword = stringInterception(item.goods_advword, 10);
          this.goodslist.push(item);
        });
        this.page_total = res.result.page_total;
        if (this.queryParams.page < this.page_total) {
          this.queryParams.page++;
        } else {
          this.finished = true;
        }
        this.loading = false;
      });
    },
    tabClick(name, title) {
      this.goodslist = [];
      this.queryParams.page = 1;
      this.queryParams.sort_key = name;
      this.finished = false;
      if (name != "goods_addtime") {
        this.setOrder(name);
      } else {
        this.queryParams.sort_order = "desc";
      }
      this.tabName = name;
    },
    setOrder(name) {
      if (name == this.tabName) {
        if (this.queryParams.sort_order == "desc") {
          this.queryParams.sort_order = "asc";
        } else {
          this.queryParams.sort_order = "desc";
        }
      } else {
        this.queryParams.sort_order = "desc";
      }
    },
    onSearch(val) {
      this.goodslist = [];
      this.queryParams.page = 1;
      this.finished = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.listItem {
  background-color: #f7f7f7;
}
.s-search {
  .van-search {
    padding: 12px 15px;
    .van-search__action {
      padding: 0 0 0 12px;
    }
    .van-search__action:active {
      background-color: inherit;
    }
    .van-search__content {
      background-color: inherit;
      padding-left: 0;
      .van-cell {
        border: solid 1px #eee;
        border-radius: 25px;
        padding: 5px 8px 5px 10px;
      }
    }
  }
}
.classify {
  align-items: center;
  margin: 6px 0;
  padding: 12px 0 12px 15px;
  border-top: solid 1px #eee;
  border-bottom: solid 1px #eee;
  .classify-tltle {
    align-items: center;
    a {
      display: block;
      padding: 0 20px;
      background-color: #f4f4f4;
      margin: 0 12px 0 0;
      font-size: 14px;
      color: #323232;
      border-radius: 25px;
      height: 28px;
      line-height: 28px;
      width: 70px;
    }
    a:hover {
      background-color: red;
      color: #fff;
    }
  }
  .classify-list {
    position: relative;
    overflow: hidden;
    width: 78%;
    .swiper {
    }
  }
}
.list {
  height: 100%;
  padding: 15px;
  .card {
    background-color: #fff;
    margin-bottom: 15px;
    .info {
      padding: 0 15px;
      .title {
        font-size: 14px;
        color: #323232;
        margin-bottom: 5px;
      }
    }
    .desc {
      padding: 0 15px 10px 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #888;
      .left {
        display: flex;
        align-items: center;
        span {
          margin-left: 10px;
        }
      }
    }
  }
  .prod {
    background-color: #fff;
    .title {
      font-size: 14px;
      color: #323232;
      padding: 10px 15px 5px 15px;
    }
    .desc {
      padding: 0 15px 10px 15px;
      color: #888;
    }
    .bottom {
      padding: 0 15px 10px 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #f4523b;
      font-size: 18px;
      .fuhao {
        font-size: 12px;
      }
      .icon {
        width: 30px;
        height: 30px;
        background-color: #323232;
        color: #fff;
        border-radius: 100%;
        text-align: center;
        line-height: 36px;
        font-size: 14px;
      }
    }
  }
}
.s-nav li:nth-child(1) a .van-icon {
  display: none;
}
</style>
