// 设置相应的页面网站标题
let routeTitle = '';
let mainTitle = '';
function setTitle() {
  if (!routeTitle && !mainTitle) {
    document.title = 'loading...';
  } else if (!routeTitle && mainTitle) {
    document.title = mainTitle;
  } else if (routeTitle && !mainTitle) {
    document.title = routeTitle;
  } else {
    document.title = `${routeTitle} - ${mainTitle}`;
  }
}
export default {
  setRouteTitle(title) {
    routeTitle = title;
    setTitle();
  },
  setMainTitle(title) {
    mainTitle = title;
    setTitle();
  },
};
