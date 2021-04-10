<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from '@/views/index.vue';
import mainScroll from '@/mixin/mainScroll.js';
export default {
  name: 'app',
  mixins: [mainScroll()],
  data() {
    return {
      isLogin: null,
    };
  },
  components: {
    Index,
  },
  created: function() {
    if (localStorage.getItem('STORE_DATA')) {
      // 页面刷新后， 将STORE_DATA的数据和vuex的状态混合，解决页面刷新后登录状态丢失的问题
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(localStorage.getItem('STORE_DATA'))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      // 将state的状态保存到STORE_DATA中
      localStorage.setItem('STORE_DATA', JSON.stringify(this.$store.state));
    });

    // IS_LOGIN  判断是否已登录
    localStorage.setItem(
      'IS_LOGIN',
      JSON.stringify(this.$store.getters.isLogin)
    );
  },
};
</script>

<style lang="scss">
@import '~@/assets/css/reset.scss';
@import '~@/assets/css/responsive.scss';
@import '~@/assets/css/mixin.scss';
body::-webkit-scrollbar {
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  display: none;
}
body {
  @include scroll-styles();
}

body {
  cursor: url('F:/前端/项目/my_blog-vue/coder_m-blog/src/assets/image/hand.cur'),
    auto;
  width: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
.page {
  width: 80%;
  margin: 0 auto;
}
</style>
