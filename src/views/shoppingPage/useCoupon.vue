<template>
  <div class="useCouponBox">
    <div class="useCouponBoxList">
      <div
        class="useCouponBoxItem"
        @click="TabUseSel(item.id, item)"
        v-for="(item, index) in couponList"
        :key="index"
      >
        <div class="useCouponBoxItemNum">
          <p>
            ￥
            <span>{{item.fee | formatFee1}}</span>
          </p>
          <p>{{item.title}}</p>
        </div>
        <div class="useCouponBoxItemConter">
          <p>{{item.name}}</p>
          <p>{{item.title}}</p>
          <p>有效期至：{{item.effectTime | getData1}}</p>
        </div>
        <div class="useCouponBoxItemSel" v-if="orderType === 'order'">
          <div v-if="useSelAct !== item.id">
            <img src="../../assets/images/icon/sel.png" alt />
          </div>
          <div v-if="useSelAct === item.id">
            <img src="../../assets/images/icon/selectAct.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "useCoupon",
  data() {
    return {
      useSelAct: "",
      orderType: "",
      couponList: []
    };
  },
  created() {
    this.orderType = this.$route.query.type;
  },
  mounted() {
    if (this.orderType === "order") {
      // this.couponList = JSON.parse(window.sessionStorage.getItem("prepareOrder"));
      console.log(
        JSON.parse(window.sessionStorage.getItem("prepareOrder")).lineItems[0]
          .key.myCoupons
      );
      this.couponList = JSON.parse(
        window.sessionStorage.getItem("prepareOrder")
      ).lineItems[0].key.myCoupons;
    }
    console.log(this.couponList, "优惠券列表");
  },
  methods: {
    TabUseSel(num, coupon) {
      this.useSelAct = num;
      // localStorage.coupon
      let stringList = JSON.stringify(coupon);
      console.log(stringList);
      window.sessionStorage.setItem("coupon", stringList);
      this.$router.push({
        path: "/TrueOrder"
      });
    }
  }
};
</script>

<style lang="scss">
.useCouponBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  overflow-y: auto;
  .useCouponBoxList {
    padding: 30px;
    .useCouponBoxItem {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .useCouponBoxItemNum {
        width: 212px;
        text-align: center;
        p:nth-child(1) {
          font-size: 30px;
          color: #60d4ba;
          span {
            font-size: 80px;
            color: #60d4ba;
            letter-spacing: 2.22px;
          }
        }
        p:nth-child(2) {
          font-size: 20px;
          color: #999999;
          margin-top: 10px;
        }
      }
      .useCouponBoxItemConter {
        margin-left: 30px;
        font-size: 20px;
        color: #999999;
        line-height: 35px;
        p:nth-child(1) {
          font-size: 30px;
          color: #60d4ba;
          letter-spacing: 0.62px;
          margin-bottom: 10px;
        }
      }
      .useCouponBoxItemSel {
        margin-left: 100px;
        div {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}
</style>
