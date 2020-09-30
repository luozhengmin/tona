<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)" />
        </div>
        <div class="head-logo">私信</div>
        <div class="p-btn" @click="showAction">
          <router-link to="">清空</router-link>
        </div>
      </div>
    </div>

    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '24%' }"
      class="track"
    >
      <div class="track-confirm">
        <p>确定要清空信息吗？</p>
        <h2 @click="toClearbrowse">确定</h2>
      </div>
      <div class="track-cancel" @click="onCancel">取消</div>
    </van-popup>

    <div class="private-detail fix">
      <div
        class="detail-item fix"
        :class="{ 'detail-item-my': userInfo.member_id == item.from_member_id }"
        v-for="(item, index) in privateDetail"
        :key="index"
      >
        <div class="item fix">
          <div class="item-l">
            <img src="../../../assets/image/banner01.jpg" />
          </div>
          <div class="item-r">
            <p>
              {{ item.message_body }}
            </p>
          </div>
        </div>
        <div class="time">{{ item.message_time }}</div>
      </div>
    </div>
    <div class="sx-btn">
      <div class="ab">
        <van-field v-model="msg_content" placeholder="发布回复" />
        <van-button color="#323232" @click="sendMsg">发送</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getPrivateDetail, replyMsg } from "../../../api/memberMessage";
import { Toast } from "vant";
export default {
  name: "private-detail",
  data() {
    return {
      show: false,
      userInfo: {},
      privateDetail: [],
      msg_content: "",
    };
  },
  created() {
    this.message_id = this.$route.query.id;
    this.userInfo = $cookies.get("user_info");
    this.getPrivateMessageDetail();
  },
  methods: {
    showAction() {
      this.show = true;
    },
    onCancel() {
      this.show = false;
    },

    toClearbrowse() {},
    getPrivateMessageDetail() {
      getPrivateDetail({ message_id: this.message_id }).then((res) => {
        console.log(res);
        this.privateDetail = res.result.notice_list;
      });
    },
    sendMsg() {
      var params = {
        message_id: this.message_id,
        msg_content: this.msg_content,
      };
      replyMsg(params).then((res) => {
        this.getPrivateMessageDetail();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  height: 100%;
}
.track {
  color: #0076ff;
  text-align: center;
  background-color: initial;
  padding: 0 15px;
  .track-confirm {
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 4px;
    margin-bottom: 12px;
    p,
    h2 {
      padding: 12px 0;
      font-size: 14px;
    }
    h2 {
      color: #f52525;
      border-top: solid 1px #d5d5d5;
    }
  }
  .track-cancel {
    background-color: rgba(255, 255, 255, 0.85);
    font-size: 14px;
    padding: 12px 0;
    border-radius: 4px;
  }
}
.private-detail {
  padding: 24px 15px;
  padding-bottom: 100px;
  .detail-item {
    .item {
      .item-l {
        width: 54px;
        height: 54px;
        float: left;
        img {
          width: 54px;
          height: 54px;
          border-radius: 50%;
        }
      }
      .item-r {
        margin-left: 16px;
        width: calc(100% - 70px);
        min-height: 28px;
        border: solid 1px #b7b7b7;
        float: left;
        padding: 12px 15px;
        text-align: justify;
        margin-top: 12px;
        position: relative;
        background-color: #fff;
      }
      .item-r::before,
      .item-r::after {
        bottom: 100%;
        left: -16px;
        top: 8px;
        border: 1px solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-width: 8px;
        margin-left: 0;
      }
      .item-r::before {
        border-right-color: #b7b7b7;
      }
      .item-r::after {
        border-right-color: #fff;
        border-width: 7px;
        margin-left: 0px;
        left: -13px;
        top: 9px;
      }
    }
    .time {
      text-align: center;
      margin-top: 12px;
    }
  }
  .detail-item-my {
    .item-l {
      float: right !important;
    }
    .item-r {
      margin-left: 0 !important;
      margin-right: 16px !important;
    }
    .item-r::before,
    .item-r::after {
      left: inherit !important;
      right: -16px !important;
    }
    .item-r::before {
      border-left-color: #b7b7b7 !important;
      border-right-color: transparent !important;
    }
    .item-r::after {
      border-left-color: #fff !important;
      border-right-color: transparent !important;
      right: -13px !important;
      left: inherit !important;
    }
  }
}
.sx-btn {
  position: fixed;
  bottom: 0;
  background-color: #fff;
  padding: 12px 15px;
  border-top: solid 1px #e7e7e7;
  width: 100%;
}
.sx-btn .van-cell {
  border: solid 1px #b7b7b7;
  padding: 6px 12px;
}
.sx-btn button {
  border-radius: 5px;
  width: 92px;
  margin-left: 12px;
  height: 38px;
  line-height: 36px;
}
</style>
