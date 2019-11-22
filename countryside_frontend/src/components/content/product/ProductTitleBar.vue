<template>
  <div id="productTitleBar">
    <img src="../../../assets/img/product/welcome.png" style="height: 45%;position: absolute;bottom: 15%;left: 5%">
  </div>
</template>

<script>
  export default {
    name: "ProductTitleBar"
  }
</script>

<style scoped>
  #productTitleBar {
    position: absolute;
    top: 0;
    width: 60%;
    left: 30%;
    height: 15%;
    border-bottom: 5px solid white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 1;
  }
</style>