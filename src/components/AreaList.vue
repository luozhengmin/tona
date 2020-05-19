<template>
  <van-popup
    v-model="show"
    :close-on-click-overlay="false"
    position="bottom"
    :style="{ height: '30%' }"
  >
    <van-picker
      show-toolbar
      title="地址"
      value-key="area_name"
      :columns="areaList"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </van-popup>
</template>

<script>
import axios from "@/utils/request";
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Function,
      default: null
    },
    cancel: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      areaList: []
    };
  },
  created() {
    this.getAddressList();
  },
  methods: {
    getAddressList() {
      axios.get("/api/mendian/mendian_region_list").then(res => {
        this.areaList = res.result.area_list;
        this.areaList.map(p => {
          p.children = p.child;
        });
      });
    },
    onConfirm(val, index) {
      this.selectedAddress = val;
      let val1 = this.areaList[index[0]];
      let val2 = this.areaList[index[0]]["children"][index[1]];
      if (this.confirm) {
        this.confirm(val1, val2);
      }
    },
    onCancel() {
      if (this.cancel) {
        this.cancel();
      }
    }
  }
};
</script>

<style>
</style>