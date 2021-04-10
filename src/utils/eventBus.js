import Vue from 'vue';
const app = new Vue({});

/**
 * 事件名： mainScroll
 * 参数：
 *    滚动的dom元素 如果是undefined，表示该dom为Window对象
 */
Vue.prototype.$bus = app; // 这就相当于下面的代码

export default app;

// let listeners = {};
// Vue.prototype.$bus = {
//   /**
//    * 监听一个事件
//    * @param {String} eventName  事件名
//    * @param {Function} handler 处理函数
//    */
//   $on(eventName, handler) {
//     if (!listeners[eventName]) {
//       listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(handler);
//   },
//   /**
//    * 取消监听一个事件
//    * @param {String} eventName  事件名
//    * @param {Function} handler 处理函数
//    */
//   $off(eventName, handler) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },
//   /**
//    * 触发事件
//    * @param {String} eventName 事件名
//    * @param  {...any} arg  参数
//    */
//   $emit(eventName, ...args) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     for (const handler of listeners[eventName]) {
//       handler(...args);
//     }
//   },
// };
