<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          售后申请
        </div>
        <div class="p-btn">
          <router-link to=""><i class="iconfont bg-7">&#xe603;</i></router-link>
        </div>
      </div>
    </div>
    <div class="s-search">
      <van-search
        v-model="value"
        show-action
        shape="round"
        placeholder="请输入商品关键词或用户名"
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
      <div v-if="list.length==0" class="empty">
        <div>
          <img src="../../../assets/image/empty-1.png" />
        </div>
        <div>暂无相关订单记录</div>
      </div>
      <div class="product-card" v-for="i in 2" :key="i">
        <div class="store">
          <span>TONA官方旗舰店</span>
          <span class="status">等待买家确认</span>
        </div>
        <div class="product">
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
          <div class="info">退款待处理 等待卖家处理</div>
          <div class="btn">
            <van-button plain size="small" round to="/order/evaluate">评论</van-button>
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
  .s-search {
    .van-search{
      padding:15px 15px;
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
      font-size: 15px;
      color: #b7b7b7;
      text-align: center;
      img {
        margin-bottom:6px;
      }
    }
    .product-card {
      padding: 10px 15px;
      margin-top: 12px;
      background-color: #fff;
      .store {
        padding: 15px 0;
        color: #232323;
        font-size: 15px;
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
          font-size: 13px;
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
          color: #323232;
          background-color: #f7f7f7;
          padding: 10px;
          text-align: left;
          font-size: 13px;
        }
        .total {
          span {
            margin: 5px 5px;
          }
        }
        .btn {
          margin-top: 10px;
          button {
            color: #888;
            margin: 5px 5px;
            font-size:13px;
            padding:0 16px;
          }
        }
      }
    }
  }
}
</style>
