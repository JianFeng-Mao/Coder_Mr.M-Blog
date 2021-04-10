<template>
  <div class="message-area-container" :class="{ mrAuto: mrAuto }">
    <MsgForm
      v-on="$listeners"
      :reversion="reversion"
      @closeReversion="closeReversion"
    />
    <h1>
      {{ title }}
      <span class="msg-count">{{ subTitle }}</span>
    </h1>

    <p class="not-have-comment" v-if="!isListLoading && list.length <= 0">
      暂无评论，快去发表第一条评论吧！
    </p>
    <MsgContent v-else :list="list" @reply="replyHandle" />

    <div class="hasMore" v-if="!isListLoading">
      {{
        hasMore
          ? '下滑加载更多... O(∩_∩)O'
          : '别滑了，真的一滴都没有了。 ╮(╯▽╰)╭'
      }}
    </div>
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import MsgForm from './MsgForm';
import MsgContent from './MsgContent';
export default {
  name: 'MessageArea',
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '0',
    },
    hasMore: {
      type: Boolean,
      default: true,
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
    mrAuto: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      reversion: '',
    };
  },
  components: {
    MsgForm,
    MsgContent,
  },
  methods: {
    replyHandle(userInfo) {
      console.log(userInfo);
      this.reversion = userInfo.nickname;
      console.log(this.reversion);
    },
    closeReversion(val) {
      this.reversion = val;
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/var.scss';
.message-area-container {
  width: 100%;
  .not-have-comment {
    text-align: center;
  }
  &.mrAuto {
    margin: auto;
    width: 70%;
  }
  h1 {
    font-size: 20px;
    line-height: 1.5;
    font-weight: bold;
    .msg-count {
      font-weight: normal;
    }
  }
  .hasMore {
    text-align: center;
    color: $gray;
    height: 40px;
  }
  .loading {
    position: relative;
    height: 30px;
  }
}
</style>
