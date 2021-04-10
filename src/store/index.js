import Vue from 'vue';
import Vuex from 'vuex';
import loginUser from './loginUser';
import setting from './setting';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loginUser,
    setting,
  },
  strict: true, // 开启严格模式  只能通过mutation改变状态
});
