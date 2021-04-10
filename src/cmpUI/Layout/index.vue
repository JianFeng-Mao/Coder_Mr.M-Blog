<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/mixin.scss';
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto;
    overflow-x: hidden;
  }
  .main {
    flex: 1 1 auto;
    overflow-x: hidden;
    @include scroll-styles();
  }
}
</style>
