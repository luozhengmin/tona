<template>
    <div class="container">
      <div class="head fix">
        <div class="wrap fix">
          <div class="head-ss fix">
            <van-icon name="arrow-left" @click="$router.go(-1)"/>
          </div>
          <div class="head-logo">
            系统消息
          </div>
        </div>
      </div>
      <div class="active-list fix">
        <div class="active-item" v-for="(item,index) in systemList" :key="index">
          <time>今天 10:00</time>
          <div class="active-main">
            <div class="title ab">
              <h2 class="ac">你的地球日优惠福利来啦</h2>
              <span></span>
            </div>
            <p>部分绿色环保商品限时免单，饮食、居家类目等满减。福利天天有！最高直减160元，赶紧来看看吧！</p>
          </div>
          <div class="active-link">
            <router-link class="ab" :to="{name:'information-active-detail',query:{id:item.id}}">
              <span class="ac">查看详情</span><van-icon name="arrow" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { getMemberMessageList } from '../../../api/memberMessage'
  export default {
    name: "system",
    data(){
      return{
        systemList:[
        ]
      }
    },
    created() {
      this.getSystemList()
    },
    methods: {
        getSystemList(){
          getMemberMessageList().then(
            response => {
              this.systemList = response.result.notice_list
            },
            error => {}
          )
        }
    }

  }
</script>

<style lang="scss" scoped>
  .container{
    background-color:#f7f7f7;heihgt:100%;
    .active-list{
      padding:12px 15px;
      .active-item{
        margin-bottom:8px;
        time{font-size:14px;color:#bcbcbc;text-align:center;display:block;margin-bottom:6px;}
        .active-main{
          background-color:#fff;
          padding:13px;
          .title{
            align-items:center;
            margin-bottom:6px;
            h2{font-size:15px;color:#383838;}
            span{width:8px;height:8px;border-radius:50%;background-color:#f4523b;display:block;}
          }
          p{font-size:13px;color:#383838;}
        }
      }
      .active-link{
        background-color:#fff;
        padding:6px 13px;
        border-top:solid 1px #eee;
        a{
          color:#909090;font-size:13px;
          .van-icon{font-size:16px;line-height:22px;margin-right: -5px;}
        }
      }
    }
  }
</style>
