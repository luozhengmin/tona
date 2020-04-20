<template>
    <div class="index-banner fix">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <a :href="item.index_link"><img  :src="item.imgUrl"/></a>
        </van-swipe-item>
      </van-swipe>

    </div>
</template>

<script>
    export default {
      name: "IndexBanner",
      props:{
        images:{
          type:Array,
          default:[],
        }
      },
      data() {
        return {
        }
      }
    }
</script>
