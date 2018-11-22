import Vue from "vue";
import App from "./App.vue";
import WeVue from "we-vue";
import "we-vue/lib/style.css"; // weUI
import router from "./router";
import store from "./store/index.js";
import "lib-flexible/flexible.js"; // 适配
import "./assets/style/index.scss"; // 公共样式
import "./assets/style/icon.scss"; // 图标样式
import VueWechatTitle from "vue-wechat-title"; // 修改标题
import fliter from "./utils/filter"

Vue.config.productionTip = false;
Vue.use(VueWechatTitle); // 修改标题

Vue.use(WeVue);
// Vue.directive("focus", {
//   inserted(el) {
//     el.focus();
//   }
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
