<template>
  <div class="sign-container">
    <FormList
      :info="loginInfo"
      :title="title"
      @signUp="handleSignUp"
      @signIn="handleSignIn"
      @handleSubmit="handleSubmit"
    />
  </div>
</template>

<script>
import FormList from './form';
export default {
  name: 'LoginIndex',
  components: {
    FormList,
  },
  data() {
    return {
      title: '用户登录',
      loginInfo: {
        flag: 1,
        userId: '',
        userPsw: '',
      },
    };
  },

  mounted() {},
  methods: {
    handleSignUp() {
      this.title = '用户注册';
      this.$set(this.loginInfo, 'userName', '');
      this.$set(this.loginInfo, 'verifyCode', '');
      this.$set(this.loginInfo, 'userId', '');
      this.$set(this.loginInfo, 'userPsw', '');
      this.loginInfo.flag = 0;
    },
    handleSignIn() {
      this.$delete(this.loginInfo, 'userName');
      this.$delete(this.loginInfo, 'verifyCode');
      this.$set(this.loginInfo, 'userId', '');
      this.$set(this.loginInfo, 'userPsw', '');
      this.loginInfo.flag = 1;
      this.title = '用户登录';
    },
    async handleSubmit(verifyCode, cb) {
      // 判断账号 密码 验证码  昵称为空则设置随机值
      if (!this.loginInfo.userId) {
        // 账号为空
        cb('error', '账号不能为空');
      } else if (!this.loginInfo.userPsw) {
        // 密码为空
        cb('error', '密码不能为空');
      } else if (!this.loginInfo.flag) {
        // 注册状态
        let verifyFlag = verifyCode.validate(this.loginInfo.verifyCode);
        if (verifyFlag.res) {
          cb('success', '注册成功', 1000, () => {
            this.handleSignIn();
          });
        } else {
          if (verifyFlag.val) {
            // 不为空但是错误
            cb('error', '验证码有误');
          } else {
            // 为空
            cb('error', '验证码不能为空');
          }
        }
      } else {
        const resp = await this.$store.dispatch('login', {
          loginId: this.loginInfo.userId,
          loginPsw: this.loginInfo.userPsw,
        });
        if (resp) {
          localStorage.setItem(
            'IS_LOGIN',
            JSON.stringify(this.$store.getters.isLogin)
          );
          const path = this.$route.params.prevUrl || '/';
          cb('success', '登录成功,1秒后返回上一页', 1000, () => {
            this.$set(this.loginInfo, 'userId', '');
            this.$set(this.loginInfo, 'userPsw', '');
            this.$router.push(path);
          });
        } else {
          cb('error', '账号或密码错误');
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-container {
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: linear-gradient(180deg, #69c2d6, #758eb7, #6e5f90, #8a5074);
}
</style>
