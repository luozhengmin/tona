<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          我的订单
        </div>
      </div>
    </div>
    <van-tabs color="#f4523b" class="my-order" v-model="activeName">
      <van-tab title="全部" name="-1">
        <div class="list">
          <div v-if="list.length==0" class="empty">
            <div>
              <img src="../../../assets/image/empty-1.png" />
            </div>
            <div>暂无相关订单记录</div>
          </div>
          <div class="product-card" v-for="(itemall, i) in list" :key="i">
            <div class="store">
              <span>TONA官方旗舰店</span>
              <span class="status">等待买家确认</span>
            </div>
            <div class="product" v-for="(item, j) in list.order_list" :key="j">
              <van-card thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
                <template slot="title">
                  <div class="title">
                    <span>TONA-拉米娜浴室柜</span>
                    <div>￥45.9</div>
                  </div>
                </template>
                <template slot="desc">
                  <div class="desc num">
                    <span></span>
                    <span>x 2</span>
                  </div>
                  <div class="desc"></div>
                </template>
              </van-card>
            </div>
            <div class="bottom">
              <div class="info">退款待处理</div>
              <div class="total">
                <span>共1件商品</span>
                <span>合计￥45.9</span>
              </div>
              <div class="btn">
                <van-button plain size="small" round to="/order/evaluate">评价</van-button>
                <van-button plain size="small" round>查看物流</van-button>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待付款" name="10">
        <div class="list" >
          <div v-if="listpay.length==0" class="empty">
            <div>
              <img src="../../../assets/image/empty-1.png" />
            </div>
            <div>暂无相关订单记录</div>
          </div>
          <div class="product-card" v-for="(itemall, i) in list" :key="i">
            <div class="store">
              <span>TONA官方旗舰店</span>
              <span class="status">等待买家确认</span>
            </div>
            <div class="product" v-for="(item, j) in list.order_list" :key="j">
              <van-card thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
                <template slot="title">
                  <div class="title">
                    <span>TONA-拉米娜浴室柜</span>
                    <div>￥45.9</div>
                  </div>
                </template>
                <template slot="desc">
                  <div class="desc num">
                    <span></span>
                    <span>x 2</span>
                  </div>
                  <div class="desc"></div>
                </template>
              </van-card>
            </div>
            <div class="bottom">
              <div class="info">退款待处理</div>
              <div class="total">
                <span>共1件商品</span>
                <span>合计￥45.9</span>
              </div>
              <div class="btn">
                <van-button plain size="small" round to="/order/evaluate">评价</van-button>
                <van-button plain size="small" round>查看物流</van-button>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待发货" name="20">
        <div class="list">
          <div v-if="listsend.length==0" class="empty">
            <div>
              <img src="../../../assets/image/empty-1.png" />
            </div>
            <div>暂无相关订单记录</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待收货" name="30">
        <div class="list">
          <div v-if="listreceive.length==0" class="empty">
            <div>
              <img src="../../../assets/image/empty-1.png" />
            </div>
            <div>暂无相关订单记录</div>
          </div>

        </div>
      </van-tab>
      <van-tab title="待评价" name="40">
        <div class="list">
          <div v-if="listevaluate.length==0" class="empty">
            <div>
              <img src="../../../assets/image/empty-1.png" />
            </div>
            <div>暂无相关订单记录</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Toast } from "vant";
import { memberOrderList } from "../../../api/memberOrderinfo.js"
export default {

  data() {
    return {

      value: "",
      showHistory: false,
      list: [{}],
      listpay: [],
      listsend: [],
      listreceive: [],
      listevaluate: [],
      page: 1,   //当前页数
      perpage: 10, //每页数量
      activeName:"-1"

    };
  },
  created () {
    this.getOrderList(true)
  },
  mounted(){
    this.showTabs();
  },
  methods: {
    showTabs(){
      if(this.$route.query.tab!=null){
        this.activeName = this.$route.query.tab;
      }
    },
    onSearch() {},
    onSubmit() {},
    getOrderList() {  //获取订单列表
      var data  = {
        'page': this.page,
        'state_type': this.activeName,
//        'order_key': orderkey,
        'per_page': this.perpage
      }
      if(this.activeName == '-1'){
        data.state_type = null;
      }
      memberOrderList(data).then(res => {
        console.log(res)
        if(res.result.order_group_list){
            this.list = res.result.order_group_list
          }
        }
      )
    }

  },


};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  min-height: 100%;
  .van-search__action {
    margin: 0 5px;
  }
  .list {
    height: 100%;
    .history {
      padding: 15px;
      background-color: #fff;
      .title {
        font-size: 16px;
      }
      .van-divider {
        margin: 10px 0;
      }
      .item {
        display: flex;
        align-items: center;
        padding: 5px 0;
        justify-content: space-between;
        .name {
          display: flex;
          align-items: center;
        }
        span {
          color: #888888;
          margin-left: 5px;
        }
      }
    }

    .empty {
      padding: 50px 15px;
      font-size: 16px;
      color: #b7b7b7;
      text-align: center;
      img {
        margin-bottom: 20px;
      }
    }
    .product-card {
      padding: 10px 15px;
      margin-top: 15px;
      background-color: #fff;
      .store {
        padding: 15px 0;
        color: #232323;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        .status {
          color: #f4523b;
          font-size: 13px;
        }
      }
      .product {
        display: flex;
        align-items: center;
        .van-card {
          padding-left: 0;
          padding-right: 0;
          background-color: #fff;
          width: 100%;
        }
        .title {
          color: #1b1b1b;
          font-size: 15px;
          display: flex;
          span {
            flex-grow: 1;
          }
        }
        .desc {
          color: #b7b7b7;
        }
        .num {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .price {
          text-align: right;
          width: 70px;
        }
      }
      .bottom {
        text-align: right;
        color: #888;
        font-size:13px;
        .info {
          color: #f4523b;
          margin: 5px 5px;
        }
        .total {
          span {
            margin: 5px 5px;
          }
        }
        .btn {
          button {
            color: #888;
            margin: 5px 5px;
            font-size:13px;
          }
        }
      }
    }
  }
}
</style>
