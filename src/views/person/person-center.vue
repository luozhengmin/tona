<template>
  <div class="container">
    <div class="header"></div>
    <div class="user">
      <van-image
        round
        fit="cover"
        width="55px"
        height="55px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="info">
        <div>
          <div class="name">你是夏天</div>
          <div class="id">ID：84458566</div>
        </div>
      </div>
    </div>
    <div class="group1">
      <van-cell title="个人信息" is-link />
      <van-cell title="修改密码" is-link />
      <van-cell title="修改手机" is-link value="188****5256" />
      <van-cell title="认证资料" is-link value="未认证" />
    </div>
    <div class="group2">
      <van-cell title="第三方授权" is-link />
    </div>
  </div>
</template>

<script>
export default {
  name: ""
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  height: 100%;
  .user {
    padding: 15px;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .info {
      margin-left: 15px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .name {
        padding: 3px 0;
        font-size: 18px;
        color: #363636;
      }
      .id {
        color: #888888;
      }
    }
  }
  .group1,
  .group2 {
    margin-bottom: 15px;
    .van-cell {
      font-size: 16px;
      line-height: 30px;
      .van-cell__left-icon,
      .van-cell__right-icon {
        font-size: 20px;
      }
    }
  }
}
</style>
