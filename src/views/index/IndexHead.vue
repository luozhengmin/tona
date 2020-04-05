<template>
  <div>
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <i class="iconfont">&#xe7ae;</i>
        </div>
        <div class="head-logo">
          <a href=""><img src="../../assets/image/dnlogo.png"></a>
        </div>
        <div class="menu-ico" v-bind:class="{active:isActive}" v-on:click="isActive=!isActive">
          <span></span>
        </div>
      </div>
      <transition name="slideTran">
        <div class="slideNav" v-if="isActive">
          <ul class="ab fix">
            <li>
              <router-link to="">
                <i class="iconfont bg-7">&#xe7ae;</i>
                <span>品牌馆</span>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="iconfont bg-7">&#xe7ae;</i>
                <span>优秀设计</span>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="iconfont bg-7">&#xe7ae;</i>
                <span>全球门店</span>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="iconfont bg-7">&#xe7ae;</i>
                <span>招商加盟</span>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="iconfont bg-7">&#xe7ae;</i>
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
    }
</script>

<style lang="scss" scoped>
  .head{width:100%;height:54px;background-color:#1b1b1b;position:relative;
    .head-ss{position: absolute;left:4%;height:20px;top:17px;line-height:20px;
      i{font-size:20px;font-weight:bold;color:#fff;}
    }
    .head-logo{text-align:center;margin:0 8%;
      a {height:54px;padding:17px 0;display:block;
        img{height:20px;vertical-align:inherit;}
      }
    }
    .menu-ico{width:20px;height:20px;padding:2px 0;position:absolute;right:4%;cursor:pointer;z-index:180;top:16px;
      span{background:#fff;position:absolute;width:72%;height:2px;left: 0;top:10px;overflow: hidden;text-indent:200%;
        -webkit-transition: opacity 0.25s;transition: opacity 0.25s;border-radius:2px;}
    }
  }
  .menu-ico::before,.menu-ico::after {content: '';position: absolute;height:2px;width:100%;left:0;top:50%;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transition: -webkit-transform 0.25s;
    transition: transform 0.25s;background:#fff;border-radius:2px;
  }
  .menu-ico::before {-webkit-transform: translate3d(0, -9px, 0);transform: translate3d(0, -9px, 0);}
  .menu-ico::after {-webkit-transform: translate3d(0, 9px, 0);transform: translate3d(0, 9px, 0);width:90%;}

  .active.menu-ico span {opacity: 0;}
  .active.menu-ico::before {-webkit-transform: rotate3d(0, 0, 1, 45deg);transform: rotate3d(0, 0, 1, 45deg);}
  .active.menu-ico::after {-webkit-transform: rotate3d(0, 0, 1, -45deg);transform: rotate3d(0, 0, 1, -45deg);width:100%;}

  .slideNav{position:absolute;top:54px;width:100%;background-color:rgba(50,50,50,0.9);z-index:175;padding:12px 0;}
  .slideNav ul{width:92%;height:100%;z-index:99;position: relative;text-align:center;margin:0 auto;}
  .slideNav li{
    width:20%;color:#fff;padding:0 6px;
    a{
      span{font-size:14px;color:#fff;}
    }
  }
  .slideTran-enter-active{transition: all .5s ease;top:100%;}
  .slideTran-enter{top:0;}
  .slideTran-leave-active {transition: all .5s ease;top:-100%;}
  .slideTran-leave{top:0;}
  .bg-7{font-size:36px;color:#323232;width:54px;height:54px;background-color:#fff;border-radius:50%;line-height:58px;
    display:block;margin:0 auto;
  }
</style>
