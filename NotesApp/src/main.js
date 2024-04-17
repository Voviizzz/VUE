import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { useVuelidate } from '@vuelidate/core'

const app = createApp(App)
app.use(useVuelidate)
app.mount('#app')

