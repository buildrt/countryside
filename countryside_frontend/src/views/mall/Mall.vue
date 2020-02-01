<template>
  <div id="mall">
    <mall-title-bar></mall-title-bar>
    <mall-carousel-bar></mall-carousel-bar>
    <div id="mallProduct">
      <span id="productTitle">文 创 产 品</span>
      <div class="product_tab_btn">
        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; height: 100%;text-align: center">
          <tr>
            <td width="25%"><el-button round @click="selectPostcard">书 签</el-button></td>
            <td width="25%"><el-button round @click="selectPicture">明信片</el-button></td>
            <td width="25%"><el-button round @click="selectBag">帆布袋</el-button></td>
            <td width="25%"><el-button round @click="selectGame">大富翁</el-button></td>
          </tr>
        </table>
      </div>
      <div id="postcard">
        <table cellspacing="0" cellpadding="0" border="0" style="width: 100%;height: 100%">
          <tr>
            <td width="25%">
              <div id="post1">
                <el-image style="height: 80%" :src="require('../../assets/img/mall/post1.png')" fit="fill" :preview-src-list="[require('../../assets/img/mall/post1.png')]"></el-image>
                <div style="position:absolute;height: 27%;width:100%;top: 73%;z-index: 1;text-align: center;">
                  <p style="font-family: 华文行楷;color: black;font-size: 25px">白塔村书签</p><br>
                  <p style="color: #f53737;font-size: 18px">￥3</p>
                  <el-button type="primary" size="mini" style="position:absolute; bottom: 8%;right: 2%">加入购物车</el-button>
                </div>
              </div>
            </td>
            <td width="25%">
              <div id="post2">
                <el-image style="height: 80%" :src="require('../../assets/img/mall/post2.png')" fit="fill" :preview-src-list="[require('../../assets/img/mall/post2.png')]"></el-image>
                <div style="position:absolute;height: 27%;width:100%;top: 73%;z-index: 1;text-align: center;">
                  <p style="font-family: 华文行楷;color: black;font-size: 25px">白塔村书签</p><br>
                  <p style="color: #f53737;font-size: 18px">￥3</p>
                  <el-button type="primary" size="mini" style="position:absolute; bottom: 8%;right: 2%">加入购物车</el-button>
                </div>
              </div>
            </td>
            <td width="25%">
              <div id="post3">
                <el-image style="height: 80%" :src="require('../../assets/img/mall/post3.png')" fit="fill" :preview-src-list="[require('../../assets/img/mall/post3.png')]"></el-image>
                <div style="position:absolute;height: 27%;width:100%;top: 73%;z-index: 1;text-align: center;">
                  <p style="font-family: 华文行楷;color: black;font-size: 25px">白塔村书签</p><br>
                  <p style="color: #f53737;font-size: 18px">￥3</p>
                  <el-button type="primary" size="mini" style="position:absolute; bottom: 8%;right: 2%">加入购物车</el-button>
                </div>
              </div>
            </td>
            <td width="25%">
              <div id="post4">
                <el-image style="height: 80%" :src="require('../../assets/img/mall/post4.png')" fit="fill" :preview-src-list="[require('../../assets/img/mall/post4.png')]"></el-image>
                <div style="position:absolute;height: 27%;width:100%;top: 73%;z-index: 1;text-align: center;">
                  <p style="font-family: 华文行楷;color: black;font-size: 25px">白塔村书签</p><br>
                  <p style="color: #f53737;font-size: 18px">￥3</p>
                  <el-button type="primary" size="mini" style="position:absolute; bottom: 8%;right: 2%">加入购物车</el-button>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div id="picture">
        <table cellspacing="0" cellpadding="0" border="0" style="width: 100%;height: 100%">
          <tr>
            <td width="25%">
              <div id="p1">
                <el-image style="position:absolute;top: 5%;width: 95%;left: 2.5%;border-radius: 15px" :src="require('../../assets/img/mall/p1.jpg')" fit="fill" :preview-src-list="[require('../../assets/img/mall/p1.jpg')]"></el-image>
                <div style="position:absolute;height: 27%;width:100%;top: 73%;z-index: 1;text-align: center;">
                  <br><br><br>
                  <p style="color: #f53737;font-size: 18px">￥5</p>
                  <el-button type="primary" size="mini" style="position:absolute; bottom: 8%;right: 2%">加入购物车</el-button>
                </div>
              </div>
            </td>
            <td width="25%">
              <div id="p2">
                <el-image style="position:absolute;top: 5%;width: 95%;left: 2.5%;border-radius: 15px" :src="require('../../assets/img/mall/p2.jpg')" fit="fill" :preview-src-list="[require('../../assets/img/mall/p2.jpg')]"></el-image>
                <div style="position:absolute;height: 27%;width:100%;top: 73%;z-index: 1;text-align: center;">
                  <br><br><br>
                  <p style="color: #f53737;font-size: 18px">￥5</p>
                  <el-button type="primary" size="mini" style="position:absolute; bottom: 8%;right: 2%">加入购物车</el-button>
                </div>
              </div>
            </td>
            <td width="25%">
              <div id="p3">
                <el-image style="position:absolute;top: 5%;width: 95%;left: 2.5%;border-radius: 15px" :src="require('../../assets/img/mall/p3.jpg')" fit="fill" :preview-src-list="[require('../../assets/img/mall/p3.jpg')]"></el-image>
                <div style="position:absolute;height: 27%;width:100%;top: 73%;z-index: 1;text-align: center;">
                  <br><br><br>
                  <p style="color: #f53737;font-size: 18px;">￥5</p>
                  <el-button type="primary" size="mini" style="position:absolute; bottom: 8%;right: 2%">加入购物车</el-button>
                </div>
              </div>
            </td>
            <td width="25%">
              <div id="p4">
                <el-image style="position:absolute;top: 5%;width: 95%;left: 2.5%;border-radius: 15px" :src="require('../../assets/img/mall/p4.jpg')" fit="fill" :preview-src-list="[require('../../assets/img/mall/p4.jpg')]"></el-image>
                <div style="position:absolute;height: 27%;width:100%;top: 73%;z-index: 1;text-align: center;">
                  <br><br><br>
                  <p style="color: #f53737;font-size: 18px">￥</p>
                  <el-button type="primary" size="mini" style="position:absolute; bottom: 8%;right: 2%">加入购物车</el-button>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div id="bag">
        <div id="bag1">
          <el-image style="position:absolute;top: 5%;width: 100%;left: 2.5%;border-radius: 15px" :src="require('../../assets/img/mall/bag.png')" :preview-src-list="[require('../../assets/img/mall/bag.png')]"></el-image>
        </div>
        <div style="position:absolute;left: 55%;height: 27%;width:30%;top: 25%;z-index: 1;text-align: center;border: 1px solid #bfbfbf">
          <p style="font-family: 华文行楷;color: black;font-size: 25px">帆布袋</p><br>
          <p style="color: #f53737;font-size: 18px">￥25</p>
          <el-button type="primary" size="mini" style="position:absolute; bottom: 8%;right: 10%">加入购物车</el-button>
        </div>
      </div>
      <div id="game">
        <div id="game1">
          <el-image style="position:absolute;width: 100%;height:100%;left:0;border-radius: 15px" :src="require('../../assets/img/mall/game1.jpg')" :preview-src-list="[require('../../assets/img/mall/game1.jpg'),require('../../assets/img/mall/game2.jpg')]"></el-image>
        </div>
        <div style="position:absolute;left: 55%;height: 27%;width:30%;top: 25%;z-index: 1;text-align: center;border: 1px solid #bfbfbf">
          <p style="font-family: 华文行楷;color: black;font-size: 25px">大富翁</p><br>
          <p style="color: #f53737;font-size: 18px">￥88</p>
          <el-button type="primary" size="mini" style="position:absolute; bottom: 8%;right: 10%">加入购物车</el-button>
        </div>
      </div>
    </div>
    <div id="foot">

    </div>
  </div>
