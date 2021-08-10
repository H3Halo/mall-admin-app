<template>
  <div>
    <Search @submit="searchSubmit" :data="categoryList"></Search>
    <a-button class="add-btn">
      <router-link :to="{name:'Add'}">添加商品</router-link>
    </a-button>
    <List :data="listData" :page="page"
    @change="changePage"
    :categoryList="categoryList"
    @edit="editProduct"
    @remove="removeProduct"
    ></List>
  </div>
</template>

<script>
import List from '../components/List.vue';
import Search from '../components/Search.vue';
import api from '../api/user';

export default {
  data() {
    return {
      listData: [],
      searchForm: {},
      categoryList: [],
      page: {
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        total: 1,
      },
      categoryObj: {},
    };
  },
  components: { Search, List },
  async created() {
    await api.searchCategory().then((res) => {
      this.categoryList = res.data;
      res.data.forEach((item) => {
        this.categoryObj[item.id] = item;
      });
    });
    this.getListData();
  },
  methods: {
    searchSubmit(from) {
      this.searchForm = from;
      this.getListData();
    },
    getListData() {
      api.searchProducts({
        page: this.page.current,
        size: this.page.pageSize,
        ...this.searchForm,
      }).then((res) => {
        this.page.total = res.total;
        this.listData = res.data.map((item) => ({
          ...item,
          categoryName: this.categoryObj[item.category].name,
        }));
      });
    },
    changePage(page) {
      this.page = page;
      this.getListData();
    },
    editProduct(record) {
      this.$router.push({
        name: 'Edit',
        params: {
          id: record.id,
        },
      });
    },
    removeProduct(record) {
      this.$confirm({
        title: '确认删除',
        content: () => <div style="color:red;">{`确认删除标题为:${record.title}的商品吗`}</div>,
        onOk: () => {
          api.remove({
            id: record.id,
          }).then((res) => {
            console.log(res);
            this.getListData();
          });
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'confirm-box',
      });
    },
  },
};
</script>

<style lang="less" scoped>
.add-btn{
  float: right;
  top: -46px;
  right: 50px;
}
</style>
