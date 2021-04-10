<template>
  <Layout>
    <ArticleList />
    <template #right>
      <ArticleCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from '@/cmpUI/Layout';
import ArticleList from '@/components/article/ArticleList';
import ArticleCategory from '@/components/article/ArticleCategory';
// import fetchData from '@/mixin/fetchData.js';
// import { getArticle } from '@/api/index.js';
export default {
  name: 'Article',
  components: {
    Layout,
    ArticleList,
    ArticleCategory,
  },
  // mixins: [fetchData()],

  methods: {
    // async getFetchData() {
    //   // 测试函数
    //   const params = {
    //     page: 1,
    //     limit: 20,
    //     categoryid: -1,
    //   };
    //   return await getArticle(params);
    // },
  },
};
</script>

<style scoped lang="scss"></style>
