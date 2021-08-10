<template>
  <div class="home">
    <Menu :key="key"></Menu>
    <div :class="{'menu-app':true,'menu-unfold':$store.state.collapsed}">
      <slider-nav></slider-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from '../../components/Menu.vue';
import SliderNav from '../../components/SliderNav.vue';

export default {
  data() {
    return {
      key: new Date().getTime(),
    };
  },
  watch: {
    $route() {
      this.key = new Date().getTime();
    },
  },
  components: {
    Menu,
    SliderNav,
  },
};
</script>
<style lang='less'>
@import url("~@/styles/home.less");
</style>
