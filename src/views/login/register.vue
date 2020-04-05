<template>
  <div>
    <div class="login-box">
      <div class="title">
        <h1>免费注册</h1>
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
        <van-field placeholder="请输入6位验证码">
          <template #button>
            <van-button size="small">获取验证码</van-button>
          </template>
        </van-field>
        <van-field type="password" placeholder="设置8-20位（数字+字符）密码" />
        <van-field type="password" placeholder="请再次输入密码" />
        <div class="btn">
          <van-button color="#1b1b1b" block>确定</van-button>
        </div>
        <div class="footer">
          <van-radio style="margin-top: 2px;" icon-size="16px"></van-radio>
          <a>已阅读并同意《用户使用协议》</a>
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
.footer {
  padding: 20px 0;
  font-size: 14px;
  text-align: center;
  color: #b7b7b7;
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer a{
  margin-left: 7px;
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