<template>
    <div class="index-banner fix">
      <van-swipe :autoplay="0">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <img  :src="item.imgUrl"/>
        </van-swipe-item>
      </van-swipe>

    </div>
</template>

<script>
    export default {
      name: "IndexBanner",
      data() {
        return {
          images:[
            { id:1,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg'},
            { id:2,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg'},
            { id:3,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg'},
            { id:4,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg'}
          ]
        }
      }
    }
</script>
