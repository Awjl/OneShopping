<template>
  <div class="Permission" v-if="showBox">
    <div class="PermissionBox">
      <div class="PermissionBoxS"></div>
      <div class="PermissionBoxC" @click="childClick"></div>
      <p class="PermissionSory">会员本次购买可以减省30元哦~</p>
      <p>是否去会员专区转转呢？</p>
      <div class="PermissionBoxBtn">
        <div @click="childClick">去瞅瞅</div>
        <div class="PermissionBoxBtnAct" @click="clickBuy">去购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Permission",
  props: ["showBox"],
  data() {
    return {
      childValue: false
    };
  },
  methods: {
    childClick() {
      this.$emit("childByValue", this.childValue);
    },
    clickBuy() {
      this.$emit("toBuy", this.childValue);
    }
  }
};
</script>

<style lang="scss">
.Permission {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .PermissionBox {
    width: 550px;
    height: 316px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #222222;
    letter-spacing: 0.86px;
    position: relative;
    .PermissionBoxS {
      width: 102px;
      height: 90px;
      position: absolute;
      top: -45px;
      left: 68px;
    }
    .PermissionBoxC {
      width: 54px;
      height: 87px;
      position: absolute;
      top: -87px;
      right: 46px;
    }
    .PermissionSory {
      font-weight: bold;
      margin-bottom: 20px;
    }
    .PermissionBoxBtn {
      display: flex;
      div {
        width: 200px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 2px solid #60d4ba;
        border-radius: 100px;
        margin: 50px 20px 0;
        font-size: 24px;
        color: #60d4ba;
        letter-spacing: 0.67px;
        &.PermissionBoxBtnAct {
          background: #60d4ba;
          color: #fff;
        }
      }
    }
  }
}
</style>
