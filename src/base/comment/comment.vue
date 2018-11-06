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
        <div class="commentItemListImg" v-if="item.dataImg.length >= 0">
          <div v-for="(img, index) in item.dataImg" :key="index">
            <img :src="img" alt="">
          </div>
        </div>
        <div class="commentItemTime">
          <div class="commenTite">
            {{item.time}}
          </div>
          <div class="commenLike">
            <span>
              <img src="../../assets/images/icon/comment.png" alt=""> {{item.score}}
            </span>
            <span v-if="item.myLike">
              <img src="../../assets/images/icon/like.png" alt=""> {{item.like}}
            </span>
            <span v-if="!item.myLike">
              <img src="../../assets/images/icon/likeAct.png" alt=""> {{item.like}}
            </span>
          </div>
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
  margin-bottom: 20px;
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
    border-bottom: 2px solid #eaeaea;
    padding-bottom: 30px;
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
      display: flex;
      flex-wrap: wrap;
      margin: 20px 0;
      div {
        display: block;
        width: 128px;
        height: 128px;
        margin-right: 30px;
      }
    }
    .commentItemTime {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .commenLike {
        display: flex;
        align-items: center;
        span {
          display: flex;
          align-items: center;
          margin-left: 30px;
          img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
.comment div:last-child .commentItemRight {
  border: none;
}
</style>
