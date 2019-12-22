<template>
  <div id="policyTitleBar">
    <img id="policyTitleImg" src="../../../assets/img/policy/policyTitleBar/header_bg.jpg" alt="">
    <img id="policyTitle" src="../../../assets/img/policy/policyTitleBar/title.png" alt="">
    <img id="policyLogo" src="../../../assets/img/policy/policyTitleBar/logo.png" alt="">
    <img id="policyCharacter" src="../../../assets/img/policy/policyTitleBar/policyCharacter.png" alt="">
    <img id="timinqing" src="../../../assets/img/policy/policyTitleBar/timinqing.png"/>
    <div id="policySearch">
      <el-form>
        <el-form-item>
          <el-input prefix-icon="el-icon-search"></el-input>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PolicyTitleBar"
  }
</script>

<style scoped>
  #policyTitleBar {
    position: absolute;
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

  #policyTitle {
    position: absolute;
    top: 0;
    width: 18%;
    height: 60%;
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
    left: 20%;
    width: 15%;
  }
  #timinqing {
    position: absolute;
    right: 5%;
    top: 25%;
  }
  #policySearch {
    position: absolute;
    right: 5%;
    width: 30%;
    height: 30%;
    bottom: 5%;
  }
  #policySearch .el-input {
    position: absolute;
    width: 60%;
    left: 10%;
  }
  #policySearch .el-button {
    position: absolute;
    text-align: center;
    width: 20%;
    left: 75%;
    background-color: #E43635;
    border: 0;
  }
</style>