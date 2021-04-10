<template>
  <div class="project-cmp-container">
    <Drawer v-model="value1">
      <Panel name="1">
        项目合集
        <template #content>
          <p>tips：测试内容。尝试封装一个简易版的折叠面板组件。</p>
          <Drawer v-model="value2">
            <Panel name="1-1">
              coder-m（本站）
              <template #content>
                <p>
                  简介：一个简单的个人空间系统。前端技术栈：vue全家桶 + view
                  UI。 目前没有后端，所有数据均为mock模拟。登录使用 账号:admin
                  密码:123123
                </p>
              </template>
            </Panel>
          </Drawer>
        </template>
      </Panel>
      <Panel name="2">
        致敬经典（游戏demo合集）
        <template #content>
          <p>tips：测试内容。尝试封装一个类似iview的折叠面板组件</p>
          <Drawer v-model="value3">
            <Panel name="2-1">
              flappy bird
              <template #content>
                <p>
                  简介：游戏中玩家必须控制一只小鸟，跨越由各种不同长度水管所组成的障碍。
                </p>
                链接：<a href=""></a>
              </template>
            </Panel>
            <Panel name="2-2">
              扫雷
              <template #content>
                <p>
                  简介：一款大众类的益智小游戏，游戏目标是在最短的时间内根据点击格子出现的数字找出所有非雷格子，同时避免踩雷，踩到一个雷即全盘皆输。
                </p>
                链接：<a href=""></a>
              </template>
            </Panel>
            <Panel name="2-3">
              2048
              <template #content>
                <p>
                  简介：
                  一款比较流行的数字游戏。每次可以选择上下左右滑动，每滑动一次，所有的数字方块都会往滑动的方向靠拢，系统也会在空白的地方乱数出现一个数字方块，相同数字的方块在靠拢、相撞时会相加。不断的叠加最终拼凑出2048这个数字就算成功。
                </p>
                链接：<a href=""></a>
              </template>
            </Panel>
          </Drawer>
        </template>
      </Panel>
    </Drawer>
  </div>
</template>

<script>
import Drawer from './components/drawer';
import Panel from './components/panel';

export default {
  name: 'ProjectCmp',
  components: { Drawer, Panel },
  data() {
    return {
      value1: '1',
      value2: '1-1',
      value3: '2-1',
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.project-cmp-container {
  margin: 0 50px;
  padding: 50px 0;
}
p {
  margin: 5px 0;
}
</style>
