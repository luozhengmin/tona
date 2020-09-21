<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          私信
        </div>
        <div class="p-btn" @click="showAction">
          <router-link to="">清空</router-link>
        </div>
      </div>
    </div>

    <van-popup v-model="show" position="bottom" :style="{ height: '24%' }" class="track">
      <div class="track-confirm">
        <p>确定要清空信息吗？</p>
        <h2 @click="toClearbrowse">确定</h2>
      </div>
      <div class="track-cancel" @click="onCancel">
        取消
      </div>
    </van-popup>

    <div class="private-detail fix">
      <div class="detail-item ab fix">
        <div class="item">

        </div>
        <div class="time">1分钟前</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from "vant";
  export default {
    name: "private-detail",
    data(){
      return{
        show:false,
      }
    },
    methods:{
      showAction(){
        this.show = true;
      },
      onCancel() {
        this.show = false;
      },

      toClearbrowse(){

      },
      created(){
        let id = this.$route.query.id;
        this.getPrivateDetail(id)
      },
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    background-color:#f7f7f7;
    height:100%;
  }
  .track{
    color:#0076ff;
    text-align:center;
    background-color:initial;
    padding:0 15px;
    .track-confirm{
      background-color:rgba(255,255,255,0.85);
      border-radius:4px;
      margin-bottom:12px;
      p,h2{padding:12px 0;font-size:14px;}
      h2{color:#f52525;border-top:solid 1px #d5d5d5;}
    }
    .track-cancel{
      background-color:rgba(255,255,255,0.85);font-size:14px;
      padding:12px 0;
      border-radius:4px;
    }
  }
  .private-detail{
    padding:24px 15px;
  }
</style>
