<template>
  <div id="home">
    <home-title-bar></home-title-bar>
    <div id="headImg">
      <home-bar></home-bar>
      <div id="headContent">
        <div id="p1"><img src="../../assets/img/home/logo.png" alt=""></div>
        <div id="p2"><img src="../../assets/img/home/title.png" alt=""></div>
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
                  <td width="50%">
                    <div id="productImg">
                      <el-image id="book" v-show="bookActive" :src="require('../../assets/img/home/product/01.png')" :preview-src-list="[require('../../assets/img/home/product/product1.png'),require('../../assets/img/home/product/product2.png'),require('../../assets/img/home/product/product3.png'),require('../../assets/img/home/product/product4.png')]" fit="fill"></el-image>
                      <el-image id="other" v-show="otherActive" :src="require('../../assets/img/home/product/02.png')" :preview-src-list="[require('../../assets/img/home/product/picture/p1.png'),require('../../assets/img/home/product//picture/p2.png'),require('../../assets/img/home/product/picture/p3.png'),require('../../assets/img/home/product/picture/p4.png')]" fit="fill"></el-image>
                      <el-image id="game" v-show="gameActive" :src="require('../../assets/img/home/product/03.png')" :preview-src-list="[require('../../assets/img/home/product/mall1.jpg'),require('../../assets/img/home/product/mall2.jpg')]" fit="fill"></el-image>
                    </div>
                  </td>
                  <td width="50%">
                    <el-tabs id="productTabs" v-model="activeName4" @tab-click="productTabsClick">
                      <el-tab-pane label="“村村游”大富翁" @click="gameIsActive" name="first" style="text-align: left">
                        <p style="font-size: 14px;margin-bottom: 10px">不同于单 一的文字介绍，将乡村的特色、重点放在游戏当中。</p>
                          <p style="font-size: 14px;margin-bottom: 10px">通过游戏的方式 让玩家们感受到乡村的独特魅力。</p>
                          <p style="font-size: 14px;margin-bottom: 10px">其次，本团队将大富翁以及飞行棋 的游玩模式，做了结合和改善，提高游戏的可玩性。</p>
                          <p style="font-size: 14px;margin-bottom: 10px">“村村游”大富翁是 由本团队的成员全程策划、设计、制作的，同时，团队还进行了反复 的试玩，</p>
                          <p style="font-size: 14px;margin-bottom: 10px">测试游戏的不足点，进行进一步的改善等。</p>
                      </el-tab-pane>
                      <el-tab-pane label="明信片和书签" @click="bookIsActive" name="second" style="text-align: left">
                        <p style="font-size: 14px;margin-bottom: 8px">出于丰富文创产品的目的，想以一种礼物的形式赠送给对接合作的村的村委会</p>
                        <p style="font-size: 14px;margin-bottom: 8px">并且后期我们希望能通过该村的平台对我们制作的书签、明信片进行宣传,也可以挂在我们的网站上进行售卖，多种途径进行利用。</p>
                        <p style="font-size: 14px;margin-bottom: 8px">其次，考虑到大富翁、宣传画册制作的成本太高，后期不可能将所有的乡村都囊括</p>
                        <p style="font-size: 14px;margin-bottom: 8px">所以书签明信片就显得简单而又明了，是一个很好的选择。明信片也是由美术专业的同学负责</p>
                        <p style="font-size: 14px;margin-bottom: 8px">都是纯手绘的乡村的风景等;书签是有会ps技术的同学负责，在电脑上进行制作， 并印刷下来的。</p>
                      </el-tab-pane>
                      <el-tab-pane label="帆布袋" name="third" style="text-align: left">
                        <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅印发《关于完善仲裁制度2》</p>
                        <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                        <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                        <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                        <p style="font-size: 14px;margin-bottom: 15px">关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                      </el-tab-pane>
                      <el-tab-pane label="其他" @click="otherIsActive" name="forth" style="text-align: left">
                        <p style="font-size: 14px;margin-bottom: 10px">宣传画册为了改变一成不变的文字介绍方式，更加直观、更加吸人眼球，</p>
                        <p style="font-size: 14px;margin-bottom: 10px">于是我们创作了宣传画册</p>
                        <p style="font-size: 14px;margin-bottom: 10px">宣传画册方面我们有专业的美院同学负责，进行设计、绘画等</p>
                        <p style="font-size: 14px;margin-bottom: 10px">其次， 在宣传画册中我们也融入了小红军的形象，</p>
                        <p style="font-size: 14px;margin-bottom: 10px">将小红军作为宣传画册的引导， 带领大家进行更有序得浏览。</p>
                      </el-tab-pane>
                    </el-tabs>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div id="guideContent" style="width: 100%; height: 100%;">
              <table cellpadding="0" cellspacing="0" border="0" style="position: absolute;width: 100%; height: 12%;">
                <tr>
                  <td width="50%">
                    <el-tabs id="guideTabs" v-model="activeName5">
                      <el-tab-pane label="住宿" name="first" style="text-align: left">
                        <p style="font-size: 14px;margin-bottom: 10px">不同于单 一的文字介绍，将乡村的特色、重点放在游戏当中。</p>
                        <p style="font-size: 14px;margin-bottom: 10px">通过游戏的方式 让玩家们感受到乡村的独特魅力。</p>
                        <p style="font-size: 14px;margin-bottom: 10px">其次，本团队将大富翁以及飞行棋 的游玩模式，做了结合和改善，提高游戏的可玩性。</p>
                        <p style="font-size: 14px;margin-bottom: 10px">“村村游”大富翁是 由本团队的成员全程策划、设计、制作的，同时，团队还进行了反复 的试玩，</p>
                        <p style="font-size: 14px;margin-bottom: 10px">测试游戏的不足点，进行进一步的改善等。</p>
                      </el-tab-pane>
                      <el-tab-pane label="交通" name="second" style="text-align: left">
                        <p style="font-size: 14px;margin-bottom: 8px">出于丰富文创产品的目的，想以一种礼物的形式赠送给对接合作的村的村委会</p>
                        <p style="font-size: 14px;margin-bottom: 8px">并且后期我们希望能通过该村的平台对我们制作的书签、明信片进行宣传,也可以挂在我们的网站上进行售卖，多种途径进行利用。</p>
                        <p style="font-size: 14px;margin-bottom: 8px">其次，考虑到大富翁、宣传画册制作的成本太高，后期不可能将所有的乡村都囊括</p>
                        <p style="font-size: 14px;margin-bottom: 8px">所以书签明信片就显得简单而又明了，是一个很好的选择。明信片也是由美术专业的同学负责</p>
                        <p style="font-size: 14px;margin-bottom: 8px">都是纯手绘的乡村的风景等;书签是有会ps技术的同学负责，在电脑上进行制作， 并印刷下来的。</p>
                      </el-tab-pane>
                      <el-tab-pane label="美食" name="third" style="text-align: left">
                        <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅印发《关于完善仲裁制度2》</p>
                        <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                        <p style="font-size: 14px;margin-bottom: 15px">《关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                        <p style="font-size: 14px;margin-bottom: 15px">国务院办公厅关于推进养老服务发展的意见</p>
                        <p style="font-size: 14px;margin-bottom: 15px">关于完善仲裁制度提高仲裁公信力的若干意见》</p>
                      </el-tab-pane>
                    </el-tabs>
                  </td>
                  <td width="50%">
                    <div id="guideImg">
                      <el-image :src="require('../../assets/img/home/guide/guide3.jpg')" :preview-src-list="[require('../../assets/img/home/guide/guide1.jpg'),require('../../assets/img/home/guide/guide2.jpg'),require('../../assets/img/home/guide/guide3.jpg')]" fit="fill"></el-image>
                    </div>
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
        activeName3: 'first',
        activeName4: 'second',
        activeName5: 'first',
        gameActive: false,
        bookActive: true,
        otherActive: false,
      }
    },
    methods: {
      JumpToContent() {
        document.getElementById("content").scrollIntoView({
          behavior: "smooth"
        });
      },
      bookIsActive() {
        this.otherActive = false;
        this.gameActive = false;
        this.bookActive = true;
      },
      otherIsActive() {
        this.gameActive = false;
        this.bookActive = false;
        this.otherActive = true;
      },
      gameIsActive() {
        this.otherActive = false;
        this.bookActive = false;
        this.gameActive = true;
      },
      productTabsClick(tab, event) {
        console.log(tab, event);
        if(tab.name === 'first'){
          this.gameIsActive();
        }else if(tab.name === 'second'){
          this.bookIsActive();
        }else if(tab.name === 'forth') {
          this.otherIsActive()
        }
      },
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
    height: 95%;
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
    top: 15%;
    width: 60%;
    left: 20%;
    height: 55%;
    text-align: center;
  }
  #headContent #p1 {
    position: absolute;
    top: 25%;
    width: 30%;
    left: 5%;
    height: 60%;
    font-size: 44px;
    color: white;
    font-family: Arial;
  }
  #p1 img {
    position: absolute;
    height: 100%;
  }
  #headContent #p2 {
    position: absolute;
    top: 30%;
    width: 70%;
    left: 30%;
    height: 40%;
    text-align: center;
    color: white;
    font-family: Arial;
  }
  #p2 img {
    position: absolute;
    height: 90%;
    top: 10%;
    width: 53%;
    text-align: center;
    left: 10%;
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
  #policyImg {
    position: absolute;
    width: 45%;
    top: 17%;
    left: 52.5%;
    height: 12%;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
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
  #productTabs {
    position: absolute;
    top: 0;
    margin-left: 2.5%;
  }
  #productImg {
    position: absolute;
    top: 0;
    width: 45%;
    left: 2.5%;
    height: 100%;
    background-color: #e6e6e6;
    box-shadow: -8px 8px 8px rgba(0, 0, 0, 0.2);
  }
  #productImg .el-image {
    position: absolute;
    height: 100%;
    left: 0;
  }
  #guideTabs {
    position: absolute;
    top: 0;
    width: 45%;
    margin-left: 2.5%;
  }
  #guideImg {
    position: absolute;
    width: 45%;
    left: 52.5%;
    top: 0;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
  }
</style>