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
              <router-link to="/BrandList">
                <i class="iconfont bg-7">&#xe7ae;</i>
                <span>品牌馆</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Design">
                <i class="iconfont bg-7">&#xe508;</i>
                <span>优秀设计</span>
              </router-link>
            </li>
            <li>
              <router-link to="/GlobalStore">
                <i class="iconfont bg-7">&#xe7b9;</i>
                <span>全球门店</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Investment">
                <i class="iconfont bg-7">&#xe6b5;</i>
                <span>招商加盟</span>
              </router-link>
            </li>
            <li>
              <router-link to>
                <i class="iconfont bg-7">&#xe602;</i>
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
