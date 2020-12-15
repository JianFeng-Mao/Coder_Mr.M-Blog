<template>
  <div id="center">
    <div class="my-avatar animate__animated animate__fadeInUp">
      <img src="@/assets/image/绿色M.png" alt="coder_M">
    </div>
    
    <ul class="nav-list animate__animated animate__fadeInUpBig">
      <li
        v-for="nav in navTexts"
        :key="nav.name"
        @click="goPage(nav.path)"
      >
        <Icon :type="nav.type" />
        <span class="nav-text">{{ nav.name }}</span>
      </li>
    </ul>

    <ul class="concat animate__animated animate__fadeInUpBig">
      <li>
        <i class="iconfont icon-QQ" />
        <span>：561424452</span>
      </li>
      <li>
        <i class="iconfont icon-vx" />
        <span>：m56142</span>
      </li>
      <li>
        <i class="iconfont icon-youxiang" />
        <span>：jianfeng.mao@aliyun.com / 561424452@qq.com</span>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      navTexts: [
        {name: '个人简历', type: 'ios-paper-outline', path: '/resume'},
        {name: '留言板', type: 'ios-create', path: '/message'},
        {name: '博客日记', type: 'ios-book', path: '/blog'},
        {name: 'Github', type: 'logo-github', path: 'https://github.com/JianFeng-Mao'},
      ]
    }
  },
  methods: {
    goPage(path){
      if(path === 'https://github.com/JianFeng-Mao') {
        window.open(path);
      }else {
        this.$router.push(path);
      }
    }
  },
}
</script>

<style lang="scss" scoped>

#center{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .my-avatar{
    position: relative;
    width: 11rem;
    height: 11rem;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 50%;
    border: 1px solid transparent;
    transition: all .5s;
    overflow: hidden;
    text-align: center;
    &:hover{
      box-shadow: 0 0 30px rgba(51, 136, 238, 1);
      border-color: #777;
      &::after{
        background-position: 180px, 180px;
      }
    }
    &::after{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(-60deg,transparent,transparent 70px,hsla(0,0%,100%,.6) 90px,hsla(0,0%,100%,.6) 110px,transparent 130px);
      background-position: -180px, -180px;
      background-repeat: no-repeat;
      transition: .5s;
    }
    img{
      width: 8rem;
      height: 8rem;
      -webkit-user-select: none;
        -moz-user-select : none;
          -ms-user-select: none;
              user-select: none;
    }
  }
  .nav-list{
    display: flex;
    margin: 2rem 0;
    justify-content: center;
    align-items: center;
    li{
      color: #fff;
      margin: 0 .3rem;
      white-space: nowrap;
      i{
        transition: all .5s;
      }
      .nav-text{
        font-size: .9em;
        margin-left: .2rem;
        transition: all .5s;
      }
    }
  }
  .concat{
    display: flex;
    white-space: nowrap;
    animation-delay: .3s;
    li{
      color: #fff;
      margin: 0 .5rem;
      i{
        transition: all .5s;
      }
      span{
        transition: all .5s;
        font-size: .9rem;
      }
    }
  }
  li:hover{
    color: rgb(27, 223, 132);
    text-decoration: underline;
    cursor: pointer;
      
  }
}
</style>