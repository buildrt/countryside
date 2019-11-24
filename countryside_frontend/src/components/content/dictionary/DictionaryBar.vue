<template>
  <div id="dictionaryBar">
    <div id="dicBackground">
      <slot name="titleBac"></slot>
      <!--在线字体 242.全新硬笔行书简 https://www.qt86.com/tools/shupai.php-->
      <slot name="titleCharacter"></slot>

    </div>
    <div id="dicRoute">
      <navigation-bar></navigation-bar>
    </div>
    <div id="dicContent">
      <div id="villageMap">
        <span style="font-size: 25px;font-family: 华文行楷;color: black">—— <slot name="villageName"></slot>地图 ——</span>
        <div id="mapContent">
          <div id="mapImg"><slot name="mapBCImg"></slot></div>
          <div id="mapIntroduce"><slot name="mapIntro1"></slot></div>
        </div>
      </div>
      <div id="villageHistory">
        <span style="font-size: 25px;font-family: 华文行楷;color: black">—— <slot name="villageName"></slot>历史背景 ——</span>
        <div id="historyContent">
          <div id="historyImg">
            <div id="mainImg"><slot name="mainImg"></slot></div>
            <div id="villageNameImg"><slot name="villageNameImg"></slot></div>
          </div>
          <div id="historyIntroduct">
            <div id="hisIntrBC"></div>
            <div id="hisIntro"><slot name="hisIntroContent"></slot></div>
          </div>
          <div id="historyTour"></div>
        </div>
      </div>
      <div id="villageFood">
        <span style="font-size: 25px;font-family: 华文行楷;color: black">—— <slot name="villageName"></slot>美食 ——</span>
        <table cellspacing="0" cellpadding="0" border="0" style="position: absolute;top: 20%;width: 100%;height: 80%">
          <tr style="height: 100%">
            <td width="33.3%">
              <div id="food1Img"><slot name="food1Img"></slot></div>
              <div id="food1Content"><slot name="food1Name"></slot><slot name="food1Intro"></slot></div>
            </td>
            <td width="33.3%">
              <div id="food2Img"><slot name="food2Img"></slot></div>
              <div id="food2Content"><slot name="food2Name"></slot><slot name="food2Intro"></slot></div>
            </td>
            <td>
              <div id="food3Img"><slot name="food3Img"></slot></div>
              <div id="food3Content"><slot name="food3Name"></slot><slot name="food3Intro"></slot></div>
            </td>
          </tr>
        </table>
      </div>
      <div id="villageStory">
        <span style="font-size: 25px;font-family: 华文行楷;color: black">—— <slot name="villageName"></slot>故事 ——</span>
        <table cellspacing="0" cellpadding="0" border="0" style="position: absolute;top: 8%;width: 100%;height: 92%;box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.2);">
          <tr style="height: 30%;">
            <td width="100%">
              <div id="storyImg1"><slot name="storyImg1"></slot></div>
              <div id="storyContent1">
                <span style="position: absolute;left: 0;top: 10%;font-size: 18px;color: #409eff">故事名称<slot name="storyName1"></slot></span>
                <slot name="story1"></slot>
              </div>
            </td>
          </tr>
          <tr style="height: 5%;">
            <td></td>
          </tr>
          <tr style="height: 30%;">
            <td width="100%">
              <div id="storyImg2"><slot name="storyImg2"></slot></div>
              <div id="storyContent2">
                <span style="position: absolute;right: 0;top: 10%;font-size: 18px;color: #409eff"><slot name="storyName2"></slot>故事名称</span>
                <slot name="story2"></slot>
              </div>
            </td>
          </tr>
          <tr style="height: 5%;">
            <td></td>
          </tr>
          <tr style="height: 30%;">
            <td width="100%">
              <div id="storyImg3"><slot name="storyImg3"></slot></div>
              <div id="storyContent3">
                <span style="position: absolute;left: 0;top: 10%;font-size: 18px;color: #409eff">故事名称<slot name="storyName3"></slot></span>
                <slot name="story3"></slot>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigationBar from "./navigation/NavigationBar";
  export default {
    name: "DictionaryBar",
    components: {
      NavigationBar
    }
  }
</script>

