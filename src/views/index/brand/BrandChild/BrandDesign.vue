<template>
  <div>
    <index-banner :banners="banners"></index-banner>
    <div class="w-ticket wrap fix">
      <div class="ticket-item ab">
        <div class="item-l">
          <h2>报备带单</h2>
          <p>一键报备 快速带单</p>
          <van-button color="linear-gradient(to right, #ff6d2d, #ff3506)" @click="recordTape">立即带单</van-button>
        </div>
        <div class="item-r">
          <img src="../../../../assets/image/fa01.png" />
        </div>
      </div>
      <div class="ticket-item ab">
        <div class="item-l">
          <h2>签约带单</h2>
          <p>专享优惠 极速成单</p>
          <van-button color="linear-gradient(to right, #ff6d2d, #ff3506)" @click="signUp">签约带单</van-button>
        </div>
        <div class="item-r">
          <img src="../../../../assets/image/fa02.png" />
        </div>
      </div>
    </div>
    <div class="list">
      <van-row>
        <van-list
          v-model="loading"
          :finished="finished"
          @load="getList"
          :offset="50"
          finished-text="没有更多了"
        >
          <van-col v-for="item in designList " :key="item.fan_id">
            <router-link :to="{name:'DesignDetail',query:{id:item.fan_id}}">
            <div class="pic">
              <img :src="item.overview_picture" />
            </div>
            <div class="main ab">
              <div class="infor-l ac">
                <h2>{{item.fan_name}}</h2>
                <div class="-t ab">
                  <span>{{item.style}} | 原创设计</span>
                  <span class="view ab">
                    <van-icon name="eye-o"  size="18"/>
                    {{item.see_num}}
                  </span>
                </div>
              </div>
              <div class="infor-r">
                <div class="dot">
                  <img :src="item.member_avatar" />
                </div>
                <span>{{item.member_name}}</span>
              </div>
            </div>
            </router-link>
          </van-col>
        </van-list>
      </van-row>
    </div>
  </div>
</template>

<script>
import IndexBanner from "../../IndexBanner.vue";
import axios from "@/utils/request";
import StoreApi from "@/api/HomeStoreApi";
export default {
  components: { IndexBanner },
  name: "BrandDesign",
  props: {
    store_id: {
      type: [String, Number]
    }
  },
  created() {
    this.getBanners();
  },
  data() {
    return {
      designList: [],
      banners: [],
      loading: false,
      finished: false,
      page_total: 0,
      page: 1
    };
  },
  methods: {
    recordTape() {
      this.$router.push({ path: "Tape?store_id=" + this.store_id });
    },
    signUp() {
      this.$router.push({ path: "sign-up?store_id=" + this.store_id });
    },
    getBanners() {
      axios.post("/api/Index/getIndexAdList/ap_id", { ap_id: 10 }).then(res => {
        let banners = res.result.banners;
        this.banners = banners;
      });
    },
    getList() {
      let params = {
        pagesize: 10
      };
      StoreApi.designList(this.store_id, params).then(res => {
        console.log(res);
        this.designList = res.result.design_fan.list;
        this.page_total = res.result.page_total;
        if (this.page < this.page_total) {
          this.page++;
        } else {
          this.finished = true;
        }
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.w-ticket {
  .ticket-item:nth-child(1) {
    margin-bottom: 12px;
  }
  .ticket-item {
    border: solid 1px #eee;
    padding: 12px 24px;
    justify-content: space-between;
    align-items: center;
    .item-l {
      width: 46%;
      padding-right: 2%;
      h2 {
        font-size: 17px;
        font-weight: bold;
        color: #000;
      }
      p {
        font-size: 15px;
        color: #000;
        margin: 5px 0;
      }
      .van-button {
        height: 28px;
        border-radius: 25px;
        line-height: 28px;
        font-size: 13px;
      }
    }
    .item-r {
      width: 54%;
    }
  }
}
.list {
  height: 100%;
  padding: 15px;
  .van-row {
    .van-col {
      margin: 6px 0;
      .main {
        color: #888;
        padding: 12px 12px;
        border: solid 1px #eee;
        .infor-l {
          h2 {
            font-size: 14px;
            color: #000;
            padding-bottom: 4px;
          }
          .-t {
            align-items:center;
            font-size: 14px;
            .view{
              align-items:center;
              padding-left:12px;
            }
          }
        }
        .infor-r {
          text-align: center;
          .dot {
            width: 24px;
            height: 24px;
            margin: 0 auto;
            background: #aaa;
            border-radius: 50%;
            img {
              border-radius: 50%;
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
