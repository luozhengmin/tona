<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.mb15 {
  margin-bottom: 15px;
}

/* 样式重写 */
.login-box .van-field__right-icon {
  height: 30px;
}
</style>
