<template>
  <div id="guideBar">
    <div id="guideBackground">
      <slot name="titleBac"></slot>
      <slot name="titleName"></slot>
      <!--在线字体 242.全新硬笔行书简 https://www.qt86.com/tools/shupai.php-->
      <img name="titleCharacter" src="../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/guideTitle.png" alt="">
    </div>
    <div id="guideRoute">
      <navigation-bar></navigation-bar>
    </div>
    <div id="guideContent">
      <div id="catering">
        <div id="cateringTitle">
          <span style="font-size: 25px;font-family: 华文行楷;color: black">餐饮</span>
          <img id="caterBg" src="../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/catering.png" alt="">
        </div>
        <div id="cateringContent">
          <table id="cateringTable" cellpadding="0" cellspacing="0" border="0">
            <tr style="height: 100%">
              <td width="25%">
                <slot name="cateringImg1"></slot>
                <div id="cateringName1"><slot name="cateringName1"></slot></div>
              </td>
              <td width="25%">
                <slot name="cateringImg2"></slot>
                <div id="cateringName2"><slot name="cateringName2"></slot></div>
              </td>
              <td width="25%">
                <slot name="cateringImg3"></slot>
                <div id="cateringName3"><slot name="cateringName3"></slot></div>
              </td>
              <td width="25%">
                <slot name="cateringImg4"></slot>
                <div id="cateringName4"><slot name="cateringName4"></slot></div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div id="travel">
        <div id="travelTitle">
          <span style="font-size: 25px;font-family: 华文行楷;color: black">旅游</span>
          <img id="travelBg" src="../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/travel.png" alt="">
        </div>
        <div id="travelContent">
          <slot name="travelImg"></slot>
        </div>
      </div>
      <div id="traffic">
        <div id="trafficTitle">
          <span style="font-size: 25px;font-family: 华文行楷;color: black">交通方式</span>
          <img id="trafficBg" src="../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/traffic.png" alt="">
        </div>
        <div id="trafficContent">
          <slot name="trafficImg"></slot>
          <div id="trafficIntro">
            <p id="tIntroTitle">多种交通方式供您选择</p>
            <div id="tIntroContent"><slot name="tIntroContent"></slot></div>
          </div>
        </div>
      </div>
      <div id="hotel">
        <div id="hotelTitle">
          <span style="font-size: 25px;font-family: 华文行楷;color: black">酒店预订</span>
          <img id="hotelBg" src="../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/hotel.png" alt="">
        </div>
        <div id="hotelContent">
          <div id="hotelImg1">
            <slot name="hotelImg1"></slot>
            <div id="hotelIntro1">
              <slot name="hotelIntro1"></slot>
              <slot name="hotelLocal1"></slot>
              <slot name="hotelPrice1"></slot>
            </div>
          </div>
          <div id="hotelImg2">
            <slot name="hotelImg2"></slot>
            <div id="hotelIntro2">
              <slot name="hotelIntro2"></slot>
              <slot name="hotelLocal2"></slot>
              <slot name="hotelPrice2"></slot>
            </div>
          </div>
          <div id="hotelImg3">
            <slot name="hotelImg3"></slot>
            <div id="hotelIntro3">
              <slot name="hotelIntro3"></slot>
              <slot name="hotelLocal3"></slot>
              <slot name="hotelPrice3"></slot>
            </div>
          </div>
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
    height: 60%;
    top: 17%;
    width: 10%;
    left: 35%;
  }
  #guideBackground img[name = 'titleName'] {
    position: absolute;
    height: 80%;
    top: 2.5%;
    width: 8%;
    left: 45%;
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
     background-color: white;
   }
  #catering {
     position: absolute;
     top: 70%;
     width: 80%;
     left: 10%;
     height: 80%;
     text-align: center;
     /*border: 1px solid black;*/
   }
  #cateringTitle {
    position: relative;
    top: 5%;
    /*border: 1px solid black;*/
    height: 10%;
    width: 20%;
    left: 40%;
    text-align: center;
  }
  #cateringTitle span {
    position: relative;
    top: 40%;
    z-index: 1;
  }
  #cateringTitle #caterBg{
    position: absolute;
    top: 0;
    width: 100%;
    height: 150%;
    left: 0;
    z-index: 0;
  }
  #cateringContent {
    position: relative;
    top: 15%;
    width: 100%;
    height: 75%;
    border-radius: 10px;
    box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.1);
    /*background-color: #666666;*/
  }
  #cateringTable {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #cateringTable td img[name="cateringImg1"]{
    position: absolute;
    width: 20%;
    top: 0;
    height: 100%;
    left: 2.5%;
  }
  #cateringTable td img[name="cateringImg2"]{
    position: absolute;
    width: 20%;
    top: 0;
    height: 100%;
    left: 27.5%;
  }
  #cateringTable td img[name="cateringImg3"]{
    position: absolute;
    width: 20%;
    top: 0;
    height: 100%;
    left: 52.5%;
  }
  #cateringTable td img[name="cateringImg4"]{
    position: absolute;
    width: 20%;
    top: 0;
    height: 100%;
    left: 77.5%;
  }
  #cateringName1 {
    position: absolute;
    width: 20%;
    left: 2.5%;
    height: 20%;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    text-align: center;
  }
  #cateringName1 p,#cateringName2 p,#cateringName3 p,#cateringName4 p{
    position: relative;
    font-size: 22px;
    color: #F1F3F6;
    top: 25%;
  }
  #cateringName2 {
    position: absolute;
    width: 20%;
    left: 27.5%;
    height: 20%;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    text-align: center;
  }
  #cateringName3 {
    position: absolute;
    width: 20%;
    left: 52.5%;
    height: 20%;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    text-align: center;
  }
  #cateringName4 {
    position: absolute;
    width: 20%;
    left: 77.5%;
    height: 20%;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    text-align: center;
  }
  #travel {
    position: absolute;
    top: 165%;
    /*border: 1px solid black;*/
    width: 80%;
    left: 10%;
    height: 80%;
    text-align: center;
  }
  #travelTitle {
    position: relative;
    top: 5%;
    /*border: 1px solid black;*/
    height: 10%;
    width: 20%;
    left: 40%;
    text-align: center;
  }
  #travelTitle span {
    position: relative;
    top: 50%;
    z-index: 1;
  }
  #travelTitle #travelBg{
    position: absolute;
    top: 0;
    width: 100%;
    height: 150%;
    left: 0;
    z-index: 0;
  }
  #travelContent {
    position: relative;
    top: 15%;
    width: 100%;
    height: 75%;
    /*background-color: #666666;*/
    border-radius: 10px;
    box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.1);
  }
  #travelContent .el-carousel {
    position: relative;
    width: 100%;
    height: 100%;
    top: 10%;
  }
  #traffic {
    position: absolute;
    top: 260%;
    /*border: 1px solid black;*/
    width: 80%;
    left: 10%;
    height: 80%;
    text-align: center;
  }
  #trafficTitle {
    position: relative;
    top: 5%;
    /*border: 1px solid black;*/
    height: 10%;
    width: 20%;
    left: 40%;
    text-align: center;
  }
  #trafficTitle span {
    position: relative;
    top: 40%;
    z-index: 1;
  }
  #trafficTitle #trafficBg{
    position: absolute;
    top: 0;
    width: 100%;
    height: 150%;
    left: 0;
    z-index: 0;
  }
  #trafficContent {
    position: relative;
    top: 15%;
    width: 100%;
    height: 75%;
    border-radius: 10px;
    box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.1);
    /*background-color: #666666;*/
  }
  #trafficContent .el-carousel {
    position: relative;
    width: 45%;
    height: auto;
    left: 5%;
    top: 10%;
    /*border: black 1px solid;*/
  }
  #trafficIntro {
    position: absolute;
    width: 45%;
    bottom: 0;
    left: 55%;
    top: 10%;
    /*border: black 1px solid;*/
  }
  #trafficIntro #tIntroTitle {
    position: absolute;
    top: 15%;
    width: auto;
    height: 10%;
    /*border: black 1px solid;*/
    border-bottom: #409eff 2px solid;
    text-align: left;
    font-size: 25px;
    color: black;
    font-weight: 400;
  }
  #tIntroContent {
    position: absolute;
    top: 30%;
    width: 100%;
    /*border: black 1px solid;*/
    height: 60%;
  }
  #hotel {
    position: absolute;
    top: 360%;
    /*border: 1px solid black;*/
    width: 80%;
    left: 10%;
    height: 80%;
    text-align: center;
  }
  #hotelTitle {
    position: relative;
    top: 5%;
    /*border: 1px solid black;*/
    height: 10%;
    width: 20%;
    left: 40%;
    text-align: center;
  }
  #hotelTitle span {
    position: relative;
    top: 50%;
    z-index: 1;
  }
  #hotelTitle #hotelBg{
    position: absolute;
    top: 0;
    width: 100%;
    height: 150%;
    left: 0;
    z-index: 0;
  }
  #hotelContent {
    position: absolute;
    top: 30%;
    width: 100%;
    height: 70%;
    border-radius: 10px;
    box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.1);
    /*border: 1px solid black;*/
  }
  #hotelContent #hotelImg1 {
    position: absolute;
    top: 0;
    width: 40%;
    height: 100%;
    left: 5%;
    /*border: 1px solid black;*/
  }
  #hotelImg1 img{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  #hotelIntro1 {
    position: absolute;
    width: 100%;
    height: 30%;
    background-color: rgba(0,0,0,0.5);
    bottom: 0;
    text-align: left;
    /*border: 1px solid black;*/
  }
  #hotelIntro1 p {
    position: relative;
    top: 10%;
    color: white;
    font-size: 16px;
    margin-bottom: 10px;
    left: 5%;
  }
  #hotelContent #hotelImg2 {
    position: absolute;
    top: 15%;
    width: 25%;
    height: 70%;
    left: 47.5%;
    /*border: 1px solid black;*/
  }
  #hotelImg2 img{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  #hotelIntro2 {
    position: absolute;
    width: 100%;
    height: 30%;
    background-color: rgba(0,0,0,0.5);
    bottom: 0;
    text-align: left;
    /*border: 1px solid black;*/
  }
  #hotelIntro2 p {
    position: relative;
    top: 10%;
    color: white;
    font-size: 14px;
    margin-bottom: 5px;
    left: 5%;
  }
  #hotelContent #hotelImg3 {
    position: absolute;
    top: 15%;
    width: 25%;
    height: 70%;
    left: 75%;
    /*border: 1px solid black;*/
  }
  #hotelImg3 img{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  #hotelIntro3 {
    position: absolute;
    width: 100%;
    height: 30%;
    background-color: rgba(0,0,0,0.5);
    bottom: 0;
    text-align: left;
    /*border: 1px solid black;*/
  }
  #hotelIntro3 p {
    position: relative;
    top: 10%;
    color: white;
    font-size: 14px;
    margin-bottom: 5px;
    left: 5%;
  }
</style>