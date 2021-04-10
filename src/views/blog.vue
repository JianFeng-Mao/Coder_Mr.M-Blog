<template>
  <div class="blog-container">
    <Site />
  </div>
</template>
<script>
import Site from '../components/site';
export default {
  name: 'blog',
  components: {
    Site,
  },
};
</script>
<style lang="scss" scoped>
.blog-container {
  width: 100%;
  height: 100vh;
  background: #fff;
}
</style>
