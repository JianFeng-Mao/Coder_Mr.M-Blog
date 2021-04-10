<template>
  <button
    :style="{ width: width + 'px', height: height + 'px' }"
    type="submit"
    :disabled="disabled"
    @click.prevent="handleSubmit"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    content: {
      type: String,
      default: '登录',
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 35,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleSubmit() {
      this.$emit('handleSubmit');
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  margin: 10px 0;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: linear-gradient(to right, #36c2a9, #2d78c2);
  transition: all 0.3s;
  color: #fff;
  font-size: 16px;
  &:hover {
    background-image: linear-gradient(to right, #49ccb4, #4989c9);
    box-shadow: 0 0 20px 10px rgba($color: #49ccb4, $alpha: 0.3);
  }
  &:active {
    background-image: linear-gradient(to right, #10a58a, #0d4c8b);
  }
  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-image: linear-gradient(to right, #aaa, #aaa);
      box-shadow: none;
    }
  }
}
</style>
