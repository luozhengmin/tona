<template>
    <div class="container">
      <div class="s-search">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入商品关键词或用户名"
          @search="onSearch"
          @cancel="onCancel">
          <template #left-icon>
            <van-icon class="fa fa-search"/>
          </template>
          <template #action>
            <div>取消</div>
          </template>
        </van-search>
      </div>

      <div class="list wrap fix">
        <van-tree-select
          height="80vw"
          :items="items"
          :main-active-index.sync="active"
        >
          <template #content>
            <div class="p-item" v-if="active === 0">
              <div class="p-pic">
                <img src="../../assets/image/cp01.jpg">
              </div>
              <div class="p-list">
                <h2>推荐</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <router-link to="/ProductList-Item">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </router-link>
                  </van-col>
                </van-row>
              </div>
              <div class="p-list">
                <h2>硬装建材</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
              <div class="p-list">
                <h2>软装灯饰</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
            </div>

            <div class="p-item" v-if="active === 1">
              <div class="p-pic">
                <img src="../../assets/image/cp03.jpg">
              </div>
              <div class="p-list">
                <h2>推荐</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
              <div class="p-list">
                <h2>硬装建材</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
              <div class="p-list">
                <h2>软装灯饰</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
            </div>

            <div class="p-item" v-if="active === 2">
              <div class="p-pic">
                <img src="../../assets/image/cp01.jpg">
              </div>
              <div class="p-list">
                <h2>推荐</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
              <div class="p-list">
                <h2>硬装建材</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
              <div class="p-list">
                <h2>软装灯饰</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
            </div>

            <div class="p-item" v-if="active === 3">
              <div class="p-pic">
                <img src="../../assets/image/cp03.jpg">
              </div>
              <div class="p-list">
                <h2>推荐</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
              <div class="p-list">
                <h2>硬装建材</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
              <div class="p-list">
                <h2>软装灯饰</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
            </div>

            <div class="p-item" v-if="active === 4">
              <div class="p-pic">
                <img src="../../assets/image/cp01.jpg">
              </div>
              <div class="p-list">
                <h2>推荐</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
              <div class="p-list">
                <h2>硬装建材</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
              <div class="p-list">
                <h2>软装灯饰</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
            </div>

            <div class="p-item" v-if="active === 5">
              <div class="p-pic">
                <img src="../../assets/image/cp01.jpg">
              </div>
              <div class="p-list">
                <h2>推荐</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
              <div class="p-list">
                <h2>硬装建材</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
              <div class="p-list">
                <h2>软装灯饰</h2>
                <van-row gutter="10">
                  <van-col span="8" v-for="i in 5 " :key="i">
                    <a href="">
                      <div class="prod-pic">
                        <img src="../../assets/image/cp02.jpg">
                      </div>
                      <div class="prod-title">
                        卫浴
                      </div>
                    </a>
                  </van-col>
                </van-row>
              </div>
            </div>
          </template>
        </van-tree-select>
      </div>
    </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    name: "ProductList",
    data(){
      return{
        value:'',
        onSearch(val) {
          Toast(val);
        },
        onCancel() {
          Toast('取消');
        },
        active: 0,
        items: [{ text: '推荐' }, { text: '硬装' },{ text: '软装' }, { text: '家电' },{ text: '定制' },{ text: '风格' }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .s-search {
    .van-search{
      padding:12px 15px;
      .van-search__action{padding:0 0 0 12px;}
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
  .list{
    margin:6px 0;
    .van-tree-select{
      .van-sidebar-item{
        width:60px;
        border:none;
        padding:0 8px 24px 12px;
      }
      .van-sidebar-item--select{color:#f4523b;}
      .van-tree-select__content {
        -webkit-box-flex: 4;
        -webkit-flex: 4;
        flex: 4;
        .p-item{
          .p-pic{
            img{border-radius:4px;}
          }
          .p-list{
            .van-row{
              .van-col{
                margin-bottom:6px;
                a{
                  .prod-title{text-align:center;color:#323232;}
                }
              }
            }
            h2{font-size:14px;color:#888;padding:12px 0;}
          }
        }
      }
    }
  }
</style>
