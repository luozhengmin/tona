<template>
    <div class="container">
      <div class="head fix">
        <div class="wrap fix">
          <div class="head-ss fix">
            <van-icon name="arrow-left" @click="$router.go(-1)"/>
          </div>
          <div class="head-logo">
            认证资料
          </div>
        </div>
      </div>
      <div class="identify-title">
        认证资料越完整，诚信口碑越高，更吸引客户，成单率越高。
      </div>
      <div class="identify-list">
        <div class="no-identify ab">
          <h3>认证状态</h3>
          <van-button round>未认证</van-button>
        </div>

        <div class="list-item">
          <van-field
            v-model="real_name"
            type="name"
            placeholder="请输入真实姓名">
            <template #label>
              <span>真实姓名<em>*</em></span>
            </template>
          </van-field>
          <van-field
            v-model="real_id"
            type="tel"
            placeholder="请输入身份证号码">
            <template #label>
              <span>身份证号码<em>*</em></span>
            </template>
          </van-field>

          <div class="identify-id">
            <div class="id-list">
              <h2>身份证正面<em>*</em></h2>
              <div class="id-item">
                <van-uploader v-model="positiveList" :max-count="1"/>
                <h3 is-link @click="showPositive">查看规则</h3>
              </div>
            </div>
            <div class="id-list">
              <h2>身份证反面<em>*</em></h2>
              <div class="id-item">
                <van-uploader  v-model="negativeList" :max-count="1"/>
                <h3 is-link @click="showNegative">查看规则</h3>
              </div>
            </div>

            <div class="id-list">
              <h2>职业身份证明<em>*</em></h2>
              <div class="id-item">
                <van-uploader v-model="vocationList" :max-count="1"/>
                <h3 is-link @click="showVocation">查看规则</h3>
              </div>
            </div>
            <div class="id-list">
              <h2>专业资质证书<em>*</em></h2>
              <div class="id-item">
                <van-uploader  v-model="honorList" :max-count="1"/>
                <h3 is-link @click="showHonor">查看规则</h3>
              </div>
            </div>

          </div>
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
        <van-popup v-model="showVoc" class="voc-demand">
          <h2>职业身份证明上传要求</h2>
          <p>1、提供如公司名片、在职证明、等职业身份证明<br>
            2、该信息仅用于管理员审核之用，身份信息将完全保密<br>
            3、支持JPG，PNG，BMP，GIF格式<br>
            4、文件须小于5M</p>
        </van-popup>
        <van-popup v-model="showHon" class="hon-demand">
          <h2>专业资质证书</h2>
          <p>1、提供如二级建造师证，国内设计大赛入围等证书，可获得成长值<br>
            2、最多可上传 5 张图<br>
            3、该信息仅用于设计师成长体系中证书任务审核之用<br>
            4、必须看清证件信息，且证件信息不能被遮挡<br>
            5、支持JPG，PNG，BMP，GIF格式<br>
            6、文件须小于5M</p>
        </van-popup>
        <!--提交审核-->
        <div class="toast" v-show="toastShow">
          <i class="van-icon van-icon-checked"></i>
          <h2>{{toastText}}</h2>
          <p>{{toastState}}</p>
        </div>
        <van-overlay :show="toastShow" @click="toastShow = false" />

      </div>
      <div class="person-btn ab">
        <van-button square type="primary" color="#323232" @click="tapeCommit">提交审核</van-button>
        <van-button square type="primary" color="#eee">取消</van-button>

      </div>
    </div>
</template>

<script>
  export default {
    name: "identify",
    data(){
      return{
        real_name:'',
        real_id:'',
        positiveList: [],
        negativeList: [],
        vocationList: [],
        honorList: [],
        showPro:false,
        showCon:false,
        showVoc:false,
        showHon:false,
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
      showVocation() {
        this.showVoc = true;
      },
      showHonor() {
        this.showHon = true;
      },
    }
  }
</script>

<style lang="scss" scoped>
.container{
  .identify-title{
    font-size:14px;color:#888;padding:12px 15px;background-color:#f7f7f7;
  }
  .identify-list{
    padding:12px 15px;
    .no-identify{
      align-items:center;
      h3{font-size:15px;color:#2f2f2f;width:95px;}
      .van-button{height:30px;font-size:13px;line-height:28px;background-color:#eee;color:#888;}
    }
  }
}
.information-list{padding:0 15px 0 0;}
.identify-id{
  .id-list{
    padding:6px 0;
    h2{
      font-size:15px;color:#323232;width:100px;margin-bottom:12px;
      em{color:#f4523b;padding-right:2px;}
    }
    .id-item{
      h3{color:#388ceb;font-size:14px;text-align:center;}
    }
  }
}
.person-btn{
  margin:20px 0;
  .van-button{width:50%;justify-content:space-between;}
  .van-button:nth-child(2){
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

.pro-demand,.con-demand,.voc-demand,.hon-demand{
  padding:15px 15px;width:88%;border-radius:5px;
  h2{text-align:center;font-size:15px;color:#323232;padding-bottom:6px;}
  p{font-size:13px;color:#b7b7b7;}
}
</style>
