<template>
  <div class="DataList">
    <div class="DataItem" v-for="(item, index) in listImg" :key="index">
      <img :src="item.img" alt="">
      <p class="item-name">小宠物玩具可调节</p>
      <p class="item-money">暖心价：<span>￥58</span></p>
      <p class="item-bean"><i class="iconmoney"></i> 宠物豆<span>+2</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["listImg"]
};
</script>

<style lang="scss">
.DataList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .DataItem {
    width: 48%;
    margin-bottom: 30px;
    .item-name {
      font-size: 24px;
      color: #999999;
      letter-spacing: 0.86px;
      margin: 15px 0;
      width: 100%;
      height: 25px;
      line-height: 25px;
      overflow: hidden;
    }
    .item-money {
      font-size: 24px;
      color: #60d4ba;
      letter-spacing: 1px;
      margin: 20px 0;
      span {
        font-size: 28px;
      }
    }
    .item-bean {
      display: flex;
      align-items: center;
      font-size: 20px;
      color: #999;
      letter-spacing: 0.71px;
      line-height: 28px;
      i {
        margin-right: 16px;
      }
      span {
        color: #ffd664;
        letter-spacing: 0.71px;
        line-height: 28px;
        margin-left: 3px;
      }
    }
  }
}
</style>
