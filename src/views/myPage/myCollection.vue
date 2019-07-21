<template>
  <div class="myCollection">
    <div class="myCollectionBtn">
      <span>编辑</span>
    </div>
    <div class="DataList">
      <div
        class="DataItem"
        v-for="(item, index) in careinfo"
        :key="index"
        @click="goDetails(item.id)"
      >
        <div class="DataItemImg">
          <img :src="item.mainImg | formatImg165x167" alt />
          <div class="DataItemImgSub"></div>
        </div>
        <p class="item-name">{{item.name}}</p>
        <p class="item-money">
          <span>￥{{item.price | formatFee}}</span>
        </p>
        <p class="item-bean">
          <i class="iconmoney"></i> 宠物豆
          <span>+{{item.loveBean}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getFavoriate } from "@/api/user/user";
import { configData } from "@/utils/config";
export default {
  name: "myCollection",
  data() {
    return {
      listImg: [
        {
          img: "./img/1.c4c256bd.png",
          name: "韩国秋冬宠物屋",
          price: "48",
          addNum: "2"
        },
        {
          img: "./img/2.04132dd9.png",
          name: "韩国秋冬宠物屋",
          price: "48",
          addNum: "2"
        },
        {
          img: "./img/3.dd074d9a.png",
          name: "韩国秋冬宠物屋",
          price: "48",
          addNum: "2"
        },
        {
          img: "./img/4.98b6271f.png",
          name: "韩国秋冬宠物屋",
          price: "48",
          addNum: "2"
        }
      ],
      careinfo: []
    };
  },
  created() {
    this.menu();
  },
  mounted() {
    this.getFavoriate();
  },
  methods: {
    // 获取收藏列表
    getFavoriate() {
      getFavoriate()
        .then(({ code, data, message }) => {
          if (code === configData.codeState) {
            console.log("收藏列表=====================");
            console.log(data);
            this.careinfo = data.items;
            // Object.assign(this.useInfo, data);
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
    },
    menu() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss">
.myCollection {
  .myCollectionBtn {
    display: flex;
    justify-content: flex-end;
    padding: 0 30px;
    height: 50px;
    line-height: 50px;
    font-size: 28px;
    color: #222222;
    letter-spacing: 2.33px;
  }
  .DataList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 30px;
    margin-top: 20px;
    .DataItem {
      width: 48%;
      margin-bottom: 30px;
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
        font-size: 24px;
        color: #60d4ba;
        letter-spacing: 1px;
        margin: 20px 0;
        span {
          font-size: 28px;
        }
      }
      .item-bean {
        display: flex;
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
      .DataItemImg {
        position: relative;
        .DataItemImgSub {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba($color: #000000, $alpha: 0.5);
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
