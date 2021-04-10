import * as userApi from '../api/user';
export default {
  namespace: true, //开启命名空间
  state: {
    user: null,
  },
  getters: {
    isLogin(state) {
      if (state.user) {
        return 'login';
      } else {
        return 'unLogin';
      }
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async login(ctx, payload) {
      const resp = await userApi.login(payload.loginId, payload.loginPsw);
      ctx.commit('setUser', resp);
      return resp;
    },
    async whoAmI(ctx) {
      const resp = await userApi.whoAnI();
      ctx.commit('setUser', resp);
    },
    async loginOut(ctx) {
      await userApi.loginOut();
      ctx.commit('setUser', null);
    },
  },
};
