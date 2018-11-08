<template>
  <div class="bellObtain">
    <div class="ObtainOne">
      <div class="ObtainOneBtn">去捐赠</div>
    </div>
    <div class="ObtainTwo">
      <div class="ObtainTwoBtn">去商城</div>
    </div>
    <div class="ObtainThree">

    </div>
  </div>
</template>
<script>
export default {
  name: "bellObtain"
};
</script>
<style lang="scss">
.bellObtain {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #f2f2f2;
  overflow: hidden;
  overflow-y: auto;
  padding: 0 30px;
  box-sizing: border-box;
  .ObtainOneBtn {
    position: absolute;
    bottom: 30px;
    left: 100px;
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #60d4ba;
    box-shadow: 0 0 4px 0 rgba(200, 200, 200, 0.5);
    border-radius: 100px;
    color: #fff;
    letter-spacing: 0.67px;
  }
  .ObtainTwoBtn {
    position: absolute;
    bottom: 30px;
    right: 100px;
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #60d4ba;
    box-shadow: 0 0 4px 0 rgba(200, 200, 200, 0.5);
    border-radius: 100px;
    color: #fff;
    letter-spacing: 0.67px;
  }
}
</style>
