<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">招商加盟</div>
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
              <router-link to="/index">
                <img src="../../../assets/image/nav01.png">
                <span>关于我们</span>
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="apply fix" v-html="article.article_content">

    </div>

    <div class="apply-btn wrap fix">
      <div class="btn" @click="showPopup">TONA HOME 招商申请</div>
      <van-popup v-model="showForm" closeable position="bottom" :style="{ height: '50%' }">
        <div class="apply-tel fix">
          <h2>TONA HOME招商申请</h2>
          <p>你还可拨打电话咨询 400-000-0267</p>
          <div class="message">
            <van-field v-model="company" placeholder="请输入您所在企业名称" />
            <van-field center v-model="phone" clearable placeholder="请输入您的联系方式">
              <template #button>
                <van-button
                  size="small"
                  type="primary"
                  :disabled="disabled"
                  @click="sendSms"
                >{{smsBtn}}</van-button>
              </template>
            </van-field>
            <van-field v-model="code" value placeholder="请输入验证码" />
            <div class="apply-submit">
              <van-button
                round
                block
                type="info"
                native-type="submit"
                @click="successPop($event)"
              >立即申请</van-button>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import ArticleApi from '@/api/ArticleApi';
import InvestmentApi from "@/api/InvestmentApi";
export default {
  name: "Investment",
  data() {
    return {
      isActive: false,
      showForm: false,
      company: "",
      code: "",
      value: "",
      phone: "",
      disabled: false,
      smsBtn: "获取验证码",
      article:{}
    };
  },
  created(){
    this.getPage();
  },

  methods: {
    getPage(){
      ArticleApi.articleShow({article_id:53}).then(res=>{
        console.log(res)
        this.article = res.result;
      });
    },
    showPopup() {
      this.showForm = true;
    },
    successPop(event) {
      event.preventDefault();
      if (!this.company) {
        Toast.fail("请输入企业名称");
        return;
      }
      if (!this.phone) {
        Toast.fail("请输入手机号");
        return;
      }
      if (!this.code) {
        Toast.fail("请输入验证码");
        return;
      }
      let params = {
        qy_name: this.company,
        phone: this.phone,
        captcha: this.code,
        type_id: 3
      };
      InvestmentApi.submit(params).then(res => {
        Toast.success("申请成功");
        this.showForm = false;
      });
    },
    sendSms() {
      var count = 60;
      var that = this;
      if (!this.phone) {
        Toast.fail("请输入手机号");
        return;
      }
      InvestmentApi.sendSms({ phone: this.phone, type: 8 }).then(res => {
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
      });
    },
    next() {}
  }
};
</script>

<style lang="scss" scoped>
.apply-btn {
  margin: 40px 0 12px 0;
  width: 100%;
  .btn {
    background-color: #323232;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    padding: 12px 16px;
    border-radius:6px;
  }
  .van-popup {
    background-color: #f6f6f6;
    .apply-tel {
      color: #323232;
      text-align: center;
      padding: 24px 15px 0 15px;
      h2 {
        font-size: 16px;
        font-weight: bold;
        padding-bottom: 4px;
      }
      p {
        font-size: 14px;
      }
      .message {
        margin-top: 16px;
        .van-cell {
          border: solid 1px #eee;
          margin-bottom: 12px;
          padding: 8px 16px;
        }
        .apply-submit {
          .van-button {
            background-color: #323232;
            text-align: center;
            font-size: 14px;
            color: #fff;
            border-radius:6px;
            border: inherit;
          }
        }
      }
    }
  }
}
.van-button--primary {
  color: #888;
  background-color: inherit;
  border: inherit;
  font-size: 14px;
}
.apply{
  color:#888;
  padding:12px 15px;
}
</style>
