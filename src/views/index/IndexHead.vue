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
              <p @click="goPage('https://www.tona.com/Index/lists/catid/1.html')">
                <img src="../../assets/image/nav01.png">
                <span>关于我们</span>
              </p>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
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
        goPage (url) {
          window.location.href = url
        }
      }
    }
</script>
