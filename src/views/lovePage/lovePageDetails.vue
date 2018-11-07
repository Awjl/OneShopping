<template>
  <div class="lovePageDetails">
    <div class="lovePageBgBox">
    </div>
    <div class="lovePageDetailsHeard">
      <div class="loveHeardImg">
        <img src="../../assets/images/data/love/list2.png" alt="">
        <div class="loveHeardImgTime">
          还剩2天08 : 32 : 23
        </div>
      </div>
      <div class="loveHeardName">
        爱心屋 | 对！你可以让它们的冬天充满温暖
      </div>
      <div class="loveHeardPrice">
        <div class="loveHeardPriceLeft">
          <p>已募集：<span>¥10000</span></p>
          <p>已募集1000元用于购买爱心物资。</p>
        </div>
        <div class="loveHeardPriceRight">
          <wv-circle :line-width="4" stroke-color="#60D4BA" v-model="sliderValue" :diameter="60">{{sliderValue}}%</wv-circle>
        </div>
      </div>
    </div>
    <div class="lovePriceNum">
      <p>爱心物资</p>
      <p>
        <span>共240件</span>
        <span>价值16000元</span>
      </p>
    </div>
    <div class="loveShoppingList">
      <div class="loveShoppingItem">
        <img src="../../assets/images/data/home/1.png" alt="">
        <p class="loveShoppingItemName">成猫猫粮</p>
        <p class="loveShoppingItemPr">80件</p>
      </div>
      <div class="loveShoppingItem">
        <img src="../../assets/images/data/home/1.png" alt="">
        <p class="loveShoppingItemName">幼猫猫粮</p>
        <p class="loveShoppingItemPr">80件</p>
      </div>
      <div class="loveShoppingItem">
        <img src="../../assets/images/data/home/1.png" alt="">
        <p class="loveShoppingItemName">全犬种成犬粮</p>
        <p class="loveShoppingItemPr">80件</p>
      </div>
    </div>
    <div class="loveInitiate">
      <div class="lovehe20"></div>
      <div class="loveInitiateAll">
        <div class="loveInitiateStart">
          <i class="startIcon"></i>发起方：<span>一只商店</span>发起
        </div>
        <div class="loveInitiateEnd">
          <div>
            <i class="endIcon"></i>发起方：<span>一只商店</span>发起
          </div>
          <div></div>
        </div>
      </div>
      <div class="lovehe20"></div>
    </div>
  </div>
</template>

<script>
import { Circle } from "we-vue";

export default {
  name: "lovePageDetails",
  data() {
    return {
      sliderValue: "35"
    };
  },
  components: {
    Circle
  }
};
</script>

<style lang="scss">
.lovePageBgBox {
  width: 100%;
  height: 300px;
  background: #60d4ba;
}
.lovePageDetailsHeard {
  padding: 0 30px;
  .loveHeardImg {
    width: 100%;
    height: 368px;
    margin-top: -184px;
    position: relative;
    .loveHeardImgTime {
      position: absolute;
      right: 0;
      top: 30px;
      width: 240px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background: rgba($color: #60d4ba, $alpha: 0.8);
      border-radius: 50px 0 0 50px;
      color: #fff;
    }
  }
  .loveHeardName {
    font-size: 28px;
    color: #222222;
    letter-spacing: 1.8px;
    font-weight: bold;
    margin: 30px 0 20px;
  }
  .loveHeardPrice {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .loveHeardPriceLeft {
      font-size: 24px;
      color: #222222;
      letter-spacing: 1.54px;
      p:nth-child(1) {
        font-size: 24px;
        color: #60d4ba;
        letter-spacing: 3.09px;
        margin: 20px 0;
        span {
          font-size: 48px;
        }
      }
    }
  }
}
.lovePriceNum {
  margin-top: 30px;
  width: 100%;
  height: 76px;
  background: #f2f2f2;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  color: #222222;
  letter-spacing: 1.54px;
  span {
    margin-left: 30px;
  }
}
.loveShoppingList {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  .loveShoppingItem {
    width: 210px;
    margin-right: 20px;
    .loveShoppingItemName {
      font-size: 24px;
      color: #222222;
      letter-spacing: 0.92px;
      margin: 20px 0;
    }
    .loveShoppingItemPr {
      font-size: 24px;
      color: #60d4ba;
      letter-spacing: 0.92px;
    }
  }
}
.loveInitiate {
  .lovehe20 {
    width: 100%;
    height: 20px;
    background: #f2f2f2;
  }
  .loveInitiateAll {
    padding: 0 30px;
    .loveInitiateStart {
      padding: 48px 0;
      border-bottom: 2px solid #dcdcdc;
      display: flex;
      align-items: center;
      font-size: 28px;
      color: #222222;
      letter-spacing: 0.58px;
      span {
        color: #60d4ba;
      }
    }
  }
}
</style>
