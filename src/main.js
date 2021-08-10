import Vue from 'vue';
import Antd from 'ant-design-vue';
import VCharts from 'v-charts';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';
import '@/styles/reset.less';

Vue.config.productionTip = false;

Vue.use(VCharts);
Vue.use(Antd);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
