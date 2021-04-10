<template>
  <div class="TOC-container">
    <h1 class="TOC-title">目录</h1>
    <RightList :list="tocWithSelect" @select="handleChange" />
  </div>
</template>

<script>
import RightList from './rightList';
import { debounce } from '@/plugins/index';
export default {
  name: 'ArticleTOC',
  props: {
    toc: {
      type: Array,
    },
  },
  components: {
    RightList,
  },
  data() {
    return {
      activeAnchor: '',
    };
  },
  computed: {
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.toc);
    },
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created() {
    this.debounceSetSelect = debounce(this.setSelect);
    this.$bus.$on('mainScroll', this.debounceSetSelect);
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.debounceSetSelect);
  },
  methods: {
    handleChange(item) {
      // document.querySelector('#' + item.anchor).scrollIntoView({
      //   behavior: 'smooth',
      // });
      location.hash = item.anchor;
    },
    setSelect() {
      this.activeAnchor = '';
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          // 在规定的范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          // 在规定的范围下方
          return;
        } else {
          // 在规定的范围上方
          this.activeAnchor = dom.id; // 先假设自己是激活的，然后继续看后面
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.TOC-title {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 0 0 10px;
}
</style>
