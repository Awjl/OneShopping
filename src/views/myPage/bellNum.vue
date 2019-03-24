<template>
  <div class="bellNum">
    <div class="bellNumBox">
      <div>
        <div class="bellincomeNum">+30</div>
        <p>收入</p>
      </div>
      <div>
        <div class="bellAll">30</div>
        <p>可用铃铛</p>
      </div>
      <div>
        <div class="bellincomeNum">-2</div>
        <p>支出</p>
      </div>
    </div>
    <div class="bellList">
      <div class="bellItem">
        <div class="bellItemNum">-10</div>
        <div class="bellItemConter">
          <div class="bellItemConterName">
            <div>
              <span>败家消耗</span>：皇家猫粮5KG装包邮
            </div>
            <p>2件</p>
          </div>
          <div class="bellItemConterTime">11-29 07:12</div>
        </div>
      </div>
      <div class="bellItem">
        <div class="bellItemNum">-5</div>
        <div class="bellItemConter">
          <div class="bellItemConterName">
            <div>
              <span>败家消耗</span>：皇家猫粮5KG装包邮
            </div>
            <p>2件</p>
          </div>
          <div class="bellItemConterTime">11-29 07:12</div>
        </div>
      </div>
      <div class="bellItem">
        <div class="bellItemNum">-5</div>
        <div class="bellItemConter">
          <div class="bellItemConterName">
            <div>
              <span>败家消耗</span>：皇家猫粮5KG装包邮
            </div>
            <p>2件</p>
          </div>
          <div class="bellItemConterTime">11-29 07:12</div>
        </div>
      </div>
      <div class="bellItem">
        <div class="bellItemNum">+5</div>
        <div class="bellItemConter">
          <div class="bellItemConterName">
            <div>
              <span>败家消耗</span>：皇家猫粮5KG装包邮
            </div>
            <p>2件</p>
          </div>
          <div class="bellItemConterTime">11-29 07:12</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "bellNum"
};
</script>

<style lang="scss">
.bellNum {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  overflow-y: auto;
  .bellNumBox {
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    div {
      font-size: 22px;
      color: #666666;
      letter-spacing: 1.22px;
      .bellincomeNum {
        width: 88px;
        height: 88px;
        text-align: center;
        line-height: 88px;
        background: #fff;
        border-radius: 50%;
        font-size: 28px;
        color: #222222;
        letter-spacing: 1.56px;
      }
      .bellAll {
        width: 108px;
        height: 108px;
        text-align: center;
        line-height: 108px;
        border-radius: 50%;
        background: #ffd664;
        font-size: 36px;
        color: #ffffff;
        letter-spacing: 2px;
      }
      p {
        text-align: center;
        margin-top: 20px;
      }
    }
  }
  .bellItem {
    background: #fff;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .bellItemNum {
      width: 68px;
      height: 68px;
      text-align: center;
      line-height: 68px;
      color: #fff;
      font-size: 28px;
      border-radius: 50%;
      background: #ffd664;
    }
    .bellItemConter {
      width: 589px;
      .bellItemConterName {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        border-bottom: 2px solid #dcdcdc;
        font-size: 24px;
        color: #101010;
        span {
          font-size: 24px;
          color: #222222;
        }
        p {
          font-size: 24px;
          color: #60d4ba;
          letter-spacing: 1.33px;
          text-align: right;
        }
      }
      .bellItemConterTime {
        height: 46px;
        line-height: 46px;
        font-size: 22px;
        color: #666666;
        letter-spacing: 1.22px;
      }
    }
  }
}
</style>
