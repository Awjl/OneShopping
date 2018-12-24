<template>
  <div class="area">
    <div class="areaList">
      <router-link tag="div" class="areaItem" to="/Home/AreaDratal"  v-for="(block, index) in myList" :key="index">
        <img v-if="block.icon" :src="block.icon | formatJpg" :bid="block.id" alt="" class="proName">
      </router-link>
    </div>
  </div>
</template>

<script>
import { getPreferential } from "@/api/home/home"
export default {
  name: "Area",
  data() {
    return {
      myList: []
    }
  },
  created() {
    // this.myOrderTab = this.$route.query.sp;
    console.log(this.$route.query.sp)
    getPreferential(this.$route.query.sp).then(res => {
      if (res.code == 0) {
        this.myList = res.data.records
        console.log(this.myList)
      }
    })
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
    .areaItem {
      margin-bottom: 20px;
    }
  }
}
</style>
