<template>
  <div class="container">
    <div class="header"></div>
    <div class="form">
      <van-field
        readonly
        clickable
        input-align="right"
        label="发票信息"
        :value="value1"
        @click="showPicker1 = true"
        style="margin-bottom:15px"
      >
        <template #left-icon>
          <span class="require"></span>
        </template>
      </van-field>
      <van-field
        readonly
        clickable
        input-align="right"
        label="抬头类型"
        :value="value2"
        @click="showPicker2 = true"
        style="margin-bottom:15px"
      >
        <template #left-icon>
          <span class="require"></span>
        </template>
      </van-field>
      <van-field label="发票抬头" v-model="taitou" placeholder="请输入发票抬头">
        <template #left-icon>
          <span class="require">*</span>
        </template>
      </van-field>
      <van-field label="纳税人识别号" placeholder="请输入纳税人识别号">
        <template #left-icon>
          <span class="require">*</span>
        </template>
      </van-field>
      <van-field label="地址" placeholder="请输入地址">
        <template #left-icon>
          <span class="require"></span>
        </template>
      </van-field>
      <van-field label="电话" placeholder="请输入电话号码">
        <template #left-icon>
          <span class="require"></span>
        </template>
      </van-field>
      <van-field label="开户行" placeholder="请输入开户行">
        <template #left-icon>
          <span class="require"></span>
        </template>
      </van-field>
      <van-field label="开户行账号" placeholder="请输入开户行账号">
        <template #left-icon>
          <span class="require"></span>
        </template>
      </van-field>
      <van-field
        readonly
        clickable
        input-align="right"
        label="发票内容"
        :value="value3"
        @click="showPicker3 = true"
        style="margin-bottom:15px"
      >
        <template #left-icon>
          <span class="require"></span>
        </template>
      </van-field>
      <van-field label="开户行账号" style="margin-bottom:40px" placeholder="请输入开户行账号">
        <template #left-icon>
          <span class="require">*</span>
        </template>
      </van-field>
      <div class="btn">
        <van-button color="#1b1b1b" block @click="onSubmit">提交</van-button>
      </div>
      <div class="tips">
        <p style="display: flex;align-items: center;">
          <van-icon name="warning" style="margin-right:5px" />发票须知
        </p>
        <p>1.开票金额为用户实际支付金额(不含礼品卡)</p>
        <p>2.电子发票可在确认收货后，在“订单详情“查看</p>
        <p>3.未随箱寄出的纸质发票会在发货后15-30个工作日单独寄出</p>
        <p>4.单笔订单只支持开具一种发票类型，如需增值税专用发票请联系客服处理</p>
        <p>5.年购订单发票随每期子单寄出</p>
      </div>
    </div>

    <van-popup v-model="showPicker1" position="bottom">
      <van-picker
        show-toolbar
        title="发票信息"
        :columns="columns1"
        @confirm="onConfirm1"
        @cancel="showPicker1 = false"
      />
    </van-popup>
    <van-popup v-model="showPicker2" position="bottom">
      <van-picker
        show-toolbar
        title="抬头类型"
        :columns="columns2"
        @confirm="onConfirm2"
        @cancel="showPicker2 = false"
      />
    </van-popup>
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
import { Toast } from "vant";
export default {
  data() {
    return {
      value1: "",
      columns1: ["不开发票", "电子发票", "纸质发票"],
      showPicker1: false,
      value2: "",
      columns2: ["个人", "企业"],
      showPicker2: false,
      value3: "",
      columns3: ["淋浴房", "浴缸", "智能马桶", "浴室柜", "建材", "家居"],
      showPicker3: false,
      taitou: ""
    };
  },
  methods: {
    onSubmit() {
      if (!this.taitou) {
        Toast("请填写发票抬头");
        return;
      }
      Toast({
        message: "提交成功",
        icon: "passed"
      });
    },
    onConfirm1(value) {
      this.value1 = value;
      this.showPicker1 = false;
    },
    onConfirm2(value) {
      this.value2 = value;
      this.showPicker2 = false;
    },
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
  .form {
    .require {
      color: #f4523b;
      margin-top: 4px;
      display: inline-block;
      width: 6px;
    }
    .btn {
      padding: 0 15px;
    }
    .tips {
      padding: 0 15px;
      color: #888;
      margin-top: 15px;
      line-height: 24px;
      padding-bottom: 50px;
    }
  }
}
</style>