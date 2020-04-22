<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          浏览足迹
        </div>
        <div class="p-btn" @click="showAction">
          <router-link to="">清空</router-link>
        </div>
      </div>
    </div>
    <div>
      <div v-if="list.length==0" class="empty">
        <div>
          <img src="../../../assets/image/empty-1.png" />
        </div>
        <div>对不起，您还没有收藏商品哦！</div>
      </div>
      <div class="list">
        <van-row gutter="15">
          <div class="date-item"  v-for="j in 3 " :key="j">
            <div class="date">03月5日</div>
            <van-col span="12" style="margin-bottom:15px" v-for="i in 4 " :key="i">
              <div class="prod">
                <div>
                  <img src="../../../assets/image/prod-2.jpg" />
                </div>
                <div class="title">欧式悬挂式浴室柜</div>
                <div class="desc">45度角双抽拉手设计</div>
                <div class="bottom">
                  <div>
                    <span class="fuhao">￥</span>2580.00
                  </div>
                </div>
              </div>
            </van-col>
          </div>
        </van-row>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '24%' }" class="track">
      <div class="track-confirm">
        <p>确定要清空浏览足迹吗？</p>
        <h2>确定</h2>
      </div>
      <div class="track-cancel" @click="onCancel">
        取消
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        active: 0,
        list: [{}],
      };
    },
    methods: {
      showAction(){
        this.show = true;
      },
      onCancel() {
        this.show = false;
      },
    },
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
    .date-item {
      .date {
        font-size: 16px;
        color: #323232;
        padding: 15px;
      }
    }
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
        font-size: 15px;
        color: #323232;
        padding: 10px 15px 5px 15px;
      }
      .desc {
        padding: 0 15px 6px 15px;
        color: #888;
        font-size:13px;
      }
      .bottom {
        padding: 0 15px 10px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #f4523b;
        font-size: 18px;
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
.track{
  color:#0076ff;
  text-align:center;
  background-color:initial;
  padding:0 15px;
  .track-confirm{
    background-color:rgba(255,255,255,0.85);
    border-radius:4px;
    margin-bottom:12px;
    p,h2{padding:12px 0;font-size:14px;}
    h2{color:#f52525;border-top:solid 1px #d5d5d5;}
  }
  .track-cancel{
    background-color:rgba(255,255,255,0.85);font-size:14px;
    padding:12px 0;
    border-radius:4px;
  }
}

</style>
