<template>
  <div class="drawer-conatiner">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Drawer',
  components: {},
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.drawer-conatiner {
  width: 100%;
  border: 1px solid #dcdee2;
}
</style>
