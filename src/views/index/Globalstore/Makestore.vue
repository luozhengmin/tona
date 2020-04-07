<template>
  <div>
    <div class="container">
      <div class="global-title">
        <h2>预约到店</h2>
      </div>
      <div class="global wrap fix">
        <van-field v-model="text" label="文本" placeholder="请输入用户名"/>

        <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入用户名"/>

        <van-field v-model="digit" type="digit" label="整数" placeholder="请输入用户名"/>

        <van-field v-model="number" type="number" label="数字" placeholder="请输入用户名"/>

        <van-field v-model="password" type="password" label="密码" placeholder="请输入用户名"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Makestore"
  }
</script>

<style lang="scss" scoped>
  .global-title{
    width:100%;
    position:relative;
    text-align:center;
    h2{font-size:14px;color:#323232;font-weight:bold;padding:12px 15px;border-bottom:solid 2px #eee;}
  }
</style>
