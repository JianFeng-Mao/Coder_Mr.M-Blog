<template>
  <div class="article-detail-container">
    <div class="back" @click="goBack">
      <Icon type="ios-arrow-down" />
    </div>
    <h1>{{ data.title }}</h1>
    <div class="article-detail-info">
      <span>发布日期：{{ formatDate(data.createDate) }}</span>
      <span>浏览量：{{ data.scanNumber }}</span>
      <span class="detail-comment" ref="detail-comment" @click="goComment"
        >评论数：{{ data.commentNumber }}</span
      >
      <router-link
        :to="{
          name: 'articleCategory',
          params: {
            id: data.category.id,
          },
        }"
        v-if="data.category"
        >{{ data.category.name }}</router-link
      >
    </div>
    <div
      class="article-detail-content markdown-body"
      v-html="data.htmlContent"
    />
  </div>
</template>

<script>
import { formatDate } from '@/utils/index';
import '@/assets/css/markdown.css';
import 'highlight.js/styles/github.css';
export default {
  name: 'ArticleDetail',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
    goComment() {
      document.getElementById('detail-comment').scrollIntoView({
        behavior: 'smooth',
      });
    },
    goBack() {
      this.$router.push({
        name: 'article',
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/var.scss';
.back {
  padding: 10px;
  font-size: 0;
  transform: rotate(90deg);
  cursor: pointer;
  position: absolute;
  top: 5px;
  left: 10px;
  i {
    font-size: 18px;
    color: #000;
  }
}
.article-detail-info {
  color: $gray;
  font-size: 12px;
  margin-top: 10px;
  span,
  a {
    color: $gray;
    margin-right: 15px;
  }
  .detail-comment,
  a {
    &:hover {
      cursor: pointer;
      color: $primary;
    }
  }
}
.article-detail-content {
  margin-top: 2em;
}
</style>
