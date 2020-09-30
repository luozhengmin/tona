<template>
  <div>
    <div class="common-login">
      <van-nav-bar
        right-text="商户版"
        left-arrow
        @click-left="$router.go(-1)"
        @click-right="onClickRight">
        <template #title>
          <img src="../../../assets/image/dllogo.png"/>
        </template>
      </van-nav-bar>
    </div>
    <div class="wrap">
      <div class="login-box">
        <div class="title">
          <h1>商家账号密码登录</h1>
          <div class="tips">为了您的账号安全，请平台提供的商户号登录</div>
        </div>
        <div class="form sj">
          <van-field v-model="username" label="经销商账号：" placeholder="请输入商户账号登录" />
          <van-field v-model="password" label="登录密码：" placeholder="请输入商户登录密码" />
          <van-field v-model="code" label="验证码：" placeholder="输入验证码" />
          <div class="btn">
            <van-button color="#1b1b1b" block>登录</van-button>
          </div>
          <div class="other">
            <router-link to="/mima-login">验证码登录</router-link>
            <div>
              <router-link to="/reset">忘记密码</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'vant'
  export default {
    name:'sj-login',
    data(){
      return{
        username: '',
        password:'',
        code: '',
      }
    },
    methods:{
      onClickRight(){
        this.$router.push({'name': 'sj-login'})
      }
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
/*样式改写*/
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
