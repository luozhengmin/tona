<template>
  <div>
    <index-banner :images="images"></index-banner>
    <div class="sieve-list">
      <van-dropdown-menu active-color="#f4523b">
        <van-dropdown-item v-model="value1" :options="option1" title="排序"/>
        <van-dropdown-item v-model="value2" :options="option2" title="风格"/>
        <van-dropdown-item v-model="value3" :options="option3" title="面积"/>
      </van-dropdown-menu>
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

  export default {
    components: {IndexBanner},
    name: "DesignPlan",
    data(){
      return{
        overlay:false,
        value1: 0,
        value2: 'a',
        value3: 'A',
        option1: [
          { text: '默认', value: 0 },
          { text: '收藏数', value: 1 },
          { text: '浏览数', value: 2 }
        ],
        option2: [
          { text: '不限', value: 'a' },
          { text: '现代风格', value: 'b' },
          { text: '新中式', value: 'c' },
          { text: '北欧', value: 'd' },
          { text: '欧式', value: 'e' },
          { text: '简欧', value: 'f' },
          { text: '日式', value: 'g' },
          { text: '地中海', value: 'h' },
          { text: '田园', value: 'i' },
          { text: '美式', value: 'j' },
          { text: '简美', value: 'k' },
          { text: '混搭', value: 'l' },
        ],
        option3: [
          { text: '不限', value: 'A' },
          { text: '50-80m²', value: 'B' },
          { text: '80-100m²', value: 'C' },
          { text: '80-130m²', value: 'D' },
          { text: '130m以上', value: 'E' },
        ],
        images:[
          { id:1,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg',index_link:'http://www.baidu.com'},
          { id:2,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg',index_link:'http://www.baidu.com'},
          { id:3,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg',index_link:'http://www.baidu.com'},
          { id:4,imgUrl:'https://img.yzcdn.cn/vant/apple-1.jpg',index_link:'http://www.baidu.com'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sieve-list{
    padding:0 15px;
    .van-dropdown-menu{
      background-color:#f7f7f7;
    }
  }
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
