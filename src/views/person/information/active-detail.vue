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
          <h2>秒杀专区暂时下线公告</h2>
          <time>2017年5月5日 10:00</time>
        </div>

        <div class="detail-con">
          <p>尊敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升
            级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带
            来的不便，敬请谅解。感谢您一如既往的支持。</p>
        </div>

      </div>
    </div>
</template>

<script>
  export default {
    name: "active-detail",

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
