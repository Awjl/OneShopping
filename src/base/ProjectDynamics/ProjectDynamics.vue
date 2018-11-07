<template>
  <div class="ProjectDynamics">
    <div class="ProjectDynamicsItem ">
      <div class="ProjectDynamicsLeft">
        <div class="ProjectDynamicsLine">
        </div>
        <div class="ProjectDynamicsImg">
          <img src="../../assets/images/icon/selectAct.png" alt="">
        </div>
      </div>
      <div class="ProjectDynamicsRight">
        <p class="ProjectDynamicsRightOne">发起</p>
        <p class="ProjectDynamicsRighttwo">由 <span>一只商店</span>公益部门发起</p>
        <p class="ProjectDynamicstiem">2017-10-12</p>
        <p class="he60"></p>
      </div>
    </div>
    <div class="ProjectDynamicsItem ">
      <div class="ProjectDynamicsLeft">
        <div class="ProjectDynamicsLine">
        </div>
        <div class="ProjectDynamicsImg">
          <img src="../../assets/images/icon/selectAct.png" alt="">
        </div>
      </div>
      <div class="ProjectDynamicsRight">
        <p class="ProjectDynamicsRightOne">发起</p>
        <p class="ProjectDynamicsRighttwo">由 <span>一只商店</span>公益部门发起</p>
        <p class="ProjectDynamicstiem">2017-10-12</p>
        <p class="he60"></p>
      </div>
    </div>
    <div class="ProjectDynamicsItem ">
      <div class="ProjectDynamicsLeft">
        <div class="ProjectDynamicsLine">
        </div>
        <div class="ProjectDynamicsImg">
          <img src="../../assets/images/icon/selectAct.png" alt="">
        </div>
      </div>
      <div class="ProjectDynamicsRight">
        <p class="ProjectDynamicsRightOne">募捐／募捐中</p>
        <p class="ProjectDynamicsRightLoding">目标金额：¥ 3000，已募集：<span>¥ 1286</span>。</p>
        <p class="ProjectDynamicsRightLoding">反 馈：</p>
        <p class="he60"></p>
      </div>
    </div>
    <div class="ProjectDynamicsItem ">
      <div class="ProjectDynamicsLeft">
        <div class="ProjectDynamicsLine">
        </div>
        <div class="ProjectDynamicsImg">
          <img src="../../assets/images/icon/selectAct.png" alt="">
        </div>
      </div>
      <div class="ProjectDynamicsRight">
        <p class="ProjectDynamicsRightOne">执行</p>
        <p class="ProjectDynamicStart">
          待执行
        </p>
        <p class="he60"></p>
      </div>
    </div>
    <div class="ProjectDynamicsItem ">
      <div class="ProjectDynamicsLeft">
        <div class="ProjectDynamicsImg">
          <img src="../../assets/images/icon/selectAct.png" alt="">
        </div>
      </div>
      <div class="ProjectDynamicsRight">
        <p class="ProjectDynamicsRightOne">反馈</p>
        <p class="ProjectDynamicStart">
          待执行
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDynamics"
};
</script>

<style lang="scss">
.ProjectDynamics {
  padding: 0 30px;
  .ProjectDynamicsItem {
    display: flex;
    justify-content: space-between;
    .ProjectDynamicsLeft {
      position: relative;
      width: 100px;
      .ProjectDynamicsLine {
        height: 100%;
        width: 4px;
        margin: 0 auto;
        background: #dcdcdc;
      }
      .ProjectDynamicsImg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 32px;
        height: 32px;
        margin: 0 auto;
      }
    }
    .ProjectDynamicsRight {
      width: 590px;
      .he60 {
        height: 60px;
      }
      .ProjectDynamicsRightOne {
        font-size: 28px;
        color: #222222;
        margin-bottom: 30px;
        font-weight: bold;
      }
      .ProjectDynamicsRighttwo {
        font-size: 24px;
        color: #666666;
        letter-spacing: 0.5px;
        margin-bottom: 20px;
        span {
          color: #60d4ba;
        }
      }
      .ProjectDynamicsRightLoding {
        font-size: 24px;
        color: #666666;
        letter-spacing: 0.5px;
        margin: 10px 0;
        span {
          font-size: 36px;
          color: red;
          letter-spacing: 0.5px;
          line-height: 33px;
        }
      }
      .ProjectDynamicStart {
        font-size: 24px;
        color: #dcdcdc;
        letter-spacing: 0.5px;
        margin-bottom: 20px;
      }
      .ProjectDynamicstiem {
        font-size: 20px;
        color: #999999;
      }
    }
  }
}
</style>
