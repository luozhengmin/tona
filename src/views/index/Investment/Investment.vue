<template>
    <div>
      <div class="container">
        <div class="apply">
          <a href=""><img src="../../../assets/image/jm01.jpg"/></a>
        </div>
        <div class="apply-adv">
          <a href=""><img src="../../../assets/image/jm02.jpg"/></a>
        </div>
        <div class="apply-condition">
          <a href=""><img src="../../../assets/image/jm03.jpg"/></a>
        </div>
        <div class="apply- process">
          <a href=""><img src="../../../assets/image/jm04.jpg"/></a>
        </div>
        <div class="apply-btn wrap fix">
          <div class="btn" @click="showPopup">TONA HOME 招商申请</div>
          <van-popup
            v-model="show"
            closeable
            position="bottom"
            :style="{ height: '47%' }">
            <div class="apply-tel fix">
              <h2>TONA HOME招商申请</h2>
              <p>你还可拨打电话咨询 400-000-0267</p>
              <div class="message">
                <van-field v-model="value" placeholder="请输入您所在企业名称" />
                <van-field
                  center
                  clearable
                  placeholder="请输入您的联系方式"
                >
                  <template #button>
                    <van-button size="small" type="primary">获取验证码</van-button>
                  </template>
                </van-field>
                <van-field v-model="value" placeholder="请输入验证码" />
                <div class="apply-submit">
                  <van-button round block type="info" native-type="submit" @click="successPop">
                    立即申请
                  </van-button>
                </div>
              </div>
            </div>
          </van-popup>
        </div>
      </div>
    </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    name: "Investment",
    data() {
      return {
        show: false,
        value:''
      }
    },

    methods: {
      showPopup() {
        this.show = true;
      },
      successPop(){
        Toast.success('申请成功');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .apply-btn{
    margin:40px 0 12px 0;
    width:100%;
    .btn{
      background-color:#323232;text-align:center;font-size:14px;font-weight:bold;color:#fff;padding:12px 16px;border-radius:5px;
    }
    .van-popup{
      background-color:#f6f6f6;
      .apply-tel{
        color:#323232;
        text-align: center;
        padding:24px 15px 0 15px;
        h2{font-size:16px;font-weight:bold;padding-bottom:4px;}
        p{font-size:14px;}
        .message{
          margin-top:16px;
          .van-cell{border:solid 1px #eee;margin-bottom:12px;padding:8px 16px;}
          .apply-submit{
            .van-button{background-color:#323232;text-align:center;font-size:14px;font-weight:bold;color:#fff;border-radius:5px;
              border:inherit;
            }
          }
        }
      }
    }
  }
  .van-button--primary {
    color: #888;
    background-color:inherit;
    border:inherit;
    font-size:14px;
  }

</style>
