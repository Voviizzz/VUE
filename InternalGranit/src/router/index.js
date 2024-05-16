import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SettingView from '../views/SettingView.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/setting',
      component: SettingView
    },
    {
      path: '/ads',
      component: () => import('../views/AdsView.vue'),
      props: {default: true, sidebar: true}
    }
  ],
  history: createWebHistory()
})

export default router
