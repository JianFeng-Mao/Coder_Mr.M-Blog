import { eventBus } from '@/utils/index';
import defaultGIF from '@/assets/default.gif';
let imgs = []; // [{dom, src}] dom:图片元素 src:图片真实地址

function setImage(img) {
  // 处理单张图片
  img.dom.src = defaultGIF; // 一开始就用加载中图片代替
  // 合适的时机加载当前图片
  const rect = img.dom.getBoundingClientRect();
  const range = 0; // 距离图片顶部多少距离时开始加载
  const clientHeight = document.documentElement.clientHeight;
  if (rect.top >= -rect.height && rect.top <= clientHeight + range) {
    // 在视口范围内  加载图片
    img.dom.src = img.src;

    // 当前图片处理完成，删除该图片(即后续无需再加载)
    imgs = imgs.filter((i) => i !== img);
  }
}

function setImages() {
  // 处理所有图片
  for (const img of imgs) {
    setImage(img);
  }
}

function handleScroll(dom) {
  // 滚动条触发事件
  setImages();
}

// 事件总线监听滚动条事件
eventBus.$on('mainScroll', handleScroll);

export default {
  inserted(el, binding) {
    const img = {
      dom: el,
      src: binding.value,
    };
    imgs.push(img);
    setImage(img);
  },
  unbind(el) {
    imgs = imgs.filter((img) => img.dom !== el);
  },
};
