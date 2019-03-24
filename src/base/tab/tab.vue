<template>
  <div id="nav">
    <router-view></router-view>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/Home" v-if="$route.path.indexOf('Home') === -1">
        <i class="tabIcon home-icon"></i>
        <span class="tab-link">溜个弯</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/Home" v-else>
        <i class="tabIcon home-acticon"></i>
        <span class="tab-link_active">溜个弯</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/Service" v-if="$route.path.indexOf('Service') === -1">
        <i class="tabIcon ser-icon"></i>
        <span class="tab-link">服务</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/Service" v-else>
        <i class="tabIcon ser-acticon"></i>
        <span class="tab-link_active">服务</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/Love" v-if="$route.path.indexOf('Love') === -1">
        <i class="tabIcon lover-icon"></i>
        <span class="tab-link">好好爱</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/Love" v-else>
        <i class="tabIcon lover-acticon"></i>
        <span class="tab-link_active">好好爱</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/Shopping" v-if="$route.path.indexOf('Shopping') === -1">
        <i class="tabIcon Shopping-icon"></i>
        <span class="tab-link">别墨迹</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/Shopping" v-else>
        <i class="tabIcon Shopping-acticon"></i>
        <span class="tab-link_active">别墨迹</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/My" v-if="$route.path.indexOf('My') === -1">
        <i class="tabIcon My-icon"></i>
        <span class="tab-link">小窝</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/My" v-else>
        <i class="tabIcon My-acticon"></i>
        <span class="tab-link_active">小窝</span>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    msg: String
  }
};
</script>

<style lang="scss">
.tab {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 98px;
  border-top: 1px solid #ddd;
  background: #fff;
  z-index: 9;
  .tab-item {
    width: 25%;
    height: 98px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      color: #000000;
      font-size: 18px;
      margin-top: 8px;
      &.tab-link_active {
        color: #60d4ba;
      }
    }
  }
}
</style>
