<template>
  <div class="home">
    <SeachBox></SeachBox>
    <wv-swipe :height="140" :autoplay="3000">
      <wv-swipe-item v-for="(item, index) in imgData" :key="index">
        <div>
          <img :src="item.img" alt="">
        </div>
      </wv-swipe-item>
    </wv-swipe>
    <div class="homeLove">
      <div class="homeLoverTitle">
        宠TA，我也宠你
      </div>
      <div class="homeLoveItem">
        <router-link tag="div" class="love-left" to="/Home/SpecialArea">
          <img src="../../assets/images/bg/home/love1.png" alt="">
        </router-link>
        <div class="love-right">
          <router-link tag="div" to="/Home/SpecialArea">
            <img src="../../assets/images/bg/home/love2.png" alt="">
          </router-link>
          <router-link tag="div" class="last" to="/Home/SpecialArea">
            <img src="../../assets/images/bg/home/love3.png" alt="">
          </router-link>
        </div>
      </div>
    </div>
    <div class="homeItem">
      <div class="homeItemTitle">- 又上新啦 -</div>
      <router-link tag="div" to="/Home/NoviceArea" class="homeItemImg">
        <img src="../../assets/images/data/banner/banner2.png" alt="">
      </router-link>
      <div class="listItem-img">
        <div class="Item-box">
          <div class="item">
            <div class="item-img" @click="goDetails()">
              <img src="../../assets/images/data/home/1.png" alt="">
              <p class="item-name">小宠物玩具可调节</p>
              <p class="item-money">￥58</p>
              <p class="item-bean"><i class="iconmoney"></i> 宠物豆<span>+2</span></p>
            </div>
            <div class="item-img" @click="goDetails()">
              <img src="../../assets/images/data/home/2.png" alt="">
              <p class="item-name">小宠物玩具可调节</p>
              <p class="item-money">￥58</p>
              <p class="item-bean"><i class="iconmoney"></i> 宠物豆<span>+2</span></p>
            </div>
            <div class="item-img" @click="goDetails()">
              <img src="../../assets/images/data/home/3.png" alt="">
              <p class="item-name">小宠物玩具可调节</p>
              <p class="item-money">￥58</p>
              <p class="item-bean"><i class="iconmoney"></i> 宠物豆<span>+2</span></p>
            </div>
            <div class="item-img" @click="goDetails()">
              <img src="../../assets/images/data/home/4.png" alt="">
              <p class="item-name">小宠物玩具可调节</p>
              <p class="item-money">￥58</p>
              <p class="item-bean"><i class="iconmoney"></i> 宠物豆<span>+2</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="homeItem">
      <div class="homeItemTitle">- 热卖专区 -</div>
      <router-link tag="div" to="/Home/HotArea" class="homeItemImg">
        <img src="../../assets/images/data/banner/banner3.png" alt="">
      </router-link>
      <div class="listItem-img">
        <div class="Item-box">
          <div class="item">
            <div class="item-img" @click="goDetails()">
              <img src="../../assets/images/data/home/1.png" alt="">
              <p class="item-name">小宠物玩具可调节</p>
              <p class="item-money">￥58</p>
              <p class="item-bean"><i class="iconmoney"></i> 宠物豆<span>+2</span></p>
            </div>
            <div class="item-img" @click="goDetails()">
              <img src="../../assets/images/data/home/2.png" alt="">
              <p class="item-name">小宠物玩具可调节</p>
              <p class="item-money">￥58</p>
              <p class="item-bean"><i class="iconmoney"></i> 宠物豆<span>+2</span></p>
            </div>
            <div class="item-img" @click="goDetails()">
              <img src="../../assets/images/data/home/3.png" alt="">
              <p class="item-name">小宠物玩具可调节</p>
              <p class="item-money">￥58</p>
              <p class="item-bean"><i class="iconmoney"></i> 宠物豆<span>+2</span></p>
            </div>
            <div class="item-img" @click="goDetails()">
              <img src="../../assets/images/data/home/4.png" alt="">
              <p class="item-name">小宠物玩具可调节</p>
              <p class="item-money">￥58</p>
              <p class="item-bean"><i class="iconmoney"></i> 宠物豆<span>+2</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="homeItem">
      <div class="homeItemTitle">- 汪的盛宴 -</div>
      <router-link tag="div" to="/Home/FoodArea" class="homeItemImg">
        <img src="../../assets/images/data/banner/banner4.png" alt="">
      </router-link>
      <div class="listItem-img">
        <div class="Item-box">
          <div class="item">
            <div class="item-img" @click="goDetails()">
              <img src="../../assets/images/data/home/1.png" alt="">
              <p class="item-name">小宠物玩具可调节</p>
              <p class="item-money">￥58</p>
              <p class="item-bean"><i class="iconmoney"></i> 宠物豆<span>+2</span></p>
            </div>
            <div class="item-img" @click="goDetails()">
              <img src="../../assets/images/data/home/2.png" alt="">
              <p class="item-name">小宠物玩具可调节</p>
              <p class="item-money">￥58</p>
              <p class="item-bean"><i class="iconmoney"></i> 宠物豆<span>+2</span></p>
            </div>
            <div class="item-img" @click="goDetails()">
              <img src="../../assets/images/data/home/3.png" alt="">
              <p class="item-name">小宠物玩具可调节</p>
              <p class="item-money">￥58</p>
              <p class="item-bean"><i class="iconmoney"></i> 宠物豆<span>+2</span></p>
            </div>
            <div class="item-img" @click="goDetails()">
              <img src="../../assets/images/data/home/4.png" alt="">
              <p class="item-name">小宠物玩具可调节</p>
              <p class="item-money">￥58</p>
              <p class="item-bean"><i class="iconmoney"></i> 宠物豆<span>+2</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "we-vue";
