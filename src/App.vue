<template>
  <div id="app">
    <keep-alive>
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
.app {
  background: #fff;
}
</style>
