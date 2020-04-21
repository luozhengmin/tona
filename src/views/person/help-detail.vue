<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          帮助详情
        </div>
      </div>
    </div>
    <div class="q-list">
      <div class="item" v-for="i in 5" :key="i">
        <h3>Q：你们的商品是正品么？</h3>
        <div>A：TONA HOME所售商品都是正品，和专卖店销售的一样，请您放心~</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:''
  };
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  .q-list {
    padding: 15px;
    line-height: 24px;
    .item {
      padding: 10px 0;
      h3 {
        font-size: 16px;
        font-weight: bolder;
        color: #323232;
        padding: 10px 0;
      }
      div {
        color: #323232;
        font-size: 15px;
      }
    }
  }
}
</style>
