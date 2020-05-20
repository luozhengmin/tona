<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: calc(100% - 50px);
}

.mb15 {
  margin-bottom: 15px;
}

/* 样式重写 */
.login-box .van-field__right-icon {
  height: 30px;
}

.person-order-status .van-goods-action-icon__icon{
  font-size: 28px;
  padding:4px 0;
  color: #323232;
}
.person-order-status .van-goods-action-icon__icon i{
  font-size: 32px;
}
.person-order-status .van-goods-action-icon__icon  .van-info{
  top:12px;right:2px;
}
.step .van-step--finish .van-step__circle,
.step .van-step--finish .van-step__line {
  background-color: #323232;
}
.step .van-step__title--active {
  background-color: #323232;
  color: #fff !important;
  border-radius: 5px;
  padding: 0 10px;
  position: relative;
}
.step .van-step__title--active::after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #323232;
  bottom: -8px;
  left: 22px;
}
.step .van-step__icon--active {
  background-color: #323232;
  border-radius: 100%;
  width: 5px;
  height: 5px;
}
.step .van-step__line,
.step .van-step__circle-container {
  margin-top: 10px;
}

.wuliu-info .van-step {
  font-size: 12px;
}
</style>
