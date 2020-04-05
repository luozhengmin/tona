<template>
  <div>
    <div class="wrap">
      <router-view />
    </div>
    <div class="footer">
      <store-foot v-if="showFooter"></store-foot>
    </div>
  </div>
</template>

<script>
import StoreFoot from "./index/StoreFoot.vue";

export default {
  components: {
    StoreFoot
  },
  created() {
    let showFooter = this.$route.meta.showFooter;
    this.showFooter = showFooter;
  },
  data() {
    return {
      showFooter: true
    };
  },
  name: "home"
};
</script>

<style scoped>
</style>
