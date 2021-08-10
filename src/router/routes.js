import Home from '../views/layout/Home.vue';
import AddProducts from '../views/AddProducts.vue';
import ProductList from '../views/ProductList.vue';
import Login from '../views/Login.vue';
import Statistics from '../views/Statistics.vue';

const routes = [
  {
    path: '*',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      key: 'sub1',
    },
    children: [{
      path: 'Statistic',
      name: 'Statistic',
      component: Statistics,
      meta: {
        title: '统计',
      },
    }],
  },
  {
    path: '/Products',
    name: 'Products',
    component: Home,
    meta: {
      title: '商品',
    },
    children: [{
      path: 'Add',
      name: 'Add',
      component: AddProducts,
      meta: {
        title: '添加商品',
      },
    },
    {
      path: 'Edit/:id',
      name: 'Edit',
      component: AddProducts,
      meta: {
        title: '编辑商品',
      },
    },
    {
      path: 'List',
      name: 'List',
      component: ProductList,
      meta: {
        title: '商品列表',
      },
    },
    ],
  },
];
export default routes;
