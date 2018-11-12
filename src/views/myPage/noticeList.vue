<template>
  <div class="noticeList">
    <div class="noticeItem">
      <div class="noticeItemName">
        你有3个铃铛已入账
      </div>
      <div class="noticeItemConter">
        <div class="noticeItemConterImg">
          <img src="../../assets/images/data/shopping/1.png" alt="">
        </div>
        <div class="noticeItemConterT">
          <p>你邀请的好友给你带来的收益</p>
          <p>请立即领取</p>
        </div>
      </div>
    </div>
    <div class="noticeItem">
      <div class="noticeItemName">
        你有3个铃铛已入账
      </div>
      <div class="noticeItemConter">
        <div class="noticeItemConterImg">
          <img src="../../assets/images/data/shopping/1.png" alt="">
        </div>
        <div class="noticeItemConterT">
          <p>你邀请的好友给你带来的收益</p>
          <p>请立即领取</p>
        </div>
      </div>
    </div>
    <div class="noticeItem">
      <div class="noticeItemName">
        你有3个铃铛已入账
      </div>
      <div class="noticeItemConter">
        <div class="noticeItemConterImg">
          <img src="../../assets/images/data/shopping/1.png" alt="">
        </div>
        <div class="noticeItemConterT">
          <p>你邀请的好友给你带来的收益</p>
          <p>请立即领取</p>
        </div>
      </div>
    </div>
    <div class="noticeItem">
      <div class="noticeItemName">
        你有3个铃铛已入账
      </div>
      <div class="noticeItemConter">
        <div class="noticeItemConterImg">
          <img src="../../assets/images/data/shopping/1.png" alt="">
        </div>
        <div class="noticeItemConterT">
          <p>你邀请的好友给你带来的收益</p>
          <p>请立即领取</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "noticeList"
};
</script>

<style lang="scss">
.noticeList {
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
      line-height: 80px;
      font-size: 28px;
      color: #222222;
      letter-spacing: 1px;
      border-bottom: 2px solid #dcdcdc;
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
        p:nth-child(1) {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
