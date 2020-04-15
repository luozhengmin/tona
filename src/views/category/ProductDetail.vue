<template>
    <div class="container">
      <div class="detail-banner">
        <van-swipe @change="onChange" :autoplay="3000">
          <van-swipe-item v-for="(item, index) in images" :key="index">
            <img src="../../assets/image/xq01.jpg">
          </van-swipe-item>
          <template #indicator>
            <div class="custom-indicator">
              {{ current + 1 }}/5
            </div>
          </template>
        </van-swipe>
      </div>
      <div class="detail-title ab fix">
        <div class="title-l ac">
          <h2>TONA-拉米娜浴室柜洗手台抽拉悬浮式洗手台</h2>
          <p>45度角双抽拉手设计，黑色封边条</p>
          <div class="t-price ab">
            <p class="jg">￥<span>1289.00</span></p>
            <p class="jg-1">￥<del>2030.00</del></p>
          </div>
        </div>
        <div class="title-r">
          <van-button icon="star-o" type="primary" is-link @click="showPopup">分享</van-button>
          <van-popup
            v-model="show"
            closeable
            position="bottom"
            :style="{ height: '40%' }">
            <div class="share">
              <h2>分享给好友</h2>
              <div class="share-list fix">
                <div class="list-item">
                  <a href="">
                    <img src="../../assets/image/cp02.jpg">
                  </a>
                  <span>微信好友</span>
                </div>
                <div class="list-item">
                  <a href="">
                    <img src="../../assets/image/cp02.jpg">
                  </a>
                  <span>微信朋友圈</span>
                </div>
                <div class="list-item">
                  <a href="">
                    <img src="../../assets/image/cp02.jpg">
                  </a>
                  <span>QQ空间</span>
                </div>
                <div class="list-item">
                  <a href="">
                    <img src="../../assets/image/cp02.jpg">
                  </a>
                  <span>新浪微博</span>
                </div>

                <div class="list-item">
                  <a href="">
                    <img src="../../assets/image/cp02.jpg">
                  </a>
                  <span>支付宝好友</span>
                </div>
                <div class="list-item">
                  <a href="">
                    <img src="../../assets/image/cp02.jpg">
                  </a>
                  <span>生活圈</span>
                </div>
                <div class="list-item">
                  <a href="">
                    <img src="../../assets/image/cp02.jpg">
                  </a>
                  <span>QQ好友</span>
                </div>
                <div class="list-item">
                  <a href="">
                    <img src="../../assets/image/cp02.jpg">
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
          <p class="ab"><van-icon name="passed" /><span>无忧退货</span></p>
          <p class="ab"><van-icon name="passed" /><span>无忧退货</span></p>
          <p class="ab"><van-icon name="passed" /><span>无忧退货</span></p>
        </div>
        <van-cell>
          <template #title>
            <span class="award-title">奖励</span>
            <span class="award-con">购买最高得249积分</span>
          </template>
        </van-cell>
      </div>

      <div class="detail-choose">
        <van-cell is-link @click="showBase = true">
          <template #title>
            <span class="award-title">选择</span>
            <span class="award-con">可选</span>
            <span class="award-con">颜色</span>
            <span class="award-con">规格</span>
          </template>
        </van-cell>
        <van-sku
          v-model="showBase"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          :start-sale-num="skuData.start_sale_num"
          :close-on-click-overlay="closeOnClickOverlay"
          :properties="skuData.properties"
          disable-stepper-input
          reset-stepper-on-hide
          safe-area-inset-bottom
          reset-selected-sku-on-hide
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        />

      </div>

      <div class="detail-serve fix">
        <van-cell>
          <template #title>
            <span class="award-title">服务</span>
            <span class="award-con">送货入户并安装 ￥0.00</span>
          </template>
          <template #right-icon>
            <van-switch v-model="checked" size="24" active-color="#b7b7b7" inactive-color="#f4523b"/>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <span class="award-title">运费</span>
            <span class="award-con">浙江台州  至  台州椒江区海门街道预售，付款后30天内发货 </span>
          </template>
        </van-cell>
      </div>

      <div class="detail-remark fix">
        <van-cell is-link value="查看全部">
          <template #title>
            <span class="remark-title">商品评价<span class="remark-con">(55665)</span></span>
          </template>
        </van-cell>
        <div class="remark-list">
          <div class="list-item" v-for="i in 4" :key="i">
            <div class="item ab fix">
              <div class="r-pic">
                <img src="../../assets/image/xq01.jpg">
              </div>
              <h2>love 雨欣</h2>
            </div>
            <p>洗手台太高大上了，洗手盆表面光滑，设计美观，整体色
              彩很完美……</p>
          </div>

        </div>
      </div>

      <div class="detail-cart fix">
        <van-goods-action>
          <van-goods-action-icon icon="service-o"/>
          <van-goods-action-icon icon="shopping-cart-o" badge="5" />
          <van-goods-action-icon icon="star-o" />
          <van-goods-action-button type="warning" color="#323232" text="加入购物车" />
          <van-goods-action-button type="danger" color="#f4523b" text="立即购买" />
        </van-goods-action>
      </div>
    </div>
