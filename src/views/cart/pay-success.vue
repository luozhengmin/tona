<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          支付完成
        </div>
      </div>
    </div>
    <div class="tips">
      <div>
        <i class="fa fa-check-circle"></i>
      </div>
      <div>订单支付成功</div>
    </div>
    <div class="pay">
      <div class="item">
        <van-icon name="credit-pay" />支付方式
        <span>微信支付</span>
      </div>
      <div class="item">
        <van-icon name="balance-list-o" />支付金额
        <span>￥180</span>
      </div>
    </div>
    <div class="btns">
      <van-button type="default" size="small" color="#888" plain>查看订单</van-button>
      <van-button type="default" size="small" color="#888" plain>回到首页</van-button>
    </div>
    <div class="info">
      <van-icon name="warning" />
      <p>温馨提示：TONA HOME不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作</p>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  data() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  min-height: 100%;
  .tips {
    background-color: #fff;
    text-align: center;
    color: #f4523b;
    font-size: 17px;
    i {
      font-size:52px;
      padding: 10px;
      margin-top:40px;
    }
  }
  .pay {
    background-color: #fff;
    text-align: center;
    font-size: 15px;
    padding: 12px 0 24px 0;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 0;
      .van-icon {
        width: 20px;
        font-size: 20px;
        margin-right: 7px;
      }
      span {
        display: inline-block;
        display: inline-block;
        width: 70px;
        text-align: left;
        margin-left: 15px;
      }
    }
  }
  .btns {
    text-align: center;
    background-color: #fff;
    padding-bottom: 30px;
    .van-button {
      color: #888;
      margin: 0 6px;
      font-size: 14px;
      padding:2px 24px;
      height: auto;
    }
  }
  .info {
    display: flex;
    padding: 15px;
    line-height: 24px;
    .van-icon {
      margin-top: 3px;
      font-size: 16px;
      margin-right: 7px;
    }
  }
}
</style>
