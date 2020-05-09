<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          帮助中心
        </div>
      </div>
    </div>
    <div class="top">
      <div class="item">
        <i class="iconfont">&#xe61b;</i>
        <span>在线客服</span>
      </div>
      <div class="split"></div>
      <div class="item">
        <i class="iconfont">&#xe60a;</i>
        <span>客服热线</span>
      </div>
    </div>
    <div class="q-title">问题分类</div>
    <div class="q-list" v-for="(itemhelp, i) in helpList" :key="i">
      <van-cell :title="itemhelp.article_title"  is-link :to="{path:'/help-detail',query: {id: itemhelp.ac_id}}" />
    </div>
  </div>
</template>

<script>
  import { getHelpCenter  } from '../../api/Articleclass'
  export default {
    name:'',
    data(){
      return{
        helpList:[],
        ac_id : 2
      }
    },
    created: function () {

        getHelpCenter(this.ac_id).then(
          response => {
            console.log(response.result.article_list)
            this.helpList = response.result.article_list

          },
          error => {}
        )

    },
  };
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  .top {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    .item {
      font-size:15px;
      color: #323232;
      display: flex;
      align-items: center;
      flex-direction: column;
      i {
        font-size:32px;
        color: #888888;
        padding-bottom:6px;
        line-height:normal;
        font-weight: bold;
      }
    }
    .split {
      height: 65px;
      width: 1px;
      background-color: #eee;
    }
  }
  .q-title {
    padding:12px 15px;
    font-size:15px;
    color: #909090;
  }
  .q-list {
    background-color: #fff;
    .van-cell {
      font-size: 14px;
      padding: 12px 15px;
    }
    .van-cell:not(:last-child)::after{border-bottom:solid 1px #eee;}
  }
}
</style>
