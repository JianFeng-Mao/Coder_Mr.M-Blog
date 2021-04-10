<template>
  <div class="FPparent">
    <div id="FP">
      <Center />
      <div class="bg"></div>
    </div>
  </div>
</template>

<script>
import Center from './Center.vue'
export default {
  name: 'FirstPage',
  components: {
    Center,
  }
}
</script>

<style lang="scss" scoped>
#FP{
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}
.bg{
  width: 100%;
  height: 100vh;
  animation: changeBg 15s linear infinite;
  background:linear-gradient(125deg,#2980b9, #633bd3, #8e44ad,#192f44,#27ae60);
  background-size:800%;
  z-index: -99;
}
@keyframes changeBg {
  0% { background-position: 0% 50%; }
  50%{ background-position: 100% 50%; }
  100%{ background-position: 0% 50%; }
}
</style>