<template>
  <div class="home">
    <F-page class="F-page" />
  </div>
</template>

<script>
// @ is an alias to /src

import FPage from '@/components/homeComponents/FirstPage.vue';
export default {
  name: 'Home',
  components: {
    FPage,
  },
  
}
</script>

<style lang="scss" scoped>

</style>