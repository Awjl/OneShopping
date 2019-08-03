<template>
  <div>
    <div>
      <div
        class="loverItem"
        v-for="(item, $index) in lovedata"
        :key="$index"
        v-show="item.loveStatus == 2"
      >
        <div class="loverItemimg">
          <img :src="item.cover | formatJpg" alt />
          <div class="loverItemimgTime">已结束</div>
        </div>
        <div class="loverItemData">
          <p class="loverItemDataName">{{item.title}}</p>
          <p class="charitableNum">
            已捐：
            <span>￥{{item.pasMoney}}</span>
          </p>
          <p class="loverItemDatatarget">目标价值:{{item.tarMoney}}元物资</p>
          <p class="loverItemDataAdd">
            <i class="lovericon addAct"></i>
            {{item.areaName}}
          </p>
        </div>
        <div class="loverItemOver"></div>
      </div>
      <div class="love-he"></div>
    </div>
    <!-- <div>
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
      <div class="love-he"></div>
    </div>
    <div>
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
    </div>-->
  </div>
</template>

<script>
export default {
  name: "loveItem",
  props: {
    lovedata: {
      type: Array
    }
  }
};
</script>

<style lang="scss">
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
</style>
