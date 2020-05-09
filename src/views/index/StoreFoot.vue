<template>
  <div class="home-base">
    <div class="common-footer-wrap">
      <van-tabbar active-color="#f12c20" inactive-color="#888" v-model="active">
        <van-tabbar-item class="foot-item" to="/index">
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
          <span class='text'>首页</span>
        </van-tabbar-item>
        <van-tabbar-item class="foot-item" to="/ProductList">
          <template #icon="props">
            <img :src="props.active ? icon01.active : icon01.inactive" />
          </template>
          <span class='text'>品类</span>
        </van-tabbar-item>
        <van-tabbar-item class="foot-item" to="/Design">
          <template #icon="props">
            <img :src="props.active ? icon02.active : icon02.inactive" />
          </template>
          <span class='text'>优秀设计</span>
        </van-tabbar-item>
        <van-tabbar-item :badge="carNum==0?'':carNum" class="foot-item" to="/cart">
          <template #icon="props">
            <img :src="props.active ? icon03.active : icon03.inactive" />
          </template>
          <span class='text'>购物车</span>
        </van-tabbar-item>
        <van-tabbar-item class="foot-item" to="/person">
          <template #icon="props">
            <img :src="props.active ? icon04.active : icon04.inactive" />
          </template>
          <span class='text'>我的</span>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
    import { cartNumGet } from '../../api/memberCart'
    export default {
        name: "StoreFoot",
        data(){
          return {
            carNum : '',
            active: 0,
            icon: {
              active: '../../../static/icon/ficon05-h.png',
              inactive: '../../../static/icon/ficon05.png',
            },
            icon01: {
              active: '../../../static/icon/ficon04-h.png',
              inactive: '../../../static/icon/ficon04.png',
            },
            icon02: {
              active: '../../../static/icon/ficon03-h.png',
              inactive: '../../../static/icon/ficon03.png',
            },
            icon03: {
              active: '../../../static/icon/ficon02-h.png',
              inactive: '../../../static/icon/ficon02.png',
            },
            icon04: {
              active: '../../../static/icon/ficon01-h.png',
              inactive: '../../../static/icon/ficon01.png',
            },
          }
        },
        created(){
          cartNumGet().then(
            response => {
              console.log(response)
              this.carNum = response.result.cart_count

            },
            error => {}
          )
        }
    }
</script>

