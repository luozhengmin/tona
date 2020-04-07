<template>
  <div class="container">
    <div class="header"></div>
    <van-notice-bar
      text="评价100字+3张图，最高可获100积分"
      background="#ffffcc"
      color="#f4523b"
      left-icon="volume-o"
    />
    <div class="rate">
      <div class="left">
        <span>评分</span>
        <van-rate v-model="rate" icon="like" color="#f4523b" void-icon="like-o" />
      </div>
      <span>不满意</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rate: {
        value: 1,
        text: "不满意"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  .rate {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      span {
        margin-right: 10px;
      }
    }
  }
}
</style>