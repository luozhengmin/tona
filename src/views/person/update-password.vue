<template>
  <div class="container">
    <div class="header"></div>

    <div class="form">
      <van-field label="旧密码" placeholder="请输入旧密码"></van-field>
      <van-field label="新密码" placeholder="请输入新密码（6至20位数字或字母）"></van-field>
      <van-field label="确认密码" placeholder="请再次输入密码"></van-field>
    </div>

    <div class="btn">
      <van-button color="#1b1b1b" block @click="save()">保存</van-button>
    </div>
  </div>
</template>

<script>
import areaList from "@/json/area";
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    onConfirm(time) {
      this.value = time;
      this.showPicker = false;
    },
    onConfirmArea(values) {
      this.value = values.map(item => item.name).join("/");
      this.showArea = false;
    },
    save() {
      Toast({
        message: "保存成功",
        icon: "passed"
      });
    }
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
  }
  .btn {
    margin-top: 30px;
    padding: 0 16px;
  }
}
</style>
