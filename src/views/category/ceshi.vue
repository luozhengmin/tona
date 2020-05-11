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
                <img src="../../assets/image/nav05.png">
                <span>品牌馆</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Design">
                <img src="../../assets/image/nav04.png">
                <span>优秀设计</span>
              </router-link>
            </li>
            <li>
              <router-link to="/GlobalStore">
                <img src="../../assets/image/nav03.png">
                <span>全球门店</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Investment">
                <img src="../../assets/image/nav02.png">
                <span>招商加盟</span>
              </router-link>
            </li>
            <li>
              <router-link to="/index">
                <img src="../../assets/image/nav01.png">
                <span>关于我们</span>
              </router-link>
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
          <van-icon class="fa fa-search" />
        </template>
        <template #action>
          <div>取消</div>
        </template>
      </van-search>
    </div>
    <div class="list-container wrap fix">
      <div class="list-wrapper fix">
        <div class="list-slide">
          <div class="content">
            <div class="left fix" id="left">
              <ul>
                <li v-for="item in classify">
                  {{item.name}}
                </li>
              </ul>
            </div>
            <div class="right fix" id="right">
              <ul>
                <li v-for="item in classifyList">
                  <div class="p-item">
                    <div class="class-title">{{item.class}}</div>
                    <div class="p-pic">
                      <img src="../../assets/image/cp01.jpg" />
                    </div>
                    <div class="p-list" v-for="i in 3">
                      <h2>推荐01</h2>
                      <van-row gutter="10">
                        <van-col span="8" v-for="i in 3 " :key="i">
                          <router-link to="/ProductList-Item">
                            <div class="prod-pic">
                              <img src="../../assets/image/cp02.jpg" />
                            </div>
                            <div class="prod-title">卫浴</div>
                          </router-link>
                        </van-col>
                      </van-row>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="list-slide" style="display:none;">
          店铺介绍
        </div>
      </div>
    </div>

    <!--<div class="product-r r">-->
    <!--<div class="p-item">-->
    <!--<div class="p-pic">-->
    <!--<img src="../../assets/image/cp01.jpg" />-->
    <!--</div>-->
    <!--<div class="p-list" v-for="i in 4" :key="i">-->
    <!--<h2>推荐01</h2>-->
    <!--<van-row gutter="10">-->
    <!--<van-col span="8" v-for="i in 5 " :key="i">-->
    <!--<router-link to="/ProductList-Item">-->
    <!--<div class="prod-pic">-->
    <!--<img src="../../assets/image/cp02.jpg" />-->
    <!--</div>-->
    <!--<div class="prod-title">卫浴</div>-->
    <!--</router-link>-->
    <!--</van-col>-->
    <!--</van-row>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
  </div>
</template>
<script>
  import { Toast } from "vant";
  import GoodsClassApi from "@/api/GoodsClassApi";

  export default {
    name: "ProductList",
    data() {
      return {
        classify: [
          { name : '推荐' },
          { name : '硬装' },
          { name : '软装' },
          { name : '家电' },
          { name : '定制' },
          { name : '风格' },
        ],
        classifyList: [
          { class : '分类1'},
          { class : '分类2'},
          { class : '分类3'},
          { class : '分类4'},
          { class : '分类5'},
          { class : '分类6'},
        ],
        scrollTop: 0,
        isActive: false,
        value: "",
        active: 0,
        items: [],
        children: [],
        params:{},
        recommend:[]
      };
    },
//  created() {
//    this.getList();
//  },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      // 监听页面滚动
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      },
      onSearch(val) {
        Toast(val);
      },
      onCancel() {
        Toast("取消");
      },
//    getList() {
//      GoodsClassApi.list().then(res => {
//        console.log(res.result)
//        this.items = res.result.class_list.map(o => {
//          o.text = o.value;
//          return o;
//        });
//        this.items.unshift({ text: "推荐" });
//      });
//    },
//    getRecommend(parentid){
//
//      GoodsClassApi.recommendClass(this.params).then(res => {
//        this.recommend = res.result
//
//      },error=>{
//
//      });
//    }
    }
  };
</script>

<style lang="scss" scoped>
  .s-search {
    position:fixed;top:50px;width:100%;z-index:9000;
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
</style>
