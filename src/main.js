import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import './plugins/aos';
// import './plugins/iview.js';
import './plugins/index';

import './assets/css/font/font.css';

// import './utils/eventBus';
// import './utils/addStorageEvent';
// import './utils/showMessage';
import './utils/index';

// AOS.init();

// 注册全局指令 v-loading
import './directives/index';

import './mock';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// 测试mock数据
// import * as articleTest from './api/index';
// articleTest.getArticleDetail('asdasd').then((r) => {
//   console.log(r);
// });

// articleTest
//   .postComment({ nickname: 'asd', content: 'asfafsda', id: 5 })
// //   .then((r) => {
// //     console.log(r);
// //   });

// articleTest.getComment({ articleId: 10, page: 1, limit: 10 }).then((r) => {
//   console.log(r);
// });
