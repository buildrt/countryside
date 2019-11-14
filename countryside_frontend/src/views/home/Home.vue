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

      </div>
      <el-carousel interval="5000" loop height="100%" >
        <el-carousel-item v-for="item in bcImg" :key="item">
          <el-image :src="item.img" style="background-color: rgba(0,0,0,0.2)"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="content">

    </div>
  </div>
</template>

<script>
  import HomeBar from "../../components/content/home/HomeBar";
  import bg1 from "../../assets/img/home/slider1.jpg"
  import bg2 from "../../assets/img/home/slider2.jpg"
  import bg3 from "../../assets/img/home/slider3.jpg"
  import HomeTitleBar from "../../components/content/home/HomeTitleBar";

  export default {
    name: "Home",
    components: {
      HomeTitleBar,
      HomeBar,
    },
    data() {
      return {
        bcImg: [
          {img: bg1},
          {img: bg2},
          {img: bg3}
        ]
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
  #content {
    position: absolute;
    top: 109%;
    width: 100%;
    height: 100%;
    background-color: white;
  }
</style>