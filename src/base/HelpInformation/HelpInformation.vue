<template>
  <div class="HelpInformation">
    <div class="HelpInformationTitle">求助信息</div>
    <div class="HelpInformationTab">
      <p class="HelpAct"><img src="../../assets/images/icon/money.png" alt=""> 筹钱</p>
      <p><img src="../../assets/images/icon/article.png" alt="">筹物</p>
    </div>
    <div class="HelpInforItemInp">
      <label for="">目标金额</label>
      <input type="text" placeholder="请输入您的真实姓名" class="BasicInp">
    </div>
    <div class="HelpInforItemTex">
      <label for="">募捐原因</label>
      <textarea placeholder="请输入募捐原因"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpInformation"
};
</script>

<style lang="scss">
.HelpInformation {
  padding: 0 30px;
  .HelpInformationTitle {
    font-size: 28px;
    color: #222222;
    letter-spacing: 1.56px;
    margin-bottom: 40px;
    font-weight: bold;
  }
  .HelpInformationTab {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    margin-bottom: 60px;
    p {
      width: 285px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px dashed #979797;
      border-radius: 50px;
      font-size: 20px;
      color: #222222;
      &.HelpAct {
        background: rgba($color: #60d4ba, $alpha: 0.2);
      }
      img {
        width: 44px;
        margin-right: 30px;
      }
    }
  }
  .HelpInforItemInp {
    display: flex;
    align-items: center;
    label {
      color: #222222;
      text-align: right;
      width: 100px;
    }
    input {
      width: 460px;
      height: 60px;
      background: #f2f2f2;
      margin-left: 30px;
      border-radius: 30px;
      padding: 0 30px;
      box-sizing: border-box;
      outline: none;
    }
  }
  .HelpInforItemInp input::-webkit-input-placeholder {
    color: #999 !important;
  }
  .HelpInforItemTex {
    display: flex;
    margin-top: 40px;
    label {
      color: #222222;
      text-align: right;
      width: 100px;
    }
    textarea {
      width: 558px;
      height: 144px;
      margin-left: 30px;
      background: #f2f2f2;
      border-radius: 30px;
      border: none;
      padding: 10px 20px;
      box-sizing: border-box;
      outline: none;
    }
  }
  .HelpInforItemTex textarea::-webkit-input-placeholder {
    color: #999 !important;
  }
}
</style>
