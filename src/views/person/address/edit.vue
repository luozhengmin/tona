<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          地址管理
        </div>
        <div class="p-btn" @click="showAction" v-if="this.$route.query.id">
          <router-link to="">删除</router-link>
        </div>
      </div>
    </div>
    <div class="form">
      <van-cell-group>
        <van-field label="姓名" placeholder="输入收货人姓名" v-model="name"></van-field>
        <van-field label="手机号码" placeholder="输入手机号码" v-model="phone"></van-field>
        <van-field label="邮政编码" placeholder="输入邮政编码" v-model="zipcode"></van-field>
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
      <van-field label="详细地址" placeholder="街道楼牌号等详细地址" v-model="address"></van-field>
    </div>
    <div class="default">
      <van-checkbox v-model="checked" checked-color="#f4523b" ></van-checkbox>
      <span>设为默认地址</span>
    </div>

    <div class="btn">
      <van-button color="#1b1b1b" block @click="save()">保存</van-button>
    </div>

    <van-popup v-model="showArea" position="bottom">
      <van-area :area-list="areaList" @confirm="onConfirmArea" @cancel="showArea = false" />
    </van-popup>
    <van-popup v-model="show" position="bottom" :style="{ height: '24%' }" class="track">
      <div class="track-confirm">
        <p>确定要删除该收货人信息吗？</p>
        <h2>确定</h2>
      </div>
      <div class="track-cancel" @click="onCancel">
        取消
      </div>
    </van-popup>
  </div>
</template>

<script>
import areaList from "@/json/area";
import { Toast } from "vant";
import { getMemberAddressInfo,getMemberAddressAdd } from '../../../api/memberInfo'
export default {
  name: "",
  data() {
    return {
      show: false,
      value: "",
      showArea: false,
      areaList: areaList,
      checked: true,
      name: '',
      phone: '',
      zipcode: '',
      cityid: '',
      areaid: '',
      address: '',
      isdefault: ''
    };
  },
  created: function () {
     this.getAddressInfo();

  },
  methods: {
    getAddressInfo(){
      let addressid = this.$route.query.id
      if(addressid){
        getMemberAddressInfo(addressid).then(
          response => {
          },
          error => {}
        )
      }
    },
    onConfirmArea(values) {
      this.value = values.map(item => item.name).join("/");
      this.showArea = false;
    },
    save() {
      let phone = this.phone
      let name = this.name
      let address = this.address
      let isdefault = this.isdefault
      let cityid = this.cityid
      let areaid = this.areaid
      console.log(name)
      getMemberAddressAdd(name,cityid,areaid,address).then(
        response => {
          console.log(response)
          Toast.fail(response.message)
        },
        error => {}
      )
    },
    showAction(){
      this.show = true;
    },
    onCancel() {
      this.show = false;
    },
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
.track{
  color:#0076ff;
  text-align:center;
  background-color:initial;
  padding:0 15px;
  .track-confirm{
    background-color:rgba(255,255,255,0.85);
    border-radius:4px;
    margin-bottom:12px;
    p,h2{padding:12px 0;font-size:14px;}
    h2{color:#f52525;border-top:solid 1px #d5d5d5;}
  }
  .track-cancel{
    background-color:rgba(255,255,255,0.85);font-size:14px;
    padding:12px 0;
    border-radius:4px;
  }
}
</style>
