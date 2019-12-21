<template>
  <div id="moujiaGuide">
    <guide-bar>
      <img name="titleBac" slot="titleBac" src="../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/title.png"/>
      <img name="titleName" slot="titleName" src="../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/moujiaVillage.png" alt="">
      <img name="cateringImg1" slot="cateringImg1" src="../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/catering1.jpg"/>
      <p slot="cateringName1">美食1</p>
      <img name="cateringImg2" slot="cateringImg2" src="../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/catering2.jpg"/>
      <p slot="cateringName2">美食2</p>
      <img name="cateringImg3" slot="cateringImg3" src="../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/catering3.jpg"/>
      <p slot="cateringName3">美食3</p>
      <img name="cateringImg4" slot="cateringImg4" src="../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/catering4.jpg"/>
      <p slot="cateringName4">美食4</p>
      <el-carousel :interval="4000" type="card" slot="travelImg">
        <el-carousel-item v-for="item in travelImg" :key="item">
          <el-image :src="item.img"></el-image>
        </el-carousel-item>
      </el-carousel>
      <el-carousel :interval="4000" type="card" slot="trafficImg" height="350px">
        <el-carousel-item v-for="item in trafficImg" :key="item">
          <el-image :src="item.img"></el-image>
        </el-carousel-item>
      </el-carousel>
      <p slot="tIntroContent">牟家村——国家级农村现代化示范区、江苏省最美乡村、全国文明村、中国美丽休闲乡村。
        这里，烟柳画桥，风帘翠幕，天人合一，相映成趣，是社会主义新农村建设的典范。
        牟家村，位于常州市天宁区郑陆镇，全村总面积2.1平方公里，下设6个村民小组，615户，户籍人口2186人,常住人口5000余人，
        全村净资产1.36亿元，村级年收入1000余万元，2017年农民人均纯收入达3.2万元。
        改革开放30多年来，牟家人敢于探索、勇于实践，从一穷二白的小村庄发展为远近闻名的综合实力强村，
        从杂乱无章的原始村落发展为赏心悦目的新型田园都市，
        从平淡无趣的农村生活发展为丰富多彩的现代文化……
        牟家的巨变无不体现了牟家人“创先进、共奋斗”的牟家精神。</p>
      <img slot="hotelImg1" src="../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/hotel/hotelImg1.png" alt="">
      <p slot="hotelIntro1">最接近大自然民宿</p>
      <p slot="hotelLocal1">新疆</p>
      <p slot="hotelPrice1">￥250/晚</p>
      <img slot="hotelImg2" src="../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/hotel/hotelImg1.png" alt="">
      <p slot="hotelIntro2">最接近大自然民宿</p>
      <p slot="hotelLocal2">新疆</p>
      <p slot="hotelPrice2">￥250/晚</p>
      <img slot="hotelImg3" src="../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/hotel/hotelImg1.png" alt="">
      <p slot="hotelIntro3">最接近大自然民宿</p>
      <p slot="hotelLocal3">新疆</p>
      <p slot="hotelPrice3">￥250/晚</p>
    </guide-bar>
  </div>
</template>

<script>
  import GuideBar from "../../../../../components/content/guide/GuideBar";
  import bg1 from "../../../../../assets/img/home/slider1.jpg"
  import bg2 from "../../../../../assets/img/home/slider2.jpg"
  import bg3 from "../../../../../assets/img/home/slider3.jpg"
  import catering1 from "../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/catering1.jpg"
  import catering2 from "../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/catering2.jpg"
  import catering3 from "../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/catering3.jpg"
  import catering4 from "../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/catering4.jpg"
  import plane from "../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/traffic/plane.png"
  import bus from "../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/traffic/bus.png"
  import train from "../../../../../assets/img/guide/jiangsu/changzhou/moujiaVallage/traffic/train.png"
  export default {
    name: "MoujiaGuide",
    components: {GuideBar},
    data() {
      return {
        travelImg: [
          {img: bg1},
          {img: bg2},
          {img: bg3}
        ],
        cateringImg: [
          {img: catering1},
          {img: catering2},
          {img: catering3},
          {img: catering4},
        ],
        trafficImg: [
          {img: bus},
          {img: train},
          {img: plane},
        ]
      }
    }
  }
</script>

<style scoped>
  #moujiaGuide {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>