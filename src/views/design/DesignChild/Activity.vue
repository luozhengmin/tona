<template>
    <div>
      <index-banner :banners="banners"></index-banner>
      <div class="activity-list">
        <van-row>
          <van-col v-for="(item,index) in activeList " :key="index">
            <router-link :to="{name:'ActivityDetail',query:{id:item.zhuanti_id}}"><img :src="item.zhuanti_image"></router-link>
            <div class="main ab">
              <div class="infor-l ac">
                <h2><router-link :to="{name:'ActivityDetail',query:{id:item.zhuanti_id}}">{{item.zhuanti_name}}</router-link></h2>
                <div class="-t">
                  <span class="ab"><van-icon name="clock-o" />活动时间：{{item.zhuanti_start_time}}-{{item.zhuanti_end_time}}</span>
                </div>
              </div>
              <div class="infor-r">
                <i class="iconfont">&#xe629;</i>
                <!--<span class="ab">参与人数<span>15402</span></span>-->
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
    name: "Activity",
    created() {
      this.getBanners();
      this.getDesign();
    },
    data(){
      return{
        banners:[],
        activeList:[]
      }
    },
    methods:{
      getBanners() {
        axios.post("/api/Index/getAppadList/ap_id/",{ap_id:13,}).then(res => {
          let banners = res.result.ad_list;
          this.banners = banners;
        });
      },
      getDesign() {
        DesignApi.active().then(res => {
          this.activeList = res.result.list;
        }).catch((error)=>{
          console.log("error")
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .activity-list{
    color:#323232;
    padding:0 15px 12px 15px;position:relative;overflow:hidden;
    .van-row{
      .van-col {
        margin:6px 0;
        float:none;
        a{
          img {
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
          }
        }
        .main {
          color: #888;
          padding: 12px 12px;
          align-items: center;
          background-color: #f7f7f7;
          .infor-l {
            width:90%;padding-right:5%;
            h2 {
              font-size: 15px;
              color: #000;
              padding-bottom: 5px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .-t {
              span {
                align-items: center;
              }
              i {
                font-size: 12px;
                line-height: 12px;
                padding: 1px 2px 0 0;
              }
            }
          }
          .infor-r {
            flex-direction: column;
            text-align: right;
            line-height: 1.4;
            i {
              font-size: 15px;
              color: #f4523b;
            }
            span {
              align-items: center;
              span {
                padding-left: 2px;
              }
            }
          }
        }
      }
    }
  }
</style>
