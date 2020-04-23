<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          修改手机号
        </div>
      </div>
    </div>

    <div class="step ab">
      <div class="step-1 step-active">1.验证原号码</div>
      <div class="step-1">2.绑定新号码</div>
    </div>

    <div class="form">
      <van-field readonly value="188****7686">
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
      <van-field placeholder="请输入验证码"></van-field>
    </div>

    <div class="btn">
      <van-button color="#d0d0d0" block @click="next()">确定</van-button>
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
    next() {},

  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  height: 100%;
  .step{
    text-align:center;
    font-size:14px;color:#888;
    margin-bottom:12px;
    background: url("../../assets/image/step-bj.jpg");
    background-size:cover;
    width:100%;height:40px;
    .step-1,.step-2{width:50%;height:40px;line-height:40px;position:relative;}
    .step-active{color:#323232;}
  }
  .form {
    font-size: 14px;
    .van-cell {
      font-size: 14px;
      line-height:1.8px;
      border-bottom:solid 1px #eee;
    }
    .van-button--disabled {
      color: #fff !important;
      border: 0;
      background-color: #d0d0d0;
    }
  }
  .btn {
    margin-top:20px;
    padding: 0 15px;
    .van-button{border-radius:4px;}
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
