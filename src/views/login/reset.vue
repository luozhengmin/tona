<template>
  <div>
    <div class="common-login">
      <van-nav-bar
        left-arrow
        @click-left="$router.go(-1)"
      >
        <template #title>
          <img src="../../assets/image/dllogo.png"/>
        </template>
      </van-nav-bar>
    </div>
    <div class="wrap">
      <div class="login-box">
        <div class="title">
          <h1>重置密码</h1>
        </div>
        <div class="form">
          <van-field placeholder="请输入手机号" v-model="phone">
            <template #label>
              <span>
                中国 +86
                <i style="margin-left: 8px;color: #888;">|</i>
              </span>
            </template>
          </van-field>
          <van-field placeholder="请输入6位验证码" v-model="code">
            <template #button>
              <van-button size="small" @click="sendVerifyCodeMobile">{{sendStateTextMobile}}</van-button>
            </template>
          </van-field>
          <van-field type="password" placeholder="设置8-20位（数字+字符）密码" v-model="password"/>
          <van-field type="password" placeholder="请再次输入密码" v-model="confirmPassword"/>
          <div class="btn">
            <van-button color="#1b1b1b" block @click="toForget()">确定</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from "@/utils/request"
  import { yzmlogin } from '../../api/memberLogin'
  import { setMemberPassword } from '../../api/memberInfo'
  import { getSmsCaptcha,checkCaptcha } from '../../api/common'
  import { Toast } from 'vant'
  export default {
    name:'Register',
    data(){
      return{
        phone: '',
        code: '',
        captcha: '',
        password: '',
        confirmPassword: '',
        canSendMobile: true,
        timeIntervalMobile: false,
        sendStateTextMobile: '获取验证码'
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        $cookies.set('referrer', encodeURIComponent(from.fullPath), 1 / 24)
      })
    },
    methods:{
      onLogin() {
        this.$router.push({ name: 'Login' })
      },
      toForget() {
        if(!this.check()){
          return
        }

        // 重置密码
        setMemberPassword(this.phone,this.code,this.password).then(
           response => {
            console.log(response)
            Toast.fail(response.message)
           },
           error => {
             Toast.fail(error.message)
           }
         )
      },
      sendVerifyCodeMobile () {
        if (!this.phone) {
          Toast.fail('请先输入手机号')
          return
        }
        if (!this.canSendMobile) {
          return
        }
        getSmsCaptcha(3, this.phone).then(res => {
          if(res.code == 10001){
            Toast(res.message)
            return ;
          }
          Toast.success(res.message)
          this.canSendMobile = false
          let second = 60
          let _this = this
          this.timeIntervalMobile = setInterval(function () {
            if (second <= 0) {
              _this.canSendMobile = true
              _this.sendStateTextMobile = '获取验证码'
              clearInterval(_this.timeIntervalMobile)
            } else {
              _this.sendStateTextMobile = second + 's'
            }
            second--
          }, 1000)
        }).catch(function (error) {
          Toast.fail(error.message)
        })
      },
      check () {
        let phone = this.phone
        let code = this.code
        let password = this.password
        let confirmPassword = this.confirmPassword
        if (phone.length === 0) {
          Toast('请输入手机号')
          return false
        }
        if (code.length === 0) {
          Toast('请输入验证码')
          return false
        }
        if (code.length !== 6) {
          Toast('请输入6位验证码')
          return false
        }
        if (password.length === 0) {
          Toast('请输入密码')
          return false
        }
        if (password.length < 6 || password.length > 20) {
          Toast('请输入6-20个字符的密码')
          return false
        }
        if (confirmPassword.length === 0) {
          Toast('请输入确认密码')
          return false
        }
        if (password.length !== confirmPassword.length) {
          Toast('确认密码与输入密码不一致')
          return false
        }
        if (password !== confirmPassword) {
          Toast('确认密码与输入密码不一致')
          return false
        }
        return true
      },
      doJump(){
        let referrer = this.utils.getCookie('referrer')
        if (referrer) { // 返回之前的页面

        } else {
          this.$router.push({'name': 'person'})
        }
      },
      onSubmit () {
        this.toForget()
      },
    },

  };
</script>

<style scoped>
  .login-box {
    margin-top:80px;
  }
  .login-box .title {
    padding: 0 20px;
  }
  .login-box .title h1 {
    color: #1b1b1b;
    font-size:17px;
    margin-bottom:4px;
  }
  .login-box .title .tips {
    font-size: 14px;
    color: #888;
  }
  .login-box .form {
    margin-top:20px;
  }
  .login-box .form button {
    border: 0;
    color: #1784f6;
    font-size: 14px;
  }
  .login-box .btn {
    margin-top: 30px;
    padding: 0 20px;
  }
  .login-box .btn .van-button {
    border-radius: 5px;
  }
  /** 样式重写 **/
  .van-cell {
    line-height:1.8;
    font-size:14px;
    padding:10px 20px;
  }
  .van-cell::after {
    border-bottom: 1px solid #b7b7b7;
    width: calc(100% - 40px);
  }
  .van-cell:not(:last-child)::after{
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: 0;
    bottom: 0;
    left:20px;
    border-bottom: 1px solid #b7b7b7;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
</style>
