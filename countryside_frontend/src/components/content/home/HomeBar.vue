<template>
  <div id="homeBar">
    <el-menu
      :default-active="this.$route.path"
      mode="horizontal"
      @select="handleSelect"
      background-color="rgba(0,0,0,0)"
      router
      text-color="#fff"
      active-text-color="#0fdfe2">
      <el-menu-item index="/home">首页</el-menu-item>
      <el-submenu index="2">
        <span slot="title" style="font-size: 15px">乡村词典</span>
        <el-menu-item index="1" style="font-size: 14px;">江苏地区</el-menu-item>
        <el-menu-item index="2" style="font-size: 14px;">华东地区</el-menu-item>
        <el-menu-item index="3" style="font-size: 14px;">中国其他地区</el-menu-item>
      </el-submenu>
      <el-menu-item index="/forum">大学生论坛</el-menu-item>
      <el-menu-item index="/policy">政策通晓</el-menu-item>
      <el-menu-item index="/guide">乡村微导游</el-menu-item>
      <el-menu-item index="/product">产品服务</el-menu-item>
      <el-menu-item index="/mall">网上商城</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "HomeBar"
  }
</script>

<style scoped>
  #homeBar {
    position: absolute;
    height: 10%;
    width: 100%;
    background-color: rgba(0,0,0,0.2);
  }
  .el-menu {
    position: absolute;
    top: 0;
    height: 100%;
    right: 2%;
    border: 0;
  }
  .el-menu .el-menu-item{
    position: relative;
    text-align: center;
    font-size: 15px;
    width: 100px;
  }
  .el-menu .el-submenu .el-menu-item{
    font-size: 15px;
  }
</style>