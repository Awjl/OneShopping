<template>
  <div class="comment">
    <div class="comment-proper">暂无留言</div>
    <div class="commentItem" v-for="(item, index) in commentData" :key="index">
      <!-- {{item.comment}} -->
      <div class="commentItemLeft">
        <div class="commentItemImg">
          <img :src="item.avatar | formatImg160x160" alt />
        </div>
      </div>
      <div class="commentItemRight">
        <div class="commentItemNeme">
          <span>{{item.nickName}}</span>
          <div class="commentItemStar">
            <img src="../../assets/images/icon/star.png" alt v-if="item.star >= 1" />
            <img src="../../assets/images/icon/star.png" alt v-if="item.star >= 2" />
            <img src="../../assets/images/icon/star.png" alt v-if="item.star >= 3" />
            <img src="../../assets/images/icon/star.png" alt v-if="item.star >= 4" />
            <img src="../../assets/images/icon/star.png" alt v-if="item.star >= 5" />
          </div>
        </div>
        <div class="commentItemConter">{{item.content}}</div>
        <!-- <div class="commentItemListImg" v-if="item.dataImg.length > 0">
          <div v-for="(img, index) in item.dataImg" :key="index">
            <img :src="img" alt="">
          </div>
        </div>
        <div class="OtherComment" v-if="item.ListComoent.length > 0">
          <div class="OtherCommentAngule angule"></div>
          <div class="OtherCommentItem" v-for="(OtherItem, index) in item.ListComoent" :key="index">
            <span>{{OtherItem.name}}</span>：{{OtherItem.ItemCom}}
          </div>
        </div>-->
        <div class="commentItemTime">
          <div class="commenTite">{{item.createTime}}</div>
          <div class="commenLike">
            <span @click="showCommen">
              <img src="../../assets/images/icon/comment.png" alt />
              {{item.score}}
            </span>
            <span v-if="item.myLike">
              <img src="../../assets/images/icon/like.png" alt />
              {{item.like}}
            </span>
            <span v-if="!item.myLike">
              <img src="../../assets/images/icon/likeAct.png" alt />
              {{item.like}}
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
  props: ["commentData"],
  data() {
    return {
      showBoxcom: true
    };
  },
  created() {},
  methods: {
    showCommen() {
      this.$emit("cliShowBox", this.showBoxcom);
    }
  }
};
</script>

<style lang="scss">
.comment-proper {
  width: 100%;
  text-align: center;
  height: 93px;
  line-height: 93px;
  font-size: 24px;
  color: #999999;
  letter-spacing: 0.86px;
}
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
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 20px 0;
      div {
        // display: block;
        width: 128px;
        // height: 128px;
        // margin-right: 20px;
        margin-bottom: 20px;
      }
    }
    .OtherComment {
      padding: 20px;
      background: #f2f2f2;
      font-size: 24px;
      color: #3f3f3f;
      letter-spacing: 0.86px;
      line-height: 33px;
      margin: 20px 0;
      position: relative;
      .OtherCommentAngule {
        position: absolute;
        width: 36px;
        height: 24px;
        top: -18px;
        left: 20px;
      }
      .OtherCommentItem {
        margin: 10px 0;
      }
      span {
        font-size: 24px;
        color: #222222;
        letter-spacing: 0.86px;
      }
    }
    .commentItemTime {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #999999;
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
