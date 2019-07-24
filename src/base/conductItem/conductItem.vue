<template>
  <div>
    <!-- <div class="conductItem" @click="goWelfareDetails()">
      <img src="../../assets/images/data/love/list2.png" alt>
      <div class="conductItemTime">还剩{{donwData | downData}}</div>
      <div class="conductItemTitle">
        <p class="conductItemName">
          爱心屋 |
          <span>对！你可以让它们的冬天充满温暖</span>
        </p>
        <p class="conductItemji">
          <i class="lovericon jine"></i> 猫粮500 狗粮800
          <i class="lovericon addres"></i>上海金山
        </p>
      </div>
    </div>-->
    <div class="conductItem" v-for="(item, $index) in lovedata" :key="$index" v-show="item.loveStatus==0 || item.loveStatus==1">
      <img :src="item.cover | formatJpg" alt />
      <div class="conductItemTime" v-if="item.loveStatus==0">还剩{{item.endTime | formatEndTime}}</div>
      <div class="conductItemTime" v-if="item.loveStatus==1">反馈中</div>
      <div class="conductItemTitle">
        <p class="conductItemName">{{item.title}}</p>
        <p class="conductItemji">
          <i class="lovericon jine"></i> 已捐：
          <span v-if="item.type == 1">¥{{item.pasMoney}}</span>
          &nbsp;&nbsp;&nbsp;
          目标:
          <span v-if="item.type == 1">¥{{item.tarMoney}}</span>元
          <i class="lovericon addres"></i>
          {{item.areaName}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "conductItem",
  props: {
    lovedata: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      donwData: 0
    };
  },
  mounted() {
    this.donwData = new Date("2019-04-22 10:00:00") - new Date();
  },
  watch: {
    lovedata(newValue, oldValue) {
      console.log(newValue);
    }
  },
  methods: {
    goWelfareDetails() {
      // console.log("231");
      // this.$router.push({
      //   path: "/lovePageDetailse"
      // });
    }
  }
};
</script>

<style lang="scss">
.conductItem {
  margin-bottom: 20px;
  position: relative;
  .conductItemTime {
    position: absolute;
    top: 30px;
    right: 0;
    width: 240px;
    height: 40px;
    line-height: 42px;
    text-align: center;
    background: #60d4ba;
    font-size: 20px;
    letter-spacing: 0.83px;
    color: #fff;
    border-radius: 40px 0 0 40px;
  }
  .conductItemTitle {
    position: absolute;
    bottom: 20px;
    left: 0;
    color: #fff;
    padding: 0 40px;
    line-height: 33px;
    box-sizing: border-box;
    .conductItemName {
      font-size: 24px;
      color: #ffffff;
      letter-spacing: 0.58px;
      margin-bottom: 10px;
      span {
        font-size: 28px;
        color: #fff;
        letter-spacing: 0.58px;
        line-height: 33px;
      }
    }
    .conductItemji {
      display: flex;
    }
  }
}
</style>
