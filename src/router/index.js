import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import routes from './routes';

Vue.use(VueRouter);

// 获取原型对象上的push函数

const originalPush = VueRouter.prototype.push;
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/Login') {
    if (store.state.user.appkey && store.state.user.username && store.state.user.role) {
      return next();
    }
    return next('/Login');
  }
  return next();
});

export default router;
