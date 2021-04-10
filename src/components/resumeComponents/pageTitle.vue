<template>
  <div class="page-title">
    <h3 class="title-name">{{ showInfo.name }}</h3>
    <span class="title-line"></span>
    <h3 class="title-name title-eg">{{ showInfo.eg }}</h3>
  </div>
</template>

<script>


export default {
  name: "pageTitle",
  props: [
    'showInfo'
  ],
  methods: {
    
  },
  mounted() {
  
  }
}
</script>

<style lang="scss" scoped>
.page-title{
  text-align: center;
  padding: 80px 0;
  font-size: 0;
  .title-name{
    font-size: 3rem;
    font-weight: 800;
    color: #063461;
    &.title-eg{
      font-weight: 600;
      font-size: 1.5rem;
      position: relative;
      text-shadow: 2px 2px 3px rgba($color: #000, $alpha: .5);
      &::before,
      &::after{
        content: '';
        display: inline-block;
        position: relative;
        top: -8px;
        width: 10px;
        height: 4px;
        background: #063461;
      }
      &::before{
        left: -10px;
      }
      &::after{
        left: 10px;
      }
    }
  }
  .title-line{
    display: inline-block;
    width: 200px;
    height: 3px;
    background: #063461;
    margin: 5px 0;
  }
}
</style>