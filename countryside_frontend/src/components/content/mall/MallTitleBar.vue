<template>
  <div id="mallTitleBar">
    <table cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td width="20%">
          <img id="logo2Img" src="../../../assets/img/mall/logo2.png" alt="">
          <img id="malltitleImg" src="../../../assets/img/mall/malltitle.png" alt="">
        </td>
        <td width="65%">
          <navigation-bar id="bar"></navigation-bar>
        </td>
        <td></td>
        <td width="8%">
          <i class="el-icon-shopping-cart-1"><span>购物车</span></i>
        </td>
        <td width="5%"></td>
      </tr>
    </table>
  </div>
</template>

<script>
  import NavigationBar from "../dictionary/navigation/NavigationBar";
  export default {
    name: "MallTitleBar",
    components: {NavigationBar}
  }
</script>

<style scoped>
  #mallTitleBar {
    position: absolute;
    top: 0;
    width: 100%;
    height: 15%;
    background-color: white;
  }
  table {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
  table td #logo2Img {
    position: absolute;
    height: 80%;
    top: 10%;
    left: 2%;
  }
  table td #malltitleImg {
    position: absolute;
    height: 60%;
    top: 20%;
    left: 5%;
  }
  table td #bar {
    position: absolute;
    width: 60%;
    left: 20%;
    /*border: 1px solid black;*/
  }
  table td i {
    font-size: 25px;
    /*border: 1px solid black;*/
  }
  table td i span {
    position: absolute;
    height: 20%;
    top: 40%;
    font-size: 16px;
    margin-left: 8px;
    /*border: 1px solid black;*/
  }
</style>