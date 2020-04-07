<template>
    <div class="container">
      <div class="wrap fix">
        <div class="global-choose">
          <van-cell title="TONA 门店" is-link @click="showPopup">
            <template #default>
              <span class="custom-title">上海</span>
              <span class="line"></span>
              <span class="custom-title">上海市</span>
            </template>
          </van-cell>
          <van-popup
            v-model="show"
            position="bottom"
            :style="{ height: '30%' }">
            <van-area :area-list="areaList" :columns-num="2" title="地址" />
          </van-popup>

        </div>
        <div class="global-list">
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item name="1">
              <template #title>
                <div class="global-title">TONA国际卫浴上海虹桥店</div>
                <div class="global-add">上海市虹桥世界中心5369号L3A区二楼202</div>
              </template>
              <template #right-icon>
                <van-icon name="question-o" />
              </template>
              <div class="add-detail fix">
                <div class="add-tag">
                  <van-tag round>纯德系</van-tag>
                  <van-tag round>现代简约</van-tag>
                  <van-tag round>北欧风</van-tag>
                </div>
                <div class="add-tel">
                  <p class="ab"><van-icon name="question-o" /><span>全屋家具、卫浴、衣柜</span></p>
                  <p class="ab"><van-icon name="question-o" /><span>021-60299001</span></p>
                  <p class="ab"><van-icon name="question-o" /><span>上海市虹桥世界中心5369号L3A区二楼202</span></p>
                </div>
                <div class="add-pic">
                  <img src="../../../assets/image/cp01.jpg">
                </div>
                <div class="add-btn">
                  <van-button type="info">预约到店</van-button>
                </div>
              </div>
            </van-collapse-item>
            <van-collapse-item name="2">
              <template #title>
                <div class="global-title">TONA国际卫浴上海虹桥店</div>
                <div class="global-add">上海市虹桥世界中心5369号L3A区二楼202</div>
              </template>
              <template #right-icon>
                <van-icon name="question-o" />
              </template>
              <div class="add-detail fix">
                <div class="add-tag">
                  <van-tag round>纯德系</van-tag>
                  <van-tag round>现代简约</van-tag>
                  <van-tag round>北欧风</van-tag>
                </div>
                <div class="add-tel">
                  <p class="ab"><van-icon name="question-o" /><span>全屋家具、卫浴、衣柜</span></p>
                  <p class="ab"><van-icon name="question-o" /><span>021-60299001</span></p>
                  <p class="ab"><van-icon name="question-o" /><span>上海市虹桥世界中心5369号L3A区二楼202</span></p>
                </div>
                <div class="add-pic">
                  <img src="../../../assets/image/cp01.jpg">
                </div>
                <div class="add-btn">
                  <van-button type="info">预约到店</van-button>
                </div>
              </div>
            </van-collapse-item>
            <van-collapse-item name="3">
              <template #title>
                <div class="infor">
                  <div class="global-title">TONA国际卫浴上海虹桥店</div>
                  <div class="global-add">上海市虹桥世界中心5369号L3A区二楼202</div>
                </div>
              </template>
              <template #right-icon>
                <van-icon name="question-o" />
              </template>
              <div class="add-detail fix">
                <div class="add-tag">
                  <van-tag round>纯德系</van-tag>
                  <van-tag round>现代简约</van-tag>
                  <van-tag round>北欧风</van-tag>
                </div>
                <div class="add-tel">
                  <p class="ab"><van-icon name="question-o" /><span>全屋家具、卫浴、衣柜</span></p>
                  <p class="ab"><van-icon name="question-o" /><span>021-60299001</span></p>
                  <p class="ab"><van-icon name="question-o" /><span>上海市虹桥世界中心5369号L3A区二楼202</span></p>
                </div>
                <div class="add-pic">
                  <img src="../../../assets/image/cp01.jpg">
                </div>
                <div class="add-btn">
                  <van-button type="info">预约到店</van-button>
                </div>
              </div>
            </van-collapse-item>
          </van-collapse>
        </div>
      </div>
    </div>
</template>

<script>

  export default {
    name: "Globalstore",
      data() {
        return {
          activeName: '',
          show: false,
        }
      },

      methods: {
        showPopup() {
          this.show = true;
        }
      }
    }
</script>

<style lang="scss" scoped>
  .container{
    background-color:#f7f7f7;
    height:100%;
  }
  .global-choose{
    width:100%;
    margin:12px 0;
    .van-cell{
      line-height:22px;
      .van-cell__title{
        color:#323232;
        font-weight:bold;
        font-size:16px;
      }
      .van-cell__value{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color:#323232;
        .line{display:inline-block;width:1px;background-color:#323232;height:18px;margin:1px 10px 0 12px;}
      }
      .van-cell__right-icon{margin-right:-4px;}
    }
  }
  .global-list{
    .van-collapse{
      .van-collapse-item{
        margin-bottom:8px;
      }
    }
  }
  .global-title{color:#323232;font-size:16px;padding-bottom:3px;}
  .global-add{color:#888;font-size:14px;}
  .add-detail{
    .add-tag .van-tag{
      font-size:14px;
      padding:4px 14px;
      margin-right:4px;
    }
    .add-pic{
      padding:12px 0;
      img{
        border-radius:5px;
      }
    }
    .add-tel{
      p{
        align-items:center;
        font-size:14px;
        padding-top:10px;
        i{padding-right:8px;}
      }
    }
    .add-btn{
      .van-button--info{
        border:none;background-color:#323232;width:100%;border-radius:5px;
      }
    }
  }
</style>
