<template>
  <div class="container">
    <div class="header"></div>
    <div v-for="i in 3" :key="i">
      <div class="title">
        <span>
          <i class="fa fa-calendar" aria-hidden="true"></i> 2019年1月
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
    font-size: 16px;
    padding: 15px;
    color: #888;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .list {
    background-color: #fff;
    .value {
      font-size: 16px;
      color: #f4523b;
      line-height: 45px;
    }
  }
}
</style>
