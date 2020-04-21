<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          我的积分
        </div>
        <div class="p-btn">
          <router-link to="">删除</router-link>
        </div>
      </div>
    </div>
    <div class="form">
      <van-cell-group>
        <van-field label="姓名" placeholder="输入收货人姓名"></van-field>
        <van-field label="手机号码" placeholder="输入手机号码"></van-field>
        <van-field label="邮政编码" placeholder="输入邮政编码"></van-field>
        <van-field
          readonly
          clickable
          is-link
          name="area"
          :value="value"
          label="所在区域"
          placeholder="选择所在省份、城市、区县"
          @click="showArea = true"
        />
      </van-cell-group>
      <van-field label="详细地址" placeholder="街道楼牌号等详细地址"></van-field>
    </div>
    <div class="default">
      <van-checkbox v-model="checked" checked-color="#f4523b"></van-checkbox>
      <span>设为默认地址</span>
    </div>

    <div class="btn">
      <van-button color="#1b1b1b" block @click="save()">保存</van-button>
    </div>

    <van-popup v-model="showArea" position="bottom">
      <van-area :area-list="areaList" @confirm="onConfirmArea" @cancel="showArea = false" />
    </van-popup>
  </div>
</template>

<script>
import areaList from "@/json/area";
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      value: "",
      showArea: false,
      areaList: areaList,
      checked: true
    };
  },
  methods: {
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
  .form {
    font-size: 15px;
    .van-cell {
      font-size: 15px;
      line-height: 1.8;
      padding:10px 16px;
      .van-button {
        border: none;
        font-size: 14px;
      }
    }
  }
  .default {
    padding: 16px;
    background-color: #fff;
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
      color: #888888;
      font-size: 13px;
    }
  }
  .btn {
    margin-top: 30px;
    padding: 0 15px;
    button{border-radius:4px;}
  }
}
</style>
