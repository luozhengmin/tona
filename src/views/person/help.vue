<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          帮助中心
        </div>
      </div>
    </div>
    <div class="top">
      <div class="item">
        <i class="iconfont">&#xe61b;</i>
        <span>在线客服</span>
      </div>
      <div class="split"></div>
      <div class="item">
        <i class="iconfont">&#xe60a;</i>
        <span>客服热线</span>
      </div>
    </div>
    <div class="q-title">问题分类</div>
    <div class="q-list">
      <van-cell title="常见问题" is-link to="/help-detail"/>
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
  export default {
    name:'',
    data(){
      return{
      }
    }
  };
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
      font-size:15px;
      color: #323232;
      display: flex;
      align-items: center;
      flex-direction: column;
      i {
        font-size:32px;
        color: #888888;
        padding-bottom:6px;
        line-height:normal;
        font-weight: bold;
      }
    }
    .split {
      height: 65px;
      width: 1px;
      background-color: #eee;
    }
  }
  .q-title {
    padding:12px 15px;
    font-size:15px;
    color: #909090;
  }
  .q-list {
    background-color: #fff;
    .van-cell {
      font-size: 15px;
      padding: 12px 15px;
    }
    .van-cell:not(:last-child)::after{border-bottom:solid 1px #eee;}
  }
}
</style>
