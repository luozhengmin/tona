<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          第三方授权
        </div>
      </div>
    </div>
    <div class="group">
      <van-cell title="绑定新浪微博">
        <template #icon>
          <div class="icon weibo">
            <i class="fa fa-weibo"></i>
          </div>
        </template>
      </van-cell>
      <van-cell title="绑定QQ账号">
        <template #icon>
          <div class="icon qq">
            <i class="fa fa-qq"></i>
          </div>
        </template>
      </van-cell>
      <van-cell>
        <template #icon>
          <div class="icon weixin">
            <i class="fa fa-weixin"></i>
          </div>
        </template>
        <template #title>
          <div class="title">已绑定微信</div>
          <div class="desc">(您绑定的账号为：Windir)</div>
        </template>
        <template #right-icon>
          <van-button slot="button" type="info" plain size="small">解除绑定</van-button>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  height: 100%;
  .group {
    font-size: 16px;
    .van-cell {
      font-size: 15px;
      line-height: 50px;
      display: flex;
      align-items: center;
      .van-button {
        border: none;
        font-size: 14px;
        padding:0;
      }
      .icon {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        line-height: 43px;
        text-align: center;
        border-radius: 100%;
        i {
          font-size: 20px;
          color: #fff;
        }
      }
      .weibo {
        background-color: #e63c53;
      }
      .qq {
        background-color: #4dafea;
      }
      .weixin {
        background-color: #58b202;
      }
      .title {
        line-height: 25px;
      }
      .desc {
        font-size: 13px;
        color: #888;
        line-height:1.5;
      }
    }
  }
}
</style>
