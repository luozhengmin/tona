<template>
    <div class="container">
      <div class="design-tab">
        <van-tabs v-model="active" line-height="0">
          <van-tab>
            <template #title>推荐</template>
            <recommend></recommend>
          </van-tab>
          <van-tab>
            <template #title>活动 </template>
            <activity></activity>
          </van-tab>
          <van-tab>
            <template #title>设计方案 <i class="iconfont">&#xe629;</i> </template>
            <design-plan></design-plan>
          </van-tab>
        </van-tabs>
      </div>
    </div>
</template>

<script>
  import Recommend from "./DesignChild/Recommend.vue";
  import Activity from "./DesignChild/Activity.vue";
  import DesignPlan from "./DesignChild/DesignPlan.vue";

  export default {
    components: {
      DesignPlan,
      Activity,
      Recommend},
    name: "Design",
    data(){
      return{
        active:'',
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
