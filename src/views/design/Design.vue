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
          <nav-menu></nav-menu>
        </div>
      </transition>
    </div>
    <div class="design-tab">
      <van-tabs v-model="activeName" line-height="0" >
        <van-tab name="a">
          <template #title>推荐</template>
          <recommend @childByValue="childByValue"></recommend>
        </van-tab>
        <van-tab name="b">
          <template #title>活动</template>
          <activity></activity>
        </van-tab>
        <van-tab name="c">
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
import NavMenu from "../index/navMenu.vue";

export default {
  components: {
    NavMenu,
    DesignPlan,
    Activity,
    Recommend
  },
  name: "Design",
  data() {
    return {
      activeName:'a',
      isActive: false,
    };
  },
  methods: {
    childByValue: function (childValue) {
      // childValue就是子组件传过来的值
      this.activeName = childValue
    },
  }

};
</script>

