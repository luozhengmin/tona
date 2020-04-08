<template>
  <div class="container">
    <div class="header"></div>
    <div class="log">
      <div class="item">服务单号：123456946361</div>
      <div class="item">申请时间：2020-02-02 02:02:02</div>
    </div>
    <div class="step">
      <van-steps :active="active" active-icon="none" active-color="#323232">
        <van-step>申请中</van-step>
        <van-step>审核中</van-step>
        <van-step>收货中</van-step>
        <van-step>退款中</van-step>
        <van-step>已完成</van-step>
      </van-steps>
      <div class="citys">
        <span>2020-02-02 02:02:02</span>
        <span>2020-02-02 02:02:02</span>
        <span>2020-02-02 02:02:02</span>
        <span>2020-02-02 02:02:02</span>
        <span>2020-02-02 02:02:02</span>
      </div>
    </div>
    <div class="wuliu">
      <div class="title">问题描述</div>
      <van-divider />
      <div class="wuliu-info">洗脸盆有瑕疵</div>
    </div>
    <div class="wuliu">
      <div class="title">审核留言</div>
      <van-divider />
      <div
        class="wuliu-info"
      >亲爱的客户，很抱歉您的商品出现这样的问题。请准备好商品全套（商品、附件、发票原件、包装）按以下地址寄往TONA HOME售后部，不支持到付及平邮。如收到商品后情况属实，我们会尽快为您办理。感谢您对的支持。（注：电子发票及换货发票无需退回）。提示：为避免数据遗失或泄露，请您提前做好数据备份，TONA HOME将不承担相应责任。</div>
      <div class="item">
        <span>收货地址：</span>广东省深圳市TONA HOME售后服务部
      </div>
      <div class="item">
        <span>联系姓名：</span>TONA HOME
      </div>
      <div class="item">
        <span>邮政编码：</span>518000
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      active: 2
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  min-height: 100%;
  .log {
    background-image: url("../../../assets/image/jy-bg-2.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 20px 15px;
    color: #fff;
  }
  .step {
    padding: 15px;
    background-color: #fff;
    margin-bottom: 15px;
    .citys {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #888;
      margin-top: -5px;
      span {
        text-align: center;
      }
    }
  }
  .wuliu {
    margin-bottom: 15px;
    .title {
      padding: 15px;
      background-color: #fff;
      font-size: 18px;
      color: #323232;
    }
    .van-divider {
      margin: 0;
    }
    .wuliu-info {
      padding: 15px;
      background-color: #fff;
      min-height: 100px;
    }
    .item {
      padding: 5px 15px;
      background-color: #fff;
      span {
        color: #323232;
      }
    }
  }
}

.van-step--finish .van-step__circle,
.van-step--finish .van-step__line {
  background-color: #323232;
}
</style>
