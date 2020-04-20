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
     <div class="design-detail fix">
       <div class="detail-item">
         <img src="../../assets/image/xq02.jpg">
         <div class="title">一篇全是硬货的另类硬装整屋案例，堪称装修小百科！</div>
         <div class="item ab fix">
           <div class="item-pic">
             <img src="../../assets/image/xq02.jpg">
           </div>
           <div class="item-title ac">
             <h3>Miumiu</h3>
             <p>更新与<time> 2020-01-12</time></p>
           </div>
           <van-button round type="info" color="#f4523b" is-link @click="showCommit">找TA设计</van-button>
         </div>
       </div>
       <!--找TA设计开始-->
       <van-popup class="design-form" v-model="show" closeable close-icon="cross">
         <div class="item ab fix">
           <div class="item-pic">
             <img src="../../assets/image/xq02.jpg">
           </div>
           <div class="item-title">
             <h3>Miumiu</h3>
             <p>更新与<time> 2020-01-12</time></p>
           </div>
         </div>
         <div class="form-list">
           <h2>装修需求</h2>
           <van-cell-group class="d-request">
             <van-field v-model="value" type="textarea" placeholder="描述清楚装修需求，设计师会为您提供更好的服务，如：小区名称、面积、常住人员、装修预算、意向风格等。"/>
           </van-cell-group>
           <h2>手机号码</h2>
           <van-cell-group>
             <van-field v-model="tel"/>
           </van-cell-group>
           <h2>温馨提示</h2>
           <p>为保障您的权益，请与设计师充分沟通后在尽量通过TONA HOME官方渠道下单。所有线下私自交易不受TONA HOME平台保护。</p>
           <div class="form-btn">
             <van-button color="#f4523b" is-link @click="showForm">提交咨询</van-button>
           </div>

         </div>
       </van-popup>

       <van-popup class="design-confim" v-model="showform" closeable close-icon="cross">
         <div class="confim-title">
           确定咨询或提问？
         </div>
         <p>朵纳平台为用户提供获取设计服务的第三方平台，并非设计服务的提供方或销售方，设计服务由设计师/商家提供，并有其承担服务
           质量保证责任。为了保障您的权益，请自行选择为您服务的对象和服务的内容。
            <br>
           注：交易相关内容由用户与设计师/商家自行协商。朵纳对任何私自交易所产生的法律问题和纠纷不承担责任。</p>
         <div class="confim-btn">
           <van-button color="#b7b7b7" plain>取消</van-button>
           <van-button color="#f4523b">确认</van-button>
         </div>
       </van-popup>

       <van-popup class="design-share" v-model="showshare" closeable close-icon="cross">
         <div class="share">
           <h2>分享给好友</h2>
           <div class="share-list fix">
             <div class="list-item">
               <a href="">
                 <img src="../../assets/image/cp02.jpg">
               </a>
               <span>微信好友</span>
             </div>
             <div class="list-item">
               <a href="">
                 <img src="../../assets/image/cp02.jpg">
               </a>
               <span>微信朋友圈</span>
             </div>
             <div class="list-item">
               <a href="">
                 <img src="../../assets/image/cp02.jpg">
               </a>
               <span>QQ空间</span>
             </div>
             <div class="list-item">
               <a href="">
                 <img src="../../assets/image/cp02.jpg">
               </a>
               <span>新浪微博</span>
             </div>

             <div class="list-item">
               <a href="">
                 <img src="../../assets/image/cp02.jpg">
               </a>
               <span>支付宝好友</span>
             </div>
             <div class="list-item">
               <a href="">
                 <img src="../../assets/image/cp02.jpg">
               </a>
               <span>生活圈</span>
             </div>
             <div class="list-item">
               <a href="">
                 <img src="../../assets/image/cp02.jpg">
               </a>
               <span>QQ好友</span>
             </div>
             <div class="list-item">
               <a href="">
                 <img src="../../assets/image/cp02.jpg">
               </a>
               <span>复制链接</span>
             </div>
           </div>
         </div>
       </van-popup>

       <van-popup class="design-index" v-model="showindex" position="right" :style="{ height: '100%',width:'60%'}">
         <div class="design-sy">
           方案导航
         </div>
         <div class="sy-list fix">
           <van-steps direction="vertical" :active="1" active-icon="location">
             <van-step>
               <h3>一层</h3>
             </van-step>
             <van-step>
               <h3>概览</h3>
             </van-step>
             <van-step>
               <h3>客厅</h3>
             </van-step>
             <van-step>
               <h3>料理台</h3>
             </van-step>
             <van-step>
               <h3>卫生间</h3>
             </van-step>
           </van-steps>
           <van-steps direction="vertical" :active="1" active-icon="location">
             <van-step>
               <h3>二层</h3>
             </van-step>
             <van-step>
               <h3>主卧</h3>
             </van-step>
             <van-step>
               <h3>书房</h3>
             </van-step>
           </van-steps>
         </div>
       </van-popup>

       <!--找TA设计结束-->
       <div class="wrap fix">
         <div class="detail-house fix">
           <div class="title-t">
             <h2><span>房屋信息</span></h2>
           </div>
           <dl>
             <dd>小区：未知小区</dd>
             <dd>户型：3室2厅2卫1厨</dd>
             <dd>面积：125.00m²</dd>
             <dd>标签：现代简约、家装</dd>
           </dl>
         </div>
         <div class="detail-profile fix">
           <div class="title-t">
             <h2><span>房屋信息</span></h2>
           </div>
           <p>室内墙面、地面、顶棚以及家具陈设乃至灯具器皿等均以简洁的造型、纯洁的质地、精细的工艺为其特征。</p>
         </div>
         <div class="detail-floor fix">
           <div class="floor-item">
             <div class="floor-t">
               <span><em>一层</em> · 概览</span>
             </div>
             <p><img src="../../assets/image/xq03.jpg"></p>
           </div>
           <div class="floor-item">
             <div class="floor-t">
               <span><em>一层</em> · 客厅</span>
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
                 </swiper-slide>
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
                 <swiper-slide>
                   <img src="../../assets/image/xq02.jpg">
                 </swiper-slide>
                 <swiper-slide>
                   <img src="../../assets/image/xq02.jpg">
                 </swiper-slide>
               </swiper>
             </div>
           </div>
           <div class="floor-item">
             <div class="floor-t">
               <span><em>一层</em> · 料理台</span>
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
                 </swiper-slide>
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
         <div class="detail-copy">
           <p>著作权归作者所有，商业转载请联系作者获得授权，
             非商业装载请注明出处。</p>
         </div>
       </div>
       <div class="detail-menu ab fix">
         <div class="menu-item ab">
           <i class="van-icon van-icon-eye-o"></i>
           <span>1654</span>
         </div>
         <div class="menu-item ab" @click="collect()">
           <i class="van-icon van-icon-star-o"></i>
           <span>1654</span>
         </div>
         <div class="menu-item ab" is-link @click="showShare">
           <i class="van-icon van-icon-home-o"></i>
           <span>分享</span>
         </div>
       </div>
     </div>
     <div class="design-nav ab">
       <div class="nav-list ab" is-link @click="showIndex">
         <img src="../../assets/image/icon.png">
         <span>方案导航</span>
       </div>
     </div>
   </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import { Toast } from 'vant';

  export default {
    name: "DesignDetail",
    components: {
      Swiper,
      SwiperSlide
    },
    data(){
      return{
        show:false,
        showform:false,
        showshare:false,
        showindex:false,
        value:'',
        tel:'',
        swiperOptionTop: {
          loop: true,
          loopedSlides: 5,
          spaceBetween: 10,
        },
        swiperOptionThumbs: {
          loop: true,
          loopedSlides: 5,
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        }
      }
    },
    methods: {
      showCommit() {
        this.show = true;
      },
      showForm() {
        this.showform = true;
      },
      showShare() {
        this.showshare = true;
      },
      showIndex() {
        this.showindex = true;
      },
      collect() {
        Toast({
          message: "收藏成功",
          icon: "star"
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$swiper
        const swiperThumbs = this.$refs.swiperThumbs.$swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
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
        padding:12px 0 40px 0;
        .list-item{
          text-align:center;
          font-size:14px;color:#888;
          width:33.33333%;
          float:left;
          padding:0 4%;
          margin-bottom:6px;
          a{display:block;}
          span{
            display:block;
            padding-top:6px;
          }
        }
      }
    }
  }
  .design-index{
    padding:20px 15px;
    .design-sy{
      font-size:16px;color:#323232;
    }
  }

</style>
