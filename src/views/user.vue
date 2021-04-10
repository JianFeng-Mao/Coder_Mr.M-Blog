<template>
  <div>
    <a @click="handleLoginOut">注销</a>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'user',
  data() {
    return {};
  },
  computed: {
    ...mapState({
      userName(state) {
        return state.loginUser.user.name;
      },
    }),
  },
  mounted() {},
  methods: {
    ...mapActions(['loginOut']),
    async handleLoginOut() {
      localStorage.removeItem('IS_LOGIN');
      await this.loginOut();

      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped></style>
