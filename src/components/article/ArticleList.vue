<template>
  <div
    class="article-list-container"
    ref="articleListContainer"
    v-loading.hasMantle="isLoading"
  >
    <goTop :dom="dom" v-if="dom" />
    <div class="article-item" v-for="item in data.rows" :key="item.id">
      <div class="img-container">
        <router-link
          :to="{
            name: 'articleDetail',
            params: {
              id: item.id,
            },
          }"
          v-if="item.thumb"
        >
          <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
        </router-link>
      </div>
      <div class="main">
        <div class="article-title-info">
          <router-link
            :to="{
              name: 'articleDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h1 class="article-title">
              {{ item.title }}
            </h1>
          </router-link>
          <div class="article-info">
            <span>发布日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览量：{{ item.scanNumber }}</span>
            <span>评论量：{{ item.commentNumber }}</span>
            <router-link
              :to="{
                name: 'articleCategory',
                params: {
                  id: item.category.id,
                },
                query: $route.query,
              }"
            >
              <span>{{ item.category.name }}</span>
            </router-link>
          </div>
        </div>
        <div class="article-content">{{ item.description }}</div>
      </div>
    </div>
    <!-- 分页 -->
    <Pager
      v-if="data.total"
      :current="routeInfo.page"
      :limit="routeInfo.limit"
      :total="data.total"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>
<script>
import { getArticle } from '@/api/index';
import fetchData from '@/mixin/fetchData';
import mainScroll from '@/mixin/mainScroll';

import { formatDate } from '@/utils/index';
import Pager from '@/cmpUI/Pager';
import goTop from '@/components/myGoTop';

export default {
  name: 'ArticleList',
  mixins: [fetchData({}), mainScroll('articleListContainer')],
  components: {
    Pager,
    goTop,
  },
  data() {
    return {
      dom: null,
    };
  },
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.id || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    formatDate,
    async getFetchData() {
      const params = {
        page: this.routeInfo.page,
        limit: this.routeInfo.limit,
        id: this.routeInfo.categoryId,
      };
      return await getArticle(params);
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      // 点击后跳转到相应页码 newpage  两种情况
      if (this.routeInfo.categoryId === -1) {
        // 无分类 跳转到 /article?page=${this.routeInfo.page}&limit=${this.routeInfo.limie}
        this.$router.push({
          name: 'article',
          query,
        });
      } else {
        // 有分类 跳转到 /article/cate/${this.routeInfo.categoryId}?page=${this.routeInfo.page}&limit=${this.routeInfo.limie}
        this.$router.push({
          name: 'articleCategory',
          query,
          params: {
            id: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  watch: {
    $route: {
      async handler() {
        this.isLoading = true;
        this.$refs.articleListContainer.scrollTop = 0;
        this.data = await this.getFetchData();
        this.isLoading = false;
      },
      deep: true, // 是否深度监听 默认false
      immediate: false, // 是否只执行一次handler 默认false
    },
  },
  mounted() {
    this.dom = this.$refs.articleListContainer;
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/var.scss';
@import '~@/assets/css/mixin.scss';

.article-list-container {
  line-height: 1.7;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
  @include scroll-styles();
  scroll-behavior: auto;
  .article-item {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid $gray;
    .img-container {
      flex: 0 0 auto;
      margin-right: 10px;
      img {
        display: block;
        border-radius: 5px;
        max-width: 150px;
      }
    }
    .main {
      flex: 1 1 auto;
      .article-content {
        font-size: 14px;
        margin: 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; //行数
        -webkit-box-orient: vertical;
      }
      .article-title-info {
        .article-title {
          font-weight: bold;
          font-size: 22px;
        }
        .article-info {
          font-size: 12px;
          color: $gray;
          span {
            margin-right: 30px;
          }
        }
      }
    }
  }
}
</style>
