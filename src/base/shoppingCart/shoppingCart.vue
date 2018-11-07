<template>
  <div class="shoppingCart" v-if="showShoppingCart">
    <div class="shoppingCartBox">
      <div class="shoppingCartBoxImg">
        <img src="../../assets/images/data/home/det.png" alt="">
      </div>
      <div class="shoppingCartClose">
        <i class="CartClose" @click="hideShoppingCart()"></i>
      </div>
      <div class="shoppingCartPrice">
        ¥36
      </div>
      <div class="shoList">
        <p class="shoListTitle">
          选择款式
        </p>
        <div class="shoListItem">
          <span class="shoListItemAct">卡其浅绿深灰</span>
          <span>深灰深咖浅绿</span>
          <span>深灰</span>
        </div>
        <p class="shoListTitle">
          选择尺寸
        </p>
        <div class="shoListItem">
          <span class="shoListItemAct">12x20mm</span>
          <span>12x20mm</span>
          <span>12x20mm</span>
          <span>1.8x2mm</span>
          <span>1.8x2mm</span>
          <span>18x200mm</span>
        </div>
        <p class="shoListTitle">
          选择数量
        </p>
        <div class="shoListNum">
          <i class="shoppingicon iconreduce"></i>
          <span>1</span>
          <i class="shoppingicon iconAdd"></i>
        </div>
      </div>
      <div class="shoppingTrue">
        <div class="shoppingTrueBtn" @click="hideShoppingCart()">
          确认
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shoppingCart",
  props: ["showShoppingCart"],
  data() {
    return {
      hideCartBox: false
    };
  },
  methods: {
    hideShoppingCart() {
      this.$emit("ClickHideShoppingCart", this.hideCartBox);
    }
  }
};
</script>
<style lang="scss">
.shoppingCart {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  align-items: flex-end;
  .shoppingCartBox {
    width: 100%;
    height: 872px;
    position: relative;
    padding-top: 70px;
    box-sizing: border-box;
    .shoppingCartBoxImg {
      position: absolute;
      width: 208px;
      height: 208px;
      top: -104px;
      left: 0;
      right: 0;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
    }
    .shoppingCartPrice {
      clear: both;
      font-size: 28px;
      color: #60d4ba;
      letter-spacing: 2.4px;
      text-align: center;
    }
    .shoList {
      padding: 0 30px;
      .shoListTitle {
        font-size: 24px;
        color: #999999;
        letter-spacing: 2.06px;
        margin-top: 40px;
      }
      .shoListItem {
        margin: 20px 0 0;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        span {
          padding: 15px 30px;
          border: 2px dashed #dcdcdc;
          border-radius: 100px;
          margin-right: 20px;
          color: #222222;
          letter-spacing: 1px;
          font-size: 28px;
          margin-bottom: 20px;
          &.shoListItemAct {
            background: #60d4ba;
            font-size: 28px;
            color: #ffffff;
            letter-spacing: 1px;
          }
        }
      }
      .shoListNum {
        width: 100%;
        height: 80px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          display: block;
          width: 500px;
          line-height: 60px;
          text-align: center;
          background: #f2f2f2;
          margin: 0 22px;
          border-radius: 30px;
        }
      }
    }
    .shoppingTrue {
      width: 100%;
      height: 80px;
      margin: 40px 0 0;
      .shoppingTrueBtn {
        width: 80%;
        height: 80px;
        margin: 0 auto;
        text-align: center;
        line-height: 80px;
        background: #60d4ba;
        color: #fff;
        font-size: 30px;
        letter-spacing: 10px;
        border-radius: 50px;
      }
    }
  }
}
</style>
