<template>
  <div class="myOrder">
    <div class="OrderTab">
      <span :class="{OrderTabAct: myOrderTab == 0}" @click="clickOrderTab(0)">全部</span>
      <span :class="{OrderTabAct: myOrderTab == 1}" @click="clickOrderTab(1)">待付款</span>
      <span :class="{OrderTabAct: myOrderTab == 2}" @click="clickOrderTab(2)">待发货</span>
      <span :class="{OrderTabAct: myOrderTab == 3}" @click="clickOrderTab(3)">待收货</span>
      <span :class="{OrderTabAct: myOrderTab == 4}" @click="clickOrderTab(4)">待评价</span>
    </div>
    <div class="OrderList">
      <div class='OrderList-title' v-if="allinfo.items.length === 0">- 暂无订单 -</div>
      <div
        class="OrderItem"
        @click="goOrderDetails()"
        v-for="(item, index) in allinfo.items"
        :key="index"
      >
        <div class="OrderId">订单号：{{item.id}}</div>
        <div class="OrderConter" v-for="(line, ind) in item.lineItems" :key="ind">
          <div class="OrderConterImg">
            <img :src="line.mainImg | formatJpg" alt />
          </div>
          <div class="OrderConterTitle">
            <p>{{line.name}}</p>
            <p>{{line.skuName}}</p>
            <p>
              <span>￥{{line.price | formatFee}}</span>
              <span>X {{line.quantity}}</span>
            </p>
          </div>
        </div>
        <div class="OrderAmount">
          应付总额：¥{{item.paymentFee | formatFee}}
          <span>（含运费¥{{item.postage | formatFee}}）</span>
        </div>
        <div class="OrderBtnBox">
          <div class="OrderBtn OrderBtnAct" v-if="item.status == 0">去支付</div>
          <div class="OrderBtn" v-if="item.status == 300">到哪了</div>
          <div class="OrderBtn OrderBtnAct" v-if="item.status == 300">收到了</div>
          <div class="OrderBtn OrderBtnAct" v-if="item.status == 400">说两句</div>
        </div>
      </div>
      <!-- <div class="OrderItem" @click="goOrderDetails()">
        <div class="OrderId">订单号：2019328549904</div>
        <div class="OrderConter">
          <div class="OrderConterImg">
            <img src="../../assets/images/data/shopping/1.png" alt />
          </div>
          <div class="OrderConterTitle">
            <p>可组合3色收纳抽屉</p>
            <p>颜色2，12x20mm</p>
            <p>
              <span>￥36</span>
              <span>X 2</span>
            </p>
          </div>
        </div>
        <div class="OrderAmount">
          应付总额：¥206
          <span>（含运费¥6）</span>
        </div>
        <div class="OrderBtnBox">
          <div class="OrderBtn">到哪了</div>
          <div class="OrderBtn OrderBtnAct">收到了</div>
          <div class="OrderBtn OrderBtnAct">
            说两句
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import { getOrders } from "@/api/user/user";
import { configData } from "@/utils/config";

export default {
  name: "myOrder",
  data() {
    return {
      myOrderTab: "",
      type: "",
      allinfo: {
        items: [],
        page: 1,
        records: 1,
        rows: 0,
        total: 1
      } //订单列表
    };
  },
  created() {
    this.myOrderTab = this.$route.query.type;
  },
  mounted() {
    this.typeList();
    this.getOrders();
  },
  // watch: {
  //   $route(newValue, oldValue) {}
  // },
  methods: {
    // 获取订单列表
    getOrders() {
      // this.type
      getOrders(this.type)
        .then(({ code, data, message }) => {
          if (code === configData.codeState) {
            console.log("订单列表=====================");
            console.log(data);
            this.allinfo = data;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    clickOrderTab(val) {
      this.myOrderTab = val;
      this.typeList();
      this.getOrders();
    },
    // 判断类型
    typeList() {
      if (this.myOrderTab === 0) {
        this.type = "";
      } else if (this.myOrderTab === 1) {
        this.type = "st=0&";
      } else if (this.myOrderTab === 2) {
        this.type = "st=200&";
      } else if (this.myOrderTab === 3) {
        this.type = "st=300&";
      } else if (this.myOrderTab === 4) {
        this.type = "st=400&";
      }
    },
    goOrderDetails() {
      this.$router.push({
        path: "/OrderDetails"
      });
    }
  }
};
</script>

<style lang="scss">
.myOrder {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  overflow-y: auto;
  padding-top: 88px;
  box-sizing: border-box;
  .OrderTab {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 88px;
    line-height: 88px;
    background: #fff;
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    span {
      display: block;
      width: 20%;
      text-align: center;
      &.OrderTabAct {
        border-bottom: 4px solid #60d4ba;
        color: #60d4ba;
      }
    }
  }
  .OrderList {
    .OrderList-title {
      height: 200px;
      line-height: 200px;
      text-align: center;
      color: #ccc;
    }
    .OrderItem {
      background: #fff;
      padding: 30px;
      margin-top: 20px;
      .OrderId {
        color: #999;
        border-bottom: 2px solid #dcdcdc;
        height: 40px;
        line-height: 40px;
      }
      .OrderConter {
        display: flex;
        justify-content: space-between;
        padding: 30px 0;
        border-bottom: 2px solid #dcdcdc;
        .OrderConterImg {
          width: 136px;
          height: 136px;
        }
        .OrderConterTitle {
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
      .OrderAmount {
        font-size: 28px;
        color: #60d4ba;
        letter-spacing: 1.33px;
        margin: 20px 0;
        span {
          font-size: 20px;
          color: #101010;
        }
      }
      .OrderBtnBox {
        display: flex;
        justify-content: flex-end;
        margin-top: 30px;
        .OrderBtn {
          width: 200px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          border: 2px solid #60d4ba;
          border-radius: 100px;
          margin-left: 30px;
          color: #60d4ba;
        }
        .OrderBtnAct {
          background: #60d4ba;
          color: #fff;
        }
      }
    }
  }
}
</style>
