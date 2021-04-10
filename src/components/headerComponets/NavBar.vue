<template>
  <ul class="resume-nav-list">
    <li v-for="nav in navBar" :key="nav.type">
      <template v-if="$route.name == 'resume'">
        <span
          @click="changeAnchor(nav.type)"
          :class="[
            'nav-btn',
            {
              'btn-active': activeAnchor == nav.type && $route.name == 'resume',
            },
          ]"
        >
          <i>
            {{ nav.name }}
          </i>
        </span>
      </template>
      <template v-else>
        <router-link
          :to="{ name: nav.type }"
          :class="[
            'nav-btn',
            {
              'rot-btn-active': nav.type == $route.name,
            },
          ]"
        >
          <i>
            {{ nav.name }}
          </i>
        </router-link>
      </template>
    </li>
    <li>
      <span class="nav-btn">
        <router-link :to="{ name: 'home' }">
          回到首页
        </router-link>
      </span>
    </li>
  </ul>
</template>

<script>
import { debounce } from '@/plugins/index';

export default {
  name: 'NavBar',
  props: ['navBar'],
  data() {
    return {
      activeAnchor: 'about-me',
    };
  },
  computed: {
    doms() {
      const doms = [];
      let dom = null;
      this.navBar.forEach((nav) => {
        dom = document.getElementById(nav.type);
        doms.push(dom);
      });
      return doms;
    },
  },
  watch: {
    '$route.name': function(newVal) {
      if (newVal == 'resume') {
        this.activeIndex = 'about-me';
      }
    },
  },
  methods: {
    setSelect() {
      this.activeAnchor = 'about-me';
      const range = 200; //误差
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          this.activeAnchor = dom.id;
        } else if (top > range) {
          return;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
    changeAnchor(anchor) {
      location.hash = anchor;
      this.activeAnchor = anchor;
    },
  },
  created() {
    this.debounceSelect = debounce(this.setSelect);
    this.$bus.$on('mainScroll', this.debounceSelect);
  },
  destroyed() {
    //离开该页面移除这个监听的事件
    this.$bus.$off('mainScroll', this.debounceSelect);
  },
};
</script>

<style lang="scss" scoped>
.resume-nav-list {
  display: flex;
  align-items: center;
  li {
    height: 60px;
    line-height: 60px;
    color: #fff;
    cursor: pointer;
    margin: 0 8px;
    // min-width: 6rem;
    text-align: center;
    .nav-btn {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      // width: 6rem;
      border-radius: 1em;
      background-color: rgb(51, 85, 102);
      box-shadow: 0 7px 0 #243c47;
      transition: all 0.5s;
      &:hover {
        background-color: #1aaf5d;
        box-shadow: 0 7px 0 #0a7237;
      }

      &.btn-active,
      &.rot-btn-active {
        background-color: #11767e;
        box-shadow: 0 4px 0 #243c47;
        transform: translateY(4px);
        &:hover {
          background-color: #11767e;
          box-shadow: 0 4px 0 #243c47;
          transform: translateY(4px);
        }
        a,
        i {
          font-size: 0.9em;
          cursor: not-allowed;
          transform: rotateX(5deg);
        }
      }
      a,
      i {
        color: #fff;
        font-size: 1rem;
        padding: 0 1rem;
        vertical-align: middle;
        transform: rotateX(15deg);
        display: inline-block;
      }
    }
    &.show-more-nav {
      position: relative;
      .more-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
        background: rgba($color: #eee, $alpha: 0.1);
        box-shadow: 0 3px 0 rgba($color: #222, $alpha: 0.8);
        transition: all 0.5s;
        z-index: 100;
        i {
          font-weight: 500;
        }
        &:hover,
        &.active {
          box-shadow: 0 0 5px rgba($color: rgb(171, 196, 233), $alpha: 1),
            0 0 10px rgba($color: rgb(117, 162, 230), $alpha: 1),
            0 0 20px rgba($color: #409eff, $alpha: 1),
            inset 0 0 2px rgba($color: rgb(171, 196, 233), $alpha: 1);
        }
      }
    }
  }
}
</style>
