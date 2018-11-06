import Vue from "vue";
import Router from "vue-router";
import Tab from "./base/tab/tab.vue"; // 导航栏页面
import Home from "./views/homePage/Home.vue"; // 首页
import Love from "./views/lovePage/love.vue"; // 爱心页面
import Shopping from "./views/shoppingPage/shopping.vue"; // 商城页面
import My from "./views/myPage/my.vue"; // 个人中心页面
import SpecialArea from "./views/homePage/SpecialArea.vue"; // 专区页面
import AreaDratal from "./views/homePage/SpecialAreaDetal.vue"; // 专区详情页
import NoviceArea from "./views/homePage/NoviceArea.vue"; // 新手详情页

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Tab,
      redirect: "/Home",
      children: [
        {
          path: "/Home",
          component: Home,
          name: "Home",
          meta: {
            title: "首页"
          }
        },
        {
          path: "/Home/SpecialArea",
          component: SpecialArea,
          name: "SpecialArea",
          meta: {
            title: "特惠专区"
          }
        },
        {
          path: "/Home/AreaDratal",
          component: AreaDratal,
          name: "AreaDratal",
          meta: {
            title: "专区详情"
          }
        },
        {
          path: "/Home/NoviceArea",
          component: NoviceArea,
          name: "NoviceArea",
          meta: {
            title: "新手专区"
          }
        },
        {
          path: "/Love",
          component: Love,
          name: "Love",
          meta: {
            title: "爱心驿站"
          }
        },
        {
          path: "/Shopping",
          component: Shopping,
          name: "Shopping",
          meta: {
            title: "就爱囤货"
          }
        },
        {
          path: "/My",
          component: My,
          name: "My",
          meta: {
            title: "我的小窝"
          }
        }
      ]
    }
  ]
});
