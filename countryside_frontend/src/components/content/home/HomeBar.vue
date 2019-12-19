<template>
  <div id="homeBar">
    <el-menu
      :default-active="this.$route.path"
      mode="horizontal"
      router
      @select="handleSelect"
      background-color="rgba(0,0,0,0)"
      text-color="#fff"
      active-text-color="#0fdfe2">
      <el-menu-item index="/home">首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title" style="font-size: 15px">乡村词典</template>
        <el-submenu index="1-1">
          <template slot="title" style="font-size: 15px">江苏地区</template>
          <el-submenu index="1-1-1" style="font-size: 14px;">
            <template slot="title" style="font-size: 15px">南京市</template>
            <el-menu-item index="1-1-1-1" style="font-size: 14px;">白塔村</el-menu-item>
            <el-menu-item index="1-1-1-2" style="font-size: 14px;">牟家村</el-menu-item>
            <el-menu-item index="1-1-1-3" style="font-size: 14px;">盛泽村</el-menu-item>
          </el-submenu>
          <el-submenu index="1-1-2" style="font-size: 14px;">
            <template slot="title" style="font-size: 15px">苏州市</template>
            <el-menu-item index="1-1-2-1" style="font-size: 14px;">白塔村</el-menu-item>
            <el-menu-item index="1-1-2-2" style="font-size: 14px;">牟家村</el-menu-item>
            <el-menu-item index="1-1-2-3" style="font-size: 14px;">盛泽村</el-menu-item>
          </el-submenu>
          <el-submenu index="1-1-3" style="font-size: 14px;">
            <template slot="title" style="font-size: 15px">无锡市</template>
            <el-menu-item index="1-1-3-1" style="font-size: 14px;">白塔村</el-menu-item>
            <el-menu-item index="1-1-3-2" style="font-size: 14px;">牟家村</el-menu-item>
            <el-menu-item index="1-1-3-3" style="font-size: 14px;">盛泽村</el-menu-item>
          </el-submenu>
          <el-submenu index="1-1-4" style="font-size: 14px;">
            <template slot="title" style="font-size: 15px">常州市</template>
            <el-menu-item index="1-1-4-1" style="font-size: 14px;">白塔村</el-menu-item>
            <el-menu-item index="/moujiaVillage" style="font-size: 14px;">牟家村</el-menu-item>
            <el-menu-item index="1-1-4-3" style="font-size: 14px;">盛泽村</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title" style="font-size: 15px">华东地区</template>
          <el-menu-item index="2-1" style="font-size: 14px;">南京市</el-menu-item>
          <el-menu-item index="2-2" style="font-size: 14px;">苏州市</el-menu-item>
          <el-menu-item index="2-3" style="font-size: 14px;">无锡市</el-menu-item>
          <el-menu-item index="2-4" style="font-size: 14px;">常州市</el-menu-item>
        </el-submenu>
        <el-submenu index="1-3">
          <template slot="title" style="font-size: 15px">中国其他地区</template>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title" style="font-size: 15px;">乡村微导游</template>
        <el-submenu index="2-1">
          <template slot="title" style="font-size: 15px">江苏地区</template>
          <el-submenu index="2-1-1" style="font-size: 14px;">
            <template slot="title" style="font-size: 15px">南京市</template>
            <el-menu-item index="2-1-1-1" style="font-size: 14px;">白塔村</el-menu-item>
            <el-menu-item index="2-1-1-2" style="font-size: 14px;">牟家村</el-menu-item>
            <el-menu-item index="2-1-1-3" style="font-size: 14px;">盛泽村</el-menu-item>
          </el-submenu>
          <el-submenu index="2-1-2" style="font-size: 14px;">
            <template slot="title" style="font-size: 15px">苏州市</template>
            <el-menu-item index="2-1-2-1" style="font-size: 14px;">白塔村</el-menu-item>
            <el-menu-item index="2-1-2-2" style="font-size: 14px;">牟家村</el-menu-item>
            <el-menu-item index="2-1-2-3" style="font-size: 14px;">盛泽村</el-menu-item>
          </el-submenu>
          <el-submenu index="2-1-3" style="font-size: 14px;">
            <template slot="title" style="font-size: 15px">无锡市</template>
            <el-menu-item index="2-1-3-1" style="font-size: 14px;">白塔村</el-menu-item>
            <el-menu-item index="2-1-3-2" style="font-size: 14px;">牟家村</el-menu-item>
            <el-menu-item index="2-1-3-3" style="font-size: 14px;">盛泽村</el-menu-item>
          </el-submenu>
          <el-submenu index="2-1-4" style="font-size: 14px;">
            <template slot="title" style="font-size: 15px">常州市</template>
            <el-menu-item index="2-1-4-1" style="font-size: 14px;">白塔村</el-menu-item>
            <el-menu-item index="/moujiaGuide" style="font-size: 14px;">牟家村</el-menu-item>
            <el-menu-item index="2-1-4-3" style="font-size: 14px;">盛泽村</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2-2">
          <template slot="title" style="font-size: 15px">华东地区</template>
        </el-submenu>
        <el-submenu index="2-3">
          <template slot="title" style="font-size: 15px">中国其他地区</template>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/product">文创产品</el-menu-item>
      <el-menu-item index="/mall">网上商城</el-menu-item>
      <el-menu-item index="/policy">政策通晓</el-menu-item>
      <el-menu-item index="/forum">大学生论坛</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "HomeBar",
    data() {
      return {
        uniqueTrue: true
      }
    },
    methods: {

    }
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
    right: 10%;
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