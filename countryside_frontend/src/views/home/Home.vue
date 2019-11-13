<template>
  <div id="home">
    <div id="headImg">

    </div>
    <div id="homeHeadBar">
      <home-bar></home-bar>
    </div>
  </div>
</template>

<script>
  import HomeBar from "../../components/content/home/HomeBar";
  export default {
    name: "Home",
    components: {
      HomeBar
    }
  }
</script>

<style scoped>
  #home {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    /*background-color: #ff8198;*/
  }
  #headImg {
    position: absolute;
    width: 100%;
    background-color: yellow;
    height: 150px;
  }
  #homeHeadBar {
    position: absolute;
    top: 150px;
    width: 100%;
    height: 60px;
    background-color: #999999;
  }
</style>