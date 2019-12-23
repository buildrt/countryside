<template>
  <div id="homeTitleBar">
    <table id="headTable" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td width="25%">
          <span style="padding-left: 10%">
            <iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tx&skin=pitaya&fontsize=15&color=d0cccc" frameborder="0" width="100%" height="20" allowtransparency="true"></iframe>
          </span>
        </td>
        <td></td>
        <td width="5%">
          <el-button id="loginBtn" @click="ToLogin" v-if="this.$store.getters.isLogin === false">登录</el-button>
          <el-button v-else>{{this.$store.getters.getUserName}}</el-button>
        </td>
        <td width="5%">
          <el-button id="registerBtn" @click="ToRegister" v-if="this.$store.getters.isLogin === false">注册</el-button>
          <el-button @click="logOut" v-else>退出系统</el-button>
        </td>
        <td width="5%"></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "HomeTitleBar",
    methods: {
      ToLogin() {
        this.$router.replace('/login');
      },
      ToRegister() {
        this.$router.replace('/register');
      },
      logOut() {
        this.$store.commit('setIsLogin', false);
        window.localStorage.setItem('loginJudge', 'false');
        this.$router.replace('/home');
      },
    }
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
  #headTable .el-button {
    color: #d0cccc;
    font-size: 15px;
    background-color: rgba(0,0,0,0);
    border: 0;
  }
  #headTable span iframe {
    font-size: 15px;
  }
  #titleImg {
    position: absolute;
    width: 10%;
    height: 100%;
    top: 0;
    left: 10%;
    text-align: center;
  }
  #titleImg .el-image {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
  }
  #logoImg {
    position: absolute;
    width: 10%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
  }
  #logoImg .el-image {
    position: absolute;
    height: 100%;
    width: 25%;
    left: 50%;
  }
</style>