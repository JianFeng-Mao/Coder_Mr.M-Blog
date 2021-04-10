<template>
  <div class="pager-container" v-if="total > 1">
    <a :class="{ disabled: current === 1 }" @click="changePage(1)">|&lt;&lt;</a>
    <a :class="{ disabled: current === 1 }" @click="changePage(current - 1)"
      >&lt;&lt;</a
    >
    <a
      v-for="(n, i) in numbers"
      :key="i"
      :class="['page', { active: current === n }]"
      @click="changePage(n)"
      >{{ n }}</a
    >
    <a :class="{ disabled: current === pages }" @click="changePage(current + 1)"
      >&gt;&gt;</a
    >
    <a :class="{ disabled: current === pages }" @click="changePage(pages)"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  name: 'pager',
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      pageMin: 0,
    };
  },
  computed: {
    minPage() {
      // 当前展示的页码范围中最小的页码数
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min <= 1) {
        min = 1;
      }
      return min;
    },
    maxPage() {
      let max = this.minPage + this.visibleNumber - 1;
      if (max >= this.pages) {
        max = this.pages;
      }
      return max;
    },
    numbers() {
      // 当前展示的所有页码
      let nums = [];
      if (this.maxPage - this.minPage < this.visibleNumber) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.pageMin = this.maxPage - this.visibleNumber + 1;
      }
      for (let i = this.pageMin; i <= this.maxPage; i++) {
        nums.push(i);
      }
      return nums;
    },
    pages() {
      // 总页数
      return Math.ceil(this.total / this.limit);
    },
  },
  methods: {
    changePage(num) {
      this.$emit('pageChange', num);
    },
  },
  mounted() {
    this.pageMin = this.minPage;
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/var.scss';
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: $primary;
    margin: 0 6px;

    &:hover {
      color: $words;
      cursor: pointer;
    }
    &.page {
      width: 20px;
      height: 20px;
      text-align: center;
    }
    &.disabled {
      color: $lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: $words;
      font-weight: bold;
    }
  }
}
</style>
