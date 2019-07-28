<template>
  <div class="ShoppingDetails">
    <wv-swipe :height="260" :autoplay="3000">
      <wv-swipe-item v-for="(item, index) in proInfo.imgs" :key="index">
        <div>
          <img :src="item | formatJpg" alt />
        </div>
      </wv-swipe-item>
    </wv-swipe>
    <div class="ShoppingDetailsData">
      <p class="ShoppingDetailsTiT">{{catalog.name}}</p>
      <p class="ShoppingDetailsPrice">¥{{catalog.price | formatFee}}</p>
      <div class="ShoppingDetailsBell">
        <p class="BellLeft">
          <i class="iconmoney"></i>铃铛
          <span>+{{catalog.loveBean}}</span>
        </p>
        <p class="BellLeft">
          铃铛是什么？
          <i class="myicon righticon"></i>
        </p>
      </div>
      <div class="ShoppingDetailsPostage">
        邮费:
        <p>¥{{catalog.postage | formatFee}}</p>
        <span>满¥199包邮</span>
      </div>
    </div>
    <div class="shoLine"></div>
    <div class="shoppingNav">
      <div class="shoppingNavBox">
        <div :class="{shopingact: show}" @click="DetailsTab()">图文详情</div>
        <div :class="{shopingact: !show}" @click="DetailsTab()">TA们说</div>
      </div>
    </div>
    <div class="DetailsData" v-if="show">
      <div v-html="proInfo.richContentMobile"></div>
      <div class="PurchaseNotes">
        <div class="NotesTitle">购买须知</div>
        <div class="NoteProblem">购买运费如何收取？</div>
        <div class="PurchaseNotesTET">
          单笔订单金额（不含运费）满199元免邮费；不满199元，每单收取6元运费。
          <br />(港澳台地区需满500元免邮费；不满500元，每单收取30元运费)
        </div>
        <div class="NoteProblem">订单如何配送？</div>
        <div class="PurchaseNotesTET">
          一只商店会根据商品所在地、顾客所在地和商品的尺寸重量优选物流配送商，确保优质用户体验。
          <br />目前暂不支持自选快递，具体物流信息可在下单成功后“我的订单-物流详情”中查看。
        </div>
        <div class="NoteProblem">如何申请退换货？</div>
        <div class="PurchaseNotesTET">
          1.自收到商品之日起7日内，顾客可申请无忧退货；如果是退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；
          <br />2.退货流程：
          <br />确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成；
          <br />3.换货流程：
          <br />确认收货-申请换货-客服审核通过-用户寄回商品-仓库签收验货-客服确认-换货完成；
        </div>
      </div>
    </div>
    <div class="DetailsComment" v-if="!show">
      <!-- 好评率 -->
      <!-- <div class="DetailsCommentTitle">宝贝好评率97.8%</div> -->
      <Comment :commentData="commentinfo" v-on:cliShowBox="cliShowBox"></Comment>
    </div>
    <div class="Other">
      <div class="OtherTitel">- 他们还宠幸了 -</div>
      <ShoppingList :listImg="moreinfo.items"></ShoppingList>
    </div>
    <div class="ShoppingBottom">
      <!-- 客服 -->
      <!-- <div class="BottomIcon">
        <img src="../../assets/images/icon/service.png" alt>
        <p>勾搭</p>
      </div>-->
      <div class="BottomIcon">
        <img src="../../assets/images/icon/share.png" alt />
        <p>分享</p>
      </div>
      <div class="BottomIcon" v-if="ifcare==='1'" @click="myfavoriate">
        <img src="../../assets/images/icon/shou.png" alt />
        <p>收藏</p>
      </div>
      <div class="BottomIcon" v-if="ifcare==='2'" @click="cancelfoucus">
        <img src="../../assets/images/icon/shouAct.png" alt />
        <p>取消</p>
      </div>
      <div class="BottonBtn" @click="JoinShoppingCart()">加入购物车</div>
      <div class="BottonBtn BottomAct" @click="Judge()">立即购买</div>
    </div>
    <ShoppingCart
      :showShoppingCart="showShoppingCart"
      :ShoppingCartData="ShoppingCartData"
      @ClickHideShoppingCart="ClickHideShoppingCart"
      @successCart="successCart"
    ></ShoppingCart>
    <Permission :showBox="showBox" v-on:childByValue="childByValue"></Permission>
    <CommentBox :showCommentBox="showCommentBox" v-on:hideBoxC="hideBoxC"></CommentBox>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Toast } from "we-vue";
