<template>
  <div class="useBell">
    <div class="useBellBox">
      <p class="BellNum">您有铃铛 28 个，本单最多可使用 20 个</p>
      <p class="BellTitle">
        选择数量
      </p>
      <div class="useBellAdd">
        <i class="shoppingicon iconreduce"></i>
        <span>1</span>
        <i class="shoppingicon iconAdd"></i>
      </div>
      <p class="col">可抵现金 20 元</p>
    </div>
    <div class="useBellBtn">
      确定
    </div>
  </div>
</template>

<script>
export default {
  name: "useBell"
};
</script>

<style lang="scss">
.useBell {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  .useBellBox {
    margin-top: 30px;
    padding: 30px;
    background: #fff;
    .BellNum {
      font-size: 28px;
      color: #222222;
    }
    .BellTitle {
      font-size: 24px;
      color: #999999;
      margin-top: 50px;
    }
    .useBellAdd {
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
    .col {
      font-size: 20px;
      color: #ed6969;
      letter-spacing: 0.42px;
      text-align: center;
      margin-top: 10px;
    }
  }
  .useBellBtn {
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
