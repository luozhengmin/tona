<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">搜索</div>
        <div
          class="menu-ico"
          v-bind:class="{ active: isActive }"
          v-on:click="isActive = !isActive"
        >
          <span></span>
        </div>
      </div>
      <transition name="van-slide-down">
        <div class="slideNav" v-if="isActive">
          <nav-menu></nav-menu>
        </div>
      </transition>
    </div>
    <div class="s-search">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入商品关键词"
        @search="onSearch"
      >
        <template #left-icon>
          <i class="iconfont icon-sousuo"></i>
        </template>
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>

    <div class="empty" v-if="showEmpty">
      <div>
        <img src="../../assets/image/empty-1.png" />
      </div>
      <div>
        没有找到相关的商品信息<br />
        请换一个关键词试试吧!
      </div>
    </div>

    <van-list
      v-if="goodsList.length > 0"
      v-model="loading"
      :finished="finished"
      :immediate-check="false"
      @load="getGoodsList"
      :offset="50"
      finished-text="没有更多了"
    >
      <ProductItem :products="goodsList"></ProductItem>
    </van-list>

    <div class="search-word" v-if="showHot">
      <h2 class="ss-title">热门搜索</h2>
      <div class="word-list">
        <a
          @click="searchWord(item)"
          v-for="item in searchKeyList"
          :key="item"
          >{{ item }}</a
        >
      </div>
    </div>
    <div v-if="showHistory">
      <div class="search-history">
        <h2 class="ss-title">搜索历史</h2>
        <div class="history-list">
          <van-cell
            :title="item"
            icon="clock-o"
            v-for="item in historyList"
            :key="item"
            @click="searchWord(item)"
          >
            <template #right-icon>
              <!-- <van-icon name="cross" style="line-height: inherit" /> -->
            </template>
          </van-cell>
          <div
            v-if="historyList.length == 0"
            style="color: #888; padding: 10px 0; text-align: center"
          >
            暂无历史
          </div>
        </div>
      </div>
      <div class="clear-history wrap" v-if="historyList.length > 0">
        <span @click="clearHistory">清除搜索历史</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from "../index/navMenu.vue";
import ProductItem from "./product/ProductItem";
import { stringInterception } from "@/utils/common.js";
import { getSearchKey, getGoodsList } from "@/api/GoodsLists";
import { Toast } from "vant";

export default {
  components: { NavMenu, ProductItem },
  name: "ProductSearch",
  data() {
    return {
      isActive: false,
      value: "",
      searchKeyList: [],
      historyList: [],
      goodsList: [],
      showEmpty: false,
      showHistory: true,
      showHot: true,
      loading: false,
      finished: false,
      per_page: 10,
      page: 1,
      page_total: 0,
    };
  },
  created() {
    this.getSearchKey();
    this.getHistory();
  },
  methods: {
    getSearchKey() {
      getSearchKey().then((res) => {
        console.log(res);
        this.searchKeyList = res.result.list;
      });
    },
    getHistory() {
      var historySearch = localStorage.getItem("historySearch") || "[]";
      this.historyList = JSON.parse(historySearch);
    },
    onSearch() {
      if (this.value) {
        if (this.historyList.indexOf(this.value) == -1) {
          this.historyList.push(this.value);
        }
        localStorage.setItem("historySearch", JSON.stringify(this.historyList));
      }

      this.getGoodsList();
    },
    getGoodsList() {
      getGoodsList({ keyword: this.value }).then((res) => {
        console.log(res);
        this.showHot = false;
        this.showHistory = false;
        res.result.goods_list.forEach((item) => {
          item.goods_name = stringInterception(item.goods_name, 9);
          item.goods_advword = stringInterception(item.goods_advword, 10);
          this.goodsList.push(item);
        });

        if (this.goodsList.length == 0) {
          this.showEmpty = true;
        }
        this.page_total = res.result.page_total;
        if (this.page < this.page_total) {
          this.page++;
        } else {
          this.finished = true;
        }
        this.loading = false;
      });
    },
    searchWord(word) {
      this.value = word;
      this.getGoodsList();
    },
    clearHistory() {
      this.historyList = [];
      localStorage.setItem("historySearch", JSON.stringify(this.historyList));
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
    font-size: 15px;
    color: #b7b7b7;
    text-align: center;
    img {
      margin-bottom: 20px;
    }
  }
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
        font-size: 16px;
        color: #323232;
        padding: 10px 15px 5px 15px;
      }
      .desc {
        padding: 0 15px 10px 15px;
        color: #888;
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
}
.s-search {
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
.search-word {
  background-color: #fff;
  border-top: solid 1px #eee;
  padding: 15px 15px;
  .word-list {
    padding: 12px 0;
    a {
      background-color: #f7f7f7;
      display: inline-block;
      padding: 6px 12px;
      text-align: center;
      margin: 0 6px 6px 0;
      font-size: 14px;
      color: #888;
    }
  }
}
.ss-title {
  font-size: 15px;
  color: #b7b7b7;
}
.search-history {
  background-color: #fff;
  padding: 15px 15px 0 15px;
  margin-top: 12px;
  .van-cell {
    padding: 10px 0;
    border-bottom: solid 1px #eee;
    color: #888;
  }
}
.clear-history {
  text-align: center;
  font-size: 15px;
  color: #323232;
  padding: 12px 0 12px 0;
}
</style>
