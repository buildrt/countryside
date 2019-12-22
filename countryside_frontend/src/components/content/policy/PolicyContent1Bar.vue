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
          <td style="width: 100%;border-bottom: 1px dashed rgb(190,190,190)"></td>
        </tr>
        <tr style="height: 33.3%;">
          <td style="width: 100%;border-bottom: 1px dashed rgb(190,190,190)"></td>
        </tr>
        <tr style="height: 33.3%">
          <td style="width: 100%;"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import news1 from "../../../assets/img/policy/policyContent1Bar/new1.jpg"
  import news2 from "../../../assets/img/policy/policyContent1Bar/new.jpg"

  export default {
    name: "PolicyContent1Bar",
    data() {
      return {
        newsImg: [
          {img: news1},
          {img: news2}
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

</style>