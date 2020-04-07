<template>
  <div class="container">
    <div class="header"></div>
    <div v-if="list.length==0" class="empty">
      <div>
        <img src="../../../assets/image/empty.png" />
      </div>
      <div>你还没有添加收货地址~</div>
    </div>
    <div class="list">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
    <div class="footer">
      <van-button color="#1b1b1b" block>+ 添加收货人</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  methods: {
    onAdd() {
      Toast("新增地址");
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #fff;
  height: 100%;
  .empty {
    padding: 50px 15px;
    font-size: 16px;
    color: #b7b7b7;
    text-align: center;
    img {
      margin-bottom: 20px;
    }
  }
  .list {
    background-color: #f7f7f7;
    height: 100%;
    .van-address-list {
      padding: 0;
      .van-tag--round {
        border-radius: 4px;
        color: #f4523b;
        background-color: #fff;
        border: 1px solid #f4523b;
      }
      .van-address-item .van-radio__icon--checked .van-icon {
        background-color: #f4523b;
        border-color: #f4523b;
      }
    }
    .van-address-list__bottom {
      display: none;
    }
  }
  .footer {
    font-size: 16px;
    text-align: center;
    color: #ffffff;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
  }
}
</style>
