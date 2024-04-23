'use strict'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
//подключаем стили tailwind
import './assets/index.css'
import Vuelidate from 'vuelidate'
import SettingView from './views/SettingView.vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import router from './router'

const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/HomeView.vue')
    },
    {
      path: '/setting',
      component: SettingView
      },
    {
       path: '/ads',
       component: () => import('./views/AdsView.vue')
    }
  ],
  history: createWebHistory()
})

<<<<<<< HEAD
=======
const app = createApp(App)
>>>>>>> c36eb78c4045252e892180f04786a92ca0c57a50
app.use(router)
app.use(Toast)
app.use(Vuelidate)
app.mount('#app')
