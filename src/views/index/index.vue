<template>
  <div>
    <div class="container">
      <index-head></index-head>
      <index-banner></index-banner>
      <index-menu></index-menu>
      <index-brand></index-brand>
      <index-foot></index-foot>
    </div>
  </div>
</template>

<script>
import IndexHead from "./IndexHead";
import IndexBanner from "./IndexBanner";
import IndexMenu from "./IndexMenu";
import IndexBrand from "./IndexBrand"
import IndexFoot from "./IndexFoot.vue";
export default {
  components: {
    IndexFoot,
    IndexBrand,
    IndexMenu,
    IndexBanner,
    IndexHead
  }

}
</script>

<style>

</style>
