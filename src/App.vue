<template>
  <div id="app">
    <keep-alive>
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </keep-alive>
  </div>
</template>
<script>
import { getwxID } from "@/api/login/login";
import { configData, getUrlParam } from "@/utils/config";

export default {
  name: "App",
  data() {
    return {
      wxuid: "200"
    };
  },
  created() {
    // this.getwxID()
    window.sessionStorage.setItem('wxuid', '200')
    console.log(window.sessionStorage.getItem('wxuid'))
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
              console.log(wx.login, "获取用户");
              // //公众号已经绑定手机号
              // $.cookie("utk", wx.login.token, {
              //   domain: config.COOKIE_DOMAIN,
              //   expires: 30,
              //   path: "/"
              // });
              // $.cookie("uid", wx.login.id, {
              //   domain: config.COOKIE_DOMAIN,
              //   expires: 30,
              //   path: "/"
              // });
              // $.cookie("nn", wx.login.nickName, {
              //   domain: config.COOKIE_DOMAIN,
              //   expires: 30,
              //   path: "/"
              // });
              // $.cookie("av", wx.login.avatar, {
              //   domain: config.COOKIE_DOMAIN,
              //   expires: 30,
              //   path: "/"
              // });
              // $.cookie("wxuid", wx.login.wxUserId, {
              //   domain: config.COOKIE_DOMAIN,
              //   expires: 30,
              //   path: "/"
              // });
              // window.location.href = "firstpage.html";
            } else {
              //引导用户绑定手机号
              this.wxuid = wx.id;
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
