<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="p-warn">
          <router-link to="">编辑</router-link>
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
                <i class="iconfont bg-7">&#xe604;</i>
                <span>关于我们</span>
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="tips">
      <van-notice-bar
        background="#ffffcc"
        color="#f4523b"
        mode="link"
        left-icon="volume-o"
      >自营商品单笔订单金额满88元可免邮费</van-notice-bar>
    </div>
    <div class="card-list">
      <div class="product-card" v-for="i in 2" :key="i">
        <div class="store">
          <van-checkbox v-model="checked" checked-color="#f4523b">TONA官方旗舰店</van-checkbox>
        </div>
        <div class="product" v-for="j in 2" :key="j">
          <van-checkbox v-model="checked" checked-color="#f4523b"></van-checkbox>
          <van-card thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
            <template slot="title">
              <div class="title">商品标题</div>
            </template>
            <template slot="desc">
              <div class="desc">颜色</div>
              <div class="desc">规格</div>
            </template>
            <template slot="price">
              <div class="price">
                <span class="fuhao">￥</span>45.9
              </div>
            </template>
            <template slot="num">
              <van-stepper v-model="value" />
            </template>
          </van-card>
        </div>
      </div>
    </div>
    <div class="like">
      <div class="title">
        <van-icon name="ellipsis" color="#f4523b" size="26" />
        <span>猜你喜欢</span>
        <van-icon name="ellipsis" color="#f4523b" size="26" />
      </div>
      <div class="like-list">
        <van-row>
          <van-col span="12" v-for="i in 4" :key="i">
            <div class="like-item">
              <div class="img">
                <van-image
                  width="130px"
                  height="130px"
                  fit="cover"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
              </div>
              <div class="prod-title">拉米娜浴室柜</div>
              <div class="price">
                <span class="fuhao">￥</span>45.9
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div style="height:105px;"></div>
    <div class="bottom-bar">
      <van-submit-bar v-if="!edit" :price="3050" button-text="结算（2）" @submit="onSubmit">
        <van-checkbox v-model="checked" checked-color="#f4523b">全选</van-checkbox>
      </van-submit-bar>
      <div class="edit-bar" v-else>
        <van-checkbox v-model="checked" checked-color="#f4523b">全选</van-checkbox>
        <div class="btns">
          <van-button plain hairline @click="share()">分享</van-button>
          <van-button plain hairline color="#f4523b" @click="del()">删除</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      isActive:false,
      checked: true,
      value: 1,
      edit: true
    };
  },
  methods: {
    onSubmit() {},
    share() {
      Toast({
        message: "分享成功",
        icon: "passed"
      });
    },
    del() {
      Toast("所选商品已删除");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  .tips{
    .van-notice-bar__right-icon {
      margin-right: -5px;
    }
  }
  .card-list {
    .product-card {
      padding: 10px 15px;
      margin-bottom: 15px;
      background-color: #fff;
      .store {
        padding: 15px 0;
        color: #b7b7b7;
        font-size: 15px;
      }
      .product {
        display: flex;
        align-items: center;
        .title {
          color: #1b1b1b;
          font-size: 16px;
        }
        .desc {
          color: #b7b7b7;
          font-size: 13px;
        }
        .price {
          color: #f4523b;
          font-size: 18px;
          .fuhao {
            font-size: 14px;
          }
        }
      }
    }
  }
  .like {
    background-color: #fff;
    padding: 0 15px;
    margin-bottom: 30px;
    .title {
      font-size: 15px;
      text-align: center;
      color: #363636;
      display: flex;
      justify-content: center;
      padding:20px 0 4px 0;
      span {
        margin: 0 20px;
      }
    }
    .like-list {
      .like-item {
        text-align: center;
        margin-bottom: 20px;
        .img {
          padding: 10px 0px;
        }
        .prod-title {
          color: #1b1b1b;
          font-size: 16px;
        }
        .price {
          color: #f4523b;
          font-size: 18px;
          .fuhao {
            font-size: 14px;
          }
        }
      }
    }
  }
  .van-submit-bar {
    bottom: 50px;
    .van-submit-bar__bar {
      padding-right: 0;
      .van-button {
        border-radius: 0;
        background: #323232;
      }
      .van-submit-bar__price {
        color: #f4523b;
      }
    }
  }
  .bottom-bar {
    .edit-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;
      padding: 9px 15px;
      position: fixed;
      width: 100%;
      bottom: 50px;
      background-color: #fff;
      .btns {
        .van-button {
          padding: 0 30px;
          height: 32px;
          line-height: 32px;
        }
      }
    }
  }
}

.van-card {
  background-color: #fff;
  flex-grow: 1;
  padding:8px 0 8px 12px;
}
.van-card__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.p-warn{
  position:absolute;right:50px;top:0;line-height:50px;
  a{
    font-size:14px;color:#fff;
  }
}
</style>
