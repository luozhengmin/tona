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
              <router-link to>
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
        <van-popup v-model="showArea" position="bottom" :style="{ height: '30%' }">
          <van-picker
            v-if="pageShow"
            show-toolbar
            title="地址"
            :columns="columns"
            @confirm="onConfirm"
            @change="onChange"
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
                  <i class="iconfont">&#xe62c;</i>
                  <span>{{item.mendian_desc}}</span>
                </p>
                <p class="ab">
                  <i class="iconfont">&#xe60a;</i>
                  <span>{{item.mendian_phone}}</span>
                </p>
                <p class="ab">
                  <i class="iconfont">&#xe614;</i>
                  <span>{{item.mendian_detail_address}}</span>
                </p>
              </div>
              <div class="add-pic">
                <img :src="item.mendian_pic" />
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
      showArea: false,
      columns: [
        {
          values: '',
          className: 'column1'
        },
        {
          values: '',
          className: 'column2',
          defaultIndex: 0
        },
      ],
      pageShow:false, //省市区三级联动是否显示（因为是接口返回的数据，等省市区数据渲染完毕之后，在显示三级联动）
      cityDates:'', //联动当前选中市的所有区所有数据
      data:'',//接口返回所有省市区数据
    };
  },
  beforeCreate(){
    // 接口请求数据
      GlobalStoreApi.city().then(res => {
        this.list = res.result.area_list;
      // 默认展示一级的数据
      this.columns[0].values = Object.values(res.result.area_list).map(function(e){
        return {text:e.area_name}
      })
      // 默认展示二级的数据
      this.columns[1].values = Object.values(res.result.area_list[0].child).map(function(e){
        return {text:e.area_name}
      })
      this.$nextTick(function(){
        this.pageShow = true;
      })
    });
  },


  created() {
    this.getList();
  },

  methods: {
    getList() {
      GlobalStoreApi.list().then(res => {
        this.list = res.result.mendian_list;
      });
    },

    onChange(picker, values,index) {

      console.log(picker, values,index);
      // 回调时修改第2列数据
      picker.setColumnValues(1, this.cityDate(this.data,values[0].text));
    },
    // 修改市 这里不再多说什么了根据自己的数据格式来
    cityDate(data,province) {
      var that = this;
      data.result.area_list.child.forEach(function (res) {
        if (res.area_name == province) {
          console.log(res)
          that.cityDates = res;
        }
      });
      return that.cityDates.result.area_list[0].child.map(function (res) {
        return {text: res.area_name};
      })
    },


    onConfirm(val){
      console.log(val)
    },
    MakeStore() {
      this.$router.push({ name: "MakeStore" });
    }
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
    line-height: 22px;
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
      .line {
        display: inline-block;
        width: 1px;
        background-color: #323232;
        height: 18px;
        margin: 1px 10px 0 12px;
      }
    }
    .van-cell__right-icon {
      margin-right: -4px;
    }
  }
}
</style>
