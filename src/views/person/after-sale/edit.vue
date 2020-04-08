<template>
  <div class="container">
    <div class="header"></div>
    <div class="form">
      <div class="item">
        <div class="label">物流公司</div>
        <van-field readonly placeholder="请选择" is-link />
      </div>
      <div class="item">
        <div class="label">物流单号</div>
        <van-field placeholder="请输入您的物流单号" />
      </div>
      <div class="item">
        <div class="label">联系电话</div>
        <van-field placeholder="请输入您的联系电话" />
      </div>
      <div class="item">
        <div class="label">退货说明</div>
        <van-field
          rows="3"
          autosize
          type="textarea"
          placeholder="请输入退货说明"
        />
      </div>
    </div>

    <div class="upload">
      <van-uploader v-model="fileList" multiple />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  .form {
    padding: 0 15px;
    .item {
      padding-top: 15px;
      .label {
        padding: 8px 0;
        color: #323232;
        font-size: 16px;
      }
    }
  }
  .upload {
    padding: 10px 15px;
  }
  .van-cell {
    border: 1px solid #eeeeee;
  }
}
</style>