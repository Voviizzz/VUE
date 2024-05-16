'use strict'
import { createApp } from 'vue'
//подключаем стили tailwind
import './assets/index.css'
import Vuelidate from 'vuelidate'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Toast)
app.use(Vuelidate)
app.mount('#app')
