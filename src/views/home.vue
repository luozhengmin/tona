<template>
  <div>
    <div class="header">
      <index-head></index-head>
    </div>
    <div>
      <router-view />
    </div>
    <div class="footer">
      <store-foot></store-foot>
    </div>
  </div>
</template>

<script>
import IndexHead from "./index/IndexHead.vue";
import StoreFoot from "./index/StoreFoot.vue";


export default {
  components: {
    StoreFoot,
    IndexHead},
  name: "home"
};
</script>

<style scoped>
</style>
