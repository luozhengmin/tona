<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">{{goodsinfo.shortname}}</div>
      </div>
    </div>
    <div class="detail-banner">
      <van-swipe @change="onChange" :autoplay="3000">
        <van-swipe-item v-for="(itemimage, index) in goodsimages" :key="index">
          <img :src="itemimage.imgUrl" width="100%" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/{{goodsimages.length}}</div>
        </template>
      </van-swipe>
    </div>
    <div class="detail-title ab fix">
      <div class="title-l ac">
        <h2>{{goodsinfo.goods_name}}</h2>
        <p>{{goodsinfo.goods_advword}}</p>
        <div class="t-price ab">
          <p class="jg">
            ￥
            <span>{{goodsinfo.goods_promotion_price}}</span>
          </p>
          <p class="jg-1">
            ￥
            <del>{{goodsinfo.goods_price}}</del>
          </p>
        </div>
      </div>
      <div class="title-r">
        <van-button icon="share" type="primary" is-link @click="showPopup">分享</van-button>
        <van-popup v-model="show" closeable position="bottom" :style="{ height: '40%' }">
          <div class="share">
            <h2>分享给好友</h2>
            <div class="share-list fix">
              <div class="list-item">
                <a href>
                  <i class="iconfont icon-weixin" />
                </a>
                <span>微信好友</span>
              </div>
              <div class="list-item">
                <a href>
                  <i class="iconfont icon-pengyouquan" />
                </a>
                <span>微信朋友圈</span>
              </div>
              <div class="list-item">
                <a href>
                  <i class="iconfont icon-QQkongjian" />
                </a>
                <span>QQ空间</span>
              </div>
              <div class="list-item">
                <a href>
                  <i class="iconfont icon-weibo" />
                </a>
                <span>新浪微博</span>
              </div>

              <div class="list-item">
                <a href>
                  <i class="iconfont icon-umidd17" />
                </a>
                <span>支付宝好友</span>
              </div>
              <div class="list-item">
                <a href>
                  <i class="iconfont icon-zhimaxinyongshenghuoquan" />
                </a>
                <span>生活圈</span>
              </div>
              <div class="list-item">
                <a href>
                  <i class="iconfont icon-qq" />
                </a>
                <span>QQ好友</span>
              </div>
              <div class="list-item">
                <a href>
                  <i class="iconfont icon-yixin" />
                </a>
                <span>易信</span>
              </div>
              <div class="list-item">
                <a href>
                  <i class="iconfont icon-fuzhilianjie" />
                </a>
                <span>复制链接</span>
              </div>
            </div>
          </div>
        </van-popup>
      </div>
    </div>

    <div class="detail-award fix">
      <div class="award ab">
        <p class="ab">
          <van-icon name="passed" />
          <span>无忧退货</span>
        </p>
        <p class="ab">
          <van-icon name="passed" />
          <span>款速退款</span>
        </p>
        <p class="ab">
          <van-icon name="passed" />
          <span>免费包邮</span>
        </p>
      </div>
      <van-cell>
        <template #title>
          <span class="award-title">奖励</span>
          <span class="award-con">购买获得同等订单金额积分</span>
        </template>
      </van-cell>
    </div>

    <div class="detail-choose">
      <van-cell is-link @click="showBase = true;completeLoadData=false">
        <template #title>
          <span class="award-title">选择</span>
          <span class="award-con">可选</span>
          <span class="award-con">颜色</span>
          <span class="award-con">规格</span>
          <span class="award-con">服务</span>
        </template>
      </van-cell>
      <van-sku
        v-model="showBase"
        :sku="skuData.sku"
        :goods="skuData.goods_info"
        :goods-id="goodsid"
        :hide-stock="false"
        :close-on-click-overlay="closeOnClickOverlay"
        :properties="skuData.properties"
        show-add-cart-btn
        :initial-sku="initialSku"
        reset-stepper-on-hide
        safe-area-inset-bottom
        reset-selected-sku-on-hide
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
        @sku-selected="skuSelected"
      />
      <!--disable-stepper-input-->
    </div>

    <div class="detail-serve fix">
      <!--<van-cell>-->
      <!--<template #title>-->
      <!--<span class="award-title">服务</span>-->
      <!--<span class="award-con">送货入户并安装 ￥0.00</span>-->
      <!--</template>-->
      <!--<template #right-icon>-->
      <!--<van-switch v-model="checked" size="24" active-color="#b7b7b7" inactive-color="#f4523b"/>-->
      <!--</template>-->
      <!--</van-cell>-->
      <van-cell>
        <template #title>
          <span class="award-title">运费</span>
          <span class="award-con">浙江台州 至 台州椒江区海门街道预售，付款后30天内发货</span>
        </template>
      </van-cell>
    </div>

    <div class="detail-remark fix">
      <van-cell
        is-link
        value="查看全部"
        @click="$router.push({ name: 'DetailMessage', query: { id : goodsinfo.goods_id }})"
      >
        <template #title>
          <span class="remark-title">
            商品评价
            <span class="remark-con">({{evaluateinfo.all}})</span>
          </span>
        </template>
      </van-cell>
      <div class="remark-list">
        <div class="list-item" v-for="(itemeval,e) in evalList" :key="e">
          <div class="item ab fix">
            <div class="r-pic">
              <img src="../../assets/image/xq01.jpg" />
            </div>
            <h2>{{itemeval.geval_frommembername}}</h2>
          </div>
          <p>{{itemeval.geval_content}}</p>
        </div>
      </div>
    </div>

    <div class="detail-cart fix">
      <van-goods-action>
        <van-goods-action-icon
          icon="service-o"
          @click="goPage('http://wpa.qq.com/msgrd?v=3&uin=1490081347&site=qq&menu=yes')"
        />
        <van-goods-action-icon
          icon="shopping-cart-o"
          :badge="carNum==0?'':carNum"
          @click="$router.push({ name: 'cart'})"
        />
        <van-goods-action-icon icon="star-o" @click="shouCang"/>
        <van-goods-action-button
          type="warning"
          color="#323232"
          text="加入购物车"
          @click="showBase = true;completeLoadData=false"
        />
        <van-goods-action-button
          type="danger"
          color="#f4523b"
          @click="showBase = true;completeLoadData=false"
          text="立即购买"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { stringInterception } from "../../utils/common";
