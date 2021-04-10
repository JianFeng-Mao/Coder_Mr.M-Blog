<template>
  <div class="article-comment-container">
    <MessageArea
      id="detail-comment"
      title="评论列表"
      :subTitle="`(${data.total})`"
      :mrAuto="false"
      :list="data.rows"
      :isListLoading="isLoading"
      :hasMore="hasMore"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from '@/components/message';
import fetchData from '@/mixin/fetchData';
import msgHandleScroll from '@/mixin/msgHandleScroll';

import { getComment, postComment } from '@/api/index';
export default {
  name: 'ArticleComment',
  mixins: [fetchData({}), msgHandleScroll],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },

  methods: {
    async getFetchData() {
      return await getComment({
        blogId: this.$route.params.id,
        page: this.page,
        limit: this.limit,
      });
    },
    async handleSubmit(info, cb) {
      console.log(this.data);
      const obj = {
        ...info,
        ArticleId: this.$route.params.id,
      };
      const resp = await postComment(obj);
      this.data.rows.unshift(resp);
      this.data.total++;
      cb('提交成功');
    },
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;

      this.page++;
      const res = await getComment({
        blogId: this.$route.params.id,
        page: this.page,
        limit: this.limit,
      });
      this.isLoading = false;
      this.data.rows = this.data.rows.concat(res.rows);
    },
  },
};
</script>

<style scoped lang="scss">
.article-comment-container {
  margin: 30px 0;
}
</style>
