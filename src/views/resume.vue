<template>
  <div id="resume-page">
    <div class="page resume-content">
      <div class="about-me" id="about-me">
        <Page-title :showInfo="about" data-aos="fade-up" />
        <Card class="about-card" data-aos="zoom-in">
          <div class="card-text">
            <h3>
              <Icon type="md-happy" />
              一名前端攻城狮
            </h3>
            <p>
              很高兴在茫茫人海中能与你相遇。
            </p>
            <h3>
              <Icon type="md-happy" />
              个人信息
            </h3>
            <p>年龄：{{ new Date().getFullYear() - 1998 }}。</p>
            <p>坐标：杭州。</p>
            <p>学历：本科。2021届毕业生。</p>
            <p>专业：电子信息工程。</p>
            <p>状态：求职中。</p>
            <h3>
              <Icon type="md-happy" />
              喜欢全身心投入代码开发，享受解决BUG后的喜悦，保持对新事物的热爱。
            </h3>
          </div>
        </Card>
      </div>
      <div class="my-skill" id="my-skill">
        <Page-title :showInfo="skill" data-aos="fade-up" />
        <Card-open />
      </div>
      <div class="my-experience" id="my-experience">
        <Page-title :showInfo="experience" data-aos="fade-up" />
        <My-time-line />
      </div>
      <div class="call-me" id="call-me">
        <Page-title :showInfo="contact" data-aos="fade-up" />
        <My-contact />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/resumeComponents/pageTitle';
import CardOpen from '@/components/resumeComponents/cardOpen';
import MyTimeLine from '@/components/resumeComponents/myTimeLine';
import MyContact from '@/components/resumeComponents/myContact';
import mainScroll from '@/mixin/mainScroll.js';

export default {
  name: 'resume',
  mixins: [mainScroll()],
  components: {
    PageTitle,
    CardOpen,
    MyTimeLine,
    MyContact,
  },
  data() {
    return {
      about: { name: '关于我', eg: 'ABOUT-ME' },
      skill: { name: '前端技能', eg: 'WEB-SKILL' },
      experience: { name: '我的经历', eg: 'EXPERIENCE' },
      contact: { name: '联系我', eg: 'CONTACT-ME' },
    };
  },
  methods: {},

  mounted() {},
};
</script>

<style lang="scss" scoped>
#resume-page {
  overflow-x: hidden;
  .resume-content {
    background: #fff;
    box-shadow: 0px 0 25px rgba($color: #000000, $alpha: 0.3);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    & > div {
      min-height: calc(100vh - 60px);
      width: 100%;
      padding-bottom: 30px;
    }
    .about-me {
      .about-card {
        width: 80%;
        margin: 0 auto;
        border: none;
        transition: 0.5s;
        &:hover {
          box-shadow: 5px 5px 5px rgba($color: #000000, $alpha: 0.5),
            10px 10px 10px rgba($color: #000000, $alpha: 0.4),
            20px 20px 20px rgba($color: #000000, $alpha: 0.3);
        }
        .card-text {
          letter-spacing: 3px;
          h3 {
            font-weight: 600;
            margin: 5px 0;
          }
          p {
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