import { getGoodsDetail,collectGoods } from "../../api/GoodsLists";
import { cartNumGet, setGoodsInCart } from "../../api/memberCart";
import { Toast } from "vant";
export default {
  name: "ProductDetail",
  data() {
    return {
      current: 0,
      completeLoadData: true,
      images: [{}],
      show: false,
      checked: true,
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      goodsid: "",
      skuData: {
        goods_info: {},
        sku: {},
      },
      initialSku: {},
      goodsinfo: [], //商品基础信息
      evaluateinfo: [], //商品评论
      evalList: [{}], //商品评论列表
      goodsimages: [], //商品图片集
      carNum: "", //获取购物车数量
    };
  },
  created() {
    this.goodsid = this.$route.query.id;
    this.getGoodsDetail();
    this.getCarNum();
  },
  methods: {
    getGoodsDetail() {
      //获取商品详情

      getGoodsDetail(this.goodsid).then((response) => {
        console.log(response);
        this.evaluateinfo = response.result.goods_evaluate_info; //全部评论信息 （好评，差评等）
        this.evalList = response.result.goods_eval_list; //商品评论列表
        this.goodsinfo = response.result.goods_info; //产品基础信息
        this.goodsinfo.shortname = stringInterception(
          this.goodsinfo.goods_name,
          9
        );
        this.goodsimages = response.result.goods_image
          .split(",")
          .map((item, index) => {
            //格式化图片集
            return { id: index, imgUrl: item };
          });

        var goodsInfo = {};
        goodsInfo.title = response.result.goods_info.goods_name;
        goodsInfo.picture = response.result.goods_image;
        goodsInfo.price = response.result.goods_info.goods_price;
        this.skuData.goods_info = goodsInfo;

        var sku = {};
        sku.tree = response.result.goods_info.spec_datas;
        sku.price = response.result.goods_info.goods_price;
        sku.hide_stock = false;
        sku.stock_num = response.result.goods_info.goods_storage;
        if (response.result.goods_info.spec_datas.length > 0) {
          sku.none_sku = false;
          sku.tree.forEach((o) => {
            o.v = o.spec_value;
            delete o.spec_value;
            delete o.k_id;
            o.v.forEach((m) => {
              m.id = m.id + "";
            });
          });
          sku.list = response.result.goods_info.spec_datas_list;
        } else {
          sku.none_sku = true;
        }
        this.initialSku = response.result.goods_info.initialSku;
        delete this.initialSku.selectedProp;
        this.skuData.sku = sku;
        this.completeLoadData=true
      });
    },

    skuSelected(obj) {
      if (!this.completeLoadData) {
        var selectedSkuComb = obj.selectedSkuComb;
        if (selectedSkuComb != null) {
          var goodsId = selectedSkuComb.id;
          this.goodsid = goodsId;
          this.getGoodsDetail();
        }
      }
    },

    shouCang(){
      collectGoods(this.goodsid).then(res=>{
        Toast.success("收藏成功");
      });
    },

    getCarNum() {
      //获取购物车商品数量
      cartNumGet().then((response) => {
        this.carNum = response.result.cart_count;
      });
    },

    onChange(index) {
      this.current = index;
    },
    showPopup() {
      this.show = true;
    },

    onBuyClicked(data) {
      this.$toast("buy:" + JSON.stringify(data));
    },

    onAddCartClicked(data) {
      //添加到购物车
      var selectedSkuComb = data.selectedSkuComb;
      this.goodsid = selectedSkuComb.id;
      var num = data.selectedNum;
      setGoodsInCart(this.goodsid, num).then((response) => {
        if (response.code == 10000) {
          Toast.success("加入购物车成功");
          this.showBase = false;
          this.getCarNum();
          this.getGoodsDetail();
        } else {
          Toast.fail(response.message);
          return;
        }
      });
    },
    goPage(url) {
      window.location.href = url;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100%;
  background-color: #f7f7f7;
}
.custom-indicator {
  position: absolute;
  right: 15px;
  bottom: 15px;
  padding: 2px 16px;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.4);
  color: #fff;
  border-radius: 20px;
}
.detail-title {
  padding: 12px 0 12px 15px;
  background-color: #fff;
  .title-l {
    padding-right: 4%;
    h2 {
      font-size: 16px;
      color: #323232;
    }
    p {
      font-size: 14px;
      color: #888;
    }
    .t-price {
      align-items: baseline;
      .jg {
        color: #f4523b;
        font-size: 18px;
        padding-right: 6px;
        span {
          font-size: 22px;
        }
      }
    }
  }
  .title-r {
    padding-top: 8px;
    .van-button {
      background-color: #f7f7f7;
      border: none;
      color: #b7b7b7;
      padding: 0 12px;
      height: 28px;
      line-height: 28px;
      border-radius: inherit;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      .van-button__icon {
        font-size: inherit;
      }
    }
  }
}
.share {
  padding: 24px 15px 12px 15px;
  h2 {
    font-size: 14px;
    color: #888;
    text-align: center;
  }
  .share-list {
    padding: 12px 0 40px 0;
    .list-item {
      text-align: center;
      font-size: 14px;
      color: #888;
      width: 33.33333%;
      float: left;
      padding: 0 4%;
      margin-bottom: 6px;
      a {
        display: block;
        line-height: 1.2;
        i {
          font-size: 32px;
          color: #ccc;
        }
      }
      span {
        display: block;
        padding-top: 4px;
      }
    }
  }
}
.detail-award {
  background-color: #fff;
  font-size: 14px;
  margin: 12px 0;
  color: #323232;
  .award {
    padding: 10px 15px;
    border-bottom: solid 1px #eee;
    p {
      padding-right: 8px;
      align-items: center;
      .van-icon {
        color: #f4523b;
        padding-right: 6px;
        font-size: 16px;
      }
    }
  }
  .van-cell {
    padding: 10px 15px;
  }
}
.award-title {
  color: #888;
  padding-right: 8px;
}
.detail-serve {
  .van-cell {
    margin-bottom: 12px;
  }
}
.detail-remark {
  margin-bottom: 60px;
  background-color: #fff;
  .van-cell {
    .van-cell__value {
      color: #f4523b;
    }
    .van-icon {
      color: #f4523b;
    }
  }
}
.remark-title {
  color: #888;
  padding-right: 0px;
}
.remark-list {
  padding: 0 15px;
  .list-item {
    padding: 12px 0;
    border-bottom: solid 2px #f7f7f7;
    .item {
      align-items: center;
      padding-bottom: 6px;
      .r-pic {
        width: 24px;
        height: 24px;
        margin-right: 6px;
        img {
          border-radius: 50%;
        }
      }
      h2 {
        font-size: 14px;
        color: #888;
      }
    }
    p {
      color: #323232;
      font-size: 14px;
    }
  }
}
.detail-award .van-cell,
.detail-choose .van-cell,
.detail-serve .van-cell,
.detail-remark .van-cell {
  font-size: 14px;
}
.detail-cart {
  position: relative;
  z-index: 999;
  .van-goods-action {
    z-index: 9999;
    .van-goods-action-button {
      border-radius: inherit;
    }
  }
}
</style>
