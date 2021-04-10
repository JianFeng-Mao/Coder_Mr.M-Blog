<template>
  <Layout>
    <template #left>
      <div class="asite">
        <SideAsite />
      </div>
    </template>
    <template>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/cmpUI/Layout';
import SideAsite from '@/cmpUI/SideAsite';
export default {
  name: 'site',
  components: {
    Layout,
    SideAsite,
  },
};
</script>

<style scoped lang="scss">
.asite {
  width: 250px;
  height: 100%;
}
</style>
