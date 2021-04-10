import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './route';
import { titleController } from '@/utils/index';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // },
});
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    const isLogin = JSON.parse(localStorage.getItem('IS_LOGIN'));
    if (isLogin === 'login') {
      //已登录
      next();
    } else {
      // 未登录
      new Vue({}).$showMessage(
        { type: 'warn', content: '请先登录,即将跳转到登录页' },
        () => {
          next({
            name: 'login',
            params: {
              prevUrl: to.fullPath,
            },
          });
        }
      );
    }
  } else {
    next();
  }
});
router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
  }
});
export default router;
