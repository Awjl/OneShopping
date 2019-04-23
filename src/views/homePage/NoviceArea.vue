<template>
  <div class="NovDratal">
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
      listImg: {}
    };
  },
  created() {
    console.log(this.$route.query.id);
    this._geshopingList(this.$route.query.id)
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
.NovDratal {
  padding: 0 40px 100px;
  .NovDratalImg {
    margin: 20px 0;
  }
}
</style>
