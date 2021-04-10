<template>
  <form class="form-container" action="javascript:void(0)">
    <h1>{{ title }}</h1>
    <transition name="fade">
      <div class="user-psw user-info" v-if="'userName' in info">
        <input type="text" v-model="info.userName" />
        <label :class="{ hasVal: info.userName }">昵称</label>
      </div>
    </transition>
    <div class="user-id user-info">
      <input type="text" v-model="info.userId" />
      <label :class="{ hasVal: info.userId }">账号</label>
    </div>
    <div class="user-name user-info">
      <input onfocus="this.type='password'" v-model="info.userPsw" />
      <label :class="{ hasVal: info.userPsw }">密码</label>
    </div>
    <transition name="fade">
      <div class="verify user-info" v-show="'verifyCode' in info">
        <input type="text" v-model="info.verifyCode" autocomplete="off" />
        <label :class="{ hasVal: info.verifyCode }">验证码</label>
        <div id="v_container"></div>
      </div>
    </transition>
    <MyButton type="submit" @handleSubmit="handleSubmit">
      {{ info.flag ? '登录' : '注册' }}
    </MyButton>

    <div class="tips">
      {{ info.flag ? '已有' : '没有' }}账号？去
      <span @click="delProp" v-if="!info.flag">登录</span>
      <span @click="addProp" v-else>注册</span>
    </div>
  </form>
</template>

<script>
import { GVerify } from '@/plugins/index';
import MyButton from '@/cmpUI/Button';
export default {
  name: 'index',
  props: {
    title: {
      type: String,
      require: true,
    },
    info: {
      type: Object,
      require: true,
    },
  },
  components: {
    MyButton,
  },
  data() {
    return {
      verifyCode: null,
    };
  },
  mounted() {
    this.verifyCode = new GVerify('v_container');
  },
  methods: {
    addProp() {
      this.$emit('signUp');
    },
    delProp() {
      this.$emit('signIn');
    },
    handleSubmit() {
      this.$emit(
        'handleSubmit',
        this.verifyCode,
        (tipType, tipMessage, duration, cb) => {
          this.$showMessage(
            { content: tipMessage, type: tipType, duration },
            cb
          );
        }
      );
    },
    test() {},
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/var.scss';
@import '~@/assets/css/animation.scss';
.form-container {
  width: 600px;
  position: absolute;
  padding: 30px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 1px 1px rgba($color: #9b95c9, $alpha: 0.2),
    0 2px 2px rgba($color: #9b95c9, $alpha: 0.3),
    0 4px 4px rgba($color: #9b95c9, $alpha: 0.35),
    0 8px 8px rgba($color: #9b95c9, $alpha: 0.4),
    0 10px 10px rgba($color: #9b95c9, $alpha: 0.45);

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  &:before {
    content: '';
    background-image: linear-gradient(
      180deg,
      #69c2d6,
      #758eb7,
      #6e5f90,
      #8a5074
    );
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    filter: blur(20px);
  }
  h1 {
    text-align: center;
    margin: 20px 0;
    font-weight: bold;
    font-size: 32px;
  }
  .user-info {
    position: relative;
    border-bottom: 1px solid #fff;
    margin: 20px 0;
    transition: all 0.5s;
    &::after {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: -1px;
      background-color: $primary;
      transform: scaleX(0);
      transform-origin: left;
      transition: all 0.3s;
    }
    &:focus-within {
      label {
        bottom: 25px;
        font-size: 12px;
      }
      &::after {
        transform: scaleX(1);
      }
    }
    label {
      position: absolute;
      left: 0;
      bottom: 6px;
      transition: all 0.5s;
      font-size: inherit;
      font-weight: inherit;
      &.hasVal {
        bottom: 25px;
        font-size: 12px;
        color: $primary;
      }
    }
    input {
      color: inherit;
      padding: 8px 0 0 0;
      width: 200px;
      border: none;
      outline: none;
      background: transparent;
      font-size: 16px;
    }
  }
}
.tips {
  margin: 10px 0 5px;
  span {
    cursor: pointer;
    color: $primary;
    &:hover {
      text-decoration: underline;
    }
  }
}
#v_container {
  position: absolute;
  right: -130px;
  bottom: -8px;
}
</style>
