<template>
  <div>
    <index-banner :banners="banners"></index-banner>
    <div class="sieve-list">
      <van-dropdown-menu active-color="#f4523b">
        <van-dropdown-item v-model="order" :options="option1" @change="getList" title="排序" />
        <van-dropdown-item v-model="style" :options="option2" @change="getList" title="风格" />
        <van-dropdown-item v-model="area" :options="option3" @change="getList" title="面积" />
      </van-dropdown-menu>
    </div>
    <div class="list">
      <van-row>
        <van-col v-for="item in topList " :key="item.fan_id">
          <router-link :to="{name:'DesignDetail',query:{id:item.fan_id}}">
            <img :src="item.overview_picture" />

            <div class="main">
              <div class="infor-l">
                <h2>{{item.fan_name}}</h2>
                <div class="-t">
                  <span>{{item.style}} | 原创设计</span>
                </div>
              </div>
              <div class="infor-r ab">
                <div class="dot">
                  <img :src="item.member_avatar" />
                </div>
                <span class="ac">{{item.member_name}}</span>
                <div class="view ab">
                  <van-icon name="eye-o" />
                  {{item.see_num}}
                </div>
              </div>
            </div>
          </router-link>
        </van-col>
      </van-row>
    </div>
    <div class="list choice-list">
      <van-row gutter="15">
        <van-col span="12" v-for="item in bottomList " :key="item.fan_id">
          <router-link :to="{name:'DesignDetail',query:{id:item.fan_id}}">
            <img :src="item.overview_picture" />

            <div class="main">
              <div class="infor-l">
                <h2>{{item.fan_name}}</h2>
              </div>
              <div class="infor-r ab">
                <div class="dot">
                  <img :src="item.member_avatar" />
                </div>
                <span class="ac">{{item.member_name}}</span>
                <div class="view ab">
                  <van-icon name="eye-o" />
                  {{item.see_num}}
                </div>
              </div>
            </div>
          </router-link>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import IndexBanner from "../../index/IndexBanner";
import axios from "@/utils/request";
import DesignApi from "@/api/DesignApi";
export default {
  components: { IndexBanner },
  name: "DesignPlan",
  data() {
    return {
      banners: [],
      overlay: false,
      value1: 0,
      style: "",
      area: "",
      option1: [],
      option2: [],
      option3: [],
      topList: [],
      bottomList: []
    };
  },
  created() {
    this.getBanners();
    this.getShaixuan();
    this.getList();
  },
  methods: {
    getBanners() {
      axios.post("/api/Index/getAppadList/ap_id/", { ap_id:14,}).then(res => {
        let banners = res.result.ad_list;
        this.banners = banners;
      });
    },
    getShaixuan() {
      DesignApi.shaixuan().then(res => {
        // this.option1 = res.result.style;
        this.option2 = res.result.style.map(o => {
          return { text: o, value: o };
        });
        this.option3 = res.result.area.map(o => {
          return { text: o, value: o };
        });
      });
    },
    getList() {
      let params = {
        style: this.style,
        area: this.area
      };
      DesignApi.designList(params).then(res => {
        let list = res.result.fan_list;
        this.topList = [];
        this.bottomList = [];
        for (let i = 0; i < list.length; i++) {
          if (i < 3) {
            this.topList.push(list[i]);
          } else {
            this.bottomList.push(list[i]);
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.sieve-list {
  padding: 0 15px;
  .van-dropdown-menu {
    background-color: #f7f7f7;
  }
}
.list {
  height: 100%;
  padding: 10px 15px 0 15px;
  .van-row {
    .van-col:last-child {
      margin-bottom: 0;
    }
    .van-col {
      margin:12px 0;
      float:none;
      a {
        display: block;
        img {
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          width: 100%;
        }
        .main {
          color: #888;
          border: solid 1px #eee;
          .infor-l {
            padding: 8px 12px;
            h2 {
              font-size: 14px;
              color: #000;
              padding-bottom: 4px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .-t {
              font-size: 13px;
              i {
                font-size: 12px;
                line-height: 12px;
                padding: 0 2px 0 6px;
              }
            }
          }
          .infor-r {
            padding: 8px 12px;
            align-items: center;
            border-top: solid 1px #eee;
            .dot {
              width: 24px;
              height: 24px;
              background: #aaa;
              border-radius: 50%;
              margin-right: 8px;
              img {
                border-radius: 100%;
              }
            }
            .view {
              align-items: center;
              .van-icon {
                font-size: 16px;
                padding-right: 2px;
              }
            }
          }
        }
      }
    }
  }
}
.choice-list {
  margin-bottom:40px;
  .van-divider {
    margin: 0 0 6px 0;
  }
  .van-row {
    .van-col:last-child {
      margin: 6px 0;
    }
    .van-col {
      float:left;
      .main {
        border: none;
        .infor-l {
          padding: 6px 0 0 0;
        }
        .infor-r {
          padding: 0;
          border-top: none;
        }
      }
    }
  }
}
</style>
