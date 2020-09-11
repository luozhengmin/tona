<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">全球门店</div>
        <div class="menu-ico" v-bind:class="{active:isActive}" v-on:click="isActive=!isActive">
          <span></span>
        </div>
      </div>
      <transition name="van-slide-down">
        <div class="slideNav" v-if="isActive">
          <ul class="ab fix">
            <li>
              <router-link to="/BrandList-1">
                <img src="../../../assets/image/nav05.png">
                <span>品牌馆</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Design">
                <img src="../../../assets/image/nav04.png">
                <span>优秀设计</span>
              </router-link>
            </li>
            <li>
              <router-link to="/GlobalStore">
                <img src="../../../assets/image/nav03.png">
                <span>全球门店</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Investment">
                <img src="../../../assets/image/nav02.png">
                <span>招商加盟</span>
              </router-link>
            </li>
            <li>
              <p @click="goPage('https://www.tona.com/Index/lists/catid/1.html')">
                <img src="../../../assets/image/nav01.png">
                <span>关于我们</span>
              </p>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="wrap fix">
      <div class="global-choose">
        <van-cell title="TONA 门店" is-link @click="showArea = true">
          <template #default>
            <span class="custom-title">{{selectedAddress[0]}}</span>
            <span class="line"></span>
            <span class="custom-title">{{selectedAddress[1]}}</span>
          </template>
        </van-cell>
        <van-popup v-model="showArea" position="bottom" :style="{ height: '40%' }">
          <van-picker
            show-toolbar
            title="地址"
            value-key="area_name"
            :columns="areaList"
            @confirm="onConfirm"
            @cancel="showArea = false"
          />
        </van-popup>
      </div>
      <div class="global-list">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item v-for="item in list" :key="item.mendian_id">
            <template #title>
              <div class="global-title">{{item.mendian_name}}</div>
              <div class="global-add">{{item.mendian_detail_address}}</div>
            </template>
            <template #right-icon>
              <van-icon class="fa fa-caret-down" />
            </template>
            <div class="add-detail fix">
              <div class="add-tag">
                <van-tag round v-for="label in item.labels" :key="label">{{label}}</van-tag>
              </div>
              <div class="add-tel">
                <p class="ab">
                  <i class="iconfont icon-danxiangfenlei"></i>
                  <span>{{item.mendian_desc}}</span>
                </p>
                <p class="ab">
                  <i class="iconfont icon-dianhua"></i>
                  <span>{{item.mendian_phone}}</span>
                </p>
                <p class="ab">
                  <i class="iconfont">&#xe614;</i>
                  <span>{{item.mendian_detail_address}}</span>
                </p>
              </div>
              <div class="add-pic">
                <img :src="item.thumb" />
              </div>
              <div class="add-btn">
                <van-button
                  type="info"
                  @click="$router.push('/MakeStore?mendian_id=' + item.mendian_id+'&mendian_name='+ item.mendian_name)"
                >预约到店</van-button>
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import GlobalStoreApi from "@/api/GlobalStoreApi";
export default {
  name: "GlobalStore",
  data() {
    return {
      isActive: false,
      activeName: "",
      value: "",
      list: [],
      areaList: [],
      selectedAddress: ["全国", "所有门店"],
      showArea: false,
      city_id:'',
      pagesize:'8'
    };
  },

  created() {
    this.getAddressList();
    this.getList();
  },

  methods: {
    getList() {
      let params = {
        city_id: this.city_id,
        pagesize: this.pagesize
      };
      GlobalStoreApi.list(params).then(res => {
        this.list = res.result.mendian_list;
      });
    },
    getAddressList() {
      GlobalStoreApi.city().then(res => {
        this.areaList = res.result.area_list;
        this.areaList.map(p => {
          p.children = p.child;
        });
      });
    },

    onConfirm(val, index) {
      this.selectedAddress = val;
      let old_area = this.areaList;
      let city_id = old_area[index[0]]['children'][index[1]]['area_id'];
      this.city_id = city_id
      this.showArea = false;
      this.getList()
    },
    goPage (url) {
      window.location.href = url
    },
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  height: 100%;
}
.global-choose {
  width: 100%;
  margin: 12px 0;
  .van-cell {
    .van-cell__title {
      color: #323232;
      font-weight: bold;
      font-size: 16px;
    }
    .van-cell__value {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #323232;
      font-size:16px;
      .line {
        display: inline-block;
        width: 1px;
        background-color: #323232;
        height: 18px;
        margin: 0 10px 0 12px;
      }
    }
    .van-cell__right-icon {
      margin-right: -4px;
      line-height:28px;
    }
  }
}
</style>
