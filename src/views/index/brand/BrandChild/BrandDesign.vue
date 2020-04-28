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
            <img src="../../../../assets/image/fa01.png"/>
          </div>
        </div>
        <div class="ticket-item ab">
          <div class="item-l">
            <h2>签约带单</h2>
            <p>专享优惠 极速成单</p>
            <van-button color="linear-gradient(to right, #ff6d2d, #ff3506)" @click="signUp">签约带单</van-button>
          </div>
          <div class="item-r">
            <img src="../../../../assets/image/fa02.png"/>
          </div>
        </div>
      </div>
      <div class="list">
        <van-row>
          <van-col v-for="i in 4 " :key="i">
            <a href=""><img src="http://5b0988e595225.cdn.sohucs.com/images/20170903/3b270c8fc6084df7a187a514fb7b8ef0.jpeg"></a>
            <div class="main ab">
              <div class="infor-l ac">
                <h2>item.d_name</h2>
                <div class="-t">
                  <span>韵华茶几 | 原创设计</span>
                  <span><i class="iconfont">&#xe7ae;</i>15402</span>
                </div>
              </div>
              <div class="infor-r">
                <div class="dot"></div>
                <span>数码党</span>
              </div>
            </div>
        </van-col>
        </van-row>
      </div>
    </div>
</template>

<script>
  import IndexBanner from "../../IndexBanner.vue";
  import axios from "@/utils/request";
  export default {
    components: {IndexBanner},
    name: "BrandDesign",
    created() {
      this.getBanners();
    },
    data(){
      return{
        list:[{}],
        banners:[]
      }
    },
    methods: {
      recordTape() {
        this.$router.push({'name': 'Tape'})
      },
      signUp() {
        this.$router.push({'name': 'sign-up'})
      },
      getBanners() {
        axios.post("/api/Index/getIndexAdList/ap_id",{ap_id:10,}).then(res => {
          let banners = res.result.banners;
          this.banners = banners;
        });
      }

    }
  }
</script>

<style lang="scss" scoped>
  .w-ticket{
    .ticket-item:nth-child(1){margin-bottom:12px;}
    .ticket-item{
      border:solid 1px #eee;
      padding:12px 24px;
      justify-content:space-between;
      align-items:center;
      .item-l{
        width:46%;
        padding-right:2%;
        h2{font-size:17px;font-weight:bold;color:#000;}
        p{font-size:15px;color:#000;margin:5px 0;}
        .van-button{height:28px;border-radius:25px;line-height:28px;font-size:13px;}
      }
      .item-r{width:54%;}
    }
  }
  .list {
    height: 100%;
    padding: 15px;
    .van-row{
      .van-col{
        margin:6px 0;
        .main{
          color:#888;
          padding:12px 12px;
          border:solid 1px #eee;
          .infor-l{
            h2{
              font-size:14px;
              color:#000;
              padding-bottom:4px;
            }
            .-t{
              font-size:14px;
              i{font-size:14px;line-height:12px;padding:0 2px 0 6px;}
            }
          }
          .infor-r{
            text-align: center;
            .dot{width:24px;height:24px;margin:0 auto;background:#aaa;border-radius:50%;}
          }
        }
      }
    }
  }

</style>
