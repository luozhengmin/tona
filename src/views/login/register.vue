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
  </div>
</template>

<script>
  export default {

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
  .login-box .btn .van-button{
    border-radius:5px;
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
