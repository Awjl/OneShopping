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
import BellObtain from "./views/lovePage/bellObtain"; // 获取铃铛
import LoveHelp from "./views/lovePage/loveHelp"; // 求助页面
import LoveVolunteer from "./views/lovePage/loveVolunteer"; // 志愿者页面
import TrueOrder from "./views/shoppingPage/TrueOrder"; // 确认订单
import PayOrder from "./views/shoppingPage/PayOrder"; // 支付订单
import UseBell from "./views/shoppingPage/useBell"; // 使用铃铛
import UseCoupon from "./views/shoppingPage/useCoupon"; // 使用优惠券
import PerInformation from "./views/myPage/perInformation"; // 个人信息页面
import MyNotice from "./views/myPage/myNotice"; // 我的通知
import NoticeList from "./views/myPage/noticeList"; // 通知列表
import LogisticsList from "./views/myPage/logisticsList"; // 物流列表
import BellNum from "./views/myPage/bellNum"; // 铃铛数量
import HelpNum from "./views/myPage/helpNum"; // 求助数量
import MyCollection from "./views/myPage/myCollection"; // 我的收藏
import MyAfterSale from "./views/myPage/myAfterSale"; // 我的售后
import MyAddres from "./views/myPage/myAddres"; // 我的地址
import AddAddres from "./views/myPage/addAddres"; // 添加地址
import MyPlease from "./views/myPage/myPlease"; // 我的邀请
import MyOrder from "./views/myPage/myOrder"; // 我的订单列表
import Login from "./views/loginRegistered/login"; // 登录页面
import Registered from "./views/loginRegistered/registered"; // 注册页面
import OrderDetails from "./views/myPage/OrderDetails"; // 订单详情

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
    },
    {
      path: "/PerInformation",
      component: PerInformation,
      name: "PerInformation",
      meta: {
        title: "个人信息"
      }
    },
    {
      path: "/MyNotice",
      component: MyNotice,
      name: "MyNotice",
      meta: {
        title: "我的消息"
      }
    },
    {
      path: "/NoticeList",
      component: NoticeList,
      name: "NoticeList",
      meta: {
        title: "通知"
      }
    },
    {
      path: "/LogisticsList",
      component: LogisticsList,
      name: "LogisticsList",
      meta: {
        title: "通知"
      }
    },
    {
      path: "/BellNum",
      component: BellNum,
      name: "BellNum",
      meta: {
        title: "我的铃铛"
      }
    },
    {
      path: "/HelpNum",
      component: HelpNum,
      name: "HelpNum",
      meta: {
        title: "我的求助"
      }
    },
    {
      path: "/MyCollection",
      component: MyCollection,
      name: "MyCollection",
      meta: {
        title: "贼稀罕"
      }
    },
    {
      path: "/MyAfterSale",
      component: MyAfterSale,
      name: "MyAfterSale",
      meta: {
        title: "退款／售后"
      }
    },
    {
      path: "/MyAddres",
      component: MyAddres,
      name: "MyAddres",
      meta: {
        title: "我的地址"
      }
    },
    {
      path: "/AddAddres",
      component: AddAddres,
      name: "AddAddres",
      meta: {
        title: "添加地址"
      }
    },
    {
      path: "/MyPlease",
      component: MyPlease,
      name: "MyPlease",
      meta: {
        title: "我的邀请"
      }
    },
    {
      path: "/MyOrder",
      component: MyOrder,
      name: "MyOrder",
      meta: {
        title: "我的订单"
      }
    },
    {
      path: "/Login",
      component: Login,
      name: "Login",
      meta: {
        title: "登录"
      }
    },
    {
      path: "/Registered",
      component: Registered,
      name: "Registered",
      meta: {
        title: "注册"
      }
    },
    {
      path: "/OrderDetails",
      component: OrderDetails,
      name: "OrderDetails",
      meta: {
        title: "订单详情"
      }
    }
  ]
});
