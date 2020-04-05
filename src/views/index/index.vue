<template>
  <div>
    <div class="container">
      <index-head></index-head>
      <index-banner></index-banner>
      <index-menu></index-menu>
      <index-brand></index-brand>
      <index-foot></index-foot>
      <store-foot></store-foot>
    </div>
  </div>
</template>

<script>
import IndexHead from "./IndexHead";
import IndexBanner from "./IndexBanner";
import IndexMenu from "./IndexMenu";
import IndexBrand from "./IndexBrand"
import IndexFoot from "./IndexFoot";
import StoreFoot from "./StoreFoot";
export default {
  components: {
    StoreFoot,
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
