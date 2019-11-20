<template>
  <div id="homeTitleBar">
    <table id="headTable" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td width="10%">
          <span>Logo</span>
        </td>
        <td width="10%">
          <span>乡村宝藏</span>
        </td>
        <td></td>
        <td width="30%">
          <span>
            <iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tx&skin=pitaya&fontsize=15&color=d0cccc" frameborder="0" width="100%" height="20" allowtransparency="true"></iframe>
          </span>
        </td>
        <td width="5%">
          <span>登录</span>
        </td>
        <td width="5%">
          <span>注册</span>
        </td>
        <td width="5%"></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "HomeTitleBar"
  }
</script>

<style>

</style>

<style scoped>
  #homeTitleBar {
    position: fixed;
    width: 100%;
    height: 9%;
    background-color: rgba(0,0,0,0.9);
    z-index: 1010;
  }
  #headTable {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  #headTable span {
    color: #d0cccc;
    font-size: 15px;
  }
  #headTable span iframe {
    font-size: 15px;
  }
</style>