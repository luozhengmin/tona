<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">品类</div>
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
    <div class="s-search">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入商品关键词"
        @search="onSearch"
        @cancel="onCancel"
      >
        <template #left-icon>
          <van-icon class="fa fa-search" />
        </template>
        <template #action>
          <div>取消</div>
        </template>
      </van-search>
    </div>
    <div class="no_sroll" v-if="navList">
      <aside class="tabNav" ref="l_list">
        <ul>
          <li
            ref="l_item"
            class="nav_li"
            :class="(TabNavList == index) ? 'checkIn' : ''"
            :index="index"
            :id="index"
            @click="checkNavList(item, index)"
            v-for="(item, index) in navList"
            :key="index"
          >{{item.gcName}}</li>
        </ul>
      </aside>
      <!--&lt;!&ndash; 增加浮动层 &ndash;&gt;-->
      <!--<div class="theFixed" :class="(TabNavList == index) ? 'isFixed' : 'isHide'" v-if="scrollTrue">-->
      <!--<div class="leftName">{{scrollTrue.gcName}}</div>-->
      <!--</div>-->
      <section class="newHeight" ref="r_list">
        <div>
          <div class="proList" v-for="(item, index1) in navList" :key="index1" ref="good">
            <div class="p-pic" v-if="index1==0">
              <img src="../../assets/image/cp01.jpg" />
            </div>
            <div class="r_top">
              <div class="leftName">{{item.gcName}}</div>
            </div>
            <div class="r_cont">
              <div class="cu-items" v-for="(children, index2) in item.children" :key="index2">
                <router-link :to="{path:'ProductList-Item',query:{cate_id:children.id}}">
                  <div class="storeL">
                    <img :src="children.image" />
                  </div>
                  <div class="text">{{children.value}}</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Better from "better-scroll";
import GoodsClassApi from "@/api/GoodsClassApi";
export default {
  name: "ProductList",
  components: {
    Better
  },
  data() {
    return {
      index: 0,
      gcName: "",
      scrollY: 0, // 定义的Y滚动轴及初始值
      TabNavList: 0, // 左右联动取值
      scrollTrue: "", // 右侧吸顶
      navList: [], // 全局列表
      isScroll: false,
      arr: [0],
      flag: true,
      obj: null,
      show: false,
      ios: /iphone os/g.test(window.navigator.userAgent.toLowerCase()),
      isActive: false,
      value: "",
      active: 0,
      params: {}
    };
  },
  created() {
    this.getList();
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
      this._getHeight();
    });
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
    _initScroll() {
      this.left = new Better(this.$refs.l_list, {
        click: true,
        probeType: 3
      });
      this.rgt = new Better(this.$refs.r_list, {
        probeType: 3,
        click: true
      });
      this.rgt.on("scroll", res => {
        if (this.flag) {
          this.scrollY = Math.abs(res.y) + 16; // 页面内有一个16像素的顶部状态栏
          for (let i = 0; i < this.arr.length; i++) {
            if (this.scrollY > this.arr[i] && this.scrollY < this.arr[i + 1]) {
              this.TabNavList = i - 1; // 左右联动取值
              // console.log(this.navList[this.TabNavList].gcName) // 取出元素的gcName
              this.scrollTrue = this.navList[this.TabNavList];
              this.isScroll = true;
              // document.getElementById(this.TabNavList).scrollIntoView()
              this.left.scrollToElement(
                this.$refs.l_list,
                100,
                0,
                this.TabNavList * 60
              );
            }
          }
        }
      });
      this.left.on("scroll", res => {
        if (this.flag) {
          this.scrollY = Math.abs(res.y) + 16;
          this.left.scrollToElement(
            this.$refs.l_list[this.TabNavList],
            100,
            0,
            0
          );
        }
      });
    },
    _getHeight() {
      // // 开始改造
      let rightItems = this.$refs.r_list.getElementsByClassName("proList");
      setTimeout(() => {
        // 根据betterScroll定义滚动
        if (rightItems && rightItems.length > 0) {
          let height = 0;
          this.arr.push(height);
          for (let i = 0; i < rightItems.length; i++) {
            let item = rightItems[i];
            height += item.clientHeight;
            this.arr.push(height);
          }
        }
      }, 600);
    },
    // 左侧选择TAB
    checkNavList(e, v) {
      this.gcName = e.gcName;
      this.flag = false;
      this.TabNavList = v; // 左右联动取值
      this.rgt.scrollToElement(this.$refs.good[v], 100, 0, 0);
      setTimeout(() => {
        this.flag = true;
      }, 100);
    },
    getList() {
      GoodsClassApi.categorys().then(res => {
        console.log(res);
        this.navList = res.result.class_list.map(o => {
          o.gcName = o.value;
          return o;
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.s-search {
  position: fixed;
  top: 50px;
  width: 100%;
  z-index: 9000;
  .van-search {
    padding: 12px 15px;
    .van-search__action {
      padding: 0 0 0 12px;
    }
    .van-search__content {
      background-color: inherit;
      padding-left: 0;
      .van-cell {
        border: solid 1px #eee;
        border-radius: 25px;
        padding: 5px 8px 5px 10px;
      }
    }
  }
}
.container {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

