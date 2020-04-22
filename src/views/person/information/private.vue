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
          <div class="p-btn">
            <router-link to="/integral/record">清空</router-link>
          </div>
        </div>
      </div>
      <div class="private-list">
        <div class="private-item" v-for="i in 4" :key="i">
          <van-image
            round
            fit="cover"
            width="55px"
            height="55px"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="info ab ac">
            <div class="sx">
              <div class="name">MIUMIU</div>
              <div class="id">hi，我的装修需求是：订单，联系电话...</div>
            </div>
            <div class="sq">
              <time>1分钟前</time>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "private",
    data(){
      return{

      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    background-color:#f7f7f7;
    height:100%;
    .private-item{
      padding:15px 15px 12px 15px ;
      background-color: #fff;
      display: flex;
      align-items: center;
      border-bottom:solid 1px #eee;
      .info {
        margin-left: 12px;
        justify-content: space-between;
        .sx{padding-right:4%;}
        .sq{font-size:13px;color:#b7b7b7;width:20%;text-align:right;}
        .name {font-size:15px;color: #363636;line-height: normal;}
        .id {
          color: #888;
          font-size:13px;
        }
      }
    }
  }
</style>
