<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          收藏夹
        </div>
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
    <div class="collect-list">
      <van-tabs v-model="active" color="#f4523b" line-width="90">
        <van-tab title="设计方案">
          <div v-if="collectFanList.length==0" class="empty">
            <div>
              <img src="../../assets/image/empty-1.png" />
            </div>
            <div>对不起，您还没有设计方案哦！</div>
          </div>
          <div class="list">
            <van-list
              v-model="loading"
              :finished="finished"
              @load="getFanCollect"
              :offset="50"
              finished-text="没有更多了"
            >
              <div class="card" v-for="(itemfan,f) in collectFanList" :key="f">
                <router-link :to="{name:'DesignDetail',query:{id:itemfan.fan_id}}">
                  <van-image width="100%" :src="itemfan.thumb" />
                  <div class="info">
                    <div class="title">{{itemfan.fan_name}}</div>
                    <div class="meta">{{itemfan.style}} | 原创设计</div>
                  </div>
                  <van-divider />
                  <div class="desc">
                    <div class="left">
                      <van-image width="28px" height="28px" round fit="cover" :src="itemfan.member_avatar" />
                      <span>{{itemfan.member_name}}</span>
                    </div>
                    <div class="view ab"><van-icon name="eye-o" />{{itemfan.see_num}}</div>
                  </div>
                </router-link>
              </div>
            </van-list>
          </div>
        </van-tab>
        <van-tab title="商品">
          <div v-if="collectGoodsList.length==0" class="empty">
            <div>
              <img src="../../assets/image/empty-1.png" />
            </div>
            <div>对不起，您还没有收藏商品哦！</div>
          </div>
          <div class="list">
            <van-list
              v-model="loading"
              :finished="finished"
              @load="getCollect"
              :offset="50"
              finished-text="没有更多了"
            >
              <van-row gutter="15">

                  <van-col span="12" style="margin-bottom:15px ;padding-left: 7.5px;padding-right: 7.5px;" v-for="(itemgood,g) in collectGoodsList" :key="g">
                    <div class="prod">
                      <div @click="toProductDetail(itemgood.goods_id)">
                        <img :src="itemgood.goods_image_url" />
                      </div>
                      <div class="title">{{itemgood.goods_name.slice(0,15)+'...'}}</div>
                      <div class="desc">{{itemgood.goods_name}}</div>
                      <div class="bottom">
                        <div>
                          <span class="fuhao">￥</span>{{itemgood.goods_price}}
                        </div>
                        <div class="icon" @click="toMemCart(itemgood.goods_id)">
                          <van-icon name="cart" />
                        </div>
                      </div>
                    </div>
                  </van-col>

              </van-row>
            </van-list>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { getMemberCollectlist,getMemberFangctlist } from '../../api/memberInfo'
import { stringInterception } from '../../utils/common'
import { setGoodsInCart } from '../../api/memberCart'
import { Toast } from "vant";
import NavMenu from "../index/navMenu.vue";
export default {
  components: {NavMenu},
  data() {
    return {
      isActive:false,
      active: 0,
      list: [{}],
      collectGoodsList:[],
      collectFanList:[],
      perpage:10,
      page:1,
      page_total:0,
      finished:false,
      loading:false
    };
  },
  created() {
    this.getCollect()
    this.getFanCollect()
  },
  methods:{
    getCollect(){  //获取用户商品收藏列表
      getMemberCollectlist().then(
        response => {
          if(response.result.favorites_list){
             response.result.favorites_list.forEach(item=>{
              item.goods_name = stringInterception(item.goods_name,10)
               this.collectGoodsList.push(item)
            })
            this.page_total = response.result.page_total;
            if (this.page < this.page_total) {
              this.page++;
            } else {
              this.finished = true;
            }
            this.loading = false;
          }

        }
      )
    },
    getFanCollect(){  //获取用户设计方案
      let fid = this.fid
      getMemberFangctlist(fid).then(
        response => {
          console.log(response)
          if(response.result.fan_list) {
            response.result.fan_list.forEach(item=>{
              item.fan_name = stringInterception(item.fan_name,10)
              this.collectFanList.push(item)
            })
            this.page_total = response.result.page_total;
            if (this.page < this.page_total) {
              this.page++;
            } else {
              this.finished = true;
            }
            this.loading = false;
          }
        },
      )
    },
    toMemCart(goodsid){  //加入购物车

      let goods_id = goodsid
      let quantity = 1
      setGoodsInCart(goods_id,quantity).then(
        response => {
          if(response.code == 10000){
            Toast.success(response.message)
          }else{
            Toast.fail(response.message)
          }
        },
        error => {
          Toast(error.message)
        }
      )
    },

    // 商品详情页
    toProductDetail(id) {
      this.$router.push({ name: 'ProductDetail', query: { id : id }})
    },

  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  min-height: 100%;
  .empty {
    padding: 50px 15px;
    font-size: 16px;
    color: #b7b7b7;
    text-align: center;
    img {
      margin-bottom: 20px;
    }
  }
  .list {
    height: 100%;
    padding: 15px;
    .card {
      background-color: #fff;
      margin-bottom: 12px;
      box-shadow: 0 0 1px #eee;
      a{
        display: block;
      }
      .van-divider{margin:10px 0;border-color:#dedede;}
      .info {
        padding: 0 15px;
        .title {
          font-size: 16px;
          color: #323232;
          margin-bottom: 5px;
        }
        .meta{font-size:14px;}
      }
      .desc {
        padding: 0 12px 10px 12px;
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
        .view{
          align-items:center;
          i{
            font-size: 16px;
            padding-right: 2px;
          }
        }
      }
    }
    .prod {
      background-color: #fff;
      box-shadow: 0 0 1px #eee;
      div{
        img{border-top-left-radius:3px;border-top-right-radius:3px;}
      }
      .title {
        font-size: 15px;
        color: #323232;
        padding: 10px 15px 5px 15px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
        font-size: 20px;
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
          font-size: 16px;
        }
      }
    }
  }
}

</style>
