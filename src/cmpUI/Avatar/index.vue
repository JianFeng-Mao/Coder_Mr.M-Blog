<template>
  <div class="avatar-container">
    <img
      :src="url"
      :style="{ width: size + 'px', height: size + 'px' }"
      class="img-container"
    />
  </div>
</template>

<script>
export default {
  name: 'avatar',
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 150,
    },
  },
};
</script>

<style lang="scss" scoped>
.img-container {
  border-radius: 50%;
  object-fit: cover;
}
</style>
