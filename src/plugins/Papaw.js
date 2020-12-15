export default (function (window, document) {
  const colors = [
    '#2196f3',
    '#e91e63',
    '#ffeb3b',
    '#74ff1d'
  ];
  const papaws = [];
  let timer = null;
  init();

  window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            setTimeout(callback, 1000 / 60);
        }
  })();

  function init() {
    css(`
    .papaw{
      position: absolute;
      pointer-events: none;
      border-radius: 50%;
    }
    `);

    timer = setInterval(() => {
      createPapaw();
    }, 200);
    
    loopStyle();
  }


  function css(css) {
    var style = document.createElement("style");
    style.type = "text/css";
    try {
        style.appendChild(document.createTextNode(css));
    } catch (ex) {
        style.styleSheet.cssText = css;
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}


  function loopStyle(){
    for (var i = 0; i < papaws.length; i++) {
      if (papaws[i].alpha <= 0) {
          document.body.removeChild(papaws[i].el);
          papaws.splice(i, 1);
          createPapaw();

          continue;
      }
      papaws[i].translateY -= 3;
      papaws[i].scale += 0.01;
      papaws[i].alpha -= 0.01;
      papaws[i].el.style.cssText = `
                                    left: ${papaws[i].x};
                                    top: ${papaws[i].y};
                                    opacity: ${papaws[i].alpha};
                                    transform: scale( ${papaws[i].scale}) translateY(${papaws[i].translateY}%);
                                    background: ${papaws[i].color};
                                    width: ${papaws[i].w}px;
                                    height: ${papaws[i].h}px;
                                  `;
    }
    requestAnimationFrame(loopStyle);
  }



  function getRandom(max, min) {
    return Math.random() * (max - min) + min;
  }

  function createPapaw() {
    const papaw = document.createElement('span');
    
    const size = Math.random() * 50;

    papaw.className = 'papaw';
    const width = 20 + size;
    const height = 20 + size;
    
    const mTop = getRandom(document.documentElement.scrollTop + innerHeight + height, (20 + size) * 5) + 'px'
    // papaw.style.top = Math.random() * innerHeight + 'px'
    
    const mLeft = getRandom(innerWidth - width, width) + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)]
    
    
    papaws.push({
      el: papaw,
      x: mLeft,
      y: mTop,
      scale: 0,
      alpha: 1,
      color: bg,
      translateY: 0,
      w: width,
      h: height
    })
    
    if(timer) {
      if(papaws.length > 6) {
        clearInterval(timer);
      }
    }
    document.body.appendChild(papaw);
    
  }
})(window, document)