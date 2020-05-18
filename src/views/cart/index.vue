<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="p-warn">
          <a v-if="!edit" @click="edit=true">编辑</a>
          <a v-if="edit" @click="edit=false">完成</a>
        </div>
        <div class="head-logo">购物车</div>
        <div class="menu-ico" v-bind:class="{active:isActive}" v-on:click="isActive=!isActive">
          <span></span>
        </div>
      </div>
      <transition name="van-slide-down">
        <div class="slideNav" v-if="isActive">
          <ul class="ab fix">
            <li>
              <router-link to="/BrandList-1">
                <img src="../../assets/image/nav05.png" />
                <span>品牌馆</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Design">
                <img src="../../assets/image/nav04.png" />
                <span>优秀设计</span>
              </router-link>
            </li>
            <li>
              <router-link to="/GlobalStore">
                <img src="../../assets/image/nav03.png" />
                <span>全球门店</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Investment">
                <img src="../../assets/image/nav02.png" />
                <span>招商加盟</span>
              </router-link>
            </li>
            <li>
              <router-link to="/index">
                <img src="../../assets/image/nav01.png" />
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
      <div class="product-card" v-for="(cartItem, i) in cartList" :key="i">
        <div class="store" @click="checkShop(cartItem)">
          <van-checkbox v-model="cartItem.checked" checked-color="#f4523b">{{cartItem.store_name}}</van-checkbox>
        </div>
        <div class="product" v-for="(item, index) in cartItem.goods" :key="index">
          <van-checkbox
            v-model="item.isChecked"
            checked-color="#f4523b"
            @click="ischeck(cartItem,item)"
            style="min-width: 20px;"
          ></van-checkbox>
          <van-card :thumb="item.goods_image_url">
            <template slot="title">
              <div class="title" @click="toProductDetail(item.goods_id)">{{item.goods_name}}</div>
            </template>
            <template slot="desc" @click="toProductDetail(item.goods_id)">
              <div class="desc">颜色</div>
              <div class="desc">规格</div>
            </template>
            <template slot="price" @click="toProductDetail(item.goods_id)">
              <div class="price">
                <span class="fuhao">￥</span>
                {{item.goods_price}}
              </div>
            </template>
            <template slot="num">
              <van-stepper :value="item.goods_num" />
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
          <van-col span="12" v-for="(itemguess,g) in guessList" :key="g">
            <div class="like-item" @click="toProductDetail(itemguess.goods_id)">
              <div class="img">
                <van-image width="130px" height="130px" fit="cover" :src="itemguess.goods_image" />
              </div>
              <div class="prod-title">{{itemguess.goods_name.slice(0,15)+'...'}}</div>
              <div class="price">
                <span class="fuhao">￥</span>
                {{itemguess.goods_price}}
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div style="height:105px;"></div>
    <div class="bottom-bar">
      <van-submit-bar
        v-if="!edit"
        :price="allPrice"
        :button-text="'结算（'+selectCount+'）'"
        @submit="submitCart"
      >
        <van-checkbox v-model="isCheckAll" @click="checkAll()" checked-color="#f4523b">全选</van-checkbox>
      </van-submit-bar>
      <div class="edit-bar" v-else>
        <van-checkbox v-model="isCheckAll" @click="checkAll()" checked-color="#f4523b">全选</van-checkbox>
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
import {
  cartGet,
  getGuesslike,
  submitCart,
  delCart
} from "../../api/memberCart";
export default {
  data() {
    return {
      cartList: [], // 购物车列表
      guessList: [],
      checked: true,
      isActive: false,
      value: 1,
      edit: false,
      cartId: "", // 购物车中选中的商品
      totalAmount: 0, // 购物车数量
      isCheckAll: false,
      allShops: 0,
      allCount: 0,
      allPrice: 0,
      selectCount: 0
    };
  },
  created() {
    this.getCartList();
    this.getGuesslike();
  },
  methods: {
    share() {
      Toast({
        message: "分享成功",
        icon: "passed"
      });
    },
    // 选中单个商品
    ischeck(item, pro) {
      // 为未选中的时候改变为false，反之为true
      !pro.isChecked ? this._checkTrue(item, pro) : this._checkFalse(item, pro);
    },
    // 修改单个商品的true
    _checkTrue(item, pro) {
      pro.isChecked = true; // 将商品选中状态改为true
      // 这里执行了两部，选中商品数量先+1，再与该店铺商品数量比较，如果相等就更改店铺选中状态为true
      if (++item.checkedCount === item.goods.length) {
        item.checked = true;
      } else {
        return "";
      }
      // ++item.checkedCount === item.productList.length ? item.checked = true : ''
      // 如果店铺选中状态改为true，选中店铺数量先+1，再与店铺数量比较，如果相等就更改全选选中状态为true
      // // 当商店全选状态，每全选一个商店，被选中商店数加一，数值等于所有商店数，全选状态为true
      if (item.checked) {
        if (++this.allShops === this.cartList.length) {
          this.isCheckAll = true;
        } else {
          this.isCheckAll = false;
        }
      } else {
        return "";
      }
    },
    // 修改单个商品的 false
    _checkFalse(item, pro) {
      pro.isChecked = false; // 将商品选中状态改为false
      --item.checkedCount; // 被选中的商品数减一
      if (item.checked) {
        // 如果店铺是被选中的，更改店铺选中状态
        item.checked = false; // 当商店状态为选中时改变false
        --this.allShops; // 商店数减一
      }
      this.isCheckAll = false; // 全选状态为false
    },

    // 选择整个商店的商品
    checkShop(item) {
      !item.checked ? this._shopTrue(item) : this._shopFalse(item);
    },
    // 遍历商店每个商品,状态为false的改变为true,又在_checkTrue()方法中将商店状态改为true
    _shopTrue(item) {
      item.goods.forEach(pro => {
        if (pro.isChecked === false) {
          this._checkTrue(item, pro);
        } else {
          return "";
        }
        // pro.isChecked === false ? this._checkTrue(item, pro) : ''
      });
    },
    _shopFalse(item) {
      item.goods.forEach(pro => {
        // 同上
        if (pro.isChecked === true) {
          this._checkFalse(item, pro);
        } else {
          return "";
        }
      });
    },
    // 选择全部商店的商品，已经计算总价和总数量的函数
    checkAll() {
      // 方法内调用方法
      this.isCheckAll = !this.isCheckAll;
      this.isCheckAll
        ? this.cartList.forEach(item => {
            this._shopTrue(item);
          })
        : this.cartList.forEach(item => {
            this._shopFalse(item);
          });
    },
    _totalPeice() {
      // 每次调用此方法，将初始值为0，遍历价格并累加
      this.allPrice = 0;
      this.selectCount = 0;
      this.cartList.forEach(item => {
        let goods = item.goods;
        goods.forEach(pros => {
          if (pros.isChecked) {
            this.allPrice += pros.goods_price * pros.goods_num;
            this.selectCount += 1;
          }
        });
      });
      this.allPrice = this.allPrice * 100;
    },
    _totalCount() {
      // 同上
      this.allCount = 0;
      this.cartList.forEach(item => {
        this.allCount += item.checkedCount;
      });
    },
    // 获取购物车列表
    getCartList() {
      cartGet().then(res => {
        if (res && res.result.cart_list.length > 0) {
          console.log(res);
          this.cartList = res.result.cart_list;
        } else {
          this.cartList = [];
          // this.getAmount(0)
          // this.getPrice(0.0)
        }
        this.$parent.$emit("list-is-empty", this.cartList);
      });
    },
    getGuesslike() {
      getGuesslike().then(res => {
        this.guessList = res.result;
      });
    },
    submitCart() {
      let list = this.getSelectedGoods();
      let ids = [];
      let that = this;
      list.forEach(o => {
        ids.push(o.goods_id + "|" + o.goods_num);
      });
      this.$router.push("/confirm?data=" + ids.join(","));
      // submitCart({ cart_id: ids.join(",") }).then(res => {
      //   this.$router.push("/confirm");
      // });
    },
    del() {
      let list = this.getSelectedGoods();
      let ids = list.map(o => {
        return o.goods_id;
      });
      delCart({ cart_id: ids.join(",") }).then(res => {
        Toast("所选商品已删除");
        this.edit = false;
        this.getCartList();
      });
    },
    getSelectedGoods() {
      let list = [];
      this.cartList.forEach(item => {
        let goods = item.goods;
        goods.forEach(pros => {
          if (pros.isChecked) {
            list.push(pros);
          }
        });
      });
      return list;
    },
    // 商品详情页
    toProductDetail(id) {
      this.$router.push({ name: "ProductDetail", query: { id: id } });
    }
  },
  watch: {
    // 深度监听所有数据，每次改变重新计算总价和总数
    cartList: {
      deep: true,
      handler(val, oldval) {
        this._totalPeice();
        this._totalCount();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  .tips {
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
      padding: 20px 0 4px 0;
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
  padding: 8px 0 8px 12px;
}
.van-card__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.p-warn {
  position: absolute;
  right: 50px;
  top: 0;
  line-height: 50px;
  a {
    font-size: 14px;
    color: #fff;
  }
}
</style>
