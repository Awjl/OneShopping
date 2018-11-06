<template>
  <div class="ShoppingDetails">
    <wv-swipe :height="260" :autoplay="3000">
      <wv-swipe-item>
        <img src="../../assets/images/data/home/detailsBanner.png" alt="">
      </wv-swipe-item>
      <wv-swipe-item>
        <img src="../../assets/images/data/home/detailsBanner.png" alt="">
      </wv-swipe-item>
      <wv-swipe-item>
        <img src="../../assets/images/data/home/detailsBanner.png" alt="">
      </wv-swipe-item>
    </wv-swipe>
    <div class="ShoppingDetailsData">
      <p class="ShoppingDetailsTiT">韩国秋冬宠物屋</p>
      <p class="ShoppingDetailsPrice">¥48</p>
      <div class="ShoppingDetailsBell">
        <p class="BellLeft"><i class="iconmoney"></i>铃铛<span>+2</span></p>
        <p class="BellLeft">铃铛是什么？ <i class="myicon righticon"></i></p>
      </div>
      <div class="ShoppingDetailsPostage">
        邮费: <p>¥6</p>
        <span>满¥199包邮</span>
      </div>
    </div>
    <div class="shoLine"></div>
    <div class="shoppingNav">
      <div class="shoppingNavBox">
        <div :class="{shopingact: show}" @click="DetailsTab()">
          图文详情
        </div>
        <div :class="{shopingact: !show}" @click="DetailsTab()">
          TA们说
        </div>
      </div>
    </div>
    <div class="DetailsData" v-if="show">
      <div>
        <img src="../../assets/images/data/home/detItem1.png" alt="">
      </div>
      <div>
        <img src="../../assets/images/data/home/detItem2.png" alt="">
      </div>
      <div>
        <img src="../../assets/images/data/home/detItem3.png" alt="">
      </div>
      <div class="PurchaseNotes">
        <div class="NotesTitle">
          购买须知
        </div>
        <div class="NoteProblem">
          购买运费如何收取？
        </div>
        <div class="PurchaseNotesTET">
          单笔订单金额（不含运费）满199元免邮费；不满199元，每单收取6元运费。
          <br>(港澳台地区需满500元免邮费；不满500元，每单收取30元运费)
        </div>
        <div class="NoteProblem">
          订单如何配送？
        </div>
        <div class="PurchaseNotesTET">
          一只商店会根据商品所在地、顾客所在地和商品的尺寸重量优选物流配送商，确保优质用户体验。
          <br>目前暂不支持自选快递，具体物流信息可在下单成功后“我的订单-物流详情”中查看。
        </div>
        <div class="NoteProblem">
          如何申请退换货？
        </div>
        <div class="PurchaseNotesTET">
          1.自收到商品之日起7日内，顾客可申请无忧退货；如果是退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；<br>
          2.退货流程：<br>
          确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成；<br>
          3.换货流程：<br>
          确认收货-申请换货-客服审核通过-用户寄回商品-仓库签收验货-客服确认-换货完成；
        </div>

      </div>
    </div>
    <div class="DetailsComment" v-if="!show">
      <div class="DetailsCommentTitle">
        宝贝好评率97.8%
      </div>
      <Comment :commentData="commentData"></Comment>
    </div>
    <div class="Other">
      <div class="OtherTitel">
        - 他们还宠幸了 -
      </div>
      <ShoppingList :listImg="listImg"></ShoppingList>
    </div>
    <div class="ShoppingBottom">
      <div class="BottomIcon">
        <img src="../../assets/images/icon/service.png" alt="">
        <p>勾搭</p>
      </div>
      <div class="BottomIcon">
        <img src="../../assets/images/icon/share.png" alt="">
        <p>分享</p>
      </div>
      <div class="BottomIcon">
        <img src="../../assets/images/icon/shou.png" alt="">
        <p>收藏</p>
      </div>
      <div class="BottonBtn">
        加入购物车
      </div>
      <div class="BottonBtn BottomAct">
        立即购买
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "we-vue";
import ShoppingList from "@/base/shoppingList/shoppingList";
import Comment from "@/base/comment/comment.vue";

export default {
  name: "shoppingDetails",
  data() {
    return {
      show: true,
      commentData: [
        {
          TouImg: "./img/1.c4c256bd.png",
          name: "这个是我的名字",
          score: 3,
          comment: `买了2组，质量棒棒的！物流也很快～质量棒棒的！物流也很快质量棒棒的！物流也很快`,
          time: "12:36",
          commentNum: 0,
          like: 26,
          myLike: false,
          ListComoent: [],
          dataImg: [
            "./img/1.c4c256bd.png",
            "./img/1.c4c256bd.png",
            "./img/1.c4c256bd.png"
          ]
        },
        {
          TouImg: "./img/1.c4c256bd.png",
          name: "这个是我的名字",
          score: 5,
          comment: `买了2组，质量棒棒的！物流也很快～质量棒棒的！物流也很快质量棒棒的！物流也很快质量棒棒的！物流也很快质量棒棒的！物流也很快质量棒棒的！物流也很快质量棒棒的！`,
          time: "12:36",
          commentNum: 0,
          like: 26,
          myLike: true,
          ListComoent: [],
          dataImg: []
        }
      ],
      listImg: [
        {
          img: "./img/1.c4c256bd.png",
          name: "韩国秋冬宠物屋",
          price: "48",
          addNum: "2"
        },
        {
          img: "./img/2.04132dd9.png",
          name: "韩国秋冬宠物屋",
          price: "48",
          addNum: "2"
        },
        {
          img: "./img/3.dd074d9a.png",
          name: "韩国秋冬宠物屋",
          price: "48",
          addNum: "2"
        },
        {
          img: "./img/4.98b6271f.png",
          name: "韩国秋冬宠物屋",
          price: "48",
          addNum: "2"
        }
      ]
    };
  },
  methods: {
    DetailsTab() {
      this.show = !this.show;
    }
  },
  components: {
    Swipe,
    SwipeItem,
    ShoppingList,
    Comment
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
