<template>
  <div class="index-brand fix">
    <div class="wrap fix">
      <div class="title-t">
        <h2><span>推荐</span></h2>
      </div>
      <ul class="row_1">
        <li v-for="(item,index) in bannerItem" :key="index">
          <a href=""><img :src="item.adv_code"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from "@/utils/request";
  export default {
    name: "IndexBrand-item",
    data() {
      return {
        bannerItem: []
      }
    },
    created() {
      this.getBanners();
    },
    methods:{
      getBanners() {
        axios.post("/api/Index/getIndexAdList/ap_id",{ap_id:7,}).then(res => {
          this.bannerItem = res.result.banners;
        });
      }
    },

  }
</script>

