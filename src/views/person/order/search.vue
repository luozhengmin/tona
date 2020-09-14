<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          搜索
        </div>
      </div>
    </div>
    <div class="s-search">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入商品关键词"
        @search="onSearch">
        <template #left-icon>
          <i class="iconfont icon-sousuo"></i>
        </template>
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
    <div class="list">
      <div class="history" v-if="showHistory">
        <div class="title">搜索历史</div>
        <div v-for="i in 5" :key="i">
          <van-divider />
          <div class="item">
            <div class="name">
              <van-icon name="clock-o" />
              <span>浴室柜</span>
            </div>
            <van-icon name="cross" />
          </div>
        </div>
      </div>
      <div v-if="list.length==0" class="empty">
        <div>
          <img src="../../../assets/image/empty-1.png" />
        </div>
        <div>没有找到相关的订单信息</div>
        <div>请换一个词再试试吧</div>
      </div>
      <div class="product-card" v-for="i in 2" :key="i">
        <div class="store">
          <span>TONA官方旗舰店</span>
          <span class="status">等待买家确认</span>
        </div>
        <div class="product" v-for="j in 2" :key="j">
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
              <!--<div class="desc">规格</div>-->
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
            <van-button plain size="small" round>提醒收获</van-button>
            <van-button plain size="small" round>查看物流</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      showHistory: false,
      list: [{}]
    };
  },
  methods: {
    onSearch() {}
  }
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
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        .status {
          color: #f4523b;
          font-size: 14px;
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
          font-size: 16px;
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
          }
        }
      }
    }
  }
}
.s-search{
  .van-search{
    padding:12px 15px;
    .van-search__action{padding:0 0 0 12px;}
    .van-search__content{
      background-color:inherit;
      padding-left:0;
      .van-cell{
        border:solid 1px #eee;
        border-radius:25px;
        padding: 5px 8px 5px 10px;
      }
    }
  }
}
</style>
