<template>
  <div class="container">
    <div class="header"></div>
    <div class="log">
      <div class="img">
        <van-image width="75px" height="75px" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="count">2件商品</div>
      </div>
      <div class="kuaidi">
        <div class="item">快递公司：顺丰快递</div>
        <div class="item">快递单号：123456946361</div>
        <div class="item">客服电话：95338</div>
      </div>
    </div>
    <div class="step">
      <van-steps :active="active" active-icon="none" active-color="#323232">
        <van-step>已发货</van-step>
        <van-step>运输中</van-step>
        <van-step>派件中</van-step>
        <van-step>已签收</van-step>
      </van-steps>
      <div class="citys">
        <span>台州市</span>
        <span>上海市</span>
      </div>
    </div>
    <div class="wuliu">
      <div class="title">物流详情</div>
      <van-divider />
      <div class="wuliu-info">
        <van-steps direction="vertical" :active="0" active-color="#323232">
          <van-step>
            <h3>物流状态1</h3>
            <p>2016-07-12 12:40</p>
          </van-step>
          <van-step>
            <h3>物流状态2</h3>
            <p>2016-07-11 10:00</p>
          </van-step>
          <van-step>
            <h3>物流状态3</h3>
            <p>2016-07-11 10:00</p>
          </van-step>
          <van-step>
            <h3>快件已发货</h3>
            <p>2016-07-10 09:30</p>
          </van-step>
        </van-steps>
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
    padding: 8px 15px;
    color: #fff;
    display: flex;
    align-items: center;
    .img {
      height: 75px;
      position: relative;
      .count {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        text-align: center;
        font-size: 12px;
        background-color: #000;
        opacity: 0.6;
        padding: 2px 0;
      }
    }
    .kuaidi {
      padding: 10px 20px;
    }
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
    }
  }
  .wuliu {
    .title {
      padding: 15px;
      background-color: #fff;
      font-size: 18px;
      color: #000;
    }
    .van-divider {
      margin: 0;
    }
    .wuliu-info {
      padding: 15px;
      background-color: #fff;
    }
  }
}

.van-step--finish .van-step__circle,
.van-step--finish .van-step__line {
  background-color: #323232;
}
</style>
