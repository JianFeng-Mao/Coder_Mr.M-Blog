export default function debounce(cb, duration = 100) {
  let timer = null;

  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, duration);
  };
}
