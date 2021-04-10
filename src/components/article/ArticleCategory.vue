<template>
  <div class="article-category-container" v-loading="isLoading">
    <div v-if="!isLoading">
      <h1 class="category-title">分类列表</h1>
      <RightList :list="list" v-if="data" @select="changeCate" />
    </div>
  </div>
</template>

<script>
import RightList from './rightList';
import fetchData from '@/mixin/fetchData';
import { getArticleTypes } from '@/api/index';
export default {
  name: 'ArticleCategory',
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  data() {
    return {};
  },
  computed: {
    categoryId() {
      return +this.$route.params.id || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const articleTotal = this.data.reduce((a, b) => a + b.articleCount, 0);
      let result = [
        { id: -1, name: '全部分类', articleCount: articleTotal },
        ...this.data,
      ];
      result = result.map((i) => ({
        ...i,
        isSelect: i.id === this.categoryId,
      }));
      return result;
    },
  },
  methods: {
    changeCate(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      // 点击后跳转  两种情况
      if (item.id === -1) {
        // 无分类
        this.$router.push({
          name: 'article',
          query,
        });
      } else {
        // 有分类
        this.$router.push({
          name: 'articleCategory',
          query,
          params: {
            id: item.id,
          },
        });
      }
    },
    async getFetchData() {
      return await getArticleTypes();
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/mixin.scss';

.article-category-container {
  width: 200px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  @include scroll-styles();
}
.category-title {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 0 0 10px;
}
</style>
