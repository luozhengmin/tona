<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">优秀设计</div>
        <div class="menu-ico" v-bind:class="{active:isActive}" v-on:click="isActive=!isActive">
          <span></span>
        </div>
      </div>
      <transition name="van-slide-down">
        <div class="slideNav" v-if="isActive">
          <ul class="ab fix">
            <li>
              <router-link to="/BrandList-1">
                <img src="../../assets/image/nav05.png">
                <span>品牌馆</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Design">
                <img src="../../assets/image/nav04.png">
                <span>优秀设计</span>
              </router-link>
            </li>
            <li>
              <router-link to="/GlobalStore">
                <img src="../../assets/image/nav03.png">
                <span>全球门店</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Investment">
                <img src="../../assets/image/nav02.png">
                <span>招商加盟</span>
              </router-link>
            </li>
            <li>
              <router-link to="/index">
                <img src="../../assets/image/nav01.png">
                <span>关于我们</span>
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="design-tab">
      <van-tabs v-model="active" line-height="0">
        <van-tab>
          <template #title>推荐</template>
          <recommend></recommend>
        </van-tab>
        <van-tab>
          <template #title>活动</template>
          <activity></activity>
        </van-tab>
        <van-tab>
          <template #title>
            设计方案
            <i class="iconfont icon-fire"></i>
          </template>
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
    Recommend
  },
  name: "Design",
  data() {
    return {
      active: "",
      isActive: false
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
