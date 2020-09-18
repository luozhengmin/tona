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

        <div v-if="systemList.length==0" class="empty">
          <div>
            <img src="../../../assets/image/empty-1.png" />
          </div>
          <div>当前无记录！</div>
        </div>
        <van-list
          v-model="loading"
          :finished="finished"
          @load="getSystemList"
          :offset="50"
          finished-text="没有更多了"
        >
        <div class="active-item" v-for="(item,index) in systemList" :key="index">
          <time>{{item.message_time}}</time>
          <div class="active-main">
            <div class="title ab">
              <h2 class="ac">{{item.from_member_name}}</h2>
              <span></span>
            </div>
            <p>{{item.message_body}}</p>
          </div>
          <!--<div class="active-link">-->
            <!--<router-link class="ab" :to="{name:'information-detail',query:{id:item.id}}">-->
              <!--<span class="ac">查看详情</span><van-icon name="arrow" />-->
            <!--</router-link>-->
          <!--</div>-->
        </div>
        </van-list>
      </div>
    </div>
</template>

<script>
  import { getMemberMessageList } from '../../../api/memberMessage'
  export default {
    name: "system",
    data(){
      return{
        systemList:[],
        finished:false,
        loading:false,
        page: 1,
        per_page: 10,
        pagetotal:0
      }
    },
    created() {
      this.getSystemList()
    },
    methods: {
        getSystemList(){
          getMemberMessageList(this.page,this.per_page).then(res => {
              this.systemList = res.result.notice_list
              this.page_total = res.result.page_total;
              if (this.page < this.page_total) {
                this.page++;
              } else {
                this.finished = true;
              }
              this.loading = false;
            }
          )
        }
    }

  }
</script>

<style lang="scss" scoped>
  .container{
    background-color:#f7f7f7;min-height:100%;
    .active-list{
      padding:12px 15px;
      .active-item{
        margin-bottom:12px;
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

  .empty {
    padding: 50px 15px;
    font-size: 16px;
    color: #b7b7b7;
    text-align: center;
    img {
      margin-bottom: 20px;
    }
  }
</style>
