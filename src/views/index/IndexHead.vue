<template>
  <div>
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix" @click="onSearch">
          <i class="iconfont icon-sousuo"></i>
        </div>
        <div class="head-logo">
          <router-link to="/index"><img src="../../assets/image/dnlogo.png"></router-link>
        </div>
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
  </div>
</template>

<script>
    import NavMenu from "./navMenu.vue";

    export default {
      components: {NavMenu},
      name: "IndexHead",
      data(){
        return{
          isActive: false,
        }
      },
      methods:{
        onSearch(){
          this.$router.push({'name': 'ProductSearch'})
        },
      }
    }
</script>
