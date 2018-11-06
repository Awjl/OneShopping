<template>
  <div class="area">
    <div class="areaList">
      <router-link tag="div" class="areaItem" to="/Home/AreaDratal">
        <img src="../../assets/images/data/home/item1.png" alt="">
      </router-link>
      <router-link tag="div" class="areaItem" to="/Home/AreaDratal">
        <img src="../../assets/images/data/home/item2.png" alt="">
      </router-link>
      <router-link tag="div" class="areaItem" to="/Home/AreaDratal">
        <img src="../../assets/images/data/home/item3.png" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Area"
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
