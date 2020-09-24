<template>
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
</template>

<script>
  export default {
    name: "navMenu",
    data(){
      return{
      }
    },
    methods:{
      goPage (url) {
        window.location.href = url
      },
    }
  }
</script>
