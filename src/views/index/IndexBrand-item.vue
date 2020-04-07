<template>
  <div class="index-brand fix">
    <div class="wrap fix">
      <div class="title-t">
        <h2><span>推荐</span></h2>
      </div>
      <ul class="row-1">
        <li v-for="(item,index) in branditemlist" :key="index">
          <div class="brand-con ab fix">
            <div class="brand-con-l">
              <h3>{{item.logo}} <span>{{item.season}}</span></h3>
              <span></span>
              <h2>空间有限，选择无线</h2>
              <p>用我们的设计打造你的专属空间</p>
            </div>
            <div class="brand-con-r">
              <img src="../../assets/image/cp01.jpg">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "IndexBrand-item",
      data() {
        return {
          branditemlist: [
            {id: 1, logo: 'TONA HOME x',season:'品牌季0'},
            {id: 2, logo: 'TONA HOME x',season:'品牌季1'},
            {id: 3, logo: 'TONA HOME x',season:'品牌季2'},
            {id: 4, logo: 'TONA HOME x',season:'品牌季3'},
            {id: 5, logo: 'TONA HOME x',season:'品牌季4'}
          ]
        }
      }
    }
</script>

<style scoped>

</style>
