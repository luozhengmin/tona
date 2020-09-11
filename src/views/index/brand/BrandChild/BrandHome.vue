<template>
  <div>
    <index-banner :banners="banners"></index-banner>
    <div class="r-solution fix">
      <div class="index-brand fix">
        <div class="wrap fix">
          <div class="title-t">
            <h2>
              <span>推荐方案</span>
            </h2>
          </div>
          <div class="brand-con fix">
              <a href=""><img src="../../../../assets/image/cp01.jpg" /></a>
          </div>
        </div>
        <div class="design-list fix">
          <van-swipe :loop="false" :width="300" :show-indicators="false">
            <van-swipe-item v-for="item in designs" :key="item.fan_id">
              <a href>
                <img :src="item.overview_picture" />
              </a>
              <div class="main ab">
                <div class="infor-l ac">
                  <h2>{{item.fan_name}}</h2>
                  <div class="-t">
                    <span>{{item.style}}</span>
                  </div>
                </div>
                <div class="infor-r">
                  <van-tag color="#ee502f">NEW</van-tag>
                  <span class="ab">
                    <van-icon name="eye-o" />
                    {{item.see_num}}
                  </span>
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>

        <div class="list">
          <div class="title-t">
            <h2>
              <span>新品推荐</span>
            </h2>
          </div>
          <van-row gutter="15">
            <van-col
              span="12"
              style="margin:7.5px 0"
              v-for="item in products "
              :key="item.goods_id"
            >
              <div class="prod">
                <div>
                  <img :src="item.goods_image_url" />
                </div>
                <div class="main">
                  <div class="title">{{item.goods_name}}</div>
                  <div class="desc">{{item.goods_advword}}</div>
                  <div class="bottom">
                    <div>
                      <span class="fuhao">￥</span>
                      {{item.goods_price}}
                    </div>
                    <div class="icon">
                      <van-icon name="cart" />
                    </div>
                  </div>
                </div>
              </div>
            </van-col>
          </van-row>
        </div>

        <div class="custom-adv fix">
          <div class="adv-pic">自定义广告内容区</div>
          <div class="adv-pic">自定义广告内容区</div>
          <div class="adv-pic">自定义广告内容区</div>
        </div>

        <div class="list">
          <div class="title-t">
            <h2>
              <span>猜你喜欢</span>
            </h2>
          </div>
          <van-row gutter="15">
            <van-col span="12" style="margin:7.5px 0" v-for="item in likes " :key="item.goods_id">
              <div class="prod">
                <div>
                  <img :src="item.goods_image_url" />
                </div>

                <div class="main">
                  <div class="title">{{item.goods_name}}</div>
                  <div class="desc">{{item.goods_advword}}</div>
                  <div class="bottom">
                    <div>
                      <span class="fuhao">￥</span>
                      {{item.goods_price}}
                    </div>
                    <div class="icon">
                      <van-icon name="cart" />
                    </div>
                  </div>
                </div>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IndexBanner from "../../IndexBanner";
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import axios from "@/utils/request";

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  components: {
    IndexBanner
  },

  name: "BrandHome",
  props: {
    products: {
      type: Array,
      default: []
    },
    designs: {
      type: Array,
      default: []
    },
    likes: {
      type: Array,
      default: []
    }
  },
  created() {
    this.getBanners();
  },
  data() {
    return {
      banners: []
    };
  },
  methods: {
    getBanners() {
      axios.post("/api/Index/getIndexAdList/ap_id", { ap_id: 9 }).then(res => {
        let banners = res.result.banners;
        this.banners = banners;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.design-list {
  color: #323232;
  margin: 12px 0 0 15px;
  position: relative;
  overflow: hidden;
  .van-swipe-item {
    margin-right: 10px;
    .main {
      color: #888;
      padding: 12px 12px;
      align-items: center;
      border: solid 1px #eee;
      .infor-l {
        h2 {
          font-size: 14px;
          color: #000;
          padding-bottom: 4px;
        }
        .-t {
          font-size: 14px;
          i {
            font-size: 12px;
            line-height: 12px;
            padding: 0 2px 0 6px;
          }
        }
      }
      .infor-r {
        flex-direction: column;
        text-align: right;
        .van-tag {
          border-radius: 10px 10px 10px 0;
          margin-bottom: 3px;
        }
        span {
          align-items: center;
          .van-icon {
            font-size: 16px;
            padding-right: 2px;
          }
        }
      }
    }
  }
}

.custom-adv {
  padding: 0 15px;
  .adv-pic {
    margin: 6px 0;
    width: 100%;
    height: 80px;
    background-color: #ddd;
    font-size: 14px;
    color: #aaa;
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
        font-size: 16px;
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
    div{
      img{
        height:165px;
      }
    }
    .main {
      border: solid 1px #eee;
      .title {
        font-size: 15px;
        color: #323232;
        padding: 10px 15px 5px 15px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .desc {
        padding: 0 15px 0 15px;
        color: #888;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        margin-bottom:8px;
        line-height: 1.4;
      }
      .bottom {
        padding: 0 15px 10px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #f4523b;
        font-size: 20px;
        div{
          overflow:hidden;
          white-space:nowrap;
          text-overflow:ellipsis;
        }
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
