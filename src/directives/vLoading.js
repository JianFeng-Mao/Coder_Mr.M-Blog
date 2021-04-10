import loadingSvg from '../assets/loading.svg';
import styles from './styles/abs.module.scss';
function getLoadingEl(el) {
  // 获取已存在的img元素
  return el.querySelector('img[data-role=loading]');
}
function createImg() {
  let img = document.createElement('img');
  img.dataset.role = 'loading';
  img.src = loadingSvg;
  img.className = styles.loading;
  return img;
}

export default function(el, binding) {
  // loading 指令   一个修饰符 hasMental   传入则会添加loading蒙层效果
  let img = getLoadingEl(el);
  let div = el.querySelector('div[data-role=loading]');
  let hasMantle = Object.prototype.hasOwnProperty.call(
    binding.modifiers,
    'hasMantle'
  );
  // 根据binding.value值 决定创建或删除img元素
  if (binding.value) {
    // true --> 创建img元素  正在加载

    if (!img) {
      img = createImg();
    }
    if (hasMantle && !div) {
      div = document.createElement('div');
      div.dataset.role = 'loading';
      div.style.width = '100%';
      div.style.height = '100%';
      div.style.position = 'fixed';
      div.style.left = '0';
      div.style.top = '0';
      div.style.zIndex = '9';
      div.style.backgroundColor = 'rgba(255,255,255,0.9)';
      div.appendChild(img);
      el.appendChild(div);
    } else {
      el.appendChild(img);
    }
  } else {
    // false --> 删除img元素  加载完成
    if (img) {
      img.remove();
    }
    if (div) {
      div.remove();
    }
  }
}
