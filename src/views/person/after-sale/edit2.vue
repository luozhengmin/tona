<template>
  <div class="container">
    <div class="header"></div>
    <div class="form">
      <div class="item">
        <div class="label ab">退货原因<i>*</i></div>
        <van-field readonly placeholder="请选择退货原因" is-link @click="showReason = true" clickable title="发票内容"
                   name="picker"
                   :value="value"/>
      </div>
      <div class="item">
        <div class="label">问题描述</div>
        <van-field rows="3" autosize type="textarea" placeholder="请输入退货问题描述" />
      </div>
      <div class="upload-1">
        <van-uploader v-model="fileList"  :max-count="3" upload-icon="plus" upload-text="添加图片(最多三张)"/>
      </div>
      <div class="item lx">
        <div class="label">联系方式</div>
        <van-field label="联系人" />
        <van-field label="联系电话" />
        <van-field label="联系地址" />
      </div>
    </div>
    <!--退货原因开始-->
    <van-popup v-model="showReason" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirmReason"
        @cancel="showReason = false"
      />
    </van-popup>
    <!--退货原因结束-->
    <div class="btn">
      <van-button color="#1b1b1b" block @click="save()">提交</van-button>
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
    return {
      fileList: [],
      value: '',
      columns: ['建材', '家具', '家居', '智能马桶', '淋浴房','家居',],
      showReason: false,
    }
  },
  methods: {
    onConfirmReason(value) {
      this.value = value;
      this.showReason = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  min-height: 100%;
  .form {
    background-color: #ffffff;
    padding: 0 15px 15px 15px;
    .lx{
      .van-field{
        margin-bottom:12px;
      }
    }
    .item {
      padding-top: 8px;
      .label {
        padding: 8px 0 10px 0;
        color: #323232;
        font-size: 15px;
        align-items:center;
        i{
          color:#ff2300;
          padding-left:2px;
          display: block;
          width: 10px;
          height: 10px;
          line-height: 14px;
        }
      }
    }
  }
  .upload-1{
    padding: 18px 0 0 0;
    p{color:#888;line-height:1.6;}
    background-color:#fff;
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
