<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          积分记录
        </div>
        <div class="p-btn">
          <router-link to="/integral/record"><i class="iconfont bg-7">&#xe7e5;</i></router-link>
        </div>
      </div>
    </div>
    <div v-for="i in 3" :key="i">
      <div class="title">
        <span>
         <i class="iconfont" aria-hidden="true">&#xe64d;</i> 2019年1月
        </span>
        <span>获得：500</span>
      </div>
      <div class="list">
        <van-cell v-for="j in 5" :key="j" title="完成每日登录" size="large" label="2020-02-02 20:20">
          <template>
            <span class="value">+5</span>
          </template>
        </van-cell>
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
  .top {
    background-image: url("../../../assets/image/jy-bg-3.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 27px 15px;
    color: #fff;
    text-align: center;
    font-size: 16px;
    .icon {
      width: 40px;
      margin: auto;
      img {
        display: block;
      }
    }
    .count {
      font-size: 33px;
    }
  }
  .title {
    font-size: 14px;
    padding:12px 15px;
    color: #888;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .list {
    background-color: #fff;
    .van-cell{
      border-bottom:solid 1px #eee;
      .van-cell__title{font-size:15px;}
      .van-cell__label{font-size:13px;margin-top:1px;}
    }
    .van-cell:not(:last-child)::after{border:none;}
    .value {
      font-size: 18px;
      color: #f4523b;
      line-height: 45px;
    }
  }
}
</style>
