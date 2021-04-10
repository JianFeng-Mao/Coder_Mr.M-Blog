<template>
  <div class="panel-container">
    <div class="panel-item">
      <div :class="['panel-title', { active: show }]" @click="changePanel">
        <slot></slot>
      </div>
      <transition name="shrink">
        <div :class="['item-main', { itemActive: show }]" v-show="show">
          <div class="item-content">
            <slot name="content"></slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panel',
  props: {
    name: {
      type: String,
      default: '0',
    },
  },
  data() {
    return {
      value: '0',
    };
  },
  computed: {
    show() {
      return this.name === this.value;
    },
  },
  mounted() {},
  methods: {
    changePanel() {
      // this.$parent.changePanel({
      //   name: this.name || this.index,
      //   isActive: this.isActive,
      // });
      if (this.name === this.value) {
        this.value = 0;
      } else {
        this.value = this.name;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/animation.scss';
.panel-container {
  &:not(:last-child) {
    border-bottom: 1px solid #dcdee2;
  }
}
.panel-item {
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid transparent;
  border-left: none;
  border-right: none;
  border-top: none;
  background-color: #fff;
  .panel-title {
    font-size: 22px;
    width: 100%;
    height: 51px;
    line-height: 50px;
    text-align: center;
    background-color: #f7f7f7;
    cursor: pointer;
    transition: border 0.1s 0.5s;
    &::selection {
      background-color: transparent;
    }
    &.active {
      border-bottom: 1px solid #dcdee2;
      transition: border 0.1s;
    }
  }
}

.item-main {
  max-height: 0;
  overflow: hidden;
  padding: 0 50px;
  transition: all 0.5s ease;

  &.itemActive {
    max-height: 2000px;
  }
  .item-content {
    margin: 5px;
    padding: 16px 0;
  }
}
</style>
