<template>
  <div id="product">
    <div class="productBg1"></div>
    <div class="productBg2"></div>
    <product-side-bar></product-side-bar>
    <product-title-bar></product-title-bar>
    <product-content></product-content>
  </div>
</template>

<script>
  import ProductSideBar from "../../components/content/product/ProductSideBar";
  import ProductTitleBar from "../../components/content/product/ProductTitleBar";
  import ProductContent from "../../components/content/product/ProductContent";

  export default {
    name: "Product",
    components: {
      ProductContent,
      ProductTitleBar,
      ProductSideBar
    }
  }
</script>

<style scoped>
  #product {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    /*z-index: -1;*/
  }
  .productBg1 {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background: url("../../assets/img/home/slider1.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: blur(4px);
    transform: scale(1.02);
    z-index: 1;
  }
  .productBg2 {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
    z-index: 1;
  }
</style>