import { debounce } from '@/plugins/index';
export default {
  computed: {
    hasMore() {
      if (!this.data || !this.data.rows || !this.data.total) {
        return false;
      }
      return this.data.rows.length <= this.data.total;
    },
  },
  created() {
    this.debounceHandleScroll = debounce(this.handleScroll, 50);
    this.$bus.$on('mainScroll', this.debounceHandleScroll);
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.debounceHandleScroll);
  },
  methods: {
    async handleScroll(dom) {
      if (this.isLoading || !dom) {
        return;
      }
      const range = 30;

      let dec;
      if (!dom.clientHeight) {
        // dom 是window对象
        let scrollTop =
          document.body.scrollTop ||
          window.pageYOffset ||
          document.documentElement.scrollTop;
        dec = Math.abs(
          document.documentElement.scrollHeight -
            scrollTop -
            document.documentElement.clientHeight
        );
      } else {
        dec = Math.abs(dom.clientHeight + dom.scrollTop - dom.scrollHeight);
      }
      if (dec <= range) {
        // 触发加载事件
        await this.fetchMore();
      }
    },
  },
};
