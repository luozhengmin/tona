<template>
    <div class="container">
      <div class="head fix">
        <div class="wrap fix">
          <div class="head-ss fix">
            <van-icon name="arrow-left" @click="$router.go(-1)"/>
          </div>
          <div class="head-logo">
            活动消息
          </div>
        </div>
      </div>
      <div class="active-list fix">
        <div class="active-item" v-for="(itemactive,index) in activeList" :key="index">
          <time>{{itemactive.zhuanti_start_time}}</time>
          <div class="active-main">
            <div class="title ab">
              <h2 class="ac">{{itemactive.zhuanti_name}}</h2>
              <van-tag round>{{itemactive.status_str}}</van-tag>
            </div>
            <div class="pic">
              <img :src="itemactive.zhuanti_image"/>
            </div>
            <p>{{itemactive.zhuanti_describe}}</p>
          </div>
          <div class="active-link">
            <router-link class="ab" :to="{name:'information-active-detail',query:{id:itemactive.zhuanti_id}}">
              <span class="ac">查看详情</span><van-icon name="arrow" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { getMemberMessageList,getMemberActiveList } from '../../../api/memberMessage'
  export default {
    name: "active",
    data(){
      return{
        activeList:[
        ],
        hasmore:false,

      }
    },
    created() {
      this.getActiveList()
    },
    methods: {
        getActiveList(){
          getMemberActiveList().then(
            response => {
              this.activeList = response.result.list
              console.log(response)
            },
            error => {

            }
          )
        }
    }

  }
</script>

<style lang="scss" scoped>
  .container{
    background-color:#f7f7f7;
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
            h2{font-size:15px;color:#383838;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;}
            .van-tag{padding:4px 12px;background-color:#f4523b;font-size:13px;}
          }
          .pic{margin:12px 0;}
          p{font-size:14px;color:#383838;}
        }
      }
      .active-link{
        background-color:#fff;
        padding:6px 13px;
        border-top:solid 1px #eee;
        a{
          color:#909090;font-size:14px;
          .van-icon{font-size:16px;line-height:22px;margin-right: -5px;}
        }
      }
    }
  }

</style>
