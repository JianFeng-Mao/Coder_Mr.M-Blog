<template>
  <div id="index" ref="app">
    <M-goTop />

    <M-header v-if="active" />

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <M-footer v-if="active" />
  </div>
</template>
<script>
import MHeader from '@/components/Header.vue';
import MFooter from '@/components/Footer.vue';
import MGoTop from '@/components/myGoTop.vue';

export default {
  name: 'index',
  components: {
    MHeader,
    MFooter,
    MGoTop,
  },
  computed: {
    active() {
      return (
        (this.$route.name && this.$route.path.includes('resume')) ||
        this.$route.path.includes('message')
      );
    },
  },
};
</script>

<style lang="scss">
#index {
  background: rgba($color: #ddd, $alpha: 0.5);
  width: 100%;
  // height: 100%;
}
</style>
