<template>
  <div>
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix" @click="onSearch">
          <i class="iconfont">&#xe6c7;</i>
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
              <router-link to="">
                <i class="iconfont bg-7">&#xe602;</i>
                <span>关于我们</span>
              </router-link>
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
        }
      }
    }
</script>
