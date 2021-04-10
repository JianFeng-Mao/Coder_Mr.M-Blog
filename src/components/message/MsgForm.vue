<template>
  <form
    @submit.prevent="handleSubmit"
    class="message-form-container"
    ref="form"
  >
    <div class="form-item">
      <div class="nickname-area mr-20">
        <div class="input-area">
          <input
            type="text"
            v-model.trim="userInfo.nickname"
            :class="{ error: error.nickname, success: userInfo.nickname }"
            maxlength="10"
            placeholder="请输入昵称"
            disabled
            @blur="checkEmpty('nickname')"
          />
          <span class="tips">{{ userInfo.nickname.length }}/10</span>
        </div>
        <div class="error-content">{{ error.nickname }}</div>
      </div>
      <div class="concat-area" v-if="$route.path.includes('message')">
        <div class="input-area">
          <input
            type="text"
            v-model="userInfo.concat"
            :class="{ error: error.concat, success: userInfo.concat }"
            placeholder="留下联系方式（qq、vx、邮箱、友链等）"
          />
        </div>
        <div class="error-content">{{ error.concat }}</div>
      </div>
    </div>
    <div class="form-item">
      <div class="message-list-area">
        <div class="textarea-area">
          <span class="reversion" v-if="reversion"
            >@{{ reversion }}
            <i @click="closeReversion">x</i>
          </span>
          <textarea
            :class="{ error: error.content, success: userInfo.content }"
            v-model.trim="userInfo.content"
            placeholder="留下足迹..."
            @blur="checkEmpty('content')"
          ></textarea>

          <span class="tips">{{ userInfo.content.length }}/300</span>
        </div>
        <div class="error-content">{{ error.content }}</div>
      </div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <MyButton
          :disabled="isSubmiting"
          :width="100"
          :height="35"
          @handleSubmit="handleSubmit"
        >
          {{ isSubmiting ? '提交中...' : '提交' }}
        </MyButton>
      </div>
    </div>
  </form>
</template>

<script>
import MyButton from '@/cmpUI/Button';
export default {
  name: 'MessageForm',
  props: {
    reversion: {
      type: String,
      default: '',
    },
  },
  components: {
    MyButton,
  },
  data() {
    return {
      userInfo: {
        nickname: '',
        concat: '',
        content: '',
      },
      error: {
        nickname: '',
        concat: '',
        content: '',
      },
      isSubmiting: false,
    };
  },
  methods: {
    handleSubmit() {
      this.error.content = this.userInfo.content ? '' : "内容不能为空哦(●'◡'●)";
      if (this.error.nickname || this.error.content) {
        return;
      }
      this.isSubmiting = true;

      this.$emit('submit', this.userInfo, (tipMessage) => {
        this.$showMessage(
          {
            content: tipMessage,
            type: 'success',
            duration: 1000,
            container: this.$refs.form,
          },
          () => {
            this.userInfo.concat = '';
            this.userInfo.content = '';
            this.closeReversion();
            this.isSubmiting = false;
          }
        );
      });
    },
    checkEmpty(type) {
      this.error[type] = '';
    },
    closeReversion() {
      this.$emit('closeReversion', '');
    },
  },
  created() {
    this.userInfo.nickname = this.$store.state.loginUser.user.name;
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/css/var.scss';
.mr-20 {
  margin-right: 20px;
}
.message-form-container {
  margin-bottom: 20px;
  .form-item {
    display: flex;
    margin-bottom: 25px;
    .nickname-area,
    .concat-area {
      width: 50%;
      box-sizing: border-box;
      .input-area {
        position: relative;
        input {
          height: 40px;
        }
        .tips {
          bottom: 3px;
        }
      }
    }
    .message-list-area {
      width: 100%;
      .textarea-area {
        position: relative;
        line-height: 1;
        textarea {
          resize: none;
          width: 100%;
          height: 150px;
          overflow: hidden;
          // padding: 20px 4px;
        }
        .reversion {
          position: absolute;
          left: 0px;
          top: -25px;
          font-size: 12px;
          padding: 5px 25px 5px 15px;
          border-radius: 20px;
          // background-color: rgba($color: #87ceeb, $alpha: 0.5);
          background-color: blue;
          cursor: pointer;
          color: #fff;
          &:hover {
            i {
              display: inline;
            }
          }
          i {
            position: absolute;
            right: 10px;
            top: 4px;
            display: none;
          }
        }
      }
    }
    .button-area {
      width: 100px;
      height: 35px;
    }
    .error-content {
      width: 100%;
      margin-top: 5px;
      margin-left: 5px;
      height: 20px;
      line-height: 20px;
      box-sizing: border-box;
      color: $danger;
    }
    .tips {
      position: absolute;
      font-size: 12px;
      color: $gray;
      right: 7px;
      bottom: 7px;
    }
  }
}
input,
textarea {
  color: $words;
  padding: 8px;
  border: 1px dashed $gray;
  border-radius: 5px;
  width: 100%;

  &.error {
    border-color: $danger;
  }
  &.success {
    border-color: $success;
  }
  &:focus,
  &:hover {
    border-color: darken($primary, 20%);
  }
  &::-webkit-input-placeholder {
    color: $gray;
  }
  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: $gray;
  }
  &:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: $gray;
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: $gray;
  }
}
</style>
