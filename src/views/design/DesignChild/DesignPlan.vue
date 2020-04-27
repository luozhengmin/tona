<template>
  <div>
    <index-banner :banners="banners"></index-banner>
    <div class="sieve-list">
      <div class="sieve-item fix">
        <ul class="sieve-nav ab fix">
          <li v-for="(item,index) in tabsName" :key="item.id" @click="tabsSwitch(index)"
              :class="{active:num === index}">
            <a href="javascript:;">{{item.tabTitle}}<i class="fa fa-sort-desc"></i></a>
          </li>
        </ul>
      </div>
      <div class="listItem fix">
        <div class="tabCard fix">
          <ul>
            <li><a href="">默认</a></li>
            <li><a href="">收藏数</a></li>
            <li><a href="">浏览数</a></li>
          </ul>
        </div>
        <div class="tabCard fix">
          <ul>
            <li><a href="">不限</a></li>
            <li><a href="">现代风格</a></li>
            <li><a href="">新中式</a></li>
            <li><a href="">北欧</a></li>
            <li><a href="">简欧</a></li>
            <li><a href="">日式</a></li>
            <li><a href="">地中海</a></li>
            <li><a href="">田园</a></li>
            <li><a href="">美式</a></li>
            <li><a href="">简美</a></li>
            <li><a href="">混搭</a></li>
          </ul>
        </div>
        <div class="tabCard fix">
          <ul>
            <li><a href="">不限</a></li>
            <li><a href="">50-80m²</a></li>
            <li><a href="">80-100m²</a></li>
            <li><a href="">100-130m²</a></li>
            <li><a href="">130m²及以上</a></li>
          </ul>
        </div>
      </div>

    </div>
    <div class="list">
      <van-row>
        <van-col v-for="i in 3 " :key="i">
          <a href=""><img src="http://5b0988e595225.cdn.sohucs.com/images/20170903/3b270c8fc6084df7a187a514fb7b8ef0.jpeg"></a>
          <div class="main">
            <div class="infor-l">
              <h2>GDC Award 2019 评审奖 获奖作品</h2>
              <div class="-t">
                <span>韵华茶几 | 原创设计</span>
              </div>
            </div>
            <div class="infor-r ab">
              <div class="dot"></div>
              <span class="ac">数码党</span>
              <div class="view ab"><van-icon name="eye-o" />15402</div>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="list choice-list">
      <van-row gutter="15">
        <van-col span="12" v-for="i in 3 " :key="i">
          <a href=""><img src="http://5b0988e595225.cdn.sohucs.com/images/20170903/3b270c8fc6084df7a187a514fb7b8ef0.jpeg"></a>
          <div class="main">
            <div class="infor-l">
              <h2>GDC Award 2019 评审奖 获奖作品</h2>
            </div>
            <div class="infor-r ab">
              <div class="dot"></div>
              <span class="ac">数码党</span>
              <div class="view ab"><van-icon name="eye-o" />15402</div>
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
    name: "DesignPlan",
    created() {
      this.getBanners();
    },
    data(){
      return{
        active:false,
        num:'',
        banners:[],
        tabsName:[
          {tabTitle:'排序',active:false,},
          {tabTitle:'风格',active:false,},
          {tabTitle:'面积',active:false,},
        ],
      }
    },
    methods:{
      getBanners() {
        axios.post("/api/Index/getIndexAdList/ap_id",{ap_id:1,}).then(res => {
          let banners = res.result.banners;
          this.banners = banners;
        });
      },
      tabsSwitch: function(tabIndex) {
        var tabCardCollection = document.querySelectorAll(".tabCard"),
          len = tabCardCollection.length;
        for(var i = 0; i < len; i++) {
          tabCardCollection[i].style.display = "none";
          this.tabsName[i].active = false;
        }
        this.tabsName[tabIndex].active = true;
        tabCardCollection[tabIndex].style.display = "block";
        this.num = tabIndex;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    height: 100%;
    padding:10px 15px 0 15px;
    .van-row{
      .van-col:last-child{margin-bottom:0;}
      .van-col{
        margin:6px 0;
        a{
          display:block;
          img{border-top-left-radius:4px;border-top-right-radius:4px;}
        }
        .main{
          color:#888;
          border:solid 1px #eee;
          .infor-l{
            padding:8px 12px;
            h2{font-size:14px;color:#000;padding-bottom:4px;overflow: hidden;white-space:nowrap;text-overflow:ellipsis;}
            .-t{
              font-size:13px;
              i{font-size:12px;line-height:12px;padding:0 2px 0 6px;}
            }
          }
          .infor-r{
            padding:8px 12px;
            align-items:center;
            border-top:solid 1px #eee;
            .dot{width:24px;height:24px;background:#aaa;border-radius:50%;margin-right:8px;}
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
    .van-divider{
      margin:0 0 6px 0;
    }
    .van-row {
      .van-col:last-child{margin:6px 0;}
      .van-col {
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
