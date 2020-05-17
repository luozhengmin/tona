<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          我的积分
        </div>
        <div class="p-btn">
          <router-link to="/integral/record"><i class="iconfont bg-7">&#xe7e5;</i></router-link>
        </div>
      </div>
    </div>
    <div class="top">
      <div class="icon">
        <img src="../../../assets/image/jf.png" />
      </div>
      <div class="count">1000</div>
      <div style="margin-top: -13px;">当前积分</div>
    </div>
    <div class="title">
      <span>近30天记录</span>
      <router-link to="/integral/list"><span>更多</span></router-link>
    </div>
    <div class="list">
      <van-cell v-for="(itemscore,i) in scoreList" :key="i" :title="itemscore.pl_desc" size="large" :label="itemscore.addtimetext">
        <template>
          <span class="value">+{{itemscore.pl_points}}</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { getMemberScoreList } from '../../../api/memberInfo'
export default {
  name: "",
  data() {
    return {
      active: 2,
      scoreList: [],
      page:1,
      mx:0
    };
  },
  created: function () {

      getMemberScoreList(this.page,this.mx).then(
        response => {
          console.log(response)
          this.scoreList = response.result.log_list
        },
        error => {}
      )

  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  min-height: 100%;
  .top {
    background-image: url("../../../assets/image/jy-bg-3.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 27px 15px;
    color: #fff;
    text-align: center;
    font-size: 16px;
    .icon {
      width: 40px;
      margin: auto;
      img {
        display: block;
      }
    }
    .count {
      font-size: 32px;
    }
  }
  .title {
    font-size: 15px;
    padding:12px 15px;
    color: #323232;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
      span{color:#909090;}
    }
  }
  .list {
    background-color: #fff;
    .van-cell{
      border-bottom:solid 1px #eee;
      .van-cell__title{font-size:15px;}
      .van-cell__label{font-size:13px;margin-top:1px;}
    }
    .van-cell:not(:last-child)::after{border:none;}
    .value {
      font-size: 18px;
      color: #f4523b;
      line-height: 45px;
    }
  }
}
</style>
