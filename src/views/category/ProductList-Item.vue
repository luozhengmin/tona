<template>
    <div class="container">
      <div class="head fix">
        <div class="wrap fix">
          <div class="head-ss fix">
            <van-icon name="arrow-left" @click="$router.go(-1)"/>
          </div>
          <div class="head-logo">
            商品列表
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
          <a>全部</a>
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
        <van-tabs color="#f4523b">
          <van-tab>
            <template #title>新品</template>
            <div class="list">
              <van-row gutter="15">
                <van-col span="12" style="margin-bottom:15px" v-for="(goodsitem,i) in goodslist" :key="i">
                  <div class="prod" @click="$router.push({ name: 'ProductDetail', query: { id : goodsitem.goods_id }})">
                    <div>
                      <img :src="goodsitem.goods_image_url" />
                    </div>
                    <div class="title">{{goodsitem.goods_name}}</div>
                    <div class="desc">{{goodsitem.goods_advword}}</div>
                    <div class="bottom">
                      <div>
                        <span class="fuhao">￥</span>{{goodsitem.goods_price}}
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
  import { Toast } from 'vant'
  import { stringInterception } from '../../utils/common.js'
  import { getGoodsList } from '../../api/GoodsLists'
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
          slidesPerView: "auto",
          spaceBetween: 10,
        },
        value:'',
        goodslist:[{}], //商品列表
        catid:'', //品类ID
        keyword:'', //关键字
        hasmore:'', //是否还有更多
        pagetotal:'' //总页数
      }
    },
    created(){
      this.getGoodslist()
    },
    methods: {
      getGoodslist(){  //获取商品列表
        getGoodsList(this.catid,this.keyword).then(
          response => {
            console.log(response.result.goods_list)
            this.goodslist = response.result.goods_list.map(item => {
              item.goods_name = stringInterception(item.goods_name,9)
              item.goods_advword = stringInterception(item.goods_advword,10)
              return item;
            });
          },
          error => {
            Toast(error.message)
          }
        )
      },
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
        border-radius:25px;height:28px;line-height:28px;width:70px;}
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
