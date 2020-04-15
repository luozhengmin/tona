<template>
    <div>
      <index-banner></index-banner>
      <div class="r-solution fix">
        <div class="index-brand fix">
          <div class="wrap fix">
            <div class="title-t">
              <h2><span>推荐方案</span></h2>
            </div>
            <div class="brand-con ab fix">
              <div class="brand-con-l">
                <h3>TONA HOME x <span>卫浴家装</span></h3>
                <span></span>
                <h2>致力为全球用户提供</h2>
                <p>自然健康的全屋解决方案</p>
              </div>
              <div class="brand-con-r">
                <img src="../../../../assets/image/cp01.jpg">
              </div>
            </div>
          </div>
          <div class="design-list fix">
            <van-swipe :loop="false" :width="300" :show-indicators="false">
              <van-swipe-item v-for="(item,index) in childlist" :key="index">
                <a href=""><img src="http://5b0988e595225.cdn.sohucs.com/images/20170903/3b270c8fc6084df7a187a514fb7b8ef0.jpeg"></a>
                <div class="main ab">
                  <div class="infor-l ac">
                    <h2>{{item.d_name}}</h2>
                    <div class="-t">
                      <span>纯德系，现代卫浴品牌</span>
                    </div>
                  </div>
                  <div class="infor-r">
                    <van-tag color="#ee502f">NEW</van-tag>
                    <span class="ab"><van-icon name="eye-o" />15402</span>
                  </div>
                </div>
              </van-swipe-item>
            </van-swipe>

          </div>

          <div class="list">
            <div class="title-t">
              <h2><span>新品推荐</span></h2>
            </div>
            <van-row gutter="15">
              <van-col span="12" style="margin:7.5px 0" v-for="i in 4 " :key="i">
                <div class="prod">
                  <div>
                    <img src="../../../../assets/image/prod-2.jpg" />
                  </div>
                  <div class="main">
                    <div class="title">欧式悬挂式浴室柜</div>
                    <div class="desc">45度角双抽拉手设计</div>
                    <div class="bottom">
                      <div>
                        <span class="fuhao">￥</span>2580.00
                      </div>
                      <div class="icon">
                        <van-icon name="cart" />
                      </div>
                    </div>
                  </div>
                </div>
              </van-col>
            </van-row>
          </div>

          <div class="custom-adv fix">
            <div class="adv-pic">
              自定义广告内容区
            </div>
            <div class="adv-pic">
              自定义广告内容区
            </div>
            <div class="adv-pic">
              自定义广告内容区
            </div>
          </div>

          <div class="list">
            <div class="title-t">
              <h2><span>猜你喜欢</span></h2>
            </div>
            <van-row gutter="15">
              <van-col span="12" style="margin:7.5px 0" v-for="i in 4 " :key="i">
                <div class="prod">
                  <div>
                    <img src="../../../../assets/image/prod-2.jpg" />
                  </div>

                  <div class="main">
                    <div class="title">欧式悬挂式浴室柜</div>
                    <div class="desc">45度角双抽拉手设计</div>
                    <div class="bottom">
                      <div>
                        <span class="fuhao">￥</span>2580.00
                      </div>
                      <div class="icon">
                        <van-icon name="cart" />
                      </div>
                    </div>
                  </div>
                </div>
              </van-col>
            </van-row>
          </div>


        </div>
      </div>
    </div>
</template>

<script>
  import IndexBanner from "../../IndexBanner";
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'vant';

  Vue.use(Swipe);
  Vue.use(SwipeItem);
  export default {
    components: {
      IndexBanner
    },
    name: "BrandHome",
    data(){
      return{
        childlist:[
          {id:1,d_name:'TONA卫浴'},
          {id:2,d_name:'TONA卫浴'},
          {id:3,d_name:'TONA卫浴'},
          {id:4,d_name:'TONA卫浴'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .design-list{
    color:#323232;
    margin:12px 0 0 15px;position:relative;overflow:hidden;
    .van-swipe-item{
      margin-right:10px;
      .main{
        color:#888;
        padding:12px 12px;
        align-items:center;
        border:solid 1px #eee;
        .infor-l{
          h2{
            font-size:14px;
            color:#000;
            padding-bottom:4px;
          }
          .-t{
            font-size:14px;
            i{font-size:12px;line-height:12px;padding:0 2px 0 6px;}
          }
        }
        .infor-r{
          flex-direction:column;
          text-align:right;
          .van-tag{border-radius:10px 10px 10px 0;margin-bottom:3px;}
          span{
            align-items:center;
            .van-icon{font-size:16px;padding-right:2px;}
          }
        }
      }
    }
  }

  .custom-adv{
    padding:0 15px;
    .adv-pic{
      margin:6px 0;
      width:100%;height:80px;background-color:#ddd;font-size:16px;color:#aaa;
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
      .main{
        border:solid 1px #eee;
        .title {
          font-size: 15px;
          color: #323232;
          padding: 10px 15px 5px 15px;
        }
        .desc {
          padding: 0 15px 10px 15px;
          color: #888;
          font-size: 13px;
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
</style>
