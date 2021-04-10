<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '../Icon';
export default {
  name: 'empty',
  props: {
    text: {
      type: String,
      default: '无数据',
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/styles/var.scss';
@import '~@/styles/mixin.scss';
.empty-container {
  @include self-center();
  color: $gray;
  text-align: center;
  .icon-container {
    font-size: 72px;
  }
}
</style>
