<template>
  <div class="container">
    <div class="header"></div>
    <div class="step">第二步，样式待定</div>
    <div class="form">
      <van-field placeholder="请输入新号码">
        <template #button>
          <van-button
            plain
            color="#f4523b"
            size="small"
            :disabled="disabled"
            @click="sendSms"
          >{{smsBtn}}</van-button>
        </template>
      </van-field>
      <van-field placeholder="验证码"></van-field>
    </div>

    <div class="btn">
      <van-button color="#d0d0d0" block @click="next()">下一步</van-button>
    </div>

    <div class="tips">
      <p style="display: flex;align-items: center;">
        <van-icon name="warning" style="margin-right:5px" />温馨提示：
      </p>
      <p>手机号码修改成功后需要使用新的手机号码进行登录</p>
    </div>
  </div>
</template>

<script>
import areaList from "@/json/area";
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      smsBtn: "获取验证码",
      disabled: false
    };
  },
  methods: {
    sendSms() {
      var count = 60;
      var that = this;
      let interVal = setInterval(function() {
        that.disabled = true;
        that.smsBtn = count + "秒后重试";
        count--;
        if (count == 0) {
          that.smsBtn = "获取验证码";
          that.disabled = false;
          clearInterval(interVal);
        }
      }, 1000);
    },
    next() {}
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  height: 100%;
  .user {
    padding: 15px;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    flex-direction: column;
    .info {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      .name {
        padding: 3px 0;
        font-size: 18px;
        color: #363636;
      }
    }
  }
  .form {
    font-size: 16px;
    .van-cell {
      font-size: 16px;
      line-height: 30px;
    }
    .van-button--disabled {
      color: #fff !important;
      border: 0;
      background-color: #d0d0d0;
    }
  }
  .btn {
    margin-top: 30px;
    padding: 0 16px;
  }
  .tips {
    padding: 0 15px;
    color: #888;
    margin-top: 15px;
    line-height: 24px;
    padding-bottom: 50px;
  }
}
</style>
