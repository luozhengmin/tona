<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          意见反馈
        </div>
      </div>
    </div>
    <div class="form feedback">
      <div class="item">
        <van-field
          readonly
          input-align="right"
          label="请选择反馈类型"
          :value="value3"
          @click="showPicker3 = true"
          is-link
        />
      </div>
      <div class="item">
        <van-field
          rows="3"
          v-model="content"
          autosize
          type="textarea"
          placeholder="请写下您对朵纳的感受，我们将认真听取您的意见，努力提供更优质的服务。"
        />
      </div>
      <div class="item">
        <van-field placeholder="手机/邮箱/QQ(选填)" v-model="phone"/>
      </div>
    </div>
    <div class="upload-1">
      <van-uploader v-model="fileList"  :max-count="6" upload-icon="plus" :after-read="afterRead" upload-text="添加图片(最多六张)"/>
    </div>
    <div class="btn">
      <van-button color="#1b1b1b" block @click="save()">提交</van-button>
    </div>

    <van-popup v-model="showPicker3" position="bottom">
      <van-picker
        show-toolbar
        title="反馈类型"
        :columns="columns3"
        @confirm="onConfirm3"
        @cancel="showPicker3 = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "../../../utils/request";
import FeedBackApi from "../../../api/FeedBackApi";
export default {
  data(){
    return {
      value3: "",
      fileList: [],
      content:'',
      phone:'',
      columns3: [],
      showPicker3: false,
    };
  },
  created(){
    this.getFeedback();
  },
  methods: {
    onConfirm3(value) {
      this.value3 = value;
      this.showPicker3 = false;
    },
    getFeedback(){
      FeedBackApi.get().then(res =>{
        console.log(res)
        this.columns3 = res.result.options
      })
    },
    afterRead(file) {
      console.log(file);
      let formData = new FormData();
      formData.append("file", file.file);
      FeedBackApi.upload(formData).then(res => {
        console.log(res);
        file.url = res.result.file_path;
      });
    },
    save() {
      if (!this.value3) {
        Toast.fail("请选择反馈类型");
        return;
      }
      let params = {
        mbfb_cate: this.value3,
        mbfb_contact: this.phone,
        mbfb_content: this.content,
      };
      FeedBackApi.submit(params).then(res => {
        console.log(res);
        Toast.success("提交成功");
      });
    },
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
  .upload-1{
    padding: 18px 15px;
    p{color:#888;line-height:1.6;}
  }
  .btn {
    margin-top: 30px;
    padding: 0 16px;
    button{border-radius:4px;}
  }
  .van-cell {
    border: 1px solid #eeeeee;
  }
}

</style>
