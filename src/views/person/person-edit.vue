<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">个人信息</div>
      </div>
    </div>
    <div class="user">
      <van-image
        round
        fit="cover"
        width="60px"
        height="60px"
        v-bind:src="user.member_avatar + '?' + time"
      />
      <div class="info">
        <van-uploader
          v-model="fileList"
          :after-read="afterRead"
          :preview-image="false"
        >
          <div class="name">点击修改头像</div>
        </van-uploader>
      </div>
    </div>

    <div class="form">
      <van-cell-group>
        <van-field
          label="用户ID"
          :value="user.member_id"
          readonly
          class="userId"
        ></van-field>
        <van-field label="昵称" v-model="user.member_nickname" use-button-slot>
          <van-button
            slot="button"
            type="info"
            plain
            size="small"
            @click="onidentify"
            >去认证</van-button
          >
        </van-field>
        <van-field label="性别">
          <template #input>
            <van-radio-group v-model="user.member_sex" direction="horizontal">
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
          v-model="user.member_birthday"
          label="生日"
          placeholder="选择生日"
          @click="showPicker = true"
        />
        <van-field
          readonly
          clickable
          is-link
          name="area"
          v-model="user.member_areainfo"
          label="所在地"
          placeholder="点击选择省市区"
          @click="showArea = true"
        />
      </van-cell-group>
      <van-field
        label="个性签名"
        v-model="user.member_signature"
        placeholder="填写你的个性签名"
      ></van-field>
    </div>

    <div class="btn">
      <van-button color="#1b1b1b" block @click="save()">保存</van-button>
    </div>

    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        type="date"
        @confirm="onConfirmDate"
        @cancel="showPicker = false"
      />
    </van-popup>
    <van-popup v-model="showArea" position="bottom">
      <van-area
        :area-list="areaList"
        @confirm="onConfirmArea"
        @cancel="showArea = false"
      />
    </van-popup>
  </div>
</template>

<script>
import areaList from "@/json/area";
import { updateMemberInfo, getMemberdetailInfo } from "../../api/memberInfo";
import { timestampToTime } from "../../utils/util.js";
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      user: {},
      radio: "1",
      currentDate: "",
      showPicker: false,
      showArea: false,
      areaList: areaList,
      fileList: [],
    };
  },
  created: function () {
    this.time = new Date().getTime();
    getMemberdetailInfo().then((response) => {
      if (response && response.result.member_info) {
        this.user = response.result.member_info;
        console.log(this.user);
      }
    });
  },
  computed: {
    birthday() {
      return (this.currentDate = timestampToTime(this.user.member_birthday));
    },
  },
  methods: {
    onConfirm(time) {
      this.value = time;
      this.showPicker = false;
    },
    onConfirmArea(values) {
      this.user.member_provinceid = values[0].code;
      this.user.member_cityid = values[1].code;
      this.user.member_areaid = values[2].code;
      this.user.member_areainfo = values.map((item) => item.name).join("/");
      this.showArea = false;
    },
    onConfirmDate(values) {
      this.user.member_birthday = this.$moment(values).format("YYYY-MM-DD");
      this.showPicker = false;
    },
    afterRead(file) {
      const formData = new FormData(); // 声明一个FormData对象
      formData.append("memberavatar", file.file);
      axios
        .post("/api/Member/edit_memberavatar", formData, {
          headers: {
            "X-DS-KEY": $cookies.get("token"),
            "content-type": "multer/form-data",
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
    save() {
      updateMemberInfo(this.user).then((response) => {
        console.log(response);
        if (response.code != 10000) {
          Toast.fail(response.message);
          return;
        } else {
          Toast({
            message: "保存成功",
            icon: "passed",
          });
        }
      });
      Toast({
        message: "保存成功",
        icon: "passed",
      });
    },
    onidentify() {
      this.$router.push({ name: "identify" });
    },
  },
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
      margin-top: 6px;
      .name {
        font-size: 14px;
        color: #888;
      }
    }
  }
  .form {
    font-size: 16px;
    .van-cell {
      font-size: 15px;
      line-height: 1.6;
      .van-cell__right-icon {
        margin-right: -5px;
      }
      .van-button {
        border: none;
        font-size: 14px;
        padding: 0;
        text-align: right;
      }
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
</style>
