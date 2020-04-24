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
        v-bind:src="user.member_avatar+'?'+time"
      />
      <div class="info ab ac">
        <div>
          <div class="name">{{nickname}}</div>
          <div class="id">{{userid}}</div>
        </div>
      </div>
    </div>
    <div class="group1">
      <van-cell title="个人信息" is-link to="/person-edit"/>
      <van-cell title="修改密码" is-link to="/update-password"/>
      <van-cell title="修改手机" is-link :value="userphone" to="/update-mobile-1"/>
      <van-cell title="认证资料" is-link value="未认证" to="/identify"/>
    </div>
    <div class="group2">
      <van-cell title="第三方授权" is-link to="/third-auth"/>
    </div>
  </div>
</template>

<script>
import { getMemberInfo } from '../../api/memberInfo'
import { phoneNumFilter } from '@/utils/common'
export default {
  name: "",
  data(){
    return{
      user: {},
      isActive:false,
    }
  },
  created: function () {
    this.time = new Date().getTime();
    // this.utils.clearCookie('user_info')
    // this.utils.clearCookie('key')
      if($cookies.get('user_info')){
        getMemberInfo().then(
          response => {
            console.log(response)
            if (response && response.result.member_info) {
              this.user = response.result.member_info
            }
          },
          error => {}
        )
      }else{
        this.user = $.cookies.get('user_info')
      }


  },
  computed: {

    nickname () {
      let title = '登录/注册'
      if (true) {
        if (
          this.user &&
          typeof this.user !== 'undefined' &&
          JSON.stringify(this.user) !== '{}'
        ) {
          if (this.user.member_truename) {
            title = this.user.member_truename
          } else if (this.user.member_name) {
            title = this.user.member_name
          }
        }
      }
      return title
    },
    userid(){
      let title = 'ID:'
      if(true){
         if (
           this.user &&
           typeof this.user !== 'undefined' &&
           JSON.stringify(this.user) !== '{}'
         ) {
           title = 'ID:'+this.user.member_id
         }
         return title
      }
    },
    userphone(){
      let phone = '绑定手机号';
      if(this.user.member_mobile){
        phone = phoneNumFilter(this.user.member_mobile)
      }
      return phone
    }
  },
  methods:{
    onPerson() {
      this.$router.push({'name': 'person-center'})
    },

  }
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
        margin-right: -5px;
      }
    }
  }
}
</style>
