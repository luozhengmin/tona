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
    <div class="active-detail wrap fix">
      <div class="detail-title">
        <h2>秒杀专区暂时下线公告</h2>
        <time>2019年1月5日 10:00</time>
      </div>

      <div class="detail-con fix">
        <p>尊敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行</p>
      </div>

    </div>
  </div>
</template>informationA

<script>
//  import { getMemberActiveDetail } from '../../../api/memberMessage'
  export default {
    name: "information-detail",
    data(){
      return{
        ctiveData:[],
        hd_id: '',
        hasmore:false,

      }
    },
//    created() {
//      this.getActiveDetail()
//    },
    mounted(){

    },
    methods: {
      getActiveDetail(){
        this.hd_id = this.$route.query.id
        getMemberActiveDetail(this.hd_id).then(
          response => {
            console.log(response)
            this.activeData = response.result
          },
          error => {

          }
        )
      }
    }

  }
</script>
<style lang="scss" scoped>
  .active-detail{
    .detail-title{
      padding:16px 12px;
      border-bottom:solid 1px #eee;
      text-align:center;
      h2{color:#383838;font-size:15px;}
      time{display:block;font-size:13px;color:#bcbcbc;}
    }
    .detail-con{
      padding-top:6px;
      p{color:#383838;font-size:13px;}
    }
  }
</style>
