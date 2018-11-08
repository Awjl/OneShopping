import Vue from "vue";
import Router from "vue-router";
import Tab from "./base/tab/tab.vue"; // 导航栏页面
import Home from "./views/homePage/Home.vue"; // 首页
import Love from "./views/lovePage/love.vue"; // 爱心页面
import Shopping from "./views/shoppingPage/shopping.vue"; // 购物车页面
import My from "./views/myPage/my.vue"; // 个人中心页面
import SpecialArea from "./views/homePage/SpecialArea.vue"; // 专区页面
import AreaDratal from "./views/homePage/SpecialAreaDetal.vue"; // 专区详情页
import NoviceArea from "./views/homePage/NoviceArea.vue"; // 新手专区
import HotArea from "./views/homePage/HotArea.vue"; // 热卖专区
import FoodArea from "./views/homePage/foodArea.vue"; // 食物专区
import Details from "./views/homePage/details.vue"; // 商品详情页
import lovePageDetailse from "./views/lovePage/lovePageDetails.vue"; // 公益详情页
import BellObtain from "@/views/lovePage/bellObtain"; // 获取铃铛
import LoveHelp from "@/views/lovePage/loveHelp"; // 求助页面
import LoveVolunteer from "@/views/lovePage/loveVolunteer"; // 志愿者页面
import TrueOrder from "@/views/shoppingPage/TrueOrder"; // 确认订单
import PayOrder from "@/views/shoppingPage/PayOrder"; // 支付订单
import UseBell from "@/views/shoppingPage/useBell"; // 使用铃铛
import UseCoupon from "@/views/shoppingPage/useCoupon"; // 使用优惠券

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
            title: "特惠列表"
          }
        },
        {
          path: "/Home/AreaDratal",
          component: AreaDratal,
          name: "AreaDratal",
          meta: {
            title: "特惠专区"
          }
        },
        {
          path: "/Home/NoviceArea",
          component: NoviceArea,
          name: "NoviceArea",
          meta: {
            title: "新品专区"
          }
        },
        {
          path: "/Home/HotArea",
          component: HotArea,
          name: "HotArea",
          meta: {
            title: "热卖专区"
          }
        },
        {
          path: "/Home/FoodArea",
          component: FoodArea,
          name: "FoodArea",
          meta: {
            title: "汪的盛宴"
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
    },
    {
      path: "/Details",
      component: Details,
      name: "Details",
      meta: {
        title: "商品详情"
      }
    },
    {
      path: "/lovePageDetailse",
      component: lovePageDetailse,
      name: "lovePageDetailse",
      meta: {
        title: "暖心项目"
      }
    },
    {
      path: "/BellObtain",
      component: BellObtain,
      name: "BellObtain",
      meta: {
        title: "如何获取铃铛"
      }
    },
    {
      path: "/LoveHelp",
      component: LoveHelp,
      name: "LoveHelp",
      meta: {
        title: "申请求助"
      }
    },
    {
      path: "/LoveVolunteer",
      component: LoveVolunteer,
      name: "LoveVolunteer",
      meta: {
        title: "申请志愿者"
      }
    },
    {
      path: "/TrueOrder",
      component: TrueOrder,
      name: "TrueOrder",
      meta: {
        title: "确认订单"
      }
    },
    {
      path: "/PayOrder",
      component: PayOrder,
      name: "PayOrder",
      meta: {
        title: "支付订单"
      }
    },
    {
      path: "/UseBell",
      component: UseBell,
      name: "UseBell",
      meta: {
        title: "花当当"
      }
    },
    {
      path: "/UseCoupon",
      component: UseCoupon,
      name: "UseCoupon",
      meta: {
        title: "使用败家券"
      }
    }
  ]
});
