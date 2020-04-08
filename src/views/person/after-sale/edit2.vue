<template>
  <div class="container">
    <div class="header"></div>
    <div class="form">
      <div class="item">
        <div class="label">退货原因</div>
        <van-field readonly placeholder="请选择" is-link />
      </div>
      <div class="item">
        <div class="label">问题描述</div>
        <van-field rows="3" autosize type="textarea" placeholder="请输入问题描述" />
      </div>
    </div>
    <div class="upload">
      <van-uploader v-model="fileList" multiple />
    </div>
    <div class="btn">
      <van-button color="#1b1b1b" block @click="save()">保存</van-button>
    </div>
    <div class="tips">
      <p style="display: flex;align-items: center;">
        <van-icon name="warning" style="margin-right:5px" />温馨提示：
      </p>
      <p>1、商品寄回地址将在审核通过后以短信形式告知，或在申请记录中查询。</p>
      <p>2、提交服务单后，售后专员可能与您电话沟通，请保持手机畅</p>
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
  background-color: #f7f7f7;
  min-height: 100%;
  .form {
    background-color: #ffffff;
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
    background-color: #ffffff;
    padding: 10px 15px;
  }
  .btn {
    margin-top: 30px;
    padding: 0 16px;
  }
  .tips {
    padding: 0 15px;
    color: #888;
    margin-top: 15px;
    line-height: 24px;
    padding-bottom: 50px;
  }
  .van-cell {
    border: 1px solid #eeeeee;
  }
}
</style>