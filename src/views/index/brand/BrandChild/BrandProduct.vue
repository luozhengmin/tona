<template>
    <div>
      <div class="s-search">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入商品关键词或用户名"
          @search="onSearch">
          <template #left-icon>
            <van-icon name="chat-o" />
          </template>
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
      </div>
      <div class="s-select">
        <ul class="s-nav ab fix">
          <li class="ab" v-for="(tab,index) in tabsName" :key="tab.id" @click="tabsSwitch(index)"
              :class="{active:num === index}">
            <a href="javascript:;" class="ab"><span>{{tab.tabTitle}}</span><van-icon name="chat-o" /></a>
          </li>
        </ul>
        <div class="listItem fix">
          <div class="list tabCard">
            <van-row gutter="15">
              <van-col span="12" style="margin-bottom:15px" v-for="i in 4 " :key="i">
                <div class="prod">
                  <div>
                    <img src="../../../../assets/image/prod-2.jpg" />
                  </div>
                  <div class="title">欧式悬挂式浴室柜11</div>
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
              </van-col>
            </van-row>
          </div>
          <div class="list tabCard">
            <van-row gutter="15">
              <van-col span="12" style="margin-bottom:15px" v-for="i in 4 " :key="i">
                <div class="prod">
                  <div>
                    <img src="../../../../assets/image/prod-2.jpg" />
                  </div>
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
              </van-col>
            </van-row>
          </div>
          <div class="list tabCard">
            <van-row gutter="15">
              <van-col span="12" style="margin-bottom:15px" v-for="i in 4 " :key="i">
                <div class="prod">
                  <div>
                    <img src="../../../../assets/image/prod-2.jpg" />
                  </div>
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
              </van-col>
            </van-row>
          </div>
          <div class="list tabCard">
            <van-row gutter="15">
              <van-col span="12" style="margin-bottom:15px" v-for="i in 4 " :key="i">
                <div class="prod">
                  <div>
                    <img src="../../../../assets/image/prod-2.jpg" />
                  </div>
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
              </van-col>
            </van-row>
          </div>

        </div>

      </div>

    </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    name: "BrandProduct",
    data() {
      return {
        value: '',
        tabsName:[
          {tabTitle:'综合',isActive:true,},
          {tabTitle:'商品',isActive:false,},
          {tabTitle:'销量',isActive:false,},
          {tabTitle:'价格',isActive:false,}
        ],
        active: false,
        num:0,
      };
    },
    methods: {
      onSearch(val) {
        Toast(val);
      },
      tabsSwitch: function(tabIndex) {
        var tabCardCollection = document.querySelectorAll(".tabCard"),
          len = tabCardCollection.length;
        for(var i = 0; i < len; i++) {
          tabCardCollection[i].style.display = "none";
          this.tabsName[i].isActive = false;
        }
        this.tabsName[tabIndex].isActive = true;
        tabCardCollection[tabIndex].style.display = "block";
        this.num = tabIndex;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .s-search {
    .van-search{
      padding:12px 15px;
      .van-search__content{
        background-color:inherit;
        padding-left:0;
        .van-cell{
          border:solid 1px #eee;
          border-radius:25px;
          padding: 5px 8px 5px 10px;
        }
      }
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
      .title {
        font-size: 16px;
        color: #323232;
        padding: 10px 15px 5px 15px;
      }
      .desc {
        padding: 0 15px 10px 15px;
        color: #888;
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
</style>
