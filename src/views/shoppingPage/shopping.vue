<template>
  <div class="shopping">
    <div class="shopping-edit" @click="editTabBox" v-if="editTab">
      <i class="shoppingicon iconEdit"></i>
      编辑
    </div>
    <div class="shopping-edit" @click="editTabBox" v-if="!editTab">
      <i class="shoppingicon iconEdit"></i>
      完成
    </div>
    <div class="shoppingList">
      <div class="shoppingItem">
        <div class="shoppingItemSelect" @click="selectAct">
          <div v-if="!select">
            <img src="../../assets/images/icon/select.png" alt="">
          </div>
          <div v-if="select">
            <img src="../../assets/images/icon/selectAct.png" alt="">
          </div>
        </div>
        <div class="shoppingItemContent">
          <div class="shoppingItemContentImg">
            <img src="../../assets/images/data/shopping/1.png" alt="">
          </div>
          <div class="shoppingItemNoEdit" v-if="editTab">
            <p>可组合3色收纳抽屉</p>
            <p>颜色2，12x20mm</p>
            <p><span class="col">￥38</span> <span>x2</span></p>
          </div>
          <div class="shoppingItemContentNum" v-if="!editTab">
            ￥38
          </div>
          <div class="shoppingItemContentData" v-if="!editTab">
            <p @click="JoinShoppingCart()">已选已选择：颜色3，12x20mm <i class="shoppingicon shoppinbot"></i></p>
            <p>
              <i class="shoppingicon iconreduce"></i>
              <span>1</span>
              <i class="shoppingicon iconAdd"></i>
            </p>
          </div>
        </div>
      </div>
      <div class="shoppingItem">
        <div class="shoppingItemSelect" @click="selectAct">
          <div v-if="!select">
            <img src="../../assets/images/icon/select.png" alt="">
          </div>
          <div v-if="select">
            <img src="../../assets/images/icon/selectAct.png" alt="">
          </div>
        </div>
        <div class="shoppingItemContent">
          <div class="shoppingItemContentImg">
            <img src="../../assets/images/data/shopping/1.png" alt="">
          </div>
          <div class="shoppingItemNoEdit" v-if="editTab">
            <p>可组合3色收纳抽屉</p>
            <p>颜色2，12x20mm</p>
            <p><span class="col">￥38</span> <span>x2</span></p>
          </div>
          <div class="shoppingItemContentNum" v-if="!editTab">
            ￥38
          </div>
          <div class="shoppingItemContentData" v-if="!editTab">
            <p @click="JoinShoppingCart()">已选已选择：颜色3，12x20mm <i class="shoppingicon shoppinbot"></i></p>
            <p>
              <i class="shoppingicon iconreduce"></i>
              <span>1</span>
              <i class="shoppingicon iconAdd"></i>
            </p>
          </div>
        </div>
      </div>
      <div class="shoppingItem">
        <div class="shoppingItemSelect" @click="selectAct">
          <div v-if="!select">
            <img src="../../assets/images/icon/select.png" alt="">
          </div>
          <div v-if="select">
            <img src="../../assets/images/icon/selectAct.png" alt="">
          </div>
        </div>
        <div class="shoppingItemContent">
          <div class="shoppingItemContentImg">
            <img src="../../assets/images/data/shopping/1.png" alt="">
          </div>
          <div class="shoppingItemNoEdit" v-if="editTab">
            <p>可组合3色收纳抽屉</p>
            <p>颜色2，12x20mm</p>
            <p><span class="col">￥38</span> <span>x2</span></p>
          </div>
          <div class="shoppingItemContentNum" v-if="!editTab">
            ￥38
          </div>
          <div class="shoppingItemContentData" v-if="!editTab">
            <p @click="JoinShoppingCart()">已选已选择：颜色3，12x20mm <i class="shoppingicon shoppinbot"></i></p>
            <p>
              <i class="shoppingicon iconreduce"></i>
              <span>1</span>
              <i class="shoppingicon iconAdd"></i>
            </p>
          </div>
        </div>
      </div>
      <div class="shoppingItem">
        <div class="shoppingItemSelect" @click="selectAct">
          <div v-if="!select">
            <img src="../../assets/images/icon/select.png" alt="">
          </div>
          <div v-if="select">
            <img src="../../assets/images/icon/selectAct.png" alt="">
          </div>
        </div>
        <div class="shoppingItemContent">
          <div class="shoppingItemContentImg">
            <img src="../../assets/images/data/shopping/1.png" alt="">
          </div>
          <div class="shoppingItemNoEdit" v-if="editTab">
            <p>可组合3色收纳抽屉</p>
            <p>颜色2，12x20mm</p>
            <p><span class="col">￥38</span> <span>x2</span></p>
          </div>
          <div class="shoppingItemContentNum" v-if="!editTab">
            ￥38
          </div>
          <div class="shoppingItemContentData" v-if="!editTab">
            <p @click="JoinShoppingCart()">已选已选择：颜色3，12x20mm <i class="shoppingicon shoppinbot"></i></p>
            <p>
              <i class="shoppingicon iconreduce"></i>
              <span>1</span>
              <i class="shoppingicon iconAdd"></i>
            </p>
          </div>
        </div>
      </div>
      <div class="shoppingItem">
        <div class="shoppingItemSelect" @click="selectAct">
          <div v-if="!select">
            <img src="../../assets/images/icon/select.png" alt="">
          </div>
          <div v-if="select">
            <img src="../../assets/images/icon/selectAct.png" alt="">
          </div>
        </div>
        <div class="shoppingItemContent">
          <div class="shoppingItemContentImg">
            <img src="../../assets/images/data/shopping/1.png" alt="">
          </div>
          <div class="shoppingItemNoEdit" v-if="editTab">
            <p>可组合3色收纳抽屉</p>
            <p>颜色2，12x20mm</p>
            <p><span class="col">￥38</span> <span>x2</span></p>
          </div>
          <div class="shoppingItemContentNum" v-if="!editTab">
            ￥38
          </div>
          <div class="shoppingItemContentData" v-if="!editTab">
            <p @click="JoinShoppingCart()">已选已选择：颜色3，12x20mm <i class="shoppingicon shoppinbot"></i></p>
            <p>
              <i class="shoppingicon iconreduce"></i>
              <span>1</span>
              <i class="shoppingicon iconAdd"></i>
            </p>
          </div>
        </div>
      </div>
      <div class="shoppingItem">
        <div class="shoppingItemSelect" @click="selectAct">
          <div v-if="!select">
            <img src="../../assets/images/icon/select.png" alt="">
          </div>
          <div v-if="select">
            <img src="../../assets/images/icon/selectAct.png" alt="">
          </div>
        </div>
        <div class="shoppingItemContent">
          <div class="shoppingItemContentImg">
            <img src="../../assets/images/data/shopping/1.png" alt="">
          </div>
          <div class="shoppingItemNoEdit" v-if="editTab">
            <p>可组合3色收纳抽屉</p>
            <p>颜色2，12x20mm</p>
            <p><span class="col">￥38</span> <span>x2</span></p>
          </div>
          <div class="shoppingItemContentNum" v-if="!editTab">
            ￥38
          </div>
          <div class="shoppingItemContentData" v-if="!editTab">
            <p @click="JoinShoppingCart()">已选已选择：颜色3，12x20mm <i class="shoppingicon shoppinbot"></i></p>
            <p>
              <i class="shoppingicon iconreduce"></i>
              <span>1</span>
              <i class="shoppingicon iconAdd"></i>
            </p>
          </div>
        </div>
      </div>
      <div class="shoppingItem">
        <div class="shoppingItemSelect" @click="selectAct">
          <div v-if="!select">
            <img src="../../assets/images/icon/select.png" alt="">
          </div>
          <div v-if="select">
            <img src="../../assets/images/icon/selectAct.png" alt="">
          </div>
        </div>
        <div class="shoppingItemContent">
          <div class="shoppingItemContentImg">
            <img src="../../assets/images/data/shopping/1.png" alt="">
          </div>
          <div class="shoppingItemNoEdit" v-if="editTab">
            <p>可组合3色收纳抽屉</p>
            <p>颜色2，12x20mm</p>
            <p><span class="col">￥38</span> <span>x2</span></p>
          </div>
          <div class="shoppingItemContentNum" v-if="!editTab">
            ￥38
          </div>
          <div class="shoppingItemContentData" v-if="!editTab">
            <p @click="JoinShoppingCart()">已选已选择：颜色3，12x20mm <i class="shoppingicon shoppinbot"></i></p>
            <p>
              <i class="shoppingicon iconreduce"></i>
              <span>1</span>
              <i class="shoppingicon iconAdd"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="buyBtn">
      <div class="buyBtnAll">
        <div v-if="!select">
          <img src="../../assets/images/icon/select.png" alt="">
        </div>
        <div v-if="select">
          <img src="../../assets/images/icon/selectAct.png" alt="">
        </div>
        <p>全选</p>
      </div>
      <p class="buyTotal">总价：￥114</p>
      <div class="buyBtnBox" v-if="editTab" @click="goTrueOrdeer">
        买咯
      </div>
      <div class="buyBtnBoxDel" v-if="!editTab">
        删除
      </div>
    </div>
    <ShoppingCart :showShoppingCart="showShoppingCart" v-on:ClickHideShoppingCart="ClickHideShoppingCart"></ShoppingCart>
  </div>
