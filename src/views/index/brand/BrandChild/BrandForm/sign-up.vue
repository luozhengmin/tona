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
        <div class="step-item" @click="curId=0" :class="{'active':curId===0}">
          <div class="item-line l">
          </div>
          <div class="item-num l">
            1
          </div>
          <div class="item-title l">
            填写个人信息
          </div>

        </div>
        <div class="step-item" @click="curId=1" :class="{'active':curId===1}">
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
      <div class="d-information wrap fix" v-show="curId===0">
        <div class="information-list sign-list">
          <van-field
            v-model="sign_name"
            type="name"
            placeholder="请输入姓名">
            <template #label>
              <span><em>*</em>姓名</span>
            </template>
          </van-field>
          <van-field
            v-model="sign_tel"
            type="tel"
            placeholder="请填写手机号">
            <template #label>
              <span><em>*</em>手机号</span>
            </template>
          </van-field>
          <van-field
            v-model="sign_code"
            type="number"
            placeholder="请输入短信验证码">
            <template #label>
              <span><em>*</em>验证码</span>
            </template>
            <template #button>
              <van-button size="small" type="primary"
                          :disabled="disabled"
                          @click="sendSms">{{smsBtn}}</van-button>
            </template>
          </van-field>
          <van-field
            v-model="chat_on"
            type="name"
            placeholder="请填写微信号">
            <template #label>
              <span>微信</span>
            </template>
          </van-field>
          <van-field
            name="degign_area"
            :value="design_area"
            right-icon="arrow-down"
            @click="showDesign = true"
            placeholder="请选择地区">
            <template #label>
              <span><em>*</em>地区</span>
            </template>
          </van-field>
          <van-checkbox v-model="checked" shape="square" checked-color="#f4523b">
            <span is-link @click="showPopup">我已阅读并接受《设计师加盟保证与声明》</span>
          </van-checkbox>
        </div>

        <van-button type="primary" block color="#323232" @click="next">下一步</van-button>
      </div>
      <div class="d-information wrap fix" v-show="curId===1">
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
        <van-popup v-model="showPro" class="con-demand">
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
      <!--地址区域开始-->
      <van-popup
        v-model="showDesign"
        position="bottom"
        :style="{ height: '30%'}">
        <van-area :area-list="areaList" :columns-num="2" title="地址" @confirm="onConfirmDesign" @cancel="showDesign = false" />
      </van-popup>

      <van-popup v-model="showDeclare" class="declare-con">
        <div class="wrap">
          <h2>设计师用户声明</h2>
          <p>欢迎您使用TONA HOME到店购服务。</p>

          <p>如果您需要使用TONA HOME到店购服务，请您务必仔细阅读并充分理解本声明，特别是其中所涉及的免除或限制TONA HOME
            责任的条款、排除或限制用户权利的条款、约定司法管辖条款等，这些条款我们通常会以黑体加粗等方式提示您注意。</p>

          <p style="font-weight:bold;">如果您对声明中的任何条款持有异议，您也可以选择停止使用TONA HOME 到店购服务，因为，一旦使用TONA HOME 到店购服务，
            您的行为将被视为对本声明全部内容的认可与完全接受。</p>

          <p style="font-weight:bold;">如果您未满18周岁，请在监护人的陪同下阅读本声明，并特别注意未成年人使用条款。</p>

          <p>1.  关于到店购平台结算方式说明</p>

          <p style="text-indent:2em;">1.1  到店购为商家用户与设计师用户提供平台，撮合双方建立合作并促使设计师用户为商家用户带单，由商家用户向设计师用户支付佣金。

          <p style="text-indent:2em;">1.2  结算模式根据商家用户选择分为两种，一种为平台结算：即现有结算方式不变，支持商家用户与平台结算后，由平台向设计师用户支付佣金；另一种为非平台结算：商家用户自行负责与设计师用户的线下结算，双方不再通过平台完成佣金的结算。

          <p style="text-indent:2em;">1.3  根据商家用户对不同结算方式的选择，平台将会通过明显的标志对商家用户进行区分认证，设计师用户请务必仔细查看商家用户标签说明、结算说明等，以便仔细确认商家用户结算模式、佣金比例、结算时间等重要信息。

          <p>2.  平台责任说明

          <p style="text-indent:2em;font-weight:bold;">2.1  设计师用户若选择平台结算的品牌，平台承担现有责任与义务不变。

          <p style="text-indent:2em;font-weight:bold;">2.2  设计师用户若选择非平台结算的品牌，到店购平台仅为设计师用户与商家用户之间提供撮合服务而不对双方交易合作本身提
          供担保，自设计师用               户选择为非平台结算的商家用户提供带单服务，设计师用户与商家用户自行协商对账、结算、
          返佣等各项事宜，设计师用户与商家用户在平台外的交易合作属于个人行为，由此产生的一切法律责任和经济责任酷家乐均不承担。</p>

          <p style="text-indent:2em;">2.3  对于在线上报备、核销的设计师用户，设计师用户报备审核通过且带单成功后，若商家用户拒绝支付佣金且协商未果的情况
          下，设计师用户有权向酷家乐平台发起针对商家用户的投诉，平台将投诉发送至商家用户，若24小时内，商家用户仍未与设计师
            用户联系或者联系后双方协商未果，则由平台介入调解，设计师用户有义务向平台提供与事件相关的证据资料，如经平台判断
            后投诉成立，平台将会根据投诉严重性给予商家用户不同程度的惩罚措施，如因设计师用户提交虚假资料造成平台判断错误并
            对平台造成损害，所有责任由设计师用户承担。</p>

          <p style="text-indent:2em;font-weight:bold;">2.4  若设计师用户与商家用户进行纯线下交易合作，所有的报备、核销、结算均不通过平台，因平台不存在任何数据，如设计师
            用户与商家用户产生纠纷，平台不介入且不承担任何责任。</p>

          <p>3.  本声明长期有效，本声明与《TONA HOME 用户协议》、《知识产权条款》、《隐私条款》等构成不可分割的主体，本声明未
            尽事项，设计师用户应当遵守用户服务协议及相关协议、业务规则的约定。</p>

          <p>4.  为了更好地服务设计师用户，规范交易秩序，TONA HOME 有权根据需要制定、不定时的更新声明，并以网站公告、通知、
            站内信、电子文件、帮助中心文等多种形式发布与体现，设计师用户为保护自身权益，应当及时阅读、了解并遵守业务规则。</p>

          <p>5.   本声明自发布日起生效。</p>

          <p>2020年01月01日</p>
          <van-button type="primary" block color="#323232" @click="closeDeclare">关闭</van-button>
        </div>
      </van-popup>
    </div>
