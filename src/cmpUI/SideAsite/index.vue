<template>
  <div class="side-asite-container">
    <div class="avatar">
      <Avatar url="https://i.loli.net/2017/08/21/599a521472424.jpg" />
    </div>
    <div class="menu">
      <Side-menu />
    </div>
    <div class="decorate">
      留着做个简易音乐播放器吧
    </div>
  </div>
</template>

<script>
import Avatar from '@/cmpUI/Avatar';
import SideMenu from '@/components/site/SiteMenu';
export default {
  name: 'sideAsite',
  components: {
    Avatar,
    SideMenu,
  },
};
</script>

<style scoped lang="scss">
.side-asite-container {
  position: fixed;
  width: 250px;
  height: 100%;
  background: linear-gradient(to bottom, #232930, #446283);
  color: #b4b8bc;
  .avatar {
    text-align: center;
    .avatar-container {
      padding: 10px 0;
    }
  }
  .menu {
    width: 100%;
  }
  .decorate {
    margin-top: 70px;
    width: 100%;
    border: 2px solid red;
  }
}
</style>
