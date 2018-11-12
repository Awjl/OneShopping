<template>
  <div class="My">
    <div class="my-bg">
      <img src="../../assets/images/data/my/my-bg.png" alt="">
      <div class="my-Notice" @click="goMyNotice">
        <img src="../../assets/images/icon/notice.png" alt="">
        <div class="NoticeNum">2</div>
      </div>
      <div class="my-tou">
        <div class="myHeadportrait" @click="goPerInformation"> <img src="../../assets/images/data/my/my.png" alt="">
        </div>
        <div class="my-name">
          平板家的妹妹
        </div>
        <div class="myBean-Btn" @click="goBellNum">
          <img src="../../assets/images/icon/my-dou.png" alt="">12个
        </div>
      </div>
      <div class="myTab">
        <div :class="{myTabAct: show}" @click="myTab()">
          Bai家记
        </div>
        <div :class="{myTabAct: !show}" @click="myTab()">
          爱心记
        </div>
      </div>
    </div>
    <div class="myList" v-if="show">
      <div class="myitem myorder" @click="goMyOrder(0)">
        <div class="myitemLeft">
          <i class="myicon myico1"></i> 败的玩意儿
        </div>
        <i class="myicon righticon"></i>
      </div>
      <div class="myAllgoods">
        <div class="myAllgoodsItem" @click="goMyOrder(1)">
          <div class="myAllgoodsItemImg">
            <img src="../../assets/images/icon/my1.png" alt="">
            <div class="messgNum">2</div>
          </div>
          <div class="myAllgoodsItemName">
            待付款
          </div>
        </div>
        <div class="myAllgoodsItem" @click="goMyOrder(2)">
          <div class="myAllgoodsItemImg">
            <img src="../../assets/images/icon/my2.png" alt="">
            <div class="messgNum">99</div>
          </div>
          <div class="myAllgoodsItemName">
            待发货
          </div>
        </div>
        <div class="myAllgoodsItem" @click="goMyOrder(3)">
          <div class="myAllgoodsItemImg">
            <img src="../../assets/images/icon/my3.png" alt="">
          </div>
          <div class="myAllgoodsItemName">
            待收货
          </div>
        </div>
        <div class="myAllgoodsItem" @click="goMyOrder(4)">
          <div class="myAllgoodsItemImg">
            <img src="../../assets/images/icon/my4.png" alt="">
          </div>
          <div class="myAllgoodsItemName">
            待评价
          </div>
        </div>
      </div>
    </div>
    <div class="myList" v-if="show">
      <div class="myitem myorder" @click="goMyCollection">
        <div class="myitemLeft">
          <i class="myicon myico2"></i> 贼稀罕
        </div>
        <i class="myicon righticon"></i>
      </div>
      <div class="myitem myorder" @click="goUseCoupon">
        <div class="myitemLeft">
          <i class="myicon myico3"></i> 败家券
        </div>
        <i class="myicon righticon"></i>
      </div>
      <div class="myitem myorder" @click="goMyAfterSale">
        <div class="myitemLeft">
          <i class="myicon myico4"></i> 不要了
        </div>
        <i class="myicon righticon"></i>
      </div>
      <div class="myitem" @click="goMyAddres">
        <div class="myitemLeft">
          <i class="myicon myico5"></i> 往哪寄
        </div>
        <i class="myicon righticon"></i>
      </div>
    </div>
    <div class="myList" v-if="show">
      <div class="myitem" @click="goMyPlace">
        <div class="myitemLeft">
          <i class="myicon myico6"></i> 我的邀请
        </div>
        <i class="myicon righticon"></i>
      </div>
    </div>
    <div class="myDiary" v-if="!show">
      <div class="myDiaryNum">
        <div class="NumLeft">
          <span>28</span>
          <p>铃铛／个</p>
        </div>
        <div class="NumRight">
          <span>12</span>
          <p>已捐赠／个</p>
        </div>
      </div>
      <div class="DiaryHe"></div>
      <div class="myitem myorder" @click="goHelpNum">
        <div class="myitemLeft">
          <i class="myicon myico1"></i> 申请救助记录 18
        </div>
        <i class="myicon righticon"></i>
      </div>
      <div class="DiaryHe"></div>
      <div class="DiaryList">
        <div class="DiaryItem">
          <div class="DiaryItemImg">
            <img src="../../assets/images/data/love/1.png" alt="">
            <div class="DiaryItemTime">
              还剩2天08 : 32 : 23
            </div>
          </div>
          <div class="DiaryItemConter">
            <p>爱心易物 | <span>给他们一个遮住风雨的地方</span></p>
            <p>已捐：<span>¥2100</span></p>
            <p>目标价值:8000元物资</p>
          </div>
        </div>
        <div class="DiaryItem">
          <div class="DiaryItemImg">
            <img src="../../assets/images/data/love/2.png" alt="">
            <div class="DiaryItemTime">
              执行中
            </div>
          </div>
          <div class="DiaryItemConter">
            <p>爱心易物 | <span>给他们一个遮住风雨的地方</span></p>
            <p>已捐：<span>¥2100</span></p>
            <p>目标价值:8000元物资</p>
          </div>
        </div>
        <div class="DiaryItem">
          <div class="DiaryItemImg">
            <img src="../../assets/images/data/love/3.png" alt="">
            <div class="DiaryItemTime">
              以结束
            </div>
          </div>
          <div class="DiaryItemConter">
            <p>爱心易物 | <span>给他们一个遮住风雨的地方</span></p>
            <p>已捐：<span>¥2100</span></p>
            <p>目标价值:8000元物资</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "My",
  data() {
    return {
      show: true
    };
  },
  methods: {
    myTab() {
      this.show = !this.show;
    },
    goPerInformation() {
      this.$router.push({
        path: "/PerInformation"
      });
    },
    goMyNotice() {
      this.$router.push({
        path: "/MyNotice"
      });
    },
    goBellNum() {
      this.$router.push({
        path: "/BellNum"
      });
    },
    goHelpNum() {
      this.$router.push({
        path: "/HelpNum"
      });
    },
    goMyCollection() {
      this.$router.push({
        path: "/MyCollection"
      });
    },
    goUseCoupon() {
      this.$router.push({
        path: "/UseCoupon"
      });
    },
    goMyAfterSale() {
      this.$router.push({
        path: "/MyAfterSale"
      });
    },
    goMyAddres() {
      this.$router.push({
        path: "/MyAddres"
      });
    },
    goMyPlace() {
      this.$router.push({
        path: "/MyPlease"
      });
    },
    goMyOrder(val) {
      this.$router.push({
        path: "/MyOrder",
        query: {
          id: val
        }
      });
    }
  }
};
</script>

