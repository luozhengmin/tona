<template>
  <div>
    <div class="container">
      <index-banner></index-banner>
      <index-menu></index-menu>
      <index-brand></index-brand>
      <index-foot></index-foot>
    </div>
  </div>
</template>

<script>
import IndexBanner from "./IndexBanner";
import IndexMenu from "./IndexMenu";
import IndexBrand from "./IndexBrand"
import IndexFoot from "./IndexFoot";
export default {
  components: {
    IndexFoot,
    IndexBrand,
    IndexMenu,
    IndexBanner,
  }

}
</script>

<style>

</style>
