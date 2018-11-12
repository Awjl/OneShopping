<template>
  <div class="myOrder">
    <div class="OrderTab">
      <span :class="{OrderTabAct: myOrderTab == 0}" @click="clickOrderTab(0)">全部</span>
      <span :class="{OrderTabAct: myOrderTab == 1}" @click="clickOrderTab(1)">待付款</span>
      <span :class="{OrderTabAct: myOrderTab == 2}" @click="clickOrderTab(2)">待发货</span>
      <span :class="{OrderTabAct: myOrderTab == 3}" @click="clickOrderTab(3)">待收货</span>
      <span :class="{OrderTabAct: myOrderTab == 4}" @click="clickOrderTab(4)">待评价</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "myOrder",
  data() {
    return {
      myOrderTab: ""
    };
  },
  created() {
    this.myOrderTab = this.$route.query.id;
    console.log(this.myOrderTab);
  },
  methods: {
    clickOrderTab(val) {
      this.myOrderTab = val;
    }
  }
};
</script>

<style lang="scss">
.myOrder {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  overflow-y: auto;
  padding-top: 88px;
  .OrderTab {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 88px;
    line-height: 88px;
    background: #fff;
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    span {
      display: block;
      width: 20%;
      text-align: center;
      &.OrderTabAct {
        border-bottom: 4px solid #60d4ba;
        color: #60d4ba;
      }
    }
  }
}
</style>
