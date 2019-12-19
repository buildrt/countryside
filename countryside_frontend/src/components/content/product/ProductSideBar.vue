<template>
  <div id="productSideBar">
    <div id="title">
      <img id="productTitleImg" src="../../../assets/img/product/productTitle.png" alt="">
    </div>
    <el-menu
      :default-active="this.$route.path"
      router
      background-color="rgba(0,0,0,0)"
      text-color="#fff"
      active-text-color="#0fdfe2">
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/product">文创产品</el-menu-item>
      <el-menu-item index="/mall">网上商城</el-menu-item>
      <el-menu-item index="/policy">政策通晓</el-menu-item>
      <el-menu-item index="/forum">大学生论坛</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "ProductSideBar",
    data() {
      return {
        activeIndex: '1'
      }
    }
  }
</script>

<style scoped>
  #productSideBar {
    position: absolute;
    top: 0;
    width: 23%;
    left: 6%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
  }
  #title {
    position: absolute;
    width: 100%;
    height: 20%;
    /*background-color: #ff8198;*/
  }
  #productTitleImg {
    position: absolute;
    left: 5%;
    width: 90%;
    top: 15%;
  }
  .el-menu {
    position: absolute;
    top: 30%;
    width: 100%;
    height: 70%;
  }
  .el-menu .el-menu-item, .el-menu .el-submenu{
    position: relative;
    font-size: 16px;
    text-align: center;
    width: 100%;
  }
  .el-menu .el-submenu .el-menu-item{
    position: relative;
    text-align: center;
    width: 100%;
  }
</style>