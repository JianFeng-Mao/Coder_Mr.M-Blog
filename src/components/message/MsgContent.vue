<template>
  <div class="message-content-container" v-if="list">
    <div class="msg-item" v-for="item in list" :key="item.id">
      <div class="msg-container">
        <div class="user-info">
          <Avatar :size="44" :url="item.avatar" />
          <div class="name-date">
            <div class="user-name">
              {{ item.nickname }}
              <template v-if="item.notFirst">
                <span>回复：</span>
                <span>{{ item.reversion }}</span>
              </template>
            </div>
            <div class="create-date">
              {{ formatDate(item.createDate, true) }}
            </div>
          </div>
          <div class="reply" @click="reply(item)">回复</div>
        </div>
        <div class="msg-content">
          {{ item.content }}
        </div>
      </div>
      <div v-if="item.replyInfo" :class="{ 'reply-container': !item.notFirst }">
        <MessageContent :list="item.replyInfo" @reply="reply" />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '@/cmpUI/Avatar';
import { formatDate } from '@/utils/index';
export default {
  name: 'MessageContent',
  components: {
    Avatar,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatDate,
    reply(userInfo) {
      this.$emit('reply', userInfo);
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/var.scss';
.message-content-container {
  margin: 20px 0;
  .msg-item {
    background-color: #eee;
    border-radius: 5px;
    margin-bottom: 10px;
    .reply-container {
      margin-left: 50px;
      background-color: #aaa !important;
    }
    .msg-container {
      padding: 10px 20px 20px;
      .user-info {
        display: flex;
        padding: 10px 0;
        border-bottom: 1px dashed rgba($color: $gray, $alpha: 0.5);
        .avatar-container {
          margin-right: 10px;
          display: flex;

          align-items: center;
        }
        .name-date {
          flex: 1;
          .user-name {
            font-size: 16px;
            font-weight: bold;
          }
          .create-date {
            font-size: 12px;
            color: rgba($color: $words, $alpha: 0.7);
          }
        }
      }
    }
    &:hover {
      .reply {
        visibility: visible;
        opacity: 1;
      }
    }
    .msg-content {
      margin-top: 10px;
      letter-spacing: 1px;
      word-spacing: 1px;
    }
  }
}
.reply {
  font-size: 12px;
  cursor: pointer;
  height: 20px;
  line-height: 20px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s;
  text-transform: capitalize;
  &:hover {
    color: $warn;
    text-decoration: underline;
  }
}
</style>
