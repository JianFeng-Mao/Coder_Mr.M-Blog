<template>
  <div id="center">
    <div class="my-avatar animate__animated animate__fadeInUp">
      <img src="@/assets/image/绿色M.png" alt="coder_M" />
    </div>

    <ul class="nav-list animate__animated animate__fadeInUpBig">
      <li v-for="nav in navTexts" :key="nav.name" @click="goPage(nav.path)">
        <Icon :type="nav.type" />
        <span class="nav-text">{{ nav.name }}</span>
      </li>
      <li>
        <Icon type="md-person" />
        <span class="nav-text" v-if="!hasUser" @click="goPage('/login')"
          >登录/注册</span
        >
        <span class="nav-text" v-else @click="goPage('/user')">{{
          userName
        }}</span>
      </li>
    </ul>

    <ul class="concat animate__animated animate__fadeInUpBig">
      <li>
        <i class="iconfont icon-QQ" />
        <a
          href="tencent://message/?Menu=yes&uin=561424452&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
          >：561424452</a
        >
      </li>
      <li>
        <i class="iconfont icon-vx" />
        <a>：m56142</a>
      </li>
      <li>
        <i class="iconfont icon-youxiang" />
        <a href="mailto:maojianfeng0428@foxmail.com"
          >：maojianfeng0428@foxmail.com</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'center',
  data() {
    return {
      navTexts: [
        { name: '简历', type: 'ios-paper-outline', path: '/resume' },
        { name: '留言板', type: 'ios-create', path: '/message' },
        { name: '个人中心', type: 'ios-book', path: '/blog/article' },
        {
          name: 'Github',
          type: 'logo-github',
          path: 'https://github.com/JianFeng-Mao',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      userName(state) {
        return state.loginUser.user.name;
      },
      hasUser(state) {
        return state.loginUser.user;
      },
    }),
  },
  methods: {
    goPage(path) {
      if (path === 'https://github.com/JianFeng-Mao') {
        window.open(path);
      } else {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .my-avatar {
    position: relative;
    width: 11rem;
    height: 11rem;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 50%;
    border: 1px solid transparent;
    transition: all 0.5s;
    overflow: hidden;
    text-align: center;
    &:hover {
      box-shadow: 0 0 30px rgba(51, 136, 238, 1);
      border-color: #777;
      &::after {
        background-position: 180px, 180px;
      }
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(
        -60deg,
        transparent,
        transparent 70px,
        hsla(0, 0%, 100%, 0.6) 90px,
        hsla(0, 0%, 100%, 0.6) 110px,
        transparent 130px
      );
      background-position: -180px, -180px;
      background-repeat: no-repeat;
      transition: 0.5s;
    }
    img {
      width: 8rem;
      height: 8rem;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }
  .nav-list {
    display: flex;
    margin: 2rem 0;
    justify-content: center;
    align-items: center;
    li {
      color: #fff;
      margin: 0 0.3rem;
      white-space: nowrap;
      i {
        transition: all 0.5s;
      }
      .nav-text {
        font-size: 0.9em;
        margin-left: 0.2rem;
        transition: all 0.5s;
      }
    }
  }
  .concat {
    display: flex;
    white-space: nowrap;
    animation-delay: 0.3s;
    li {
      color: #fff;
      margin: 0 0.5rem;
      i {
        transition: all 0.5s;
      }
      span,
      a {
        transition: all 0.5s;
        font-size: 0.9rem;
        color: #fff;
      }
    }
  }
  li:hover {
    color: rgb(27, 223, 132);
    text-decoration: underline;
    cursor: pointer;
    span,
    a {
      color: rgb(27, 223, 132);
    }
  }
}
</style>
