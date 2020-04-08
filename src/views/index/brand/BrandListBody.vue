<template>
    <div>
      <div class="sub-brand fix">
        <div class="sub-brand-t">
          <div class="classify ab fix">
            <div class="classify-tltle ab">
              <h2>品类</h2>
              <a href="">全部</a>
            </div>
            <div class="classify-list">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide><a href="">浴室柜</a></swiper-slide>
                <swiper-slide><a href="">智能马桶</a></swiper-slide>
                <swiper-slide><a href="">浴缸</a></swiper-slide>
                <swiper-slide><a href="">淋浴房</a></swiper-slide>
                <swiper-slide><a href="">Slide 5</a></swiper-slide>
                <swiper-slide><a href="">Slide 6</a></swiper-slide>
              </swiper>
            </div>
          </div>

          <div class="classify ab fix">
            <div class="classify-tltle ab">
              <h2>产地</h2>
              <a href="">全部</a>
            </div>
            <div class="classify-list">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide><a href="">德国</a></swiper-slide>
                <swiper-slide><a href="">韩国</a></swiper-slide>
                <swiper-slide><a href="">欧洲</a></swiper-slide>
                <swiper-slide><a href="">马来西亚</a></swiper-slide>
                <swiper-slide><a href="">日本</a></swiper-slide>
                <swiper-slide><a href="">美国</a></swiper-slide>
                <swiper-slide><a href="">德国</a></swiper-slide>
                <swiper-slide><a href="">韩国</a></swiper-slide>
                <swiper-slide><a href="">欧洲</a></swiper-slide>
                <swiper-slide><a href="">马来西亚</a></swiper-slide>
                <swiper-slide><a href="">日本</a></swiper-slide>
                <swiper-slide><a href="">美国</a></swiper-slide>
              </swiper>
            </div>
          </div>


        </div>
        <div class="sub-brand-b wrap">
          <div class="col" v-for="(item,index) in subrandlist" :key="index">
            <router-link :to="{name:'BrandChild',query:{id:item.id}}">
              <div class="b-pic">
                <img src="../../../assets/image/cp01.jpg">
              </div>
              <div class="main ab fix">
                <div class="h-pic"></div>
                <div class="infor">
                  <h2>{{item.p_name}}</h2>
                  <p>{{item.p_information}}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: "BrandListBody",
    components: {
      Swiper,
      SwiperSlide
    },
    data(){
      return{
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        subrandlist:[
          { id:1,imgUrl:'',p_name:'TONA卫浴',p_information:'纯德系，现代卫浴品牌'},
          { id:2,imgUrl:'',p_name:'TONA卫浴',p_information:'纯德系，现代卫浴品牌'},
          { id:3,imgUrl:'',p_name:'TONA卫浴',p_information:'纯德系，现代卫浴品牌'},
          { id:4,imgUrl:'',p_name:'TONA卫浴',p_information:'纯德系，现代卫浴品牌'},
          { id:5,imgUrl:'',p_name:'TONA卫浴',p_information:'纯德系，现代卫浴品牌'},
          { id:6,imgUrl:'',p_name:'TONA卫浴',p_information:'纯德系，现代卫浴品牌'},
          { id:7,imgUrl:'',p_name:'TONA卫浴',p_information:'纯德系，现代卫浴品牌'}
        ]
      }
    }
    }
</script>

<style lang="scss" scoped>
  .sub-brand-t{
    margin:12px 0 12px 0;
    background-color:#fff;
    padding:2px 0 2px 15px;
    .classify{
      align-items:center;
      margin:12px 0;
      .classify-tltle{
        width:35%;
        align-items:center;
        h2{font-size:14px;color:#323232;}
        a{display:block;padding:0 20px;background-color:#f4f4f4;margin:0 12px;font-size:14px;color:#323232;border-radius:25px;height:32px;line-height:32px;}
        a:hover{background-color:red;color:#fff;}
      }
      .classify-list{
        position:relative;overflow:hidden;width:65%;
        .swiper{

        }
      }
    }
  }
  .sub-brand-b{
    .col{
      width:100%;
      position:relative;
      margin-bottom:12px;
      a{display:block;
        .b-pic{text-align:center;
          img{border-radius:2px;}
        }
        .main{
          align-items:center;
          background-color:#fff;
          border:solid 1px #f2f2f2;
          .h-pic{width:45px;height:45px;background-color:#aaa;margin:0 12px;}
          .infor{
            padding:18px 10px 18px 0;
            h2{font-size:14px;color:#323232;padding-bottom:3px;}
            p{color:#888;}
          }
        }
      }
    }
  }
</style>