import ShoppingList from "@/base/shoppingList/shoppingList"; // 商品列表
import Comment from "@/base/comment/comment"; // 评论列表
import Permission from "@/base/Permission/permission"; // 权限提醒
import CommentBox from "@/base/CommentBox/CommentBox"; // 评论框
import ShoppingCart from "@/base/shoppingCart/shoppingCart"; // 购物车
import {
  geshopingDetails,
  geshopingRecommendList,
  geshopingCatalogs, // 获取是否收藏
  gesComment,
  putGeshopingCatalogs, // 添加收藏
  delGeshopingCatalogs // 取消收藏
} from "@/api/home/home";
import { configData, changetime2 } from "@/utils/config";

export default {
  name: "shoppingDetails",
  data() {
    return {
      show: true,
      showBox: false,
      showCommentBox: false,
      showShoppingCart: false,
      ShoppingCartData: {
        skuImg: null,
        mobileMainImg: "",
        selectnum: 1,
        catalog: [],
        pid: "",
        type: "",
        shopid: "" //店铺id
      },
      catalog: [],
      proInfo: {}, //商品详情
      ifShow: 0, //切换使用
      pcolor: {}, //产品颜色
      psize: "", //产品尺寸
      shoustu: "", //是否收藏
      ifcare: "1", //收藏的显示问题
      moreinfo: {}, //他们还买了
      changesku: "", //选择sku
      commentinfo: [], //评论信息,
      pid: ""
    };
  },
  created() {
    this.pid = this.$route.query.pid;
    this._geshopingCatalogs(this.pid);
    this._geshopingDetails(this.pid);
    this.menu();
  },
  methods: {
    _geshopingCatalogs(pid) {
      geshopingCatalogs(pid)
        .then(res => {
          if (res.code === configData.codeState) {
            if (res.data == null) {
              this.ifcare = "1";
            } else {
              this.ifcare = "2";
            }
            // this.ifcare = 2;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 获取详情
    _geshopingDetails(pid) {
      geshopingDetails(pid)
        .then(res => {
          if (res.code === configData.codeState) {
            console.log("详情=============");
            this.proInfo = res.data;
            this.ShoppingCartData.shopid = res.data.shopId; //店铺id
            this.catalog = res.data;
            this._geshopingRecommendList(this.catalog.categoryId);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 添加关注
    myfavoriate() {
      putGeshopingCatalogs(this.pid)
        .then(res => {
          if (res.code === configData.codeState) {
            this.ifcare = "2";
            // this.ifcare = 2;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 取消关注
    cancelfoucus() {
      delGeshopingCatalogs(this.pid)
        .then(res => {
          if (res.code === configData.codeState) {
            this.ifcare = "1";
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 获取评论
    _gesComment(pid) {
      gesComment(pid)
        .then(res => {
          if (res.code === configData.codeState) {
            console.log("评论=============");
            // this.commentinfo = res.data;
            let myinfo = res.data.items;
            for (let i = 0; i < myinfo.length; i++) {
              myinfo[i].createTime = changetime2(myinfo[i].createTime);
            }
            this.commentinfo = myinfo;
            console.log(this.commentinfo, "处理数据");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 获取推荐
    _geshopingRecommendList(categoryId) {
      geshopingRecommendList(categoryId)
        .then(res => {
          if (res.code === configData.codeState) {
            console.log("推荐=============");
            console.log(res.data);
            this.moreinfo = res.data;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    DetailsTab() {
      // 导航栏切换
      this.show = !this.show;
      if (!this.show) {
        this._gesComment(this.pid);
      }
    },
    Judge() {
      // 显示权限框
      this.showBox = true;
      this.ShoppingCartData.type = "buy";
    },
    childByValue(childValue) {
      // 隐藏权限框
      this.showBox = childValue;
    },
    cliShowBox(showBoxcom) {
      // 显示评论框
      this.showCommentBox = showBoxcom;
    },
    hideBoxC(hideBoxC) {
      // 隐藏评论框
      this.showCommentBox = hideBoxC;
    },
    JoinShoppingCart() {
      this.showShoppingCart = true;
      this.ShoppingCartData.skuImg = this.proInfo.mobileMainImg;
      this.ShoppingCartData.catalog = this.catalog.props;
      this.ShoppingCartData.pid = this.pid;
      this.ShoppingCartData.type = "cart";
    },
    ClickHideShoppingCart(hideCartBox) {
      this.showShoppingCart = hideCartBox;
    },
    successCart(val) {
      this.showShoppingCart = false;
      if (val) {
        Toast.success("添加购物车成功");
      } else {
        Toast.fail("添加购物车失败");
      }
    },
    menu() {
      window.scrollTo(0, 0);
    }
  },
  components: {
    Swipe,
    SwipeItem,
    ShoppingList,
    Comment,
    Permission,
    CommentBox,
    ShoppingCart
  },
  watch: {
    // this.$route.path
    "$route.query.pid": function(newVal, oldVal) {
      this.menu();
      this.pid = newVal;
      this._geshopingDetails(this.pid);
    }
  }
};
</script>

<style lang="scss">
.ShoppingDetails {
  padding-bottom: 110px;
  .ShoppingBottom {
    position: fixed;
    width: 100%;
    height: 98px;
    bottom: 0;
    left: 0;
    padding: 0 30px;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ddd;
    .BottomIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: 40px;
      }
      p {
        font-size: 20px;
        color: #666666;
        margin-top: 10px;
      }
    }
    .BottonBtn {
      width: 210px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      border: 2px solid #60d4ba;
      border-radius: 100px;
      font-size: 28px;
      color: #60d4ba;
      letter-spacing: 1px;
    }
    .BottomAct {
      background: #60d4ba;
      color: #fff;
    }
  }
}
.shoLine {
  width: 100%;
  height: 20px;
  background: #f2f2f2;
  margin-top: 33px;
}
.ShoppingDetailsData {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  .ShoppingDetailsTiT {
    font-size: 28px;
    color: #4a4a4a;
    letter-spacing: 1px;
    margin: 20px 0;
  }
  .ShoppingDetailsPrice {
    font-size: 36px;
    color: #60d4ba;
    letter-spacing: 1.29px;
    margin: 20px 0;
  }
  .ShoppingDetailsBell {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    .BellLeft {
      display: flex;
      align-items: center;
      font-size: 20px;
      color: #999999;
      .iconmoney {
        margin-right: 20px;
      }
      span {
        font-size: 20px;
        letter-spacing: 0.71px;
        line-height: 28px;
        color: #ffd664;
        margin-left: 10px;
      }
      .righticon {
        margin-left: 15px;
        height: 25px;
        width: 25px;
      }
    }
  }
  .ShoppingDetailsPostage {
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #4a4a4a;
    letter-spacing: 0.86px;
    line-height: 33px;
    p {
      margin-left: 20px;
      color: #000000;
      letter-spacing: 0.86px;
    }
    span {
      display: block;
      width: 172px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background: #f2f2f2;
      border-radius: 100px;
      margin-left: 40px;
    }
  }
}
.shoppingNav {
  width: 100%;
  height: 86px;
  padding: 0 106px;
  box-sizing: border-box;
  .shoppingNavBox {
    display: flex;
    width: 100%;
    height: 86px;
    border-bottom: 2px solid #dcdcdc;
    box-sizing: border-box;
    div {
      width: 50%;
      height: 86px;
      font-size: 28px;
      text-align: center;
      line-height: 86px;
      box-sizing: border-box;
      &.shopingact {
        font-size: 28px;
        color: #60d4ba;
        letter-spacing: 1px;
        border-bottom: 6px solid #60d4ba;
      }
    }
  }
}
.DetailsData {
  padding-top: 40px;
  .PurchaseNotes {
    width: calc(100%-60px);
    margin: 60px 30px 40px;
    padding: 80px 20px;
    background: #f2f2f2;
    border-radius: 36px;
    .NotesTitle {
      font-size: 36px;
      color: #222222;
      letter-spacing: 3px;
      margin-bottom: 80px;
      text-align: center;
      font-weight: bold;
    }
    .NoteProblem {
      width: 100%;
      height: 60px;
      line-height: 60px;
      background: #fff;
      padding: 0 10px;
      box-sizing: border-box;
      font-size: 24px;
      color: #666666;
    }
    .PurchaseNotesTET {
      font-size: 24px;
      color: #2a2a2a;
      letter-spacing: 2px;
      line-height: 33px;
      margin: 20px 0;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
}
.DetailsComment {
  padding: 0 30px;
  .DetailsCommentTitle {
    width: 100%;
    text-align: center;
    font-size: 28px;
    color: #60d4ba;
    letter-spacing: 1px;
    margin: 40px 0;
  }
}
.Other {
  padding: 0 30px;
  .OtherTitel {
    width: 100%;
    height: 93px;
    text-align: center;
    line-height: 93px;
    border-top: 2px solid #eaeaea;
    font-size: 24px;
    color: #999999;
    letter-spacing: 0.86px;
  }
}
</style>
