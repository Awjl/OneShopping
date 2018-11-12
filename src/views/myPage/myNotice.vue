<template>
  <div class="myNotice">
    <div class="myNoticeBox">
      <div class="myNoticeBoxItem" @click="goNoticeList">
        <img src="../../assets/images/icon/notIcon.png" alt="">
        <p>通知</p>
      </div>
      <div class="myNoticeBoxItem" @click="goLogisticsList">
        <img src="../../assets/images/icon/logistics.png" alt="">
        <p>物流信息</p>
      </div>
    </div>
    <div class="CustomerList">
      <div class="CustomerItem">
        <div class="CustomerItemImg">
          <img src="../../assets/images/data/my/my.png" alt="">
        </div>
        <div class="CustomerItemConter">
          <p>客服001</p>
          <p>您好，很高兴为您服务！</p>
        </div>
      </div>
      <div class="CustomerItem">
        <div class="CustomerItemImg">
          <img src="../../assets/images/data/my/my.png" alt="">
        </div>
        <div class="CustomerItemConter">
          <p>客服001</p>
          <p>您好，很高兴为您服务！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myNotice",
  methods: {
    goNoticeList() {
      this.$router.push({
        path: "/NoticeList"
      });
    },
    goLogisticsList() {
      this.$router.push({
        path: "/LogisticsList"
      });
    }
  }
};
</script>

<style lang="scss">
.myNotice {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  .myNoticeBox {
    background: #fff;
    display: flex;
    padding: 20px 200px;
    justify-content: space-between;
    .myNoticeBoxItem {
      text-align: center;
      img {
        width: 80px;
      }
      p {
        font-size: 28px;
        color: #222222;
        letter-spacing: 1.56px;
        margin-top: 10px;
      }
    }
  }
  .CustomerList {
    margin-top: 20px;
    background: #fff;
    .CustomerItem {
      padding: 20px 30px;
      display: flex;
      align-items: center;
      border-bottom: 2px solid #f2f2f2;
      .CustomerItemImg {
        width: 88px;
        height: 88px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20px;
      }
      .CustomerItemConter {
        font-size: 24px;
        color: #999999;
        p:nth-child(1) {
          font-size: 28px;
          color: #222222;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
