<template>
  <div id="yanhuGuide">
    <guide-bar>
      <img name="titleBac" slot="titleBac" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/title.png"/>
      <img name="titleName" slot="titleName" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/yanhuVillage.png" alt="">
      <img name="cateringImg1" slot="cateringImg1" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/catering1.jpg"/>
      <p slot="cateringName1">常来渔家</p>
      <img name="cateringImg2" slot="cateringImg2" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/catering2.jpg"/>
      <p slot="cateringName2">河畔杨家</p>
      <img name="cateringImg3" slot="cateringImg3" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/catering3.jpg"/>
      <p slot="cateringName3">小马哥渔家乐</p>
      <img name="cateringImg4" slot="cateringImg4" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/catering4.jpg"/>
      <p slot="cateringName4">知棠园</p>
      <!--<el-carousel :interval="4000" type="card" slot="travelImg">-->
        <!--<el-carousel-item v-for="item in travelImg" :key="item">-->
          <!--<el-image :src="item.img"></el-image>-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
      <el-carousel :interval="4000" type="card" slot="trafficImg" height="350px">
        <el-carousel-item v-for="item in trafficImg" :key="item">
          <el-image :src="item.img"></el-image>
        </el-carousel-item>
      </el-carousel>
      <p slot="tIntroContentTitle">渔家书房</p>
      <p slot="tIntroContent">“渔家书房”，除了提供阅读场地外还集美食、渔技等特色渔家文化于一体。不仅可看书，还能学做渔家饭。乡村书房布点选址充分考虑渔家文化传承、交通便利性、服务半径、阅读需求等因素，第一阶段重点选址布局在乡村文明示范线和田园文明示范线，方便群众就近阅读。
        为给渔民提供精神食粮，给游客提供休憩场所，“网红渔村”沿湖村投资建设了“渔家书房”。面积约200平方米，藏书近5000册，主要包括水产养殖捕捞、美食烹饪、旅游休闲度假等内容。
        “我们在里面增加了渔家的内容。”沿湖村党总支书记刘德宝介绍说，“渔家书房”在装饰上最大程度地保留了渔家特色，有渔船、渔网等展现渔家文化技艺的物件，还可提供渔家美食，供游客品尝。</p>
      <img slot="hotelImg1" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/hotel/hotelImg1.png" alt="">
      <p slot="hotelIntro1">船的家民宿</p>
      <p slot="hotelLocal1">沿湖村</p>
      <img slot="hotelImg2" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/hotel/hotelImg2.png" alt="">
      <p slot="hotelIntro2">桥口钱家</p>
      <p slot="hotelLocal2">沿湖村</p>
      <img slot="hotelImg3" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/hotel/hotelImg3.png" alt="">
      <p slot="hotelIntro3">湖光十色民宿</p>
      <p slot="hotelLocal3">沿湖村</p>
    </guide-bar>
  </div>
</template>

<script>
  import GuideBar from "../../../../../components/content/guide/GuideBar";
  import s1 from "../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/studies/s1.png"
  import s2 from "../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/studies/s2.png"
  import s3 from "../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/studies/s3.png"
  export default {
    name: "YanhuGuide",
    components: {GuideBar},
    data() {
      return {
        trafficImg: [
          {img: s1},
          {img: s2},
          {img: s3},
        ]
      }
    }
  }
</script>

<style scoped>
  #yanhuGuide {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>