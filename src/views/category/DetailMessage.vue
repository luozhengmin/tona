<template>
    <div>
      <div class="head fix">
        <div class="wrap fix">
          <div class="head-ss fix">
            <van-icon name="arrow-left" @click="$router.go(-1)"/>
          </div>
          <div class="head-logo">
            评价
          </div>
        </div>
      </div>
      <div class="message">
        <van-tabs v-model="active" color="#f4523b">
            <div class="message-list" v-for="(itemeva,i) in evaluateList" :key="i">
              <div class="list-item ab fix">
                <div class="m-head">
                  <img src="../../assets/image/xq01.jpg"/>
                </div>
                <div class="m-title ac">
                  <h2>小小少年</h2>
                  <p><span>颜色分类：</span>900mm盆柜+880mm铝镜柜</p>
                </div>
                <div class="m-date">
                  2020-03-06  19:56
                </div>
              </div>
              <p>柜子整体设计风格很喜欢，家里简约风格设计，所以整体很搭，下边抽屉设计的很合理非常喜欢，里面套有小抽屉，这样针对平时
                不经常使用的物品可以放到里面柜子，也比较安全！非常喜欢，客服人员非常有耐心！售后也非常到位！</p>

              <van-row gutter="5">
                <van-col span="8" v-for="i in 4" :key="i">
                  <img src="../../assets/image/xq01.jpg"/>
                </van-col>
              </van-row>
              <div class="m-service">
                <p><span>客服回复<time>（2天前）：</time></span>家里简约风格设计，所以整体很搭，下边抽屉设计的很合理非常喜欢，里面套有小抽屉，这样针对平时
                  不经常使用的物品可以放到里面柜子，也比较安全！非常喜欢</p>
              </div>

            </div>

        </van-tabs>
      </div>
    </div>
</template>

<script>
  import { getGoodsEvaluateList } from '../../api/GoodsLists'
  export default {
    name: "DetailMessage",
    data(){
      return{
        active:'',
        evaluateList:[],
        goodsid:'',
        page:'',
        perpage:'',
        type:''
      }
    },
    created(){
      this.goodsid = this.$route.query.id
      this.getGoodsEvaluate(this.goodsid)
    },
    methods: {
      getGoodsEvaluate(goodsid){
        getGoodsEvaluateList(goodsid).then(
          response => {
            console.log(response)
            this.evaluateList = response.result.goods_eval_list
          },
          error => {
            Toast(error.message)
          }
        )
      },


    }
  }
</script>

<style lang="scss" scoped>
  .message-list{
    padding:12px 15px 0 15px;
    .list-item{
      .m-head{width:32px;height:32px;margin-right:6px;margin-top:3px;
        img{border-radius:50%;}
      }
      .m-title{
        padding-right:12px;
        h2{font-size:14px;color:#323232;}
        p{color:#888;line-height:1.4;font-size:12px;}
      }
      .m-date{color:#888;}
    }
    p{padding-bottom:6px;color:#323232;font-size:14px;}
    .van-row{
      .van-col{
        margin-bottom:5px;
      }
    }
    .m-service{
      background-color:#f7f7f7;padding:6px 12px;margin-top:6px;
      p{color:#b7b7b7;font-size:12px;}
    }

  }

</style>
