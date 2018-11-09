<template>
  <div class="useCouponBox">
    <div class="useCouponBoxList">
      <div class="useCouponBoxItem" @click="TabUseSel">
        <div class="useCouponBoxItemNum">
          <p>￥<span>10</span></p>
          <p>满99使用</p>
        </div>
        <div class="useCouponBoxItemConter">
          <p>一只商店新人败家券</p>
          <p>全场通用</p>
          <p>有效期至：2018-11-02</p>
        </div>
        <div class="useCouponBoxItemSel">
          <div v-if="!useSelAct">
            <img src="../../assets/images/icon/sel.png" alt="">
          </div>
          <div v-if="useSelAct">
            <img src="../../assets/images/icon/selectAct.png" alt="">
          </div>
        </div>
      </div>
      <div class="useCouponBoxItem" @click="TabUseSel">
        <div class="useCouponBoxItemNum">
          <p>￥<span>10</span></p>
          <p>满99使用</p>
        </div>
        <div class="useCouponBoxItemConter">
          <p>一只商店新人败家券</p>
          <p>全场通用</p>
          <p>有效期至：2018-11-02</p>
        </div>
        <div class="useCouponBoxItemSel">
          <div v-if="!useSelAct">
            <img src="../../assets/images/icon/sel.png" alt="">
          </div>
          <div v-if="useSelAct">
            <img src="../../assets/images/icon/selectAct.png" alt="">
          </div>
        </div>
      </div>
      <div class="useCouponBoxItem" @click="TabUseSel">
        <div class="useCouponBoxItemNum">
          <p>￥<span>10</span></p>
          <p>满99使用</p>
        </div>
        <div class="useCouponBoxItemConter">
          <p>一只商店新人败家券</p>
          <p>全场通用</p>
          <p>有效期至：2018-11-02</p>
        </div>
        <div class="useCouponBoxItemSel">
          <div v-if="!useSelAct">
            <img src="../../assets/images/icon/sel.png" alt="">
          </div>
          <div v-if="useSelAct">
            <img src="../../assets/images/icon/selectAct.png" alt="">
          </div>
        </div>
      </div>
      <div class="useCouponBoxItem" @click="TabUseSel">
        <div class="useCouponBoxItemNum">
          <p>￥<span>10</span></p>
          <p>满99使用</p>
        </div>
        <div class="useCouponBoxItemConter">
          <p>一只商店新人败家券</p>
          <p>全场通用</p>
          <p>有效期至：2018-11-02</p>
        </div>
        <div class="useCouponBoxItemSel">
          <div v-if="!useSelAct">
            <img src="../../assets/images/icon/sel.png" alt="">
          </div>
          <div v-if="useSelAct">
            <img src="../../assets/images/icon/selectAct.png" alt="">
          </div>
        </div>
      </div>
      <div class="useCouponBoxItem" @click="TabUseSel">
        <div class="useCouponBoxItemNum">
          <p>￥<span>10</span></p>
          <p>满99使用</p>
        </div>
        <div class="useCouponBoxItemConter">
          <p>一只商店新人败家券</p>
          <p>全场通用</p>
          <p>有效期至：2018-11-02</p>
        </div>
        <div class="useCouponBoxItemSel">
          <div v-if="!useSelAct">
            <img src="../../assets/images/icon/sel.png" alt="">
          </div>
          <div v-if="useSelAct">
            <img src="../../assets/images/icon/selectAct.png" alt="">
          </div>
        </div>
      </div>
      <div class="useCouponBoxItem" @click="TabUseSel">
        <div class="useCouponBoxItemNum">
          <p>￥<span>10</span></p>
          <p>满99使用</p>
        </div>
        <div class="useCouponBoxItemConter">
          <p>一只商店新人败家券</p>
          <p>全场通用</p>
          <p>有效期至：2018-11-02</p>
        </div>
        <div class="useCouponBoxItemSel">
          <div v-if="!useSelAct">
            <img src="../../assets/images/icon/sel.png" alt="">
          </div>
          <div v-if="useSelAct">
            <img src="../../assets/images/icon/selectAct.png" alt="">
          </div>
        </div>
      </div>
      <div class="useCouponBoxItem" @click="TabUseSel">
        <div class="useCouponBoxItemNum">
          <p>￥<span>10</span></p>
          <p>满99使用</p>
        </div>
        <div class="useCouponBoxItemConter">
          <p>一只商店新人败家券</p>
          <p>全场通用</p>
          <p>有效期至：2018-11-02</p>
        </div>
        <div class="useCouponBoxItemSel">
          <div v-if="!useSelAct">
            <img src="../../assets/images/icon/sel.png" alt="">
          </div>
          <div v-if="useSelAct">
            <img src="../../assets/images/icon/selectAct.png" alt="">
          </div>
        </div>
      </div>
      <div class="useCouponBoxItem" @click="TabUseSel">
        <div class="useCouponBoxItemNum">
          <p>￥<span>10</span></p>
          <p>满99使用</p>
        </div>
        <div class="useCouponBoxItemConter">
          <p>一只商店新人败家券</p>
          <p>全场通用</p>
          <p>有效期至：2018-11-02</p>
        </div>
        <div class="useCouponBoxItemSel">
          <div v-if="!useSelAct">
            <img src="../../assets/images/icon/sel.png" alt="">
          </div>
          <div v-if="useSelAct">
            <img src="../../assets/images/icon/selectAct.png" alt="">
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
      useSelAct: true
    };
  },
  methods: {
    TabUseSel() {
      this.useSelAct = !this.useSelAct;
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