<style scoped>
  #dictionaryBar {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #dicBackground {
    position: absolute;
    width: 100%;
    height: 55%;
    text-align: center;
  }
  #dicBackground img[name = 'titleBac'] {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  #dicBackground img[name = 'titleCharacter'] {
    position: absolute;
    height: 80%;
    top: 5%;
  }
  #dicRoute {
    position: absolute;
    top: 48.5%;
    width: 60%;
    height: 12.5%;
    left: 20%;
    background-color: white;
    border-radius: 10px;
    box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.1);
  }
  #dicContent {
    top: 55%;
    width: 100%;
    height: 520%;
    background-color: white;
  }
  #villageMap {
    position: absolute;
    top: 70%;
    width: 70%;
    left: 15%;
    height: 100%;
    text-align: center;
  }
  #mapContent {
    position: absolute;
    top: 12%;
    width: 100%;
    height: 88%;
    background-color: #F1F3F6;
    box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.1);
  }
  #mapImg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 70%;
  }
  #mapImg img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  #mapIntroduce {
    position: absolute;
    top: 70%;
    width: 100%;
    height: 30%;
    text-align: left;
    background-color: white;
  }
  #mapIntroduce span {
    position: absolute;
    top: 10%;
    text-indent: 2em;
  }
  #villageHistory {
    position: absolute;
    top: 185%;
    width: 70%;
    left: 15%;
    height: 90%;
    text-align: center;
  }
  #historyContent {
    position: absolute;
    top: 12%;
    width: 100%;
    height: 88%;
    box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.1);
  }
  #historyIntroduct {
    position: absolute;
    top: 20%;
    width: 100%;
    height: 40%;
    background: url("../../../assets/img/dictionary/jiangsu/changzhou/hisIntrImg.jpeg");
  }
  #historyImg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 48%;
    z-index: 1;
  }
  #mainImg {
    position: absolute;
    width: 20%;
    height: 100%;
    left: 5%;
  }
  #mainImg img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  #villageNameImg {
    position: absolute;
    width: 25%;
    height: 25%;
    left: 23%;
  }
  #villageNameImg img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  #hisIntrBC {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(70,130,200,0.8);
  }
  #hisIntro {
    position: absolute;
    width: 65%;
    height: 70%;
    top: 10%;
    right: 5%;
    text-align: left;
  }
  #hisIntro span {
    position: absolute;
    text-indent: 2em;
    color: white;
    font-size: 14px;
  }
  #historyTour {
    position: absolute;
    top: 60%;
    width: 100%;
    height: 40%;
    background-color: white;
  }
  #villageFood {
    position: absolute;
    top: 290%;
    width: 70%;
    left: 15%;
    height: 60%;
    text-align: center;
  }
  #food1Img {
    position: absolute;
    width: 32%;
    top: 0;
    height: 70%;
  }
  #food1Img img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  #food1Content {
    position: absolute;
    width: 25%;
    left: 3.5%;
    height: 50%;
    background-color: white;
    text-align: left;
    box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }
  #food1Content p {
    position: absolute;
    top: 10%;
    left: 38%;
    font-size: 18px;
    color: #409eff;
  }
  #food1Content span {
    position: absolute;
    top: 28%;
    left: 5%;
    right: 5%;
    font-size: 14px;
    text-indent: 2em;
  }
  #food2Img {
    position: absolute;
    width: 32%;
    top: 0;
    left: 34%;
    height: 70%;
  }
  #food2Img img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  #food2Content {
    position: absolute;
    width: 25%;
    left: 37.5%;
    height: 50%;
    background-color: white;
    text-align: left;
    box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }
  #food2Content p {
    position: absolute;
    top: 10%;
    left: 38%;
    font-size: 18px;
    color: #409eff;
  }
  #food2Content span {
    position: absolute;
    top: 28%;
    left: 5%;
    right: 5%;
    font-size: 14px;
    text-indent: 2em;
  }
  #food3Img {
    position: absolute;
    width: 32%;
    top: 0;
    left: 68%;
    height: 70%;
  }
  #food3Img img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  #food3Content {
    position: absolute;
    width: 25%;
    left: 71.5%;
    height: 50%;
    text-align: left;
    background-color: white;
    box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }
  #food3Content p {
    position: absolute;
    top: 10%;
    left: 38%;
    font-size: 18px;
    color: #409eff;
  }
  #food3Content span {
    position: absolute;
    top: 28%;
    left: 5%;
    right: 5%;
    font-size: 14px;
    text-indent: 2em;
  }
  #villageStory {
    position: absolute;
    top: 365%;
    width: 70%;
    left: 15%;
    height: 140%;
    text-align: center;
  }
  #storyImg1 {
    position: absolute;
    width: 40%;
    top: 0;
    height: 30%;
  }
  #storyContent1 {
    position: absolute;
    width: 50%;
    top: 0;
    left: 45%;
    height: 30%;
  }
  #storyImg2 {
    position: absolute;
    width: 40%;
    top: 35%;
    right: 0;
    height: 30%;
  }
  #storyContent2 {
    position: absolute;
    width: 50%;
    top: 35%;
    left: 5%;
    height: 30%;
  }
  #storyImg3 {
    position: absolute;
    width: 40%;
    top: 70%;
    height: 30%;
  }
  #storyContent3 {
    position: absolute;
    width: 50%;
    top: 70%;
    left: 45%;
    height: 30%;
  }
  #storyImg1 img,#storyImg2 img,#storyImg3 img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  #storyContent1 span[name='story1'], #storyContent2 span[name='story2'],#storyContent3 span[name='story3']{
    font-size: 15px;
    position: absolute;
    top: 25%;
    left: 0;
    text-align: left;
    text-indent: 2em;
    color: #666666;
  }
  #storyContent1 span[name='storyName1'], #storyContent3 span[name='storyName3']{
    position: absolute;
    margin-left: 30%;
    width: 100%;
    height: 100%;
    top: 10%;
    font-size: 18px;
    color: black;
  }
  #storyContent2 span[name='storyName2']{
    position: absolute;
    right: 130%;
    width: 100%;
    height: 100%;
    top: 10%;
    font-size: 18px;
    color: black;
  }
</style>