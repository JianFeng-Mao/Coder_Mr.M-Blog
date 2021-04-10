<template>
  <div class="my-contact">
    <span class="right-top-line" data-aos="fade-left"></span>
    <Row class="content-jiyu" data-aos="fade-up">
      <Col span="6" class="lg">灵感</Col>
      <Col span="6" class="dm">代码</Col>
      <Col span="6" class="mx">梦想</Col>
      <Col span="6" class="wl">未来</Col>
    </Row>
    <div class="words">
      <p data-aos="fade-up" data-aos-delay="50">学习是一个充实愉悦的过程</p>
      <p data-aos="fade-up" data-aos-delay="100">喜欢尝试，期待新鲜事物</p>
      <p data-aos="fade-up" data-aos-delay="150">前端即兴趣，兴趣即未来</p>
      <p data-aos="fade-up" data-aos-delay="200">行路有良友，便是捷径</p>
      <p data-aos="fade-up" data-aos-delay="250">期待有机会与您共事</p>
    </div>

    <ul class="contact-method" data-aos="fade-up" data-aos-delay="300">
      <li class="QQ" @mouseenter="showQR('QQ')" @mouseleave="hiddenQR('QQ')">
        <a
          href="tencent://message/?Menu=yes&uin=561424452&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
          class="qq-href"
        >
          <i class="iconfont icon-QQ"></i>
        </a>
        <transition name="slide-fade">
          <div class="qrcode" ref="qrCodeUrlQQ" key="QQ" v-show="showQQ"></div>
        </transition>
      </li>
      <li class="VX" @mouseenter="showQR('VX')" @mouseleave="hiddenQR('VX')">
        <i class="iconfont icon-vx"></i>
        <transition name="slide-fade">
          <div class="qrcode" ref="qrCodeUrlWX" key="VX" v-show="showVX"></div>
        </transition>
      </li>
      <li class="YX" @mouseenter="showQR('YX')" @mouseleave="hiddenQR('YX')">
        <i class="iconfont icon-youxiang"></i>
        <transition name="slide-fade">
          <div class="tips" key="YX" v-show="showYX">
            <p>阿里云邮箱: jianfeng.mao@aliyun.com</p>
            <p>QQ邮箱: 561424452@qq.com</p>
          </div>
        </transition>
      </li>
    </ul>
    <span class="left-bottom-line" data-aos="fade-right"></span>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2';
export default {
  name: 'myContact',
  data() {
    return {
      showQQ: false,
      showVX: false,
      showYX: false,
    };
  },
  methods: {
    creatQrCode() {
      var qrcode1 = new QRCode(this.$refs.qrCodeUrlQQ, {
        text:
          'https://qm.qq.com/cgi-bin/qm/qr?k=ai_RydadDYI6JqDb7tlLaOMrKVZ27u_y&noverify=0', // 需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H,
      });
      var qrcode2 = new QRCode(this.$refs.qrCodeUrlWX, {
        text: 'https://u.wechat.com/MLO4KZaimhFYvWRxTusOmQw', // 需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H,
        src: '../../assets/image/vx.jpg',
        imgWidth: 150,
        imgHeight: 180,
      });
    },
    showQR(type) {
      if (type === 'QQ') {
        this.showQQ = true;
      } else if (type === 'VX') {
        this.showVX = true;
      } else {
        this.showYX = true;
      }
    },
    hiddenQR(type) {
      if (type === 'QQ') {
        this.showQQ = false;
      } else if (type === 'VX') {
        this.showVX = false;
      } else {
        this.showYX = false;
      }
    },
  },
  mounted() {
    this.creatQrCode();
  },
};
</script>

<style lang="scss" scoped>
.my-contact {
  width: 440px;
  height: 400px;
  margin: 0 auto 10vh;
  padding: 50px 10px;
  position: relative;
  .right-top-line,
  .left-bottom-line {
    position: absolute;
    width: 150px;
    height: 80px;
  }
  .right-top-line {
    border-top: 4px solid;
    border-right: 4px solid;
    color: #000;
    right: -40px;
    top: 5px;
  }
  .left-bottom-line {
    border-bottom: 4px solid;
    border-left: 4px solid;
    color: #000;
    left: -45px;
    bottom: 0;
  }
  .content-jiyu {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    .lg {
      color: #e3723c;
    }
    .dm {
      color: #e7c200;
    }
    .mx {
      color: #88b232;
    }
    .wl {
      color: #1bacf0;
    }
  }
  .words {
    text-align: center;
    margin: 30px 0;
    p {
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 600;
    }
  }
  .contact-method {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      position: relative;
      width: 50px;
      height: 50px;
      line-height: 50px;
      color: #eee;
      text-align: center;
      border-radius: 50%;
      margin: 0 20px;
      background: #345;
      border: 1px solid transparent;
      transition: all 0.5s;
      &.QQ:hover {
        background: #fff;
        border-color: #1bacf0;
        color: #1bacf0;
        a {
          color: #2d8cf0;
        }
      }
      &.VX:hover {
        background: #fff;
        border: 1px solid #1bf06d;
        color: #1bf06d;
      }
      &.YX:hover {
        background: #fff;
        border: 1px solid #f0be1b;
        color: #f0b71b;
      }
      .slide-fade-enter,
      .slide-fade-leave-to {
        opacity: 0;
      }
      .slide-fade-enter-to {
        opacity: 1;
      }
      .slide-fade-enter-active {
        transition: all 0.8s;
      }
      .slide-fade-leave-active {
        transition: all 0.8s;
      }
      .qrcode {
        position: absolute;
        left: -40px;
        top: -140px;
        border: 5px solid #345;
        padding: 10px;
        background: #fff;

        &::after {
          content: '';
          display: inline-block;
          width: 0;
          height: 0;
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          border: 10px solid transparent;
          border-top-color: #345;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .tips {
        width: 265px;
        height: 100px;
        padding: 10px;
        background: rgba(51, 68, 85, 0.9);
        position: absolute;
        left: 50%;
        top: -110px;
        transform: translateX(-50%);
        text-align: left;
        &::after {
          content: '';
          display: inline-block;
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-top-color: rgba($color: #345, $alpha: 0.9);
          position: absolute;
          left: 50%;
          bottom: -20px;
          transform: translateX(-50%);
        }
        p {
          font-size: 13px;
          line-height: 3;
        }
      }
    }
    a.qq-href {
      display: inline-block;
      width: 100%;
      height: 100%;
      color: #eee;
    }
    i {
      font-size: 24px;
      &.icon-youxiang {
        font-size: 20px;
      }
    }
  }
}
</style>
