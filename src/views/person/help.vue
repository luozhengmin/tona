<template>
  <div class="container">
    <div class="header"></div>
    <div class="top">
      <div class="item">
        <van-icon name="service-o" />
        <span>在线客服</span>
      </div>
      <div class="split"></div>
      <div class="item">
        <van-icon name="phone-o" />
        <span>客服热线</span>
      </div>
    </div>
    <div class="q-title">问题分类</div>
    <div class="q-list">
      <van-cell title="常见问题" is-link />
      <van-cell title="配送问题" is-link />
      <van-cell title="售后问题" is-link />
      <van-cell title="优惠问题" is-link />
      <van-cell title="秒杀问题" is-link />
      <van-cell title="支付问题" is-link />
      <van-cell title="优币问题" is-link />
      <van-cell title="会员问题" is-link />
      <van-cell title="活动问题" is-link />
      <van-cell title="其他问题" is-link />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  height: 100%;
  .top {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    .item {
      font-size: 18px;
      color: #323232;
      display: flex;
      align-items: center;
      flex-direction: column;
      i {
        font-size: 36px;
        color: #888888;
        padding: 10px 0;
      }
    }
    .split {
      height: 65px;
      width: 1px;
      background-color: #888888;
    }
  }
  .q-title {
    padding: 20px 15px;
    font-size: 18px;
    color: #909090;
  }
  .q-list {
    background-color: #fff;
    .van-cell {
      font-size: 16px;
      line-height: 30px;
    }
  }
}
</style>