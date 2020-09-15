<template>
    <div>
      <index-banner :banners="banners"></index-banner>
      <div class="design-list fix">
        <div class="title-t">
          <h2><span>活动推荐</span></h2>
        </div>
        <van-swipe :loop="false" :width="300" :show-indicators="false">
          <van-swipe-item v-for="(item,index) in childList" :key="index">
            <router-link :to="{name:'ActivityDetail',query:{id:item.zhuanti_id}}"><img :src="item.zhuanti_image"></router-link>
            <div class="main ab">
              <div class="infor-l ac">
                <h2> <router-link to="">{{item.zhuanti_name}}</router-link></h2>
                <div class="-t">
                  <span class="ab"><van-icon name="clock-o" />活动时间：{{item.zhuanti_start_time}}-{{item.zhuanti_end_time}}</span>
                </div>
              </div>
              <div class="infor-r">
                <i class='iconfont icon-fire'></i>
                <!--<span class="ab">参与人数<span>15402</span></span>-->
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>

      </div>
      <div class="list">
        <div class="title-t ab">
          <h2 class="ac"><span>方案推荐</span></h2>
          <p @click="changeTab">更多方案</p>
        </div>
        <van-row>
          <van-col v-for="(item,index) in excellentList" :key="index">
            <router-link :to="{name:'DesignDetail',query:{id:item.fan_id}}"><img :src="item.thumb"></router-link>
            <div class="main">
              <div class="infor-l">
                <h2>{{item.fan_name}}</h2>
                <div class="-t ab">
                  <router-link :to="{name:'DesignDetail',query:{id:item.fan_id}}">{{item.style}}</router-link>
                  <span class="style-line"></span><span>原创设计</span>
                </div>
              </div>
              <div class="infor-r ab">
                <div class="dot"><img :src="item.member_avatar"></div>
                <span class="ac">{{item.style}}</span>
                <div class="view ab"><van-icon name="eye-o" />{{item.see_num}}</div>
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="list choice-list">
        <van-divider :style="{ color: '#b7b7b7', borderColor: '#ccc', padding: '0 20px' }">更多精选内容</van-divider>
        <van-row gutter="15">
          <van-col span="12" v-for="(item,index) in sieveList" :key="index">
            <router-link :to="{name:'DesignDetail',query:{id:item.fan_id}}"><img :src="item.thumb"></router-link>
            <div class="main">
              <div class="infor-l">
                <h2> <router-link :to="{name:'DesignDetail',query:{id:item.fan_id}}">{{item.fan_name}}</router-link></h2>
              </div>
              <div class="infor-r ab">
                <div class="dot"><img :src="item.member_avatar"></div>
                <span class="ac">{{item.member_name}}</span>
                <div class="view ab"><van-icon name="eye-o" />{{item.see_num}}</div>
              </div>
            </div>
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
    components: {IndexBanner},
    name: "Recommend",
    created() {
      this.getBanners();
      this.getDesign();
      this.getEvent();
      this.getSieve();
    },
    data(){
      return{
        childList:[],
        banners: [],
        excellentList:[],
        sieveList:[],
        activeName:'c'
      }
    },
    methods: {
      changeTab(){
        this.$emit('childByValue', this.activeName)
      },
      getBanners() {
        axios.post("/api/Index/getAppadList/ap_id/", {ap_id:12,}).then(res => {
          let banners = res.result.ad_list;
          this.banners = banners;
        });
      },
      getDesign() {
        DesignApi.excellentDesign().then(res => {
          this.excellentList = res.result.gooddesign;
        }).catch((error) => {
          console.log("error")
        });
      },
      getEvent() {
        DesignApi.eventRecommend().then(res => {
          this.childList = res.result.list;
        }).catch((error) => {
          console.log("error")
        });
      },
      getSieve() {
        DesignApi.sieveList().then(res => {
          this.sieveList = res.result.fan_list;
        }).catch((error) => {
          console.log("error")
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
  .design-list{
    color:#323232;
    margin:0 0 0 15px;position:relative;overflow:hidden;
    .title-t{margin-bottom:6px;}
    .van-swipe-item{
      padding-right:15px;
      img{border-top-left-radius:6px;border-top-right-radius:6px;}
      .main{
        color:#888;
        padding:12px 12px;
        align-items:center;
        background-color:#f7f7f7;
        .infor-l{
          width:90%;padding-right:3%;
          h2{
            font-size:15px;
            color:#000;
            padding-bottom:5px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .-t{
            span{align-items:center;}
            i{font-size:12px;line-height:12px;padding:1px 2px 0 0;}
          }
        }
        .infor-r{
          flex-direction:column;
          text-align:right;
          i{font-size:15px;color:#f4523b;}
          span{
            align-items:center;
            span{padding-left:2px;}
          }
        }
      }
    }
  }
  .list {
    height: 100%;
    padding: 15px 15px 0 15px;
    .title-t{
      p{font-size:14px;color:#888;}
    }
    .van-row{
      .van-col:last-child{margin-bottom:0;}
      .van-col{
        margin:12px 0;
        float:none;
        a{
          display:block;
          img{border-top-left-radius:4px;border-top-right-radius:4px;}
        }
        .main{
          color:#888;
          border:solid 1px #eee;
          .infor-l{
            padding:8px 12px;
            h2{font-size:14px;color:#000;padding-bottom:4px;overflow: hidden;white-space: nowrap;text-overflow:ellipsis;}
            .-t{
              align-items:center;
              font-size:13px;
              .style-line{
                display:block;width:1px;height:13px;background-color:#888;margin:0 6px;
              }
            }
          }
          .infor-r{
            padding:8px 12px;
            align-items:center;
            border-top:solid 1px #eee;
            .dot{width:24px;height:24px;border-radius:50%;margin-right:8px;text-align:center;
              img{border-radius:50%;width:24px;height:24px;}
            }
            .view{
              align-items:center;
              .van-icon{font-size:16px;padding-right:2px;}
            }
          }
        }
      }
    }
  }
  .choice-list{
    margin-bottom:40px;
    .van-divider{
      margin:2px 0 8px 0;
    }
    .van-row {
      .van-col:last-child{margin:6px 0;}
      .van-col {
        float:left;
        .main {
          border:none;
          .infor-l {
            padding:6px 0 0 0;
          }
          .infor-r {
            padding:0;
            border-top:none;
          }
        }
      }
    }
  }
</style>