</template>

<script>
  import areaList from "@/json/area";
  export default {
    name: "sign-up",
    data(){
      return{
        curId:0,

        isActive: false,
        sign_name:'',
        sign_tel:'',
        sign_code:'',
        design_area:'',
        chat_on:'',
        showDesign: false,
        areaList: areaList,
        checked: true,
        showDeclare: false,

        real_name:'',
        real_id:'',
        positiveList: [],
        negativeList: [],
        showPro:false,
        toastShow:false,
        toastText: '已提交',
        toastState:'审核需要5个工作日，请耐心等待',

        disabled: false,
        smsBtn: "获取验证码"
      }
    },
    methods: {
      onConfirmDesign(values) {
        this.design_area = values.map(item => item.name).join('/');
        this.showDesign = false;
      },
      showPopup() {
        this.showDeclare = true;
      },
      closeDeclare() {
        this.showDeclare = false;
      },

      tapeCommit(){
        this.toastShow = true;
      },
      showPositive() {
        this.showPro = true;
      },
      showNegative() {
        this.showPro = true;
      },
      next() {
        if (this.curId++ > 0) this.curId = 0;
      },

      sendSms() {
        var count = 60;
        var that = this;
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
      },

    }
  }
</script>

<style lang="scss" scoped>
  .sign-step{
    width:86%;margin:12px auto;padding-top: 20px;
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
  .d-information > .van-button{margin-top:40px;}
  .declare-con{
    width:100%;background-color:#fff;height:100%;
    .wrap{
      color:#323232;
      h2{text-align:center;margin:12px 0;}
      p{padding:6px 0;text-align:justify;}
      .van-button{margin:20px 0;}
    }
  }
  /*实名认证*/
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
