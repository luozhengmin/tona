<template>
  <div>
    <div class="container">
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
      <div class="global-list">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item>
            <template #title>
              <div class="global-title">TONA国际卫浴上海虹桥店</div>
              <div class="global-add">上海市虹桥世界中心5369号L3A区二楼202</div>
            </template>
            <template #right-icon>
              <van-icon name="question-o" />
            </template>
            <div class="add-detail fix">
              <div class="add-tag">
                <van-tag round>纯德系</van-tag>
                <van-tag round>现代简约</van-tag>
                <van-tag round>北欧风</van-tag>
              </div>
              <div class="add-tel">
                <p class="ab"><van-icon name="question-o" /><span>全屋家具、卫浴、衣柜</span></p>
                <p class="ab"><van-icon name="question-o" /><span>021-60299001</span></p>
                <p class="ab"><van-icon name="question-o" /><span>上海市虹桥世界中心5369号L3A区二楼202</span></p>
              </div>
              <div class="add-pic">
                <img src="../../../assets/image/cp01.jpg">
              </div>
              <div class="add-btn">
                <van-button type="info" @click="MakeStore">预约到店</van-button>
              </div>
            </div>
          </van-collapse-item>
          <van-collapse-item>
            <template #title>
              <div class="global-title">TONA国际卫浴上海虹桥店</div>
              <div class="global-add">上海市虹桥世界中心5369号L3A区二楼202</div>
            </template>
            <template #right-icon>
              <van-icon name="question-o" />
            </template>
            <div class="add-detail fix">
              <div class="add-tag">
                <van-tag round>纯德系</van-tag>
                <van-tag round>现代简约</van-tag>
                <van-tag round>北欧风</van-tag>
              </div>
              <div class="add-tel">
                <p class="ab"><van-icon name="question-o" /><span>全屋家具、卫浴、衣柜</span></p>
                <p class="ab"><van-icon name="question-o" /><span>021-60299001</span></p>
                <p class="ab"><van-icon name="question-o" /><span>上海市虹桥世界中心5369号L3A区二楼202</span></p>
              </div>
              <div class="add-pic">
                <img src="../../../assets/image/cp01.jpg">
              </div>
              <div class="add-btn">
                <van-button type="info">预约到店</van-button>
              </div>
            </div>
          </van-collapse-item>
          <van-collapse-item>
            <template #title>
              <div class="infor">
                <div class="global-title">TONA国际卫浴上海虹桥店</div>
                <div class="global-add">上海市虹桥世界中心5369号L3A区二楼202</div>
              </div>
            </template>
            <template #right-icon>
              <van-icon name="question-o" />
            </template>
            <div class="add-detail fix">
              <div class="add-tag">
                <van-tag round>纯德系</van-tag>
                <van-tag round>现代简约</van-tag>
                <van-tag round>北欧风</van-tag>
              </div>
              <div class="add-tel">
                <p class="ab"><van-icon name="question-o" /><span>全屋家具、卫浴、衣柜</span></p>
                <p class="ab"><van-icon name="question-o" /><span>021-60299001</span></p>
                <p class="ab"><van-icon name="question-o" /><span>上海市虹桥世界中心5369号L3A区二楼202</span></p>
              </div>
              <div class="add-pic">
                <img src="../../../assets/image/cp01.jpg">
              </div>
              <div class="add-btn">
                <van-button type="info">预约到店</van-button>
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MakeStore",
    data(){
      return{
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
  .global-list{margin-top:32px;padding:16px 15px;background-color:#f7f7f7;}
</style>
