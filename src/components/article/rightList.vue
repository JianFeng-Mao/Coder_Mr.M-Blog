<template>
  <ul class="right-list-container">
    <li v-for="l in list" :key="l.id">
      <span :class="{ active: l.isSelect }" @click="changeCate(l)">
        {{ l.name }}
      </span>
      <span
        :class="[{ active: l.isSelect }, 'article-count']"
        @click="changeCate(l)"
        v-if="l.articleCount"
        >{{ l.articleCount }}篇</span
      >
      <RightList :list="l.children" @select="changeCate" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RightList',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    changeCate(item) {
      if (!item.isSelect) {
        this.$emit('select', item);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/css/var.scss';
.right-list-container {
  width: 200px;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
    .active {
      color: $warn !important;
      font-weight: bold !important;
    }
  }
  span {
    &:not(.article-count) {
      &:hover {
        color: darken($primary, 20%);
      }
    }
  }
  .article-count {
    font-size: 12px;
    margin-left: 1em;
    color: $gray;
  }
}
</style>
