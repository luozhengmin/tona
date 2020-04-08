<template>
  <div class="container">
    <div class="header"></div>
    <div class="form">
      <div class="item">
        <van-field
          readonly
          input-align="right"
          placeholder="请选择反馈类型"
          label="发票内容"
          :value="value3"
          @click="showPicker3 = true"
          is-link
        />
      </div>
      <div class="item">
        <van-field
          rows="3"
          autosize
          type="textarea"
          placeholder="请写下您对朵纳的感受，我们将认真听取您的意见，努力提供更优质的服务。"
        />
      </div>
      <div class="item">
        <van-field placeholder="手机/邮箱/QQ(选填)" />
      </div>
    </div>
    <div class="upload">
      <van-uploader v-model="fileList" multiple />
    </div>
    <div class="btn">
      <van-button color="#1b1b1b" block @click="save()">保存</van-button>
    </div>

    <van-popup v-model="showPicker3" position="bottom">
      <van-picker
        show-toolbar
        title="发票内容"
        :columns="columns3"
        @confirm="onConfirm3"
        @cancel="showPicker3 = false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value3: "",
      columns3: ["淋浴房", "浴缸", "智能马桶", "浴室柜", "建材", "家居"],
      showPicker3: false
    };
  },
  methods: {
    onConfirm3(value) {
      this.value3 = value;
      this.showPicker3 = false;
    }
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
  .van-cell {
    border: 1px solid #eeeeee;
  }
}
</style>