<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="p-warn">
          <router-link to="/information/list"><i class='iconfont icon-big-clock'/></router-link>
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
              <router-link to="/BrandList-1">
                <img src="../../assets/image/nav05.png">
                <span>品牌馆</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Design">
                <img src="../../assets/image/nav04.png">
                <span>优秀设计</span>
              </router-link>
            </li>
            <li>
              <router-link to="/GlobalStore">
                <img src="../../assets/image/nav03.png">
                <span>全球门店</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Investment">
                <img src="../../assets/image/nav02.png">
                <span>招商加盟</span>
              </router-link>
            </li>
            <li>
              <p @click="goPage('https://www.tona.com/Index/lists/catid/1.html')">
                <img src="../../assets/image/nav01.png">
                <span>关于我们</span>
              </p>
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
        v-bind:src="user.member_avatar"
        @click="onPerson"
      />
      <div class="info">
        <div>
          <router-link to="/person-center">
            <div class="name">{{nickname}}</div>
            <div class="id">{{userid}}</div>
          </router-link>
        </div>
        <!--<div class="sq ab">-->
          <!--<van-button round size="small" color="#f4523b">设计师会员申请</van-button>-->
          <!--<van-icon name="arrow" />-->
        <!--</div>-->

      </div>
    </div>
    <div class="order person-order-status">
      <van-goods-action-icon class="item" text="全部订单" to="order/list">
        <template #icon>
          <i class="iconfont">&#xe615;</i>
        </template>
      </van-goods-action-icon>
      <van-goods-action-icon class="item" text="待付款" :badge="user.order_nopay_count==0?'':user.order_nopay_count" @click="statePay">
        <template #icon>
          <i class="iconfont">&#xe639;</i>
        </template>
      </van-goods-action-icon>
      <van-goods-action-icon class="item" text="待收货" :badge="user.order_noreceipt_count==0?'':user.order_noreceipt_count" @click="stateSend">
        <template #icon>
          <i class="iconfont">&#xe602;</i>
        </template>
      </van-goods-action-icon>
      <van-goods-action-icon class="item" text="待评价" :badge="user.order_noeval_count==0?'':user.order_noeval_count" @click="stateMark">
        <template #icon>
          <i class="iconfont">&#xe611;</i>
        </template>
      </van-goods-action-icon>
      <van-goods-action-icon class="item" text="售后服务" to="/after-sale/list">
        <template #icon>
          <i class="iconfont">&#xe603;</i>
        </template>
      </van-goods-action-icon>
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
          <i class="iconfont icon-zuji"></i>
        </template>
      </van-cell>
    </div>
    <div class="group2">
      <van-cell title="在线客服" is-link>
        <template #icon>
          <i class="iconfont icon-zaixiankefu"></i>
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
      <van-cell title="退出登录" @click="logOut()">
        <template #icon>
          <i class="iconfont icon-tuichudenglu"></i>
        </template>
      </van-cell>
    </div>
    <div class="footer">
      <van-divider contentPosition="center" :style="{ color: '#b7b7b7', borderColor: '#ccc'}">我是有底线的</van-divider>
    </div>
  </div>
</template>

<script>
import { getMemberInfo,setMemberLogout } from '../../api/memberInfo'
import { Dialog } from 'vant'
export default {
  name: "",
  data(){
    return{
      user: {},
      isActive : false,
      isShow : true,
    }
  },
  created: function () {
    this.time = new Date().getTime();

    if($cookies.get('user_info')){
      getMemberInfo().then(
        response => {
          console.log(response)
          if (response && response.result.member_info) {
            this.user = response.result.member_info
          }
        },
        error => {}
      )
    }else{
      this.$router.push({'name': 'mima-login'})
    }


  },
  computed: {
    nickname () {
      let title = '登录/注册'
      if (true) {
        if (
          this.user &&
          typeof this.user !== 'undefined' &&
          JSON.stringify(this.user) !== '{}'
        ) {
          if (this.user.member_truename) {
            title = this.user.member_truename
          } else if (this.user.member_name) {
            title = this.user.member_name
          }
        }
      }
      return title
    },
    userid(){
      let title = 'ID:'
      if(true){
         if (
           this.user &&
           typeof this.user !== 'undefined' &&
           JSON.stringify(this.user) !== '{}'
         ) {
           title = 'ID:'+this.user.member_id
         }
         return title
      }

    }
  },
  methods:{
    onPerson() {
      this.$router.push({'name': 'person-center'})
    },
    logOut(){

      Dialog.confirm({
        title: '退出',
        message: '确认退出登录',
      }).then(() => {
        this.dologOut()
      }).catch(() => {

      });

    },
    dologOut(){
      let username = $cookies.get('username')
      setMemberLogout(username).then(
        response => {
          console.log(response)
        },
        error => {

        }
      )
    },
    statePay(){
      this.$router.push({path:'/order/list?tab=b'});
    },
    stateSend(){
      this.$router.push({path:'/order/list?tab=d'});
    },
    stateMark(){
      this.$router.push({path:'/order/list?tab=e'});
    },
    goPage (url) {
      window.location.href = url
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  .user {
    padding: 15px;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    .info {
      margin-left: 12px;
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
        font-size:16px;
        color: #363636;
      }
      .id {
        color: #888;
        font-size:13px;
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
      font-size: 15px;
      color: #888;
    }
  }
  .group1,
  .group2 {
    margin-bottom:12px;
    .van-cell {
      font-size: 15px;
      line-height:1.8;
      align-items:center;
      padding:8px 15px;
      .van-cell__right-icon {
        font-size: 18px;
        color:#b7b7b7;
      }
      .iconfont{font-size:20px;padding-right:8px;}
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
