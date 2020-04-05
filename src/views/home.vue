<template>
  <div>
    <div class="wrap">
      <router-view />
    </div>
    <div class="footer">
      <store-foot></store-foot>
    </div>
  </div>
</template>

<script>
import StoreFoot from "./index/StoreFoot.vue";


export default {
  components: {
    StoreFoot,
  },
  name: "home"
};
</script>

<style scoped>
</style>
