<template>
  <div id="home">
    <home-title-bar></home-title-bar>
    <div id="headImg">
      <home-bar></home-bar>
      <div id="headContent">
        <p id="p1">立即找到你的理想之地</p>
        <h2 id="p2">乡村的宝藏</h2>
        <div id="headBtn">
          <el-button id="homeHeadBtn" type="primary" round style="background-color: rgba(0,0,0,0);" @click="JumpToContent">开始旅程</el-button>
        </div>
      </div>
      <div id="headSearch">
        <el-form>
          <el-form-item>
            <el-input></el-input>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-carousel :interval="8000" loop height="100%" >
        <el-carousel-item v-for="item in bcImg" :key="item">
          <el-image :src="item.img" style="background-color: rgba(0,0,0,0.2)"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="content">
      <div id="contentTitle">内&nbsp;容&nbsp;简&nbsp;介</div>
      <home-side-bar></home-side-bar>
      <table id="contentTable" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td width="50%">
            <img id="newsImg" src="../../assets/img/home/slider1.jpg" alt="">
          </td>
          <td>
            <el-tabs id="newsTabs" v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="地图" name="first">
                <el-image id="newsMapImg" style="width: 85%;" :src="require('../../assets/img/home/news/map/homeMap1.png')" :preview-src-list="[require('../../assets/img/home/news/map/homeMap.jpg')]" fit="fill"></el-image>
              </el-tab-pane>
              <el-tab-pane label="历史背景" name="second" style="text-align: left">
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅印发《关于完善仲裁制度》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">关于完善仲裁制度提高仲裁公信力的若干意见》</p>
              </el-tab-pane>
              <el-tab-pane label="美食" name="third" style="text-align: left">
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅印发《关于完善仲裁制度1》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">关于完善仲裁制度提高仲裁公信力的若干意见》</p>
              </el-tab-pane>
              <el-tab-pane label="故事" name="fourth" style="text-align: left">
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅印发《关于完善仲裁制度2》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">关于完善仲裁制度提高仲裁公信力的若干意见》</p>
              </el-tab-pane>
            </el-tabs>
          </td>
        </tr>
        <tr>
          <td width="50%" style="text-align: left">
            <el-tabs v-model="activeName2" style="position: absolute; top: 16%; padding-left: 5%">
              <el-tab-pane label="政策早知道" name="first">
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅印发《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
              </el-tab-pane>
              <el-tab-pane></el-tab-pane>
              <el-tab-pane></el-tab-pane>
              <el-tab-pane></el-tab-pane>
              <el-tab-pane></el-tab-pane>
              <el-tab-pane></el-tab-pane>
              <el-tab-pane></el-tab-pane>
            </el-tabs>
          </td>
          <td>
            <img id="policyImg" src="../../assets/img/home/slider2.jpg" alt="">
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div id="productContent" style="width: 100%; height: 100%;">
              <table cellpadding="0" cellspacing="0" border="0" style="position: absolute;width: 100%; height: 12%;">
                <tr>
                  <td width="25%">
                    <el-image style="width: 85%;" :src="require('../../assets/img/home/product/product1.png')" :preview-src-list="[require('../../assets/img/home/product/product1.png')]" fit="fill"></el-image>
                  </td>
                  <td width="25%">
                    <el-image style="width: 85%;" :src="require('../../assets/img/home/product/product2.png')" :preview-src-list="[require('../../assets/img/home/product/product2.png')]" fit="fill"></el-image>
                  </td>
                  <td width="25%">
                    <el-image style="width: 85%;" :src="require('../../assets/img/home/product/product3.png')" :preview-src-list="[require('../../assets/img/home/product/product3.png')]" fit="fill"></el-image>
                  </td>
                  <td width="25%">
                    <el-image style="width: 85%;" :src="require('../../assets/img/home/product/product4.png')" :preview-src-list="[require('../../assets/img/home/product/product4.png')]" fit="fill"></el-image>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div id="guideContent" style="width: 100%; height: 100%;">
              <table cellspacing="0" cellpadding="0" border="0" style="position: absolute;width: 100%;height: 12%;top: 50%;">
                <tr>
                  <td width="33.3%">
                    <el-image style="width: 85%;" :src="require('../../assets/img/home/guide/guide1.jpg')" :preview-src-list="[require('../../assets/img/home/guide/guide1.jpg')]" fit="fill"></el-image>
                  </td>
                  <td width="33.3%">
                    <el-image style="width: 85%;" :src="require('../../assets/img/home/guide/guide2.jpg')" :preview-src-list="[require('../../assets/img/home/guide/guide2.jpg')]" fit="fill"></el-image>
                  </td>
                  <td>
                    <el-image style="width: 85%;" :src="require('../../assets/img/home/guide/guide3.jpg')" :preview-src-list="[require('../../assets/img/home/guide/guide3.jpg')]" fit="fill"></el-image>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
        <tr>
          <td width="50%">
            <img id="forumImg" src="../../assets/img/home/slider3.jpg" alt="">
          </td>
          <td>
            <el-tabs v-model="activeName3" style="position: absolute; top: 67%; padding-left: 5%">
              <el-tab-pane label="推荐" name="first" style="text-align: left">
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅印发《关于完善仲裁制度》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
              </el-tab-pane>
              <el-tab-pane label="最新" name="second" style="text-align: left">
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅印发《关于完善仲裁制度2》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
              </el-tab-pane>
              <el-tab-pane label="精选" name="third" style="text-align: left">
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅印发《关于完善仲裁制度3》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
              </el-tab-pane>
              <el-tab-pane label="全部" name="forth" style="text-align: left">
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅印发《关于完善仲裁制度4》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                <p style="font-size: 14px;margin-bottom: 15px">关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
              </el-tab-pane>
            </el-tabs>
          </td>
        </tr>
        <tr>
          <td width="50%">
            <div id="mallContent" style="width: 100%; height: 100%;">
              <el-image :src="require('../../assets/img/home/mall/mall1.jpg')" :preview-src-list="[require('../../assets/img/home/mall/mall1.jpg')]"></el-image>
            </div>
          </td>
          <td></td>
        </tr>
      </table>
    </div>
    <div id="contract">
      <div id="contractContent">
        <table cellspacing="0" cellpadding="0" border="0">
          <tr style="height: 40%">
            <td style="width: 33.3%; font-size: 18px; color: #409eff">联系我们</td>
            <td style="width: 33.3%; font-size: 18px; color: #409eff">商务合作</td>
            <td style="font-size: 18px; color: #409eff">商家入驻</td>
          </tr>
          <tr>
            <td>
              <p style="color: white">单位地址：扬州大学</p>
              <br>
              <p style="color: white">邮箱：947668568@qq.com</p>
            </td>
            <td>
              <p style="color: white">联系人：张玉玺</p>
              <br>
              <p style="color: white">邮箱：1552021894@qq.com</p>
            </td>
            <td>
              <p style="color: white">联系人：张玉玺</p>
              <br>
              <p style="color: white">邮箱：1552021894@qq.com</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeBar from "../../components/content/home/HomeBar";
  import bg1 from "../../assets/img/home/slider1.jpg"
  import bg2 from "../../assets/img/home/slider2.jpg"
  import bg3 from "../../assets/img/home/slider3.jpg"
  import HomeTitleBar from "../../components/content/home/HomeTitleBar";
  import HomeSideBar from "../../components/content/home/HomeSideBar";

  export default {
    name: "Home",
    components: {
      HomeSideBar,
      HomeTitleBar,
      HomeBar,
    },
    data() {
      return {
        bcImg: [
          {img: bg1},
          {img: bg2},
          {img: bg3}
        ],
        activeName: 'second',
        activeName2: 'first',
        activeName3: 'first'
      }
    },
    methods: {
      JumpToContent() {
        document.getElementById("content").scrollIntoView({
          behavior: "smooth"
        });
      }
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
    top: 9%;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }
  .el-carousel {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  #headContent {
    position: absolute;
    top: 30%;
    width: 60%;
    left: 20%;
    height: 40%;
    text-align: center;
  }
  #headContent #p1 {
    position: absolute;
    top: 10%;
    width: 100%;
    font-size: 44px;
    color: white;
    font-family: Arial;
  }
  #headContent #p2 {
    position: absolute;
    top: 40%;
    width: 100%;
    font-size: 60px;
    color: white;
    font-family: Arial;
  }
  #headContent #headBtn {
    position: absolute;
    width: 100%;
    bottom: 5%;
  }
  #headSearch {
    position: absolute;
    top: 71%;
    width: 50%;
    height: 15%;
    left: 25%;
    border-radius: 15px;
    background-color: rgba(0,0,0,0.4);
  }
  #headSearch .el-form {
    position: absolute;
    width: 80%;
    left: 10%;
    top: 29%;
    height: 100%;
  }
  #headSearch .el-form .el-input {
    position: absolute;
    width: 60%;
    left: 10%;
  }
  #headSearch .el-form .el-button {
    position: absolute;
    left: 75%;
  }
  #content {
    position: absolute;
    top: 109%;
    width: 100%;
    height: 390%;
    background-color: white;
  }
  #contentTitle {
    position: absolute;
    top: 4%;
    left: 46%;
    width: 150px;
    height: 40px;
    font-size: 30px;
    border-bottom: 1px solid #409eff;
    font-weight: bold;
  }
  #contentTable {
    position: absolute;
    top: 8%;
    left: 21%;
    width: 70%;
    height: 90%;
    text-align: center;
  }
  #contract {
    position: absolute;
    width: 100%;
    height: 30%;
    top: 509%;
    background: url("../../assets/img/home/slider3.jpg");
  }
  #contractContent {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
  }
  #contractContent table {
    position: absolute;
    width: 80%;
    left: 10%;
    height: 80%;
    top: 10%;
    text-align: center;
  }
  #newsTabs {
    position: absolute;
    top: 0;
    left: 50%;
    padding-left: 3%;
    padding-right: 3%;
    width: 45%;
    height: 16.5%;
  }
  #newsImg {
    position: absolute;
    width: 45%;
    top: 0.5%;
    left: 2.5%;
    height: 12%;
    box-shadow: -8px 8px 8px rgba(0, 0, 0, 0.2);
  }
  #newsMapImg {
    position: absolute;
    width: 45%;
    top: 0;
    height: 12%;
    left: 0;
  }
  #productContent .el-image{
    border: 1px dashed;
    border-radius: 25px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  }
  #policyImg {
    position: absolute;
    width: 45%;
    top: 17%;
    left: 52.5%;
    height: 12%;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
  }
  #guideContent .el-image {
    border: 1px solid #999999;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  }
  #forumImg {
    position: absolute;
    width: 45%;
    top: 67%;
    left: 2.5%;
    height: 12%;
    box-shadow: -8px 8px 8px rgba(0, 0, 0, 0.2);
  }
  #mallContent .el-image {
    position: absolute;
    width: 50%;
    height: 15%;
    left: 2.5%;
  }
</style>