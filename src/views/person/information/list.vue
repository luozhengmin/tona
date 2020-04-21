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
        <van-cell value="8" is-link center label="查看与客服的沟通记录">
          <template #title>
            <span class="custom-title">在线客服</span>
          </template>
          <template #icon>
            <i class="iconfont">&#xe61b;</i>
          </template>
        </van-cell>
        <van-cell value="8" is-link center label="你的地球福利来啦">
          <template #title>
            <span class="custom-title">活动消息</span>
          </template>
          <template #icon>
            <i class="iconfont">&#xe629;</i>
          </template>
        </van-cell>
        <van-cell value="8" is-link center label="秒杀专区暂时下线公告">
          <template #title>
            <span class="custom-title">系统消息</span>
          </template>
          <template #icon>
            <i class="iconfont">&#xe6cb;</i>
          </template>
        </van-cell>
        <van-cell value="8" is-link center label="您有一条客户留言">
          <template #title>
            <span class="custom-title">私信</span>
          </template>
          <template #icon>
            <i class="iconfont">&#xe656;</i>
          </template>
        </van-cell>
      </div>
    </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return{

      }
    }

  }
</script>

<style scoped>
  .container{background-color:#f7f7f7;height:100%;}
</style>
