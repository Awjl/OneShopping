<template>
  <div class="PayOrder">
    <div class="PayOrderBox">
      <div class="PayNum">
        <p>￥<span>196</span></p>
        <p>订单金额</p>
      </div>
      <div class="PayOrderNum">
        订单号：2102193288392
      </div>
    </div>
    <div class="PayBtn">
      使用微信支付
    </div>
  </div>
</template>

<script>
export default {
  name: "payOrder"
};
</script>

<style lang="scss">
.PayOrder {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #f2f2f2;
  .PayOrderBox {
    background: #fff;
    .PayNum {
      padding: 90px 0;
      text-align: center;
      p:nth-child(1) {
        font-size: 36px;
        color: #60d4ba;
        span {
          font-size: 96px;
        }
      }
      p:nth-child(2) {
        font-size: 24px;
        color: #999999;
        margin-top: 30px;
      }
    }
    .PayOrderNum {
      height: 99px;
      margin: 0 30px;
      text-align: center;
      line-height: 99px;
      border-top: 2px solid #eaeaea;
      font-size: 28px;
      color: #222222;
      letter-spacing: 0.58px;
    }
  }
  .PayBtn {
    margin: 80px 60px 0;
    height: 88px;
    background: #60d4ba;
    text-align: center;
    line-height: 88px;
    color: #fff;
    border-radius: 100px;
    font-size: 28px;
  }
}
</style>
