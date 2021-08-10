<template>
  <div class="menu-list">
      <a-menu
        :default-selected-keys="[defaultSelectKey]"
      :default-open-keys="[defaultOpenKey]"
        mode="inline"
        theme="dark"
        :inline-collapsed="$store.state.collapsed"
      >
        <a-sub-menu key="Home">
          <span slot="title"
            ><a-icon type="home" /><span>首页</span></span
          >
            <a-menu-item key="Statistic" @click="statistic">
              <a-icon type="line-chart" />统计 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="Products">
          <span slot="title"
            ><a-icon type="appstore" /><span>商品</span></span
          >
          <a-menu-item key="List" @click="productList"><a-icon type="ordered-list" />
              商品列表
          </a-menu-item>
          <a-menu-item key="Add" @click="addProducts"><a-icon type="plus" /> 添加商品 </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
</template>

<script>
export default {
  computed: {
    defaultSelectKey: {
      get() {
        return this.$router.currentRoute.matched[1]
          ? this.$router.currentRoute.matched[1].name
          : '';
      },
    },
    defaultOpenKey: {
      get() {
        return this.$router.currentRoute.matched[0].name;
      },
    },
  },
  watch: {
    $route() {
      console.log(this.$router);
    },
  },
  methods: {
    statistic() {
      this.$router.push('/Home/Statistic');
    },
    productList() {
      this.$router.push('/Products/List');
    },
    addProducts() {
      this.$router.push('/Products/Add');
    },
  },
};
</script>

<style>

</style>
