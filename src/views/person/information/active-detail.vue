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
      <div class="active-detail wrap fix">
        <div class="detail-title">
          <h2>{{activeData.zhuanti_name}}</h2>
          <time>{{activeData.zhuanti_start_time}}</time>
        </div>

        <div class="detail-con">
          <p>{{activeData.zhuanti_content}}</p>
        </div>

      </div>
    </div>
</template>

<script>
  import { getMemberActiveDetail } from '../../../api/memberMessage'
  export default {
    name: "active_detail",
    data(){
      return{
        activeData:[],
        hd_id: '',
        hasmore:false,

      }
    },
    created() {
       this.getActiveDetail()
    },
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
