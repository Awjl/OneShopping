<template>
  <div class="CommentBox" v-if="showCommentBox" @click.stop="hideCommentBox(1)">
    <div class="commentInp" @click.stop="hideCommentBox(2)">
      <textarea name="" id="" cols="30" rows="10" placeholder="写回复"></textarea>
      <div>发送</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentBox",
  props: ["showCommentBox"],
  data() {
    return {
      hideBoxC: false
    };
  },
  methods: {
    hideCommentBox(val) {
      if (val == 1) {
        this.$emit("hideBoxC", this.hideBoxC);
      }
    }
  }
};
</script>

<style lang="scss">
.CommentBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  align-items: flex-end;
  .commentInp {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background: #f2f2f2;
    width: 100%;
    padding: 30px;
    color: #666;
    textarea {
      outline: none;
      height: 130px;
      width: 610px;
      border-radius: 10px;
      padding: 5px 10px;
      box-sizing: border-box;
    }
    div {
      width: 80px;
      text-align: center;
      height: 30px;
    }
  }
}
</style>
