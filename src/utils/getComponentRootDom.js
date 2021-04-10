import Vue from 'vue';
/**
 * 通过组件实例返回真实的dom元素
 * @param {*} cmp  vue组件实例
 * @param {*} props 属性
 * @returns
 */
export default function(cmp, props) {
  const vm = new Vue({
    render: (h) => h(cmp, { props }),
  });
  vm.$mount();
  return vm.$el;
}
