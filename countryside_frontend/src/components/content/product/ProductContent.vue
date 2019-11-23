<template>
  <div id="productContent">
    <table id="productContentTable" cellpadding="0" cellspacing="0" border="0">
      <tr style="height: 25%">
        <td width="45%">
          <div class="imgBorder">
            <el-image lazy :src="require('../../../assets/img/home/product/01.png')" :preview-src-list="[require('../../../assets/img/home/product/product1.png'),require('../../../assets/img/home/product/product2.png'),require('../../../assets/img/home/product/product3.png'),require('../../../assets/img/home/product/product4.png')]" fit="fill"></el-image>
          </div>
        </td>
        <td>
          <div class="productIntroduce">
            <h2 style="color: #F55B1F;font-family: 华文宋体">明信片和书签</h2>
            <p style="font-size: 14px;margin-top: 6px;color: white">出于丰富文创产品的目的，想以一种礼物的形式赠送给对接合作的村的村委会
            并且后期我们希望能通过该村的平台对我们制作的书签、明信片进行宣传,也可以挂在我们的网站上进行售卖，多种途径进行利用。
            其次，考虑到大富翁、宣传画册制作的成本太高，后期不可能将所有的乡村都囊括
            所以书签明信片就显得简单而又明了，是一个很好的选择。明信片也是由美术专业的同学负责
            都是纯手绘的乡村的风景等;书签是有会ps技术的同学负责，在电脑上进行制作， 并印刷下来的。</p>
          </div>
        </td>
      </tr>
      <tr>
        <td width="45%">
          <div class="imgBorder">
            <el-image lazy :src="require('../../../assets/img/home/product/02.png')" :preview-src-list="[require('../../../assets/img/home/product/picture/p1.png'),require('../../../assets/img/home/product//picture/p2.png'),require('../../../assets/img/home/product/picture/p3.png'),require('../../../assets/img/home/product/picture/p4.png')]" fit="fill"></el-image>
          </div>
        </td>
        <td>
          <div class="productIntroduce">
            <h2 style="color: #F55B1F;font-family: 华文宋体">宣传画册</h2>
            <p style="font-size: 14px;margin-top: 8px;color: white">宣传画册为了改变一成不变的文字介绍方式，
              更加直观、更加吸人眼球，于是我们创作了宣传画册。宣传画册方面我们有专业的美院同学负责，
              进行设计、绘画等。其次，在宣传画册中我们也融入了小红军的形 象，将小红军作为宣传画册的引导，
              带领大家进行更有序得浏览。</p>
          </div>
        </td>
      </tr>
      <tr>
        <td width="45%">
          <div class="imgBorder">
            <el-image :src="require('../../../assets/img/home/product/03.png')" :preview-src-list="[require('../../../assets/img/home/product/mall1.jpg'),require('../../../assets/img/home/product/mall2.jpg')]" fit="fill"></el-image>
          </div>
        </td>
        <td>
          <div class="productIntroduce">
            <h2 style="color: #F55B1F;font-family: 华文宋体">"村村游"大富翁</h2>
            <p style="font-size: 14px;margin-top: 8px;color: white">不同于单 一的文字介绍，将乡村的特色、重点放在游戏当中。
              通过游戏的方式 让玩家们感受到乡村的独特魅力。其次，本团队将大富翁以及飞行棋 的游玩模式，
              做了结合和改善，提高游戏的可玩性。“村村游”大富翁是 由本团队的成员全程策划、设计、制作的，
              同时，团队还进行了反复 的试玩，测试游戏的不足点，进行进一步的改善等。
            </p>
          </div>
        </td>
      </tr>
      <tr>
        <td width="45%">
          <div class="imgBorder">
            <el-image lazy :src="require('../../../assets/img/home/product/01.png')" :preview-src-list="[require('../../../assets/img/home/product/product1.png'),require('../../../assets/img/home/product/product2.png'),require('../../../assets/img/home/product/product3.png'),require('../../../assets/img/home/product/product4.png')]" fit="fill"></el-image>
          </div>
        </td>
        <td>
          <div class="productIntroduce">
            <h2 style="color: #F55B1F;font-family: 华文宋体">帆布袋</h2>
            <p style="font-size: 14px;margin-top: 6px;color: white">出于丰富文创产品的目的，想以一种礼物的形式赠送给对接合作的村的村委会
              并且后期我们希望能通过该村的平台对我们制作的书签、明信片进行宣传,也可以挂在我们的网站上进行售卖，多种途径进行利用。
              其次，考虑到大富翁、宣传画册制作的成本太高，后期不可能将所有的乡村都囊括
              所以书签明信片就显得简单而又明了，是一个很好的选择。明信片也是由美术专业的同学负责
              都是纯手绘的乡村的风景等;书签是有会ps技术的同学负责，在电脑上进行制作， 并印刷下来的。</p>
          </div>
        </td>
      </tr>
    </table>
    <div id="productContentFoot"></div>
  </div>
</template>

<script>
  export default {
    name: "ProductContent"
  }
</script>

<style scoped>
  #productContent {
    position: absolute;
    top: 28%;
    width: 65%;
    left: 32%;
    bottom: 0;
    background-color: rgba(255,255,255,0.2);
    overflow-y: scroll;
    z-index: 1;
  }
  #productContentTable {
    position: absolute;
    top: 5%;
    width: 90%;
    left: 2.5%;
    height: 175%;
  }
  .imgBorder {
    position: relative;
    width: 85%;
    height: 85%;
    left: 7.5%;
    border: 5px solid;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.2);
    box-shadow: -8px 8px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  .productIntroduce {
    position: relative;
    width: 90%;
    height: 95%;
  }
  #productContentFoot {
    position: absolute;
    top: 180%;
    width: 100%;
    height: 40px;
  }
</style>