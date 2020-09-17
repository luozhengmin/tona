<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          方案详情
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
    <div class="design-detail fix">

      <!--找TA设计开始-->


      <!--找TA设计结束-->
      <div class="wrap fix">
        <div class="detail-floor fix">

          <div class="floor-item">
            <div>
              <div>
                <span><em>7</em> ·8</span>
              </div>
              <div class="d-hall">
                <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
                  <swiper-slide>
                  <img src="../../assets/image/xq02.jpg">
                  <div class="qj-btn ab">
                  <span>3D全景</span>
                  <i class="van-icon van-icon-play"></i>
                  </div>
                  </swiper-slide>
                  <swiper-slide>
                    <img src="../../assets/image/xq02.jpg">
                    <div class="qj-btn ab">
                      <span>3D全景</span>
                      <i class="van-icon van-icon-play"></i>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <img src="../../assets/image/xq02.jpg">
                    <div class="qj-btn ab">
                      <span>3D全景</span>
                      <i class="van-icon van-icon-play"></i>
                    </div>
                  </swiper-slide>

                  <!--<swiper-slide>-->
                    <!--<img src="../../assets/image/xq03.jpg">-->
                  <!--</swiper-slide>-->
                </swiper>

                <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
                  <swiper-slide>
                  <img src="../../assets/image/xq02.jpg">
                  </swiper-slide>
                  <swiper-slide>
                    <img src="../../assets/image/xq02.jpg">
                  </swiper-slide>
                  <swiper-slide>
                    <img src="../../assets/image/xq02.jpg">
                  </swiper-slide>
                </swiper>
              </div>
            </div>

          </div>
        </div>
        <div class="detail-copy">
          <p>著作权归作者所有，商业转载请联系作者获得授权，
            非商业装载请注明出处。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import { Toast } from 'vant';

  import DesignApi from "@/api/DesignApi";

  export default {
    name: "DesignDetail",
    components: {
      Swiper,
      SwiperSlide
    },
    data(){
      return{
        isActive:false,
        show:false,

        swiperOptionThumbs: {
//          loop: true,
//          loopedSlides: 5,
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
        },
        swiperOptionTop: {
//          loop: true,
//          loopedSlides: 5,
          spaceBetween: 10,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true//修改swiper的父元素时，自动初始化swiper
        },
        isInit:''
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$el.swiper
        const swiperThumbs = this.$refs.swiperThumbs.$el.swiper
        console.log(this.$refs)
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    },

    methods: {

      goPage (url) {
        window.location.href = url
      }

    },

  }
</script>

<style lang="scss" scoped>
  .design-detail{
    .detail-item{
      .title{font-size:16px;color:#323232;padding:8px 10% 6px 15px;}
      .item{
        align-items:center;padding:6px 15px;
        .item-pic{
          margin-right:6px;
          img{border-radius:50%;width:42px;height:42px;}
        }
        .item-title{
          h3{font-size:15px;}
          p{font-size:14px;color:#888;}
        }
        .van-button{height:32px;line-height:30px;}
      }
    }
    .detail-house{
      dl{
        dd{width:50%;padding-right:2%;font-size:14px;color:#888;float:left;padding:2px 0;}
      }
    }
    .detail-profile{
      padding-bottom:12px;
      border-bottom:solid 1px #eee;
      p{font-size:14px;color:#888;line-height:1.8;}
    }
    .detail-floor{
      .floor-item{
        padding-bottom:12px;
        .floor-t{
          font-size:16px;color:#323232;padding-bottom:8px;
          span{
            em{color:#888;}
          }
        }
      }
    }
    .detail-copy{
      padding:8px 15px;background-color:#eee;margin-bottom:24px;
      p{font-size:14px;color:#888;}
    }
    .detail-menu{
      padding:12px 15px;border-top:solid 1px #eee;font-size:15px;color:#888;justify-content:space-between;
      .menu-item{
        align-items:center;
        width:33.33333%;
        justify-content:center;
        i{font-size:22px;padding-right:4px;}
      }
      .menu-item:first-child{text-align:left;justify-content:flex-start;}
      .menu-item:last-child{text-align:right;justify-content: flex-end;}
    }
  }
  .detail-house,.detail-profile, .detail-floor,.detail-copy{padding-top:12px;}
  .design-nav{position:fixed;z-index:10;right:15px;bottom:10%;background-color:rgba(255,255,255,0.95);
    width:70px;height:70px;border-radius:50%;align-items:center;justify-content:space-around;text-align:center;
    .nav-list{
      flex-direction: column;
      align-items:center;
      img{width:35px;}
    }
  }
  .design-form{
    width:92%;padding:8px 0 0 0;
    .item{
      align-items:center;padding:6px 15px 10px 15px;
      .item-pic{
        margin-right:6px;
        img{border-radius:50%;width:42px;height:42px;}
      }
      .item-title{
        h3{font-size:15px;}
        p{font-size:14px;color:#888;}
      }
      .van-button{height:32px;line-height:30px;}
    }
    .form-list{
      background-color:#f2f2f2;padding:12px 15px 12px 15px;
      h2{
        font-size:15px;color:#323232;padding:8px 0;
      }
      .van-cell-group{
        border:solid 1px #b7b7b7;
      }
      .d-request{
        .van-cell{line-height:1.4;}
      }
      p{color:#888;font-size:14px;}
      .form-btn{
        text-align:center;
        .van-button{margin:12px 0;padding:0 30px;}
      }
    }
  }
  .d-hall{
    .gallery-top {height:80%;width: 100%; }
    .gallery-thumbs {height:20%;box-sizing: border-box;padding:10px 0;}
    .gallery-thumbs .swiper-slide{width:25%;height:100%;opacity: 0.4;padding:2px;}
    .gallery-thumbs .swiper-slide-active{opacity: 1;border:solid 2px #3e82f7;}
  }
  .qj-btn{
    position:absolute;right:15px;top:15px;background-color:rgba(0,0,0,0.5);border-radius:25px;padding:0 15px;
    height:28px;line-height:28px;color:#fff;align-items:center;
    i{padding-left:2px;}
  }
  .design-confim{
    width:92%;padding:16px 15px 20px 15px;
    border-radius:4px;
    .confim-title{
      font-size:15px;color:#323232;
    }
    p{
      margin:16px 0;
      font-size:14px;
      color:#888;
    }
    .confim-btn{
      text-align:center;
      .van-button{margin:0 6px;height:36px;line-height:34px;padding:0 30px;}
    }
  }
  .design-share{
    width:100%;padding:16px 15px 20px 15px;
    .share{
      padding:24px 15px 12px 15px;
      h2{font-size:14px;color:#888;text-align:center;}
      .share-list{
        padding:12px 0 0 0;
        .list-item{
          text-align:center;
          font-size:14px;color:#888;
          width:33.33333%;
          float:left;
          padding:0 4%;
          margin:8px 0;
          a{
            display:block;
            line-height:1.2;
            i{font-size:32px;color:#ccc;}
          }
          span{
            display:block;
            padding-top:2px;
          }
        }
      }
    }
  }
  .design-index{
    padding:20px 15px;
    .design-sy{
      font-size:16px;color:#323232;margin-top:46px;
    }
  }
  .detail-item img{width:100%;}
</style>
