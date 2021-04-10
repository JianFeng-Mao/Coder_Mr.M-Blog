<template>
  <ul class="right-nav">
    <Nav-bar :navBar="$route.name == 'resume' ? resumeNavBar : otherNavBar" />
    <li class="show-more-nav" v-if="$route.name == 'resume'">
      <div class="more-btn" @click="changeMenuBtn()">
        <Icon type="md-menu" v-show="!showMenu" />
        <Icon type="md-close" v-show="showMenu" />
      </div>
    </li>

    <div
      :class="['nav-menu-bg', { 'show-more-menu': showMenu }]"
      v-show="this.$route.name == 'resume'"
    >
      <ul class="more-nav-list">
        <li class="more-nav" v-for="nav in otherNavBar" :key="nav.name">
          <router-link :to="{ name: nav.type }">
            {{ nav.name }}
            <span class="line-through"></span>
          </router-link>
        </li>
      </ul>
      <Card class="my-card">
        <div style="text-align:center">
          <img src="@/assets/image/绿色M.png" class="card-logo" />
          <h3>保持好奇，充满热爱</h3>
          <h3>Few words, many deeds.</h3>
        </div>
      </Card>
    </div>
  </ul>
</template>

<script>
import NavBar from './NavBar';
export default {
  name: 'rightNav',
  components: {
    NavBar,
  },
  data() {
    return {
      resumeNavBar: [
        { name: '关于我', type: 'about-me', k: 0 },
        { name: '我的技能', type: 'my-skill', k: 0 },
        { name: '我的经历', type: 'my-experience', k: 0 },
        { name: '联系我', type: 'call-me', k: 0 },
      ],
      otherNavBar: [
        { name: '我的简历', type: 'resume', k: 1 },
        { name: '留言板', type: 'message', k: 1 },
        { name: '个人中心', type: 'blog', k: 1 },
      ],
      showMenu: false,
    };
  },
  computed: {
    showMoreMenu() {
      return this.$route.name == 'resume';
    },
  },
  watch: {
    showMenu() {
      if (this.showMenu) {
        this.stop();
      } else {
        this.move();
      }
    },
    $route() {
      this.changeMenuBtn(true);
      this.move();
    },
  },
  methods: {
    changeMenuBtn(flag = this.showMenu) {
      this.showMenu = !flag;
      this.$emit('showZhe', this.showMenu);
    },
    changeShowMenu(flag) {
      this.showMenu = flag;
    },
    stop() {
      // 阻止滚动条事件
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = 'hidden';
      document.addEventListener('touchmove', mo, false); //禁止页面滑动
    },
    move() {
      // 开启滚动条事件
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = ''; //出现滚动条
      document.removeEventListener('touchmove', mo, false);
    },
  },
  mounted() {},
  beforeDestroy() {
    this.changeMenuBtn(true);
  },
};
</script>

<style lang="scss" scoped>
.right-nav {
  cursor: pointer;
  .show-more-nav {
    position: relative;
    .more-btn {
      position: absolute;
      top: 50%;
      right: -50px;
      transform: translateY(-125%);
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 50%;
      background: rgba($color: #eee, $alpha: 0.1);
      box-shadow: 0 3px 0 rgba($color: #222, $alpha: 0.8);
      transition: all 0.5s;
      z-index: 100;
      text-align: center;
      i {
        font-weight: 500;
        color: #fff;
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
  .nav-menu-bg {
    position: fixed;
    right: -180px;
    top: 0;
    height: 0;
    width: 0;
    overflow: hidden;
    border-top: none;
    border-right: none;
    border-left: 180px solid transparent;
    border-bottom: 100vh solid rgba($color: #345, $alpha: 1);
    background-color: transparent;
    z-index: 10;
    transition: all 0.2s ease-in-out;
    &.show-more-menu {
      width: 30%;
      right: 0;
      .more-nav-list {
        right: 3%;
        text-align: center;
      }
      .my-card {
        right: 40px;
      }
    }
    .more-nav-list {
      position: fixed;
      top: 240px;
      right: -160px;
      user-select: none;
      transition: all 0.2s ease-in-out;
      .more-nav {
        &:hover {
          a {
            color: rgba(51, 122, 183, 0.5);
            .line-through {
              width: 100%;
              background-color: rgba(51, 122, 183, 0.5);
            }
          }
        }
        a {
          color: #fff;
          font-size: 1.5rem;
          display: block;
          position: relative;
          padding: 10px;
          transition: all 0.5s;
          &.router-link-exact-active {
            font-weight: 700;
            font-size: 1.6rem;
            color: #337ab7;
            .line-through {
              width: 100%;
              background-color: #337ab7;
            }
          }
          .line-through {
            position: absolute;
            top: 50%;
            left: 0;
            display: block;
            width: 0;
            height: 3px;
            background-color: #337ab7;
            transition: all 0.5s;
          }
        }
      }
    }
    .my-card {
      user-select: none;
      position: fixed;
      top: 80vh;
      right: -500px;
      box-shadow: 8px 8px 5px rgba($color: #000, $alpha: 0.85);
      background: #999;
      color: #fff;
      width: 20%;
      &:hover {
        box-shadow: 15px 15px 15px rgba($color: #000000, $alpha: 0.5);
      }
      .card-logo {
        width: 8%;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
