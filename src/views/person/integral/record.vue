<template>
    <div class="container">
      <div class="head fix">
        <div class="wrap fix">
          <div class="head-ss fix">
            <van-icon name="arrow-left" @click="$router.go(-1)"/>
          </div>
          <div class="head-logo">
            积分记录
          </div>
        </div>
      </div>
      <div class="record-list fix">
        <h2>1.什么是积分？</h2>
        <p>积分是TONA HOME向有效会员返还的虚拟购物币，积分是TONA HOME向有效会员返还的虚拟购物币，积分是TONA HOME向有效会员返还的虚拟购物币，</p>
        <h2>1.如何获得积分？</h2>
        <div class="record-table fix">
          <dl>
            <dd class="dd-1">来源</dd>
            <dd class="dd-2">成长值奖励</dd>
            <dd class="dd-3">详细说明</dd>
          </dl>
          <dl>
            <dd class="dd-1">新手欢迎奖励</dd>
            <dd class="dd-2">+5</dd>
            <dd class="dd-3">只能领取一次</dd>
          </dl>
          <dl>
            <dd class="dd-1">设置头像</dd>
            <dd class="dd-2">+5</dd>
            <dd class="dd-3">设置头像，只能领取一次</dd>
          </dl>
          <dl>
            <dd class="dd-1">设置昵称</dd>
            <dd class="dd-2">+5</dd>
            <dd class="dd-3">设置昵称，只能领取一次</dd>
          </dl>
          <dl>
            <dd class="dd-1">完善个人信息</dd>
            <dd class="dd-2">+10</dd>
            <dd class="dd-3">设置性别、生日、城市、职业、个性签名、喜欢的分类，需全部设置完才能领取，只能领取一次</dd>
          </dl>
          <dl>
            <dd class="dd-1">成功关注一位达人</dd>
            <dd class="dd-2">+5</dd>
            <dd class="dd-3">首次关注后发放</dd>
          </dl>
          <dl>
            <dd class="dd-1">首次分享商品或专题</dd>
            <dd class="dd-2">+5</dd>
            <dd class="dd-3">首次完成分享后发放</dd>
          </dl>
          <dl>
            <dd class="dd-1">首次收藏商品或专题</dd>
            <dd class="dd-2">+5</dd>
            <dd class="dd-3">首次完成收藏后发放</dd>
          </dl>
          <dl>
            <dd class="dd-1">首次购物成功</dd>
            <dd class="dd-2">+5</dd>
            <dd class="dd-3">付款成功即发放</dd>
          </dl>
          <dl>
            <dd class="dd-1">首次完成评价</dd>
            <dd class="dd-2">+5</dd>
            <dd class="dd-3">评价成功即发放</dd>
          </dl>
          <dl>
            <dd class="dd-1">每日登录</dd>
            <dd class="dd-2">+5</dd>
            <dd class="dd-3">每日首次登录成功后发放</dd>
          </dl>
          <dl>
            <dd class="dd-1">每日签到</dd>
            <dd class="dd-2">+5</dd>
            <dd class="dd-3">评价成功即发放</dd>
          </dl>
          <dl>
            <dd class="dd-1">每日完成签到后发放，签到累计满8天额外奖励20</dd>
            <dd class="dd-2">+5</dd>
            <dd class="dd-3">每次成功分享即可获得奖励，每日上限15</dd>
          </dl>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "integral-record",
    data(){
      return{
        isActive:false,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .record-list{
    color:#999;font-size: 13px;padding:12px 15px;
    h2{
      font-weight:bold;
      padding:8px 0;
      font-size: 14px;
    }
    p{line-height:1.8;}
    .record-table{
      text-align:center;
      padding-top:6px;
      dl{
        display:table;width:100%;
        dd{padding:8px 4px;border:solid 1px #eee;border-right:none;border-top:none;display:table-cell;vertical-align: middle;}
        .dd-1,.dd-2{width:30%;}
        .dd-3{width:40%;border-right:solid 1px #eee;}
      }
      dl:nth-child(1){background-color:#f9f9f9;border-top:solid 1px #eee;}
    }
  }
</style>
