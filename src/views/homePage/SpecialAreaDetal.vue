<template>
  <div class="areaDratal">
    <div class="NovDratalImg">
      <img v-if="listImg.icon" :src="listImg.icon | formatJpg">
    </div>
    <ShoppingList :listImg="listImg.items"></ShoppingList>
  </div>
</template>

<script>
import ShoppingList from "@/base/shoppingList/shoppingList";
import { geshopingList } from "@/api/home/home";
import { configData } from "@/utils/config";

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
        }
      ]
    };
  },
  created() {
    this._geshopingList(this.$route.query.id);
    this.menu();
  },
  methods: {
    _geshopingList(id) {
      geshopingList(id)
        .then(res => {
          if (res.code === configData.codeState) {
            console.log("数据列表=============");
            this.listImg = res.data;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
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
.areaDratal {
  padding: 0 40px 100px;
  .NovDratalImg {
    margin: 20px 0;
  }
}
</style>
