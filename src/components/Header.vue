<template>
  <div id="page-header" class="animate__animated animate__fadeInDown">
    <div
      :class="['menu-zhe clearfix', { show: isShow }]"
      v-if="$route.name == 'resume'"
    ></div>
    <div class="header-nav-list page">
      <Left-content />
      <Right-nav @showZhe="changeShow" />
    </div>
  </div>
</template>

<script>
import LeftContent from './headerComponets/leftContent';
import RightNav from './headerComponets/rightNav';
export default {
  name: 'myHeader',
  components: {
    RightNav,
    LeftContent,
  },
  data() {
    return {
      isShow: false,
    };
  },
  watch: {},
  methods: {
    changeShow(flag) {
      this.isShow = flag;
    },
  },
};
</script>

<style lang="scss" scoped>
#page-header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background: #345;
  z-index: 100;
  .menu-zhe {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #000, $alpha: 0.85);
    display: none;
    &.show {
      display: inline-block;
      z-index: 5;
    }
  }
  .header-nav-list {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
