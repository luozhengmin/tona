<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="p-warn">
          <i class='iconfont icon-big-clock'/>
        </div>
        <div class="head-logo">
          我的
        </div>
        <div class="menu-ico" v-bind:class="{active:isActive}" v-on:click="isActive=!isActive">
          <span></span>
        </div>
      </div>
      <transition name="van-slide-down">
        <div class="slideNav" v-if="isActive">
          <ul class="ab fix">
            <li>
              <router-link to="/BrandList">
                <i class="iconfont bg-7">&#xe7ae;</i>
                <span>品牌馆</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Design">
                <i class="iconfont bg-7">&#xe508;</i>
                <span>优秀设计</span>
              </router-link>
            </li>
            <li>
              <router-link to="/GlobalStore">
                <i class="iconfont bg-7">&#xe7b9;</i>
                <span>全球门店</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Investment">
                <i class="iconfont bg-7">&#xe6b5;</i>
                <span>招商加盟</span>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="iconfont bg-7">&#xe602;</i>
                <span>关于我们</span>
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
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
        <div class="sq ab">
          <van-button round size="small" color="#f4523b">设计师会员申请</van-button>
          <van-icon name="arrow" />
        </div>

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
      <van-cell title="我的积分" is-link to="/integral/index">
        <template #icon>
          <i class="iconfont">&#xe74e;</i>
        </template>
      </van-cell>
      <van-cell title="地址管理" is-link to="/address-list">
        <template #icon>
          <i class="iconfont">&#xe614;</i>
        </template>
      </van-cell>
      <van-cell title="收藏夹" is-link to="/collect">
        <template #icon>
          <i class="iconfont">&#xe628;</i>
        </template>
      </van-cell>
      <van-cell title="浏览足迹" is-link to="foot/list">
        <template #icon>
          <i class="iconfont">&#xe62c;</i>
        </template>
      </van-cell>
    </div>
    <div class="group2">
      <van-cell title="在线客服" is-link>
        <template #icon>
          <i class="iconfont">&#xe60a;</i>
        </template>
      </van-cell>
      <van-cell title="帮助中心" is-link to="/help">
        <template #icon>
          <i class="iconfont">&#xe7e5;</i>
        </template>
      </van-cell>
      <van-cell title="意见反馈" is-link to="/feedback/edit">
        <template #icon>
          <i class="iconfont">&#xe6f3;</i>
        </template>
      </van-cell>
    </div>
    <div class="footer">
      <van-divider contentPosition="center" textColor="#000" bordercolor="#000">我是有底线的</van-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data(){
    return{
      isActive:false,
    }
  }
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
    margin-bottom: 12px;
    .info {
      margin-left: 15px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .sq{
        font-size:16px;
        align-items:center;
        .van-icon{
          margin-right:-4px;
          color:#b7b7b7;
        }
      }
      .name {
        padding-bottom:3px;
        font-size:16px;
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
    margin-bottom: 12px;
    .item {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 14px;
      color: #888888;
    }
  }
  .group1,
  .group2 {
    margin-bottom: 12px;
    .van-cell {
      font-size: 14px;
      line-height:1.8;
      align-items:center;
      .van-cell__right-icon {
        font-size: 18px;
        color:#b7b7b7;
      }
      .iconfont{font-size:18px;padding-right:8px;}
      .van-icon{margin-right:-4px;}
    }
  }
  .footer {
    padding:5px 0 15px 0;
    .van-divider {
      width: 230px;
      margin: auto;
      .van-divider::after, .van-divider::before{
        border-color:#e4e4e4;
      }
    }
  }
}
.p-warn{position:absolute;right:50px;top:9px;}
.p-warn i{font-size:22px;color:#fff;}
.p-warn:after{width:6px;height:6px;background-color:#f4523b;content:'';display:block;position:absolute;top:9px;right:2px;
  border-radius:50%;
}
</style>
