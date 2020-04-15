<template>
    <div>
      <index-banner></index-banner>
      <index-menu-1></index-menu-1>
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
            <img src="../../../assets/image/cp01.jpg">
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
      </div>

      <div class="index-brand-1 fix">
        <div class="brand-item" v-for="i in 3" :key="i">
          <div class="wrap fix">
            <div class="title-t">
              <h2><span>发现品牌</span></h2>
            </div>
            <div class="brand-con ab fix">
              <div class="brand-con-l">
                <h3>TONA HOME x <span>品牌季</span></h3>
                <span></span>
                <h2>空间有限，选择无线</h2>
                <p>用我们的设计打造你的专属空间</p>
              </div>
              <div class="brand-con-r">
                <img src="../../../assets/image/cp01.jpg">
              </div>
            </div>
          </div>
          <div class="brand-list fix">
            <van-swipe :loop="false" :width="110" :show-indicators="false">
              <van-swipe-item  v-for="i in 5" :key="i">
                <div class="p-pic">
                  <img src="../../../assets/image/cp02.jpg">
                </div>
                <div class="p-infor">
                  <h2>TONA卫浴</h2>
                  <p>纯德系，现代卫浴品牌</p>
                </div>
              </van-swipe-item>
            </van-swipe>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import IndexBanner from "../IndexBanner.vue";
  import IndexMenu1 from "../IndexMenu-1.vue";

  export default {
    components: {
      IndexMenu1,
      IndexBanner
    },
    name: "BrandList-1",
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
                i{font-size:12px;line-height:12px;padding:0 2px 0 6px;}
              }
            }
            .infor-r{
              flex-direction:column;
              text-align:right;
              .van-tag{border-radius:10px 10px 10px 0;margin-bottom: 2px;}
              span{
                align-items:center;
                .van-icon{font-size:16px;padding-right:2px;}
              }
            }
          }
        }
  }
  .brand-item{
    margin-bottom:12px;
    .brand-list{
      margin:-20px 0 0 7%;
      padding:12px 0 12px 12px;
      background-color:#f7f7f7;
      border-top-left-radius:5px;
      border-bottom-left-radius:5px;
      .van-swipe-item{
        margin-right:5px;
      }
      .p-pic{
        padding:0 6px;
        img{border-radius:5px;}
      }
      .p-infor{
        text-align:center;
        h2{font-size:14px;color:#323232;margin:6px 0 2px 0;}
        p{color:#b7b7b7;}
      }
    }
  }

</style>
