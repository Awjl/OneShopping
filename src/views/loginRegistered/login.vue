<template>
  <div class="loginRegistered">
    <div class="loginRegisteredBox">
      <div class="loginRegisteredLogo">
        <img src="../../assets/images/bg/login/logo.png" alt />
      </div>
      <div class="loginRegisteredInp">
        <input type="text" placeholder="请输入手机号" v-model="phone" />
      </div>
      <div class="loginRegisteredCode">
        <input type="text" placeholder="请输入验证码" v-model="code" />
        <span @click="getcode">获取验证码</span>
      </div>
      <div class="loginBtn" @click="login">绑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;定</div>
      <!-- <div class="goTab">
        还没有账号？<span @click="goRegistered">去注册</span>
      </div>-->
    </div>
  </div>
</template>

<script>
import { getcode, login } from "@/api/login/login";
import { configData, getUrlParam } from "@/utils/config";

export default {
  name: "login",
  data() {
    return {
      phone: "",
      code: "",
      userData: {
        utk: "",
        uid: "",
        nn: "",
        av: "",
        wxuid: ""
      }
    };
  },
  methods: {
    // 获取验证码
    getcode() {
      getcode(this.phone)
        .then(({ code, data, message }) => {
          if (code === configData.codeState) {
            console.log(data);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 绑定用户
    // 696777
    login() {
      let data = {
        code: this.code,
        phone: this.phone,
        wxUserId: window.sessionStorage.getItem("wxuid")
      };
      login(data)
        .then(({ code, data, message }) => {
          if (code === configData.codeState) {
            console.log(data);
            this.userData.utk = data.token;
            this.userData.uid = data.id;
            this.userData.nn = data.nickName;
            this.userData.av = data.avatar;
            this.userData.wxuid = data.wxUserId;
            window.sessionStorage.setItem(
              "userData",
              JSON.stringify(this.userData)
            );
            this.$router.push({
              path: "/"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
.loginRegisteredBox {
  width: 690px;
  height: 1000px;
  background: #fff;
  margin: 100px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .loginRegisteredLogo {
    width: 199px;
    margin-bottom: 88px;
  }
  .loginRegisteredInp {
    width: 600px;
    height: 80px;
    margin-bottom: 40px;
    input {
      width: 100%;
      height: 100%;
      border: 2px solid #dcdcdc;
      border-radius: 100px;
      outline: none;
      padding: 0 30px;
      box-sizing: border-box;
    }
  }
  .loginRegisteredCode {
    width: 600px;
    height: 80px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: 200px;
      height: 100%;
      border: 2px solid #dcdcdc;
      border-radius: 100px;
      outline: none;
      padding: 0 30px;
      box-sizing: border-box;
    }
    span {
      display: block;
      width: 168px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      background: #60d4ba;
      border-radius: 6px;
      font-size: 24px;
      color: #ffffff;
      letter-spacing: 1.45px;
    }
  }
  .loginBtn {
    width: 600px;
    height: 80px;
    line-height: 80px;
    margin-top: 70px;
    text-align: center;
    background: #60d4ba;
    border-radius: 100px;
    font-size: 28px;
    color: #ffffff;
  }
  .goTab {
    text-align: center;
    font-size: 24px;
    color: #4a4a4a;
    letter-spacing: 1.45px;
    margin-top: 50px;
    span {
      color: #60d4ba;
      text-decoration: underline;
    }
  }
}
.loginRegisteredBox input::-webkit-input-placeholder {
  color: #666;
}
</style>