</template>

<script>
  import { skuData, initialSku } from './data';
  export default {
    name: "ProductDetail",
    data() {
      this.skuData = skuData;
      this.initialSku = initialSku;
      return {
        current: 0,
        images: [
          {id: 1, imgUrl: ''},
          {id: 2, imgUrl: ''},
          {id: 3, imgUrl: ''},
          {id: 4, imgUrl: ''},
          {id: 5, imgUrl: ''}
        ],
        show: false,
        checked: true,
        showBase: false,
        showCustom: false,
        showStepper: false,
        showSoldout: false,
        closeOnClickOverlay: true,
      };

    },
    methods: {
      onChange(index) {
        this.current = index;
      },
      showPopup() {
        this.show = true;
      },

      onBuyClicked(data) {
        this.$toast('buy:' + JSON.stringify(data));
      },

      onAddCartClicked(data) {
        this.$toast('add cart:' + JSON.stringify(data));
      },

    }
  }
</script>

<style lang="scss" scoped>
  .container{min-height:100%;background-color:#f7f7f7;}
  .custom-indicator{position:absolute;right:15px;bottom:15px;padding:2px 16px;font-size:14px;background: rgba(255, 255, 255, 0.4);
    color:#fff;border-radius:20px;}
  .detail-title{
    padding:12px 0 12px 15px;
    background-color:#fff;
    .title-l{
      padding-right:4%;
      h2{font-size:16px;color:#323232;}
      p{font-size:14px;color:#888;}
      .t-price{
        align-items: baseline;
        .jg{
          color:#f4523b;font-size:18px;padding-right:6px;
          span{font-size:22px;}
        }
      }
    }
    .title-r{
      padding-top:8px;
      .van-button{
        background-color:#f7f7f7;
        border:none;
        color:#b7b7b7;
        padding:0 12px;
        height:28px;
        line-height:28px;
        border-radius:inherit;
        border-top-left-radius:20px;
        border-bottom-left-radius:20px;
        .van-button__icon{font-size:inherit;}
      }
    }
  }
  .share{
    padding:24px 15px 12px 15px;
    h2{font-size:14px;color:#888;text-align:center;}
    .share-list{
      padding:12px 0 40px 0;
      .list-item{
        text-align:center;
        font-size:14px;color:#888;
        width:33.33333%;
        float:left;
        padding:0 4%;
        margin-bottom:6px;
        a{display:block;}
        span{
          display:block;
          padding-top:6px;
        }
      }
    }
  }
  .detail-award{
    background-color:#fff;
    font-size:14px;
    margin:12px 0;
    color:#323232;
    .award{
      padding:10px 15px;
      border-bottom:solid 1px #eee;
      p{
        padding-right:8px;
        align-items:center;
        .van-icon{
          color:#f4523b;
          padding-right:6px;
          font-size:16px;
        }
      }
    }
    .van-cell{padding:10px 15px;}
  }
  .award-title{color:#888;padding-right:8px;}
  .detail-serve{
    .van-cell{margin-bottom:12px;}
  }
  .detail-remark{
    margin-bottom:60px;
    background-color:#fff;
    .van-cell{
      .van-cell__value{color:#f4523b;}
      .van-icon{color:#f4523b;}
    }
  }
  .remark-title{color:#888;padding-right:0px;}
  .remark-list{
    padding:0 15px;
    .list-item{
      padding:12px 0;
      border-bottom:solid 2px #f7f7f7;
      .item{
        align-items:center;
        padding-bottom:6px;
        .r-pic{width:24px;height:24px;margin-right:6px;
          img{border-radius:50%;}
        }
        h2{font-size:14px;color:#888;}
      }
      p{color:#323232;font-size:14px;}
    }
  }
  .detail-award .van-cell,.detail-choose .van-cell,.detail-serve .van-cell,.detail-remark .van-cell{font-size:14px;}
  .detail-cart{
    .van-goods-action{
      z-index: 9999;
      .van-goods-action-button{
        border-radius:inherit;
      }
    }
  }
</style>
