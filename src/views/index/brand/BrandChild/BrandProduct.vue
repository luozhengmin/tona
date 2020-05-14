<template>
  <div>
    <div class="s-search">
      <van-search
        v-model="queryParams.keyword"
        show-action
        placeholder="请输入商品关键词"
        @search="onSearch"
      >
        <template #left-icon>
          <van-icon class="fa fa-search" />
        </template>
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>

    <div class="s-select">
      <van-tabs color="#f4523b" @click="tabClick">
        <van-tab name="0">
          <template #title>综合</template>
          <van-list
            v-model="loading"
            :finished="finished"
            @load="getList"
            :offset="50"
            finished-text="没有更多了"
          >
            <ProductListItem :products="goods_list"></ProductListItem>
          </van-list>
        </van-tab>
        <van-tab name="1">
          <template #title>新品</template>
          <van-list
            v-model="loading"
            :finished="finished"
            @load="getList"
            :offset="50"
            finished-text="没有更多了"
          >
            <ProductListItem :products="goods_list"></ProductListItem>
          </van-list>
        </van-tab>
        <van-tab name="3">
          <template #title>
            销量
            <i v-if="queryParams.order=='1'&&tabName=='3'" class="fa fa-sort-asc"></i>
            <i v-else class="fa fa-sort-desc"></i>
          </template>
          <van-list
            v-model="loading"
            :finished="finished"
            @load="getList"
            :offset="50"
            finished-text="没有更多了"
          >
            <ProductListItem :products="goods_list"></ProductListItem>
          </van-list>
        </van-tab>
        <van-tab name="2">
          <template #title>
            价格
            <i v-if="queryParams.order=='1'&&tabName=='2'" class="fa fa-sort-asc"></i>
            <i v-else class="fa fa-sort-desc"></i>
          </template>
          <van-list
            v-model="loading"
            :finished="finished"
            @load="getList"
            :offset="50"
            finished-text="没有更多了"
          >
            <ProductListItem :products="goods_list"></ProductListItem>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import ProductListItem from "./ProductListItem";
import StoreApi from "@/api/HomeStoreApi";
export default {
  name: "BrandProduct",
  components: { ProductListItem },
  props: {
    store_id: {
      type: [String, Number]
    }
  },
  data() {
    return {
      goods_list: [],
      queryParams: {
        page: 1,
        per_page: 10,
        key: 2,
        order: 1,
        store_id: this.store_id
      },
      tabName: 0,
      loading: false,
      finished: false,
      page_total: 0,
      page: 1
    };
  },
  mounted() {
    // this.getList();
  },
  methods: {
    tabClick(name, title) {
      this.goods_list = [];
      this.queryParams.page = 1;
      this.finished = false;
      if (name == 1) {
        this.queryParams.key = 1;
        this.queryParams.order = 2;
      } else if (name == 2) {
        this.queryParams.key = 2;
        this.setOrder(name);
      } else if (name == 3) {
        this.queryParams.key = 3;
        this.setOrder(name);
      } else {
        this.queryParams.key = null;
      }
      this.tabName = name;
    },
    setOrder(name) {
      if (name == this.tabName) {
        if (this.queryParams.order == 2) {
          this.queryParams.order = 1;
        } else {
          this.queryParams.order = 2;
        }
      } else {
        this.queryParams.order = 2;
      }
    },
    getList() {
      StoreApi.productList(this.queryParams).then(res => {
        let list = res.result.goods_list;
        list.forEach(o => {
          this.goods_list.push(o);
        });
        this.page_total = res.result.page_total;
        if (this.queryParams.page < this.page_total) {
          this.queryParams.page++;
        } else {
          this.finished = true;
        }
        this.loading = false;
      });
    },
    onSearch() {
      this.goods_list = [];
      this.queryParams.page = 1;
      this.finished = false;
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
