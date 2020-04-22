<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          填写物流信息
        </div>
        <div class="p-btn">
          <router-link to=""><i class="iconfont bg-7">&#xe603;</i></router-link>
        </div>
      </div>
    </div>
    <div class="form">
      <div class="item">
        <div class="label ab">物流公司<i>*</i></div>
        <van-field readonly placeholder="请选择" is-link />
      </div>
      <div class="item">
        <div class="label ab">物流单号<i>*</i></div>
        <van-field placeholder="请输入您的物流单号" />
      </div>
      <div class="item">
        <div class="label ab">联系电话<i>*</i></div>
        <van-field placeholder="请输入您的联系电话" />
      </div>
      <div class="item">
        <div class="label ab">退货说明</div>
        <van-field
          rows="3"
          autosize
          type="textarea"
          placeholder="请输入退货说明"
        />
      </div>
    </div>
    <div class="upload-1">
      <van-uploader v-model="fileList"  :max-count="3" upload-icon="plus" upload-text="添加图片(最多三张)"/>
    </div>
    <div class="edit-btn">
      <van-button color="#e2e2e2" block>提交</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [],
      };
    }
  };
</script>

<style lang="scss" scoped>
.container {
  .form {
    padding: 0 15px;
    .item {
      padding-top: 8px;
      .label {
        padding: 8px 0 10px 0;
        color: #323232;
        font-size: 14px;
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
    padding: 18px 15px;
    p{color:#888;line-height:1.6;}
  }
  .van-cell {
    border: 1px solid #eeeeee;
  }
  .edit-btn{padding:0 15px;}
}
</style>
