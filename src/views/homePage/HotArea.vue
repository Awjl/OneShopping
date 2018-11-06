<template>
  <div class="HotArea">
    <div class="HotAreaImg">
      <img src="../../assets/images/data/banner/banner3.png" alt="">
    </div>
    <ShoppingList :listImg="listImg"></ShoppingList>
  </div>
</template>

<script>
import ShoppingList from "@/base/shoppingList/shoppingList";

export default {
  name: "AreaDratal",
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
        },
        {
          img: "./img/4.98b6271f.png",
          name: "韩国秋冬宠物屋",
          price: "48",
          addNum: "2"
        },
        {
          img: "./img/4.98b6271f.png",
          name: "韩国秋冬宠物屋",
          price: "48",
          addNum: "2"
        },
        {
          img: "./img/4.98b6271f.png",
          name: "韩国秋冬宠物屋",
          price: "48",
          addNum: "2"
        },
        {
          img: "./img/4.98b6271f.png",
          name: "韩国秋冬宠物屋",
          price: "48",
          addNum: "2"
        },
        {
          img: "./img/4.98b6271f.png",
          name: "韩国秋冬宠物屋",
          price: "48",
          addNum: "2"
        },
        {
          img: "./img/4.98b6271f.png",
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
      ]
    };
  },
  created() {
    this.menu();
  },
  methods: {
    menu() {
      window.scrollTo(0, 0);
    }
  },
  components: {
    ShoppingList
  }
};
</script>

<style lang="scss">
.HotArea {
  padding: 0 40px 100px;
  .HotAreaImg {
    margin: 20px 0;
  }
}
</style>
