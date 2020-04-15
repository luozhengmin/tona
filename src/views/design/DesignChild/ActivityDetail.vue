<template>
    <div>
      <div class="activity-detail fix">
        <p><img src="../../../assets/image/hd01.jpg"/></p>
        <div class="activity-link">
          投稿作品请按照官方指定户型进行设计，查看<router-link to=""> 大赛题目>></router-link>
        </div>
        <p><img src="../../../assets/image/hd02.jpg"/></p>
        <p><img src="../../../assets/image/hd03.jpg"/></p>
      </div>
    </div>
</template>

<script>
  export default {
    name: "ActivityDetail"
  }
</script>

<style lang="scss" scoped>
  .activity-link{
    padding:12px 0;
    background-color:#050291;
    text-align:center;
    font-size:13px;color:#fff;
    a{color:#dedd14;}
  }
</style>
