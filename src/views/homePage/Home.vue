<template>
  <div class="home">
    <!-- 搜索 -->
    <!-- <SeachBox></SeachBox> -->
    <wv-swipe :height="140" :autoplay="3000">
      <wv-swipe-item v-for="(item, index) in imgData.focus" :key="index">
        <div>
          <img :src="item.mobileImg | formatImg412x180" alt>
        </div>
      </wv-swipe-item>
    </wv-swipe>
    <div class="homeLove">
      <div class="homeLoverTitle">公益达人</div>
      <div class="homeLoveItem">
        <router-link
          tag="div"
          class="love-left"
          :to="{ path: '/Home/SpecialArea', query: { sp: 'HOME_SPECIAL_1'}}"
        >
          <img src="../../assets/images/bg/home/love1.png" alt>
        </router-link>
        <div class="love-right">
          <router-link tag="div" :to="{ path: '/Home/SpecialArea', query: { sp: 'HOME_SPECIAL_2'}}">
            <img src="../../assets/images/bg/home/love2.png" alt>
          </router-link>
          <router-link
            tag="div"
            class="last"
            :to="{ path: '/Home/SpecialArea', query: { sp: 'HOME_SPECIAL_3'}}"
          >
            <img src="../../assets/images/bg/home/love3.png" alt>
          </router-link>
        </div>
      </div>
    </div>
    <div class="homeItem" v-for="(block, index) in blocks" :key="index">
      <div class="homeItemTitle">- {{block.title}} -</div>
      <router-link
        tag="div"
        :to="{ path: '/Home/NoviceArea', query: { id: block.id}}"
        class="homeItemImg"
      >
        <img :src="block.icon| formatJpg" alt>
      </router-link>
      <div class="listItem-img">
        <div class="Item-box">
          <div class="item">
            <div
              class="item-img"
              @click.stop="goDetails(item.catalogId)"
              v-for="(item, index) in block.items"
              :key="index"
            >
              <img :src="item.catalog.mainImg | formatJpg" alt>
              <p class="item-name">{{item.catalog.name}}</p>
              <p class="item-money">￥{{item.catalog.price | formatFee}}</p>
              <p class="item-bean">
                <i class="iconmoney"></i> 宠物豆
                <span>+{{item.catalog.loveBean}}</span>
              </p>
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
import { getBanner, getHomeList } from "@/api/home/home";
import { configData } from "@/utils/config";

export default {
  name: "home",
  data() {
    return {
      imgData: {},
      blocks: []
    };
  },
  created() {
    this._getBanner();
    this._getHomeList();
  },
  methods: {
    _getBanner() {
      getBanner()
        .then(res => {
          if (res.code === configData.codeState) {
            console.log("Banner=============");
            this.imgData = res.data;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    _getHomeList() {
      getHomeList()
        .then(res => {
          if (res.code === configData.codeState) {
            console.log("列表=============");
            this.blocks = res.data;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    goDetails(pid) {
      this.$router.push({
        path: "/Details",
        query: {
          pid: pid
        }
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
      height: 100%;
      width: 100%;
      box-sizing: content-box;
      display: -webkit-box;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
        margin: 0;
        padding: 0;
      }
      .item {
        display: flex;
        .item-img {
          width: 260px;
          height: 420px;
          margin-right: 20px;
          .item-name {
            font-size: 24px;
            color: #999999;
            letter-spacing: 0.86px;
            margin: 15px 0;
            width: 100%;
            height: 26px;
            line-height: 26px;
            overflow: hidden;
            white-space: nowrap;
            -ms-text-overflow: ellipsis;
            text-overflow: ellipsis;
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
