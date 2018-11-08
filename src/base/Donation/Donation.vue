<template>
  <div v-if="showDonation" class="Donation">
    <div class="DonationBox">
      <i class="CartClose" @click="hideDonation()"></i>
      <div class="DonationConter">
        <p class="DonationConterNum">¥<span>3</span></p>
        <div class="DonationConterAdd">
          <i class="shoppingicon iconreduce"></i>
          <span>1</span>
          <i class="shoppingicon iconAdd"></i>
        </div>
        <div class="RemainingNum">您还有铃铛12个，<p @click="goBellObtain">余额不够捐？去获取！ <i class="myicon righticon"></i></p>
        </div>
        <div class="shoppingTrueBtn" @click="hideDonation()">
          确认
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Donation",
  props: ["showDonation"],
  data() {
    return {
      hideState: false
    };
  },
  methods: {
    hideDonation() {
      this.$emit("ClickHideDonation", this.hideState);
    },
    goBellObtain() {
      this.$router.push({
        path: "/BellObtain"
      });
    }
  }
};
</script>

<style lang="scss">
.Donation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  align-items: flex-end;
  .DonationBox {
    width: 100%;
    height: 568px;
    padding: 20px 0;
    box-sizing: border-box;
    background: #fff;
    .DonationConter {
      clear: both;
      padding: 0 30px;
      .DonationConterNum {
        font-size: 36px;
        color: #60d4ba;
        letter-spacing: 5.33px;
        text-align: center;
        margin-bottom: 48px;
        span {
          font-size: 96px;
        }
      }
      .DonationConterAdd {
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
      .RemainingNum {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 42px 0;
        font-size: 22px;
        color: #999;
        letter-spacing: 2.06px;
        line-height: 30px;
        p {
          display: flex;
          align-items: center;
          color: #2a2a2a;
          .righticon {
            width: 14px;
            height: 26px;
            margin-left: 20px;
          }
        }
      }
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
