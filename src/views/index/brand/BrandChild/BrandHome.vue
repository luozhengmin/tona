<template>
    <div>
      <index-banner></index-banner>
      <div class="r-solution fix">
        <child-list></child-list>
      </div>
    </div>
</template>

<script>
  import IndexBanner from "../../IndexBanner.vue";
  import ChildList from "./ChildList.vue";

  export default {
    components: {
      ChildList,
      IndexBanner},
    name: "BrandHome"
  }
</script>

<style lang="scss" scoped>

</style>
