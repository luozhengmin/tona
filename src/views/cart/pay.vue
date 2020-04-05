<template>
  <div class="container">
    <div class="header"></div>
    <div class="tips">
      <van-notice-bar
        background="#ffffcc"
        color="#f4523b"
        mode="link"
        left-icon="warning"
      >请2小时内完成付款，超时订单将被取消。</van-notice-bar>
    </div>

    <van-field input-align="right" value="共 2 件">
      <template #label>
        <div style="width:200px">子订单号：1901101772920975</div>
      </template>
    </van-field>
    <van-field input-align="right" style="margin-bottom:15px" value="共 2 件">
      <template #label>
        <div style="width:200px">子订单号：1901101772920975</div>
      </template>
    </van-field>

    <div class="pay">
      <van-field readonly label="支付方式"></van-field>
      <van-field readonly input-align="right" label="支付宝支付">
        <template #left-icon>
          <van-icon name="alipay" />
        </template>
        <template #right-icon>
          <van-checkbox v-model="checked" checked-color="#f4523b"></van-checkbox>
        </template>
      </van-field>
      <van-field readonly input-align="right" label="微信支付">
        <template #left-icon>
          <van-icon name="wechat" />
        </template>
        <template #right-icon>
          <van-checkbox v-model="checked" checked-color="#f4523b"></van-checkbox>
        </template>
      </van-field>
      <van-field readonly input-align="right" label="银联支付">
        <template #left-icon>
          <van-icon name="card" />
        </template>
        <template #right-icon>
          <van-checkbox v-model="checked" checked-color="#f4523b"></van-checkbox>
        </template>
      </van-field>
    </div>
    <div class="bottom-bar">
      <van-submit-bar :price="3050" button-text="支付 01:59:55" @submit="onSubmit">
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
export default {
  name: "",
  data() {
    return {
      checked: true,
      value: "",
      columns: ["不开发票", "电子发票", "纸质发票"],
      showPicker: false
    };
  },
  methods: {
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
  .tips {
    margin-bottom: 15px;
  }
  .pay {
    margin-bottom: 50px;
    i {
      font-size: 24px;
    }
  }

  .van-submit-bar {
    bottom: 0;
    .van-submit-bar__bar {
      padding-right: 0;
      .van-button {
        border-radius: 0;
        background: #323232;
        width: auto;
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
    }
    .van-submit-bar__text {
      flex: none;
    }
  }
}
</style>
