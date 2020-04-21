<template>
  <div>
    <div class="container">
      <index-head></index-head>
      <index-banner :banners="banners"></index-banner>
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
import IndexBrand from "./IndexBrand";
import IndexFoot from "./IndexFoot";
import IndexBrandItem from "./IndexBrand-item";
import IndexDesign from "./IndexDesign";
import IndexHead from "./IndexHead.vue";
import axios from "@/utils/request";
export default {
  components: {
    IndexHead,
    IndexDesign,
    IndexBrandItem,
    IndexFoot,
    IndexBrand,
    IndexMenu,
    IndexBanner
  },
  created() {
    this.getBanners();
  },
  data() {
    return {
      banners: []
    };
  },
  methods: {
    getBanners() {
      axios.get("/api/Index/getIndexAdList").then(res => {
        let banners = res.result.banners;
        this.banners = banners;
      });
    }
  }
};
</script>

