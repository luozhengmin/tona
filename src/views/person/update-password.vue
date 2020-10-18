<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">修改密码</div>
        <div class="p-btn">
          <!-- <router-link to="">完成</router-link> -->
        </div>
      </div>
    </div>

    <div class="form b-password">
      <van-field
        v-model="password"
        type="password"
        label="旧密码"
        placeholder="请输入旧密码"
      ></van-field>
      <van-field
        v-model="password1"
        type="password"
        label="新密码"
        placeholder="请输入新密码（6至8位数字或字母）"
      ></van-field>
      <van-field
        v-model="password2"
        type="password"
        label="确认密码"
        placeholder="请再次输入密码"
      ></van-field>
    </div>

    <div class="btn">
      <van-button color="#1b1b1b" block @click="save()">保存</van-button>
    </div>
  </div>
</template>

<script>
import { updateMemberInfo } from "../../api/memberInfo";
import areaList from "@/json/area";
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      password: "",
      password1: "",
      password2: "",
    };
  },
  methods: {
    onConfirm(time) {
      this.value = time;
      this.showPicker = false;
    },
    onConfirmArea(values) {
      this.value = values.map((item) => item.name).join("/");
      this.showArea = false;
    },
    save() {
      if (!this.password) {
        Toast({
          message: "旧密码不能为空",
        });
        return;
      }
      if (this.password1 != this.password2) {
        Toast({
          message: "两次密码不一致",
        });
        return;
      }
      var params = {
        password: this.password,
        password1: this.password1,
      };
      updateMemberInfo(params).then((res) => {
        this.password = "";
        this.password1 = "";
        this.password2 = "";
        Toast({
          message: "修改成功",
          icon: "passed",
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  height: 100%;
  .form {
    font-size: 15px;
    .van-cell {
      font-size: 15px;
      line-height: 1.8;
    }
  }
  .btn {
    margin-top: 30px;
    padding: 0 15px;
    .van-button {
      border-radius: 4px;
    }
  }
}
.b-password .van-field__label {
  width: 5.2em;
}
</style>
