<template>
  <div class="main-header">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <template>
        <a-breadcrumb>
          <a-breadcrumb-item>
            {{ currentRoute[0] ? currentRoute[0].meta.title : '首页' }}</a-breadcrumb-item>
          <a-breadcrumb-item>
            {{ currentRoute[1] ? currentRoute[1].meta.title : '统计' }}</a-breadcrumb-item>
        </a-breadcrumb>
      </template>
    </div>
    <ul class="user-info">
      <li>
        欢迎！{{ $store.state.user.username }}
        <a-icon type="right" />
      </li>
      <li @click="logout" class="logout">退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: [],
    };
  },
  watch: {
    $route() {
      this.currentRoute = this.$router.currentRoute.matched;
    },
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    logout() {
      this.$store.commit('logout');
      this.$router.push({
        name: 'Login',
      }).catch(() => {});
    },
  },
};
</script>

<style scoped lang='less'>
</style>
