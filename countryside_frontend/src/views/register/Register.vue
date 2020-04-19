<template>
  <div id="register">
    <el-carousel :interval="30000" loop height="100%" >
      <el-carousel-item trigger="click" v-for="item in bcImg" :key="item">
        <el-image :src="item.img"></el-image>
      </el-carousel-item>
    </el-carousel>
    <div id="regInfo">
      <div id="regTitle">
        <div id="regP1"><img src="../../assets/img/home/logo.png" alt=""></div>
        <div id="regP2"><img src="../../assets/img/home/title.png" alt=""></div>
      </div>
      <el-form :model="regForm" :rules="regRules" ref="regForm" label-position="left">
        <el-form-item prop="username" id="userItem">
          <el-input class="regInput" prefix-icon="el-icon-user" id="uname" size="large" v-model.trim="regForm.username" autocomplete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password" id="passwordItem">
          <el-input class="regInput" prefix-icon="el-icon-lock" id="pwd" type="password" size="large" v-model.trim="regForm.password" show-password autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="password2" id="password2Item">
          <el-input class="regInput" prefix-icon="el-icon-lock" id="pwd2" type="password" size="large" v-model.trim="regForm.password2" show-password autocomplete="off" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item id="subItem">
          <el-button type="primary" round @click="Register('regForm')">注册</el-button>
          <el-button type="primary" round @click="ToLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import bg1 from "../../assets/img/login/loginBac1.png"
  import bg2 from "../../assets/img/login/loginBac2.png"
  import bg3 from "../../assets/img/login/loginBac3.png"
  export default {
    name: "Register",
    data() {
      let validatePass = (rule, value, callback) => {
        console.log(value);
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(value.length < 6 || value.length > 12) {
          callback(new Error('请输入6 - 12位的密码'));
        } else {
          if (this.regForm.password2 !== '') {
            this.$refs.regForm.validateField('checkPass');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        console.log(value);
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.regForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        bcImg: [
          {img: bg1},
          {img: bg2},
          {img: bg3}
        ],
        regForm: {
          username: '',
          password: '',
          password2: '',
        },
        regRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' },
            { pattern: /^.*(?=.{6,20})(?=.*\d)(?=.*[a-z]{1,}).*$/, message: '密码弱', trigger: 'blur'}
          ],
          password2: [
            { required: true, message: '请输入确认密码', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      Register(forName) {
        this.$refs[forName].validate(valid => {
          console.log(valid);
          if (valid) {
            this.regForm.username = document.getElementById('uname').value;
            this.regForm.password = document.getElementById('pwd').value;
            this.regForm.password2 = document.getElementById('pwd2').value;
            console.log(this.regForm.username,this.regForm.password,this.regForm.password2);
            register(this.regForm.username,this.regForm.password).then(res => {
              console.log(res);
              if (res === 1) {
                alert("注册成功");
                this.$router.push('/login');
              }else {
                alert("注册失败");
              }
            }).catch(err => {
              console.log(err);
            })
          }
        })
      },
      ToLogin() {
        this.$router.push('/login');
      },
      RadioOnClick0() {
        this.data().regForm.gender = 0;
      },
      RadioOnClick1() {
        this.data().regForm.gender = 1;
      },
    },
  }
</script>

<style>
  .regInput .el-input__inner {
    background-color: rgba(0,0,0,0);
    border: none;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    margin-left: 12px;
  }
</style>

<style scoped>
  #register {
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
  #regInfo {
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
  .el-form {
    position: relative;
    top: 40%;
    width: 100%;
    height: 70%;
    /*border: 1px solid black;*/
  }
  .el-input {
    font-size: 15px;
    background-color: rgba(0,0,0,0);
  }
  #userItem {
    position: relative;
    left: 15%;
    width: 80%;
    text-align: center;
  }
  #passwordItem {
    position: relative;
    left: 15%;
    text-align: center;
    width: 80%;
  }
  #password2Item {
    position: relative;
    left: 15%;
    text-align: center;
    width: 80%;
  }
  #subItem {
    position: relative;
    width: 100%;
  }
  #subItem .el-button {
    width: 35%;
    font-size: 16px;
    color: #409EFF;
    margin-left: 13%;
    border: 2px solid;
    background-color: rgba(0,0,0,0);
  }
  .el-radio {
    color: white;
  }
  #regTitle {
    position: absolute;
    width: 100%;
    height: 30%;
  }
  #regTitle #regP1 img {
    position: absolute;
    height: 80%;
    left: 10%;
    top: 15%;
  }
  #regTitle #regP2 img {
    position: absolute;
    height: 60%;
    width: 60%;
    right: 10%;
    top: 25%;
  }
</style>