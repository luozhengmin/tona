  <template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          订单详情
        </div>
      </div>
    </div>
    <div class="jy">
      <span class="status">
        <van-icon name="warning-o" />等待卖家付款
      </span>
      <span class="status">
        <van-icon name="clock-o" />剩余59:50
      </span>
    </div>
    <div class="contact fix ab">
      <div class="add-cir ab">
        <van-icon name="location" color="#fff" size="20" />
      </div>
      <div class="address fix">
        <div class="top">
          <span>飞扬</span>
          <span>133****8795</span>
        </div>
        <div class="bottom">
          <span>广东省深圳市南山区科兴科学园</span>
        </div>
      </div>
    </div>
    <div class="card-list">
      <div class="product-card">
        <div class="store">TONA官方旗舰店</div>
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
              <div class="desc"></div>
            </template>
          </van-card>
        </div>
        <van-field readonly input-align="right" label="商品合计" value="￥1200.00" />
        <van-field readonly input-align="right" label="运费" value="￥0.00" />
        <van-field readonly input-align="right" label="优惠券" value="￥0.00" />
        <van-field readonly input-align="right" label="积分抵扣" value="￥0.00" />
        <van-field readonly input-align="right" label="实付款">
          <template #right-icon>
            <span class="real">￥1200</span>
          </template>
        </van-field>
      </div>
    </div>

    <div class="order-info">
      <div class="title">订单信息</div>
      <div class="split"></div>
      <div class="item">
        发票类型：
        <span>纸质发票</span>
      </div>
      <div class="item">
        发票抬头：
        <span>Windir</span>
      </div>
      <div class="item">
        发票内容：
        <span>日用品</span>
      </div>
    </div>

    <div class="order-info" style="padding-bottom:72px;">
      <div class="title"></div>
      <div class="item" style="display:flex;align-items:center;justify-content: space-between;">
        <div>
          订单编号：
          <span>123456789102345</span>
        </div>
        <van-button plain size="small" round>复制</van-button>
      </div>
      <div class="item">
        创建时间：
        <span>2020-02-02 02:02:02</span>
      </div>
      <div class="item">
        提交时间：
        <span>2020-02-02 02:02:02</span>
      </div>
      <div class="item">
        付款时间：
        <span>2020-02-02 02:02:02</span>
      </div>
      <div class="item">
        成交时间：
        <span>2020-02-02 02:02:02</span>
      </div>
      <div class="item">
        支付方式：
        <span>余额支付</span>
      </div>
    </div>

    <div class="bottom-bar">
      <van-button plain size="small" round>删除订单</van-button>
      <van-button plain size="small" round>重新购买</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "pay-detail",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  min-height: 100%;
  .jy {
    background-image: url("../../../assets/image/jy-bg-1.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 16px 15px;
    font-size: 16px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    i {
      margin-right: 5px;
      color: #fff;
    }
    .status {
      display: flex;
      align-items: center;
    }
  }
  .contact {
    background-color: #fff;
    padding: 20px 15px;
    margin-bottom: 15px;
    align-items:center;
    .top {
      font-size: 16px;
      font-weight: bolder;
      color: #232323;
      display: flex;
      align-items: center;
      span {
        margin-right:10px;
      }
    }
    .bottom {
      font-size: 14px;
      color: #b7b7b7;
      display: flex;
      align-items: center;
      padding: 5px 0;
    }
  }
  .card-list {
    .product-card {
      padding: 10px 15px;
      margin-bottom: 15px;
      background-color: #fff;
      .store {
        padding: 15px 0;
        color: #232323;
        font-size: 16px;
      }
      .product {
        display: flex;
        align-items: center;
        .van-card {
          padding-left: 0;
          padding-right: 0;
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
      .van-field {
        padding:4px 0;
        padding-left: 0;
        padding-right: 0;
        .van-field__control {
          color: #b7b7b7;
        }
      }
      .van-cell:not(:last-child)::after {
        border: 0;
      }
      .real {
        font-size: 18px;
        color: #f4523b;
      }
    }
  }
  .order-info {
    background-color: #fff;
    margin-bottom: 15px;
    padding-bottom:15px;
    .title {
      font-size: 16px;
      padding: 0 16px;
      padding-top: 16px;
    }
    .item {
      color: #323232;
      padding: 5px 15px;
      font-size: 14px;
      span {
        color: #888888;
      }
    }
  }
  .bottom-bar {
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 15px;
    text-align: right;
    background-color: #fff;
    border-top:solid 1px #eee;
    button {
      margin: 0 5px;
      color: #888888;
      font-size:13px;
    }
  }
}

.van-card {
  background-color: #fff;
  flex-grow: 1;
}
.van-card__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.split{width:100%;margin:14px 0 10px 0;height:1px;background-color:#eee;}
.add-cir{width:28px;height:28px;border-radius:50%;background-color:#f4523b;margin-right:12px;align-items:center;justify-content:center;}
.address{width:calc(100% - 40px);}
</style>
