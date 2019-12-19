<template>
  <div id="guideBar">
    <div id="guideBackground">
      <slot name="titleBac"></slot>
      <!--在线字体 242.全新硬笔行书简 https://www.qt86.com/tools/shupai.php-->
      <slot name="titleCharacter"></slot>
    </div>
    <div id="guideRoute">
      <navigation-bar></navigation-bar>
    </div>
    <div id="guideContent">
      <div id="catering">
        <div id="cateringTitle">
          <span style="font-size: 25px;font-family: 华文行楷;color: black">—— 餐饮 ——</span>
          <img id="caterBg" src="../../../assets/img/guide/catering.png" alt="">
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  import NavigationBar from "../dictionary/navigation/NavigationBar";
  export default {
    name: "GuideBar",
    components: {NavigationBar}
  }
</script>

<style scoped>
  #guideBar {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #guideBackground {
    position: absolute;
    width: 100%;
    height: 55%;
    text-align: center;
  }
  #guideBackground img[name = 'titleBac'] {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  #guideBackground img[name = 'titleCharacter'] {
    position: absolute;
    height: 80%;
    top: 5%;
  }
  #guideRoute {
    position: absolute;
    top: 48.5%;
    width: 70%;
    height: 12.5%;
    left: 15%;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.1);
  }
  #guideContent {
     top: 55%;
     width: 100%;
     height: 520%;
     /*background-color: white;*/
    background-color: #ff8198;
   }
  #catering {
     position: absolute;
     top: 70%;
     width: 80%;
     left: 10%;
     height: 80%;
     text-align: center;
    border: 1px solid black;
   }
  #cateringTitle {
    position: relative;
    top: 5%;
    border: 1px solid black;
    height: 10%;
    width: 20%;
    left: 40%;
    text-align: center;
  }
  #cateringTitle span {
    position: relative;
    top: 28%;
  }
  #cateringTitle #caterBg{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150%;
    left: 0;
    z-index: 0;
  }
</style>