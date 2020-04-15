<template>
    <div class="container">
      <div class="commit-success fix">
        <i class="van-icon van-icon-checked"></i>
        <h2>售后申请提交成功</h2>
        <div class="success-btn">
          <van-button color="#888" plain>查看记录</van-button>
          <van-button color="#888" plain to="/index">回到首页</van-button>
        </div>
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
    name: "success",
    data(){
      return{

      }
    },
  }
</script>

<style lang="scss" scoped>
.container{
  min-height:100%;
  background-color:#f7f7f7;
  .commit-success{
    background-color:#fff;
    padding:24px 15px;
    text-align:center;
    .van-icon{font-size:40px;color:#f4523b;}
    h2{font-size:15px;color:#f4523b;margin:8px 0 12px 0;}
    .success-btn{
      .van-button{height:32px;line-height:30px;border-radius:6px;padding:0 20px;margin:6px 4px;}
    }
  }
  .tips {
    padding: 0 15px;
    color: #888;
    margin-top: 15px;
    line-height: 24px;
    padding-bottom: 50px;
  }
}
</style>
