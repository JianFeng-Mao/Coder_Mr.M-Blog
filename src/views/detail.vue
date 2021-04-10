<template>
  <Layout>
    <div ref="detailContainer" class="detail-container" v-loading="isLoading">
      <goTop :dom="dom" v-if="dom" />
      <ArticleDetail :data="data" v-if="!isLoading" />
      <ArticleComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <ArticleTOC v-if="data.toc" :toc="data.toc" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/cmpUI/Layout';
import ArticleDetail from '@/components/article/articleDetail.vue';
import ArticleTOC from '@/components/article/articleTOC.vue';
import ArticleComment from '@/components/article/articleComment.vue';
import goTop from '@/components/myGoTop';

import { getArticleDetail } from '@/api/index';
import { titleController } from '@/utils/index';
import fetchData from '@/mixin/fetchData';
import mainScroll from '@/mixin/mainScroll.js';

export default {
  name: 'Detail',
  mixins: [fetchData({}), mainScroll('detailContainer')],
  components: {
    Layout,
    ArticleDetail,
    ArticleTOC,
    ArticleComment,
    goTop,
  },
  data() {
    return {
      dom: null,
    };
  },
  methods: {
    async getFetchData() {
      const resp = await getArticleDetail();
      titleController.setMainTitle(resp.title);
      return resp;
    },
  },
  mounted() {
    this.dom = this.$refs.detailContainer;
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    titleController.setMainTitle('');
    next();
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/mixin.scss';
.detail-container {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 50px 20px 20px 30px;
  box-sizing: border-box;
  position: relative;
  scroll-behavior: smooth;
  @include scroll-styles();
}
.right-container {
  width: 200px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  padding: 20px;
  @include scroll-styles();
}
</style>
