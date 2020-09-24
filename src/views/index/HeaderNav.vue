<template>
  <div class="head fix">
    <div class="wrap fix">
      <div class="head-ss fix">
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </div>
      <div class="head-logo">支付/配送方式</div>
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
</template>

<script>
  import NavMenu from "./navMenu.vue";

  export default {
    components: {NavMenu},
    name: "HeaderNav",
    data(){
      return{
        isActive : false,
      }
    }
  }
</script>

