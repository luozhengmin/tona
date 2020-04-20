<template>
  <div>
    <div class="container">
      <index-head></index-head>
      <index-banner :images="images"></index-banner>
      <index-menu></index-menu>
      <index-brand></index-brand>
      <index-brand-item></index-brand-item>
      <indexDesign></indexDesign>
      <index-foot></index-foot>
    </div>
  </div>
</template>

<script>
import IndexBanner from "./IndexBanner";
import IndexMenu from "./IndexMenu";
import IndexBrand from "./IndexBrand"
import IndexFoot from "./IndexFoot";
import IndexBrandItem from "./IndexBrand-item";
import IndexDesign from "./IndexDesign"
import IndexHead from "./IndexHead.vue";
export default {
  components: {
    IndexHead,
    IndexDesign,
    IndexBrandItem,
    IndexFoot,
    IndexBrand,
    IndexMenu,
    IndexBanner,
  },
  data(){
    return{
      images:[
        { id:1,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg',index_link:'http://www.baidu.com'},
        { id:2,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg',index_link:'http://www.baidu.com'},
        { id:3,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg',index_link:'http://www.baidu.com'},
        { id:4,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg',index_link:'http://www.baidu.com'}
      ]
    }
  }

}
</script>

