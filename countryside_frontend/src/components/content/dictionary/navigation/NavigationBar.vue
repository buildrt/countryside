<template>
  <el-menu
    :default-active="this.$route.path"
    router
    mode="horizontal"
    text-color="#000"
    background-color="#fff"
    active-text-color="#0fdfe2">
    <el-menu-item index="/home">首页</el-menu-item>
    <el-submenu index="1">
      <template slot="title"><span style="font-size: 16px;font-family: 微软雅黑;">乡村词典</span></template>
      <el-submenu index="1-1">
        <template slot="title" style="font-size: 15px">江苏地区</template>
        <el-submenu index="1-1-1" style="font-size: 14px;">
          <template slot="title" style="font-size: 15px">南京市</template>
          <el-menu-item index="1-1-1-1" style="font-size: 14px;">龙袍镇</el-menu-item>
          <el-menu-item index="1-1-1-2" style="font-size: 14px;">桠溪村</el-menu-item>
          <el-menu-item index="1-1-1-3" style="font-size: 14px;">黄龙岘茶文化村</el-menu-item>
          <el-menu-item index="1-1-1-4" style="font-size: 14px;">不老村</el-menu-item>
        </el-submenu>
        <el-submenu index="1-1-2" style="font-size: 14px;">
          <template slot="title" style="font-size: 15px">常熟市</template>
          <el-menu-item index="1-1-2-1" style="font-size: 14px;">蒋巷村</el-menu-item>
        </el-submenu>
        <el-submenu index="1-1-3" style="font-size: 14px;">
          <template slot="title" style="font-size: 15px">无锡市</template>
          <el-menu-item index="1-1-3-1" style="font-size: 14px;">白塔村</el-menu-item>
        </el-submenu>
        <el-submenu index="1-1-4" style="font-size: 14px;">
          <template slot="title" style="font-size: 15px">常州市</template>
          <el-menu-item index="1-1-4-1" style="font-size: 14px;">孟河镇</el-menu-item>
          <el-menu-item index="/moujiaVillage" style="font-size: 14px;">牟家村</el-menu-item>
        </el-submenu>
        <el-submenu index="1-1-5" style="font-size: 14px;">
          <template slot="title" style="font-size: 15px">扬州市</template>
          <el-menu-item index="1-1-5-1" style="font-size: 14px;">沿湖村</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title" style="font-size: 15px"><span style="font-size: 16px;font-family: 微软雅黑;">乡村微导游</span></template>
      <el-submenu index="2-1">
        <template slot="title" style="font-size: 15px">江苏地区</template>
        <el-submenu index="2-1-1" style="font-size: 14px;">
          <template slot="title" style="font-size: 15px">南京市</template>
          <el-menu-item index="2-1-1-1" style="font-size: 14px;">龙袍镇</el-menu-item>
          <el-menu-item index="2-1-1-2" style="font-size: 14px;">桠溪村</el-menu-item>
          <el-menu-item index="2-1-1-3" style="font-size: 14px;">黄龙岘茶文化村</el-menu-item>
          <el-menu-item index="2-1-1-4" style="font-size: 14px;">不老村</el-menu-item>
        </el-submenu>
        <el-submenu index="2-1-2" style="font-size: 14px;">
          <template slot="title" style="font-size: 15px">苏州市</template>
          <el-menu-item index="2-1-2-1" style="font-size: 14px;">盛泽村</el-menu-item>
        </el-submenu>
        <el-submenu index="2-1-3" style="font-size: 14px;">
          <template slot="title" style="font-size: 15px">无锡市</template>
          <el-menu-item index="2-1-3-1" style="font-size: 14px;">白塔村</el-menu-item>
        </el-submenu>
        <el-submenu index="2-1-4" style="font-size: 14px;">
          <template slot="title" style="font-size: 15px">常州市</template>
          <el-menu-item index="2-1-4-1" style="font-size: 14px;">孟河镇</el-menu-item>
          <el-menu-item index="/moujiaGuide" style="font-size: 14px;">牟家村</el-menu-item>
        </el-submenu>
        <el-submenu index="2-1-5" style="font-size: 14px;">
          <template slot="title" style="font-size: 15px">扬州市</template>
          <el-menu-item index="2-1-5-1" style="font-size: 14px;">沿湖村</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="/product">文创产品</el-menu-item>
    <el-menu-item index="/mall">网上商城</el-menu-item>
    <el-menu-item index="/policy">政策通晓</el-menu-item>
    <el-menu-item @click="JumpToForum">大学生论坛</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "NavigationBar",
    methods: {
      JumpToForum() {
        window.open("http://ksomv.ddns.net:18080/")
      }
    }
  }
</script>

<style scoped>
  .el-menu {
    position: absolute;
    top: 20%;
    height: 80%;
    width: 98%;
    left: 1%;
    border: 0;
  }
  .el-menu .el-menu-item{
    position: relative;
    text-align: center;
    font-size: 16px;
    width: 100px;
    color: black;
    font-family: 微软雅黑;
  }
  .el-menu .el-submenu .el-menu-item{
    font-size: 15px;
  }
</style>