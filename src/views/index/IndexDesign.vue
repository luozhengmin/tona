<template>
  <div>
    <div class="index-brand fix">
      <div class="title-t">
        <h2><span>设计灵感</span></h2>
      </div>
      <div class="brand-con ab fix">
        <div class="brand-con-l">
          <h3>TONA HOME x <span>卫浴家装</span></h3>
          <span></span>
          <h2>致力为全球用户提供</h2>
          <p>自然健康的全屋解决方案</p>
        </div>
        <div class="brand-con-r">
          <img src="../../assets/image/cp01.jpg">
        </div>
      </div>
      <div class="design-list fix">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(image, index) in productlist" :key="index">
            <a href=""><img :src="image.imgUrl"></a>
            <div class="main ab">
              <div class="infor-l">
                <h2>GDC Award 2019 评审奖 获奖作品</h2>
                <div class="-t">
                  <span>韵华茶几 | 原创设计</span>
                  <span><i class="iconfont">&#xe7ae;</i>15402</span>
                </div>
              </div>
              <div class="infor-r">
                <div class="dot"></div>
                <span>数码党</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: "",
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView:2,
          spaceBetween:10,
        },
        productlist:[
          { id:1,imgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20170903/3b270c8fc6084df7a187a514fb7b8ef0.jpeg'},
          { id:2,imgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20170903/3b270c8fc6084df7a187a514fb7b8ef0.jpeg'},
          { id:3,imgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20170903/3b270c8fc6084df7a187a514fb7b8ef0.jpeg'},
          { id:4,imgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20170903/3b270c8fc6084df7a187a514fb7b8ef0.jpeg'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .design-list{
    color:#323232;
    width:120%;
    margin:12px 0 16px 0;position:relative;overflow:hidden;
    .swiper-slide{
      width:70%!important;
    }
  }
  .main{
    color:#888;
    padding:12px 12px;
    .infor-l{
      width:80%;
      h2{
        font-size:14px;
      }
      .-t{
        i{font-size:12px;line-height:12px;padding:0 2px 0 6px;}
      }
    }
    .infor-r{
      width:20%;
      text-align: center;
      .dot{width:36px;height:36px;margin:0 auto;background:#aaa;border-radius:50%;}
    }
  }
</style>
