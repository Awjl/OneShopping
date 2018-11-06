<template>
  <div class="comment">
    <div class="commentItem" v-for="(item, index) in commentData" :key="index">
      <!-- {{item.comment}} -->
      <div class="commentItemLeft">
        <div class="commentItemImg">
          <img :src="item.TouImg" alt="">
        </div>
      </div>
      <div class="commentItemRight">
        <div class="commentItemNeme">
          <span>{{item.name}}</span>
          <div class="commentItemStar">
            <img src="../../assets/images/icon/star.png" alt="" v-if="item.score >= 1">
            <img src="../../assets/images/icon/star.png" alt="" v-if="item.score >= 2">
            <img src="../../assets/images/icon/star.png" alt="" v-if="item.score >= 3">
            <img src="../../assets/images/icon/star.png" alt="" v-if="item.score >= 4">
            <img src="../../assets/images/icon/star.png" alt="" v-if="item.score >= 5">
          </div>
        </div>
        <div class="commentItemConter">
          {{item.comment}}
        </div>
        <div class="commentItemListImg" v-if="item.dataImg">
          <img :src="img" alt="" v-for="(img, index) in item.dataImg" :key="index">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: ["commentData"]
};
</script>

<style lang="scss">
.commentItem {
  display: flex;
  justify-content: space-between;
  .commentItemLeft {
    .commentItemImg {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .commentItemRight {
    width: 604px;
    .commentItemNeme {
      height: 60px;
      display: flex;
      align-items: center;
      span {
        font-size: 24px;
        color: #666666;
      }
      .commentItemStar {
        margin-left: 42px;
        img {
          width: 29px;
          height: 26px;
          margin-right: 10px;
        }
      }
    }
    .commentItemConter {
      font-size: 24px;
      color: #222222;
      letter-spacing: 0.86px;
      line-height: 40px;
      margin: 10px 0;
    }
    .commentItemListImg {
      width: 100%;
      display: flex;
    }
  }
}
</style>
