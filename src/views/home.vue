<template>
  <div style="height:100%">
    <router-view />
    <div class="footer">
      <store-foot v-if="$route.meta.showFooter"></store-foot>
    </div>
  </div>
</template>

<script>
import StoreFoot from "./index/StoreFoot.vue";

export default {
  components: {
    StoreFoot
  },
  created() {},
  data() {
    return {};
  },
  name: "home"
};
</script>

<style scoped>
</style>
