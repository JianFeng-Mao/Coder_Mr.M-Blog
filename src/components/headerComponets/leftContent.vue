<template>
  <div class="left-content">
    <div class="rotate-btn">
      <h3 class="indent">我的简历</h3>
      <div class="logo">
        <img src="@/assets/image/字母M.png">
      </div>
      <div class="contorl-music">
        <Icon type="ios-play-outline" @click="play" v-show="!isPlay" />
        <Icon type="ios-pause-outline" @click="pause" v-show="isPlay" />
      </div>
      <audio ref="audio" src="@/assets/music.mp3" preload="auto" loop="loop"></audio>
    </div>
    <div class="text-title" v-if=" $route.name == 'resume' ">
      <p>个人简历</p>
      <p>前端工程师</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "leftContent",
  data() {
    return {
      isPlay: false,
    }
  },
  methods: {
    play() {
      this.$refs.audio.play();
      this.isPlay = true;
    },
    pause() {
      this.$refs.audio.pause();
      this.isPlay = false;
    }
  },
}
</script>

<style lang="scss" scoped>
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
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d; /* Safari and Chrome */
    &:hover{
      animation: breathLamp 5s infinite;
      @keyframes breathLamp{
        0%{
          filter: hue-rotate(0deg);
        }
        50%{
          filter: hue-rotate(180deg);
        }
        100%{
          filter: hue-rotate(0deg);
        }
      }
      .logo{
        transform: rotateY(-180deg);
      }
      .contorl-music{
        transform: rotateY(0deg);
      }
    }
    .indent {
      text-indent: -999999px;
    }
    .logo,
    .contorl-music {
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0;
      bottom: 0;
      border-radius: 50%;
      text-align: center;
      transition: all 1s;
      background: linear-gradient(0deg,rgba(196, 11, 233, 0.5) 0,rgba(122, 17, 221, 0.5));
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;	/* Chrome 和 Safari */
      -moz-backface-visibility: hidden; 	/* Firefox */
      -ms-backface-visibility: hidden; 	/* Internet Explorer */
    }
    .logo {
      transform: rotateY(0deg);
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
      transform: rotateY(180deg);
      text-align: center;
      background: rgba(0, 0, 0, .6);
      i{
        vertical-align: middle;
        color: #ccc;
        font-size: 1.7rem;
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
      overflow: hidden;
      white-space: nowrap;
      &:nth-child(1) {
        border-bottom: 1px solid #111;
      }
      &:nth-child(2) {
        border-top: 1px solid #666;
      }
    }
  }
}
</style>