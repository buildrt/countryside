<template>
  <div id="policyTitleBar">
    <img id="policyTitleImg" src="../../../assets/img/policy/policyTitleImg.png" alt="">
    <img id="policyTitle" src="../../../assets/img/policy/title.png" alt="">
    <img id="policyLogo" src="../../../assets/img/policy/logo.png" alt="">
    <img id="policyCharacter" src="../../../assets/img/policy/policyCharacter.png" alt="">
    <el-menu
      :default-active="this.$route.path"
      mode="horizontal"
      router
      @select="handleSelect"
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
    name: "PolicyTitleBar"
  }
</script>

<style scoped>
  #policyTitleBar {
    position: relative;
    width: 100%;
    height: 25%;
    overflow: hidden;
  }
  #policyTitleImg {
    position: relative;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 0;
  }
  .el-menu {
    position: absolute;
    top: 10%;
    height: auto;
    right: 5%;
    border: 0;
  }
  .el-menu .el-menu-item{
    position: relative;
    text-align: center;
    font-size: 15px;
    width: 100px;
  }
  #policyTitle {
    position: absolute;
    top: 0;
    width: 20%;
    /*border: 1px solid black;*/
    left: 8%;
  }
  #policyLogo {
    position: absolute;
    top: 10%;
    height: 80%;
    left: 2%;
  }
  #policyCharacter {
    position: absolute;
    top: 55%;
    left: 15%;
    width: 15%;
  }
</style>