<template>
  <div class="Basic">
    <div class="BasicTitle">基本信息</div>
    <div class="BasicBase">
      <div class="BasicBaseInp">
        <label for="">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</label>
        <input type="text" placeholder="请输入您的真实姓名" class="BasicInp">
      </div>
      <div class="BasicBaseInp">
        <label for="">联系电话</label>
        <input type="text" placeholder="请输入您的联系电话">
      </div>
      <div class="BasicBaseInp" v-if="TabStart">
        <label for="">身&nbsp;&nbsp;份&nbsp;&nbsp;证</label>
        <input type="text" placeholder="请填写您的身份证号">
      </div>
      <div class="BasicBaseInp" v-if="!TabStart">
        <label for="">机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;构<br>
          证书编号</label>
        <input type="text" placeholder="请填写您的身份证号">
      </div>
      <div class="BasicBaseImg">
        <div class="BasicBaseImgBtn" v-if="TabStart">
          + 身份证正面
        </div>
        <div class="BasicBaseImgBtn" v-if="TabStart">
          + 身份证反面
        </div>
        <div class="BasicBaseImgBtn" v-if="!TabStart">
          + 证书
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Basic",
  props: ["TabStart"]
};
</script>

<style lang="scss">
.Basic {
  padding: 30px;
  .BasicTitle {
    font-size: 28px;
    color: #222222;
    letter-spacing: 1.56px;
    margin-bottom: 40px;
    font-weight: bold;
  }
  .BasicBaseInp {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
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
  .BasicBaseImg {
    display: flex;
    padding-left: 130px;
    .BasicBaseImgBtn {
      width: 259px;
      height: 144px;
      line-height: 144px;
      background: #f2f2f2;
      text-align: center;
      margin-right: 20px;
      border-radius: 10px;
      overflow: hidden;
      color: #999;
    }
  }
  .BasicBaseInp input::-webkit-input-placeholder {
    color: #999 !important;
  }
}
</style>
