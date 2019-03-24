<template>
  <div class="helpNum">
    <div class="helpList">
      <div class="helpItem">
        <div class="helpName">筹钱</div>
        <div class="helpMaterialList">
          <p>¥2000</p>
          <p>¥2000</p>
          <p>¥2000</p>
          <p>¥2000</p>
        </div>
        <div class="helpReason">
          <span>原因：</span>
          <div>这个募捐的原因就显示在这个地方，全部显示。这个募捐的原因就显示在这个地方，全部显示。这个募捐的原因就显示在这个地方，全部显示。</div>
        </div>
        <div class="helpTime">
          <span>2017-11-28</span>
        </div>
      </div>
      <div class="helpItem">
        <div class="helpName">筹钱</div>
        <div class="helpMaterialList">
          <p>¥2000</p>
          <p>¥2000</p>
          <p>¥2000</p>
          <p>¥2000</p>
        </div>
        <div class="helpReason">
          <span>原因：</span>
          <div>这个募捐的原因就显示在这个地方，全部显示</div>
        </div>
        <div class="helpTime">
          <span>2017-11-28</span>
        </div>
      </div>
      <div class="helpItem">
        <div class="helpName">筹钱</div>
        <div class="helpMaterialList">
          <p>¥2000</p>
          <p>¥2000</p>
          <p>¥2000</p>
          <p>¥2000</p>
        </div>
        <div class="helpReason">
          <span>原因：</span>
          <div>这个募捐的原因就显示在这个地方，全部显示。这个募捐的原因就显示在这个地方，全部显示。这个募捐的原因就显示在这个地方，全部显示。</div>
        </div>
        <div class="helpTime">
          <span>2017-11-28</span>
        </div>
      </div>
    </div>
    <div class="helpBtn">
      <div>发起求助</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "helpNum"
};
</script>

<style lang="scss">
.helpNum {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-bottom: 110px;
  box-sizing: border-box;
  overflow-y: auto;
  background: #f2f2f2;
  .helpBtn {
    position: fixed;
    bottom: 0px;
    left: 0;
    padding: 10px 30px;
    width: 100%;
    height: 98px;
    box-sizing: border-box;
    background: #fff;
    div {
      width: 100%;
      height: 78px;
      text-align: center;
      line-height: 78px;
      background: #60d4ba;
      border-radius: 100px;
      color: #fff;
      font-size: 28px;
    }
  }
  .helpList {
    .helpItem {
      padding: 30px;
      margin-top: 30px;
      background: #fff;
      .helpName {
        font-size: 28px;
        color: #222222;
        margin: 15px 0;
        font-weight: bold;
      }
      .helpMaterialList {
        font-size: 24px;
        color: #60d4ba;
        letter-spacing: 1.33px;
        border-bottom: 2px dashed #dcdcdc;
        p {
          margin: 15px 0;
        }
      }
      .helpReason {
        display: flex;
        margin-top: 20px;
        font-size: 20px;
        color: #222222;
        line-height: 34px;
        margin-bottom: 20px;
        span {
          display: block;
          width: 100px;
        }
        div {
          width: 610px;
        }
      }
      .helpTime {
        display: flex;
        justify-content: flex-end;
        font-size: 22px;
        color: #999999;
        letter-spacing: 1.22px;
      }
    }
  }
}
</style>
