<template>
    <div class="container">
      <div class="head fix">
        <div class="wrap fix">
          <div class="head-ss fix">
            <van-icon name="arrow-left" @click="$router.go(-1)"/>
          </div>
          <div class="head-logo">
            全球门店
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
      <div class="wrap fix">
        <div class="global-choose">
          <van-cell title="TONA 门店" is-link @click="showArea = true">
            <template #default>
              <span class="custom-title">上海</span>
              <span class="line"></span>
              <span class="custom-title">上海市</span>
            </template>
          </van-cell>
          <van-popup
            v-model="showArea"
            position="bottom"
            :style="{ height: '30%' }">
            <van-area :area-list="areaList" :columns-num="2" title="地址" @confirm="onConfirm"
                      @cancel="showArea = false"/>
          </van-popup>

        </div>
        <div class="global-list">
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item v-for="i in 3" :key="i">
              <template #title>
                <div class="global-title">TONA国际卫浴上海虹桥店</div>
                <div class="global-add">上海市虹桥世界中心5369号L3A区二楼202</div>
              </template>
              <template #right-icon>
                <van-icon class="fa fa-caret-down" />
              </template>
              <div class="add-detail fix">
                <div class="add-tag">
                  <van-tag round>纯德系</van-tag>
                  <van-tag round>现代简约</van-tag>
                  <van-tag round>北欧风</van-tag>
                </div>
                <div class="add-tel">
                  <p class="ab"><i class="iconfont">&#xe62c;</i><span>全屋家具、卫浴、衣柜</span></p>
                  <p class="ab"><i class="iconfont">&#xe60a;</i><span>021-60299001</span></p>
                  <p class="ab"><i class="iconfont">&#xe614;</i><span>上海市虹桥世界中心5369号L3A区二楼202</span></p>
                </div>
                <div class="add-pic">
                  <img src="../../../assets/image/cp01.jpg">
                </div>
                <div class="add-btn">
                  <van-button type="info" @click="MakeStore">预约到店</van-button>
                </div>
              </div>
            </van-collapse-item>
          </van-collapse>
        </div>
      </div>
    </div>
</template>

<script>
  import areaList from "@/json/area";
  import { Toast } from "vant";
  export default {
    name: "GlobalStore",
    data() {
      return {
        isActive:false,
        activeName: '',
        showArea: false,
        areaList: areaList,
        value:'',
      }
    },

    methods: {
      showArea() {
        this.showArea = true;
      },
      MakeStore() {
        this.$router.push({name: 'MakeStore'})
      },
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    background-color:#f7f7f7;
    height:100%;
  }
  .global-choose{
    width:100%;
    margin:12px 0;
    .van-cell{
      line-height:22px;
      .van-cell__title{
        color:#323232;
        font-weight:bold;
        font-size:16px;
      }
      .van-cell__value{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color:#323232;
        .line{display:inline-block;width:1px;background-color:#323232;height:18px;margin:1px 10px 0 12px;}
      }
      .van-cell__right-icon{margin-right:-4px;}
    }
  }

</style>
