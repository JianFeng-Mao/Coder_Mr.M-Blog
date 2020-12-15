import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/resume.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/message.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/blog.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
