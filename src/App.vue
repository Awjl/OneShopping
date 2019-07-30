<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view v-wechat-title="$route.meta.title"></router-view>
    <!-- </keep-alive> -->
  </div>
</template>
<script>
import { getwxID } from "@/api/login/login";
import { configData, getUrlParam } from "@/utils/config";

export default {
  name: "App",
  data() {
    return {
      wxuid: ""
    };
  },
  created() {
    this.getwxID()
    // window.sessionStorage.setItem("wxuid", "200");
    // console.log(window.sessionStorage.getItem("wxuid"));
  },
  methods: {
    getwxID() {
      let code = getUrlParam("code");
      let state = getUrlParam("state");
      getwxID(code, state)
        .then(res => {
          if (res.code === configData.codeState) {
            var wx = res.data;
            if (wx.login) {
              // //公众号已经绑定手机号
              this.userData.utk = wx.login.token;
              this.userData.uid = wx.login.id;
              this.userData.nn = wx.login.nickName;
              this.userData.av = wx.login.avatar;
              this.userData.wxuid = wx.login.wxUserId;
              window.sessionStorage.setItem(
                "userData",
                JSON.stringify(this.userData)
              );
            } else {
              //引导用户绑定手机号
              this.wxuid = wx.id;
              window.sessionStorage.setItem("wxuid", this.wxuid);
            }
          } else {
            // 授权失败，重新调用授权
            var ruri = "http://www.mayeinfo.com"; // 微信公众号授权成功后回调页
            var url =
              "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa88fd2810fd475a6" +
              "&redirect_uri=" +
              ruri +
              "&response_type=code&scope=snsapi_userinfo&state=" +
              new Date().getTime();
            window.location = url;
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
.app {
  background: #fff;
}
</style>
