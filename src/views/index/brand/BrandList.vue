<template>
  <div>
    <div class="container">
      <index-banner></index-banner>
      <brand-list-body></brand-list-body>
      <index-foot></index-foot>
    </div>
  </div>
</template>
<script>
  import IndexBanner from "../IndexBanner.vue";
  import IndexFoot from "../IndexFoot.vue";
  import BrandListBody from "./BrandListBody.vue";

  export default {
    name:'BrandList',
    components: {
      BrandListBody,
      IndexFoot,
      IndexBanner
    },
    data(){
      return{

      }
    }
  }
</script>
<style lang="scss" scoped>
  .container{background-color:#f7f7f7;}
</style>
