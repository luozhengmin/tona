<template>
  <div class="wrap">
    <div class='no_sroll' v-if="navList">
      <aside class="tabNav" ref="l_list">
        <ul>
          <li ref="l_item" class="nav_li" :class="(TabNavList == index) ? 'checkIn' : ''" :index="index" :id="index"
              @click="checkNavList(item, index)" v-for="(item, index) in navList" :key="index">
           {{item.gcName}}
          </li>
        </ul>
      </aside>
      <!--&lt;!&ndash; 增加浮动层 &ndash;&gt;-->
      <!--<div class="theFixed" :class="(TabNavList == index) ? 'isFixed' : 'isHide'" v-if="scrollTrue">-->
        <!--<div class="leftName">{{scrollTrue.gcName}}</div>-->
      <!--</div>-->
      <section class="newHeight" ref="r_list">
        <div >
          <div class="proList" v-for="(item, index1) in navList" :key="index1" ref="good">
            <div class="p-pic">
              <img src="../../assets/image/cp01.jpg" />
            </div>
            <div class="r_top">
              <div class="leftName">{{item.gcName}}</div>
            </div>
            <div class="r_cont">
              <div class="cu-items" v-for="(item, index2) in 6" :key="index2">
                <div class="storeL">
                  <img src="../../assets/image/cp02.jpg"/>
                </div>
                <div class="text">卫浴</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import Better from 'better-scroll'
  export default {
    name: 'ProductList01',
    components: {
      Better
    },
    data () {
      return {
        index: 0,
        gcName: '',
        scrollY: 0, // 定义的Y滚动轴及初始值
        TabNavList: 0, // 左右联动取值
        scrollTrue: '', // 右侧吸顶
        navList: [
          {gcName:'推荐'},
          {gcName:'硬装'},
          {gcName:'软装'},
          {gcName:'家电'},
          {gcName:'定制'},
          {gcName:'风格'}
        ], // 全局列表
        isScroll: false,
        arr: [0],
        flag: true,
        obj: null,
        show: false,
        ios: /iphone os/g.test(window.navigator.userAgent.toLowerCase())
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._initScroll()
        this._getHeight()
      })
    },
    methods: {
      _initScroll () {
        this.left = new Better(this.$refs.l_list, {
          click: true,
          probeType: 3
        })
        this.rgt = new Better(this.$refs.r_list, {
          probeType: 3,
          click: true
        })
        this.rgt.on('scroll', (res) => {
          if (this.flag) {
            this.scrollY = Math.abs(res.y) + 16 // 页面内有一个16像素的顶部状态栏
            for (let i = 0; i < this.arr.length; i++) {
              if (this.scrollY > this.arr[i] && this.scrollY < this.arr[i + 1]) {
                this.TabNavList = i - 1 // 左右联动取值
                // console.log(this.navList[this.TabNavList].gcName) // 取出元素的gcName
                this.scrollTrue = this.navList[this.TabNavList]
                this.isScroll = true
                // document.getElementById(this.TabNavList).scrollIntoView()
                this.left.scrollToElement(this.$refs.l_list, 100, 0, this.TabNavList * 60)
              }
            }
          }
        })
        this.left.on('scroll', (res) => {
          if (this.flag) {
            this.scrollY = Math.abs(res.y) + 16
            this.left.scrollToElement(this.$refs.l_list[this.TabNavList], 100, 0, 0)
          }
        })
      },
      _getHeight () {
        // // 开始改造
        let rightItems = this.$refs.r_list.getElementsByClassName('proList')
        setTimeout(() => { // 根据betterScroll定义滚动
          console.log(rightItems) // 右侧列表数组内容
          console.log(rightItems.length) // 右侧列表数组长度
          if (rightItems && (rightItems.length > 0)) {
            let height = 0
            this.arr.push(height)
            for (let i = 0; i < rightItems.length; i++) {
              let item = rightItems[i]
              height += item.clientHeight
              this.arr.push(height)
            }
          }
        }, 600)
      },
      // 左侧选择TAB
      checkNavList (e, v) {
        console.log(e, v)
        this.gcName = e.gcName
        this.flag = false
        this.TabNavList = v // 左右联动取值
        this.rgt.scrollToElement(this.$refs.good[v], 100, 0, 0)
        setTimeout(() => {
          this.flag = true
        }, 100)
      },

//      destroyed () {
//        window.removeEventListener('scroll', this.handleScroll, true)
//      }
    }
  }
</script>
<style scoped>
  .wrap{ margin: 0 auto; width: 100%;height:100%;overflow:hidden;}
  .no_sroll {margin:0 auto; width:100%;height:100%;padding-top:45px; overflow:hidden; position:relative; display:flex;}
  .newHeight {display:block; overflow: hidden; background:#fff; position:relative; width:75%;padding:0 10px;overflow-y:scroll;overflow-x:hidden;-webkit-overflow-scrolling: touch;}
  .newHeight .cu-items { position: relative; display: flex; float:left; flex-direction:column; align-items: center; width:30%; height:110px; margin-left: 4.5%; margin-bottom:10px;}
  .newHeight .cu-items:nth-of-type(3n-2) { margin-left:0;}
  .cu-items .storeL { width: 80px; height: 80px; position: relative; border-radius: 4px; }
  .cu-items .storeL img { width: 80px; height: 80px;}
  .cu-items .text {font-size:14px; line-height:18px; margin-top:5px; color:#666;}
  .newHeight .proList { width:100%; display:flex; flex-direction:column; position:relative;}
  .newHeight .proList .r_top { height:60px;display:flex;justify-content:space-between;align-items:center;}
  .newHeight .proList .r_top .leftName { line-height:60px; font-size:16px; text-align:left; color:#666;}
  .theFixed {height:60px;display:flex;justify-content:space-between;align-items:center;}
  .theFixed .leftName {line-height:60px; font-size:16px; text-align:left; color:#666; margin-left:10px;}

  .tabNav { display: block;width:25%; background:#F5F5F2;overflow: hidden; position:relative; overflow-y:scroll; overflow-x:hidden; -webkit-overflow-scrolling: touch;}
  .tabNav .nav_list { display:flex; width:100%;}
  .tabNav .nav_li { font-size:16px; line-height:20px; color:#666; text-align:center; height: 60px; width:100%; flex-shrink: 0; position:relative; display: flex; justify-content: center; align-items: center;}
  .tabNav .nav_li .imgLi { height:16px; position: absolute; left:0; top: 22px;}
  .checkIn { color:#2CBF64!important; background:#fff!important; font-weight:bold;}
  .isFixed {
    height:60px;
    line-height:60px;
    font-size:16px;
    text-align:left;
    color:#666;
    position:fixed;
    width:70%;
    left:27%;
    background: #fff;
    z-index: 19;
  }
  .isHide {
    position: fixed;
    height:60px;
    line-height:60px;
    font-size:16px;
    text-align:left;
    color:#666;
    width:70%;
    left:27%;
    background: #fff;
    z-index: 19;
  }
</style>

