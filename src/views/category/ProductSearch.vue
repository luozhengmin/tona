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

      <div  class="empty" v-if="value=0">
        <div>
          <img src="../../assets/image/empty-1.png" />
        </div>
        <div>没有找到相关的商品信息<br>
          请换一个关键词试试吧!</div>
      </div>

      <div class="list" v-if="value=0">
        <van-row gutter="15">
          <van-col span="12" style="margin-bottom:15px" v-for="i in 4 " :key="i">
            <div class="prod">
              <div>
                <img src="../../assets/image/prod-2.jpg" />
              </div>
              <div class="title">欧式悬挂式浴室柜11</div>
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

      <div class="search-word">
        <h2 class="ss-title">热门搜索</h2>
        <div class="word-list">
          <a href="">浴室柜</a>
          <a href="">智能马桶</a>
          <a href="">淋浴房淋浴房</a>
          <a href="">浴室柜</a>
          <a href="">浴室柜</a>
          <a href="">智能马桶</a>
          <a href="">淋浴房</a>
          <a href="">浴室柜</a>
        </div>
      </div>
      <div class="search-history">
        <h2 class="ss-title">搜索历史</h2>
        <div class="history-list">
          <van-cell title="浴室柜" icon="clock-o">
            <template #right-icon>
              <van-icon
                name="cross"
                style="line-height: inherit;"
              />
            </template>
          </van-cell>
          <van-cell title="浴室柜" icon="clock-o">
            <template #right-icon>
              <van-icon
                name="cross"
                style="line-height: inherit;"
              />
            </template>
          </van-cell>
          <van-cell title="浴室柜" icon="clock-o">
            <template #right-icon>
              <van-icon
                name="cross"
                style="line-height: inherit;"
              />
            </template>
          </van-cell>
        </div>
      </div>
      <div class="clear-history wrap">
        <router-link to="/ProductDetail">清除搜索历史</router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name: "ProductSearch",
    data(){
      return{
        isActive:false,
        value:''
      }
    },
    methods: {
      onSearch(val) {
        Toast(val);
      },
      goPage (url) {
        window.location.href = url
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    background-color:#f7f7f7;
    min-height:100%;
    .empty {
      padding: 50px 15px;
      font-size: 15px;
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
        margin-bottom: 15px;
        .info {
          padding: 0 15px;
          .title {
            font-size: 16px;
            color: #323232;
            margin-bottom: 5px;
          }
        }
        .desc {
          padding: 0 15px 10px 15px;
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
  .search-word{
    background-color:#fff;
    border-top:solid 1px #eee;
    padding:15px 15px;
    .word-list{
      padding:12px 0;
      a{background-color:#f7f7f7;display:inline-block;padding:6px 12px;text-align:center;margin:0 6px 6px 0;font-size:14px;color:#888;}
    }
  }
  .ss-title{font-size:15px;color:#b7b7b7;}
  .search-history{
    background-color:#fff;
    padding:15px 15px 0 15px;
    margin-top:12px;
    .van-cell{padding:10px 0;border-bottom:solid 1px #eee;color:#888;}
  }
  .clear-history{text-align:center;font-size:15px;color:#323232;padding:12px 0 12px 0;}

</style>
