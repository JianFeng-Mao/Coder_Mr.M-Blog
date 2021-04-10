import Vue from 'vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/resume',
    name: 'resume',
    meta: {
      title: '我的简历',
    },
    component: () => import('../views/resume.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    redirect: 'blog/article',
    component: () => import('../views/blog.vue'),
    children: [
      {
        path: 'article',
        name: 'article',
        meta: {
          title: '文章列表',
        },
        component: () => import('../views/article.vue'),
      },
      {
        path: 'article/cate/:id',
        name: 'articleCategory',
        meta: {
          auth: true,
          title: '文章列表',
        },
        component: () => import('../views/article.vue'),
      },
      {
        path: 'article/detail/:id',
        name: 'articleDetail',
        meta: {
          auth: true,
          title: '文章详情',
        },
        component: () => import('../views/detail.vue'),
      },
      {
        path: 'project',
        name: 'project',
        meta: {
          title: '我的项目',
        },
        component: () => import('../views/project.vue'),
      },
    ],
  },
  {
    path: '/message',
    name: 'message',
    meta: {
      auth: true,
      title: '留言板',
    },
    component: () => import('../views/message.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录/注册',
    },
    component: () => import('../views/login.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      if (localStorage.getItem('IS_LOGIN') === 'login') {
        new Vue({}).$showMessage(
          { type: 'warn', content: '已经登录过啦！即将跳转回首页' },
          () => {
            next('/');
          }
        );
      } else {
        next();
      }
    },
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      title: '用户信息',
    },
    component: () => import('../views/user.vue'),
  },
];

export default routes;
