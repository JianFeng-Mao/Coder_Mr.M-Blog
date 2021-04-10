<template>
  <div ref="cards" :class="['card-container', { show: showCards }]">
    <div
      :class="['card', 'card' + index, {}]"
      v-for="(card, index) in skillCards"
      :key="card.skillTitle"
    >
      <transition name="slide-fade">
        <div class="content" v-show="showCards">
          <h2>{{ card.skillTitle }}</h2>
          <p v-for="c in card.skillContent" :key="c">
            <Icon type="md-checkmark-circle-outline" />
            {{ c }}
          </p>
        </div>
      </transition>

      <transition name="slide-fade">
        <div class="cover" v-show="!showCards">
          <Icon :type="card.logoTitle" class="logo-card" />
        </div>
      </transition>
    </div>
    <div class="card card5 not-allow-hover">
      <div class="content">
        <h2>NodeJS</h2>
        <Spin fix class="demo-spin-col">
          <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
          <div>学习中</div>
        </Spin>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardOpen',
  data() {
    return {
      showCards: false,
      skillCards: [
        {
          skillTitle: 'HTML',
          skillContent: [
            '深刻理解Web标准',
            '熟练运用HTML标签',
            '熟悉盒模型和各类布局方式，能够根据设计图实现页面布局和交互效果',
          ],
          logoTitle: 'logo-html5',
        },
        {
          skillTitle: 'CSS',
          skillContent: [
            '深刻理解Web标准',
            '熟练运用HTML标签',
            '熟悉盒模型和各类布局方式，能够根据设计图实现页面布局和交互效果',
          ],
          logoTitle: 'logo-css3',
        },
        {
          skillTitle: 'JAVASCRIPT',
          skillContent: [
            '深刻理解Web标准',
            '熟练运用HTML标签',
            '熟悉盒模型和各类布局方式，能够根据设计图实现页面布局和交互效果',
          ],
          logoTitle: 'logo-nodejs',
        },
        {
          skillTitle: 'SASS',
          skillContent: [
            '深刻理解Web标准',
            '熟练运用HTML标签',
            '熟悉盒模型和各类布局方式，能够根据设计图实现页面布局和交互效果',
          ],
          logoTitle: 'logo-sass',
        },
        {
          skillTitle: 'VUE',
          skillContent: [
            '深刻理解Web标准',
            '熟练运用HTML标签',
            '熟悉盒模型和各类布局方式，能够根据设计图实现页面布局和交互效果',
          ],
          logoTitle: 'logo-vimeo',
        },
      ],
    };
  },
  methods: {
    changeShow() {
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      let dom = this.$refs.cards;
      if (!dom) return;
      let domHeight = dom.offsetHeight;
      let domOffsetTop = dom.offsetTop;
      let cHeight = document.documentElement.clientHeight;
      if (
        scrollTop > domOffsetTop - cHeight &&
        scrollTop < cHeight + domHeight
      ) {
        // dom.classList.add('show');
        this.showCards = true;
      } else if (scrollTop < domOffsetTop || scrollTop > cHeight + domHeight) {
        // dom.classList.remove('show');
        this.showCards = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.changeShow);
  },
};
</script>

<style lang="scss" scoped>
.ivu-spin-fix {
  background: none;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}

.card-container {
  min-height: 700px;
  width: 100%;
  position: relative;
  .card {
    position: absolute;
    left: 50%;
    top: 0;
    width: 100px;
    height: 150px;
    background: #eee;
    justify-content: center;
    align-items: center;

    box-shadow: 25px 25px 50px rgba($color: #666, $alpha: 0.2);
    transition: all 0.5s;
    .slide-fade-enter,
    .slide-fade-leave-to {
      opacity: 0;
    }
    .slide-fade-enter-to {
      opacity: 1;
    }
    .slide-fade-enter-active {
      transition: all 0.8s;
    }
    .slide-fade-leave-active {
      transition: all 0.8s;
    }
    &:nth-child(1) {
      opacity: 1;
      z-index: 6;
      transform: translate(calc(-50% + 5% * -1), calc(100px)) rotate(40deg)
        skew(-20deg, -10deg);
    }
    &:nth-child(2) {
      opacity: 0.9;
      z-index: 5;
      transform: translate(-50%, 110px) rotate(40deg) skew(-20deg, -10deg);
    }
    &:nth-child(3) {
      opacity: 0.8;
      z-index: 4;
      transform: translate(calc(-50% + 5%), 120px) rotate(40deg)
        skew(-20deg, -10deg);
    }
    &:nth-child(4) {
      opacity: 0.7;
      z-index: 3;
      transform: translate(calc(-50% + 5%), 130px) rotate(40deg)
        skew(-20deg, -10deg);
    }
    &:nth-child(5) {
      opacity: 0.6;
      z-index: 2;
      transform: translate(calc(-50% + 5%), 140px) rotate(40deg)
        skew(-20deg, -10deg);
    }
    &:nth-child(6) {
      opacity: 0.5;
      z-index: 1;
      transform: translate(calc(-50% + 5%), 150px) rotate(40deg)
        skew(-20deg, -10deg);
    }
    &.not-allow-hover {
      .content {
        width: 100%;
        display: none;
      }
    }
    .content {
      color: #444;
      transition: all 0.1s;
      transform: translateY(0);
      padding: 25px;
      h2 {
        margin-bottom: 5px;
        text-align: center;
      }
      p {
        text-align: left;
      }
    }
    .cover {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.5s;
      .logo-card {
        font-size: 3rem;
        // color: rgb(226, 27, 87);
      }
    }
  }

  &.show {
    .card {
      z-index: 1;
      opacity: 1;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      width: 250px;
      height: 300px;
      &:hover {
        box-shadow: 20px 20px 20px rgba($color: #000000, $alpha: 0.2),
          0 0 20px rgba($color: rgb(171, 205, 239), $alpha: 1);
      }
      &.card0 {
        transform: translateX(calc(-50% + calc(120% * -1))) rotate(0deg)
          skew(0deg, 0deg);
      }
      &.card1 {
        transform: translateX(-50%) rotate(0deg) skew(0deg, 0deg);
      }
      &.card2 {
        transform: translateX(calc(-50% + calc(120% * 1))) rotate(0deg)
          skew(0deg, 0deg);
      }
      &.card3 {
        transform: translate(calc(-50% + calc(120% * -1)), 110%) rotate(0deg)
          skew(0deg, 0deg);
      }
      &.card4 {
        transform: translate(-50%, 110%) rotate(0deg) skew(0deg, 0deg);
      }
      &.card5 {
        transform: translate(calc(-50% + 120% * 1), 110%) rotate(0deg)
          skew(0deg, 0deg);
      }
      &.not-allow-hover {
        .content {
          display: inline-block;
        }
      }
      .content {
        transform: translateY(0px);
      }
    }
  }
}
</style>
