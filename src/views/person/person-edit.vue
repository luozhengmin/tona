<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          个人信息
        </div>
      </div>
    </div>
    <div class="user">
      <van-image
        round
        fit="cover"
        width="60px"
        height="60px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="info">
        <div class="name">点击修改头像</div>
      </div>
    </div>

    <div class="form">
      <van-cell-group>
        <van-field label="用户ID" value="8447466"></van-field>
        <van-field label="昵称" value="我是夏天" use-button-slot>
          <van-button slot="button" type="info" plain size="small" @click="onidentify">去认证</van-button>
        </van-field>
        <van-field label="性别">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1" checked-color="#f4523b">男</van-radio>
              <van-radio name="2" checked-color="#f4523b">女</van-radio>
              <van-radio name="3" checked-color="#f4523b">保密</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          readonly
          clickable
          is-link
          name="datetimePicker"
          :value="currentDate"
          label="生日"
          placeholder="选择生日"
          @click="showPicker = true"
        />
        <!--<van-field-->
          <!--readonly-->
          <!--clickable-->
          <!--is-link-->
          <!--name="datetimePicker"-->
          <!--:value="currentDate"-->
          <!--label="所在地"-->
          <!--placeholder="选择城市"-->
          <!--@click="showPicker = true"-->
        <!--/>-->
        <van-field
          readonly
          clickable
          is-link
          name="area"
          :value="value"
          label="所在地"
          placeholder="点击选择省市区"
          @click="showArea = true"
        />
      </van-cell-group>
      <van-field label="职业" placeholder="填写职业"></van-field>
      <van-field label="个性签名" placeholder="填写你的个性签名"></van-field>
    </div>

    <div class="btn">
      <van-button color="#1b1b1b" block @click="save()">保存</van-button>
    </div>

    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker type="date" @confirm="onConfirmDate" @cancel="showPicker = false" />
    </van-popup>
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
      radio: "1",
      currentDate: "",
      showPicker: false,
      value: "",
      showArea: false,
      areaList: areaList
    };
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
    },
    onidentify(){
      this.$router.push({'name': 'identify'})
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
    margin-bottom: 12px;
    flex-direction: column;
    .info {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top:6px;
      .name {
        font-size:14px;
        color: #888;
      }
    }
  }
  .form {
    font-size: 16px;
    .van-cell {
      font-size: 14px;
      line-height:1.6;
      .van-cell__right-icon{margin-right:-5px;}
      .van-button {
        border: none;
        font-size: 14px;
        padding:0;
        text-align: right;
      }
    }
  }
  .btn {
    margin-top: 30px;
    padding: 0 15px;
    .van-button{border-radius:4px;}
  }
}
</style>
