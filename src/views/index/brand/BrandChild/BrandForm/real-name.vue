<template>
    <div class="container">
      <div class="head fix">
        <div class="wrap fix">
          <div class="head-ss fix">
            <van-icon name="arrow-left" @click="$router.go(-1)"/>
          </div>
          <div class="head-logo">
            签约品牌
          </div>
          <div class="menu-ico" v-bind:class="{active:isActive}" v-on:click="isActive=!isActive">
            <span></span>
          </div>
        </div>
        <transition name="van-slide-down">
          <div class="slideNav" v-if="isActive">
            <ul class="ab fix">
              <li>
                <router-link to="/BrandList-1">
                  <img src="../../../../../assets/image/nav05.png">
                  <span>品牌馆</span>
                </router-link>
              </li>
              <li>
                <router-link to="/Design">
                  <img src="../../../../../assets/image/nav04.png">
                  <span>优秀设计</span>
                </router-link>
              </li>
              <li>
                <router-link to="/GlobalStore">
                  <img src="../../../../../assets/image/nav03.png">
                  <span>全球门店</span>
                </router-link>
              </li>
              <li>
                <router-link to="/Investment">
                  <img src="../../../../../assets/image/nav02.png">
                  <span>招商加盟</span>
                </router-link>
              </li>
              <li>
                <router-link to="/index">
                  <img src="../../../../../assets/image/nav01.png">
                  <span>关于我们</span>
                </router-link>
              </li>
            </ul>
          </div>
        </transition>
      </div>
      <div class="sign-step fix">
        <div class="step-item">
          <div class="item-line l">
          </div>
          <div class="item-num l">
            1
          </div>
          <div class="item-title l">
            填写个人信息
          </div>

        </div>
        <div class="step-item active">
          <div class="item-line l">
          </div>
          <div class="item-num l">
            2
          </div>
          <div class="item-title l">
            实名认证
          </div>

        </div>
      </div>
      <div class="d-information wrap fix">
        <div class="information-list">
          <van-field
            v-model="real_name"
            type="name"
            placeholder="请输入真实姓名">
            <template #label>
              <span><em>*</em>真实姓名</span>
            </template>
          </van-field>
          <van-field
            v-model="real_id"
            type="tel"
            placeholder="请输入身份证号码">
            <template #label>
              <span><em>*</em>身份证号</span>
            </template>
          </van-field>

          <div class="person-id">
            <div class="id-list ab">
              <h2><em>*</em>证件正面</h2>
              <div class="id-item ab">
                <van-uploader v-model="positiveList" :max-count="1"/>
                <h3 is-link @click="showPositive">查看规则</h3>
              </div>
            </div>
            <div class="id-list ab">
              <h2><em>*</em>证件反面</h2>
              <div class="id-item ab">
                <van-uploader  v-model="negativeList" :max-count="1"/>
                <h3 is-link @click="showNegative">查看规则</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="person-btn ab">
          <van-button square type="primary" color="#eee">取消</van-button>
          <van-button square type="primary" color="#323232" @click="tapeCommit">提交审核</van-button>
        </div>

        <van-popup v-model="showPro" class="pro-demand">
          <h2>身份证正面上传要求</h2>
          <p>1、该信息仅用于管理员审核之用，身份信息将完全保密<br>
            2、请上传彩色二代身份证<br>
            3、要求姓名、证件号码、脸部、地址都清晰可见<br>
            4、支持JPG，PNG，BMP，GIF格式<br>
            5、文件须小于5M</p>
        </van-popup>
        <van-popup v-model="showCon" class="con-demand">
          <h2>身份证反面上传要求</h2>
          <p>1、该信息仅用于管理员审核之用，身份信息将完全保密<br>
            2、必须看清证件信息，且证件信息不能被遮挡<br>
            3、支持JPG，PNG，BMP，GIF格式<br>
            4、文件须小于5M</p>
        </van-popup>
        <!--提交审核-->
        <div class="toast" v-show="toastShow">
          <i class="van-icon van-icon-checked"></i>
          <h2>{{toastText}}</h2>
          <p>{{toastState}}</p>
        </div>
        <van-overlay :show="toastShow" @click="toastShow = false" />
      </div>
    </div>
</template>

<script>
  export default {
    name: "real-name",
    data(){
      return{
        isActive:false,
        real_name:'',
        real_id:'',
        positiveList: [],
        negativeList: [],
        showPro:false,
        showCon:false,
        toastShow:false,
        toastText: '已提交',
        toastState:'审核需要5个工作日，请耐心等待'
      }
    },
    methods:{
      tapeCommit(){
        this.toastShow = true;
      },
      showPositive() {
        this.showPro = true;
      },
      showNegative() {
        this.showCon = true;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .sign-step{
    width:86%;margin:12px auto;padding-top:20px;
    .step-item{
      float:left;
      .item-num{width:24px;height:24px;background-color:#b7b7b7;text-align:center;line-height:24px;color:#fff;
        font-size:16px;font-weight:bold;border-radius:50%;margin-right:6px;margin-top: 1px;
      }
      .item-title{font-size:16px;color:#b7b7b7;}
      .item-line{width:40px;height:1px;background-color:#b7b7b7;margin:12px 12px 0 12px;}
    }
    .step-item:first-child{
      .item-line{width:0;margin:0;}
    }
  }
  .sign-step .active  .item-num{background-color:#000;}
  .sign-step .active  .item-title{color:#000;}
  .sign-step .active  .item-line{background-color:#000;}
  .information-list{padding:0 15px 0 0;}
  .person-id{
    .id-list{
      padding:6px 0;
      h2{
        font-size:14px;color:#323232;width:78px;text-align:right;padding-right:12px;
        em{color:#f4523b;padding-right:2px;}
      }
      .id-item{
        align-items:center;
        h3{padding-left:12px;color:#388ceb;font-size:14px;}
      }
    }
  }
  .person-btn{
    margin:20px 0;
    .van-button{width:50%;justify-content:space-between;}
    .van-button:nth-child(1){
      .van-button__text{color:#b7b7b7;}
    }
  }
  .toast {
    i{font-size:32px;color:#f2f2f2;}
    h2{font-size:14px;}
    p{font-size:13px;}
    position: fixed;
    z-index: 2000;
    left: 50%;
    top:50%;
    color:#fff;
    transition:all .5s;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    border-radius:4px;
    color:#FFF;
    background-color:#2f2f2f;
    min-height:88px;
    width:60%;
    padding:16px;

  }

  .pro-demand,.con-demand{
    padding:15px 15px;width:88%;border-radius:5px;
    h2{text-align:center;font-size:15px;color:#323232;padding-bottom:6px;}
    p{font-size:13px;color:#b7b7b7;}
  }
</style>
