<template>
  <div class="container">
    <div class="header"></div>
    <div class="user">
      <van-image
        round
        fit="cover"
        width="55px"
        height="55px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="info">
        <div>
          <div class="name">你是夏天</div>
          <div class="id">ID：84458566</div>
        </div>
        <van-button round size="small" color="#f4523b">设计师会员申请</van-button>
      </div>
    </div>
    <div class="order person-order-status">
      <van-goods-action-icon class="item" icon="balance-list-o" text="全部订单" />
      <van-goods-action-icon class="item" icon="paid" text="待付款" info="5" />
      <van-goods-action-icon class="item" icon="logistics" text="待收货" />
      <van-goods-action-icon class="item" icon="comment-o" text="待评价" />
      <van-goods-action-icon class="item" icon="flower-o" text="售后服务" />
    </div>
    <div class="group1">
      <van-cell title="我的积分" is-link icon="location-o" />
      <van-cell title="地址管理" is-link icon="location-o" />
      <van-cell title="收藏夹" is-link icon="location-o" />
      <van-cell title="浏览足迹" is-link icon="location-o" />
    </div>
    <div class="group2">
      <van-cell title="在线客服" is-link icon="location-o" />
      <van-cell title="帮助中心" is-link icon="location-o" />
      <van-cell title="意见反馈" is-link icon="location-o" />
    </div>
    <div class="footer">
      <van-divider contentPosition="center" textColor="#000" bordercolor="#000">我是有底线的</van-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: ""
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  height: 100%;
  .user {
    padding: 15px;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .info {
      margin-left: 15px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .name {
        padding: 3px 0;
        font-size: 18px;
        color: #363636;
      }
      .id {
        color: #888888;
      }
    }
  }
  .order {
    background-color: #fff;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    .item {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 16px;
      color: #888888;
    }
  }
  .group1,
  .group2 {
    margin-bottom: 15px;
    .van-cell {
      font-size: 16px;
      line-height: 30px;
      .van-cell__left-icon,
      .van-cell__right-icon {
        font-size: 20px;
      }
    }
  }
  .footer {
    .van-divider {
      width: 230px;
      margin: auto;
    }
  }
}
</style>
