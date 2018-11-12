<template>
  <div class="logisticsList">
    <div class="noticeItem">
      <div class="noticeItemName">
        <p>订单派送中</p>
        <p class="tiem">今天 14:12</p>
      </div>
      <div class="noticeItemConter">
        <div class="noticeItemConterImg">
          <img src="../../assets/images/data/shopping/1.png" alt="">
        </div>
        <div class="noticeItemConterT">
          <p>可组合3色收纳抽屉</p>
          <p>颜色2，12x20mm</p>
          <p><span>￥36</span> <span>X2</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logisticsList"
};
</script>

<style lang="scss">
.logisticsList {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  overflow-y: auto;
  .noticeItem {
    background: #fff;
    padding: 0 30px;
    margin-bottom: 20px;
    .noticeItemName {
      height: 80px;
      font-size: 28px;
      color: #222222;
      letter-spacing: 1px;
      border-bottom: 2px solid #dcdcdc;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 20px;
      box-sizing: border-box;
      .tiem {
        font-size: 20px;
        color: #999999;
      }
    }
    .noticeItemConter {
      padding: 30px 0;
      display: flex;
      .noticeItemConterImg {
        width: 180px;
      }
      .noticeItemConterT {
        margin-left: 20px;
        color: #999;
        font-size: 30px;
        width: 600px;
        p:nth-child(1) {
          font-size: 28px;
          color: #222222;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }
        p:nth-child(2) {
          font-size: 24px;
          color: #999999;
          letter-spacing: 1px;
          margin-bottom: 40px;
        }
        p:nth-child(3) {
          display: flex;
          justify-content: space-between;
          font-size: 24px;
          color: #222222;
          letter-spacing: 0.67px;
          span:nth-child(1) {
            font-size: 28px;
            color: #222222;
            letter-spacing: 0.78px;
          }
        }
      }
    }
  }
}
</style>
