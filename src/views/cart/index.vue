<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="p-warn">
          <router-link to="">编辑</router-link>
        </div>
        <div class="head-logo">
          购物车
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
      <div class="product-card" v-for="(cartItem, i) in cartList" :key="i">
        <div class="store">
          <van-checkbox v-model="storechecked" :value="cartItem.store_id" checked-color="#f4523b">{{cartItem.store_name}}</van-checkbox>
        </div>
        <div class="product" v-for="(item, index) in cartItem.goods" :key="index" >
          <van-checkbox v-model="itemchecked" :value="item.cart_id" checked-color="#f4523b"></van-checkbox>
          <van-card :thumb="item.goods_image_url" @click="toProductDetail(item.goods_id)">
            <template slot="title">
              <div class="title">{{item.goods_name.slice(0,15)+'...'}}</div>
            </template>
            <template slot="desc">
              <div class="desc">颜色</div>
              <div class="desc">规格</div>
            </template>
            <template slot="price">
              <div class="price">
                <span class="fuhao">￥</span>{{item.goods_price}}
              </div>
            </template>
            <template slot="num">
              <van-stepper  :value="item.goods_num"/>
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
          <van-col span="12" v-for="(itemguess,g) in guessList" :key="g" >
            <div class="like-item" @click="toProductDetail(itemguess.goods_id)">
              <div class="img">
                <van-image
                  width="130px"
                  height="130px"
                  fit="cover"
                  :src="itemguess.goods_image"
                />
              </div>
              <div class="prod-title">{{itemguess.goods_name.slice(0,15)+'...'}}</div>
              <div class="price">
                <span class="fuhao">￥</span>{{itemguess.goods_price}}
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
import { cartGet,getGuesslike } from '../../api/memberCart'
export default {

  data() {
    return {
      cartList: [], // 购物车列表
      guessList: [],
      itemchecked: true,
      storechecked: true,
      checked: true,
      isActive: false,
      value: 1,
      edit: true,
      totalPrice: 0, // 购物车总价
      cartId: '', // 购物车中选中的商品
      totalAmount: 0, // 购物车数量

    };
  },
  created () {
    this.getCartList(true),
    this.getGuesslike()
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
    },
    // 获取购物车列表
    getCartList (value) {
      cartGet().then(res => {
        if (res && res.result.cart_val.length > 0) {
          this.cartList = Object.assign([], res.result.cart_val)
          this.addChecked(value)
          this.renderCart()
        } else {
          this.cartList = []
          // this.getAmount(0)
          // this.getPrice(0.0)
        }
        this.$parent.$emit('list-is-empty', this.cartList)
      })
    },
    getGuesslike(){
      getGuesslike().then(res => {
        this.guessList = res.result
        console.log(this.guessList)
      },error => {
         Toast.fail(error.message)
       })
    },
    /*
    	 * addChecked: 为每个商品添加checked 属性
    	 * @param: isSelectedall 是否选中商品 Boolean
    	 */
    addChecked (isSelectedall) {
      let temp = this.cartList
      for (var j in temp) {
        let list = temp[j].goods
    	  let k = 0
        for (var i in list) {
          if (list[i].goods_storage == 0 && !this.isCheckedAll) {
            list[i].checked = false
    		  k++
          } else {
            list[i].checked = isSelectedall
          }
        }
    	  temp[j].checked = (k == list.length) ? false : isSelectedall
      }
      this.cartList = Object.assign([], temp)
    },
    /*
    	 *  renderCart: 修改商品数量和点击是否选中后 重新计算商品价格和数量
    	 */
    renderCart () {
      let temp = this.cartList
      this.promosIds = []
      let cartGoods = []
      let totalAmount = 0
      let totalPrice = 0
      for (var j in temp) {
        let data = temp[j].goods
        for (var i in data) {
          if (data[i].checked) {
            totalAmount += parseInt(data[i].goods_num)
            totalPrice += parseInt(data[i].goods_num) * parseFloat(data[i].goods_price)
            cartGoods.push(data[i].cart_id + '|' + data[i].goods_num)
          }
        }
      }
      this.cartId = cartGoods.toString()
      this.totalPrice = totalPrice.toFixed(2)
      this.totalAmount = totalAmount
      this.$parent.$emit('calcu-cart-data', { totalPrice: this.totalPrice, totalAmount: this.totalAmount, cartId: this.cartId })
    },
    // 商品详情页
    toProductDetail(id) {
      this.$router.push({ name: 'ProductDetail', query: { id : id }})
    }
  },


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
