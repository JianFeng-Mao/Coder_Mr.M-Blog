import { titleController } from '@/utils/index';

export default {
  namespace: true,
  state: {
    data: null,
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    fetchSetting(ctx) {
      // 请求后台 获取全局数据
      ctx.commit('setData', { title: 'coder_M' });
    },
  },
};
