<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">填写报备信息</div>
        <div class="menu-ico" v-bind:class="{active:isActive}" v-on:click="isActive=!isActive">
          <span></span>
        </div>
      </div>
      <transition name="van-slide-down">
        <div class="slideNav" v-if="isActive">
          <ul class="ab fix">
            <li>
              <router-link to="/BrandList-1">
                <img src="../../../../../assets/image/nav05.png" />
                <span>品牌馆</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Design">
                <img src="../../../../../assets/image/nav04.png" />
                <span>优秀设计</span>
              </router-link>
            </li>
            <li>
              <router-link to="/GlobalStore">
                <img src="../../../../../assets/image/nav03.png" />
                <span>全球门店</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Investment">
                <img src="../../../../../assets/image/nav02.png" />
                <span>招商加盟</span>
              </router-link>
            </li>
            <li>
              <p @click="goPage('https://www.tona.com/Index/lists/catid/1.html')">
                <img src="../../../../../assets/image/nav01.png">
                <span>关于我们</span>
              </p>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <index-banner :banners="banners"></index-banner>
    <div class="d-tape wrap fix">
      <div class="register-brand ab">
        报备品牌
        <span>TONA卫浴</span>
      </div>
    </div>
    <div class="d-information wrap fix">
      <div class="tape-list fix">
        <div class="title-t">
          <h2>
            <span>设计师信息</span>
          </h2>
        </div>
        <div class="information-list">
          <van-field v-model="params.designer_name" type="name" placeholder="请输入姓名">
            <template #label>
              <span>
                <em>*</em>姓名
              </span>
            </template>
          </van-field>
          <van-field v-model="params.designer_phone" type="tel" placeholder="请填写手机号">
            <template #label>
              <span>
                <em>*</em>手机号
              </span>
            </template>
          </van-field>
          <van-field v-model="params.code" type="number" placeholder="请输入短信验证码">
            <template #label>
              <span>
                <em>*</em>验证码
              </span>
            </template>
            <template #button>
              <van-button size="small" type="primary">获取验证码</van-button>
            </template>
          </van-field>
          <van-field
            v-model="params.designer_region"
            right-icon="arrow-down"
            @click="showDesign = true"
            placeholder="请选择地区"
          >
            <template #label>
              <span>
                <em>*</em>地区
              </span>
            </template>
          </van-field>
        </div>
      </div>

      <div class="tape-list fix">
        <div class="title-t">
          <h2>
            <span>业主信息</span>
          </h2>
        </div>
        <div class="information-list">
          <van-field v-model="params.yezhu_name" type="name" placeholder="请输入姓名">
            <template #label>
              <span>
                <em>*</em>姓名
              </span>
            </template>
          </van-field>
          <van-field v-model="params.yezhu_phone" type="tel" placeholder="请填写手机号">
            <template #label>
              <span>
                <em>*</em>手机号
              </span>
            </template>
          </van-field>
          <van-checkbox
            v-model="params.yezhu_hide"
            shape="square"
            checked-color="#f4523b"
          >不允许商家私下联系业主</van-checkbox>
          <van-field
            v-model="params.yezhu_region"
            right-icon="arrow-down"
            @click="showOwner = true"
            placeholder="请选择地区"
          >
            <template #label>
              <span>
                <em>*</em>地区
              </span>
            </template>
          </van-field>
          <van-field
            readonly
            clickable
            name="datetimePicker"
            v-model="params.appointment_arrival_date"
            placeholder="请选择日期"
            @click="showPicker = true"
          >
            <template #label>
              <span>
                <em>*</em>预计到店
              </span>
            </template>
            <template #right-icon>
              <i class="iconfont">&#xe64d;</i>
            </template>
          </van-field>
          <van-field v-model="params.yezhu_address" type="name" placeholder="可填写业主详细位置，最多200字">
            <template #label>
              <span>
                <em>*</em>详细地址
              </span>
            </template>
          </van-field>
          <van-field v-model="attachment" type="name" placeholder="选择方案附件PDF">
            <template #label>
              <span>
                <em>*</em>上传附件
              </span>
            </template>
            <template #button>
              <van-button size="small" type="primary">上传附件</van-button>
            </template>
          </van-field>
          <div class="upload ab fix">
            <h2>上传图片</h2>
            <van-uploader v-model="fileList" :max-count="1" upload-icon="plus" upload-text="添加图片" />
          </div>
          <van-field
            class="t-remark"
            v-model="params.note"
            type="textarea"
            placeholder="可填写业主商品需求、户型及方案描述等，最多200字（选填）"
          >
            <template #label>
              <span>备注</span>
            </template>
          </van-field>
        </div>
      </div>

      <van-button type="primary" block color="#323232" @click="tapeCommit">立即提交</van-button>
    </div>
    <!--地址区域开始-->
    <van-popup v-model="showDesign" position="bottom" :style="{ height: '30%' }">
      <van-area
        :area-list="areaList"
        :columns-num="2"
        title="地址"
        @confirm="onConfirmDesign"
        @cancel="showDesign = false"
      />
    </van-popup>
    <van-popup v-model="showOwner" position="bottom" :style="{ height: '30%' }">
      <van-area
        :area-list="areaList"
        :columns-num="2"
        title="地址"
        @confirm="onConfirmOwner"
        @cancel="showOwner = false"
      />
    </van-popup>
    <!--地址区域结束-->
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker type="date" @confirm="onConfirmDate" @cancel="showPicker = false" />
    </van-popup>

    <div class="toast" v-show="toastShow">
      <i class="van-icon van-icon-checked"></i>
      <h2>{{toastText}}</h2>
      <p>{{toastState}}</p>
    </div>
    <van-overlay :show="toastShow" @click="toastShow = false" />
  </div>