</template>

<script>
import ShoppingCart from "@/base/shoppingCart/shoppingCart"; // 购物车

export default {
  name: "shopping",
  data() {
    return {
      editTab: true,
      select: true,
      showShoppingCart: false
    };
  },
  methods: {
    editTabBox() {
      this.editTab = !this.editTab;
    },
    selectAct() {
      this.select = !this.select;
    },
    JoinShoppingCart() {
      this.showShoppingCart = true;
    },
    ClickHideShoppingCart(hideCartBox) {
      // 隐藏编辑
      this.showShoppingCart = hideCartBox;
    },
    goTrueOrdeer() {
      this.$router.push({
        path: "/TrueOrder"
      });
    }
  },
  components: {
    ShoppingCart
  }
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
.buyBtn {
  position: fixed;
  bottom: 97px;
  left: 0;
  width: 100%;
  height: 88px;
  background: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  .buyBtnAll {
    div {
      width: 28px;
      height: 28px;
    }
    display: flex;
    align-items: center;
    p {
      font-size: 28px;
      color: #000000;
      letter-spacing: 1px;
      margin-left: 20px;
    }
  }
  .buyTotal {
    font-size: 28px;
    color: #60d4ba;
    letter-spacing: 1px;
  }
  .buyBtnBox {
    width: 296px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    background: #60d4ba;
    font-size: 28px;
    color: #ffffff;
    letter-spacing: 1px;
    text-align: center;
    border-radius: 50px;
  }
  .buyBtnBoxDel {
    width: 296px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    background: red;
    font-size: 28px;
    color: #ffffff;
    letter-spacing: 1px;
    text-align: center;
    border-radius: 50px;
  }
}
.shoppingList {
  padding: 0 30px 200px 10px;
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
