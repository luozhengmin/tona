<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          地址管理
        </div>
      </div>
    </div>
    <div v-if="list.length==0" class="empty">
      <div>
        <img src="../../../assets/image/empty.png" />
      </div>
      <div>你还没有添加收货地址~</div>
    </div>
    <div class="address-list">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text
        default-tag-text="默认"
        icon-edit="homo"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
    <div class="footer">
      <van-button color="#1b1b1b" block @click="onAddress">+ 添加新收货人</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { getMemberAddressList } from '../../../api/memberInfo'
export default {
  name: "",
  data() {
    return {
      disabledList : [],
      chosenAddressId: "",
      list: [
      ]
    };
  },
  created: function () {

      getMemberAddressList().then(
        response => {
          console.log(response)
          let addresslist = []
          response.result.address_list.forEach((item, index ,a) => {

          })
          this.list = response.result.address_list.map(item => {
            if(item.address_is_default == 1){
              item.address_is_default = true
            }else{
              item.address_is_default = false
            }
            return { id: item.address_id, name: item.address_realname, 'tel': item.address_mob_phone, 'address': item.address_detail+item.area_info, 'isDefault': item.address_is_default };
          });

        },
        error => {}
      )

  },
  methods: {
    onAdd() {
      Toast("新增地址");
    },
    onAddress(){
      this.$router.push({'name': 'address-edit'})
    },
    onEdit(item, index) {

      this.$router.push({ name: 'address-edit', query: { id : item.id }})

    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  min-height:100%;
  .empty {
    padding: 50px 15px;
    font-size: 16px;
    color: #b7b7b7;
    text-align: center;
    img {
      margin-bottom: 20px;
    }
  }
  .address-list{
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
      .van-address-item .van-address-item__address{color:#b7b7b7;}
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
