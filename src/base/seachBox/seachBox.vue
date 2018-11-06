<template>
  <div class="seachBox">
    <i class="homeIcon logoIcon"></i>
    <div class="seachBoxInp">
      <input type="text" placeholder="输入要搜索的产品">
      <i class="homeIcon seachIcon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "seachBox"
};
</script>

<style lang="scss">
.seachBox {
  width: 100%;
  height: 70px;
  padding: 0 30px;
  box-sizing: border-box;
  background: #f4f4f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .seachBoxInp {
    width: 580px;
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba($color: #4a4a4a, $alpha: 0.1);
    border-radius: 79px;
    padding: 0 30px;
    box-sizing: border-box;
    input {
      width: 480px;
      height: 58px;
      outline: none;
      background: initial;
      color: #fff;
      text-align: center;
    }
  }
}
input::-webkit-input-placeholder {
  color: #fff;
}
</style>