import SeachBox from "../../base/seachBox/seachBox";

export default {
  name: "home",
  data() {
    return {
      imgData: [
        { img: "/img/banner1.2c2cfb5d.png" },
        { img: "/img/banner2.b1078cd6.png" },
        { img: "/img/banner3.ff271174.png" },
        { img: "/img/banner4.9e6c6797.png" }
      ]
    };
  },
  methods: {
    goDetails() {
      this.$router.push({
        path: "/Details"
      });
    }
  },
  components: {
    Swipe,
    SwipeItem,
    SeachBox
  }
};
</script>

<style lang="scss">
.home {
  background: #fff;
  padding-bottom: 120px;
}
.homeLove {
  padding: 0 30px;
  box-sizing: border-box;
  .homeLoverTitle {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 28px;
    color: #4a4a4a;
    letter-spacing: 0.86px;
  }
  .homeLoveItem {
    display: flex;
    justify-content: space-between;
  }
  .homeLoveItem > div {
    width: 334px;
    height: 320px;
    &.love-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .last img {
        vertical-align: bottom;
      }
    }
  }
}
.homeItem {
  padding: 0 30px;
  box-sizing: border-box;
  .homeItemTitle {
    width: 100%;
    text-align: center;
    font-size: 24px;
    color: #4a4a4a;
    letter-spacing: 1px;
    margin: 60px 0 20px 0;
  }
  .homeItemImg {
    margin-bottom: 20px;
  }
  .listItem-img {
    width: 100%;
    height: 420px;
    overflow: hidden;
    .Item-box {
      width: 100%;
      height: 100%;
      overflow: hidden;
      overflow-x: auto;
      box-sizing: content-box;
      &::-webkit-scrollbar {
        display: none;
        margin: 0;
        padding: 0;
      }
      .item {
        width: 1000000px;
        .item-img {
          width: 260px;
          float: left;
          margin-right: 20px;
          .item-name {
            font-size: 24px;
            color: #999999;
            letter-spacing: 0.86px;
            margin: 15px 0;
            width: 100%;
            height: 25px;
            line-height: 25px;
            overflow: hidden;
          }
          .item-money {
            font-size: 28px;
            color: #60d4ba;
            letter-spacing: 1px;
            margin: 20px 0;
          }
          .item-bean {
            display: flex;
            height: 40px;
            align-items: center;
            font-size: 20px;
            color: #999;
            letter-spacing: 0.71px;
            i {
              margin-right: 16px;
            }
            span {
              color: #ffd664;
              letter-spacing: 0.71px;
              line-height: 28px;
              margin-left: 3px;
            }
          }
        }
      }
    }
  }
}
</style>
