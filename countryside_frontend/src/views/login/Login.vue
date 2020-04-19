<template>
  <div id="login">
    <el-carousel :interval="30000" loop height="100%" >
      <el-carousel-item trigger="click" v-for="item in bcImg" :key="item">
        <el-image :src="item.img"></el-image>
      </el-carousel-item>
    </el-carousel>
    <transition name="el-zoom-in-bottom">
      <div class="info" v-show="formShow">
        <div id="title">
          <div id="loginP1"><img src="../../assets/img/home/logo.png" alt=""></div>
          <div id="loginP2"><img src="../../assets/img/home/title.png" alt=""></div>
        </div>
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
          <el-form-item id="nameItem"  prop="username">
            <el-input class="loginInput" prefix-icon="el-icon-user" id="uname" size="large" v-model.trim="loginForm.username" autocomplete="off" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item id="pwdItem"  prop="password">
            <el-input class="loginInput" prefix-icon="el-icon-lock" id="pwd" type="password" size="large" v-model.trim="loginForm.password" show-password autocomplete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item id="subItem">
            <el-button type="primary" round @click="Login('loginForm')">登录</el-button>
            <el-button type="primary" round @click="ToRegister">注册</el-button>
          </el-form-item>
        </el-form>
        <div id="foot">
          <p>欢迎登录乡村宝藏</p>
        </div>
      </div>
    </transition>
    <transition name="slide-fade">
      <div id="confirm" v-show="confirmShow">
        <img id="rolling" src="../../assets/img/login/Rolling.gif" alt="">
        <p>正在认证中...</p>
      </div>
    </transition>
    <transition name="el-zoom-in-bottom">
      <div id="result" v-show="resultShow">
        <p>登录成功</p>
        <p>欢迎你</p>
      </div>
    </transition>
  </div>
</template>

<script>
  import bg1 from "../../assets/img/login/loginBac1.png"
  import bg2 from "../../assets/img/login/loginBac2.png"
  import bg3 from "../../assets/img/login/loginBac3.png"
  import {login} from "../../network/login/login";

  export default {
    name: "Login",
    data() {
      return {
        bcImg: [
          {img: bg1},
          {img: bg2},
          {img: bg3}
        ],
        formShow: true,
        resultShow: false,
        confirmShow: false,
        loginForm: {
          username: '',
          password: '',
        },
        loginRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
      }
    },
    methods: {
      Login(forName) {
        this.$refs[forName].validate(valid => {
          console.log(valid);
          if (valid) {
            let username = document.getElementById('uname').value;
            let password = document.getElementById('pwd').value;
            console.log(username,password);
            this.formShow = false;
            this.confirmShow = true;
            setTimeout(() => {
              this.confirmShow = false;
              // if (1 === 1) {
              //   setTimeout(() => {
              //     this.resultShow = true;
              //     setTimeout(() => {
              //       this.$store.commit('setIsLogin', true);
              //       this.$store.commit('setUserName', username);
              //       this.$store.commit('setPassWord', password);
              //       window.localStorage.setItem('loginJudge', 'true');
              //       window.localStorage.setItem('userName', username);
              //       window.localStorage.setItem('passWord', password);
              //       this.$router.replace('/home');
              //     },1000);
              //   },300)
              // } else {
              //   setTimeout(() => {
              //     this.formShow = true;
              //     this.$alert('用户名密码错误', {
              //       confirmButtonText: '确定',
              //     });
              //   },300)
              // }
              login(this.username, this.password).then(res => {
                console.log(res);
                if (res === 1) {
                  setTimeout(() => {
                    this.resultShow = true;
                    setTimeout(() => {
                      this.$store.commit('setIsLogin', true);
                      this.$store.commit('setUserName', username);
                      this.$store.commit('setPassWord', password);
                      window.localStorage.setItem('loginJudge', 'true');
                      window.localStorage.setItem('userName', username);
                      window.localStorage.setItem('passWord', password);
                      this.$router.replace('/home');
                    },1000);
                  },300)
                }else {
                  setTimeout(() => {
                    this.formShow = true;
                    this.$alert('用户名密码错误', {
                      confirmButtonText: '确定',
                    });
                  },300)
                }
              }).catch(err => {
                alert("登录失败");
                console.log(err);
              })
            },1000);
          }
        })
      },
      ToRegister() {
        this.$router.push('/register');
      },
    },
  }
</script>

<style>
  .loginInput .el-input__inner {
    background-color: rgba(0,0,0,0);
    border: none;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    margin-left: 12px;
  }
</style>

<style scoped>
  #login {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .el-carousel {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .el-carousel .el-image {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .info{
    position: absolute;
    top: 8%;
    left: 36%;
    width: 28%;
    height: 85%;
    border-radius: 5px;
    /*padding-left: 4%;*/
    background: linear-gradient(230deg, rgba(53, 57, 74, 0.6) 0%, rgb(0, 0, 0) 90%);
    box-shadow: -10px 10px 10px rgba(6, 17, 47, 0.7);
  }
  #foot {
    position: absolute;
    bottom: 6%;
    left: 15%;
    color: #d3d7f7;
    font-size: 14px;
  }
  .el-form {
    position: relative;
    top: 20%;
    width: 100%;
    height: 70%;
  }
  .el-input {
    font-size: 15px;
    background-color: rgba(0,0,0,0);
  }
  #nameItem {
    position: relative;
    top: 30%;
    width: 62%;
    height: 60px;
    left: 15%;
    text-align: center;
  }
  #pwdItem {
    position: absolute;
    top: 45%;
    width: 62%;
    height: 60px;
    left: 15%;
    text-align: center;
  }
  #subItem {
    position: absolute;
    top: 65%;
    width: 80%;
    height: 60px;
    left: 10%;
  }
  #subItem .el-button {
    width: 30%;
    font-size: 16px;
    color: #409EFF;
    margin-left: 13%;
    border: 2px solid;
    background-color: rgba(0,0,0,0);
  }
  #confirm {
    position: absolute;
    top: 30%;
    left: 42%;
    width: 497px;
    height: 308px;
    /*padding-left: 4%;*/
    background: linear-gradient(230deg, rgba(53, 57, 74, 0.6) 0%, rgb(0, 0, 0) 90%);
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
  }
  #confirm p {
    position: absolute;
    top: 38%;
    left: 35%;
    font-size: 26px;
    color: white;
  }
  #confirm #rolling {
    position: absolute;
    top: 10%;
    left: 8%;
    width: 60px;
  }
  .slide-fade-enter-active {
    transition: all 2s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter{
    transform: translateX(-20px);
    opacity: 0;
  }
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  #result {
    position: absolute;
    top: 8%;
    left: 36%;
    width: 28%;
    height: 85%;
    text-align: center;
    /*padding-left: 4%;*/
    background: linear-gradient(230deg, rgba(53, 57, 74, 0.6) 0%, rgb(0, 0, 0) 90%);
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
  }
  #result p {
    position: relative;
    top: 25%;
    /*left: 38%;*/
    font-size: 18px;
    margin-bottom: 30px;
    color: #dcdfe6;
  }
  #title {
    position: absolute;
    width: 100%;
    height: 30%;
    top: 5%;
  }
  #title #loginP1 img {
    position: absolute;
    height: 80%;
    left: 10%;
    top: 20%;
  }
  #title #loginP2 img {
    position: absolute;
    height: 60%;
    width: 60%;
    right: 10%;
    top: 30%;
  }
</style>