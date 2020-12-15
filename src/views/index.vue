<template>
  <div class="index">
    <MHeader v-show="active" />

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <MFooter />
  </div>

</template>
<script>
import MHeader from '@/components/Header.vue';
import MFooter from '@/components/Footer.vue';
export default {
  name: 'index',
  components: {
    MHeader,
    MFooter
  },
  computed:{
    active(){
      return this.$route.name != 'home' ;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>