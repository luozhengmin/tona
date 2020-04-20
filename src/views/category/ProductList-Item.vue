<template>
    <div class="container">
      <div class="head fix">
        <div class="wrap fix">
          <div class="head-ss fix">
            <van-icon name="arrow-left" @click="$router.go(-1)"/>
          </div>
          <div class="head-logo">
            品类
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
      <div class="s-search">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入商品关键词或用户名"
          @search="onSearch">
          <template #left-icon>
            <van-icon class="fa fa-search"/>
          </template>
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
      </div>

      <div class="classify ab fix">
        <div class="classify-tltle ac">
          <a href="">全部</a>
        </div>
        <div class="classify-list">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide><router-link to="/ProductSearch">浴室柜</router-link></swiper-slide>
            <swiper-slide><a href="">智能马桶</a></swiper-slide>
            <swiper-slide><a href="">浴缸</a></swiper-slide>
            <swiper-slide><a href="">淋浴房</a></swiper-slide>
            <swiper-slide><a href="">淋浴房</a></swiper-slide>
            <swiper-slide><a href="">淋浴房</a></swiper-slide>
          </swiper>
        </div>
      </div>

      <div class="s-select">
        <van-tabs v-model="active" color="#f4523b">
          <van-tab>
            <template #title>新品</template>
            <div class="list">
              <van-row gutter="15">
                <van-col span="12" style="margin-bottom:15px" v-for="i in 4 " :key="i">
                  <div class="prod">
                    <div>
                      <img src="../../assets/image/prod-2.jpg" />
                    </div>
                    <div class="title">欧式悬挂式浴室柜22</div>
                    <div class="desc">45度角双抽拉手设计</div>
                    <div class="bottom">
                      <div>
                        <span class="fuhao">￥</span>2580.00
                      </div>
                      <div class="icon">
                        <van-icon name="cart" />
                      </div>
                    </div>
                  </div>
                </van-col>
              </van-row>
            </div>
          </van-tab>
          <van-tab>
            <template #title>销量<i class="fa fa-sort-desc"></i></template>
            <div class="list">
              <van-row gutter="15">
                <van-col span="12" style="margin-bottom:15px" v-for="i in 4 " :key="i">
                  <div class="prod">
                    <div>
                      <img src="../../assets/image/prod-2.jpg" />
                    </div>
                    <div class="title">欧式悬挂式浴室柜11</div>
                    <div class="desc">45度角双抽拉手设计</div>
                    <div class="bottom">
                      <div>
                        <span class="fuhao">￥</span>2580.00
                      </div>
                      <div class="icon">
                        <van-icon name="cart" />
                      </div>
                    </div>
                  </div>
                </van-col>
              </van-row>
            </div>
          </van-tab>
          <van-tab>
            <template #title>价格<i class="fa fa-sort-asc"></i></template>
            <div class="list">
              <van-row gutter="15">
                <van-col span="12" style="margin-bottom:15px" v-for="i in 4 " :key="i">
                  <div class="prod">
                    <div>
                      <img src="../../assets/image/prod-2.jpg" />
                    </div>
                    <div class="title">欧式悬挂式浴室柜11</div>
                    <div class="desc">45度角双抽拉手设计</div>
                    <div class="bottom">
                      <div>
                        <span class="fuhao">￥</span>2580.00
                      </div>
                      <div class="icon">
                        <van-icon name="cart" />
                      </div>
                    </div>
                  </div>
                </van-col>
              </van-row>
            </div>
          </van-tab>
        </van-tabs>
      </div>

    </div>
</template>

<script>
  import { Toast } from 'vant';
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: "ProductList-Item",
    components: {
      Swiper,
      SwiperSlide
    },
    data(){
      return{
        isActive:false,
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        active: false,
        value:''
      }
    },
    methods: {
      onSearch(val) {
        Toast(val);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .listItem{background-color:#f7f7f7;}
  .s-search{
    .van-search{
      padding:12px 15px;
      .van-search__action{padding:0 0 0 12px;}
      .van-search__action:active{background-color:inherit;}
      .van-search__content{
        background-color:inherit;
        padding-left:0;
        .van-cell{
          border:solid 1px #eee;
          border-radius:25px;
          padding: 5px 8px 5px 10px;
        }
      }
    }
  }
  .classify{
    align-items:center;
    margin:6px 0;
    padding:12px 0 12px 15px;
    border-top:solid 1px #eee;
    border-bottom:solid 1px #eee;
    .classify-tltle{
      align-items:center;
      a{display:block;padding:0 20px;background-color:#f4f4f4;margin:0 12px 0 0;font-size:14px;color:#323232;
        border-radius:25px;height:32px;line-height:32px;width:70px;}
      a:hover{background-color:red;color:#fff;}
    }
    .classify-list{
      position:relative;overflow:hidden;width:78%;
      .swiper{

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
        font-size:18px;
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
  .s-nav li:nth-child(1) a .van-icon{display:none;}
  .s-select .van-tab:nth-child(3) .van-tab__text i{vertical-align:-3px;}
</style>
