<template>
  <div id="page-header" class="animate__animated animate__fadeInDown">
    <ul class="header-nav-list">
      <div class="left-content">
        <div class="rotate-btn">
          <h3 class="indent">我的简历</h3>
          <!-- <div class="logo play">
            <img src="../assets/image/字母M.png">
          </div> -->
          <div class="contorl-music">
            <Icon type="ios-play-outline" />
            <Icon type="ios-pause-outline" v-show="showBtn" />
          </div>
          <audio src=""></audio>
        </div>
        <div class="text-title">
          <p>简历</p>
          <p>前端工程师</p>
        </div>
      </div>
      <div>
        <li>nav</li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBtn: false
    }
  },
};
</script>

<style lang="scss" scoped>
#page-header {
  width: 100%;
  height: 60px;
  background: #345;
  .header-nav-list {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .left-content {
      display: flex;
      align-items: center;
      .rotate-btn {
        position: relative;
        width: 50px;
        height: 50px;
        line-height: 50px;
        margin: 5px;
        border-radius: 50%;
        box-shadow: 0 0 20px #409eff, 0 0 5px #3f4245;
        overflow: hidden;
        .indent {
          text-indent: -999999px;
        }
        .logo,
        .contorl-music {
          position: absolute;
          left: 1px;
          right: -1px;
          top: 0;
          bottom: 0;
          border-radius: 50%;
          text-align: center;
          // background: linear-gradient(0deg,rgba(196, 11, 233, 0.5) 0,rgba(122, 17, 221, 0.5));
        }
        .logo {
          &.play {
            animation: music-play 5s linear infinite;
          }
          @keyframes music-play {
            0% {
              filter: hue-rotate(0);
            }
            50% {
              filter: hue-rotate(-180deg);
            }
            100% {
              filter: hue-rotate(0);
            }
          }
          img {
            height: 60%;
            vertical-align: middle;
          }
        }
        .contorl-music{
          i{
            vertical-align: middle;
            text-align: center;
            color: #ccc;
            font-size: 1.8rem;
          }
        }
      }
      .text-title {
        margin-left: 10px;
        color: #fff;
        font-weight: 500;
        text-align: center;
        p {
          height: 30px;
          line-height: 30px;

          &:nth-child(1) {
            border-bottom: 1px solid #111;
          }
          &:nth-child(2) {
            border-top: 1px solid #666;
          }
        }
      }
    }
  }
}
</style>