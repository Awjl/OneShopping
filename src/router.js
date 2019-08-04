import Vue from "vue";
import Router from "vue-router";
const Tab = () => import('./base/tab/tab.vue') // 导航栏页面
const Home = () => import('./views/homePage/Home.vue') // 首页
const Love = () => import('./views/lovePage/love.vue') // 爱心页面
const Shopping = () => import('./views/shoppingPage/shopping.vue') // 购物车页面
const My = () => import('./views/myPage/my.vue') // 个人中心页面
const Service = () => import('./views/servicePage/service.vue') // 服务页面
const SpecialArea = () => import('./views/homePage/SpecialArea') // 专区页面
const AreaDratal = () => import('./views/homePage/SpecialAreaDetal') // 专区详情页
const NoviceArea = () => import('./views/homePage/NoviceArea') // 新手专区
const HotArea = () => import('./views/homePage/HotArea.vue') // 热卖专区
const FoodArea = () => import('./views/homePage/foodArea.vue') // 食物专区
const Details = () => import('./views/homePage/details.vue') // 商品详情页
const lovePageDetailse = () => import('./views/lovePage/lovePageDetails.vue') // 公益详情页
const BellObtain = () => import('./views/lovePage/bellObtain') // 获取铃铛
const LoveHelp = () => import('./views/lovePage/loveHelp') // 求助页面
const LoveVolunteer = () => import('./views/lovePage/loveVolunteer') // 志愿者页面
const TrueOrder = () => import('./views/shoppingPage/TrueOrder') // 确认订单
const PayOrder = () => import('./views/shoppingPage/PayOrder') // 支付订单
const UseBell = () => import('./views/shoppingPage/useBell') // 使用铃铛
const UseCoupon = () => import('./views/shoppingPage/useCoupon') // 使用优惠券
const PerInformation = () => import('./views/myPage/perInformation') // 个人信息页面
const MyNotice = () => import('./views/myPage/myNotice') // 我的通知
const NoticeList = () => import('./views/myPage/noticeList') // 通知列表
const LogisticsList = () => import('./views/myPage/logisticsList') // 物流列表
const BellNum = () => import('./views/myPage/bellNum') // 铃铛数量
const HelpNum = () => import('./views/myPage/helpNum') // 求助数量
const MyCollection = () => import('./views/myPage/myCollection') // 我的收藏
const MyAfterSale = () => import('./views/myPage/myAfterSale') // 我的售后
const MyAddres = () => import('./views/myPage/myAddres') // 我的地址
const AddAddres = () => import('./views/myPage/addAddres') // 添加地址
const MyPlease = () => import('./views/myPage/myPlease') // 我的邀请
const MyOrder = () => import('./views/myPage/myOrder') // 我的订单列表
const Login = () => import('./views/loginRegistered/login') // 登录页面
const Registered = () => import('./views/loginRegistered/registered') // 注册页面
const OrderDetails = () => import('./views/myPage/OrderDetails') // 登录页面

const MyVip = () => import('./views/myPage/vipList') // 登录页面


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
          path: "/Service",
          component: Service,
          name: "Service",
          meta: {
            title: "服务中心"
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
      path: "/MyVip",
      component: MyVip,
      name: "MyVip",
      meta: {
        title: "VIP商城"
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
