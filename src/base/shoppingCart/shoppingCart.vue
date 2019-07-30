<template>
  <div class="shoppingCart" v-if="showShoppingCart">
    <div class="shoppingCartBox">
      <div class="shoppingCartBoxImg">
        <img :src="skuImg | formatImg412x180" alt v-if="skuImg" />
        <img :src="ShoppingCartData.skuImg | formatImg412x180" alt class="form-pic center" v-else />
      </div>
      <div class="shoppingCartClose">
        <i class="CartClose" @click="hideShoppingCart()"></i>
      </div>
      <div class="shoppingCartPrice">¥{{skuPrice | formatFee}}</div>
      <div class="shoList">
        <div v-for="(prop,index) in ShoppingCartData.catalog" :key="index">
          <p class="shoListTitle">{{prop.name.name}}</p>
          <div class="shoListItem">
            <span
              v-for="(pv,itmeindex) in prop.values"
              :key="itmeindex"
              :class="{shoListItemAct: itmeindex == typeindex}"
              @click="selectLeabe(itmeindex, pv.id)"
            >{{pv.name}}</span>
          </div>
        </div>

        <p class="shoListTitle">选择数量</p>
        <div class="shoListNum">
          <i class="shoppingicon iconreduce" @click="reduceCartNum"></i>
          <span>{{selectnum}}</span>
          <i class="shoppingicon iconAdd" @click="addCartNum"></i>
        </div>
      </div>
      <div class="shoppingTrue">
        <div class="shoppingTrueBtn" @click="sureShoppingCart()">确认</div>
      </div>
    </div>
    <Permission :showBox="showBox" @childByValue="childByValue" @toBuy="toBuy"></Permission>
  </div>
</template>

<script>
import { Toast } from "we-vue";
import { getSkus, postshopping, postPrepare } from "@/api/home/home";
import { configData } from "@/utils/config";
import Permission from "@/base/Permission/permission"; // 权限提醒

export default {
  name: "shoppingCart",
  props: ["showShoppingCart", "ShoppingCartData"],
  data() {
    return {
      showBox: false,
      hideCartBox: false,
      typeindex: null,
      skuImg: null,
      selectnum: 1, //选择数量
      skuPrice: 0,
      skuId: "",
      arr: [] //选择id组合
    };
  },
  components: {
    Permission
  },
  created() {
    console.log(this.ShoppingCartData, "选项卡");
  },
  methods: {
    // 获取SKU
    _getSkus(pid, arr) {
      getSkus(pid, arr)
        .then(res => {
          if (res.code === configData.codeState) {
            this.skuPrice = res.data.price; // 价格
            this.skuImg = res.data.mainImg; // 图片
            this.skuId = res.data.id; // skuid
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    childByValue(childValue) {
      // 隐藏权限框
      this.showBox = childValue;
      // 保存到购物车
      this._postshopping();
    },
    // 去购买
    toBuy(childValue) {
      this.showBox = childValue;
      this._postPrepare();
    },
    // 添加至购物车
    _postshopping() {
      let data = {
        //选取的商品信息
        items: [
          {
            quantity: this.selectnum,
            skuId: this.skuId
          }
        ],
        shopId: this.ShoppingCartData.shopid
      };
      let that = this;
      postshopping(data)
        .then(res => {
          if (res.code === configData.codeState) {
            // console.log("添加成功");
            that.$emit("successCart", true);
          } else {
            that.$emit("successCart", false);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 立即购买
    _postPrepare() {
      let data = {
        //选取的商品信息
        items: [
          {
            quantity: this.selectnum,
            skuId: this.skuId
          }
        ],
        shopId: this.ShoppingCartData.shopid
      };
      let that = this;
      postPrepare(this.ShoppingCartData.pid, data)
        .then(res => {
          if (res.code === configData.codeState) {
            let mydata = JSON.stringify(res.data);
            window.sessionStorage.setItem("prepareOrder", mydata);
            // localStorage.prepareOrder = mydata;
            that.$router.push({
              path: "/TrueOrder"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    selectLeabe(itmeindex, id) {
      this.arr = [];
      if (itmeindex != this.typeindex) {
        this.typeindex = itmeindex;
        this.arr.push(id.toString());
        if (this.arr.length == this.ShoppingCartData.catalog.length) {
          this._getSkus(this.ShoppingCartData.pid, this.arr.join());
        }
      }
    },
    addCartNum() {
      //点击加减数据
      var selectnum = this.selectnum;
      this.selectnum++;
    },
    reduceCartNum() {
      //点击加减数据
      var selectnum = this.selectnum;
      if (selectnum <= 1) {
        return false;
      }
      this.selectnum--;
    },
    hideShoppingCart() {
      this.$emit("ClickHideShoppingCart", this.hideCartBox);
    },
    sureShoppingCart() {
      console.log("点击事件");
      if (!this.skuId) {
        Toast.text("请选择商品属性");
        return;
      }
      if (this.ShoppingCartData.type == "cart") {
        this._postshopping();
      } else {
        this.showBox = true;
        //   // this._postPrepare();
      }
      // this.$emit("ClickHideShoppingCart", this.hideCartBox);
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
  z-index: 999;
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
