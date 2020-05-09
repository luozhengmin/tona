<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          {{title}}
        </div>
      </div>
    </div>
    <div class="q-list">
      <div class="item" v-for="(itemdetail,i) in ArticleData" :key="i">
        <!-- <h3>{{title}}</h3> -->
        <div v-html="itemdetail.article_content"></div>
      </div>
    </div>
  </div>
</template>


<script>
  import { getArticleinfo,getHelpCenter  } from '../../api/Articleclass'
  export default {
    name:'',
    data(){
      return{
        ArticleData:[],
        article_id : '',
        title: '',
        message: ''
      }
    },
    created: function () {
        this.article_id = this.$route.query.id
        console.log(this.article_id);
        getHelpCenter(this.article_id).then(
          response => {
            console.log(response)
            this.ArticleData = response.result.article_list
            this.title = response.result.article_type_name
          },
          error => {}
        )

    },
    mounted:function(){

    },
  };
</script>

<style lang="scss" scoped>
.container {
  .q-list {
    padding: 15px;
    line-height: 24px;
    .item {
      padding: 10px 0;
      h3 {
        font-size: 16px;
        font-weight: bolder;
        color: #323232;
        padding: 10px 0;
      }
      div {
        color: #323232;
        font-size: 15px;
      }
    }
  }
}
</style>
