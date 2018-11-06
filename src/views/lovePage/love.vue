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
      <div class="conductItem">
        <img src="../../assets/images/data/love/list2.png" alt="">
        <div class="conductItemTime">
          还剩2天08 : 32 : 23
        </div>
        <div class="conductItemTitle">
          <p class="conductItemName">爱心屋 | <span> 对！你可以让它们的冬天充满温暖</span></p>
          <p class="conductItemji"> <i class="lovericon jine"></i> 猫粮500 狗粮800 <i class="lovericon addres"></i>上海金山</p>
        </div>
      </div>
      <div class="conductItem">
        <img src="../../assets/images/data/love/list3.png" alt="">
        <div class="conductItemTime">
          还剩2天08 : 32 : 23
        </div>
        <div class="conductItemTitle">
          <p class="conductItemName">爱心屋 | <span> 对！你可以让它们的冬天充满温暖</span></p>
          <p class="conductItemji"> <i class="lovericon jine"></i> 猫粮500 狗粮800 <i class="lovericon addres"></i>上海金山</p>
        </div>
      </div>
      <div class="conductItem">
        <img src="../../assets/images/data/love/list4.png" alt="">
        <div class="conductItemTime">
          还剩2天08 : 32 : 23
        </div>
        <div class="conductItemTitle">
          <p class="conductItemName">爱心屋 | <span> 对！你可以让它们的冬天充满温暖</span></p>
          <p class="conductItemji"> <i class="lovericon jine"></i> 猫粮500 狗粮800 <i class="lovericon addres"></i>上海金山</p>
        </div>
      </div>
    </div>
    <div class="loverList" v-if="!show">
      <div class="loverItem">
        <div class="loverItemimg">
          <img src="../../assets/images/data/love/1.png" alt="">
          <div class="loverItemimgTime">
            已结束
          </div>
        </div>
        <div class="loverItemData">
          <p class="loverItemDataName">爱心易物 | <span>是否愿意给他们送去充饥的食粮</span> </p>
          <p class="charitableNum">已捐：<span>￥693</span></p>
          <p class="loverItemDatatarget">目标价值:693元物资</p>
          <p class="loverItemDataAdd"><i class="lovericon addAct"></i>安徽</p>
        </div>
        <div class="loverItemOver">
        </div>
      </div>
      <div class="love-he" v-if="!show"></div>
      <div class="loverItem">
        <div class="loverItemimg">
          <img src="../../assets/images/data/love/2.png" alt="">
          <div class="loverItemimgTime">
            已结束
          </div>
        </div>
        <div class="loverItemData">
          <p class="loverItemDataName">爱心易物 | <span>是否愿意给他们送去充饥的食粮</span> </p>
          <p class="charitableNum">已捐：<span>￥693</span></p>
          <p class="loverItemDatatarget">目标价值:693元物资</p>
          <p class="loverItemDataAdd"><i class="lovericon addAct"></i>安徽</p>
        </div>
        <div class="loverItemOver">

        </div>
      </div>
      <div class="love-he" v-if="!show"></div>
      <div class="loverItem">
        <div class="loverItemimg">
          <img src="../../assets/images/data/love/3.png" alt="">
          <div class="loverItemimgTime">
            已结束
          </div>
        </div>
        <div class="loverItemData">
          <p class="loverItemDataName">爱心易物 | <span>是否愿意给他们送去充饥的食粮</span> </p>
          <p class="charitableNum">已捐：<span>￥693</span></p>
          <p class="loverItemDatatarget">目标价值:693元物资</p>
          <p class="loverItemDataAdd"><i class="lovericon addAct"></i>安徽</p>
        </div>
        <div class="loverItemOver">

        </div>
      </div>

    </div>
    <div class="loveMoer">
      <div class="loverMoerBnt">
        更多活动
      </div>
    </div>
    <div class="loverActivity">
      <div class="loverActivityItem">
        <img src="../../assets/images/data/love/activity1.png" alt="">
        <div class="loverActivityTeT">
          <p class="loverActivityTeTname">需要帮助吗？</p>
          <p class="loverActivityTecon">请告诉我们您需要求助的内容</p>
        </div>
      </div>
      <div class="loverActivityItem">
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
    }
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
.loverItem {
  height: 260px;
  width: 100%;
  padding: 40px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: relative;
  .loverItemOver {
    position: absolute;
    right: 34px;
    bottom: 51px;
    width: 84px;
    height: 84px;
    background: url(../../assets/images/icon/over.png) no-repeat;
    background-size: 100% 100%;
  }
  .loverItemimg {
    width: 280px;
    height: 180px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    .loverItemimgTime {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 40px;
      width: 100%;
      line-height: 40px;
      font-size: 24px;
      letter-spacing: 2px;
      text-align: center;
      color: #fff;
      background: rgba($color: #000000, $alpha: 0.5);
    }
  }
  .loverItemData {
    width: 380px;
    .loverItemDataName {
      font-size: 24px;
      color: #222222;
      letter-spacing: 0.5px;
      span {
        font-size: 24px;
        color: #101010;
        font-weight: bold;
        letter-spacing: 1.8px;
        line-height: 33px;
      }
    }
    .charitableNum {
      font-size: 22px;
      color: #60d4ba;
      letter-spacing: 1.54px;
      margin: 10px 0;
      span {
        font-size: 32px;
        color: #60d4ba;
        letter-spacing: 1.16px;
        line-height: 30px;
      }
    }
    .loverItemDatatarget {
      font-size: 24px;
      color: #222222;
      letter-spacing: 1.54px;
      margin: 10px 0;
    }
    .loverItemDataAdd {
      display: flex;
      align-items: center;
      font-size: 22px;
      color: #999999;
      letter-spacing: 1.41px;
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
      align-items: center;
      flex-direction: column;
      color: #fff;
      .loverActivityTeTname {
        font-size: 28px;
        letter-spacing: 1px;
        margin-bottom: 10px;
      }
      .loverActivityTecon {
        font-size: 20px;
        letter-spacing: 0.71px;
      }
    }
  }
}
</style>
