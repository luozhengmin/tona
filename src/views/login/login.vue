<template>
  <div class="wrap">
    <div class="login-box">
      <div class="title">
        <h1>商家账号密码登录</h1>
        <div class="tips">为了您的账号安全，请用平台提供的商户号登录</div>
      </div>
      <div class="form">
        <van-field label="经销商账号" placeholder="请输入商户账号登录" />
        <van-field type="tel" label="登录密码" placeholder="请输入商户登录密码" />
        <van-field label="验证码" placeholder="输入验证码">
          <template #right-icon>
            <van-image width="100" height="100%" :src="require('../../assets/image/yzm.jpg')" />
          </template>
        </van-field>
        <div class="btn">
          <van-button color="#1b1b1b" block>登录</van-button>
        </div>
        <div class="other">
          <a>验证码登录</a>
          <a>忘记密码</a>
        </div>
      </div>
    </div>
    <div class="footer">
      还没有成为我们的合作伙伴？
      <a>快速申请入驻</a>
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

.footer {
  background-color: #eeeeee;
  padding: 20px 0;
  font-size: 14px;
  text-align: center;
  color: #888888;
  position: fixed;
  width: 100%;
  bottom: 0;
}
.footer a {
  font-weight: bolder;
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