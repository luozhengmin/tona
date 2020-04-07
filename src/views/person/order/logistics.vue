<template>
  <div class="container">
    <div class="header"></div>
    <div class="log">
      <div class="img">
        <van-image width="100%" height="100%" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="count">2件商品</div>
      </div>
      <div class="kuaidi">
        <div class="item">快递公司：顺丰快递</div>
        <div class="item">快递单号：123456946361</div>
        <div class="item">客服电话：95338</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {};
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
    padding: 0 15px;
    font-size: 16px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .img {
      width: 80px;
      .count {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
      }
    }
  }
}
</style>
