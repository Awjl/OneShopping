<template>
  <div class="area">
    <div class="areaList">
      <h1>{{title}}</h1>
      <router-link
        tag="div"
        class="areaItem"
        :to="{ path: '/Home/AreaDratal', query: {  id: block.id}}"
        v-for="(block, index) in myList"
        :key="index"
      >
        <img v-if="block.icon" :src="block.icon | formatJpg" :bid="block.id" alt class="proName">
      </router-link>
    </div>
  </div>
</template>

<script>
import { getPreferential } from "@/api/home/home";
export default {
  name: "Area",
  data() {
    return {
      myList: [],
      title: ''
    };
  },
  created() {
    var sp = this.$route.query.sp;
    if (sp == "HOME_SPECIAL_1") {
      this.title = "一次专区";
    } else if (sp == "HOME_SPECIAL_2") {
      this.title = "二次专区";
    } else if (sp == "HOME_SPECIAL_3") {
      this.title = "三次专区";
    }
    getPreferential(this.$route.query.sp).then(res => {
      if (res.code == 0) {
        this.myList = res.data.records;
        console.log(this.myList);
      }
    });
  }
};
</script>

<style lang="scss">
.area {
  padding-bottom: 110px;
  .areaList {
    margin-top: 20px;
    padding: 0 40px;
    box-sizing: border-box;
    h1 {
      text-align: center;
      font-size: 40px;
      margin-bottom: 20px;
    }
    .areaItem {
      margin-bottom: 20px;
    }
  }
}
</style>
