<template>
  <div class="Ranking">
    <div class="RankingTopThreeBox">
      <div class="RankingTopThree">
        <div class="RankingTopThreeItem">
          <div class="TowImg">
            <div class="TowImg_data">
              <img src="../../assets/images/data/my/my.png" alt="">
            </div>
          </div>
          <p class="Bell-Btn">
            <img src="../../assets/images/icon/my-dou.png" alt="">12个
          </p>
          <p class="RankingTop-name">乖乖的阿木木</p>
          <div class="TopThree two">
            2
          </div>
        </div>
        <div class="RankingTopThreeItem">
          <div class="OneImg">
            <div class="OneImg_data">
              <img src="../../assets/images/data/my/my.png" alt="">
            </div>
          </div>
          <p class="Bell-Btn">
            <img src="../../assets/images/icon/my-dou.png" alt="">12个
          </p>
          <p class="RankingTop-name">乖乖的阿木木</p>
          <div class="TopThree one">
            1
          </div>
        </div>
        <div class="RankingTopThreeItem">
          <div class="ThreeImg">
            <div class="TowImg_data">
              <img src="../../assets/images/data/my/my.png" alt="">
            </div>
          </div>
          <p class="Bell-Btn">
            <img src="../../assets/images/icon/my-dou.png" alt="">12个
          </p>
          <p class="RankingTop-name">乖乖的阿木木</p>
          <div class="TopThree three">
            3
          </div>
        </div>
      </div>
    </div>
    <div class="RankingList">
      <div class="RankingItem">
        <div class="RankingNum">
          第4名
        </div>
        <div class="RankingConter">
          <div class="RankingConterImg">
            <img src="../../assets/images/data/my/my.png" alt="">
          </div>
          <div class="RankingConterName">
            <p>对货不会你知道</p>
            <div>贡献了铃铛：<p class="Bell-Btn"><img src="../../assets/images/icon/my-dou.png" alt="">12个</p>
            </div>
          </div>
        </div>
      </div>
      <div class="RankingItem">
        <div class="RankingNum">
          第5名
        </div>
        <div class="RankingConter">
          <div class="RankingConterImg">
            <img src="../../assets/images/data/my/my.png" alt="">
          </div>
          <div class="RankingConterName">
            <p>对货不会你知道</p>
            <div>贡献了铃铛：<p class="Bell-Btn"><img src="../../assets/images/icon/my-dou.png" alt="">12个</p>
            </div>
          </div>
        </div>
      </div>
      <div class="RankingItem">
        <div class="RankingNum">
          第6名
        </div>
        <div class="RankingConter">
          <div class="RankingConterImg">
            <img src="../../assets/images/data/my/my.png" alt="">
          </div>
          <div class="RankingConterName">
            <p>对货不会你知道</p>
            <div>贡献了铃铛：<p class="Bell-Btn"><img src="../../assets/images/icon/my-dou.png" alt="">12个</p>
            </div>
          </div>
        </div>
      </div>
      <div class="RankingItem">
        <div class="RankingNum">
          第7名
        </div>
        <div class="RankingConter">
          <div class="RankingConterImg">
            <img src="../../assets/images/data/my/my.png" alt="">
          </div>
          <div class="RankingConterName">
            <p>对货不会你知道</p>
            <div>贡献了铃铛：<p class="Bell-Btn"><img src="../../assets/images/icon/my-dou.png" alt="">12个</p>
            </div>
          </div>
        </div>
      </div>
      <div class="RankingItem">
        <div class="RankingNum">
          第8名
        </div>
        <div class="RankingConter">
          <div class="RankingConterImg">
            <img src="../../assets/images/data/my/my.png" alt="">
          </div>
          <div class="RankingConterName">
            <p>对货不会你知道</p>
            <div>贡献了铃铛：<p class="Bell-Btn"><img src="../../assets/images/icon/my-dou.png" alt="">12个</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ranking"
};
</script>

<style lang="scss">
.Ranking {
  padding: 0 30px;

  .RankingTopThreeBox {
    padding: 0 30px;
    .RankingTopThree {
      border-bottom: 15px solid #2fac90;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .RankingTopThreeItem {
        width: 208px;
        .TopThree {
          background: #60d4ba;
          font-size: 64px;
          color: #ffffff;
          text-align: center;
          border-radius: 20px 20px 0 0;
        }

        .RankingTop-name {
          font-size: 26px;
          color: #222222;
          letter-spacing: 0.48px;
          text-align: center;
          margin-bottom: 20px;
        }
        .two {
          height: 112px;
          line-height: 112px;
        }
        .one {
          height: 144px;
          line-height: 144px;
        }
        .three {
          height: 88px;
          line-height: 88px;
        }
        .TowImg_data {
          width: 76px;
          height: 76px;
          position: absolute;
          top: 12px;
          left: 0;
          right: 0;
          margin: 0 auto;
          border-radius: 50%;
          overflow: hidden;
        }
        .OneImg_data {
          width: 105px;
          height: 105px;
          position: absolute;
          top: 16px;
          left: 0;
          right: 0;
          margin: 0 auto;
          border-radius: 50%;
          overflow: hidden;
        }
      }
    }
  }
  .RankingList {
    background: rgba($color: #60d4ba, $alpha: 0.1);
    border-radius: 12px;
    width: 100%;
    padding: 0 15px;
    margin-top: 30px;
    .RankingItem {
      display: flex;
      align-items: center;
      .RankingNum {
        width: 129px;
        text-align: center;
        font-size: 24px;
        color: #666666;
        letter-spacing: 0.86px;
      }
      .RankingConter {
        display: flex;
        align-items: center;
        width: 100%;
        border-bottom: 2px dashed #dcdcdc;
        .RankingConterImg {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 30px;
        }
        .RankingConterName {
          padding: 30px 0;
          p {
            font-size: 24px;
            color: #666666;
            letter-spacing: 0.86px;
          }
          div {
            font-size: 24px;
            color: #000000;
            letter-spacing: 0.86px;
            display: flex;
            align-items: center;
            p {
              color: #fff;
            }
          }
        }
      }
    }
  }
  .RankingList > div:last-child .RankingConter {
    border: none;
  }
  .Bell-Btn {
    background: #ffd664;
    border-radius: 100px;
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: 20px auto;
    img {
      width: 20px;
      margin-right: 5px;
    }
  }
}
</style>
