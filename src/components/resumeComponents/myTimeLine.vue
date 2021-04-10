<template>
  <ul class="time-line-list" data-aos="fade-in">
    <li
      class="line-item"
      v-for="(line, index) in lineInfo"
      :key="Math.random() + index"
    >
      <div class="line-dot">
        <i :class="['iconfont', line.iconName]"></i>
      </div>
      <div class="line-text" data-aos="zoom-in-up">
        <h3 class="line-title">
          {{ line.title }}
          <span class="line-time">
            {{ line.lineTime }}
          </span>
        </h3>
        <p class="line-subtitle">&lt;{{ line.subTitle }}&gt;</p>
        <ul class="line-desc">
          <li v-for="(des, index) in line.des" :key="Math.random() + index">
            {{ des }}
          </li>
        </ul>
      </div>
    </li>
    <li class="line-item">
      <div class="line-dot">
        <Icon type="md-create" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'myTimeLine',
  data() {
    return {
      lineInfo: [
        {
          iconName: 'icon-gongzuo',
          title: '浙江国贸数字有限公司',
          lineTime: '(2020.1 - 2021-3)',
          subTitle: ' Web前端开发实习生',
          des: ['something...', 'something...', 'something...'],
        },
        {
          iconName: 'icon-xuexi',
          title: '就读于青岛工学院',
          lineTime: '(2017.6 - 至今)',
          subTitle: ' 本科/电子信息工程',
          des: ['something...', 'something...', 'something...'],
        },
      ],
      showLine: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.time-line-list {
  position: relative;
  margin: 0 auto;
  width: 90%;
  user-select: none;
  &::before {
    content: '';
    width: 4px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    background: #000;
  }

  .line-item {
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    margin-bottom: 30px;
    &:nth-of-type(2n) {
      flex-direction: row;
      text-align: right;
      .line-text::before {
        border-color: transparent;
        border-left-color: #485563;
        left: 100%;
      }
    }
    .line-dot {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 50px;
      line-height: 48px;
      border-radius: 50%;
      border: 2px solid #345;
      text-align: center;
      background: #fff;
      i {
        font-size: 25px;
      }
    }
  }
  .line-text {
    width: 45%;
    padding: 15px;
    position: relative;
    border-radius: 5px;
    color: #fff;
    background-image: linear-gradient(60deg, #29323c, #485563);
    &::before {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-right-color: #29323c;
      position: absolute;
      left: -20px;
      top: 15px;
    }
    .line-title {
      font-size: 20px;
      margin-bottom: 10px;
      .line-time {
        font-size: 13px;
      }
    }
    .line-subtitle {
      font-size: 14px;
      margin-bottom: 10px;
      color: #a7cff7;
    }
  }
}
</style>
