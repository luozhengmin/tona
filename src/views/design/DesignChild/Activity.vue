<template>
    <div>
      <index-banner :banners="banners"></index-banner>
      <div class="activity-list">
        <van-row>
          <van-col v-for="i in 4 " :key="i">
            <a href=""><img src="../../../assets/image/cp04.jpg"></a>
            <div class="main ab">
              <div class="infor-l ac">
                <h2>优秀设计发方案活动</h2>
                <div class="-t">
                  <span class="ab"><van-icon name="clock-o" />活动时间：2020.01.15-02.03</span>
                </div>
              </div>
              <div class="infor-r">
                <i class="iconfont">&#xe629;</i>
                <span class="ab">参与人数<span>15402</span></span>
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
  export default {
    components: {IndexBanner},
    name: "Activity",
    created() {
      this.getBanners();
    },
    data(){
      return{
        banners:[]
      }
    },
    methods:{
      getBanners() {
        axios.post("/api/Index/getIndexAdList/ap_id",{ap_id:1,}).then(res => {
          let banners = res.result.banners;
          this.banners = banners;
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
            h2 {
              font-size: 15px;
              color: #000;
              padding-bottom: 5px;
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
