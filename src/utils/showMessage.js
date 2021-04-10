import Vue from 'vue';
import getComponentRootDom from './getComponentRootDom';
import Icon from '@/cmpUI/Icon';
import styles from './styles/showMessage.module.scss';
/**
 * 显示消息弹框
 * @param {String} content 显示的内容
 * @param {String} type 消息类型 info error success warn
 * @param {Number} duration 提示框停留时间
 * @param {HTMLElement} container 容器  默认为body  弹框在该容器中居中
 */
Vue.prototype.$showMessage = function(options = {}, callback) {
  let {
    content = ' ',
    type = 'info',
    duration = 2000,
    container = document.body,
  } = options;
  let div = document.createElement('div');
  const el = getComponentRootDom(Icon, {
    type,
  });
  let typeName = 'message-' + type;
  div.className = `${styles.message} ${styles[typeName]}`;
  div.innerHTML = `<span class="${styles.icon}">${el.outerHTML}</span><div>${content}</div>`;
  if (options.container) {
    if (getComputedStyle(container).position === 'static') {
      container.style.position = 'relative';
    }
  }
  container.appendChild(div);

  // 让浏览器强制渲染
  div.clientHeight; // 导致reflow

  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-15px)`;
    callback && callback();

    div.addEventListener(
      'transitionend',
      function() {
        div.remove();
      },
      { once: true }
    );
  }, duration);
};
