<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from '@/views/index.vue'
export default {
  name: 'app',
  components: {
    Index,
  }
}
</script>

<style lang="scss">
@import '@/assets/css/reset.scss';
html, body{
  height: 100%;
}
body{
  cursor: url('F:/前端/项目/my_blog-vue/coder_m-blog/src/assets/image/hand.cur'), auto;
  width: 100%;
  overflow: hidden;
  font-size: 16px;
}

@media screen and (max-width: 1200px){
  html, body{
    font-size: 15px;
  }
}
@media screen and (max-width: 992px){
  html, body{
    font-size: 14px;
  }
}
@media screen and (max-width: 768px){
  html, body{
    font-size: 13px;
  }
}
@media screen and (max-width: 576px){
  html, body{
    font-size: 12px;
  }
}


</style>