<template>
  <div class="love">
    <div class="loveNav">
      <div :class="{active: show}" @click="showThis()">暖心进行中</div>
      <div :class="{active: !show}" @click="showThis()">往期回顾</div>
    </div>
    <div class="love-he" v-if="!show"></div>
    <div class="conduct" v-if="show">
      <div class="conductExplain">
        <img src="../../assets/images/data/love/list1.png" alt="">
        <div class="conductExplainText">
          1 个宠物豆 = 人民币 1 元
        </div>
      </div>
      <ConducItem></ConducItem>
    </div>
    <div class="loverList" v-if="!show">
      <LoveItem></LoveItem>
    </div>
    <div class="loveMoer">
      <div class="loverMoerBnt">
        更多活动
      </div>
    </div>
    <div class="loverActivity">
      <div class="loverActivityItem" @click="goHelp">
        <img src="../../assets/images/data/love/activity1.png" alt="">
        <div class="loverActivityTeT">
          <p class="loverActivityTeTname">TA在哪里？<br>
            TA怎么了？需要帮助吗？</p>
          <p class="loverActivityTecon">请告诉我们您需要求助的内容</p>
        </div>
      </div>
      <div class="loverActivityItem" @click="goVolunteer">
        <img src="../../assets/images/data/love/activit2.png" alt="">
        <div class="loverActivityTeT">
          <p class="loverActivityTeTname">志愿者，约吗？</p>
          <p class="loverActivityTecon">爱屋及乌，温暖宠物世界</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConducItem from "@/base/conductItem/conductItem";
import LoveItem from "@/base/loverItem/loverItem";

export default {
  name: "love",
  data() {
    return {
      show: true
    };
  },
  methods: {
    showThis() {
      this.show = !this.show;
    },
    goHelp() {
      this.$router.push({
        path: "/LoveHelp"
      });
    },
    goVolunteer() {
      this.$router.push({
        path: "/LoveVolunteer"
      });
    }
  },
  components: {
    ConducItem,
    LoveItem
  }
};
</script>
<style lang="scss">
.love {
  background: #fff;
  padding-bottom: 110px;
}
.love-he {
  height: 20px;
  width: 100%;
  background: #f2f2f2;
}
.loveNav {
  width: 100%;
  height: 88px;
  background: #fff;
  padding: 0 80px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 50%;
    height: 88px;
    line-height: 88px;
    text-align: center;
    font-size: 28px;
    color: #222222;
    letter-spacing: 1.56px;
    box-sizing: border-box;
    &.active {
      color: #60d4ba;
      border-bottom: 6px solid #60d4ba;
    }
  }
}
.conductExplain {
  position: relative;
  margin-bottom: 20px;
  .conductExplainText {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    text-align: center;
    margin: auto;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 32px;
    color: #f0e7d7;
    letter-spacing: 0.67px;
  }
}
.loveMoer {
  width: 100%;
  height: 120px;
  background: #f2f2f2;
  overflow: hidden;
  .loverMoerBnt {
    width: 200px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    background: #fff;
    border-radius: 30px;
    font-size: 24px;
    color: #60d4ba;
    letter-spacing: 0.67px;
    margin: 30px auto;
  }
}
.loverActivity {
  padding: 30px 30px 10px;
  .loverActivityItem {
    margin-bottom: 20px;
    position: relative;
    .loverActivityTeT {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-left: 30px;
      color: #fff;
      .loverActivityTeTname {
        font-size: 28px;
        letter-spacing: 1px;
        margin-bottom: 20px;
        line-height: 30px;
      }
      .loverActivityTecon {
        font-size: 20px;
        letter-spacing: 0.71px;
      }
    }
  }
}
</style>
