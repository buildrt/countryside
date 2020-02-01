<template>
  <div id="policyContent1">
    <img id="title" src="../../../assets/img/policy/policyContent1Bar/xinwentupian.jpg" alt="">
    <p id="titleCharacter">新闻图片</p>
    <div id="newsImg1">
      <el-carousel :interval="4000" loop height="100%">
        <el-carousel-item v-for="item in newsImg" :key="item">
          <el-image :src="item.img"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="newsContent1">
      <table cellspacing="0" cellpadding="0" border="0">
        <tr style="height: 33.3%">
          <td style="width: 100%;border-bottom: 1px dashed rgb(190,190,190)">
            <p>在农业农村部召开纪念建党97周年大会上，部党组书记、部长韩长赋在会上作党课报告。韩长赋强调，今年是实施乡村振兴战略的开局之年，要有新气象新作为。农业农村系统广大党员干部要认真学习、深刻领会感悟习近平总书记“三农”情怀和“三农”思想，不断增强做好工作的使命感责任感和自觉性坚定性，坚决贯彻党和国家机构改革部署要求，准确把握农业农村部的使命任务，开拓创新，锐意进取，以改革创新精神和扎实作风，统筹推进乡村振兴实现良好开局。【中国农业新闻网-农民日报】</p>
          </td>
        </tr>
        <tr style="height: 33.3%;">
          <td style="width: 100%;border-bottom: 1px dashed rgb(190,190,190)">
            <p>国家发展改革委城市和小城镇改革发展中心主任徐林指出集聚提升类村庄是指现有规模较大的中心村和其他仍将存续的一般村庄，是乡村类型的大多数，是实现农业农村现代化的重点突破区。同时，徐林强调：“不同地区、不同发展阶段的村庄，实施乡村振兴战略要因地制宜、因时而异，不能盲目超前发展，不搞齐步走。”
              【《经济日报》2018-9-27】</p>
          </td>
        </tr>
        <tr style="height: 33.3%">
          <td style="width: 100%;">
            <p>实施乡村振兴战略是新时代做好“三农”工作的总抓手。为深入贯彻落实中央关于实施乡村振兴战略的工作部署，把握乡村振兴战略下水产技术推广体系的新使命新任务，强化工作部署，激发体系活力，充分发挥水产技术推广工作在推动渔业绿色转型发展、助力乡村振兴中的作用，提出许多指导意见。
              【中华人民共和国农业农村部?2019-02-15】</p>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import news1 from "../../../assets/img/policy/policyContent1Bar/news1.jpg"
  import news2 from "../../../assets/img/policy/policyContent1Bar/news2.jpg"
  import news3 from "../../../assets/img/policy/policyContent1Bar/news3.jpg"

  export default {
    name: "PolicyContent1Bar",
    data() {
      return {
        newsImg: [
          {img: news1},
          {img: news2},
          {img: news3},
        ]
      }
    }
  }
</script>

<style scoped>
  #policyContent1 {
    position: absolute;
    top: 40%;
    width: 90%;
    left: 5%;
    height: 75%;
    background-color: white;
    /*border: 1px solid black;*/
    box-shadow: -8px 8px 8px rgba(0, 0, 0, 0.2);
  }
  #title {
    position: absolute;
    top: 0;
    width: 61%;
    left: 0;
    height: 10%;
    /*border: 1px solid black;*/
  }
  #titleCharacter {
    position: absolute;
    top: 2%;
    width: 10%;
    font-size: 18px;
    color: white;
    left: 0;
    height: auto;
    text-align: center;
    /*border: 1px solid black;*/
  }
  #newsImg1 {
    position: absolute;
    top: 13%;
    width: 60%;
    left: 1%;
    height: 85%;
  }
  #newsImg1 .el-carousel {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .el-carousel .el-image {
    width: 100%;
    height: 100%;
  }
  #newsContent1 {
    position: absolute;
    width: 35%;
    right: 2%;
    top: 5%;
    height: 93%;
    border: 1px solid rgb(220,220,220);
  }
  #newsContent1 table{
    position: absolute;
    width: 95%;
    height: 90%;
    top: 5%;
    left: 2.5%;
  }
  #newsContent1 table td p {
    font-size: 14px;
    color: #424141;
    text-indent: 2em
  }
</style>