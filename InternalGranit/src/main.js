'use strict'
import { createApp } from 'vue'
//подключаем стили tailwind
import './assets/index.css'
import Vuelidate from 'vuelidate'

//подключаем плагин всплывающих окон Toast
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'

const app = createApp(App)

app.use(Toast)
app.use(Vuelidate)
app.mount('#app')