</template>

<script>
import IndexBanner from "../../../IndexBanner.vue";
import areaList from "@/json/area";
import { Toast } from "vant";
import axios from "@/utils/request";
import StoreApi from "@/api/HomeStoreApi";

export default {
  components: { IndexBanner },
  name: "Tape",
  created() {
    this.store_id = this.$route.query.store_id;
    this.getBanners();
  },
  data() {
    return {
      isActive: false,
      store_id: "",
      params: {
        code: "",
        designer_name: "",
        designer_phone: "",
        note: "",
        yezhu_region: "",
        yezhu_address: "",
        appointment_arrival_date: "",
        yezhu_hide: false,
        yezhu_name: "",
        yezhu_phone: ""
      },

      showDesign: false,
      showOwner: false,
      areaList: areaList,
      checked: true,
      showPicker: false,
      fileList: [],
      attachment: "",
      toastShow: false,
      toastText: "已提交",
      toastState: "带单信息提交成功，请耐心等待",
      banners: []
    };
  },
  methods: {
    onConfirmDesign(values) {
      this.params.designer_region = values.map(item => item.name).join("/");
      this.showDesign = false;
    },
    onConfirmOwner(values) {
      this.params.yezhu_region = values.map(item => item.name).join("/");
      this.showOwner = false;
    },
    onConfirmDate(time) {
      this.params.appointment_arrival_date = time.toLocaleDateString();
      this.showPicker = false;
    },
    tapeCommit() {
      this.params.store_id = this.store_id;
      console.log(this.params);
      StoreApi.bao_bei(this.params).then(res => {
        console.log(res);
        this.toastShow = true;
      });
    },
    getBanners() {
      axios.post("/api/Index/getAppadList/ap_id/", { ap_id: 11 }).then(res => {
        this.banners = res.result.ad_list;
      });
    },
    goPage (url) {
      window.location.href = url
    }
  }
};
</script>

<style lang="scss" scoped>
.register-brand {
  background-color: #eee;
  padding: 12px 15px;
  height: 50px;
  margin-bottom: 12px;
  align-items: center;
  font-size: 15px;
  color: #323232;
  span {
    padding-left: 16px;
  }
}
.upload {
  padding-top: 6px;
  h2 {
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    width: 78px;
    padding-right: 12px;
    text-align: right;
    padding-top: 12px;
  }
  p {
    color: #888;
    line-height: 1.6;
  }
  .van-uploader__upload {
    border-radius: 4px;
  }
}
.toast {
  i {
    font-size: 32px;
    color: #f2f2f2;
  }
  h2 {
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  position: fixed;
  z-index: 2000;
  left: 50%;
  top: 50%;
  color: #fff;
  transition: all 0.5s;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  border-radius: 4px;
  color: #fff;
  background-color: #2f2f2f;
  min-height: 88px;
  width: 60%;
  padding: 16px;
}
</style>
