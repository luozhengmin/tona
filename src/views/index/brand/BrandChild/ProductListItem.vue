<template>
  <div class="list">
    <van-row gutter="15">
      <van-col span="12" style="margin-bottom:15px" v-for="item in products " :key="item.goods_id">
        <div class="prod">
          <div>
            <img :src="item.goods_image_url" />
          </div>
          <div class="title">{{item.goods_name}}</div>
          <div class="desc">{{item.goods_advword}}</div>
          <div class="bottom">
            <div>
              <span class="fuhao">￥</span>
              {{item.goods_price}}
            </div>
            <div class="icon">
              <van-icon name="cart" />
            </div>
          </div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
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
      font-size: 15px;
      color: #323232;
      padding: 10px 15px 5px 15px;
    }
    .desc {
      padding: 0 15px 10px 15px;
      color: #888;
      font-size: 13px;
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
</style>
