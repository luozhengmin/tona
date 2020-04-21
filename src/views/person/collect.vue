<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          收藏夹
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
    <div class="collect-list">
      <van-tabs v-model="active" color="#f4523b">
        <van-tab title="设计方案">
          <div v-if="list.length==0" class="empty">
            <div>
              <img src="../../assets/image/empty-1.png" />
            </div>
            <div>对不起，您还没有设计方案哦！</div>
          </div>
          <div class="list">
            <div class="card" v-for="i in 3" :key="i">
              <van-image width="100%" :src="require('../../assets/image/prd-1.jpg')" />
              <div class="info">
                <div class="title">GDC Award 2019 评审奖 获奖作品</div>
                <div class="meta">韵华茶几 | 原创设计</div>
              </div>
              <van-divider />
              <div class="desc">
                <div class="left">
                  <van-image width="35px" height="35px" round fit="cover" src="src" />
                  <span>数码党</span>
                </div>
                <div>
                  <i class="fa fa-eye"></i>15402
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="商品">
          <div v-if="list.length==0" class="empty">
            <div>
              <img src="../../assets/image/empty-1.png" />
            </div>
            <div>对不起，您还没有收藏商品哦！</div>
          </div>
          <div class="list">
            <van-row gutter="15">
              <van-col span="12" style="margin-bottom:15px" v-for="i in 4 " :key="i">
                <div class="prod">
                  <div>
                    <img src="../../assets/image/prod-2.jpg" />
                  </div>
                  <div class="title">欧式悬挂式浴室柜</div>
                  <div class="desc">45度角双抽拉手设计</div>
                  <div class="bottom">
                    <div>
                      <span class="fuhao">￥</span>2580.00
                    </div>
                    <div class="icon">
                      <van-icon name="cart" />
                    </div>
                  </div>
                </div>
              </van-col>
            </van-row>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive:false,
      active: 0,
      list: [{}]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  min-height: 100%;
  .empty {
    padding: 50px 15px;
    font-size: 16px;
    color: #b7b7b7;
    text-align: center;
    img {
      margin-bottom: 20px;
    }
  }
  .list {
    height: 100%;
    padding: 15px;
    .card {
      background-color: #fff;
      margin-bottom: 12px;
      .van-divider{margin:12px 0;border-color:#eee;}
      .info {
        padding: 0 15px;
        .title {
          font-size: 16px;
          color: #323232;
          margin-bottom: 5px;
        }
        .meta{font-size:14px;}
      }
      .desc {
        padding: 0 12px 10px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #888;
        .left {
          display: flex;
          align-items: center;
          span {
            margin-left: 10px;
          }
        }
      }
    }
    .prod {
      background-color: #fff;
      .title {
        font-size: 16px;
        color: #323232;
        padding: 10px 15px 5px 15px;
      }
      .desc {
        padding: 0 15px 10px 15px;
        color: #888;
      }
      .bottom {
        padding: 0 15px 10px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #f4523b;
        font-size: 20px;
        .fuhao {
          font-size: 12px;
        }
        .icon {
          width: 30px;
          height: 30px;
          background-color: #323232;
          color: #fff;
          border-radius: 100%;
          text-align: center;
          line-height: 36px;
          font-size: 16px;
        }
      }
    }
  }
}

</style>
