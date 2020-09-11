<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">全球门店</div>
        <div class="menu-ico" v-bind:class="{active:isActive}" v-on:click="isActive=!isActive">
          <span></span>
        </div>
      </div>
      <transition name="van-slide-down">
        <div class="slideNav" v-if="isActive">
          <ul class="ab fix">
            <li>
              <router-link to="/BrandList-1">
                <img src="../../../assets/image/nav05.png">
                <span>品牌馆</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Design">
                <img src="../../../assets/image/nav04.png">
                <span>优秀设计</span>
              </router-link>
            </li>
            <li>
              <router-link to="/GlobalStore">
                <img src="../../../assets/image/nav03.png">
                <span>全球门店</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Investment">
                <img src="../../../assets/image/nav02.png">
                <span>招商加盟</span>
              </router-link>
            </li>
            <li>
              <p @click="goPage('https://www.tona.com/Index/lists/catid/1.html')">
                <img src="../../../assets/image/nav01.png">
                <span>关于我们</span>
              </p>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="global-title">
      <h2>预约到店</h2>
    </div>
    <div class="global wrap fix">
      <van-cell-group>
        <van-field
          v-model="yuyueParams.mendian_name"
          type="book"
          label="预约门店"
          right-icon="arrow"
          readonly
          :placeholder="yuyueParams.mendian_name"
        />
        <van-field v-model="yuyueParams.name" type="name" label="姓名" placeholder="请输入姓名" />
        <van-field v-model="yuyueParams.phone" type="number" label="手机号码" placeholder="请输入手机号" />
        <van-field
          readonly
          clickable
          name="datetimePicker"
          v-model="yuyueParams.date_time"
          label="预约日期"
          placeholder="请选择日期"
          @click="showPicker = true"
        />

        <van-field v-model="yuyueParams.demand" type="demand" label="商品需求" placeholder="最多输入200字" />
        <van-field
          v-model="yuyueParams.yezhu_name"
          type="ownerName"
          label="业主姓名"
          placeholder="请输入业主姓名"
        />
        <van-field
          v-model="yuyueParams.yezhu_phone"
          type="ownerMobile"
          label="业主手机"
          placeholder="请输入业主手机"
        />
        <van-field
          v-model="yuyueParams.yezhu_xiaoqu"
          type="ownerArea"
          label="业主小区"
          placeholder="请输入业主小区"
        />
        <van-field
          v-model="yuyueParams.huxing_fan"
          type="ownerCase"
          label="户型&方案"
          placeholder="请输入户型或方案链接"
        />

        <div class="upload-2 ab fix upload">
          <h2>户型&方案</h2>
          <van-uploader v-model="fileList" :max-count="1" :after-read="afterRead" upload-icon="plus"/>
          <p>
            商品图片尺寸建议800*800；
            <br />上传不大于5MB；
            <br />尺寸不超过5000*5000；
            <br />尺寸不小于300*300；
          </p>
        </div>
        <div class="make-btn ab">
          <van-button color="#888" plain>取消</van-button>
          <van-button color="#323232" @click="confirmSubmit">确定</van-button>
        </div>
      </van-cell-group>
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="date"
          v-model="currentDate"
          @confirm="confirmDate"
          @cancel="showPicker = false"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import GlobalStoreApi from "@/api/GlobalStoreApi";
export default {
  name: "MakeStore",
  data() {
    return {
      isActive: false,
      yuyueParams: {
        mendian_id: "",
        mendian_name: "",
        name: "",
        phone: "",
        date_time: "",
        xuqiu: "",
        yezhu_name: "",
        yezhu_phone: "",
        yezhu_xiaoqu: "",
        huxing_fan: "",
        huxing_fan_image: ""
      },
      showPicker: false,
      currentDate: new Date(),
      value: "",
      fileList: [],
      activeName: "",
      mendian_id: ""
    };
  },
  created() {
    this.yuyueParams.mendian_id = this.$route.query.mendian_id;
    this.yuyueParams.mendian_name = this.$route.query.mendian_name;
  },
  methods: {
    confirmDate(time) {
      this.showPicker = false;
      this.yuyueParams.date_time = this.$moment(time).format("YYYY-MM-DD");
    },
    afterRead(file) {
      console.log(file);
      let formData = new FormData();
      formData.append("file", file.file);
      GlobalStoreApi.upload(formData).then(res => {
        console.log(res);
      });
    },
    confirmSubmit() {
      if (this.fileList.length > 0) {
        this.yuyueParams.huxing_fan_image = this.fileList[0].url;
      }
      console.log(this.yuyueParams);
      GlobalStoreApi.yuyue(this.yuyueParams).then(res => {
        console.log(res);
        Toast.success("提交成功");
      });
    },
    goPage (url) {
      window.location.href = url
    }
  }
};
</script>

<style lang="scss" scoped>
.global-title {
  width: 100%;
  position: relative;
  text-align: center;
  h2 {
    font-size: 16px;
    color: #323232;
    font-weight: bold;
    padding: 16px 15px;
    border-bottom: solid 2px #eee;
  }
}
.upload {
  padding-top: 6px;
  h2 {
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    width: 86px;
    padding-right: 12px;
    text-align: right;
    padding-top: 12px;
  }
  p {
    color: #888;
    padding-top:5px;
    font-size:12px;
  }
}
.make-btn {
  justify-content: space-between;
  margin-top: 12px;
  .van-button {
    width: 47%;
    border-radius:6px;
  }
  .van-button:nth-child(1) {
    margin-right: 6%;
  }
}

</style>
