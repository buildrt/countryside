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
          <el-image :src="item.img" style="background-color: rgba(0,0,0,0.1);width: 100%;"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="content">
      <div id="contentTitle">内&nbsp;容&nbsp;简&nbsp;介</div>
      <home-side-bar></home-side-bar>
      <table id="contentTable" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td width="50%">
            <img id="newsImg" src="../../assets/img/home/yaowen.jpg" alt="">
          </td>
          <td>
            <el-tabs id="newsTabs" v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="地图" name="first">
                <el-image id="newsMapImg" style="width: 85%;" :src="require('../../assets/img/home/news/map/homeMap1.png')" :preview-src-list="[require('../../assets/img/home/news/map/homeMap.jpg')]" fit="fill"></el-image>
              </el-tab-pane>
              <el-tab-pane label="历史背景" name="second" style="text-align: left">
                <p style="font-size: 14px;margin-bottom: 15px">了解乡村文化，就要从乡村的历史说起。</p>
                <p style="font-size: 14px;margin-bottom: 15px">中国作为传承五千年的文化大国，乡村存在的历史极为悠久。</p>
                <p style="font-size: 14px;margin-bottom: 15px">在这深厚的历史积淀下，乡村文化逐渐形成和发展起来，</p>
                <p style="font-size: 14px;margin-bottom: 15px">中华民族传统文化也与此同时慢慢形成和发展。</p>
              </el-tab-pane>
              <el-tab-pane label="美食" name="third" style="text-align: left">
                <p style="font-size: 14px;margin-bottom: 15px">在丰富的乡村文化中，美食文化现今也成为吸引游客前往乡村旅游的“原动力”之一。</p>
                <p style="font-size: 14px;margin-bottom: 15px">生态自然的食材，简单朴实的制作方法，</p>
                <p style="font-size: 14px;margin-bottom: 15px">乡村美食将在你的味蕾上打开新的世界。</p>
                <p style="font-size: 14px;margin-bottom: 15px">如今，乡村主题餐厅已然成为乡村旅游的热点，</p>
                <p style="font-size: 14px;margin-bottom: 15px">独具乡村风味的装修风格，给您耳目一新的体验。</p>
              </el-tab-pane>
              <el-tab-pane label="故事" name="fourth" style="text-align: left">
                <p style="font-size: 14px;margin-bottom: 15px">乡村的小故事，时代的大变迁。</p>
                <p style="font-size: 14px;margin-bottom: 15px">小小的乡村孕育着无数历史风流人文，留下了诸多令人惊叹的故事和传说；</p>
                <p style="font-size: 14px;margin-bottom: 15px">这里培育出一辈辈的基层干部，他们公而忘私为民请命。</p>
                <p style="font-size: 14px;margin-bottom: 15px">无论是默默无闻的基层干部，还是深藏民间的传说故事，都亟待我们去发现和挖掘。</p>
              </el-tab-pane>
            </el-tabs>
          </td>
        </tr>
        <tr>
          <td width="50%" style="text-align: left">
            <el-tabs v-model="activeName2" style="position: absolute; top: 16%; padding-left: 5%">
              <el-tab-pane label="政策早知道" name="first">
                <p style="font-size: 14px;margin-bottom: 15px">社会的发展和农村的进步也是分不开的。</p>
                <p style="font-size: 14px;margin-bottom: 15px">伴随着国家对乡村振兴战略进行全面部署，计划到2020年，</p>
                <p style="font-size: 14px;margin-bottom: 15px">实现农民增收渠道进一步拓宽、城乡居民生活水平差距持续缩小、</p>
                <p style="font-size: 14px;margin-bottom: 15px">现行标准下农村贫困人口实现脱贫、农村基础设施建设深入推进等内容。</p>
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
            <img id="policyImg" src="../../assets/img/home/policy.png" alt="">
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
                      <el-image id="bag" v-show="bagActive" :src="require('../../assets/img/home/product/bag.png')" :preview-src-list="[require('../../assets/img/home/product/bag.png')]" fit="fill"></el-image>
                    </div>
                  </td>
                  <td width="50%">
                    <el-tabs id="productTabs" v-model="activeName4" @tab-click="productTabsClick">
                      <el-tab-pane label="“村村游”大富翁" name="first" style="text-align: left">
                        <p style="font-size: 14px;margin-bottom: 10px">“村村游”大富翁以大富翁的游戏模式为参考，创新的融入各个乡村特有的景点，</p>
                        <p style="font-size: 14px;margin-bottom: 10px">让玩家能在娱乐的同时了解不同乡村的特色，提前熟悉乡村的特色景点和旅游路线，从而更好地激发玩家走进乡村的兴趣。</p>
                      </el-tab-pane>
                      <el-tab-pane label="明信片和书签" name="second" style="text-align: left">
                        <p style="font-size: 14px;margin-bottom: 8px">本项目为帮助乡村更好地进行宣传，以乡村特色景点为主线制作了乡村的周边产品：明信片和书签。</p>
                        <p style="font-size: 14px;margin-bottom: 8px">同时，两种产品都小巧精致，方便分发，从而更好地宣传乡村</p>
                      </el-tab-pane>
                      <el-tab-pane label="帆布袋" name="third" style="text-align: left">
                        <p style="font-size: 14px;margin-bottom: 15px">在明信片和书签的基础上，本项目又推出印有手绘乡村美景的帆布袋，既美观实用，又可以对乡村进行宣传。</p>
                        <p style="font-size: 14px;margin-bottom: 15px">在项目网站的商城进行购买或者通过转发相关宣传文章进行集赞抽奖，两大途径皆可获得哦！</p>
                      </el-tab-pane>
                      <el-tab-pane label="其他" name="forth" style="text-align: left">
                        <p style="font-size: 14px;margin-bottom: 10px">随着协会不断深入乡村开展调研，项目团队也将继续设计与推广多样化的文创产品，敬请期待！</p>
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
                      <el-tab-pane label="“旅学”云地图" name="first" style="text-align: left">
                        <p style="font-size: 14px;margin-bottom: 10px">本团队在深入乡村开展调研的基础上，为每一个乡村都设计了画风精美的“旅学”云地图。</p>
                        <p style="font-size: 14px;margin-bottom: 10px">同学们只需要动一动鼠标，就可以将乡村美景尽收眼底啦！</p>
                      </el-tab-pane>
                      <el-tab-pane label="“智慧”行程安排" name="second" style="text-align: left">
                        <p style="font-size: 14px;margin-bottom: 8px">本团队依据用户的需求为大学生个性化定制集乡村研学教育活动、餐饮、住宿及交通为一体的最优的“智慧”旅学方案，提供一体化的行程安排服务。</p>
                      </el-tab-pane>
                      <el-tab-pane label="旅学活动" name="third" style="text-align: left">
                        <p style="font-size: 14px;margin-bottom: 15px">本团队通过设计大学生深入乡村开展以思政课程实践、社会实践为载体的行万里路的研学教育活动，</p>
                        <p style="font-size: 14px;margin-bottom: 15px">培养大学生积极投身于乡村建设的贡献意识，传播乡村文化，</p>
                        <p style="font-size: 14px;margin-bottom: 15px">吸引更多的大学生立志扎根乡村、服务乡村，</p>
                        <p style="font-size: 14px;margin-bottom: 15px">为培养懂农业、爱农村、爱农民的“一懂两爱”新型农业人才作出贡献，进一步助推乡村振兴。</p>
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
            <img id="forumImg" src="../../assets/img/home/luntan.png" alt="">
          </td>
          <td>
            <el-tabs v-model="activeName3" style="position: absolute; top: 67%; padding-left: 5%">
              <el-tab-pane label="推荐" name="first" style="text-align: left">
                <p style="font-size: 14px;margin-bottom: 15px">扬州大学“乡村宝藏”调研团来到无锡白塔村，就当地乡村生态旅游业发展情况开展深入调研</p>
                <p style="font-size: 14px;margin-bottom: 15px">山东大学“渝我同行”宣讲团赴南开中学举行“相约山大·励志起航”宣讲活动</p>
                <p style="font-size: 14px;margin-bottom: 15px">扬州大学 “峥嵘七十载 勇追中国梦”庆祝新中国成立70周年宣讲团来到扬州市双桥社区举行系列宣讲活动</p>
                <p style="font-size: 14px;margin-bottom: 15px">安徽大学生志愿者探访中国好人李坤池：年迈未敢忘忧国</p>
              </el-tab-pane>
              <el-tab-pane label="最新" name="second" style="text-align: left">
                <p style="font-size: 14px;margin-bottom: 15px">山东大学药学院“解忧药疫”社会实践队组织线上心理辅导视频观看</p>
                <p style="font-size: 14px;margin-bottom: 15px">扬州大学隆重举办“乡村振兴 青年先行”实践成果分享会</p>
                <p style="font-size: 14px;margin-bottom: 15px">青春战“疫”，学子力行——记徐州工程学院学子疫情防控实践路</p>
                <p style="font-size: 14px;margin-bottom: 15px">扬州大学反哺实践团队前往清水小学开展相关支教活动</p>
                <p style="font-size: 14px;margin-bottom: 15px">山东大学万众疫心实践团队举办“停课不停学”主题宣讲会</p>
              </el-tab-pane>
              <el-tab-pane label="精选" name="third" style="text-align: left">
                <p style="font-size: 14px;margin-bottom: 15px">扬州大学“广陵区老街巷改造过程中居民观念变迁”考察团队在埂子街、堂子巷、礼拜巷等地展开实践调研</p>
                <p style="font-size: 14px;margin-bottom: 15px">中大新华记者站携手龙坡学子开启文化寻根之旅</p>
                <p style="font-size: 14px;margin-bottom: 15px">扬州大学“携爱‘黔’行，用心守‘护’公益实践团”，让爱散播健康，用爱传递希望</p>
                <p style="font-size: 14px;margin-bottom: 15px">临沂大学信息科学与工程学院赴革命圣地延安社会实践</p>
                <p style="font-size: 14px;margin-bottom: 15px">烟台大学法学院锲行实践团：中国共享单车走进伦敦</p>
              </el-tab-pane>
              <el-tab-pane label="全部" name="forth" style="text-align: left">
                <p style="font-size: 14px;margin-bottom: 15px">扬州大学“乡约”公益服务实践团基于调研与支教，先后在江苏扬州、贵州安顺开展实践活动</p>
                <p style="font-size: 14px;margin-bottom: 15px">重庆大学学子开展“不忘初心走基层 实践磨砺勇担当”基层挂职实</p>
                <p style="font-size: 14px;margin-bottom: 15px">清华学子赴普洱市茶叶和咖啡产业发展中心开展“茶产业扶贫”调研</p>
                <p style="font-size: 14px;margin-bottom: 15px">聊城大学教科院举办“女子防身，安全自护”社会实践活动</p>
                <p style="font-size: 14px;margin-bottom: 15px">湖南文理学院师生赴谢家垭乡中心完小开展“精准脱贫”教育帮扶活动</p>
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
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        activeName: 'second',
        activeName2: 'first',
        activeName3: 'first',
        activeName4: 'second',
        activeName5: 'third',
        gameActive: false,
        bookActive: true,
        otherActive: false,
        bagActive: false,
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
        this.bagActive = false;
        this.bookActive = true;
      },
      otherIsActive() {
        this.gameActive = false;
        this.bookActive = false;
        this.bagActive = false;
        this.otherActive = true;
      },
      gameIsActive() {
        this.otherActive = false;
        this.bookActive = false;
        this.bagActive = false;
        this.gameActive = true;
      },
      bagIsActive() {
        this.otherActive = false;
        this.bookActive = false;
        this.gameActive = false;
        this.bagActive = true;
      },
      productTabsClick(tab, event) {
        console.log(tab, event);
        if(tab.name === 'first'){
          this.gameIsActive();
        }else if(tab.name === 'second'){
          this.bookIsActive();
        }else if(tab.name === 'forth') {
          this.otherIsActive()
        }else if(tab.name === 'third') {
          this.bagIsActive();
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
    background-color: rgba(0,0,0,0.2);
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
    width: 75%;
    left: 30%;
    height: 45%;
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