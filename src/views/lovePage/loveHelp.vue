<template>
  <div class="loveHelp">
    <div class="loveHelpHeard">
      <div class="loveHelpHeardItem" @click="TabItem(1)">
        <div class="loveHelpHeardItemImg" v-if="!heardAct">
          <img src="../../assets/images/icon/per.png" alt="">
        </div>
        <div class="loveHelpHeardItemImg" v-if="heardAct">
          <img src="../../assets/images/icon/perAct.png" alt="">
        </div>
        <p>个人</p>
      </div>
      <div class="loveHelpHeardItem" @click="TabItem(2)">
        <div class="loveHelpHeardItemImg" v-if="heardAct">
          <img src="../../assets/images/icon/mec.png" alt="">
        </div>
        <div class="loveHelpHeardItemImg" v-if="!heardAct">
          <img src="../../assets/images/icon/mecAct.png" alt="">
        </div>
        <p>机构</p>
      </div>
    </div>
    <Basic :TabStart="heardAct"></Basic>
    <HelpInformation></HelpInformation>
    <div class="loveHelpBtn">
      提交审核
    </div>
  </div>
</template>

<script>
import Basic from "@/base/Basic/Basic"; // 基本信息
import HelpInformation from "@/base/HelpInformation/HelpInformation"; //求助信息

export default {
  name: "loveHelp",
  data() {
    return {
      heardAct: true
    };
  },
  created() {
    this.menu();
  },
  methods: {
    menu() {
      window.scrollTo(0, 0);
    },
    TabItem(val) {
      if (val == 1) {
        this.heardAct = true;
      } else {
        this.heardAct = false;
      }
    }
  },
  components: {
    Basic,
    HelpInformation
  }
};
</script>

<style lang="scss">
.loveHelp {
  .loveHelpHeard {
    padding: 20px 146px;
    background: #f2f2f2;
    display: flex;
    justify-content: space-between;
    .loveHelpHeardItemImg {
      width: 100px;
      height: 100px;
    }
    p {
      font-size: 20px;
      color: #222222;
      letter-spacing: 1.11px;
      text-align: center;
      margin-top: 20px;
    }
  }
  .loveHelpBtn {
    margin: 60px 30px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    background: #60d4ba;
    border-radius: 100px;
    font-size: 28px;
    color: #ffffff;
    letter-spacing: 1px;
  }
}
</style>