</template>

<script>
  import MallTitleBar from "../../components/content/mall/MallTitleBar";
  import MallCarouselBar from "../../components/content/mall/MallCarouselBar";
  import post1 from "../../assets/img/mall/post1.png"
  export default {
    name: "Mall",
    components: {MallCarouselBar, MallTitleBar},
    methods: {
      selectPostcard() {
        document.getElementById("picture").style.display="none";
        document.getElementById("bag").style.display="none";
        document.getElementById("game").style.display="none";
        document.getElementById("postcard").style.display="block";
      },
      selectPicture() {
        document.getElementById("postcard").style.display="none";
        document.getElementById("bag").style.display="none";
        document.getElementById("game").style.display="none";
        document.getElementById("picture").style.display="block";
      },
      selectBag() {
        document.getElementById("postcard").style.display="none";
        document.getElementById("picture").style.display="none";
        document.getElementById("game").style.display="none";
        document.getElementById("bag").style.display="block";
      },
      selectGame() {
        document.getElementById("postcard").style.display="none";
        document.getElementById("picture").style.display="none";
        document.getElementById("bag").style.display="none";
        document.getElementById("game").style.display="block";
      }
    }
  }
</script>

<style scoped>
  #mall {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  #mallProduct {
    position: absolute;
    top: 80%;
    width: 88%;
    height: 100%;
    left: 6%;
    /*border: 1px solid black;*/
    background-color: white;
    text-align: center;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.1);
  }
  #productTitle {
    position: relative;
    font-size: 40px;
    color: black;
    font-family: 华文行楷;
  }
  .product_tab_btn {
    position: relative;
    /*border: solid 1px black;*/
    width: 60%;
    height: 10%;
    top: 6%;
    left: 20%;
  }
  #postcard {
    position: absolute;
    display: block;
    /*border: solid 1px black;*/
    width: 90%;
    height: 70%;
    top: 25%;
    left: 5%;
  }
  #bag {
    position: absolute;
    display: none;
    /*border: solid 1px black;*/
    width: 90%;
    height: 70%;
    top: 25%;
    left: 5%;
  }
  #bag1,#game1 {
    background-color: #F1F3F6;
    position: absolute;
    width: 50%;
    height: 80%;
    border: solid 1px #bfbfbf;
    border-radius: 15px;
  }
  #picture {
    position: absolute;
    display: none;
    /*border: solid 1px black;*/
    width: 90%;
    height: 70%;
    top: 25%;
    left: 5%;
  }
  #game {
    position: absolute;
    display: none;
    /*border: solid 1px black;*/
    width: 90%;
    height: 70%;
    top: 25%;
    left: 5%;
  }
  #post1,#p1 {
    position: absolute;
    width: 23%;
    top: 2.5%;
    left: 1%;
    height: 95%;
    border-radius: 15px;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.1);
    border: solid 1px #bfbfbf;
  }
  #post2,#p2 {
    position: absolute;
    width: 23%;
    top: 2.5%;
    left: 26%;
    height: 95%;
    border-radius: 15px;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.1);
    border: solid 1px #bfbfbf;
  }
  #post3,#p3 {
    position: absolute;
    width: 23%;
    top: 2.5%;
    left: 51%;
    height: 95%;
    border-radius: 15px;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.1);
    border: solid 1px #bfbfbf;
  }
  #post4,#p4 {
    position: absolute;
    width: 23%;
    top: 2.5%;
    left: 76%;
    height: 95%;
    border-radius: 15px;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.1);
    border: solid 1px #bfbfbf;
  }
  #foot {
    position: absolute;
    top: 180%;
    height: 10%;
    width: 100%;
  }
</style>