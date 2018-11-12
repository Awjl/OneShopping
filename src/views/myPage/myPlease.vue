<template>
  <div class="myPlease">
    <div class="myPleaseBox">
      <p>128</p>
      <span>累计收益</span>
    </div>
    <div class="myPleaseFriend">
      <div class="myPleaseFriendTitle">
        - 你邀请的好友 -
      </div>
      <div class="myPleaseFriendItem">
        <div class="FriendLeft">
          <div class="PleaseFriendImg">
            <img src="../../assets/images/data/my/my.png" alt="">
          </div>
          <div class="PleaseFriendName">
            <div>对货不会你知道</div>
            <p>为你带来的铃铛收益：</p>
          </div>
        </div>
        <div class="FriendRight">
          +15
        </div>
      </div>
      <div class="myPleaseFriendItem">
        <div class="FriendLeft">
          <div class="PleaseFriendImg">
            <img src="../../assets/images/data/my/my.png" alt="">
          </div>
          <div class="PleaseFriendName">
            <div>对货不会你知道</div>
            <p>为你带来的铃铛收益：</p>
          </div>
        </div>
        <div class="FriendRight">
          +15
        </div>
      </div>
      <div class="myPleaseFriendItem">
        <div class="FriendLeft">
          <div class="PleaseFriendImg">
            <img src="../../assets/images/data/my/my.png" alt="">
          </div>
          <div class="PleaseFriendName">
            <div>对货不会你知道</div>
            <p>为你带来的铃铛收益：</p>
          </div>
        </div>
        <div class="FriendRight">
          +15
        </div>
      </div>
      <div class="myPleaseFriendItem">
        <div class="FriendLeft">
          <div class="PleaseFriendImg">
            <img src="../../assets/images/data/my/my.png" alt="">
          </div>
          <div class="PleaseFriendName">
            <div>对货不会你知道</div>
            <p>为你带来的铃铛收益：</p>
          </div>
        </div>
        <div class="FriendRight">
          +15
        </div>
      </div>
      <p><span>邀请说明</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "myPlease"
};
</script>
<style lang="scss">
.myPlease {
  overflow: hidden;
  .myPleaseBox {
    width: 200px;
    height: 200px;
    margin: 130px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #ffd664;
    border: 6px solid #ffffff;
    border-radius: 100px;
    font-size: 24px;
    color: #ffffff;
    letter-spacing: 0.86px;
    p {
      font-size: 80px;
      color: #ffffff;
      letter-spacing: 4.44px;
      margin-bottom: 16px;
    }
  }
  .myPleaseFriend {
    margin-top: 50px;
    .myPleaseFriendTitle {
      text-align: center;
      font-size: 28px;
      color: #4a4a4a;
      margin-bottom: 20px;
    }
    .myPleaseFriendItem {
      margin: 0 30px;
      padding: 26px 0;
      border-bottom: 2px dashed #dcdcdc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .FriendLeft {
        display: flex;
        align-items: center;
        .PleaseFriendImg {
          width: 80px;
          height: 80px;
          margin-right: 30px;
        }
        .PleaseFriendName {
          div {
            font-size: 28px;
            color: #666;
          }
          p {
            font-size: 26px;
            color: #60d4ba;
            font-weight: bold;
            margin-top: 20px;
          }
        }
      }
      .FriendRight {
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        background: #ffd664;
        border-radius: 50%;
        color: #fff;
        font-size: 30px;
      }
    }
  }
  .myPleaseFriend > p {
    margin-top: 50px;
    text-align: center;
    span {
      color: #60d4ba;
      text-decoration: underline;
    }
  }
}
</style>