<style lang="scss">
.My {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 1246px;
  padding-bottom: 110px;
  background: #f2f2f2;
  overflow-y: auto;
}
.my-bg {
  position: relative;
  .my-tou {
    position: absolute;
    top: 110px;
    left: 0;
    width: 100%;
    .myHeadportrait {
      width: 120px;
      height: 120px;
      margin: 0 auto;
    }
    .my-name {
      font-size: 36px;
      color: #ffffff;
      letter-spacing: 1px;
      text-align: center;
      margin-top: 10px;
    }
    .myBean-Btn {
      width: 100px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: #ffd664;
      border-radius: 50px;
      margin: 15px auto 0;
      img {
        width: 20px;
        margin-right: 5px;
      }
    }
  }
  .myTab {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background: #222222;
    display: flex;
    justify-content: center;
    div {
      height: 120px;
      line-height: 120px;
      width: 40%;
      text-align: center;
      font-size: 28px;
      color: #ffffff;
      letter-spacing: 1.56px;
      box-sizing: border-box;
      &.myTabAct {
        color: #60d4ba;
        border-bottom: 6px solid #60d4ba;
      }
    }
  }
  .my-Notice {
    width: 40px;
    position: absolute;
    top: 40px;
    right: 40px;
    .NoticeNum {
      position: absolute;
      top: -20px;
      right: -20px;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      color: #fff;
      background: #ed6969;
      border-radius: 50%;
    }
  }
}
.myList {
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  background: #fff;
  margin-bottom: 20px;
  .myitem {
    height: 88px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .myitemLeft {
      display: flex;
      align-items: center;
      font-size: 28px;
      color: #222222;
      letter-spacing: 1.56px;
    }
  }
  .myAllgoods {
    display: flex;
    height: 200px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    .myAllgoodsItem {
      width: 25%;
      text-align: center;
      .myAllgoodsItemImg {
        width: 60px;
        height: 60px;
        margin: 0 auto 20px;
        position: relative;
        .messgNum {
          position: absolute;
          right: -10px;
          top: -5px;
          background: #ed6969;
          color: #fff;
          min-width: 35px;
          height: 35px;
          text-align: center;
          line-height: 38px;
          border-radius: 50%;
        }
      }
      .myAllgoodsItemName {
        font-size: 20px;
        color: #222222;
        letter-spacing: 1.11px;
      }
    }
  }
  .myorder {
    border-bottom: 1px solid #ddd;
  }
}
.myDiary {
  .DiaryHe {
    width: 100%;
    height: 20px;
    background: #f2f2f2;
  }
  .myDiaryNum {
    width: 100%;
    display: flex;
    background: #fff;
    div {
      width: 50%;
      height: 152px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        font-size: 36px;
        color: #60d4ba;
        letter-spacing: 2px;
        margin-bottom: 20px;
      }
      p {
        font-size: 20px;
        color: #666666;
        letter-spacing: 1.11px;
      }
    }
  }
  .myitem {
    width: calc(100%-80px);
    padding: 0 40px;
    height: 88px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    .myitemLeft {
      display: flex;
      align-items: center;
    }
  }
  .DiaryList {
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    background: #fff;
    .DiaryItem {
      width: 100%;
      height: 250px;
      padding: 35px 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #dcdcdc;
      .DiaryItemImg {
        width: 280px;
        height: 180px;
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        .DiaryItemTime {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 20px;
          color: #ffffff;
          letter-spacing: 0.83px;
          background: rgba($color: #000000, $alpha: 0.5);
        }
      }
      .DiaryItemConter {
        width: 380px;
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p:nth-child(1) {
          font-size: 26px;
          color: #222222;
          letter-spacing: 0.5px;
          span {
            font-size: 28px;
            color: #101010;
            letter-spacing: 0.43px;
            font-weight: bold;
          }
        }
        p:nth-child(2) {
          font-size: 22px;
          color: #60d4ba;
          letter-spacing: 1.54px;
          span {
            font-size: 32px;
            font-weight: bold;
          }
        }
        p:nth-child(3) {
          font-size: 26px;
          color: #222222;
          letter-spacing: 1.54px;
        }
      }
    }
  }
}
// p: nth-child();
</style>
