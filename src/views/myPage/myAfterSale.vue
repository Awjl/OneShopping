<template>
  <div class="myAfterSale">
    <div class="myAfterSaleItem">
      <div class="myAfterSaleItemConter">
        <div class="myAfterSaleItemImg">
          <img src="../../assets/images/data/home/1.png" alt="">
        </div>
        <div class="myAfterSaleItemName">
          <p>可组合3色收纳抽屉</p>
          <p>颜色2，12x20mm</p>
          <p><span>退款金额：¥36</span> <span>X 2</span></p>
        </div>
      </div>
      <p>等待卖家退款</p>
      <div class="myAfterSaleItemBtn">
        <div class="myAfterBtnBox">
          查看详情
        </div>
      </div>
    </div>
    <div class="myAfterSaleItem">
      <div class="myAfterSaleItemConter">
        <div class="myAfterSaleItemImg">
          <img src="../../assets/images/data/home/1.png" alt="">
        </div>
        <div class="myAfterSaleItemName">
          <p>可组合3色收纳抽屉</p>
          <p>颜色2，12x20mm</p>
          <p><span>退款金额：¥36</span> <span>X 2</span></p>
        </div>
      </div>
      <p>等待卖家退款</p>
      <div class="myAfterSaleItemBtn">
        <div class="myAfterBtnBox">
          查看详情
        </div>
      </div>
    </div>
    <div class="myAfterSaleItem">
      <div class="myAfterSaleItemConter">
        <div class="myAfterSaleItemImg">
          <img src="../../assets/images/data/home/1.png" alt="">
        </div>
        <div class="myAfterSaleItemName">
          <p>可组合3色收纳抽屉</p>
          <p>颜色2，12x20mm</p>
          <p><span>退款金额：¥36</span> <span>X 2</span></p>
        </div>
      </div>
      <p>等待卖家退款</p>
      <div class="myAfterSaleItemBtn">
        <div class="myAfterBtnBox">
          查看详情
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myAfterSale"
};
</script>

<style lang="scss">
.myAfterSale {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  overflow-y: auto;
  .myAfterSaleItem {
    padding: 30px 30px 0;
    background: #fff;
    margin-bottom: 20px;
    .myAfterSaleItemConter {
      display: flex;
      justify-content: space-between;
      .myAfterSaleItemImg {
        width: 136px;
        height: 136px;
      }
      .myAfterSaleItemName {
        width: 524px;
        font-size: 24px;
        color: #999999;
        letter-spacing: 1px;
        p:nth-child(1) {
          font-size: 28px;
          color: #222222;
          margin-bottom: 10px;
        }
        p:nth-child(3) {
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
          font-size: 28px;
          color: #60d4ba;
          letter-spacing: 0.78px;
          span:nth-child(2) {
            font-size: 24px;
            color: #222222;
          }
        }
      }
    }
    .myAfterSaleItemBtn {
      display: flex;
      justify-content: flex-end;
      padding: 20px 0;
      .myAfterBtnBox {
        width: 200px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 2px solid #60d4ba;
        border-radius: 100px;
        font-size: 24px;
        color: #60d4ba;
      }
    }
  }
  .myAfterSaleItem > p {
    font-size: 24px;
    color: #ed6969;
    margin-top: 30px;
    border-bottom: 2px dashed #dcdcdc;
    padding-bottom: 16px;
  }
}
</style>
