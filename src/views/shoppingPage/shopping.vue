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
    <div class="shoppingList" v-if="shopinfo.lineItems.length > 0">
      <div class="shoppingItem" v-for="(item, index) in shopinfo.lineItems[0].value" :key="index">
        <div class="shoppingItemSelect" @click="selectAct(index)">
          <div v-if="select.indexOf(index) === -1">
            <img src="../../assets/images/icon/select.png" alt />
          </div>
          <div v-if="select.indexOf(index) !== -1">
            <img src="../../assets/images/icon/selectAct.png" alt />
          </div>
        </div>
        <div class="shoppingItemContent">
          <div class="shoppingItemContentImg">
            <img :src="item.mainImg | formatJpg" alt />
          </div>
          <div class="shoppingItemNoEdit">
            <p>{{item.catalogName}}</p>
            <p>{{item.name}}</p>
            <p>
              <span class="col">￥{{item.price | formatFee}}</span>
              <span>x{{item.quantity}}</span>
            </p>
          </div>
          <!-- <div class="shoppingItemContentNum" v-if="!editTab">
            ￥38
          </div>-->
          <!-- <div class="shoppingItemContentData" v-if="!editTab">
            <p @click="JoinShoppingCart()">已选已选择：颜色3，12x20mm <i class="shoppingicon shoppinbot"></i></p>
            <p>
              <i class="shoppingicon iconreduce"></i>
              <span>1</span>
              <i class="shoppingicon iconAdd"></i>
            </p>
          </div>-->
        </div>
      </div>
    </div>
    <div class="buyBtn">
      <div class="buyBtnAll" @click="AllNone">
        <div v-if="!selectAll">
          <img src="../../assets/images/icon/select.png" alt />
        </div>
        <div v-if="selectAll">
          <img src="../../assets/images/icon/selectAct.png" alt />
        </div>
        <p>全选</p>
      </div>
      <p class="buyTotal">总价：{{fee.fee | formatFee}}</p>
      <div class="buyBtnBox" v-if="editTab" @click="goTrueOrdeer">买咯</div>
      <div class="buyBtnBoxDel" v-if="!editTab" @click="deleteCard">删除</div>
    </div>
    <!-- <ShoppingCart :showShoppingCart="showShoppingCart" v-on:ClickHideShoppingCart="ClickHideShoppingCart"></ShoppingCart> -->
  </div>
</template>

<script>
// import ShoppingCart from "@/base/shoppingCart/shoppingCart"; // 购物车
import { getQuotes, setQuotes, removeQuotes } from "@/api/home/home";
import { configData } from "@/utils/config";

export default {
  name: "shopping",
  data() {
    return {
      editTab: true,
      select: [],
      selectAll: false,
      // selectAct:[],
      showShoppingCart: false,
      userData: {
        utk: "",
        uid: "",
        nn: "",
        av: "",
        wxuid: ""
      },
      shopinfo: {
        lineItems: []
      },
      fee: {
        fee: 0
      }
    };
  },
  created() {
    this.userData = JSON.parse(window.sessionStorage.getItem("userData"))
      ? JSON.parse(window.sessionStorage.getItem("userData"))
      : "";
  },
  mounted() {
    if (this.userData.uid) {
      this.getQuotes();
    }
  },
  methods: {
    //获取购物车列表
    getQuotes() {
      getQuotes()
        .then(({ code, data, message }) => {
          if (code === configData.codeState) {
            console.log("购物车=====================");
            console.log(data);
            Object.assign(this.shopinfo, data);
            console.log(this.shopinfo);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    editTabBox() {
      this.editTab = !this.editTab;
    },
    selectAct(index) {
      if (this.select.indexOf(index) !== -1) {
        this.select.splice(this.select.indexOf(index), 1);
      } else {
        this.select.push(index);
        this.select = Array.from(new Set(this.select));
      }
      this.computeFee();
    },
    // 全选全部选
    AllNone() {
      if (this.selectAll) {
        this.select = [];
      } else {
        this.select = [];
        for (let i = 0; i < this.shopinfo.lineItems[0].value.length; i += 1) {
          this.select.push(i);
        }
      }
      this.computeFee();
    },
    //计算
    computeFee() {
      let that = this;
      let items = [];
      this.select.forEach(item => {
        items.push(that.shopinfo.lineItems[0].value[item]);
      });
      if (this.select.length === this.shopinfo.lineItems[0].value.length) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
      let data = {
        //下单前提交购物车的信息
        items: [
          {
            key: {
              id:
                this.shopinfo.lineItems.length > 0
                  ? this.shopinfo.lineItems[0].key.id
                  : 0
            },
            value: items
          }
        ]
      };
      if (items.length == 0) {
        //计算费用
        this.fee.fee = 0;
      } else {
        this.setQuotes(this.shopinfo.id, data);
      }
    },
    // setQuotes
    setQuotes(id, data) {
      setQuotes(id, data)
        .then(({ code, data, message }) => {
          if (code === configData.codeState) {
            console.log("计算=====================");
            console.log(data);
            Object.assign(this.fee, data);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteCard() {
      for (let i = 0; i < this.select.length; i += 1) {
        this.removeQuotes(this.shopinfo.lineItems[0].value[i].id);
      }
      this.getQuotes();
    },
    async removeQuotes(itemId) {
      await removeQuotes(this.shopinfo.id, itemId)
        .then(({ code, data, message }) => {
          if (code === configData.codeState) {
            console.log("删除成功=====================");
            console.log(data);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    goTrueOrdeer() {
      this.$router.push({
        path: "/TrueOrder"
      });
    }
  },
  components: {
    // ShoppingCart
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
