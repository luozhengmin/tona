<template>
    <div class="container">
      <div class="head fix">
        <div class="wrap fix">
          <div class="head-ss fix">
            <van-icon name="arrow-left" @click="$router.go(-1)"/>
          </div>
          <div class="head-logo">
            消息中心
          </div>
        </div>
      </div>
      <div class="p-information fix">
        <van-cell is-link center label="查看与客服的沟通记录" to="/information/system">
          <template #title>
            <span class="custom-title">在线客服</span>
          </template>
          <template #icon>
            <i class="iconfont icon-zaixiankefu"></i>
          </template>
        </van-cell>
        <van-cell is-link center label="你的地球福利来啦" to="/information/active">
          <template #title>
            <span class="custom-title">活动消息</span>
          </template>
          <template #icon>
            <i class="iconfont">&#xe64a;</i>
          </template>
        </van-cell>
        <van-cell :value="messageInfo.sys_message" is-link center label="秒杀专区暂时下线公告" to="/information/system">
          <template #title>
            <span class="custom-title">系统消息</span>
          </template>
          <template #icon>
            <i class="iconfont icon-xin"></i>
          </template>
        </van-cell>
        <van-cell :value="messageInfo.per_message" is-link center label="您有一条客户留言" to="/information/private">
          <template #title>
            <span class="custom-title">私信</span>
          </template>
          <template #icon>
            <i class="iconfont icon-xitongxiaoxi"></i>
          </template>
        </van-cell>
      </div>
    </div>
</template>


<script>
  import { getMessageisreadList } from '../../../api/memberMessage'
  export default {
    name: "message",
    data(){
      return{
        messageInfo:[],
      }
    },
    created() {
      this.getMessageList()
    },
    methods: {
        getMessageList(){
          getMessageisreadList().then(
            response => {
              console.log(response)
              this.messageInfo = response.result
            },
            error => {

            }
          )
        }
    }

  }
</script>

<style scoped>
  .container{background-color:#f7f7f7;height:100%;}
</style>
