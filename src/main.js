import Vue from "vue";
import App from "./App.vue";
import WeVue from "we-vue";
import "we-vue/lib/style.css";
import router from "./router";
import store from "./store";
import "lib-flexible/flexible.js";
import "./assets/style/index.scss"; // 公共样式
import "./assets/style/icon.scss"; // 图标样式

Vue.config.productionTip = false;
Vue.use(WeVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
