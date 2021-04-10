<template>
  <div class="message-page-container">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      :hasMore="hasMore"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from '@/components/message/index';
import fetchData from '@/mixin/fetchData';
import msgHandleScroll from '@/mixin/msgHandleScroll';

import { getMessage, postMessage } from '@/api/index';
export default {
  name: 'message',
  mixins: [fetchData({ total: 0, rows: [] }), msgHandleScroll],
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
      return await getMessage({ page: this.page, limit: this.limit });
    },
    async handleSubmit(userInfo, cb) {
      const res = await postMessage({
        userInfo,
      });
      const replyInfo = [
        {
          avatar:
            'https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg',
          nickname: '测试回复功能',
          reversion: '被回复者',
          content: '测试回复功能',
          createDate: 1618026598615,
          id: 12432,
          notFirst: true,
          replyInfo: [
            {
              notFirst: true,
              avatar:
                'https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg',
              nickname: '测试回复功能',
              reversion: '被回复者',
              content: '测试回复功能',
              createDate: 1618026598615,
              id: 124423,
            },
          ],
        },
      ];
      this.data.rows.unshift(res);
      this.data.total++;
      this.$set(this.data.rows[0], 'replyInfo', replyInfo);
      console.log(this.data.rows);
      cb('留言提交成功');
    },
    async fetchMore() {
      if (!this.hasMore || this.isLoading) {
        return;
      }

      this.isLoading = true;

      this.page++;
      const res = await getMessage({
        page: this.page,
        limit: this.limit,
      });
      this.isLoading = false;
      this.data.rows = this.data.rows.concat(res.rows);
    },
  },
};
</script>

<style lang="scss" scoped>
.message-page-container {
  width: 100%;
  background-color: #fff;
  padding: 30px 0;
}
</style>
