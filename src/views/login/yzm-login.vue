<template>
  <div>
    <div class="login-box">
      <div class="title">
        <h1>验证码登录</h1>
        <div class="tips">为了您的账号安全，请用手机号登录</div>
      </div>
      <div class="form">
        <van-field placeholder="请输入手机号">
          <template #label>
            <span>
              中国 +86
              <i style="margin-left: 8px;color: #888;">|</i>
            </span>
          </template>
        </van-field>
        <van-field placeholder="请输入密码">
          <template #button>
            <van-button size="small">获取验证码</van-button>
          </template>
        </van-field>
        <div class="btn">
          <van-button color="#1b1b1b" block>登录</van-button>
        </div>
        <div class="other">
          <a>验证码登录</a>
          <div>
            <a>免费注册</a>
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
          <a>《用户使用协议》</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login-box {
  margin-top: 100px;
}
.login-box .title {
  padding: 0 16px;
}
.login-box .title h1 {
  color: #1b1b1b;
  font-size: 18px;
}
.login-box .title .tips {
  font-size: 14px;
  color: #888888;
}
.login-box .form {
  margin-top: 30px;
}
.login-box .form button {
  border: 0px;
  color: #1784f6;
  font-size: 14px;
}
.login-box .btn {
  margin-top: 30px;
  padding: 0 16px;
}
.login-box .other {
  margin-top: 20px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  color: #888888;
}

.login-box .third-login {
  margin-top: 30px;
  padding: 0 16px;
}
.login-box .third-login button {
  margin-top: 15px;
  color: #888888;
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
  line-height: 30px;
  font-size: 16px;
}
.van-cell::after {
  border-bottom: 1px solid #b7b7b7;
  width: calc(100% - 32px);
}
.van-cell::last-child::after {
  position: absolute;
  box-sizing: border-box;
  content: " ";
  pointer-events: none;
  right: 0;
  bottom: 0;
  left: 16px;
  border-bottom: 1px solid #b7b7b7;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
</style>