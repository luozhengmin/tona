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
      <span>{{rateVal[rate]}}</span>
    </div>
    <div class="split">
      <van-divider />
    </div>
    <van-field
      v-model="message"
      rows="3"
      autosize
      type="textarea"
      placeholder="宝贝是否满足了你的期待？说说你的使用心得分享给其它想购买的朋友吧~"
    />
    <div class="upload">
      <van-uploader v-model="fileList" multiple />
    </div>
    <div class="split">
      <van-divider />
    </div>
    <div class="bottom">
      <span>匿名评价</span>
      <van-switch v-model="checked" active-color="#f4523b" inactive-color="#b7b7b7" size="24px" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rate: 1,
      rateVal: {
        1: "不满意",
        2: "一般",
        3: "满意",
        4: "比较满意",
        5: "十分满意"
      },
      message: "",
      fileList: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }],
      checked: true
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
    color: #888888;
    .left {
      display: flex;
      align-items: center;
      span {
        margin-right: 10px;
        color: #323232;
        font-size: 18px;
      }
    }
  }
  .split {
    .van-divider {
      margin: 0;
    }
  }
  .upload {
    padding: 10px 15px;
  }
  .van-cell:not(:last-child)::after {
    border: none;
  }
  .bottom {
    font-size: 16px;
    color: #888;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>