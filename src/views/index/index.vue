<template>
  <div>
    <div class="container">
      <index-banner></index-banner>
      <index-menu></index-menu>
      <index-brand></index-brand>
      <index-brand-item></index-brand-item>
      <indexDesign></indexDesign>
      <index-foot></index-foot>
    </div>
  </div>
</template>

<script>
import IndexBanner from "./IndexBanner";
import IndexMenu from "./IndexMenu";
import IndexBrand from "./IndexBrand"
import IndexFoot from "./IndexFoot";
import IndexBrandItem from "./IndexBrand-item";
import IndexDesign from "./IndexDesign"
export default {
  components: {
    IndexDesign,
    IndexBrandItem,
    IndexFoot,
    IndexBrand,
    IndexMenu,
    IndexBanner,
  }

}
</script>

<style>

</style>
