<template>
  <div class="shopping">
    <div class="shopping-edit">
      <i class="shoppingicon iconEdit"></i>
      编辑
    </div>
    <div class="shoppingList">
      <div class="shoppingItem">
        <div class="shoppingItemSelect">
          <img src="../../assets/images/icon/select.png" alt="">
        </div>
        <div class="shoppingItemContent">
          <div class="shoppingItemContentImg">
            <img src="../../assets/images/data/shopping/1.png" alt="">
          </div>
          <div class="shoppingItemContentNum">
            ￥38
          </div>
          <div class="shoppingItemContentData">
            <p>已选已选择：颜色3，12x20mm <i class="shoppingicon shoppinbot"></i></p>
            <p>
              <i class="shoppingicon iconreduce"></i>
              <span>1</span>
              <i class="shoppingicon iconAdd"></i>
            </p>
          </div>
        </div>
      </div>
      <div class="shoppingItem">
        <div class="shoppingItemSelect">
          <img src="../../assets/images/icon/selectAct.png" alt="">
        </div>
        <div class="shoppingItemContent">
          <div class="shoppingItemContentImg">
            <img src="../../assets/images/data/shopping/1.png" alt="">
          </div>
          <div class="shoppingItemContentNum">
            ￥38
          </div>
          <div class="shoppingItemContentData">
            <p>已选已选择：颜色3，12x20mm <i class="shoppingicon shoppinbot"></i></p>
            <p>
              <i class="shoppingicon iconreduce"></i>
              <span>1</span>
              <i class="shoppingicon iconAdd"></i>
            </p>
          </div>
        </div>
      </div>
      <div class="shoppingItem">
        <div class="shoppingItemSelect">
          <img src="../../assets/images/icon/selectAct.png" alt="">
        </div>
        <div class="shoppingItemContent">
          <div class="shoppingItemContentImg">
            <img src="../../assets/images/data/shopping/1.png" alt="">
          </div>
          <div class="shoppingItemContentNum">
            ￥38
          </div>
          <div class="shoppingItemContentData">
            <p>已选已选择：颜色3，12x20mm <i class="shoppingicon shoppinbot"></i></p>
            <p>
              <i class="shoppingicon iconreduce"></i>
              <span>1</span>
              <i class="shoppingicon iconAdd"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping"
};
</script>

<style lang="scss">
.shopping-edit {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  padding-right: 40px;
}
.shoppingList {
  padding: 0 30px 0 10px;
  .shoppingItem {
    width: 100%;
    height: 194px;
    display: flex;
    justify-content: space-between;
    .shoppingItemSelect {
      width: 60px;
      height: 194px;
      line-height: 194px;
      text-align: center;
      img {
        width: 30px;
      }
    }
    .shoppingItemContent {
      width: 630px;
      height: 194px;
      padding: 20px 0;
      box-sizing: border-box;
      border-bottom: 2px solid #dcdcdc;
      display: flex;
      align-items: center;
      .shoppingItemContentImg {
        width: 136px;
        height: 136px;
      }
      .shoppingItemContentNum {
        height: 136px;
        width: 80px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        font-size: 30px;
        color: #60d4ba;
        font-weight: bold;
      }
      .shoppingItemContentData {
        height: 136px;
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        p:nth-child(1) {
          font-size: 20px;
          color: #999999;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
        }
        p:nth-child(2) {
          display: flex;
          align-items: center;
          span {
            width: 160px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            background: #f2f2f2;
            margin: 0 22px;
          }
        }
      }
    }
  }
}
</style>
