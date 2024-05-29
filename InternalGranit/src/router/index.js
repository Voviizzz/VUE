import { createRouter, createWebHistory } from 'vue-router'

// import HomeView from '../views/HomeView.vue
import SettingView from '../views/SettingView.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/ads',
      component: () => import('../views/AdsView.vue'),
      props: { default: true, sidebar: true }
    },
    {
      path: '/setting',
      component: () => import('../views/SettingView.vue')
    },
    {
      path: '/contact',
      component: () => import('../views/Contact.vue')
    }
  ],
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

export default router
