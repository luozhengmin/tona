<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">品类</div>
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
              <p @click="goPage('https://www.tona.com/Index/lists/catid/1.html')">
                <img src="../../assets/image/nav01.png">
                <span>关于我们</span>
              </p>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="s-search">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入商品关键词"
        @search="onSearch"
        @cancel="onCancel"
      >
        <template #left-icon>
          <i class="iconfont icon-sousuo"></i>
        </template>
        <template #action>
          <div>取消</div>
        </template>
      </van-search>
    </div>
    <div class="list wrap fix">
      <van-tree-select height="88vw" :items="items" :main-active-index.sync="active">
        <template #content>
          <div v-for="(item,index) in items" :key="item.id">
            <template v-if="active === index">
              <div class="p-item">
                <div class="brand-con" v-if="item.banner.length>0">
                  <img :src="item.banner[0].adv_code" />
                </div>
                <div class="p-list" v-for="child in item.children" :key="child.id">
                  <h2>{{child.value}}</h2>
                  <van-row gutter="10">
                    <van-col span="8" v-for="third in child.children" :key="third.id">
                      <a :href="'/ProductList-Item?cate_id='+third.id+'&parent_id='+child.id">
                        <div class="prod-pic">
                          <img :src="third.image" />
                        </div>
                        <div class="prod-title">{{third.value}}</div>
                      </a>
                    </van-col>
                  </van-row>
                </div>
              </div>
            </template>
          </div>
        </template>
      </van-tree-select>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import GoodsClassApi from "@/api/GoodsClassApi";
import axios from "@/utils/request";
import DesignApi from "@/api/DesignApi";
export default {
  name: "ProductList",
  data() {
    return {
      isActive: false,
      value: "",
      onSearch(val) {
        Toast(val);
      },
      onCancel() {
        Toast("取消");
      },
      active: 0,
      items: [],
      children: [],
      bannerItem: [],
    };
  },
  created() {
    this.getList();
    this.getBanners();
  },
  methods: {
    getList() {
      GoodsClassApi.categorys().then((res) => {
        console.log(res);
        this.items = res.result.class_list.map((o) => {
          o.text = o.value;
          return o;
        });
      });
    },
    getBanners() {
      axios.post("/api/Index/getAppadList/ap_id/", { ap_id: 5 }).then((res) => {
        this.bannerItem = res.result.ad_list;
      });
    },
    goPage (url) {
      window.location.href = url
    }
  },
};
</script>
<style lang="scss" scoped>
.s-search {
  .van-search {
    padding: 12px 15px;
    .van-search__action {
      padding: 0 0 0 12px;
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

.list {
  margin: 6px 0;
  .van-tree-select {
    .van-sidebar-item {
      width: 60px;
      border: none;
      padding: 0 8px 24px 12px;
    }
    .van-sidebar-item--select {
      color: #f4523b;
    }
    .van-tree-select__content {
      -webkit-box-flex: 4;
      -webkit-flex: 4;
      flex: 4;
      .p-item {
        .p-pic {
          img {
            border-radius: 4px;
          }
        }
        .p-list {
          .van-row {
            .van-col {
              margin-bottom: 6px;
              a {
                .prod-title {
                  text-align: center;
                  color: #323232;
                  padding: 8px 0;
                }
                .prod-pic{
                  img{height:86px;}
                }
              }
            }
          }
          h2 {
            font-size: 14px;
            color: #888;
            padding: 12px 0;
          }
        }
      }
    }
  }
}
.brand-con img {
  border-radius: 5px;
}
.container{background-color:#f7f7f7;}
</style>

