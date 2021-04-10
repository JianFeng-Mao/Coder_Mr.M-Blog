<template>
  <ul class="site-menu-container">
    <li class="menu-item" v-for="m in menuList" :key="m.id">
      <div class="item" :class="{ seted: $route.name.includes(m.name) }">
        <router-link
          :exact="m.exact"
          active-class="selected"
          exact-active-class=""
          :to="{ name: m.name }"
        >
          <Icon :type="m.type" />
          <span>{{ m.text }}</span>
        </router-link>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SiteMenu',
  data() {
    return {
      menuList: [
        {
          name: 'article',
          type: 'ios-book-outline',
          text: '文章',
          exact: false,
        },
        {
          name: 'project',
          type: 'md-code-working',
          text: '项目&Demo',
          exact: true,
        },

        {
          name: 'message',
          type: 'ios-create',
          text: '留言板',
          exact: true,
        },
        {
          name: 'resume',
          type: 'ios-paper-outline',
          exact: true,
          text: '简历',
        },
        {
          name: 'home',
          type: 'md-home',
          exact: true,
          text: '首页',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.site-menu-container {
  width: 100%;
  height: 100%;
  white-space: nowrap;
  .menu-item {
    margin: 20px 0;
    height: 40px;
    line-height: 40px;
    .item {
      padding: 0 40px;
      font-size: 16px;
      font-weight: bold;
      transition: 0.3s;
      height: 100%;
      width: 0;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      &:hover {
        color: #fff;
        background-color: rgba($color: #666, $alpha: 0.5);
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        width: 90%;
        a {
          color: #fff;
        }
      }
      &.seted {
        background-color: rgba($color: #999, $alpha: 0.5);
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        width: 90%;
      }
      a {
        color: #bbb;
        .ivu-icon {
          font-size: 18px;
          transition: 0.3s;
          margin-right: 10px;
        }
        &.selected {
          color: #fff;
          font-size: 20px;

          .ivu-icon {
            font-size: 22px;
          }
        }
      }
    }
  }
}
</style>
