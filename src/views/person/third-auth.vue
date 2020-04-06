<template>
  <div class="container">
    <div class="header"></div>
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
          <div class="desc">（您绑定的账号为：Windir）</div>
        </template>
        <template #button>
          <div class="icon weixin">
            <i class="fa fa-weixin"></i>
          </div>
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
      font-size: 16px;
      line-height: 50px;
      display: flex;
      align-items: center;
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
    }
  }
}
</style>