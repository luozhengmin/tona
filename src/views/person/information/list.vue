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
            <van-icon name="point-gift-o" />
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

</style>
