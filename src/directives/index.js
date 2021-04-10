import vLoading from './vLoading.js';
import vLazy from './vLazy.js';
import Vue from 'vue';

// 注册全局指令
Vue.directive('loading', vLoading);
Vue.directive('lazy', vLazy);
