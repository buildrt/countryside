<template>
  <el-carousel trigger="click" height="100%">
    <el-carousel-item v-for="item in mallBcImg" :key="item">
      <el-image :src="item.img"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  import bg1 from "../../../assets/img/home/slider1.jpg"
  import bg2 from "../../../assets/img/home/slider2.jpg"
  import bg3 from "../../../assets/img/home/slider3.jpg"
  export default {
    name: "MallCarouselBar",
    data() {
      return {
        mallBcImg: [
          {img: bg1},
          {img: bg2},
          {img: bg3}
        ]
      }
    }
  }
</script>

<style scoped>
  .el-carousel {
    position: absolute;
    top: 15%;
    height: 60%;
    width: 100%;
  }
</style>