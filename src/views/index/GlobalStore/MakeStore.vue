<template>
  <div class="container">
    <div class="head fix">
      <div class="wrap fix">
        <div class="head-ss fix">
          <van-icon name="arrow-left" @click="$router.go(-1)"/>
        </div>
        <div class="head-logo">
          全球门店
        </div>
        <div class="menu-ico" v-bind:class="{active:isActive}" v-on:click="isActive=!isActive">
          <span></span>
        </div>
      </div>
      <transition name="van-slide-down">
        <div class="slideNav" v-if="isActive">
          <ul class="ab fix">
            <li>
              <router-link to="/BrandList">
                <i class="iconfont bg-7">&#xe7ae;</i>
                <span>品牌馆</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Design">
                <i class="iconfont bg-7">&#xe508;</i>
                <span>优秀设计</span>
              </router-link>
            </li>
            <li>
              <router-link to="/GlobalStore">
                <i class="iconfont bg-7">&#xe7b9;</i>
                <span>全球门店</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Investment">
                <i class="iconfont bg-7">&#xe6b5;</i>
                <span>招商加盟</span>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="iconfont bg-7">&#xe602;</i>
                <span>关于我们</span>
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="global-title">
      <h2>预约到店</h2>
    </div>
    <div class="global wrap fix">
      <van-cell-group>
        <van-field
          v-model="book"
          type="book"
          label="预约门店"
          right-icon="arrow"
          readonly
          placeholder="TONA国际卫浴上海虹桥店"
        />
        <van-field
          v-model="name"
          type="name"
          label="姓名"
          placeholder="请输入姓名"
        />
        <van-field
          v-model="number"
          type="number"
          label="手机号码"
          placeholder="请输入手机号"
        />
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="currentDate"
          label="预约日期"
          placeholder="请选择日期"
          @click="showPicker = true"
        />

        <van-field
          v-model="demand"
          type="demand"
          label="商品需求"
          placeholder="最多输入200字"
        />
        <van-field
          v-model="ownerName"
          type="ownerName"
          label="业主姓名"
          placeholder="请输入业主姓名"
        />
        <van-field
          v-model="ownerMobile"
          type="ownerMobile"
          label="业主手机"
          placeholder="请输入业主手机"
        />
        <van-field
          v-model="ownerArea"
          type="ownerArea"
          label="业主小区"
          placeholder="业主小区"
        />
        <van-field
          v-model="ownerCase"
          type="ownerCase"
          label="户型&方案"
          placeholder="请输入户型或方案链接"
        />

        <div class="upload ab fix">
          <h2>户型&方案</h2>
          <van-uploader v-model="fileList"  :max-count="1" />
          <p>商品图片尺寸建议800*800；<br>
            上传不大于5MB；<br>
            尺寸不超过5000*5000；<br>
            尺寸不小于300*300；</p>
        </div>
        <div class="make-btn ab">
          <van-button color="#888" plain>取消</van-button>
          <van-button color="#323232">确定</van-button>
        </div>
      </van-cell-group>
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker type="date" @confirm="onConfirmDate" @cancel="showPicker = false"  />
      </van-popup>
    </div>

  </div>
</template>

<script>
  export default {
    name: "MakeStore",
    data(){
      return{
        isActive:false,
        book:'',
        name:'',
        number:'',
        demand:'',
        ownerName:'',
        ownerMobile:'',
        ownerArea:'',
        ownerCase:'',
        showPicker: false,
        currentDate: "",
        value:'',
        fileList: [
        ],
        activeName: '',
      }
    },
    methods:{
      onConfirmDate(time) {
        this.value = time;
        this.showPicker = false;
      },
      MakeStore() {
        this.$router.push({'name': 'MakeStore'})
      },
    }
  }
</script>

<style lang="scss" scoped>
  .global-title{
    width:100%;
    position:relative;
    text-align:center;
    h2{font-size:16px;color:#323232;font-weight:bold;padding:12px 15px;border-bottom:solid 2px #eee;}
  }
  .upload{
    padding-top:6px;
    h2{color:#323233;font-size:14px;line-height:24px;width:86px;padding-right:12px;text-align:right;padding-top:12px;}
    p{color:#888;line-height:1.6;}
  }
  .make-btn{
    justify-content:space-between;
    margin-top:12px;
    .van-button{width:47%;border-radius:5px;}
    .van-button:nth-child(1){margin-right:6%;}
  }

</style>
