<template>
  <div class="OrderDetails">
    <div class="OrderDetailsBg">
      <i class="OrderDetailsIcon"></i>
      <div class="OrderDetailsConter">
        <p class="OrderDetailsState">待付款</p>
        <p>别墨迹，赶紧吧～</p>
      </div>
    </div>
    <div class="OrderItem" @click="goOrderDetails()">
      <div class="OrderId">
        订单号：2019328549904
      </div>
      <div class="OrderConter">
        <div class="OrderConterImg">
          <img src="../../assets/images/data/shopping/1.png" alt="">
        </div>
        <div class="OrderConterTitle">
          <p>可组合3色收纳抽屉</p>
          <p>颜色2，12x20mm</p>
          <p><span>￥36</span><span>X 2</span></p>
        </div>
      </div>
      <div class="OrderAmount">
        应付总额：¥206<span>（含运费¥6）</span>
      </div>
    </div>
    <div class="OrderLogistics">
      <div class="OrderLogisticsTitle">
        <div class="OrderLogisticsIcon">
          <i class="logIcon l-Icon"></i>暂无物流信息
        </div>
        <i class="myicon righticon"></i>
      </div>
      <div class="OrderLogisticsConter">
        <i class="logIcon A-Icon"></i>
        <div class="OrderLogisticsAddres">
          <p><span>COCO的猫</span> <span>18721712792</span></p>
          <p>上海市黄浦区制造局路833弄23号C座</p>
        </div>
      </div>
      <div class="OrderLogisticsBell">
        <i class="iconmoney"></i>
        <div class="OrderLogisticsAddres">
          <span>铃铛</span> <span>+ 2</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderDetails"
};
</script>
<style lang="scss">
.OrderDetails {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  overflow-y: auto;
  .OrderDetailsConter {
    margin-left: 40px;
    font-size: 24px;
    color: #1ca385;
    .OrderDetailsState {
      font-size: 32px;
      color: #1ca385;
      font-weight: bold;
      margin-bottom: 16px;
    }
  }
  .OrderItem {
    background: #fff;
    padding: 30px;
    .OrderId {
      color: #999;
      border-bottom: 2px solid #dcdcdc;
      height: 40px;
      line-height: 40px;
    }
    .OrderConter {
      display: flex;
      justify-content: space-between;
      padding: 30px 0;
      border-bottom: 2px solid #dcdcdc;
      .OrderConterImg {
        width: 136px;
        height: 136px;
      }
      .OrderConterTitle {
        width: 524px;
        font-size: 24px;
        color: #999999;
        letter-spacing: 1px;
        p:nth-child(1) {
          font-size: 28px;
          color: #222222;
          margin-bottom: 10px;
        }
        p:nth-child(3) {
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
          font-size: 24px;
          color: #222222;
          letter-spacing: 0.78px;
          span:nth-child(1) {
            font-size: 28px;
            font-weight: bold;
          }
        }
      }
    }
    .OrderAmount {
      font-size: 28px;
      color: #60d4ba;
      letter-spacing: 1.33px;
      margin: 20px 0;
      span {
        font-size: 20px;
        color: #101010;
      }
    }
  }
  .OrderLogistics {
    background: #fff;
    margin-top: 20px;
    padding: 0 30px;
    .OrderLogisticsTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 88px;
      border-bottom: 2px solid #dcdcdc;
      .OrderLogisticsIcon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        color: #000000;
      }
    }
    .OrderLogisticsConter {
      display: flex;
      padding: 30px 0;
      .OrderLogisticsAddres {
        line-height: 50px;
        font-size: 24px;
        padding-bottom: 20px;
        color: #999999;
        width: 628px;
        border-bottom: 2px solid #dcdcdc;
        span {
          font-size: 24px;
          color: #222222;
          margin-right: 50px;
        }
      }
    }
    .OrderLogisticsBell {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      i {
        margin-right: 30px;
      }
      .OrderLogisticsAddres {
        display: flex;
        justify-content: space-between;
        width: 628px;
        font-size: 24px;
        color: #000000;
        span:nth-child(2) {
          font-size: 24px;
          color: #ffd664;
        }
      }
    }
  }
}
</style>
