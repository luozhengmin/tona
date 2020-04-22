<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          个人中心
        </div>
      </div>
    </div>
    <div class="user">
      <van-image
        round
        fit="cover"
        width="55px"
        height="55px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="info ab ac">
        <div>
          <div class="name">你是夏天</div>
          <div class="id">ID：84458566</div>
        </div>
      </div>
    </div>
    <div class="group1">
      <van-cell title="个人信息" is-link to="/person-edit"/>
      <van-cell title="修改密码" is-link to="/update-password"/>
      <van-cell title="修改手机" is-link value="188****5256" to="/update-mobile-1"/>
      <van-cell title="认证资料" is-link value="未认证" to="/identify"/>
    </div>
    <div class="group2">
      <van-cell title="第三方授权" is-link to="/third-auth"/>
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
    margin-bottom: 12px;
    .info {
      margin-left: 12px;
      align-items: center;
      justify-content: space-between;
      .name {
        font-size: 16px;
        color: #363636;
      }
      .id {
        color: #888;
        font-size:13px;
      }
    }
  }
  .group1,
  .group2 {
    margin-bottom: 12px;
    .van-cell {
      font-size: 14px;
      line-height:1.8;
      .van-cell__left-icon,
      .van-cell__right-icon {
        font-size:18px;
      }
    }
  }
}
</style>
