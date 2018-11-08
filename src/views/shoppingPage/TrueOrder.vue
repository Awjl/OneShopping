<template>
  <div class="TrueOrder">
    <div class="OrderAddres">
      + 添加收货地址
    </div>
    <div class="orderLine"></div>
    <div class="OrederList">
      <div class="shoppingItemContent">
        <div class="shoppingItemContentImg">
          <img src="../../assets/images/data/shopping/1.png" alt="">
        </div>
        <div class="shoppingItemNoEdit">
          <p>可组合3色收纳抽屉</p>
          <p>颜色2，12x20mm</p>
          <p><span class="col">￥38</span> <span>x2</span></p>
        </div>
      </div>
      <div class="shoppingItemContent">
        <div class="shoppingItemContentImg">
          <img src="../../assets/images/data/shopping/1.png" alt="">
        </div>
        <div class="shoppingItemNoEdit">
          <p>可组合3色收纳抽屉</p>
          <p>颜色2，12x20mm</p>
          <p><span class="col">￥38</span> <span>x2</span></p>
        </div>
      </div>
    </div>
    <div class="orderLineBg"></div>
    <div class="OrderOption">
      <div class="OrderOptionItem" @click="goUseCoupon">
        <p>败家券</p>
        <p class="OrderOptionItemNum"><span>2个可用</span> <i class="myicon righticon"></i></p>
      </div>
      <div class="OptionItemLine"></div>
      <div class="OrderOptionItem" @click="goUseBell">
        <p>铃铛账户</p>
        <p class="OrderOptionItemNum"><span>2个可用</span> <i class="myicon righticon"></i></p>
      </div>
    </div>
    <div class="orderLineBg"></div>
    <div class="OrderOption">
      <div class="OrderOptionItem">
        <p> 商品合计</p>
        <p class="OrderOptionItemTolat">￥72</p>
      </div>
    </div>
    <div class="orderLineBg"></div>
    <div class="OrderOption">
      <div class="OrderOptionItem">
        <p> 配送方式</p>
        <p>XXX快递</p>
      </div>
    </div>
    <div class="orderLineBg"></div>
    <div class="OrderPayBox">
      <span>应付：¥206</span>
      <p @click="goPayOrder">哦了</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "trueOrder",
  methods: {
    goPayOrder() {
      this.$router.push({
        path: "/PayOrder"
      });
    },
    goUseCoupon() {
      this.$router.push({
        path: "/UseCoupon"
      });
    },
    goUseBell() {
      this.$router.push({
        path: "/UseBell"
      });
    }
  }
};
</script>

<style lang="scss">
.TrueOrder {
  .OrderAddres {
    margin: 20px 30px 0;
    height: 136px;
    background: #f2f2f2;
    font-size: 22px;
    color: #101010;
    letter-spacing: 0.61px;
    line-height: 136px;
    text-align: center;
  }
  .orderLine {
    margin: 50px 30px 0;
    height: 2px;
    background: #dcdcdc;
  }
  .orderLineBg {
    width: 100%;
    height: 20px;
    background: #f2f2f2;
  }
  .OrederList {
    padding: 0 30px;
    .shoppingItemContent {
      width: 100%;
      height: 194px;
      padding: 20px 0;
      box-sizing: border-box;
      border-bottom: 2px solid #dcdcdc;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .shoppingItemContentImg {
        width: 136px;
        height: 136px;
      }
      .shoppingItemNoEdit {
        width: 466px;
        height: 134px;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        p:nth-child(1) {
          font-size: 28px;
          color: #666666;
          letter-spacing: 1px;
        }
        p:nth-child(2) {
          font-size: 24px;
          color: #999999;
          letter-spacing: 1px;
        }
        p:nth-child(3) {
          font-size: 24px;
          color: #666666;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .col {
            font-size: 30px;
            color: #60d4ba;
            font-weight: bold;
          }
        }
      }
    }
  }
  .OrderOption {
    padding: 0 30px;
    .OrderOptionItem {
      padding: 24px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 28px;
      color: #222222;
      letter-spacing: 0.78px;
      p:nth-child(2) {
        display: flex;
        align-items: center;
      }
      .OrderOptionItemNum {
        span {
          padding: 5px 10px;
          border: 2px solid #ef6866;
          border-radius: 100px;
          font-size: 24px;
          color: #ed6969;
          letter-spacing: 0.67px;
          margin-right: 20px;
        }
      }
      .OrderOptionItemTolat {
        font-size: 28px;
        color: #60d4ba;
        letter-spacing: 0.78px;
      }
    }
    .OptionItemLine {
      width: 100%;
      height: 2px;
      background: #dcdcdc;
    }
  }
  .OrderPayBox {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 88px;
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    span {
      font-size: 28px;
      color: #60d4ba;
      letter-spacing: 1px;
    }
    p {
      width: 230px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      background: #60d4ba;
      color: #fff;
      border-radius: 44px;
      font-size: 28px;
      color: #ffffff;
      letter-spacing: 1px;
      text-align: center;
    }
  }
}
</style>
