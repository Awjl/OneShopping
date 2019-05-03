<template>
  <div class="DataList">
    <div class="DataItem" v-for="(item, index) in listImg" :key="index" @click="goDetails(item)">
      <div v-if="item.catalog">
        <img :src="item.catalog.mainImg | formatJpg" alt>
        <p class="item-name">{{item.catalog.name}}</p>
        <p class="item-money">
          暖心价：
          <span>￥{{item.catalog.price | formatFee}}</span>
        </p>
        <p class="item-bean">
          <i class="iconmoney"></i> 宠物豆
          <span>+{{item.catalog.loveBean}}</span>
        </p>
      </div>
      <div v-else>
        <img :src="item.mainImg | formatJpg" alt>
        <p class="item-name">{{item.name}}</p>
        <p class="item-money">
          暖心价：
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
export default {
  name: "List",
  props: ["listImg"],
  created() {
    this.menu();
  },
  methods: {
    goDetails(pid) {
      // item.catalogId
      let pidData = "";
      if (pid.catalogId) {
        pidData = pid.catalogId;
      } else {
        pidData = pid.id;
      }
      this.$router.push({
        path: "/Details",
        query: {
          pid: pidData
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
.DataList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
  }
}
</style>
