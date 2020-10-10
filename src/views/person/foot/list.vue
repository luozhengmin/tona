<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          浏览足迹
        </div>
        <div class="p-btn" @click="showAction" v-if="list.length!=0">
          <router-link to="">清空</router-link>
        </div>
      </div>
    </div>
    <div>
      <div v-if="list.length==0" class="empty">
        <div>
          <img src="../../../assets/image/empty-2.png" />
        </div>
        <div>当前还未浏览足迹记录</div>
      </div>
      <div class="list">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="getFooter"
          :offset="50"
          finished-text="没有更多了">
          <div class="date-item fix"  v-for="(itemfoot,j) in list" :key="j">
            <div class="date">{{itemfoot.browsetime_day}}</div>
            <van-row gutter="15" type="flex" justify="space-between">
              <van-col span="12" style="margin-bottom:15px" v-for="(itemchild,i) in itemfoot.goods" :key="i">
                <div class="prod">
                  <div @click="toProductDetail(itemchild.goods_id)">
                    <img :src="itemchild.goods_image_url" />
                  </div>
                  <div class="title">{{itemchild.goods_name}}</div>
                  <div class="desc">{{itemchild.goods_advword}}</div>
                  <div class="bottom">
                    <div>
                      <span class="fuhao">￥</span>{{itemchild.goods_promotion_price}}
                    </div>
                  </div>
                </div>
              </van-col>
            </van-row>
          </div>
        </van-list>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '28%' }" class="track">
      <div class="track-confirm">
        <p>确定要清空浏览足迹吗？</p>
        <h2 @click="toClearbrowse">确定</h2>
      </div>
      <div class="track-cancel" @click="onCancel">
        取消
      </div>
    </van-popup>
  </div>
</template>

<script>
  import { getMemberbrowseList,setMemberbrowseClear } from '../../../api/memberInfo'
  import { stringInterception } from '../../../utils/common'
  import { Toast } from "vant";
  export default {
    name: "private",
    data(){
      return{
        messageList : [],
        page : 1,
        page_total : 0,
        loading: false,
        finished: false,
        show: false,
        active: 0,
        list: [],
      }
    },
    created: function () {
      //获取浏览足迹
      this.getFooter()
    },
    methods: {
      showAction(){
        this.show = true;
      },
      onCancel() {
        this.show = false;
      },
      toClearbrowse() { //清空足迹

        setMemberbrowseClear().then(
          response => {
            if(response.code == 10000 && response.result == 1){
              Toast.success('清除成功')
              this.getFooter()
              this.show = false
            }else{
              Toast.fail('清除失败')
              return
            }

          },
          error => {}
        )
      },

      getFooter() {
        let params = {
          page: this.page,
          pagesize: 5
        };
        getMemberbrowseList(params).then(res => {
          this.list = res.result.goodsbrowse_list;
          this.page_total = res.result.page_total;
          console.log(this.page_total)
          if (this.page < this.page_total) {
            this.page++;
          } else {
            this.finished = true;
          }
          this.loading = false;
        }).catch((error) => {
          console.log("error")
        });
      },

      // 商品详情页
      toProductDetail(id) {
        this.$router.push({ name: 'ProductDetail', query: { id : id }})
      }
    },
  }
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  min-height: 100%;
  .empty {
    padding: 50px 15px;
    font-size: 14px;
    color: #b7b7b7;
    text-align: center;
  }
  .list {
    height: 100%;
    padding: 15px;
    .date-item {
      .date {
        font-size: 16px;
        color: #323232;
        padding: 12px 0;
      }
    }
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
        font-size: 15px;
        color: #323232;
        padding: 10px 15px 5px 15px;
      }
      .desc {
        padding: 0 15px 6px 15px;
        color: #888;
        font-size:13px;
      }
      .bottom {
        padding: 0 15px 10px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #f4523b;
        font-size: 18px;
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
.track{
  color:#0076ff;
  text-align:center;
  background-color:initial;
  padding:0 15px;
  .track-confirm{
    background-color:rgba(255,255,255,0.85);
    border-radius:4px;
    margin-bottom:12px;
    p,h2{padding:12px 0;font-size:14px;}
    h2{color:#f52525;border-top:solid 1px #d5d5d5;}
  }
  .track-cancel{
    background-color:rgba(255,255,255,0.85);font-size:14px;
    padding:12px 0;
    border-radius:4px;
  }
}

</style>
