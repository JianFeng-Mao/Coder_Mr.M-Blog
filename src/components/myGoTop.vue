<template>
  <div class="go-top-container" @click="gtTop" v-show="showBackBtn">
    <div class="go-top-btn">
      <Icon type="ios-arrow-down" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'myGoTop',
  props: {
    dom: {
      default: () => window,
    },
  },
  data() {
    return {
      showBackBtn: false,
    };
  },
  methods: {
    gtTop() {
      let scrollMain = null;
      if (this.dom === window) {
        scrollMain = document.documentElement;
      } else {
        scrollMain = this.dom;
      }
      scrollMain.scrollTop = 0;
    },
    backTop() {
      let scrollMain = null;
      if (this.dom === window) {
        scrollMain = document.documentElement;
      } else {
        scrollMain = this.dom;
      }
      if (scrollMain.scrollTop < 700) {
        this.showBackBtn = false;
      } else {
        this.showBackBtn = true;
      }
    },
  },
  mounted() {
    this.dom.addEventListener('scroll', this.backTop);
  },
};
</script>

<style lang="scss" scoped>
.go-top-container {
  position: fixed;
  bottom: 100px;
  right: 50px;
  transform: rotate(180deg);
  z-index: 30;
  cursor: pointer;
  .go-top-btn {
    padding: 10px;
    background: rgba($color: #000000, $alpha: 0.2);
    border-radius: 50%;
    font-size: 0;
    i {
      font-size: 1.5rem;
      color: #fff;
    }
  }
}
</style>
