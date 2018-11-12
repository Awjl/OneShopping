<template>
  <div class="perInformation">
    <div class="perInformationItem">
      <p>头像</p>
      <div>
        <div class="PerImg"><img src="../../assets/images/data/my/my.png" alt=""> </div><i class="myicon righticon"></i>
      </div>
    </div>
    <div class="perInformationItem">
      <p>用户名</p>
      <div>
        我的用户名 <i class="myicon righticon"></i>
      </div>
    </div>
    <div class="perInformationItem">
      <p>手机号</p>
      <div>
        176 1234 1234<i class="myicon righticon"></i>
      </div>
    </div>
    <div class="perInformationItem">
      <p>地区</p>
      <div>
        选择<i class="myicon righticon"></i>
      </div>
    </div>
    <div class="perInformationItem">
      <p>其他信息</p>
      <div>
        选择<i class="myicon righticon"></i>
      </div>
    </div>
    <div class="perInformationBtn">
      退出登录
    </div>
  </div>
</template>
<script>
export default {
  name: "perInformation"
};
</script>

<style lang="scss">
.perInformation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  padding: 30px 0;
  box-sizing: border-box;
  .perInformationItem {
    padding: 30px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #f2f2f2;
    font-size: 28px;
    color: #222222;
    letter-spacing: 1.56px;
    div {
      display: flex;
      align-items: center;
      font-size: 22px;
      .PerImg {
        width: 88px;
        height: 88px;
        border-radius: 50%;
        overflow: hidden;
      }
      i {
        margin-left: 20px;
      }
    }
  }
  .perInformationBtn {
    margin: 438px 60px 0;
    text-align: center;
    height: 80px;
    line-height: 80px;
    background: #60d4ba;
    border-radius: 100px;
    color: #fff;
    font-size: 28px;
    letter-spacing: 1px;
  }
}
</style>
