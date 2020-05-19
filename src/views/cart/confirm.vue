<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">确认订单</div>
      </div>
    </div>
    <div class="contact ab">
      <div class="contact-l ac">
        <div class="top">
          <span>{{address_info.address_realname}}</span>
          <span>{{address_info.address_mob_phone}}</span>
          <van-tag v-if="address_info.address_is_default=='1'" color="#f4523b">默认</van-tag>
        </div>
        <div class="bottom">
          <van-icon name="location" color="#f4523b" size="20" />
          <span>{{address_info.area_info}} {{address_info.address_detail}}</span>
        </div>
      </div>
      <div class="contact-r">
        <router-link to="/address-list">
          <van-icon name="arrow" />
        </router-link>
      </div>
    </div>
    <div class="card-list">
      <div class="product-card" v-for="item in store_cart_list" :key="item.store_id">
        <div class="store">{{item.store_name}}</div>
        <div class="product" v-for="goods in item.goods_list" :key="goods.goods_id">
          <van-card :thumb="goods.goods_image_url">
            <template slot="title">
              <div class="title">
                <span>{{goods.goods_name}}</span>
                <div>￥{{goods.goods_price}}</div>
              </div>
            </template>
            <template slot="desc">
              <div class="desc num">
                <span>颜色</span>
                <span>x {{goods.goods_num}}</span>
              </div>
              <div class="desc">规格</div>
            </template>
          </van-card>
        </div>
        <van-field readonly input-align="right" label="商品合计" :value="'￥'+item.store_goods_total" />
        <van-field readonly input-align="right" label="运费" :value="'￥'" />
        <van-field
          readonly
          clickable
          input-align="right"
          label="发票信息"
          right-icon="arrow"
          :value="inv_info.content"
          @click="showPicker = true"
        />
        <van-field input-align="right" label="订单备注" placeholder="选填，请先和商家协商一致" />
      </div>
    </div>
    <div class="jifen">
      <van-field readonly input-align="right" label="积分抵扣" placeholder="使用200积分可抵扣¥2.00现金">
        <template #right-icon>
          <van-checkbox v-model="checked" checked-color="#f4523b"></van-checkbox>
        </template>
      </van-field>
    </div>
    <div style="height:105px;"></div>
    <div class="bottom-bar">
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <span class="num-text">共 3 件</span>
      </van-submit-bar>
    </div>

    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        title="发票信息"
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
import { submitCart } from "../../api/memberCart";
export default {
  name: "",
  data() {
    return {
      address_info: {},
      store_cart_list: [],
      inv_info: {},
      checked: true,
      value: "",
      columns: ["不开发票", "电子发票", "纸质发票"],
      showPicker: false,
      goodsParams: ""
    };
  },
  created() {
    this.goodsParams = this.$route.query.data;
    this.getGoodsInfo();
  },
  methods: {
    getGoodsInfo() {
      submitCart({ cart_id: this.goodsParams }).then(res => {
        if (res.code == 10001) {
          this.$router.push("/address-edit");
        }
        console.log(res);
        this.address_info = res.result.address_info;
        this.store_cart_list = res.result.store_cart_list;
        this.inv_info = res.result.inv_info;
      });
    },
    onSubmit() {},
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  .contact {
    background-color: #fff;
    padding: 20px 15px;
    margin-bottom: 12px;
    align-items: center;
    .contact-l {
      .top {
        font-size: 16px;
        font-weight: bolder;
        color: #232323;
        display: flex;
        align-items: center;
        padding-left: 20px;
        span {
          margin: 0 5px;
        }
      }
      .bottom {
        font-size: 14px;
        color: #b7b7b7;
        display: flex;
        align-items: center;
        padding: 5px 0;
        span {
          margin-left: 10px;
        }
      }
    }
    .contact-r {
      font-size: 18px;
      color: #b7b7b7;
    }
  }
  .card-list {
    .product-card {
      padding: 10px 15px;
      margin-bottom: 15px;
      background-color: #fff;
      .store {
        padding: 15px 0;
        color: #232323;
        font-size: 16px;
      }
      .product {
        display: flex;
        align-items: center;
        .van-card {
          padding-left: 0;
          padding-right: 0;
        }
        .title {
          color: #1b1b1b;
          font-size: 16px;
          display: flex;
          span {
            flex-grow: 1;
          }
        }
        .desc {
          color: #b7b7b7;
        }
        .num {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .price {
          text-align: right;
          width: 70px;
        }
      }
      .van-field {
        padding-left: 0;
        padding-right: 0;
        .van-field__control {
          color: #b7b7b7;
        }
      }
      .van-cell:not(:last-child)::after {
        border: 0;
      }
    }
  }
  .jifen {
    margin-bottom: 50px;
  }
  .van-submit-bar {
    bottom: 50px;
    .van-submit-bar__bar {
      padding-right: 0;
      .van-submit-bar__text {
        color: #b7b7b7;
      }
      .van-button {
        border-radius: 0;
        background: #323232;
      }
      .van-submit-bar__price {
        color: #f4523b;
      }
    }
  }
  .bottom-bar {
    .num-text {
      margin-right: 12px;
      margin-top: 5px;
      color: #b7b7b7;
    }
    .van-submit-bar__text {
      flex: none;
    }
  }
}

.van-card {
  background-color: #fff;
  flex-grow: 1;
}
.van-card__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
