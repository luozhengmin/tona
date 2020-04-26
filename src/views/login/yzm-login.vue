<template>
  <div>
    <div class="common-login">
      <van-nav-bar
        right-text="商户版"
        left-arrow
        @click-left="$router.go(-1)"
        @click-right="onLogin">
        <template #title>
          <img src="../../assets/image/dllogo.png"/>
        </template>
      </van-nav-bar>
    </div>
    <div class="wrap">
      <div class="login-box">
        <div class="title">
          <h1>验证码登录</h1>
          <div class="tips">为了您的账号安全，请用手机号登录</div>
        </div>
        <div class="form">
          <van-field placeholder="请输入手机号" v-model="username">
            <template #label>
              <span>
                中国 +86
                <i style="margin-left: 8px;color: #888;">|</i>
              </span>
            </template>
          </van-field>
          <van-field placeholder="请输入验证码" v-model="code">
            <template #button>
              <van-button size="small" @click="sendVerifyCodeMobile">{{sendStateTextMobile}}</van-button>
            </template>
          </van-field>
          <div class="btn">
            <van-button color="#1b1b1b" block v-on:click="onSubmit">登录</van-button>
          </div>
          <div class="other">
            <router-link to="/mima-login">密码登录</router-link>
            <div>
              <router-link to="/register">免费注册</router-link>
            </div>
          </div>
          <div class="third-login">
            <van-divider>第三方登录</van-divider>
            <van-button round block>
              <i class="fa fa-weixin"></i>微信账号登录
            </van-button>
            <van-button round block>
              <i class="fa fa-qq"></i>QQ账号登录
            </van-button>
            <van-button round block>
              <i class="fa fa-weibo"></i>微博账号登录
            </van-button>
          </div>
          <div class="login-tips">
            登录即代表同意
            <router-link to="/protocol">《用户使用协议》</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "@/utils/request"
  import { yzmlogin } from '../../api/memberLogin'
  import { getSmsCaptcha,checkCaptcha } from '../../api/common'
  import { Toast } from 'vant'
  export default {
    name:'Register',
    data(){
      return{
        username: '18356015272',
        code: '',
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
      signIn() {
        if(!this.check()){
          return
        }
        // 验证码登录
        yzmlogin(this.username,this.code).then(
           response => {
            console.log(response)
           },
           error => {
             Toast.fail(error.message)
           }
         )
      },
      sendVerifyCodeMobile () {
        if (!this.username) {
          Toast.fail('请先输入手机号')
          return
        }
        if (!this.canSendMobile) {
          return
        }
        getSmsCaptcha(2, this.username).then(res => {
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
        let phone = this.username
        let code = this.code
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
        return true
      },
      onSubmit () {
        this.signIn()
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
    font-size: 17px;
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
  .login-box .btn .van-button{
    border-radius:5px;
  }
  .login-box .other {
    margin-top: 20px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    color: #888;
    font-size:14px;
  }

  .login-box .third-login {
    margin-top: 30px;
    padding: 0 20px;
  }
  .login-box .third-login .van-divider{
    border-color:#e8e8e8;
  }
  .login-box .third-login button {
    margin-top: 15px;
    color: #888;
    border: solid 1px #e8e8e8;
  }
  .login-box .third-login i {
    margin-right: 8px;
  }
  .login-box .third-login .fa-weixin {
    color: #58b202;
  }
  .login-box .third-login .fa-qq {
    color: #4dafea;
  }
  .login-box .third-login .fa-weibo {
    color: #e63c53;
  }
  .login-box .login-tips {
    color: #b7b7b7;
    font-size: 13px;
    text-align: center;
    margin: 50px 0;
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
