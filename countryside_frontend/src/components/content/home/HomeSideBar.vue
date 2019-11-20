<template>
  <div id="homeSideBar">
    <el-steps direction="vertical" active="6">
      <el-step title="乡村要闻" icon="el-icon-reading"></el-step>
      <el-step title="政策通晓" icon="el-icon-reading"></el-step>
      <el-step title="文创产品" icon="el-icon-reading"></el-step>
      <el-step title="乡村微导游" icon="el-icon-reading"></el-step>
      <el-step title="大学生论坛" icon="el-icon-reading"></el-step>
      <el-step title="网上商城" icon="el-icon-reading"></el-step>
    </el-steps>
  </div>
</template>

<script>
  export default {
    name: "HomeSideBar",
    methods: {

    }
  }
</script>

<style scoped>
  #homeSideBar {
    position: absolute;
    top: 7%;
    width: 10%;
    left: 8%;
    height: 100%;
  }
  .el-steps {
    position: absolute;
    width: 100%;
    height: 73.33%;
    top: 8.33%;
  }
</style>