<template>
    <div class="container">
      <index-head></index-head>
      <index-banner :banners="banners"></index-banner>
      <index-menu></index-menu>
      <index-brand></index-brand>
      <index-brand-item></index-brand-item>
      <indexDesign></indexDesign>
      <index-foot></index-foot>
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
      axios.post("/api/Index/getAppadList/ap_id/",{ap_id:1}).then(res => {
        let banners = res.result.ad_list;
        console.log(res);
        this.banners = banners;
      });
    }
  }
};
</script>
